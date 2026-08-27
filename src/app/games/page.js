export const metadata = {
  title: "Games – Vortex Trail Studio",
};

export default function GamesPage() {
  const games = [
   {
  title: "Lasting Glory",
  status: "In Development",
  description:
    "A fast-paced arena shooter built around movement, gunplay, and climbing the ranks.",
},
    {
      title: "Project Beta",
      status: "In Development",
      description:
        "An atmospheric experience exploring the edge of the unknown.",
    },
    {
      title: "Project Gamma",
      status: "Concept",
      description: "Open-world action with freedom, choice, and consequence.",
    },
  ];

  return (
    <section className="pt-28 pb-20 px-4 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-wide text-center mb-3">
          Our Games
        </h1>
        <p className="text-center text-[#8a95a5] mb-12 max-w-xl mx-auto">
          Unique worlds. Unforgettable experiences.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {games.map((game) => (
            <article
              key={game.title}
              className="bg-[#0c1018] border border-[rgba(0,212,255,0.2)] rounded-xl overflow-hidden hover:border-[#00d4ff]/50 transition-colors"
            >
              <div className="h-40 bg-gradient-to-br from-[#0a1525] to-[#0d2035] flex items-center justify-center">
                <span className="text-[#00d4ff] text-sm tracking-widest border border-[rgba(0,212,255,0.3)] px-3 py-1 rounded">
                  Coming Soon
                </span>
              </div>
              <div className="p-5">
                <h2 className="text-lg font-semibold mb-1">{game.title}</h2>
                <p className="text-sm text-[#8a95a5] mb-3">{game.description}</p>
                <span className="inline-block text-xs text-[#00d4ff] border border-[rgba(0,212,255,0.25)] px-2.5 py-0.5 rounded tracking-wide">
                  {game.status}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
