import { useEffect, useId, useRef, useState, type ReactNode } from "react";
import "./HomeAccordion.css";

export type HomeAccordionItem = {
  title: string;
  desc: string;
  icon?: ReactNode;
  theme?: "flame" | "blue" | "pink" | "green" | "yellow";
};

export type HomeAccordionProps = {
  title: string;
  description?: string;
  cta?: { label: string; href: string };
  items: HomeAccordionItem[];
  /** 每一项自动切换的时长（ms），与首页保持一致。 */
  duration?: number;
  autoplay?: boolean;
};

/**
 * 首页「核心产品介绍」手风琴组件的 React 版本。
 * DOM、类名与 JS 行为均对齐 public/source-site/index.html 中的 .why-tabs 组件，
 * 复用同一份样式（HomeAccordion.css），确保跨页面视觉与响应式规则一致。
 */
export function HomeAccordion({
  title,
  description,
  cta,
  items,
  duration = 6500,
  autoplay = true,
}: HomeAccordionProps) {
  const uid = useId().replace(/[:]/g, "");
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // 与首页保持一致的自动播放 + 进度条 + 悬停暂停 + IntersectionObserver 行为
  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const mobileQuery = window.matchMedia("(max-width: 479px)");
    const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    let timer: number = 0;
    let isVisible = true;
    let isPausedByInteraction = false;
    let current = activeIndex;

    const itemEls = () =>
      Array.from(wrapper.querySelectorAll<HTMLElement>("[data-tab-item]"));
    const visualEls = () =>
      Array.from(wrapper.querySelectorAll<HTMLElement>("[data-tab-visual]"));

    const canAutoplay = () =>
      autoplay && !mobileQuery.matches && !reducedMotionQuery.matches;

    const resetProgressBars = () => {
      itemEls().forEach((item) => {
        const bar = item.querySelector<HTMLElement>(".why-tab__progress span");
        if (!bar) return;
        bar.style.transition = "none";
        bar.style.transform = "scaleX(0)";
      });
    };

    const pauseAutoplay = () => {
      window.clearTimeout(timer);
      timer = 0;
      resetProgressBars();
    };

    const setDetailsHeights = () => {
      itemEls().forEach((item, index) => {
        const details = item.querySelector<HTMLElement>(".why-tab__details");
        if (!details) return;
        if (mobileQuery.matches) {
          details.style.height = "auto";
          details.style.opacity = "1";
          return;
        }
        details.style.height =
          index === current ? `${details.scrollHeight}px` : "0px";
      });
    };

    const syncThemeBorder = () => {
      const activeItem = itemEls()[current];
      if (!activeItem) return;
      const border = window
        .getComputedStyle(activeItem)
        .getPropertyValue("--theme-border")
        .trim();
      if (border) wrapper.style.setProperty("--active-border", border);
    };

    const animateProgress = () => {
      const bar = itemEls()[current]?.querySelector<HTMLElement>(
        ".why-tab__progress span"
      );
      if (!bar) return;
      bar.style.transition = "none";
      bar.style.transform = "scaleX(0)";
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      bar.getBoundingClientRect();
      bar.style.transition = `transform ${duration}ms linear`;
      bar.style.transform = "scaleX(1)";
    };

    const startAutoplay = () => {
      pauseAutoplay();
      if (!canAutoplay() || !isVisible || isPausedByInteraction) return;
      animateProgress();
      timer = window.setTimeout(() => {
        activate((current + 1) % itemEls().length);
      }, duration);
    };

    const activate = (index: number) => {
      current = index;
      setActiveIndex(index);
      itemEls().forEach((item, i) => {
        const isActive = i === current;
        item.classList.toggle("is-active", isActive);
        const button = item.querySelector<HTMLButtonElement>(".why-tab__summary");
        button?.setAttribute("aria-expanded", String(isActive));
      });
      visualEls().forEach((visual, i) => {
        visual.classList.toggle("is-active", i === current);
      });
      syncThemeBorder();
      setDetailsHeights();
      startAutoplay();
    };

    // 初始化
    activate(current);

    const onMouseEnter = () => {
      isPausedByInteraction = true;
      pauseAutoplay();
    };
    const onMouseLeave = () => {
      isPausedByInteraction = false;
      startAutoplay();
    };
    const onFocusIn = () => {
      isPausedByInteraction = true;
      pauseAutoplay();
    };
    const onFocusOut = (event: FocusEvent) => {
      if (wrapper.contains(event.relatedTarget as Node)) return;
      isPausedByInteraction = false;
      startAutoplay();
    };

    wrapper.addEventListener("mouseenter", onMouseEnter);
    wrapper.addEventListener("mouseleave", onMouseLeave);
    wrapper.addEventListener("focusin", onFocusIn);
    wrapper.addEventListener("focusout", onFocusOut);

    let observer: IntersectionObserver | undefined;
    if ("IntersectionObserver" in window) {
      const section = wrapper.closest(".why-tabs") || wrapper;
      observer = new IntersectionObserver(
        ([entry]) => {
          isVisible = entry.isIntersecting;
          if (isVisible) startAutoplay();
          else pauseAutoplay();
        },
        { threshold: 0.2 }
      );
      observer.observe(section);
    }

    const handleMediaChange = () => {
      setDetailsHeights();
      if (canAutoplay()) startAutoplay();
      else pauseAutoplay();
    };
    mobileQuery.addEventListener("change", handleMediaChange);
    reducedMotionQuery.addEventListener("change", handleMediaChange);

    // 首次点击/焦点事件绑定（React 结构已渲染）
    const clickHandlers: Array<() => void> = [];
    itemEls().forEach((item, index) => {
      const button = item.querySelector<HTMLButtonElement>(".why-tab__summary");
      if (!button) return;
      const handler = () => {
        if (index === current) return;
        activate(index);
      };
      button.addEventListener("click", handler);
      clickHandlers.push(() => button.removeEventListener("click", handler));
    });

    return () => {
      pauseAutoplay();
      wrapper.removeEventListener("mouseenter", onMouseEnter);
      wrapper.removeEventListener("mouseleave", onMouseLeave);
      wrapper.removeEventListener("focusin", onFocusIn);
      wrapper.removeEventListener("focusout", onFocusOut);
      observer?.disconnect();
      mobileQuery.removeEventListener("change", handleMediaChange);
      reducedMotionQuery.removeEventListener("change", handleMediaChange);
      clickHandlers.forEach((off) => off());
    };
    // 仅在挂载后初始化一次；items/duration 属于稳定配置
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const titleId = `why-tabs-title-${uid}`;

  const renderVisual = (item: HomeAccordionItem) => (
    <div className="ha-visual">
      {item.icon ? <div className="ha-visual__icon">{item.icon}</div> : null}
      <h3 className="ha-visual__title">{item.title}</h3>
      <p className="ha-visual__desc">{item.desc}</p>
    </div>
  );

  return (
    <section className="why-tabs" aria-labelledby={titleId}>
      <div className="why-tabs__spacer why-tabs__spacer--top" />
      <div className="why-tabs__container">
        <div
          className="why-tabs__layout"
          data-tabs
          data-tabs-autoplay={autoplay ? "true" : "false"}
          ref={wrapperRef}
        >
          <header className="why-tabs__header">
            <h2 id={titleId}>{title}</h2>
            {description ? <p>{description}</p> : null}
            {cta ? (
              <a className="why-tabs__cta" href={cta.href}>
                {cta.label}
              </a>
            ) : null}
          </header>

          <div className="why-tabs__items">
            {items.map((item, index) => {
              const theme = item.theme ?? defaultTheme(index);
              const detailsId = `why-tab-details-${uid}-${index}`;
              const isActive = index === activeIndex;
              return (
                <article
                  key={item.title}
                  className={`why-tab${isActive ? " is-active" : ""}`}
                  data-tab-item
                  data-theme={theme}
                >
                  <div className="why-tab__mobile-visual">{renderVisual(item)}</div>
                  <button
                    className="why-tab__summary"
                    type="button"
                    aria-expanded={isActive}
                    aria-controls={detailsId}
                  >
                    <h3>{item.title}</h3>
                  </button>
                  <div className="why-tab__details" id={detailsId}>
                    <p>{item.desc}</p>
                  </div>
                  <div className="why-tab__progress" aria-hidden="true">
                    <span />
                  </div>
                </article>
              );
            })}
          </div>

          <aside className="why-tabs__visual" aria-hidden="true">
            <div className="why-tabs__visual-sticky">
              {items.map((item, index) => (
                <div
                  key={item.title}
                  className={`why-tabs__visual-panel${
                    index === activeIndex ? " is-active" : ""
                  }`}
                  data-tab-visual
                  style={
                    {
                      // 让面板继承对应 tab 的主题色变量
                      "--theme-bg": `var(--${item.theme ?? defaultTheme(index)}-200)`,
                      "--theme-border": `var(--${item.theme ?? defaultTheme(index)}-400)`,
                      "--theme-progress": `var(--${item.theme ?? defaultTheme(index)}-600)`,
                    } as React.CSSProperties
                  }
                >
                  {renderVisual(item)}
                </div>
              ))}
            </div>
          </aside>
        </div>
      </div>
      <div className="why-tabs__spacer why-tabs__spacer--bottom" />
    </section>
  );
}

function defaultTheme(
  index: number
): "flame" | "blue" | "pink" | "green" | "yellow" {
  const rotation = ["flame", "blue", "pink", "green", "yellow"] as const;
  return rotation[index % rotation.length];
}
