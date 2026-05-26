export default function Mandala({ size = 200, opacity = 0.06 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" style={{ opacity }}>
      {[0, 30, 60, 90, 120, 150].map((r) => (
        <g key={r} transform={`rotate(${r} 100 100)`}>
          <ellipse cx="100" cy="40" rx="18" ry="35" fill="none" stroke="currentColor" strokeWidth="0.5" />
          <ellipse cx="100" cy="50" rx="10" ry="25" fill="none" stroke="currentColor" strokeWidth="0.3" />
        </g>
      ))}
      <circle cx="100" cy="100" r="60" fill="none" stroke="currentColor" strokeWidth="0.5" />
      <circle cx="100" cy="100" r="40" fill="none" stroke="currentColor" strokeWidth="0.3" />
      <circle cx="100" cy="100" r="8" fill="currentColor" opacity="0.3" />
    </svg>
  );
}
