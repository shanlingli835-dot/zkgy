import type { ReactNode } from "react";

import { SkipLink } from "@/components/ui/skip-link";

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
    <div className="flex min-h-screen flex-col bg-background font-sans text-foreground antialiased">
      <SkipLink targetId="site-main">跳到主要内容</SkipLink>

      <header
        data-site-slot="global-header"
        className="sticky top-[var(--ds-space-0)] z-[var(--ds-z-navigation)]"
      >
        {header ?? null}
      </header>

      <main id="site-main" className="flex-1">
        {children}
      </main>

      <footer data-site-slot="global-footer">{footer ?? null}</footer>
    </div>
  );
}
