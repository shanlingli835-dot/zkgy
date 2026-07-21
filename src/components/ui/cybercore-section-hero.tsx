import { useEffect, useState, type CSSProperties } from "react";

export interface CybercoreBackgroundProps {
  /** Number of animated light beams */
  beamCount?: number;
}

const DEFAULT_BEAM_COUNT = 70;

type Beam = {
  id: number;
  type: "primary" | "secondary";
  style: CSSProperties;
};

/**
 * CybercoreBackground
 *
 * Full-bleed animated backdrop for a hero section:
 *  - moving perspective grid floor
 *  - central pulsing glow + floor glow
 *  - vertical light beams rising and fading
 *
 * Rendered as an absolutely-positioned layer; wrap it with a
 * `position: relative` container and place hero content above with a higher z-index.
 * Requires the keyframes and CSS variables declared in `src/styles.css`
 * (`--bg-color`, `--light-color`, `--glow-color-1`, `--glow-color-2`, `--highlight-color`,
 * `--highlight-glow`, plus `rise`, `fade`, `floorGlow`, `mainGlow`, `moveGrid`).
 */
export function CybercoreBackground({
  beamCount = DEFAULT_BEAM_COUNT,
}: CybercoreBackgroundProps) {
  const [beams, setBeams] = useState<Beam[]>([]);

  useEffect(() => {
    const generated: Beam[] = Array.from({ length: beamCount }).map((_, i) => {
      const riseDur = Math.random() * 3 + 5;
      const fadeDur = riseDur;
      const type: Beam["type"] = Math.random() < 0.15 ? "secondary" : "primary";
      return {
        id: i,
        type,
        style: {
          position: "absolute",
          bottom: 0,
          left: `${Math.random() * 100}%`,
          width: `${Math.floor(Math.random() * 2) + 1}px`,
          height: "40%",
          animationDelay: `${Math.random() * 6}s`,
          animationDuration: `${riseDur}s, ${fadeDur}s`,
          animationName: "rise, fade",
          animationTimingFunction: "linear, ease-in-out",
          animationIterationCount: "infinite, infinite",
          background:
            type === "secondary"
              ? "linear-gradient(to top, var(--highlight-color), transparent)"
              : "linear-gradient(to top, var(--light-color), transparent)",
          boxShadow:
            type === "secondary"
              ? "0 0 8px 1px var(--highlight-glow)"
              : "0 0 8px 1px var(--glow-color-1)",
          pointerEvents: "none",
        },
      };
    });
    setBeams(generated);
  }, [beamCount]);

  return (
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        backgroundColor: "var(--bg-color)",
        pointerEvents: "none",
      }}
    >
      {/* Perspective grid floor */}
      <div
        style={{
          position: "absolute",
          left: "-50%",
          right: "-50%",
          bottom: 0,
          height: "70%",
          transform: "perspective(400px) rotateX(60deg)",
          transformOrigin: "bottom center",
          backgroundImage:
            "linear-gradient(var(--glow-color-2) 1px, transparent 1px), linear-gradient(90deg, var(--glow-color-2) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
          animation: "moveGrid 4s linear infinite",
          opacity: 0.35,
          maskImage:
            "linear-gradient(to top, black 20%, transparent 90%)",
          WebkitMaskImage:
            "linear-gradient(to top, black 20%, transparent 90%)",
        }}
      />

      {/* Floor glow ellipse */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          bottom: 0,
          width: "120%",
          height: "35%",
          transform: "translateX(-50%)",
          background:
            "radial-gradient(ellipse at bottom, var(--glow-color-1) 0%, transparent 60%)",
          filter: "blur(40px)",
          animation: "floorGlow 6s ease-in-out infinite",
          opacity: 0.8,
        }}
      />

      {/* Main central glow */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "55%",
          width: "60%",
          height: "60%",
          transform: "translate(-50%, -50%)",
          background:
            "radial-gradient(circle, var(--glow-color-1) 0%, transparent 65%)",
          animation: "mainGlow 5s ease-in-out infinite alternate",
          mixBlendMode: "screen",
        }}
      />

      {/* Rising light beams */}
      <div style={{ position: "absolute", inset: 0 }}>
        {beams.map((beam) => (
          <span key={beam.id} style={beam.style} />
        ))}
      </div>

      {/* Subtle top vignette for legibility */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom, rgba(0,3,8,0.85) 0%, rgba(0,3,8,0.2) 40%, rgba(0,3,8,0) 70%)",
          pointerEvents: "none",
        }}
      />
    </div>
  );
}

export default CybercoreBackground;
