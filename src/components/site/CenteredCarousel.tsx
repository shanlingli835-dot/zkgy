import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { buttonVariants } from "@/components/ui/button-variants";
import { cn } from "@/lib/utils";
import "./CenteredCarousel.css";

export type CenteredCarouselItem = {
  id: string;
  image: { src: string; alt: string };
  title: string;
  description: string;
  cta?: { label: string; href: string };
};

export type CenteredCarouselProps = {
  items: CenteredCarouselItem[];
  /** 供屏幕阅读器使用的模块名称，不产生可见标题。 */
  label?: string;
};

/**
 * Adobe 风格居中横向轮播。
 * 主卡片居中，左右露出相邻卡片；Embla 负责 loop、对齐、拖拽与触摸，
 * 容器尺寸变化由 Embla 内置的 ResizeObserver 处理。
 * 规范：docs/design-system/components/centered-carousel.md
 */
export function CenteredCarousel({
  items,
  label = "产品亮点",
}: CenteredCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    containScroll: false,
    slidesToScroll: 1,
    // Embla 的 duration 为抽象单位（非毫秒），30 ≈ 600ms 的滚动时长。
    duration: 30,
  });
  const [selected, setSelected] = useState(0);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    if (!scrolling) return;
    // Keep controls usable if resize or drag interrupts Embla's settle event.
    const timeout = window.setTimeout(() => setScrolling(false), 1200);
    return () => window.clearTimeout(timeout);
  }, [scrolling]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
    const onSettle = () => setScrolling(false);
    emblaApi.on("select", onSelect);
    emblaApi.on("settle", onSettle);
    onSelect();
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("settle", onSettle);
    };
  }, [emblaApi]);

  const scrollPrev = useCallback(() => {
    if (!emblaApi || scrolling) return;
    setScrolling(true);
    emblaApi.scrollPrev();
  }, [emblaApi, scrolling]);

  const scrollNext = useCallback(() => {
    if (!emblaApi || scrolling) return;
    setScrolling(true);
    emblaApi.scrollNext();
  }, [emblaApi, scrolling]);

  return (
    <section className="ds-carousel" aria-label={label}>
      <h2 className="ds-carousel__sr-only">{label}</h2>

      <div
        ref={emblaRef}
        className="ds-carousel__viewport"
        role="region"
        aria-roledescription="轮播"
        aria-label={label}
      >
        <div className="ds-carousel__container">
          {items.map((item, index) => (
            <div
              key={item.id}
              className={cn(
                "ds-carousel__slide",
                index === selected && "is-selected",
              )}
              role="group"
              aria-roledescription="幻灯片"
              aria-label={`第 ${index + 1} 项，共 ${items.length} 项`}
            >
              <div className="ds-carousel__card">
                <img
                  className="ds-carousel__media"
                  src={item.image.src}
                  alt={item.image.alt}
                  loading="lazy"
                  width={1920}
                  height={840}
                />
                <div className="ds-carousel__scrim" aria-hidden />
                <div className="ds-carousel__dim" aria-hidden />
                <div className="ds-carousel__content">
                  <h3 className="ds-carousel__title">{item.title}</h3>
                  <p className="ds-carousel__desc">{item.description}</p>
                  {item.cta && (
                    <a
                      className={cn(
                        buttonVariants({ variant: "primary" }),
                        "ds-carousel__cta",
                      )}
                      href={item.cta.href}
                    >
                      {item.cta.label}
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        type="button"
        className="ds-carousel__arrow ds-carousel__arrow--prev"
        onClick={scrollPrev}
        aria-label="上一张"
      >
        <ArrowLeft size={20} aria-hidden />
      </button>
      <button
        type="button"
        className="ds-carousel__arrow ds-carousel__arrow--next"
        onClick={scrollNext}
        aria-label="下一张"
      >
        <ArrowRight size={20} aria-hidden />
      </button>

      <p className="ds-carousel__sr-only" role="status">
        第 {selected + 1} 张，共 {items.length} 张
      </p>
    </section>
  );
}
