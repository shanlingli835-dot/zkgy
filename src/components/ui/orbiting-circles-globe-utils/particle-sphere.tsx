import { useEffect, useRef } from "react";

type ParticleSphereProps = {
  size?: number;
  count?: number;
  paused?: boolean;
};

/**
 * Canvas 粒子球：随机散布的蓝色粒子，边缘密集、中心稀疏，缓慢自转。
 */
export function ParticleSphereAnimation({
  size = 520,
  count = 2600,
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

    // 随机球面分布
    const points: { x: number; y: number; z: number; s: number; c: string }[] =
      [];
    for (let i = 0; i < count; i++) {
      const u = Math.random() * 2 - 1;
      const theta = Math.random() * Math.PI * 2;
      const r = Math.sqrt(1 - u * u);
      const roll = Math.random();
      const color =
        roll > 0.94
          ? "255, 149, 64" // 少量暖色点缀
          : roll > 0.9
            ? "120, 170, 255"
            : "56, 110, 230";
      points.push({
        x: r * Math.cos(theta),
        y: u,
        z: r * Math.sin(theta),
        s: 0.6 + Math.random() * 1.1,
        c: color,
      });
    }

    const cx = size / 2;
    const cy = size / 2;
    const radius = size * 0.46;
    let angle = 0;
    let frame = 0;

    const draw = () => {
      ctx.clearRect(0, 0, size, size);
      const cos = Math.cos(angle);
      const sin = Math.sin(angle);

      for (const p of points) {
        const x = p.x * cos - p.z * sin;
        const z = p.x * sin + p.z * cos;
        const depth = (z + 1) / 2;
        const px = cx + x * radius;
        const py = cy + p.y * radius;
        ctx.beginPath();
        ctx.arc(px, py, p.s * (0.55 + depth * 0.7), 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.c}, ${0.08 + depth * 0.62})`;
        ctx.fill();
      }
    };

    draw();

    if (!paused) {
      const tick = () => {
        angle += 0.0018;
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
