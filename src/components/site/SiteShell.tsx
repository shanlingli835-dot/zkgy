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
        backgroundColor: "var(--ds-color-canvas)",
        color: "var(--ds-color-text-primary)",
        fontFamily: "var(--ds-font-family-sans)",
        fontSize: "var(--ds-font-size-md)",
        lineHeight: "var(--ds-line-height-md)",
        letterSpacing: "var(--ds-letter-spacing-default)",
        WebkitFontSmoothing: "antialiased",
      }}
    >
      <a href="#site-main" className="site-skip-link">
        跳到主要内容
      </a>

      <style>{`
        .site-skip-link {
          position: absolute;
          left: var(--ds-space-lg);
          top: var(--ds-space-lg);
          z-index: 100;
          transform: translateY(-200%);
          padding: var(--ds-space-sm) var(--ds-space-md);
          border: var(--ds-border-width-default) solid var(--ds-color-border-default);
          border-radius: var(--ds-radius-control);
          background: var(--ds-color-surface-default);
          color: var(--ds-color-text-primary);
          transition: transform var(--ds-duration-fast) var(--ds-ease-standard);
        }
        .site-skip-link:focus {
          transform: translateY(0);
        }
      `}</style>

      <header data-site-slot="global-header">{header ?? null}</header>

      <main id="site-main" style={{ flex: 1 }}>
        {children}
      </main>

      <footer data-site-slot="global-footer">{footer ?? null}</footer>
    </div>
  );
}
