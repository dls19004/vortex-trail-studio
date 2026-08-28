export default function Home() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-[#02040a]">
      <div
        className="absolute inset-0 bg-no-repeat bg-center bg-cover md:hidden"
        style={{ backgroundImage: "url('/hero-bg-mobile.jpg')" }}
      />
      <div
        className="absolute inset-0 hidden md:block bg-no-repeat bg-center bg-cover"
        style={{ backgroundImage: "url('/hero-bg.jpg')" }}
      />
    </section>
  );
}
