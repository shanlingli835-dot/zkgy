import { useEffect, useState } from "react";

import {
  primaryCta,
  primaryNav,
  type NavGroup,
} from "@/content/navigation";

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
        inset: "72px 0 0 0",
        zIndex: 30,
        backgroundColor: "rgba(21,24,28,0.32)",
      }}
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          backgroundColor: "var(--zksc-surface-raised)",
          borderTop: "1px solid var(--zksc-border-subtle)",
          maxHeight: "calc(100vh - 72px)",
          overflowY: "auto",
          padding: "var(--zksc-space-4) var(--zksc-gutter-mobile) var(--zksc-space-6)",
        }}
      >
        <nav aria-label="移动端导航">
          {primaryNav.map((group) => (
            <MobileNavGroup
              key={group.id}
              group={group}
              pathname={pathname}
              expanded={expandedId === group.id}
              onToggle={() =>
                setExpandedId((cur) => (cur === group.id ? null : group.id))
              }
              onNavigate={onClose}
            />
          ))}
        </nav>

        <a
          href={primaryCta.href}
          onClick={onClose}
          style={{
            display: "block",
            marginTop: "var(--zksc-space-5)",
            padding: "14px 16px",
            textAlign: "center",
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
    (group.href && pathname === group.href) ||
    !!group.children?.some((c) => pathname === c.href);

  const rowStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    padding: "14px 4px",
    fontSize: "var(--zksc-font-size-body-lg)",
    fontWeight: 600,
    color: isActive ? "var(--zksc-primary)" : "var(--zksc-ink-primary)",
    borderBottom: "1px solid var(--zksc-border-subtle)",
    background: "transparent",
    border: "none",
    borderTop: "none",
    borderLeft: "none",
    borderRight: "none",
    textAlign: "left",
    textDecoration: "none",
    cursor: hasChildren ? "pointer" : "default",
  };

  return (
    <div>
      {hasChildren ? (
        <button
          type="button"
          aria-expanded={expanded}
          onClick={onToggle}
          style={rowStyle}
        >
          <span>{group.label}</span>
          <span
            aria-hidden="true"
            style={{
              transition: "transform 160ms ease",
              transform: expanded ? "rotate(180deg)" : "rotate(0)",
              color: "var(--zksc-ink-secondary)",
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
            padding: "var(--zksc-space-2) 0 var(--zksc-space-3) var(--zksc-space-3)",
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
                    padding: "10px 4px",
                    fontSize: "var(--zksc-font-size-body-md)",
                    color: active
                      ? "var(--zksc-primary)"
                      : "var(--zksc-ink-secondary)",
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
