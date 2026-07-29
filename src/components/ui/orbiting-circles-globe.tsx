import { useEffect, useState } from "react";
import {
  Binary,
  Cpu,
  FileCode2,
  FileArchive,
  HardDrive,
  Layers,
  MemoryStick,
  Package,
  Terminal,
} from "lucide-react";

import ParticleSphereAnimation from "@/components/ui/orbiting-circles-globe-utils/particle-sphere";

type OrbitIcon = {
  icon: React.ReactNode;
  alt: string;
  angle: number;
};

type Orbit = {
  /** 轨道直径（px，桌面端） */
  size: number;
  /** 一圈耗时（秒） */
  duration: number;
  icons: OrbitIcon[];
  /** 手机端是否隐藏（最外层轨道） */
  hideOnMobile?: boolean;
};

const ICON_PROPS = { size: 22, strokeWidth: 1.6, "aria-hidden": true } as const;

const orbits: Orbit[] = [
  {
    size: 300,
    duration: 40,
    icons: [
      { icon: <Cpu {...ICON_PROPS} />, alt: "硬件架构", angle: -60 },
      { icon: <Binary {...ICON_PROPS} />, alt: "二进制", angle: 0 },
      { icon: <Terminal {...ICON_PROPS} />, alt: "操作系统", angle: 60 },
    ],
  },
  {
    size: 440,
    duration: 52,
    icons: [
      { icon: <FileCode2 {...ICON_PROPS} />, alt: "源代码文件", angle: 0 },
      { icon: <Package {...ICON_PROPS} />, alt: "软件包", angle: -90 },
      { icon: <MemoryStick {...ICON_PROPS} />, alt: "固件", angle: 140 },
    ],
  },
  {
    size: 580,
    duration: 68,
    hideOnMobile: true,
    icons: [
      { icon: <Layers {...ICON_PROPS} />, alt: "镜像分层", angle: -60 },
      { icon: <FileArchive {...ICON_PROPS} />, alt: "归档文件", angle: 0 },
      { icon: <HardDrive {...ICON_PROPS} />, alt: "存储介质", angle: 60 },
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
    <div className="ocg-root" aria-hidden>
      <div className="ocg-stage">
        {/* 中心粒子地球 */}
        <div className="ocg-globe">
          <ParticleSphereAnimation size={300} count={900} paused={reduced} />
        </div>

        {/* 环形轨道 */}
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
                animationDuration: `${orbit.duration}s`,
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
                      animationDuration: `${orbit.duration}s`,
                      transform: reduced
                        ? `rotate(${-iconData.angle}deg)`
                        : undefined,
                    }}
                  >
                    {iconData.icon}
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
          bottom: -150px;
          width: 620px;
          height: 620px;
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
          border: var(--ds-border-width-default) solid var(--ds-color-border-subtle, rgba(0,0,0,0.08));
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
        .ocg-slot {
          position: absolute;
          inset: 0;
        }
        .ocg-badge {
          position: absolute;
          top: 0;
          left: 50%;
          margin-left: -24px;
          margin-top: -24px;
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: var(--ds-radius-round);
          background: #ffffff;
          border: var(--ds-border-width-default) solid rgba(0,0,0,0.08);
          box-shadow: 0 2px 8px rgba(15, 23, 42, 0.08);
          color: var(--ds-color-text-primary);
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }

        @media (max-width: 1023px) {
          .ocg-root { height: 460px; }
          .ocg-stage { transform: translateX(-50%) scale(0.82); bottom: -120px; }
        }
        @media (max-width: 639px) {
          .ocg-root { height: 380px; }
          .ocg-stage { transform: translateX(-50%) scale(0.7); bottom: -100px; }
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
