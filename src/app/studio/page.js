export const metadata = {
  title: "Studio – Vortex Trail Studio",
};

export default function StudioPage() {
  const values = [
    {
      title: "Innovation",
      description:
        "Pushing creative and technical boundaries to build unique gameplay.",
      icon: "⚡",
    },
    {
      title: "Immersion",
      description:
        "Designing deep, atmospheric experiences that pull players in.",
      icon: "🌀",
    },
    {
      title: "Community",
      description:
        "Building lasting connections and creating games with our players.",
      icon: "🤝",
    },
  ];

  return (
    <section className="pt-28 pb-20 px-4 min-h-screen">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-wide mb-4">
          The Studio
        </h1>
        <p className="text-[#8a95a5] text-base sm:text-lg leading-relaxed mb-10 sm:mb-14 max-w-2xl mx-auto">
          Vortex Trail Studio is an independent game development studio
          driven by a passion for immersive worlds, bold design, and
          unforgettable player experiences.
        </p>

        <div className="grid sm:grid-cols-3 gap-6 text-left">
          {values.map((v) => (
            <div
              key={v.title}
              className="bg-[#0c1018] border border-[rgba(0,212,255,0.2)] rounded-xl p-6 hover:border-[#00d4ff]/45 transition-colors"
            >
              <div className="text-2xl mb-3">{v.icon}</div>
              <h2 className="text-[#00d4ff] font-semibold mb-2">{v.title}</h2>
              <p className="text-sm text-[#8a95a5]">{v.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
