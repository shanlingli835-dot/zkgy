import { useEffect, useRef, useState, type KeyboardEvent as ReactKeyboardEvent } from "react";
import { ChevronDown, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Link } from "@/components/ui/link";
import type { NavGroup, NavLink } from "@/content/navigation";
import { cn } from "@/lib/utils";

const FOCUSABLE_SELECTOR = [
  "a[href]",
  "button:not([disabled])",
  "input:not([disabled])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  '[tabindex]:not([tabindex="-1"])',
].join(",");

export interface MobileMenuProps {
  id: string;
  items: NavGroup[];
  open: boolean;
  pathname: string;
  onClose: () => void;
  ariaLabel?: string;
  primaryAction?: NavLink;
}

export function MobileMenu({
  ariaLabel = "移动端导航",
  id,
  items,
  onClose,
  open,
  pathname,
  primaryAction,
}: MobileMenuProps) {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);
  const titleId = `${id}-title`;

  useEffect(() => {
    if (!open) {
      setExpandedId(null);
      return;
    }

    previousFocusRef.current =
      document.activeElement instanceof HTMLElement ? document.activeElement : null;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();
    const desktopViewport = window.matchMedia("(min-width: 1024px)");

    function closeWithEscape(event: KeyboardEvent) {
      if (event.key !== "Escape") return;
      event.preventDefault();
      onClose();
    }

    function closeAtDesktop() {
      if (window.innerWidth >= 1024) onClose();
    }

    desktopViewport.addEventListener("change", closeAtDesktop);
    const viewportCheck = window.setInterval(closeAtDesktop, 250);
    document.addEventListener("keydown", closeWithEscape);
    closeAtDesktop();

    return () => {
      desktopViewport.removeEventListener("change", closeAtDesktop);
      window.clearInterval(viewportCheck);
      document.removeEventListener("keydown", closeWithEscape);
      document.body.style.overflow = previousOverflow;
      if (
        previousFocusRef.current?.isConnected &&
        previousFocusRef.current.getClientRects().length
      ) {
        previousFocusRef.current.focus();
      }
      previousFocusRef.current = null;
    };
  }, [onClose, open]);

  if (!open) return null;

  function trapFocus(event: ReactKeyboardEvent<HTMLDivElement>) {
    if (event.key !== "Tab") return;

    const focusable = Array.from(
      dialogRef.current?.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR) ?? [],
    ).filter((element) => !element.hidden && element.getAttribute("aria-hidden") !== "true");

    const first = focusable.at(0);
    const last = focusable.at(-1);
    if (!first || !last) return;

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }

  return (
    <div
      ref={dialogRef}
      id={id}
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      className="fixed inset-x-0 bottom-0 top-[var(--ds-size-header)] z-[var(--ds-z-navigation)] overflow-hidden bg-[var(--ds-color-overlay)]"
      onKeyDown={trapFocus}
      onPointerDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className="max-h-full overflow-y-auto border-t border-border bg-card px-[var(--ds-gutter-mobile)] pb-[var(--ds-space-2xl)]">
        <div className="sticky top-0 z-[var(--ds-z-navigation)] flex min-h-[var(--ds-size-control-min)] items-center justify-between border-b border-border bg-card py-[var(--ds-space-sm)]">
          <h2
            id={titleId}
            className="m-0 text-[length:var(--ds-font-size-lg)] leading-[var(--ds-line-height-lg)] font-semibold text-foreground"
          >
            {ariaLabel}
          </h2>
          <Button
            ref={closeButtonRef}
            variant="tertiary"
            size="icon"
            aria-label="关闭导航菜单"
            onClick={onClose}
          >
            <X aria-hidden="true" className="size-5" />
          </Button>
        </div>

        <nav aria-label={ariaLabel}>
          <ul className="m-0 list-none p-0">
            {items.map((group) => (
              <MobileNavigationGroup
                key={group.id}
                group={group}
                pathname={pathname}
                expanded={expandedId === group.id}
                onToggle={() => {
                  setExpandedId((current) => (current === group.id ? null : group.id));
                }}
                onNavigate={onClose}
              />
            ))}
          </ul>
        </nav>

        {primaryAction && (
          <div className="mt-[var(--ds-space-xl)] border-t border-border pt-[var(--ds-space-xl)]">
            <Link
              to={primaryAction.href}
              variant="standalone"
              onClick={onClose}
              className="min-h-[var(--ds-size-control-min)] w-full items-center justify-between py-[var(--ds-space-sm)] font-semibold"
            >
              {primaryAction.label}
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

function MobileNavigationGroup({
  expanded,
  group,
  onNavigate,
  onToggle,
  pathname,
}: {
  expanded: boolean;
  group: NavGroup;
  onNavigate: () => void;
  onToggle: () => void;
  pathname: string;
}) {
  const hasChildren = Boolean(group.children?.length);
  const isCurrent = groupContainsPath(group, pathname);
  const panelId = `mobile-navigation-panel-${group.id}`;
  const rowClassName = cn(
    "flex min-h-[var(--ds-size-control-min)] w-full items-center justify-between border-0 border-b border-l-[length:var(--ds-border-width-accent)] border-b-border border-l-transparent bg-transparent px-[var(--ds-space-md)] py-[var(--ds-space-md)] text-left text-[length:var(--ds-font-size-lg)] leading-[var(--ds-line-height-lg)] font-semibold text-link-navigation no-underline transition-[background-color,border-color,color] duration-[var(--ds-duration-fast)] ease-[var(--ds-ease-standard)] hover:bg-tertiary-hover hover:text-link-navigation-hover",
    (expanded || isCurrent) &&
      "border-l-navigation-accent-active text-link-navigation-active hover:text-link-navigation-active",
  );

  if (!hasChildren && !group.href) return null;

  return (
    <li>
      {hasChildren ? (
        <button
          type="button"
          aria-controls={panelId}
          aria-expanded={expanded}
          className={cn(rowClassName, "cursor-pointer")}
          onClick={onToggle}
        >
          <span>{group.label}</span>
          <ChevronDown
            aria-hidden="true"
            className={cn(
              "size-5 shrink-0 transition-transform duration-[var(--ds-duration-normal)] ease-[var(--ds-ease-standard)] motion-reduce:transition-none",
              expanded && "rotate-180",
            )}
          />
        </button>
      ) : (
        <Link
          to={group.href!}
          variant="navigation"
          aria-current={isCurrent ? "page" : undefined}
          className={rowClassName}
          onClick={onNavigate}
        >
          {group.label}
        </Link>
      )}

      {hasChildren && expanded && (
        <ul id={panelId} className="m-0 list-none bg-[var(--ds-color-surface-subtle)] p-0">
          {group.children!.map((child) => {
            const active = pathname === child.href;

            return (
              <li key={child.href}>
                <Link
                  to={child.href}
                  variant="navigation"
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "flex min-h-[var(--ds-size-control-min)] w-full items-center border-l-[length:var(--ds-border-width-accent)] border-l-transparent px-[var(--ds-space-xl)] py-[var(--ds-space-md)] text-[length:var(--ds-font-size-md)] leading-[var(--ds-line-height-md)] hover:bg-tertiary-hover",
                    active &&
                      "border-l-navigation-accent-active font-medium text-link-navigation-active",
                  )}
                  onClick={onNavigate}
                >
                  {child.label}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </li>
  );
}

function groupContainsPath(group: NavGroup, pathname: string) {
  return (
    group.href === pathname || Boolean(group.children?.some((child) => child.href === pathname))
  );
}
