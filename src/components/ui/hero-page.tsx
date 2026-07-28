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

const defaultImages = [
  "https://pub-940ccf6255b54fa799a9b01050e6c227.r2.dev/ruixen_moon.png",
  "https://pub-940ccf6255b54fa799a9b01050e6c227.r2.dev/ruixen_moon_2.png",
  "https://pub-940ccf6255b54fa799a9b01050e6c227.r2.dev/ruixen_hero_gradient.jpg",
];

export type HeroPageProps = {
  badge?: string;
  titleLeading: string;
  titleTrailing?: string;
  description: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  previewImage?: { src: string; alt: string };
  images?: string[];
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
  previewImage,
  images = defaultImages,
  className,
}: HeroPageProps) {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section
      className={cn(
        "relative isolate overflow-hidden bg-neutral-950 text-white",
        className,
      )}
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <AnimatePresence mode="sync">
          <motion.img
            key={images[currentIndex]}
            src={images[currentIndex]}
            alt=""
            aria-hidden
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.4, ease: "easeInOut" }}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-neutral-950/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/60 via-neutral-950/40 to-neutral-950" />
      </div>

      {/* Hero Content */}
      <div className="mx-auto flex max-w-5xl flex-col items-center px-6 pt-28 pb-20 text-center sm:pt-36">
        <AnimatedGroup variants={transitionVariants} className="w-full">
          {badge ? (
            <div className="mb-8 flex justify-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-medium tracking-wide text-white/90 backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-white/80" />
                {badge}
              </span>
            </div>
          ) : null}

          <h1 className="text-balance text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl">
            {titleLeading}
            {titleTrailing ? (
              <>
                {" "}
                <span className="bg-gradient-to-r from-white via-white/80 to-white/50 bg-clip-text text-transparent">
                  {titleTrailing}
                </span>
              </>
            ) : null}
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-white/70 sm:text-lg">
            {description}
          </p>

          {primaryCta || secondaryCta ? (
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              {primaryCta ? (
                <a
                  href={primaryCta.href}
                  className="inline-flex h-11 min-w-[9rem] items-center justify-center rounded-lg bg-white px-8 text-sm font-semibold text-neutral-950 transition-colors hover:bg-white/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  {primaryCta.label}
                </a>
              ) : null}
              {secondaryCta ? (
                <a
                  href={secondaryCta.href}
                  className="inline-flex h-11 min-w-[9rem] items-center justify-center rounded-lg border border-white/25 bg-white/5 px-8 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  {secondaryCta.label}
                </a>
              ) : null}
            </div>
          ) : null}

          {previewImage ? (
            <div className="mt-16 w-full">
              <div className="relative mx-auto max-w-4xl rounded-2xl border border-white/15 bg-white/5 p-2 shadow-2xl shadow-black/40 backdrop-blur">
                <img
                  src={previewImage.src}
                  alt={previewImage.alt}
                  loading="lazy"
                  className="w-full rounded-xl object-cover"
                />
              </div>
            </div>
          ) : null}
        </AnimatedGroup>
      </div>
    </section>
  );
}
