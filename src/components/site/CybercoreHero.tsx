import { useEffect, useState, type CSSProperties } from "react";

/**
 * CybercoreHero
 *
 * React 版首页 Hero 首屏，1:1 复刻此前静态源
 * (public/source-site/index.html) 中已上线的 Cybercore 版本：
 * 深空渐变背景 + 主辉光 + 地面辉光 + 3D 透视网格 + 随机上升光束。
 *
 * 保留原 H1 文案、描述与 CTA 跳转（/demo）。
 * 光束在客户端 useEffect 内生成，避免 SSR hydration mismatch，
 * 并遵守 prefers-reduced-motion。
 */

const BEAM_COUNT = 70;

type Beam = { id: number; style: CSSProperties };

export function CybercoreHero() {
  const [beams, setBeams] = useState<Beam[]>([]);

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }
    const next: Beam[] = Array.from({ length: BEAM_COUNT }).map((_, i) => {
      const dur = (3 + Math.random() * 5).toFixed(2) + "s";
      const delay = (-Math.random() * 8).toFixed(2) + "s";
      return {
        id: i,
        style: {
          left: `${(Math.random() * 100).toFixed(2)}%`,
          height: `${(30 + Math.random() * 40).toFixed(2)}vh`,
          opacity: (0.3 + Math.random() * 0.7).toFixed(2),
          animationDuration: `${dur},${dur}`,
          animationDelay: `${delay},${delay}`,
        },
      };
    });
    setBeams(next);
  }, []);

  return (
    <section
      className="cybercore-hero"
      aria-labelledby="cybercore-hero-title"
    >
      <div className="cc-main-glow" aria-hidden="true" />
      <div className="cc-floor-glow" aria-hidden="true" />
      <div className="cc-grid-floor" aria-hidden="true" />
      <div className="cc-beams" aria-hidden="true">
        {beams.map((b) => (
          <span key={b.id} className="cc-beam" style={b.style} />
        ))}
      </div>

      <div className="cybercore-hero__inner">
        <h1
          id="cybercore-hero-title"
          className="cybercore-hero__title"
          aria-label="为关键软件与智能设备构建安全验证能力"
        >
          <span>为关键软件与智能设备构建安全验证能力</span>
        </h1>
        <p className="cybercore-hero__copy">
          面向网联汽车、工业控制与特种领域，融合模糊测试、代码审计、供应链分析与
          AI 安全检测，帮助团队发现高风险缺陷并完成可信交付。
        </p>
        <div className="cybercore-hero__actions">
          <a className="cybercore-hero__cta" href="/demo">
            获取演示
          </a>
        </div>
      </div>
    </section>
  );
}

export default CybercoreHero;
