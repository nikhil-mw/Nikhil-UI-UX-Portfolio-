import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-[100vh] h-[100vh] w-full bg-white text-black overflow-hidden p-[14px]">
      <div className="w-full h-full max-w-[1600px] mx-auto flex flex-col justify-between">
        {/* Top Section - Typography & Info (15% Height) */}
        <section className="flex-shrink-0 w-full flex flex-col md:flex-row justify-between items-end pb-2 md:pb-4 px-2">
          {/* Left Big Typography */}
          <div className="leading-[0.85] tracking-tighter -ml-1">
            <h1 className="text-[12vw] md:text-[9vw] lg:text-[100px] xl:text-[120px] font-black uppercase font-sans text-black">
              Nikhil
            </h1>
            <div className="flex items-center gap-4">
              <h1 className="text-[12vw] md:text-[9vw] lg:text-[100px] xl:text-[120px] font-black uppercase font-sans text-black">
                Wakchaure
              </h1>

            </div>
          </div>

          {/* Right Description */}
          <div className="hidden md:block max-w-xs text-xs md:text-sm font-medium leading-relaxed text-black/70 mb-2">
            <h3 className="font-bold text-black uppercase mb-1">PixelCraft Studio</h3>
            <p>
              PixelCraft is the design work of Nikhil.
              UI/UX Designer, now based in India.
              Currently designing future interfaces.
            </p>
          </div>
        </section>

        {/* Bottom Section - Image Card (85% Height) */}
        <section className="relative h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] w-full bg-gradient-to-b from-[#9cb4be] via-[#c4d4d6] to-[#dfe8e8] rounded-[10px] overflow-hidden shadow-sm">
          {/* Content removed as requested */}
        </section>
      </div>
    </main>
  );
}
