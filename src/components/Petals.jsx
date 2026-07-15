export default function Petals() {
  const petals = Array.from({ length: 14 });
  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden z-0"
      aria-hidden="true"
    >
      {petals.map((_, i) => {
        const left = Math.random() * 100;
        const duration = 8 + Math.random() * 10;
        const delay = Math.random() * 10;
        const size = 8 + Math.random() * 10;
        return (
          <span
            key={i}
            className="petal absolute rounded-full"
            style={{
              left: `${left}%`,
              width: size,
              height: size,
              backgroundColor: "var(--gold)",
              opacity: 0.5,
              animationDuration: `${duration}s`,
              animationDelay: `${delay}s`,
            }}
          />
        );
      })}
    </div>
  );
}
