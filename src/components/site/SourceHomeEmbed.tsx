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
};


/**
 * Keeps the approved local homepage byte-for-byte intact while it is brought into
 * the Lovable-connected project. The source page remains editable under
 * public/source-site and is rendered at the canonical root route.
 */
export function SourceHomeEmbed({ hiddenSelectors = [], src = SOURCE_HOME_PATH, title = "中科固源官网首页" }: SourceHomeEmbedProps) {
  const frameRef = useRef<HTMLIFrameElement>(null);
  const observerRef = useRef<ResizeObserver | null>(null);
  const [height, setHeight] = useState("100vh");

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

    const nextHeight = Math.max(
      document.documentElement.scrollHeight,
      document.body?.scrollHeight ?? 0,
      window.innerHeight,
    );
    setHeight(`${nextHeight}px`);

    observerRef.current?.disconnect();
    observerRef.current = new ResizeObserver(() => {
      const updatedHeight = Math.max(
        document.documentElement.scrollHeight,
        document.body?.scrollHeight ?? 0,
        window.innerHeight,
      );
      setHeight(`${updatedHeight}px`);
    });
    observerRef.current.observe(document.documentElement);
  }, [hiddenSelectors]);

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
