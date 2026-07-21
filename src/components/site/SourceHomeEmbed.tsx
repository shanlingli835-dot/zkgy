import { useCallback, useEffect, useRef, useState } from "react";

const SOURCE_HOME_PATH = "/source-site/index.html";

/**
 * Keeps the approved local homepage byte-for-byte intact while it is brought into
 * the Lovable-connected project. The source page remains editable under
 * public/source-site and is rendered at the canonical root route.
 */
export function SourceHomeEmbed() {
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
  }, []);

  useEffect(() => {
    const handleResize = () => syncFrame();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
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
