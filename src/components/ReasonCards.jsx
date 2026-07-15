export default function ReasonCards() {
  const images = [
    { src: "/reason1.jpg", alt: "Our sweet memory 1" },
    { src: "/reason2.jpg", alt: "Our sweet memory 2" },
    { src: "/reason3.jpg", alt: "Our sweet memory 3" },
    { src: "/reason4.jpg", alt: "Our sweet memory 4" },
  ];

  return (
    <div className="max-w-2xl mx-auto px-4">
      <h2
        className="font-display text-3xl text-center mb-8"
        style={{ color: "var(--wine)" }}
      >
        Some of our favorite memories ❤️
      </h2>
      <div className="grid grid-cols-2 gap-4 sm:gap-6">
        {images.map((img, i) => (
          <div
            key={i}
            className="w-full h-48 sm:h-64 rounded-xl shadow-lg border overflow-hidden transition-all duration-300 hover:scale-[1.03] hover:shadow-xl"
            style={{ borderColor: "var(--blush-deep)" }}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
