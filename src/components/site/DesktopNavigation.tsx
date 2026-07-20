import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

import { Link } from "@/components/ui/link";
import { cn } from "@/lib/utils";
import type { NavGroup, NavLink } from "@/content/navigation";

export interface DesktopNavigationProps {
  currentPath: string;
  items: NavGroup[];
  ariaLabel?: string;
}

export function DesktopNavigation({
  ariaLabel = "主要导航",
  currentPath,
  items,
}: DesktopNavigationProps) {
  const [openGroupId, setOpenGroupId] = useState<string | null>(null);
  const rootRef = useRef<HTMLElement>(null);
  const triggerRefs = useRef(new Map<string, HTMLButtonElement>());

  useEffect(() => {
    function closeFromOutside(event: PointerEvent) {
      if (rootRef.current && !rootRef.current.contains(event.target as Node)) {
        setOpenGroupId(null);
      }
    }

    document.addEventListener("pointerdown", closeFromOutside);
    return () => document.removeEventListener("pointerdown", closeFromOutside);
  }, []);

  useEffect(() => {
    function closeWithEscape(event: KeyboardEvent) {
      if (event.key !== "Escape" || !openGroupId) return;
      event.preventDefault();
      const trigger = triggerRefs.current.get(openGroupId);
      setOpenGroupId(null);
      trigger?.focus();
    }

    document.addEventListener("keydown", closeWithEscape);
    return () => document.removeEventListener("keydown", closeWithEscape);
  }, [openGroupId]);

  return (
    <nav ref={rootRef} aria-label={ariaLabel} className="site-desktop-nav flex items-center">
      <ul className="m-0 flex list-none items-center gap-[var(--ds-space-xl)] p-0">
        {items.map((group) => {
          const hasChildren = Boolean(group.children?.length);
          const isOpen = openGroupId === group.id;
          const isCurrent = groupContainsPath(group, currentPath);

          if (!hasChildren && !group.href) return null;

          return (
            <li
              key={group.id}
              className="relative"
              onMouseEnter={hasChildren ? () => setOpenGroupId(group.id) : undefined}
              onMouseLeave={hasChildren ? () => setOpenGroupId(null) : undefined}
              onBlur={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget as Node)) {
                  setOpenGroupId((current) => (current === group.id ? null : current));
                }
              }}
            >
              {hasChildren ? (
                <button
                  ref={(node) => {
                    if (node) triggerRefs.current.set(group.id, node);
                    else triggerRefs.current.delete(group.id);
                  }}
                  type="button"
                  aria-controls={`desktop-navigation-panel-${group.id}`}
                  aria-expanded={isOpen}
                  className={cn(
                    "inline-flex min-h-[var(--ds-size-control-min)] cursor-pointer items-center gap-[var(--ds-space-xs)] border-0 border-b-[length:var(--ds-border-width-accent)] border-solid border-b-transparent bg-transparent px-[var(--ds-space-xs)] py-[var(--ds-space-sm)] font-sans text-[length:var(--ds-font-size-md)] leading-[var(--ds-line-height-md)] font-medium text-link-navigation transition-[border-color,color] duration-[var(--ds-duration-fast)] ease-[var(--ds-ease-standard)]",
                    (isOpen || isCurrent) &&
                      "border-b-navigation-accent-active text-link-navigation-active hover:border-b-navigation-accent-active hover:text-link-navigation-active",
                    !isOpen &&
                      !isCurrent &&
                      "hover:border-b-navigation-accent-hover hover:text-link-navigation-hover",
                  )}
                  onClick={() => {
                    setOpenGroupId((current) => (current === group.id ? null : group.id));
                  }}
                >
                  {group.label}
                  <ChevronDown
                    aria-hidden="true"
                    className={cn(
                      "size-4 shrink-0 transition-transform duration-[var(--ds-duration-normal)] ease-[var(--ds-ease-standard)] motion-reduce:transition-none",
                      isOpen && "rotate-180",
                    )}
                  />
                </button>
              ) : (
                <Link
                  to={group.href!}
                  variant="navigation"
                  aria-current={isCurrent ? "page" : undefined}
                  className="min-h-[var(--ds-size-control-min)] px-[var(--ds-space-xs)] py-[var(--ds-space-sm)] font-medium"
                >
                  {group.label}
                </Link>
              )}

              {hasChildren && isOpen && (
                <div className="absolute left-1/2 top-full z-[var(--ds-z-navigation)] -translate-x-1/2 pt-[var(--ds-space-sm)]">
                  <div
                    id={`desktop-navigation-panel-${group.id}`}
                    aria-label={`${group.label}子导航`}
                    className={cn(
                      "max-w-[calc(100vw-var(--ds-gutter-tablet)*2)] rounded-[var(--ds-radius-surface)] border border-border bg-card p-[var(--ds-space-2xl)] shadow-md",
                      group.children!.length > 6
                        ? "min-w-[calc(var(--ds-size-menu-min)*2)]"
                        : "min-w-[var(--ds-size-menu-min)]",
                    )}
                  >
                    <ul
                      className={cn(
                        "m-0 grid list-none gap-[var(--ds-space-sm)] p-0",
                        group.children!.length > 6 && "grid-cols-2",
                      )}
                    >
                      {group.children!.map((link) => (
                        <DesktopNavigationLink
                          key={link.href}
                          active={currentPath === link.href}
                          link={link}
                          onNavigate={() => setOpenGroupId(null)}
                        />
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

function DesktopNavigationLink({
  active,
  link,
  onNavigate,
}: {
  active: boolean;
  link: NavLink;
  onNavigate: () => void;
}) {
  return (
    <li>
      <Link
        to={link.href}
        variant="navigation"
        aria-current={active ? "page" : undefined}
        className="flex min-h-[var(--ds-size-control-min)] w-full items-start rounded-[var(--ds-radius-control)] px-[var(--ds-space-md)] py-[var(--ds-space-sm)] hover:bg-tertiary-hover focus-visible:bg-tertiary-hover"
        onClick={onNavigate}
      >
        <span className="min-w-0">
          <span className="block leading-[var(--ds-line-height-md)]">{link.label}</span>
          {link.description && (
            <span className="mt-[var(--ds-space-xs)] block text-[length:var(--ds-font-size-sm)] leading-[var(--ds-line-height-sm)] font-normal text-muted-foreground">
              {link.description}
            </span>
          )}
        </span>
      </Link>
    </li>
  );
}

function groupContainsPath(group: NavGroup, currentPath: string) {
  return (
    group.href === currentPath || Boolean(group.children?.some((link) => link.href === currentPath))
  );
}
