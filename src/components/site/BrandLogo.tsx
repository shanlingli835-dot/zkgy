import type { CSSProperties } from "react";

import logoColor from "@/assets/brand/logos/zkgy-logo-horizontal-color.svg";
import logoReverse from "@/assets/brand/logos/zkgy-logo-horizontal-reverse.png";

/**
 * BrandLogo (shared)
 *
 * 使用 docs/design-system/brand/brand-assets.md 中批准的正式 Logo 资产。
 * - variant="color"：浅色背景（Header）
 * - variant="reverse"：深色背景（Footer）
 *
 * 严禁重绘、改色、拉伸；保持原始宽高比（width: auto）。
 * 图片本身使用 alt=""，由外层链接的 aria-label 承担无障碍语义。
 */
export type BrandLogoVariant = "color" | "reverse";

interface BrandLogoProps {
  variant: BrandLogoVariant;
  height?: CSSProperties["height"];
  className?: string;
}

export function BrandLogo({
  variant,
  height = "var(--ds-size-brand-logo-header)",
  className,
}: BrandLogoProps) {
  const src = variant === "color" ? logoColor : logoReverse;
  return (
    <img
      src={src}
      alt=""
      aria-hidden="true"
      className={className}
      style={{
        height,
        width: "auto",
        maxWidth: "100%",
        display: "block",
        objectFit: "contain",
      }}
    />
  );
}
