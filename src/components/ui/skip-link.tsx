type SkipLinkProps = {
  targetId: string;
  children: string;
};

export function SkipLink({ children, targetId }: SkipLinkProps) {
  return (
    <a
      href={`#${targetId}`}
      className="sr-only focus:not-sr-only focus:fixed focus:top-[var(--ds-size-header)] focus:left-[var(--ds-gutter-mobile)] focus:z-[var(--ds-z-navigation)] focus:inline-flex focus:min-h-[var(--ds-size-control-min)] focus:items-center focus:rounded-[var(--ds-radius-control)] focus:border focus:border-border focus:bg-card focus:px-[var(--ds-space-lg)] focus:py-[var(--ds-space-sm)] focus:text-foreground"
    >
      {children}
    </a>
  );
}
