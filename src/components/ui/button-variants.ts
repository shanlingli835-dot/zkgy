import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  "relative inline-flex min-h-[var(--ds-size-control-min)] max-w-full cursor-pointer select-none items-center justify-center gap-[var(--ds-space-sm)] whitespace-nowrap rounded-[var(--ds-radius-control)] border border-solid px-[var(--ds-space-lg)] py-[var(--ds-space-sm)] font-sans text-[length:var(--ds-font-size-md)] leading-[var(--ds-line-height-md)] font-medium transition-[background-color,border-color,color] duration-[var(--ds-duration-fast)] ease-[var(--ds-ease-standard)] disabled:pointer-events-none disabled:cursor-not-allowed disabled:border-action-disabled-border disabled:bg-action-disabled disabled:text-action-disabled-foreground [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary:
          "border-primary bg-primary text-primary-foreground hover:border-primary-hover hover:bg-primary-hover focus-visible:border-primary-hover focus-visible:bg-primary-hover active:border-primary-active active:bg-primary-active",
        secondary:
          "border-secondary-border bg-secondary text-secondary-foreground hover:border-secondary-hover-border hover:bg-secondary-hover hover:text-secondary-hover-foreground focus-visible:border-secondary-hover-border focus-visible:bg-secondary-hover focus-visible:text-secondary-hover-foreground active:border-secondary-active-border active:bg-secondary-active active:text-secondary-active-foreground",
        tertiary:
          "border-tertiary-border bg-tertiary text-tertiary-foreground hover:bg-tertiary-hover focus-visible:bg-tertiary-hover active:bg-tertiary-active",
        danger:
          "border-destructive bg-destructive text-destructive-foreground hover:border-destructive-hover hover:bg-destructive-hover focus-visible:border-destructive-hover focus-visible:bg-destructive-hover active:border-destructive-active active:bg-destructive-active",
      },
      size: {
        default: "min-w-fit",
        icon: "min-w-[var(--ds-size-control-min)] p-0",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

type ButtonVariantProps = VariantProps<typeof buttonVariants>;

export { buttonVariants, type ButtonVariantProps };
