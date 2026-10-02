// Generated riso-style artwork: overlapping translucent shapes. No image files needed.
const inks = ["#2437e0", "#ff4f9a", "#ffd23f", "#12b5a6"];
const rnd = (s) => { const x = Math.sin(s * 9301 + 49297) * 233280; return x - Math.floor(x); };

export default function Art({ seed = 0, label = "" }) {
  const shapes = Array.from({ length: 4 }, (_, k) => {
    const r = (n) => rnd(seed * 17 + k * 5 + n);
    return { c: inks[(seed + k) % 4], x: 80 + r(1) * 240, y: 60 + r(2) * 180, s: 50 + r(3) * 70, t: (seed + k) % 3 };
  });
  return (
    <svg className="art" viewBox="0 0 400 300" role="img" aria-label={label || "Abstract artwork"} preserveAspectRatio="xMidYMid slice">
      <rect width="400" height="300" fill="#f1f2f6" />
      {shapes.map((p, i) =>
        p.t === 0 ? <circle key={i} cx={p.x} cy={p.y} r={p.s} fill={p.c} style={{ mixBlendMode: "multiply" }} />
        : p.t === 1 ? <rect key={i} x={p.x - p.s} y={p.y - p.s * 0.7} width={p.s * 2} height={p.s * 1.4} rx="8" fill={p.c} style={{ mixBlendMode: "multiply" }} />
        : <polygon key={i} points={`${p.x},${p.y - p.s} ${p.x + p.s},${p.y + p.s * 0.8} ${p.x - p.s},${p.y + p.s * 0.8}`} fill={p.c} style={{ mixBlendMode: "multiply" }} />
      )}
    </svg>
  );
}
