export default function Home() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden">
      <div
        className="absolute inset-0 bg-[#02040a] bg-cover bg-center"
        style={{ backgroundImage: "url('/hero-bg.jpg')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#02040a]/50 via-transparent to-[#02040a]/25" />
    </section>
  );
}
