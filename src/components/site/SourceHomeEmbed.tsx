import { useCallback, useEffect, useRef, useState } from "react";

const SOURCE_HOME_PATH = "/source-site/index.html";

type SourceHomeEmbedProps = {
  /**
   * Optional selectors to hide inside the source document when React owns that
   * region during migration. The source file itself remains untouched.
   */
  hiddenSelectors?: string[];
};

/**
 * Keeps the approved local homepage byte-for-byte intact while it is brought into
 * the Lovable-connected project. The source page remains editable under
 * public/source-site and is rendered at the canonical root route.
 */
export function SourceHomeEmbed({ hiddenSelectors = [] }: SourceHomeEmbedProps) {
  const frameRef = useRef<HTMLIFrameElement>(null);
  const observerRef = useRef<ResizeObserver | null>(null);
  const [height, setHeight] = useState("100vh");

  const syncFrame = useCallback(() => {
    const frame = frameRef.current;
    const document = frame?.contentDocument;
    if (!frame || !document) return;

    document.querySelectorAll<HTMLAnchorElement>("a[href]").forEach((link) => {
      link.target = "_top";
    });

    const existingMigrationStyle = document.getElementById("source-home-migration-style");
    existingMigrationStyle?.remove();

    if (hiddenSelectors.length > 0) {
      const style = document.createElement("style");
      style.id = "source-home-migration-style";
      style.textContent = `${hiddenSelectors.join(",")} { display: none !important; }`;
      document.head.appendChild(style);
    }

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
      src={SOURCE_HOME_PATH}
      title="中科固源官网首页"
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
