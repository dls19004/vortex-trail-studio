export default function Home() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-[#02040a]">
      <div
        className="absolute inset-0 bg-no-repeat bg-center bg-contain md:bg-cover"
        style={{ backgroundImage: "url('/hero-bg.jpg')" }}
      />
      <div className="hidden md:block absolute inset-0 bg-gradient-to-t from-[#02040a]/50 via-transparent to-[#02040a]/25" />
    </section>
  );
}
