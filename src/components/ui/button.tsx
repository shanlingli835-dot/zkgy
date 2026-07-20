import * as React from "react";

import { cn } from "@/lib/utils";
import { buttonVariants, type ButtonVariantProps } from "@/components/ui/button-variants";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>, ButtonVariantProps {
  /** Prevents repeat activation and exposes the operation as busy. */
  loading?: boolean;
  /** Optional visible label while loading. Keep it short and action-specific. */
  loadingText?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      "aria-label": ariaLabel,
      children,
      className,
      disabled,
      loading = false,
      loadingText,
      size,
      type = "button",
      variant,
      ...props
    },
    ref,
  ) => {
    const isIconOnly = size === "icon";

    return (
      <button
        ref={ref}
        {...props}
        type={type}
        aria-busy={loading || undefined}
        aria-label={ariaLabel}
        className={cn(buttonVariants({ variant, size, className }))}
        data-loading={loading || undefined}
        disabled={disabled || loading}
      >
        {loading ? (
          <>
            <span
              aria-hidden="true"
              className="size-4 shrink-0 animate-spin rounded-full border-2 border-current border-r-transparent [animation-duration:calc(var(--ds-duration-slow)*4)] motion-reduce:animate-none"
            />
            {isIconOnly ? (
              <span className="sr-only">{loadingText ?? "正在处理"}</span>
            ) : (
              (loadingText ?? children)
            )}
          </>
        ) : (
          children
        )}
      </button>
    );
  },
);
Button.displayName = "Button";

export { Button };
