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
 * CybercoreBackground — faithful port of the 21st.dev component
 * https://21st.dev/community/components/dhiluxui/cybercore-section-hero
 *
 * Renders as an absolutely-positioned full-bleed background: dark canvas,
 * perspective grid floor, central + floor glows, and randomly rising light
 * beams. Wrap in a `position: relative` container and place hero content
 * above with a higher z-index.
 *
 * Relies on keyframes (`rise`, `fade`, `floorGlow`, `mainGlow`, `moveGrid`)
 * and CSS variables declared in `src/styles.css`.
 */
export function CybercoreBackground({
  beamCount = DEFAULT_BEAM_COUNT,
}: CybercoreBackgroundProps) {
  const [beams, setBeams] = useState<Beam[]>([]);

  useEffect(() => {
    const generated: Beam[] = Array.from({ length: beamCount }).map((_, i) => {
      const riseDur = Math.random() * 3 + 5; // 5-8s
      const fadeDur = riseDur;
      const type: Beam["type"] = Math.random() < 0.15 ? "secondary" : "primary";
      return {
        id: i,
        type,
        style: {
          left: `${Math.random() * 100}%`,
          width: `${Math.floor(Math.random() * 2) + 1}px`,
          animationDelay: `${Math.random() * 6}s`,
          animationDuration: `${riseDur}s, ${fadeDur}s`,
        },
      };
    });
    setBeams(generated);
  }, [beamCount]);

  return (
    <div className="cybercore-bg" aria-hidden="true">
      <div className="cybercore-main-glow" />
      <div className="cybercore-floor-glow" />
      <div className="cybercore-grid-floor" />
      <div className="cybercore-beams">
        {beams.map((beam) => (
          <span
            key={beam.id}
            className={`cybercore-beam cybercore-beam--${beam.type}`}
            style={beam.style}
          />
        ))}
      </div>
    </div>
  );
}

export default CybercoreBackground;
