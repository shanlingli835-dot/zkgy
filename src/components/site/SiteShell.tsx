import type { ReactNode } from "react";

/**
 * SiteShell (Story 1.1)
 *
 * 全站页面外壳，提供：
 * - 一致的字体栈、底色、正文颜色（来自 tokens.css）
 * - 语义化 header / main / footer 结构
 * - 可跳过链接（accessibility floor）
 *
 * Story 1.1 仅提供最小结构：
 * - <SiteShell.Header /> 与 <SiteShell.Footer /> 的实际内容由 Story 1.2
 *   实现的 GlobalHeader / GlobalFooter 填入。
 * - 不承担任何页面级文案；页面文案由 typed content records 提供（AD-4）。
 */
export function SiteShell({
  header,
  footer,
  children,
}: {
  header?: ReactNode;
  footer?: ReactNode;
  children: ReactNode;
}) {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "var(--zksc-surface-base)",
        color: "var(--zksc-ink-primary)",
        fontFamily: "var(--zksc-font-sans)",
        fontSize: "var(--zksc-font-size-body-md)",
        lineHeight: "var(--zksc-line-height-body)",
        letterSpacing: "var(--zksc-letter-spacing)",
        WebkitFontSmoothing: "antialiased",
      }}
    >
      <a
        href="#site-main"
        style={{
          position: "absolute",
          left: "-9999px",
          top: 0,
        }}
        onFocus={(e) => {
          e.currentTarget.style.left = "16px";
          e.currentTarget.style.top = "16px";
          e.currentTarget.style.background = "var(--zksc-surface-raised)";
          e.currentTarget.style.padding = "8px 12px";
          e.currentTarget.style.zIndex = "100";
        }}
        onBlur={(e) => {
          e.currentTarget.style.left = "-9999px";
        }}
      >
        跳到主要内容
      </a>

      <header data-zksc-slot="global-header">{header ?? null}</header>

      <main id="site-main" style={{ flex: 1 }}>
        {children}
      </main>

      <footer data-zksc-slot="global-footer">{footer ?? null}</footer>
    </div>
  );
}
