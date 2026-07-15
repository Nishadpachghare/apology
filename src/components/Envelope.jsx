import { useState } from "react";

export default function Envelope({ herName, onOpened }) {
  const [opened, setOpened] = useState(false);

  const handleOpen = () => {
    if (opened) return;
    setOpened(true);
    setTimeout(() => onOpened?.(), 900);
  };

  return (
    <div className="envelope-wrap flex flex-col items-center gap-6">
      <div className="relative w-[280px] sm:w-[340px] h-[190px] sm:h-[230px]">
        <div
          className="absolute inset-0 rounded-md shadow-xl"
          style={{ backgroundColor: "var(--wine)" }}
        />
        <div
          className={`absolute left-1/2 -translate-x-1/2 w-[85%] h-[70%] bg-[var(--blush)] rounded-sm shadow-md transition-all duration-700 ${
            opened ? "top-[-38%]" : "top-[8%]"
          }`}
        />
        <div
          className="absolute inset-0 overflow-hidden rounded-md"
          style={{ zIndex: 2 }}
        >
          <div
            className="absolute bottom-0 left-0 w-0 h-0"
            style={{
              borderLeft: "170px solid transparent",
              borderRight: "170px solid transparent",
              borderBottom: "95px solid var(--wine-deep)",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          />
        </div>
        <div
          className={`envelope-flap absolute top-0 left-0 w-0 h-0 z-10 ${opened ? "open" : ""}`}
          style={{
            borderLeft: "140px solid transparent",
            borderRight: "140px solid transparent",
            borderTop: "110px solid var(--wine-deep)",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        />
        <button
          onClick={handleOpen}
          aria-label="Open the envelope"
          className={`seal-pulse absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-16 h-16 rounded-full flex items-center justify-center text-[var(--blush)] font-display text-2xl shadow-lg transition-opacity duration-500 ${
            opened
              ? "opacity-0 pointer-events-none"
              : "opacity-100 cursor-pointer hover:scale-105"
          }`}
          style={{ backgroundColor: "var(--gold)" }}
        >
          ♡
        </button>
      </div>
      <p className="font-display italic text-lg sm:text-xl text-[var(--wine)] text-center px-6">
        {opened
          ? "Keep reading, my love..."
          : `For ${herName || "you"} — tap the seal to open`}
      </p>
    </div>
  );
}
