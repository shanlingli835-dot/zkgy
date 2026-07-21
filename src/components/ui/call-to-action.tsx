import * as React from "react";
import { createLink } from "@tanstack/react-router";

import { buttonVariants } from "@/components/ui/button-variants";
import { cn } from "@/lib/utils";

type CallToActionHierarchy = "primary" | "secondary";
type CallToActionTone = "default" | "marketing-band";

interface CallToActionAnchorProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  hierarchy?: CallToActionHierarchy;
  tone?: CallToActionTone;
  newTabLabel?: string;
}

const CallToActionAnchor = React.forwardRef<HTMLAnchorElement, CallToActionAnchorProps>(
  (
    {
      children,
      className,
      hierarchy = "primary",
      newTabLabel = "（在新标签页打开）",
      rel,
      target,
      tone = "default",
      ...props
    },
    ref,
  ) => {
    const opensNewTab = target === "_blank";

    return (
      <a
        ref={ref}
        {...props}
        className={cn(
          tone === "marketing-band" &&
            "[--ds-color-action-primary:var(--ds-color-action-band)] [--ds-color-action-primary-active:var(--ds-color-action-band-active)] [--ds-color-action-primary-hover:var(--ds-color-action-band-hover)]",
          buttonVariants({ variant: hierarchy, className }),
        )}
        rel={opensNewTab ? secureNewTabRel(rel) : rel}
        target={target}
      >
        {children}
        {opensNewTab && <span className="sr-only">{newTabLabel}</span>}
      </a>
    );
  },
);
CallToActionAnchor.displayName = "CallToActionAnchor";

function secureNewTabRel(rel: string | undefined) {
  const values = new Set(rel?.split(/\s+/).filter(Boolean));
  values.add("noopener");
  values.add("noreferrer");
  return [...values].join(" ");
}

const CallToAction = createLink(CallToActionAnchor);
type CallToActionProps = React.ComponentProps<typeof CallToAction>;

export { CallToAction, type CallToActionProps };
