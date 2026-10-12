import { cn } from "@/lib/utils";

import "./feature-cards.css";

/**
 * Feature Cards (canonical)
 *
 * 图上文下的能力卡片行：配图 → 标签 → 标题 → 描述。
 * 用于产品页「为什么选择 …」这类并列能力说明，文案由页面原样传入。
 * 参考排版来自用户提供的 21st.dev feature-sections 组件，仅采用其板式，
 * 字体、颜色、圆角与间距全部改用本地语义 Token。
 */
export type FeatureCardItem = {
  image: { src: string; alt: string };
  tag?: string;
  title: string;
  desc: string;
};

export function FeatureCards({
  items,
  className,
  columns,
}: {
  items: FeatureCardItem[];
  className?: string;
  columns?: 2 | 3 | 4;
}) {
  const cols = columns ?? (items.length >= 4 ? 4 : items.length);
  return (
    <ul
      className={cn("ds-feature-cards", className)}
      style={{ "--ds-feature-cards-columns": cols } as React.CSSProperties}
    >
      {items.map((it) => (
        <li key={it.title} className="ds-feature-card">
          <div className="ds-feature-card__media">
            <img
              src={it.image.src}
              alt={it.image.alt}
              width={1024}
              height={768}
              loading="lazy"
              decoding="async"
            />
          </div>
          {it.tag ? <p className="ds-feature-card__tag">{it.tag}</p> : null}
          <h3 className="ds-feature-card__title">{it.title}</h3>
          <p className="ds-feature-card__desc">{it.desc}</p>
        </li>
      ))}
    </ul>
  );
}

export default FeatureCards;
