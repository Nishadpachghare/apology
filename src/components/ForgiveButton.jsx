import { useState, useRef } from "react";

export default function ForgiveButton({ yourName }) {
  const [forgiven, setForgiven] = useState(false);
  const [noPos, setNoPos] = useState({ x: 0, y: 0 });
  const [dodges, setDodges] = useState(0);
  const containerRef = useRef(null);

  const dodgeNo = () => {
    const bounds = containerRef.current?.getBoundingClientRect();
    const maxX = bounds ? bounds.width / 2 - 60 : 100;
    const maxY = 40;
    const x = (Math.random() - 0.5) * 2 * maxX;
    const y = (Math.random() - 0.5) * 2 * maxY;
    setNoPos({ x, y });
    setDodges((d) => d + 1);
  };

  if (forgiven) {
    return (
      <div className="text-center py-10">
        <p
          className="font-display text-4xl sm:text-5xl mb-3"
          style={{ color: "var(--wine)" }}
        >
          Thank you ♡
        </p>
        <p className="opacity-80">
          I promise to do better. That's not just words — I mean it.
        </p>
      </div>
    );
  }

  return (
    <div className="text-center py-10">
      <h2
        className="font-display text-3xl mb-8"
        style={{ color: "var(--wine)" }}
      >
        Will you forgive {yourName || "me"}?
      </h2>
      <div
        ref={containerRef}
        className="relative flex items-center justify-center gap-4 h-16"
      >
        <button
          onClick={() => setForgiven(true)}
          className="px-8 py-3 rounded-full text-white font-semibold shadow-lg hover:scale-105 transition-transform"
          style={{ backgroundColor: "var(--wine)" }}
        >
          Yes, I forgive you
        </button>
        <button
          onMouseEnter={dodgeNo}
          onClick={dodgeNo}
          className="px-8 py-3 rounded-full font-semibold shadow border transition-transform"
          style={{
            transform: `translate(${noPos.x}px, ${noPos.y}px)`,
            borderColor: "var(--wine)",
            color: "var(--wine)",
          }}
        >
          Not yet
        </button>
      </div>
      {dodges > 2 && (
        <p className="mt-6 text-sm opacity-60 italic">
          it's okay, take your time — I'll wait right here.
        </p>
      )}
    </div>
  );
}
