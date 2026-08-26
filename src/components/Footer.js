import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-[rgba(0,212,255,0.2)] bg-[#05070b] py-8 sm:py-10 px-4">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-4 sm:gap-6 text-center">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Vortex Trail Studio"
            width={140}
            height={36}
            className="h-8 w-auto object-contain opacity-90"
          />
        </Link>

        <p className="text-sm text-[#8a95a5]">
          © {new Date().getFullYear()} Vortex Trail Studio. All rights reserved.
        </p>

        <div className="flex gap-6 text-sm text-[#8a95a5]">
          <a
            href="https://x.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#00d4ff] transition-colors"
          >
            X
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
    </footer>
  );
}
