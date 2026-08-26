import Image from "next/image";

export default function Home() {
  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden pt-16 px-0">
      {/* Background atmosphere */}
      <div className="absolute inset-0 bg-[#05070b]">
        {/* Soft radial glows to evoke the tornado energy */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_30%,rgba(0,120,200,0.18)_0%,transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_70%,rgba(0,180,255,0.08)_0%,transparent_50%)]" />
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#05070b] to-transparent" />
      </div>

      {/* Content */}
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
