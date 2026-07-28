import { useCallback, useEffect, useRef, useState } from "react";

const SOURCE_HOME_PATH = "/source-site/index.html";

type SourceHomeEmbedProps = {
  /**
   * Optional selectors to hide inside the source document when React owns that
   * region during migration. The source file itself remains untouched.
   */
  hiddenSelectors?: string[];
  /** Override the iframe source path (defaults to the approved homepage). */
  src?: string;
  /** Override the iframe accessible title. */
  title?: string;
  /**
   * When true, the iframe height tracks only the visible content height
   * (no viewport-height floor). Used when the embed renders just the footer.
   */
  fitContent?: boolean;
};


/**
 * Keeps the approved local homepage byte-for-byte intact while it is brought into
 * the Lovable-connected project. The source page remains editable under
 * public/source-site and is rendered at the canonical root route.
 */
export function SourceHomeEmbed({ hiddenSelectors = [], src = SOURCE_HOME_PATH, title = "中科固源官网首页", fitContent = false }: SourceHomeEmbedProps) {
  const frameRef = useRef<HTMLIFrameElement>(null);
  const observerRef = useRef<ResizeObserver | null>(null);
  const [height, setHeight] = useState(fitContent ? "0px" : "100vh");

  const syncFrame = useCallback(() => {
    const frame = frameRef.current;
    const document = frame?.contentDocument;
    if (!frame || !document) return;

    document.querySelectorAll<HTMLAnchorElement>("a[href]").forEach((link) => {
      link.target = "_top";
      // Normalize placeholder contact CTA to the canonical /contact.html route.
      const href = link.getAttribute("href");
      if (href === "mailto:contact@pathguard.example") {
        link.setAttribute("href", "/contact.html");
      }
    });

    document.querySelectorAll<HTMLElement>("[data-source-home-hidden]").forEach((element) => {
      element.hidden = false;
      element.style.removeProperty("display");
      element.removeAttribute("data-source-home-hidden");
    });

    hiddenSelectors.forEach((selector) => {
      document.querySelectorAll<HTMLElement>(selector).forEach((element) => {
        element.hidden = true;
        element.style.setProperty("display", "none", "important");
        element.setAttribute("data-source-home-hidden", "true");
      });
    });

    const measure = () => {
      if (fitContent) {
        const body = document.body;
        if (!body) return 0;
        // Measure only the remaining visible content, ignoring any
        // viewport-height floor from the source page layout.
        const children = Array.from(body.children) as HTMLElement[];
        const bottom = children.reduce((max, child) => {
          if (child.hidden || getComputedStyle(child).display === "none") return max;
          const rect = child.getBoundingClientRect();
          return Math.max(max, rect.bottom + body.scrollTop);
        }, 0);
        return Math.ceil(bottom);
      }
      return Math.max(
        document.documentElement.scrollHeight,
        document.body?.scrollHeight ?? 0,
        window.innerHeight,
      );
    };

    const apply = () => {
      const next = measure();
      if (next > 0) setHeight(`${next}px`);
    };

    apply();

    observerRef.current?.disconnect();
    observerRef.current = new ResizeObserver(apply);
    observerRef.current.observe(document.documentElement);
    if (document.body) observerRef.current.observe(document.body);
  }, [hiddenSelectors, fitContent]);

  useEffect(() => {
    const frame = frameRef.current;
    const handleResize = () => syncFrame();
    const handleLoad = () => syncFrame();

    frame?.addEventListener("load", handleLoad);
    syncFrame();

    const retryTimers = [
      window.setTimeout(syncFrame, 100),
      window.setTimeout(syncFrame, 500),
      window.setTimeout(syncFrame, 1200),
    ];

    window.addEventListener("resize", handleResize);
    return () => {
      frame?.removeEventListener("load", handleLoad);
      window.removeEventListener("resize", handleResize);
      retryTimers.forEach((timer) => window.clearTimeout(timer));
      observerRef.current?.disconnect();
    };
  }, [syncFrame]);

  return (
    <iframe
      ref={frameRef}
      src={src}
      title={title}

      onLoad={syncFrame}
      style={{
        border: 0,
        display: "block",
        height,
        width: "100%",
      }}
    />
  );
}
