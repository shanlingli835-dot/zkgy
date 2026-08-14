import { useEffect, useState } from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

export type QualificationItem = {
  id: string;
  name: string;
  image?: string;
};

type Props = {
  title: string;
  items: QualificationItem[];
};

const PAGE_SIZE = 12;

function chunk(items: QualificationItem[], size: number) {
  const pages: QualificationItem[][] = [];
  for (let i = 0; i < items.length; i += size) {
    pages.push(items.slice(i, i + size));
  }
  return pages;
}

export function QualificationCarousel({ title, items }: Props) {
  const [api, setApi] = useState<CarouselApi>();
  const [selected, setSelected] = useState(0);
  const pages = chunk(items, PAGE_SIZE);

  useEffect(() => {
    if (!api) return;
    const update = () => setSelected(api.selectedScrollSnap());
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
      style={{
        backgroundColor: "#ffffff",
        padding: "var(--ds-section-y-desktop) var(--ds-gutter-desktop)",
      }}
    >
      <div style={{ maxWidth: "var(--ds-container-page)", margin: "0 auto" }}>
        <h2
          style={{
            textAlign: "center",
            fontSize: "clamp(1.75rem, 3.2vw, 2.5rem)",
            fontWeight: "var(--ds-font-weight-semibold)",
            lineHeight: 1.2,
            color: "var(--ds-color-text-primary)",
            marginBottom: "var(--ds-space-3xl)",
          }}
        >
          {title}
        </h2>

        <Carousel setApi={setApi} opts={{ align: "start" }}>
          <CarouselContent>
            {pages.map((page, pageIndex) => (
              <CarouselItem key={pageIndex} className="basis-full">
                <div className="ds-qual-grid">
                  {page.map((item) => (
                    <figure key={item.id} className="ds-qual-item">
                      <div className="ds-qual-media" aria-hidden />
                      <figcaption className="ds-qual-caption">
                        {item.name}
                      </figcaption>
                    </figure>
                  ))}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {pages.length > 1 ? (
          <div className="ds-qual-dots">
            {pages.map((_, index) => (
              <button
                key={index}
                type="button"
                aria-label={`第 ${index + 1} 组企业资质`}
                aria-current={selected === index}
                onClick={() => api?.scrollTo(index)}
                className="ds-qual-dot"
                data-active={selected === index}
              />
            ))}
          </div>
        ) : null}
      </div>

      <style>{`
        .ds-qual-grid {
          display: grid;
          grid-template-columns: repeat(6, minmax(0, 1fr));
          gap: var(--ds-space-2xl) var(--ds-space-xl);
        }
        .ds-qual-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: var(--ds-space-md);
        }
        .ds-qual-media {
          width: 100%;
          aspect-ratio: 3 / 4;
          border-radius: var(--ds-radius-surface);
          background: #f4f4f4;
        }
        .ds-qual-caption {
          text-align: center;
          font-size: var(--ds-font-size-sm);
          line-height: 1.5;
          color: var(--ds-color-text-primary);
        }
        .ds-qual-dots {
          display: flex;
          justify-content: center;
          gap: var(--ds-space-sm);
          margin-top: var(--ds-space-2xl);
        }
        .ds-qual-dot {
          width: 8px;
          height: 8px;
          border-radius: var(--ds-radius-round);
          border: none;
          background: #d9d9d9;
          cursor: pointer;
        }
        .ds-qual-dot[data-active="true"] { background: rgb(20, 115, 230); }
        .ds-qual-dot:focus-visible { outline: 2px solid var(--ds-color-focus); outline-offset: 2px; }
        @media (max-width: 1024px) {
          .ds-qual-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); }
        }
        @media (max-width: 640px) {
          .ds-qual-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        }
      `}</style>
    </section>
  );
}
