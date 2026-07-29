"use client";

import * as React from "react";
import { AnimatePresence, motion, type Variants } from "framer-motion";

import { cn } from "@/lib/utils";

/* ---------------- AnimatedGroup ---------------- */

type PresetType =
  | "fade"
  | "slide"
  | "scale"
  | "blur"
  | "blur-slide"
  | "zoom"
  | "flip"
  | "bounce"
  | "rotate"
  | "swing";

type AnimatedGroupProps = {
  children: React.ReactNode;
  className?: string;
  variants?: {
    container?: Variants;
    item?: Variants;
  };
  preset?: PresetType;
};

const defaultContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const defaultItemVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const presetVariants: Record<
  PresetType,
  { container: Variants; item: Variants }
> = {
  fade: {
    container: defaultContainerVariants,
    item: { hidden: { opacity: 0 }, visible: { opacity: 1 } },
  },
  slide: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 },
    },
  },
  scale: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { opacity: 1, scale: 1 },
    },
  },
  blur: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, filter: "blur(4px)" },
      visible: { opacity: 1, filter: "blur(0px)" },
    },
  },
  "blur-slide": {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, filter: "blur(4px)", y: 20 },
      visible: { opacity: 1, filter: "blur(0px)", y: 0 },
    },
  },
  zoom: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, scale: 0.5 },
      visible: {
        opacity: 1,
        scale: 1,
        transition: { type: "spring", stiffness: 300, damping: 20 },
      },
    },
  },
  flip: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, rotateX: -90 },
      visible: {
        opacity: 1,
        rotateX: 0,
        transition: { type: "spring", stiffness: 300, damping: 20 },
      },
    },
  },
  bounce: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, y: -50 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { type: "spring", stiffness: 400, damping: 10 },
      },
    },
  },
  rotate: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, rotate: -180 },
      visible: {
        opacity: 1,
        rotate: 0,
        transition: { type: "spring", stiffness: 200, damping: 15 },
      },
    },
  },
  swing: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, rotate: -10 },
      visible: {
        opacity: 1,
        rotate: 0,
        transition: { type: "spring", stiffness: 300, damping: 8 },
      },
    },
  },
};

