import { useEffect, useRef, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";

import {
  brand,
  primaryCta,
  primaryNav,
  type NavGroup,
  type NavLink,
} from "@/content/navigation";
import { BrandLogo } from "./BrandLogo";
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
  const [openGroupId, setOpenGroupId] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpenGroupId(null);
        setMobileOpen(false);
      }
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (!rootRef.current) return;
      if (!rootRef.current.contains(e.target as Node)) {
        setOpenGroupId(null);
      }
    }
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  return (
    <div
      ref={rootRef}
      style={{
        position: "sticky",
        top: 0,
        zIndex: 40,
        backgroundColor: "var(--zksc-surface-raised)",
        borderBottom: "1px solid var(--zksc-border-subtle)",
      }}
    >
      <div
        style={{
          maxWidth: "var(--zksc-content-max-width)",
          margin: "0 auto",
          padding: "0 var(--zksc-gutter-desktop)",
          height: 72,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "var(--zksc-space-6)",
        }}
      >
        <BrandMark />

        {/* 桌面端一级导航 */}
        <nav
          aria-label="主要导航"
          className="zksc-desktop-nav"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "var(--zksc-space-5)",
          }}
        >
          {primaryNav
            .filter((g) => g.id !== "contact")
            .map((group) => (
              <DesktopNavItem
                key={group.id}
                group={group}
                pathname={pathname}
                open={openGroupId === group.id}
                onOpen={() => setOpenGroupId(group.id)}
                onClose={() =>
                  setOpenGroupId((cur) => (cur === group.id ? null : cur))
                }
              />
            ))}
        </nav>

        <div
          className="zksc-desktop-cta"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "var(--zksc-space-3)",
          }}
        >
          <a
            href="/contact.html"
            style={{
              fontSize: "var(--zksc-font-size-body-md)",
              color: "var(--zksc-ink-secondary)",
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
              padding: "10px 18px",
              backgroundColor: "var(--zksc-primary)",
              color: "var(--zksc-primary-foreground)",
              borderRadius: "var(--zksc-radius-md)",
              fontSize: "var(--zksc-font-size-body-md)",
              fontWeight: 600,
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
          aria-controls="zksc-mobile-menu"
          onClick={() => setMobileOpen((v) => !v)}
          className="zksc-mobile-toggle"
          style={{
            display: "none",
            width: 44,
            height: 44,
            alignItems: "center",
            justifyContent: "center",
            border: "1px solid var(--zksc-border-subtle)",
            borderRadius: "var(--zksc-radius-md)",
            background: "transparent",
            cursor: "pointer",
          }}
        >
          <BurgerIcon open={mobileOpen} />
        </button>
      </div>

      <MobileMenu
        id="zksc-mobile-menu"
        open={mobileOpen}
        pathname={pathname}
        onClose={() => setMobileOpen(false)}
      />

      {/* 响应式：仅通过 CSS 切换桌面/移动布局，避免运行时抖动 */}
      <style>{`
        @media (max-width: 1023px) {
          .zksc-desktop-nav { display: none !important; }
          .zksc-desktop-cta { display: none !important; }
          .zksc-mobile-toggle { display: inline-flex !important; }
        }
        @media (max-width: 767px) {
          [data-zksc-slot="global-header"] > div > div:first-child {
            padding-left: var(--zksc-gutter-mobile) !important;
            padding-right: var(--zksc-gutter-mobile) !important;
          }
        }
        .zksc-nav-link:focus-visible,
        .zksc-nav-link:hover {
          color: var(--zksc-primary) !important;
        }
        .zksc-nav-link:focus-visible {
          outline: 2px solid var(--zksc-primary);
          outline-offset: 4px;
          border-radius: 2px;
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
        color: "var(--zksc-ink-primary)",
      }}
      aria-label={`${brand.name} 首页`}
    >
      <BrandLogo variant="color" height={40} />
    </Link>
  );
}

function DesktopNavItem({
  group,
  pathname,
  open,
  onOpen,
  onClose,
}: {
  group: NavGroup;
  pathname: string;
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
}) {
  const hasChildren = !!group.children?.length;
  const isActive =
    (group.href && pathname === group.href) ||
    !!group.children?.some((c) => pathname === c.href);

  return (
    <div
      onMouseEnter={hasChildren ? onOpen : undefined}
      onMouseLeave={hasChildren ? onClose : undefined}
      onFocus={hasChildren ? onOpen : undefined}
      onBlur={(e) => {
        if (
          hasChildren &&
          e.currentTarget &&
          !e.currentTarget.contains(e.relatedTarget as Node)
        ) {
          onClose();
        }
      }}
      style={{ position: "relative" }}
    >
      {group.href ? (
        <a
          href={group.href}
          className="zksc-nav-link"
          aria-current={isActive ? "page" : undefined}
          style={navTriggerStyle(isActive)}
        >
          {group.label}
        </a>
      ) : (
        <button
          type="button"
          className="zksc-nav-link"
          aria-expanded={open}
          aria-haspopup={hasChildren ? "menu" : undefined}
          style={{
            ...navTriggerStyle(isActive),
            background: "transparent",
            border: "none",
            cursor: hasChildren ? "pointer" : "default",
          }}
        >
          {group.label}
          {hasChildren && <Caret open={open} />}
        </button>
      )}

      {hasChildren && open && (
        <div
          role="menu"
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            marginTop: 8,
            minWidth: 260,
            backgroundColor: "var(--zksc-surface-raised)",
            border: "1px solid var(--zksc-border-subtle)",
            borderRadius: "var(--zksc-radius-lg)",
            boxShadow: "0 12px 32px rgba(20,24,28,0.08)",
            padding: "var(--zksc-space-2)",
          }}
        >
          {group.children!.map((child) => (
            <DesktopSubLink key={child.href} link={child} active={pathname === child.href} />
          ))}
        </div>
      )}
    </div>
  );
}

function DesktopSubLink({ link, active }: { link: NavLink; active: boolean }) {
  return (
    <a
      role="menuitem"
      href={link.href}
      className="zksc-nav-link"
      aria-current={active ? "page" : undefined}
      style={{
        display: "block",
        padding: "10px 12px",
        borderRadius: "var(--zksc-radius-sm)",
        fontSize: "var(--zksc-font-size-body-md)",
        color: active ? "var(--zksc-primary)" : "var(--zksc-ink-primary)",
        textDecoration: "none",
        whiteSpace: "nowrap",
      }}
    >
      {link.label}
    </a>
  );
}

function navTriggerStyle(active: boolean): React.CSSProperties {
  return {
    display: "inline-flex",
    alignItems: "center",
    gap: 4,
    padding: "8px 4px",
    fontSize: "var(--zksc-font-size-body-md)",
    fontWeight: 500,
    color: active ? "var(--zksc-primary)" : "var(--zksc-ink-primary)",
    textDecoration: "none",
  };
}

function Caret({ open }: { open: boolean }) {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 10 10"
      aria-hidden="true"
      style={{
        transition: "transform 160ms ease",
        transform: open ? "rotate(180deg)" : "rotate(0)",
      }}
    >
      <path d="M2 3.5 L5 6.5 L8 3.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
    </svg>
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
