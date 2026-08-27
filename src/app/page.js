import Image from "next/image";

export default function Home() {
  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden pt-16 px-0">
      <div className="absolute inset-0 bg-[#02040a]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/hero-bg.jpg')" }}
        />
        <div className="absolute inset-0 bg-[#02040a]/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#02040a] via-transparent to-[#02040a]/45" />
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto px-5 sm:px-6 text-center">
        <div className="mb-5 sm:mb-6 flex justify-center">
          <Image
            src="/logo.png"
            alt="Vortex Trail Studio"
            width={720}
            height={280}
            className="w-full max-w-[300px] sm:max-w-[480px] md:max-w-[680px] h-auto drop-shadow-[0_0_40px_rgba(0,212,255,0.35)]"
            priority
          />
        </div>

        <p className="text-[13px] sm:text-lg md:text-xl tracking-[0.12em] sm:tracking-[0.15em] text-[#c8d0dc] font-light px-2">
          Where Chaos Becomes Play
        </p>
      </div>
    </section>
  );
}
