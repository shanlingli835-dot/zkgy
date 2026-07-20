import * as React from "react";
import { createLink } from "@tanstack/react-router";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const linkVariants = cva(
  "max-w-full break-words rounded-[var(--ds-radius-control)] transition-[color,text-decoration-color,text-underline-offset] duration-[var(--ds-duration-fast)] ease-[var(--ds-ease-standard)] focus-visible:[outline-color:var(--ds-color-focus)]",
  {
    variants: {
      variant: {
        inline:
          "text-link underline decoration-link-underline decoration-dashed decoration-[length:var(--ds-border-width-default)] underline-offset-[var(--ds-space-link-underline-default)] visited:text-link-visited hover:text-link-hover hover:decoration-link-hover hover:underline-offset-[var(--ds-space-link-underline-hover)] focus-visible:text-link-hover active:text-link-active [&:visited:hover]:text-link-visited-hover [&:visited:hover]:decoration-link-visited-hover",
        standalone:
          "inline-flex items-baseline gap-[var(--ds-space-lg)] text-link no-underline visited:text-link-visited hover:text-link-hover hover:underline hover:decoration-link-hover hover:decoration-solid hover:decoration-[length:var(--ds-border-width-default)] hover:underline-offset-[var(--ds-space-link-underline-hover)] focus-visible:text-link-hover active:text-link-active [&:visited:hover]:text-link-visited-hover [&:visited:hover]:decoration-link-visited-hover",
        navigation:
          "inline-flex items-center text-link-navigation no-underline hover:text-link-navigation-hover focus-visible:text-link-navigation-hover active:text-link-active data-[status=active]:font-medium data-[status=active]:text-link-navigation-active",
      },
      tone: {
        default: "",
        inverse: "focus-visible:[outline-color:var(--ds-color-link-inverse-focus)]",
      },
    },
    compoundVariants: [
      {
        variant: "inline",
        tone: "inverse",
        className:
          "text-link-inverse decoration-link-inverse-underline visited:text-link-inverse-visited hover:text-link-inverse-hover hover:decoration-link-inverse-hover focus-visible:text-link-inverse-hover active:text-link-inverse-active [&:visited:hover]:text-link-inverse-visited-hover [&:visited:hover]:decoration-link-inverse-visited-hover",
      },
      {
        variant: "standalone",
        tone: "inverse",
        className:
          "text-link-inverse visited:text-link-inverse-visited hover:text-link-inverse-hover hover:decoration-link-inverse-hover focus-visible:text-link-inverse-hover active:text-link-inverse-active [&:visited:hover]:text-link-inverse-visited-hover [&:visited:hover]:decoration-link-inverse-visited-hover",
      },
      {
        variant: "navigation",
        tone: "inverse",
        className:
          "text-link-navigation-inverse hover:text-link-navigation-inverse-hover focus-visible:text-link-navigation-inverse-hover active:text-link-inverse-active data-[status=active]:text-link-inverse",
      },
    ],
    defaultVariants: {
      variant: "inline",
      tone: "default",
    },
  },
);

type LinkStyleProps = VariantProps<typeof linkVariants>;

interface LinkAnchorProps extends React.AnchorHTMLAttributes<HTMLAnchorElement>, LinkStyleProps {
  /** Screen-reader text appended only when target="_blank". */
  newTabLabel?: string;
}

const LinkAnchor = React.forwardRef<HTMLAnchorElement, LinkAnchorProps>(
  (
    {
      children,
      className,
      newTabLabel = "（在新标签页打开）",
      rel,
      target,
      tone,
      variant,
      ...props
    },
    ref,
  ) => {
    const opensNewTab = target === "_blank";

    return (
      <a
        ref={ref}
        {...props}
        className={cn(linkVariants({ variant, tone, className }))}
        rel={opensNewTab ? secureNewTabRel(rel) : rel}
        target={target}
      >
        {children}
        {opensNewTab && <span className="sr-only">{newTabLabel}</span>}
      </a>
    );
  },
);
LinkAnchor.displayName = "LinkAnchor";

function secureNewTabRel(rel: string | undefined) {
  const values = new Set(rel?.split(/\s+/).filter(Boolean));
  values.add("noopener");
  values.add("noreferrer");
  return [...values].join(" ");
}

const Link = createLink(LinkAnchor);
type LinkProps = React.ComponentProps<typeof Link>;

export { Link, type LinkProps };
