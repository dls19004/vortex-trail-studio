export const metadata = {
  title: "Contact – Vortex Trail Studio",
};

export default function ContactPage() {
  return (
    <section className="pt-28 pb-20 px-4 min-h-screen">
      <div className="max-w-xl mx-auto text-center">
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-wide mb-4">
          Get In Touch
        </h1>
        <p className="text-[#8a95a5] mb-10">
          Press inquiries, collaboration, or just want to say hello?
        </p>

        <a
          href="mailto:hello@vortextrailstudio.com"
          className="inline-block px-8 py-3 rounded-lg border border-[#00d4ff] text-[#00d4ff] font-medium tracking-wide hover:bg-[rgba(0,212,255,0.12)] transition-all"
        >
          hello@vortextrailstudio.com
        </a>

        <div className="mt-12 flex justify-center gap-8 text-sm text-[#8a95a5]">
          <a
            href="https://x.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#00d4ff] transition-colors"
          >
            X / Twitter
          </a>
          <a
            href="https://discord.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#00d4ff] transition-colors"
          >
            Discord
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#00d4ff] transition-colors"
          >
            YouTube
          </a>
        </div>
      </div>
    </section>
  );
}
