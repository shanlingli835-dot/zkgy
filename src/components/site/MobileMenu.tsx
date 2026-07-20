import { useEffect, useState } from "react";

import { primaryCta, primaryNav, type NavGroup } from "@/content/navigation";

/**
 * MobileMenu (Story 1.2)
 *
 * 移动端折叠菜单，与桌面端共享 primaryNav 数据源。
 * 交互：
 * - 展开后按 Esc、再次点击汉堡、点击任意链接、点击遮罩均关闭。
 * - 二级分组本地 accordion 展开，单展开态。
 */
export function MobileMenu({
  id,
  open,
  pathname,
  onClose,
}: {
  id: string;
  open: boolean;
  pathname: string;
  onClose: () => void;
}) {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  useEffect(() => {
    if (!open) setExpandedId(null);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  if (!open) return null;

  return (
    <div
      id={id}
      role="dialog"
      aria-modal="true"
      aria-label="移动端菜单"
      style={{
        position: "fixed",
        inset: "var(--ds-size-header) 0 0 0",
        zIndex: 30,
        backgroundColor: "var(--ds-color-overlay)",
      }}
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          backgroundColor: "var(--ds-color-surface-default)",
          borderTop: "var(--ds-border-width-default) solid var(--ds-color-border-subtle)",
          maxHeight: "calc(100vh - var(--ds-size-header))",
          overflowY: "auto",
          padding: "var(--ds-space-lg) var(--ds-gutter-mobile) var(--ds-space-2xl)",
        }}
      >
        <nav aria-label="移动端导航">
          {primaryNav.map((group) => (
            <MobileNavGroup
              key={group.id}
              group={group}
              pathname={pathname}
              expanded={expandedId === group.id}
              onToggle={() => setExpandedId((cur) => (cur === group.id ? null : group.id))}
              onNavigate={onClose}
            />
          ))}
        </nav>

        <a
          href={primaryCta.href}
          onClick={onClose}
          style={{
            display: "block",
            marginTop: "var(--ds-space-xl)",
            minHeight: "var(--ds-size-control-min)",
            padding: "var(--ds-space-md) var(--ds-space-lg)",
            textAlign: "center",
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
    </div>
  );
}

function MobileNavGroup({
  group,
  pathname,
  expanded,
  onToggle,
  onNavigate,
}: {
  group: NavGroup;
  pathname: string;
  expanded: boolean;
  onToggle: () => void;
  onNavigate: () => void;
}) {
  const hasChildren = !!group.children?.length;
  const isActive =
    (group.href && pathname === group.href) || !!group.children?.some((c) => pathname === c.href);

  const rowStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    padding: "var(--ds-space-md) var(--ds-space-xs)",
    fontSize: "var(--ds-font-size-lg)",
    fontWeight: "var(--ds-font-weight-semibold)",
    color: isActive ? "var(--ds-color-action-primary)" : "var(--ds-color-text-primary)",
    background: "transparent",
    border: "none",
    borderTop: "none",
    borderLeft: "none",
    borderRight: "none",
    borderBottom: "var(--ds-border-width-default) solid var(--ds-color-border-subtle)",
    textAlign: "left",
    textDecoration: "none",
    cursor: hasChildren ? "pointer" : "default",
  };

  return (
    <div>
      {hasChildren ? (
        <button type="button" aria-expanded={expanded} onClick={onToggle} style={rowStyle}>
          <span>{group.label}</span>
          <span
            aria-hidden="true"
            style={{
              transition: "transform var(--ds-duration-normal) var(--ds-ease-standard)",
              transform: expanded ? "rotate(180deg)" : "rotate(0)",
              color: "var(--ds-color-text-secondary)",
            }}
          >
            ▾
          </span>
        </button>
      ) : (
        <a href={group.href!} onClick={onNavigate} style={rowStyle}>
          {group.label}
        </a>
      )}

      {hasChildren && expanded && (
        <ul
          style={{
            listStyle: "none",
            margin: 0,
            padding: "var(--ds-space-sm) 0 var(--ds-space-md) var(--ds-space-md)",
          }}
        >
          {group.children!.map((child) => {
            const active = pathname === child.href;
            return (
              <li key={child.href}>
                <a
                  href={child.href}
                  onClick={onNavigate}
                  aria-current={active ? "page" : undefined}
                  style={{
                    display: "block",
                    padding: "var(--ds-space-md) var(--ds-space-xs)",
                    fontSize: "var(--ds-font-size-md)",
                    color: active
                      ? "var(--ds-color-action-primary)"
                      : "var(--ds-color-text-secondary)",
                    textDecoration: "none",
                  }}
                >
                  {child.label}
                </a>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
