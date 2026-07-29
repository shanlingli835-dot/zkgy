import { useEffect, useState } from "react";

import ParticleSphereAnimation from "@/components/ui/orbiting-circles-globe-utils/particle-sphere";

type OrbitIcon = { src: string; alt: string; angle: number };

type Orbit = {
  /** 轨道直径（px，桌面端） */
  size: number;
  duration: number;
  icons: OrbitIcon[];
  hideOnMobile?: boolean;
};

const orbits: Orbit[] = [
  {
    size: 440,
    duration: 18,
    icons: [
      {
        src: "https://images.shadcnspace.com/assets/svgs/supabase.svg",
        alt: "Supabase",
        angle: -60,
      },
      {
        src: "https://images.shadcnspace.com/assets/svgs/gemini.svg",
        alt: "gemini",
        angle: 0,
      },
      {
        src: "https://images.shadcnspace.com/assets/svgs/make.svg",
        alt: "Make",
        angle: 60,
      },
    ],
  },
  {
    size: 560,
    duration: 24,
    icons: [
      {
        src: "https://images.shadcnspace.com/assets/svgs/figma.svg",
        alt: "Figma",
        angle: 0,
      },
      {
        src: "https://images.shadcnspace.com/assets/svgs/slack.svg",
        alt: "Slack",
        angle: -90,
      },
    ],
  },
  {
    size: 690,
    duration: 30,
    hideOnMobile: true,
    icons: [
      {
        src: "https://images.shadcnspace.com/assets/svgs/clude.svg",
        alt: "Claude",
        angle: -60,
      },
      {
        src: "https://images.shadcnspace.com/assets/svgs/react.svg",
        alt: "react",
        angle: 0,
      },
      {
        src: "https://images.shadcnspace.com/assets/svgs/python.svg",
        alt: "python",
        angle: 60,
      },
    ],
  },
];

export function OrbitingCirclesGlobe() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return (
    <div className="ocg-root">
      <div className="ocg-stage">
        {/* Center particle globe */}
        <div className="ocg-globe">
          <ParticleSphereAnimation size={520} count={2600} paused={reduced} />
        </div>

        {/* Orbiting rings */}
        {orbits.map((orbit, index) => {
          const isCW = index % 2 === 0;
          const orbitAnim = isCW ? "ocg-orbit-cw" : "ocg-orbit-ccw";
          const counterAnim = isCW ? "ocg-counter-cw" : "ocg-counter-ccw";

          const allIcons: OrbitIcon[] = [
            ...orbit.icons,
            ...orbit.icons.map((ic) => ({
              ...ic,
              angle: ic.angle + 180,
              alt: `${ic.alt}-mirror`,
            })),
          ];

          return (
            <div
              key={orbit.size}
              className={`ocg-ring${orbit.hideOnMobile ? " ocg-ring-outer" : ""}`}
              style={{
                width: orbit.size,
                height: orbit.size,
                animationName: reduced ? "none" : orbitAnim,
                animationDuration: `${orbit.duration * 4}s`,
              }}
            >
              {allIcons.map((iconData) => (
                <div
                  key={iconData.alt}
                  className="ocg-slot"
                  style={{ transform: `rotate(${iconData.angle}deg)` }}
                >
                  <div
                    className="ocg-badge"
                    style={{
                      ["--counter-offset" as string]: `${-iconData.angle}deg`,
                      animationName: reduced ? "none" : counterAnim,
                      animationDuration: `${orbit.duration * 4}s`,
                      transform: reduced
                        ? `rotate(${-iconData.angle}deg)`
                        : undefined,
                    }}
                  >
                    <img
                      src={iconData.src}
                      alt=""
                      width={26}
                      height={26}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </div>
              ))}
            </div>
          );
        })}
      </div>

      <style>{`
        @keyframes ocg-orbit-cw {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to   { transform: translate(-50%, -50%) rotate(360deg); }
        }
        @keyframes ocg-orbit-ccw {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to   { transform: translate(-50%, -50%) rotate(-360deg); }
        }
        @keyframes ocg-counter-cw {
          from { transform: rotate(var(--counter-offset, 0deg)); }
          to   { transform: rotate(calc(var(--counter-offset, 0deg) - 360deg)); }
        }
        @keyframes ocg-counter-ccw {
          from { transform: rotate(var(--counter-offset, 0deg)); }
          to   { transform: rotate(calc(var(--counter-offset, 0deg) + 360deg)); }
        }

        .ocg-root {
          position: relative;
          width: 100%;
          height: 580px;
          overflow: hidden;
        }
        .ocg-stage {
          position: absolute;
          left: 50%;
          bottom: -260px;
          width: 700px;
          height: 700px;
          transform: translateX(-50%);
          transform-origin: bottom center;
        }
        .ocg-globe {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
        }
        .ocg-ring {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          border-radius: var(--ds-radius-round);
          border: var(--ds-border-width-default) solid rgba(0, 0, 0, 0.08);
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
        .ocg-slot { position: absolute; inset: 0; }
        .ocg-badge {
          position: absolute;
          top: 0;
          left: 50%;
          margin-left: -26px;
          margin-top: -26px;
          width: 52px;
          height: 52px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: var(--ds-radius-round);
          background: #ffffff;
          border: var(--ds-border-width-default) solid rgba(0, 0, 0, 0.07);
          box-shadow: 0 2px 10px rgba(15, 23, 42, 0.08);
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
        .ocg-badge img { width: 26px; height: 26px; display: block; }

        @media (max-width: 1023px) {
          .ocg-root { height: 460px; }
          .ocg-stage { transform: translateX(-50%) scale(0.8); bottom: -220px; }
        }
        @media (max-width: 639px) {
          .ocg-root { height: 360px; }
          .ocg-stage { transform: translateX(-50%) scale(0.62); bottom: -190px; }
          .ocg-ring-outer { display: none; }
        }
        @media (prefers-reduced-motion: reduce) {
          .ocg-ring, .ocg-badge { animation: none !important; }
        }
      `}</style>
    </div>
  );
}

export default OrbitingCirclesGlobe;
