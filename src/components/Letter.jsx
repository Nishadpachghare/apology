export default function Letter({ herName, yourName, message, visible }) {
  return (
    <div
      className={`letter-slide max-w-xl mx-auto ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-8 pointer-events-none"
      }`}
    >
      <div
        className="bg-white/70 backdrop-blur rounded-lg shadow-xl p-8 sm:p-10 border"
        style={{ borderColor: "var(--blush-deep)" }}
      >
        <p
          className="font-display text-2xl sm:text-3xl mb-6"
          style={{ color: "var(--wine)" }}
        >
          My dearest {herName || "love"},
        </p>
        <p className="leading-relaxed text-[15px] sm:text-base whitespace-pre-line">
          {message}
        </p>
        <p
          className="font-display text-xl mt-8"
          style={{ color: "var(--wine)" }}
        >
          Always yours,
          <br />
          {yourName || "Me"}
        </p>
      </div>
    </div>
  );
}
