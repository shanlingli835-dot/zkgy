"use client";

import { Warp } from "@paper-design/shaders-react";
import { icons as lucideIcons, Shield } from "lucide-react";
import type { CSSProperties } from "react";

type Item = {
  name: string;
  icon?: string;
  description: string;
};

const SHADER_CONFIGS = [
  {
    proportion: 0.3,
    softness: 0.8,
    distortion: 0.15,
    swirl: 0.6,
    swirlIterations: 8,
    shape: "checks" as const,
    shapeScale: 0.08,
    colors: ["hsl(190, 90%, 18%)", "hsl(185, 95%, 45%)", "hsl(200, 80%, 25%)", "hsl(180, 100%, 60%)"],
  },
  {
    proportion: 0.4,
    softness: 1.2,
    distortion: 0.2,
    swirl: 0.9,
    swirlIterations: 12,
    shape: "stripes" as const,
    shapeScale: 0.12,
    colors: ["hsl(210, 90%, 20%)", "hsl(200, 100%, 55%)", "hsl(220, 80%, 30%)", "hsl(195, 100%, 65%)"],
  },
  {
    proportion: 0.35,
    softness: 0.9,
    distortion: 0.18,
    swirl: 0.7,
    swirlIterations: 10,
    shape: "checks" as const,
    shapeScale: 0.1,
    colors: ["hsl(170, 90%, 18%)", "hsl(175, 95%, 45%)", "hsl(165, 80%, 25%)", "hsl(180, 100%, 60%)"],
  },
  {
    proportion: 0.45,
    softness: 1.1,
    distortion: 0.22,
    swirl: 0.8,
    swirlIterations: 15,
    shape: "stripes" as const,
    shapeScale: 0.09,
    colors: ["hsl(220, 85%, 22%)", "hsl(210, 100%, 55%)", "hsl(230, 80%, 30%)", "hsl(205, 100%, 68%)"],
  },
  {
    proportion: 0.38,
    softness: 0.95,
    distortion: 0.16,
    swirl: 0.85,
    swirlIterations: 11,
    shape: "checks" as const,
    shapeScale: 0.11,
    colors: ["hsl(195, 90%, 20%)", "hsl(190, 100%, 50%)", "hsl(200, 85%, 28%)", "hsl(185, 100%, 62%)"],
  },
  {
    proportion: 0.42,
    softness: 1.0,
    distortion: 0.19,
    swirl: 0.75,
    swirlIterations: 9,
    shape: "stripes" as const,
    shapeScale: 0.13,
    colors: ["hsl(205, 90%, 20%)", "hsl(195, 100%, 55%)", "hsl(215, 80%, 30%)", "hsl(200, 100%, 65%)"],
  },
];

const cardStyle: CSSProperties = {
  position: "relative",
  overflow: "hidden",
  borderRadius: "var(--ds-radius-surface)",
  border: "var(--ds-border-width-default) solid var(--ds-color-border-subtle)",
  backgroundColor: "var(--ds-color-surface-default)",
  minHeight: 320,
  display: "flex",
  flexDirection: "column",
  isolation: "isolate",
};

const shaderWrapStyle: CSSProperties = {
  position: "relative",
  height: 140,
  overflow: "hidden",
};

const bodyStyle: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "var(--ds-space-md)",
  padding: "var(--ds-space-2xl)",
  flex: 1,
};

const iconStyle: CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  width: 44,
  height: 44,
  borderRadius: "var(--ds-radius-control)",
  backgroundColor: "var(--ds-color-action-primary-subtle)",
  color: "var(--ds-color-action-primary)",
  marginTop: "calc(var(--ds-space-2xl) * -1 - 22px)",
  border: "2px solid var(--ds-color-surface-default)",
  position: "relative",
  zIndex: 1,
};

export function CapabilitiesShaderCards({ items }: { items: readonly Item[] }) {
  return (
    <div
      style={{
        display: "grid",
        gap: "var(--ds-space-2xl)",
        gridTemplateColumns: "repeat(auto-fit, minmax(min(280px, 100%), 1fr))",
      }}
    >
      {items.map((item, index) => {
        const cfg = SHADER_CONFIGS[index % SHADER_CONFIGS.length];
        const Icon =
          (item.icon && (lucideIcons as Record<string, typeof Shield>)[item.icon]) || Shield;
        return (
          <article key={item.name} style={cardStyle}>
            <div style={shaderWrapStyle} aria-hidden="true">
              <Warp
                style={{ width: "100%", height: "100%" }}
                proportion={cfg.proportion}
                softness={cfg.softness}
                distortion={cfg.distortion}
                swirl={cfg.swirl}
                swirlIterations={cfg.swirlIterations}
                shape={cfg.shape}
                shapeScale={cfg.shapeScale}
                colors={cfg.colors}
              />
            </div>
            <div style={bodyStyle}>
              <span aria-hidden="true" style={iconStyle}>
                <Icon size={22} strokeWidth={1.75} />
              </span>
              <h3
                style={{
                  margin: 0,
                  fontSize: "var(--ds-font-size-xl)",
                  lineHeight: "var(--ds-line-height-xl)",
                  fontWeight: "var(--ds-font-weight-semibold)",
                  color: "var(--ds-color-text-primary)",
                }}
              >
                {item.name}
              </h3>
              <p
                style={{
                  margin: 0,
                  fontSize: "var(--ds-font-size-md)",
                  lineHeight: "var(--ds-line-height-md)",
                  color: "var(--ds-color-text-secondary)",
                }}
              >
                {item.description}
              </p>
            </div>
          </article>
        );
      })}
    </div>
  );
}
