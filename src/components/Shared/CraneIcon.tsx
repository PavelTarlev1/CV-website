import { useEffect, useRef } from 'react';

interface CraneIconProps {
  size?: number;
  color?: string;
}

export const CraneIcon: React.FC<CraneIconProps> = ({ size = 48, color = '#ff6600' }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef    = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d')!;

    // Scale all geometry to `size`
    const S = size;
    const dark = color + 'aa';

    // Geometry (designed at 48px, scaled)
    const sc = (v: number) => (v / 48) * S;

    const PIVOT_X   = sc(24);
    const PIVOT_Y   = sc(16);
    const BOOM      = sc(22);
    const COUNTER   = sc(9);
    const TOWER_H   = sc(22);
    const TROLL_D   = sc(16);
    const C_MIN     = sc(3);
    const C_MAX     = sc(18);

    const PHASES = [
      { name: 'idle',       dur: 400  },
      { name: 'lower',      dur: 1200 },
      { name: 'pickup',     dur: 400  },
      { name: 'raise',      dur: 1200 },
      { name: 'rotate',     dur: 2000 },
      { name: 'lower2',     dur: 1200 },
      { name: 'drop',       dur: 400  },
      { name: 'raise2',     dur: 1000 },
      { name: 'rotateBack', dur: 2000 },
    ];

    let phaseIdx   = 0;
    let phaseStart: number | null = null;
    let spinDeg    = 0;
    let cableLen   = C_MIN;
    let loadOn     = false;

    const ease  = (t: number) => t < 0.5 ? 2*t*t : -1+(4-2*t)*t;
    const lerp  = (a: number, b: number, t: number) => a + (b - a) * t;
    const projX = (len: number) => len * Math.cos(spinDeg * Math.PI / 180);

    function draw() {
      ctx.clearRect(0, 0, S, S);

      const towerX  = PIVOT_X - sc(1.5);
      const towerW  = sc(3);
      const towerBot = PIVOT_Y + TOWER_H;

      // Tower
      ctx.fillStyle = color;
      ctx.fillRect(towerX, PIVOT_Y, towerW, TOWER_H);

      // Base
      ctx.fillStyle = dark;
      ctx.fillRect(towerX - sc(2), towerBot, towerW + sc(4), sc(2));

      // Mast above pivot
      ctx.strokeStyle = color;
      ctx.lineWidth = sc(0.8);
      ctx.beginPath();
      ctx.moveTo(PIVOT_X, PIVOT_Y);
      ctx.lineTo(PIVOT_X, PIVOT_Y - sc(6));
      ctx.stroke();

      const jibTipX    = PIVOT_X + projX(BOOM);
      const counterTipX = PIVOT_X - projX(COUNTER);
      const trolleyX   = PIVOT_X + projX(TROLL_D);
      const armY       = PIVOT_Y;

      // Counter-jib
      ctx.fillStyle = dark;
      ctx.fillRect(
        Math.min(PIVOT_X, counterTipX), armY - sc(1),
        Math.abs(projX(COUNTER)), sc(2)
      );
      // Counter weight
      ctx.fillStyle = color;
      ctx.fillRect(counterTipX - sc(2), armY - sc(2), sc(4), sc(4));

      // Main jib
      ctx.fillStyle = color;
      ctx.fillRect(
        Math.min(PIVOT_X, jibTipX), armY - sc(1.2),
        Math.abs(projX(BOOM)), sc(2.4)
      );

      // Support wires
      ctx.strokeStyle = color + '88';
      ctx.lineWidth = sc(0.5);
      ctx.beginPath();
      ctx.moveTo(PIVOT_X, PIVOT_Y - sc(6));
      ctx.lineTo(jibTipX, armY);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(PIVOT_X, PIVOT_Y - sc(6));
      ctx.lineTo(counterTipX, armY);
      ctx.stroke();

      // Cable
      ctx.strokeStyle = color + 'cc';
      ctx.lineWidth = sc(0.5);
      ctx.beginPath();
      ctx.moveTo(trolleyX, armY);
      ctx.lineTo(trolleyX, armY + cableLen);
      ctx.stroke();

      // Load
      if (loadOn) {
        const lx = trolleyX - sc(2.5);
        const ly = armY + cableLen + sc(1);
        ctx.fillStyle = color;
        ctx.fillRect(lx, ly, sc(5), sc(4));
        ctx.strokeStyle = dark;
        ctx.lineWidth = sc(0.4);
        ctx.strokeRect(lx, ly, sc(5), sc(4));
      }

      // Pivot dot
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.arc(PIVOT_X, PIVOT_Y, sc(1), 0, Math.PI * 2);
      ctx.fill();
    }

    function tick(ts: number) {
      if (phaseStart === null) phaseStart = ts;
      const phase = PHASES[phaseIdx];
      const t  = Math.min((ts - phaseStart) / phase.dur, 1);
      const et = ease(t);

      switch (phase.name) {
        case 'idle':        spinDeg = 0; cableLen = C_MIN; loadOn = false; break;
        case 'lower':       cableLen = lerp(C_MIN, C_MAX, et); loadOn = false; break;
        case 'pickup':      cableLen = C_MAX; loadOn = true; break;
        case 'raise':       cableLen = lerp(C_MAX, C_MIN, et); loadOn = true; break;
        case 'rotate':      spinDeg = lerp(0, 180, et); cableLen = C_MIN; loadOn = true; break;
        case 'lower2':      spinDeg = 180; cableLen = lerp(C_MIN, C_MAX, et); loadOn = true; break;
        case 'drop':        spinDeg = 180; cableLen = C_MAX; loadOn = false; break;
        case 'raise2':      spinDeg = 180; cableLen = lerp(C_MAX, C_MIN, et); loadOn = false; break;
        case 'rotateBack':  spinDeg = lerp(180, 360, et); cableLen = C_MIN; loadOn = false; break;
      }

      draw();

      if (t >= 1) {
        if (phase.name === 'rotateBack') spinDeg = 0;
        phaseIdx = (phaseIdx + 1) % PHASES.length;
        phaseStart = ts;
      }

      rafRef.current = requestAnimationFrame(tick);
    }

    draw();
    rafRef.current = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(rafRef.current);
  }, [size, color]);

  return <canvas ref={canvasRef} width={size} height={size} style={{ display: 'block' }} />;
};
