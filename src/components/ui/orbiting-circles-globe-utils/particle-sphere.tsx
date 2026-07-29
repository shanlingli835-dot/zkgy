import { useEffect, useRef } from "react";

type ParticleSphereProps = {
  /** 画布边长（CSS px） */
  size?: number;
  /** 粒子数量 */
  count?: number;
  /** 是否停止自转（prefers-reduced-motion） */
  paused?: boolean;
};

/**
 * 纯 Canvas 粒子地球：不依赖三方动画库，SSR 安全（仅在 useEffect 中绘制）。
 */
export function ParticleSphereAnimation({
  size = 420,
  count = 900,
  paused = false,
}: ParticleSphereProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = size * dpr;
    canvas.height = size * dpr;
    ctx.scale(dpr, dpr);

    // 均匀分布在球面上的粒子（黄金螺旋）
    const points: { x: number; y: number; z: number }[] = [];
    const golden = Math.PI * (3 - Math.sqrt(5));
    for (let i = 0; i < count; i++) {
      const y = 1 - (i / (count - 1)) * 2;
      const radius = Math.sqrt(Math.max(0, 1 - y * y));
      const theta = golden * i;
      points.push({
        x: Math.cos(theta) * radius,
        y,
        z: Math.sin(theta) * radius,
      });
    }

    const cx = size / 2;
    const cy = size / 2;
    const r = size * 0.42;
    let angle = 0;
    let frame = 0;

    const draw = () => {
      ctx.clearRect(0, 0, size, size);
      const cos = Math.cos(angle);
      const sin = Math.sin(angle);

      for (const p of points) {
        const x = p.x * cos - p.z * sin;
        const z = p.x * sin + p.z * cos;
        const depth = (z + 1) / 2; // 0 背面 -> 1 正面
        const px = cx + x * r;
        const py = cy + p.y * r;
        const dotSize = 0.5 + depth * 1.4;
        ctx.beginPath();
        ctx.arc(px, py, dotSize, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(56, 132, 255, ${0.12 + depth * 0.65})`;
        ctx.fill();
      }
    };

    draw();

    if (!paused) {
      const tick = () => {
        angle += 0.0022;
        draw();
        frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    }

    return () => cancelAnimationFrame(frame);
  }, [size, count, paused]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      style={{ width: size, height: size, display: "block" }}
    />
  );
}

export default ParticleSphereAnimation;
