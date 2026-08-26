export const metadata = {
  title: "News – Vortex Trail Studio",
};

export default function NewsPage() {
  return (
    <section className="pt-28 pb-20 px-4 min-h-screen">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-wide mb-4">
          News
        </h1>
        <p className="text-[#8a95a5] mb-12">
          Updates, announcements, and behind-the-scenes from the studio.
        </p>

        <div className="bg-[#0c1018] border border-[rgba(0,212,255,0.2)] rounded-xl p-10">
          <p className="text-[#8a95a5]">
            No posts yet — check back soon.
          </p>
        </div>
      </div>
    </section>
  );
}
