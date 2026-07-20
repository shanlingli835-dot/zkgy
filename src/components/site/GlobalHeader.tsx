import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";

import { brand, primaryCta, primaryNav } from "@/content/navigation";
import { BrandLogo } from "./BrandLogo";
import { DesktopNavigation } from "./DesktopNavigation";
import { MobileMenu } from "./MobileMenu";

/**
 * GlobalHeader (Story 1.2)
 *
 * 桌面端：品牌 + 一级导航（含 hover/focus 展开二级）+ 主 CTA。
 * 移动端：品牌 + 汉堡按钮 → 打开 MobileMenu。
 *
 * 数据来源：src/content/navigation.ts（桌面与移动共享）。
 * 交互：
 * - 二级菜单支持鼠标 hover 与键盘 focus/blur 打开；点击链接、Esc、失焦均关闭。
 * - 焦点样式使用 tokens 定义的 primary，可见性 >= WCAG AA。
 */
export function GlobalHeader() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setMobileOpen(false);
      }
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div
      style={{
        position: "sticky",
        top: 0,
        zIndex: 40,
        backgroundColor: "var(--ds-color-surface-default)",
        borderBottom: "var(--ds-border-width-default) solid var(--ds-color-border-subtle)",
      }}
    >
      <div
        style={{
          maxWidth: "var(--ds-container-page)",
          margin: "0 auto",
          padding: "0 var(--ds-gutter-desktop)",
          height: "var(--ds-size-header)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "var(--ds-space-2xl)",
        }}
      >
        <BrandMark />

        <DesktopNavigation
          currentPath={pathname}
          items={primaryNav.filter((group) => group.id !== "contact")}
        />

        <div
          className="site-desktop-cta"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "var(--ds-space-md)",
          }}
        >
          <a
            href="/contact.html"
            style={{
              fontSize: "var(--ds-font-size-md)",
              color: "var(--ds-color-text-secondary)",
              textDecoration: "none",
            }}
          >
            联系我们
          </a>
          <a
            href={primaryCta.href}
            style={{
              display: "inline-flex",
              alignItems: "center",
              minHeight: "var(--ds-size-control-min)",
              padding: "var(--ds-space-md) var(--ds-space-xl)",
              backgroundColor: "var(--ds-color-action-primary)",
              color: "var(--ds-color-action-primary-foreground)",
              borderRadius: "var(--ds-radius-control)",
              fontSize: "var(--ds-font-size-md)",
              fontWeight: "var(--ds-font-weight-semibold)",
              textDecoration: "none",
            }}
          >
            {primaryCta.label}
          </a>
        </div>

        {/* 移动端汉堡 */}
        <button
          type="button"
          aria-label={mobileOpen ? "关闭菜单" : "打开菜单"}
          aria-expanded={mobileOpen}
          aria-controls="site-mobile-menu"
          onClick={() => setMobileOpen((v) => !v)}
          className="site-mobile-toggle"
          style={{
            display: "none",
            width: "var(--ds-size-control-min)",
            height: "var(--ds-size-control-min)",
            alignItems: "center",
            justifyContent: "center",
            border: "var(--ds-border-width-default) solid var(--ds-color-border-subtle)",
            borderRadius: "var(--ds-radius-control)",
            background: "transparent",
            cursor: "pointer",
          }}
        >
          <BurgerIcon open={mobileOpen} />
        </button>
      </div>

      <MobileMenu
        id="site-mobile-menu"
        open={mobileOpen}
        pathname={pathname}
        onClose={() => setMobileOpen(false)}
      />

      {/* 响应式：仅通过 CSS 切换桌面/移动布局，避免运行时抖动 */}
      <style>{`
        @media (max-width: 1023px) {
          .site-desktop-nav { display: none !important; }
          .site-desktop-cta { display: none !important; }
          .site-mobile-toggle { display: inline-flex !important; }
        }
        @media (max-width: 767px) {
          [data-site-slot="global-header"] > div > div:first-child {
            padding-left: var(--ds-gutter-mobile) !important;
            padding-right: var(--ds-gutter-mobile) !important;
          }
        }
      `}</style>
    </div>
  );
}

function BrandMark() {
  return (
    <Link
      to={brand.homeHref}
      style={{
        display: "inline-flex",
        alignItems: "center",
        textDecoration: "none",
        color: "var(--ds-color-text-primary)",
      }}
      aria-label={`${brand.name} 首页`}
    >
      <BrandLogo variant="color" height={40} />
    </Link>
  );
}

function BurgerIcon({ open }: { open: boolean }) {
  return (
    <svg width="20" height="16" viewBox="0 0 20 16" aria-hidden="true">
      {open ? (
        <g stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
          <line x1="3" y1="3" x2="17" y2="13" />
          <line x1="17" y1="3" x2="3" y2="13" />
        </g>
      ) : (
        <g stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
          <line x1="2" y1="3" x2="18" y2="3" />
          <line x1="2" y1="8" x2="18" y2="8" />
          <line x1="2" y1="13" x2="18" y2="13" />
        </g>
      )}
    </svg>
  );
}
