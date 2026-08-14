import { useEffect, useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

export type GalleryHoverItem = {
  id: string;
  tag?: string;
  title: string;
  summary: string;
  url?: string;
  image?: string;
};

type Props = {
  eyebrow?: string;
  heading: string;
  description?: string;
  items: GalleryHoverItem[];
};

export function GalleryHoverCarousel({
  eyebrow,
  heading,
  description,
  items,
}: Props) {
  const [api, setApi] = useState<CarouselApi>();
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  useEffect(() => {
    if (!api) return;
    const update = () => {
      setCanPrev(api.canScrollPrev());
      setCanNext(api.canScrollNext());
    };
    update();
    api.on("select", update);
    api.on("reInit", update);
    return () => {
      api.off("select", update);
      api.off("reInit", update);
    };
  }, [api]);

  return (
    <section
      style={{ padding: "var(--ds-section-y-desktop) var(--ds-gutter-desktop)" }}
    >
      <div style={{ maxWidth: "var(--ds-container-page)", margin: "0 auto" }}>
        <div className="ds-ghc-head">
          <div style={{ maxWidth: 760 }}>
            {eyebrow ? (
              <p
                style={{
                  fontSize: "var(--ds-font-size-sm)",
                  fontWeight: "var(--ds-font-weight-semibold)",
                  letterSpacing: "0.08em",
                  color: "var(--ds-color-text-secondary)",
                  marginBottom: "var(--ds-space-sm)",
                }}
              >
                {eyebrow}
              </p>
            ) : null}
            <h2
              style={{
                fontSize: "clamp(1.875rem, 3.6vw, 2.75rem)",
                fontWeight: "var(--ds-font-weight-semibold)",
                lineHeight: 1.2,
                color: "var(--ds-color-text-primary)",
              }}
            >
              {heading}
            </h2>
            {description ? (
              <p
                style={{
                  marginTop: "var(--ds-space-md)",
                  color: "var(--ds-color-text-secondary)",
                  fontSize: "var(--ds-font-size-md)",
                  lineHeight: 1.6,
                }}
              >
                {description}
              </p>
            ) : null}
          </div>

          <div className="ds-ghc-nav">
            <button
              type="button"
              aria-label="上一组业务场景"
              onClick={() => api?.scrollPrev()}
              disabled={!canPrev}
              className="ds-ghc-navbtn"
            >
              <ChevronLeft size={18} aria-hidden />
            </button>
            <button
              type="button"
              aria-label="下一组业务场景"
              onClick={() => api?.scrollNext()}
              disabled={!canNext}
              className="ds-ghc-navbtn"
            >
              <ChevronRight size={18} aria-hidden />
            </button>
          </div>
        </div>

        <Carousel
          setApi={setApi}
          opts={{ align: "start" }}
          style={{ marginTop: "var(--ds-space-3xl)" }}
        >
          <CarouselContent className="-ml-4">
            {items.map((item, index) => (
              <CarouselItem
                key={item.id}
                className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
              >
                <article className="ds-ghc-card">
                  <div
                    className="ds-ghc-media"
                    style={
                      item.image
                        ? { backgroundImage: `url(${item.image})` }
                        : {
                            backgroundImage: `linear-gradient(140deg, hsl(${
                              (index * 47) % 360
                            } 38% 26%), hsl(${(index * 47 + 40) % 360} 44% 44%))`,
                          }
                    }
                  >
                    {item.tag ? (
                      <span className="ds-ghc-tag">{item.tag}</span>
                    ) : null}
                    <span className="ds-ghc-fade" aria-hidden />
                    <h3 className="ds-ghc-overlay-title">{item.title}</h3>
                  </div>

                  <div className="ds-ghc-body">
                    <h3 className="ds-ghc-title">{item.title}</h3>
                    <p className="ds-ghc-summary">{item.summary}</p>
                    {item.url ? (
                      <a className="ds-ghc-link" href={item.url}>
                        了解更多
                        <ArrowRight size={16} aria-hidden />
                      </a>
                    ) : null}
                  </div>
                </article>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      <style>{`
        .ds-ghc-head {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: var(--ds-space-2xl);
          flex-wrap: wrap;
        }
        .ds-ghc-nav { display: flex; gap: var(--ds-space-sm); }
        .ds-ghc-navbtn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          border-radius: 999px;
          border: 1px solid var(--ds-color-border-default, #d9d9d9);
          background: transparent;
          color: var(--ds-color-text-primary);
          cursor: pointer;
        }
        .ds-ghc-navbtn:hover:not(:disabled) { background: #f4f4f4; }
        .ds-ghc-navbtn:focus-visible { outline: 2px solid var(--ds-color-focus); outline-offset: 2px; }
        .ds-ghc-navbtn:disabled { opacity: .4; cursor: not-allowed; }

        .ds-ghc-card {
          position: relative;
          display: flex;
          flex-direction: column;
          height: 480px;
          overflow: hidden;
          border-radius: var(--ds-radius-surface);
          background: #f4f4f4;
        }
        .ds-ghc-media {
          position: relative;
          flex: 1 1 auto;
          height: 100%;
          background-size: cover;
          background-position: center;
          transition: height 420ms ease, flex-basis 420ms ease;
        }
        .ds-ghc-fade {
          position: absolute;
          inset: auto 0 0 0;
          height: 45%;
          background: linear-gradient(to top, rgba(0,0,0,.72), transparent);
        }
        .ds-ghc-tag {
          position: absolute;
          top: 16px;
          left: 16px;
          padding: 4px 10px;
          border-radius: 999px;
          background: rgba(255,255,255,.9);
          color: #151515;
          font-size: var(--ds-font-size-xs, .75rem);
          font-weight: var(--ds-font-weight-semibold);
        }
        .ds-ghc-overlay-title {
          position: absolute;
          left: 20px;
          right: 20px;
          bottom: 18px;
          color: #fff;
          font-size: var(--ds-font-size-xl, 1.25rem);
          font-weight: var(--ds-font-weight-semibold);
          line-height: 1.3;
          transition: opacity 240ms ease;
        }
        .ds-ghc-body {
          display: flex;
          flex-direction: column;
          gap: var(--ds-space-sm);
          padding: 0 20px;
          max-height: 0;
          opacity: 0;
          overflow: hidden;
          transition: max-height 420ms ease, opacity 300ms ease, padding 420ms ease;
        }
        .ds-ghc-title {
          font-size: var(--ds-font-size-xl, 1.25rem);
          font-weight: var(--ds-font-weight-semibold);
          color: var(--ds-color-text-primary);
          line-height: 1.3;
        }
        .ds-ghc-summary {
          font-size: var(--ds-font-size-sm);
          line-height: 1.6;
          color: var(--ds-color-text-secondary);
        }
        .ds-ghc-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-top: auto;
          color: var(--ds-color-link-default);
          font-size: var(--ds-font-size-sm);
          font-weight: var(--ds-font-weight-semibold);
          text-decoration: none;
        }
        .ds-ghc-card:hover .ds-ghc-media,
        .ds-ghc-card:focus-within .ds-ghc-media {
          height: 50%;
          flex: 0 0 50%;
        }
        .ds-ghc-card:hover .ds-ghc-overlay-title,
        .ds-ghc-card:focus-within .ds-ghc-overlay-title { opacity: 0; }
        .ds-ghc-card:hover .ds-ghc-body,
        .ds-ghc-card:focus-within .ds-ghc-body {
          max-height: 50%;
          opacity: 1;
          padding: 20px;
        }
        @media (prefers-reduced-motion: reduce) {
          .ds-ghc-media, .ds-ghc-body, .ds-ghc-overlay-title { transition: none; }
        }
        @media (max-width: 640px) {
          .ds-ghc-card { height: 420px; }
        }
      `}</style>
    </section>
  );
}
