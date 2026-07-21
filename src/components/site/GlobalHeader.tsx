import { useCallback, useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { useRouterState } from "@tanstack/react-router";

import { Button } from "@/components/ui/button";
import { Link } from "@/components/ui/link";
import { brand, primaryCta, primaryNav } from "@/content/navigation";
import { BrandLogo } from "./BrandLogo";
import { DesktopNavigation } from "./DesktopNavigation";
import { MobileMenu } from "./MobileMenu";

export function GlobalHeader() {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const [mobileOpen, setMobileOpen] = useState(false);
  const desktopItems = primaryNav.filter((group) => group.id !== "contact");
  const contactItem = primaryNav.find((group) => group.id === "contact");
  const closeMobileMenu = useCallback(() => setMobileOpen(false), []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <div
      data-mobile-open={mobileOpen || undefined}
      className="border-b-[length:var(--ds-border-width-default)] border-border bg-card"
    >
      <div className="mx-auto flex h-[var(--ds-size-header)] max-w-[var(--ds-container-page)] items-center justify-between gap-[var(--ds-space-lg)] px-[var(--ds-gutter-mobile)] md:px-[var(--ds-gutter-tablet)] lg:gap-[var(--ds-space-2xl)] lg:px-[var(--ds-gutter-desktop)]">
        <BrandMark />

        <div className="hidden min-w-0 flex-1 justify-center lg:flex">
          <DesktopNavigation currentPath={pathname} items={desktopItems} />
        </div>

        <div className="hidden shrink-0 items-center gap-[var(--ds-space-lg)] lg:flex">
          {contactItem?.href && (
            <Link
              to={contactItem.href}
              variant="navigation"
              className="min-h-[var(--ds-size-control-min)] px-[var(--ds-space-xs)] py-[var(--ds-space-sm)] font-medium"
            >
              {contactItem.label}
            </Link>
          )}
          <Link
            to={primaryCta.href}
            variant="standalone"
            className="min-h-[var(--ds-size-control-min)] items-center font-semibold"
          >
            {primaryCta.label}
          </Link>
        </div>

        <Button
          type="button"
          variant="tertiary"
          size="icon"
          aria-label={mobileOpen ? "关闭菜单" : "打开菜单"}
          aria-expanded={mobileOpen}
          aria-controls="site-mobile-menu"
          className="shrink-0 lg:hidden"
          onClick={() => setMobileOpen((current) => !current)}
        >
          {mobileOpen ? (
            <X aria-hidden="true" className="size-5" />
          ) : (
            <Menu aria-hidden="true" className="size-5" />
          )}
        </Button>
      </div>

      <MobileMenu
        id="site-mobile-menu"
        items={primaryNav}
        open={mobileOpen}
        pathname={pathname}
        primaryAction={primaryCta}
        onClose={closeMobileMenu}
      />
    </div>
  );
}

function BrandMark() {
  return (
    <Link
      to={brand.homeHref}
      variant="navigation"
      aria-label={`${brand.name} 首页`}
      className="min-h-[var(--ds-size-control-min)] shrink-0 items-center"
    >
      <BrandLogo variant="color" />
    </Link>
  );
}