function AnimatedGroup({
  children,
  className,
  variants,
  preset,
}: AnimatedGroupProps) {
  const selectedVariants = preset
    ? presetVariants[preset]
    : { container: defaultContainerVariants, item: defaultItemVariants };
  const containerVariants = variants?.container || selectedVariants.container;
  const itemVariants = variants?.item || selectedVariants.item;

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className={className}
    >
      {React.Children.map(children, (child, index) => (
        <motion.div key={index} variants={itemVariants}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
}

export { AnimatedGroup };

/* ---------------- HeroPage ---------------- */

const defaultPreviewImage = {
  src: "/source-site/assets/secops-dashboard-placeholder.svg",
  alt: "Swift SCA 软件界面示意图",
};

export type HeroPageProps = {
  badge?: string;
  titleLeading: string;
  titleTrailing?: string;
  description: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  previewImage?: { src: string; alt: string };
  className?: string;
};

const transitionVariants = {
  item: {
    hidden: { opacity: 0, filter: "blur(12px)", y: 12 },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: { type: "spring", bounce: 0.3, duration: 1.5 },
    },
  },
} satisfies { item: Variants };

export default function HeroPage({
  badge,
  titleLeading,
  titleTrailing,
  description,
  primaryCta,
  secondaryCta,
  previewImage = defaultPreviewImage,
  className,
}: HeroPageProps) {
  return (
    <section
      className={cn(
        "relative isolate flex min-h-[700px] items-center overflow-hidden text-[color:var(--ds-color-text-inverse)]",
        className,
      )}
      style={{ backgroundColor: "var(--ds-color-surface-inverse)" }}
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(1000px 500px at 15% 20%, color-mix(in srgb, var(--ds-color-action-primary) 28%, transparent), transparent 60%), radial-gradient(800px 400px at 85% 80%, color-mix(in srgb, var(--ds-color-action-primary) 18%, transparent), transparent 60%)",
          }}
        />
      </div>

      {/* Hero Content */}
      <div className="mx-auto grid w-full max-w-[var(--ds-container-page)] grid-cols-1 items-center gap-[var(--ds-space-4xl)] px-[var(--ds-gutter-mobile)] py-[var(--ds-section-y-desktop)] md:px-[var(--ds-gutter-tablet)] lg:grid-cols-[minmax(0,1fr)_minmax(0,600px)] lg:px-[var(--ds-gutter-desktop)]">
        <AnimatedGroup variants={transitionVariants} className="w-full">
          {badge ? (
            <div className="mb-[var(--ds-space-lg)] flex">
              <span className="inline-flex items-center gap-[var(--ds-space-sm)] rounded-[var(--ds-radius-round)] border border-[color:var(--ds-color-border-inverse)] px-[var(--ds-space-md)] py-[var(--ds-space-xs)] text-sm text-[color:var(--ds-color-text-inverse-secondary)]">
                <span className="h-1.5 w-1.5 rounded-[var(--ds-radius-round)] bg-[color:var(--ds-color-text-inverse-secondary)]" />
                {badge}
              </span>
            </div>
          ) : null}

          <h1 className="text-balance text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
            {titleLeading}
            {titleTrailing ? (
              <>
                {" "}
                <span>{titleTrailing}</span>
              </>
            ) : null}
          </h1>

          <p className="mt-[var(--ds-space-xl)] max-w-2xl text-pretty text-base leading-relaxed text-[color:var(--ds-color-text-inverse-secondary)] sm:text-lg">
            {description}
          </p>

          {primaryCta || secondaryCta ? (
            <div className="mt-[var(--ds-space-2xl)] flex flex-col gap-[var(--ds-space-md)] sm:flex-row">
              {primaryCta ? (
                <a
                  href={primaryCta.href}
                  className="inline-flex min-h-[var(--ds-size-control-min)] items-center justify-center rounded-[var(--ds-radius-control)] bg-[color:var(--ds-color-action-primary)] px-[var(--ds-space-2xl)] py-[var(--ds-space-md)] text-sm font-semibold text-[color:var(--ds-color-action-primary-foreground)] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--ds-color-border-inverse)]"
                >
                  {primaryCta.label}
                </a>
              ) : null}
              {secondaryCta ? (
                <a
                  href={secondaryCta.href}
                  className="inline-flex min-h-[var(--ds-size-control-min)] items-center justify-center rounded-[var(--ds-radius-control)] border border-[color:var(--ds-color-border-inverse)] px-[var(--ds-space-2xl)] py-[var(--ds-space-md)] text-sm font-semibold text-[color:var(--ds-color-text-inverse)] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--ds-color-border-inverse)]"
                >
                  {secondaryCta.label}
                </a>
              ) : null}
            </div>
          ) : null}
        </AnimatedGroup>

        {previewImage ? (
          <motion.div
            initial={{ opacity: 0, filter: "blur(12px)", y: 12 }}
            animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            transition={{ type: "spring", bounce: 0.3, duration: 1.5, delay: 0.2 }}
            className="w-full max-w-[600px] justify-self-end"
            style={{ aspectRatio: "600 / 437.5" }}
          >
            <div className="h-full w-full overflow-hidden rounded-[var(--ds-radius-surface)] border border-[color:var(--ds-color-border-inverse)] bg-[color:var(--ds-color-surface-default)] p-[var(--ds-space-sm)]">
              <img
                src={previewImage.src}
                alt={previewImage.alt}
                loading="eager"
                className="h-full w-full rounded-[var(--ds-radius-control)] object-cover"
              />
            </div>
          </motion.div>
        ) : null}
      </div>
    </section>
  );
}
