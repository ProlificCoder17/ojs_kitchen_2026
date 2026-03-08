"use client";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justiy-center text-center overflow-hidden noise-overlay"
      style={{
        background:
          "radical-gradient(ellipse at 60% 40%, #1e1710 0%, #0E0C0A 60%",
      }}
    >
      {/* Decorative background circles */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-[#C9A84C]/5 pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-[#C9A84C]/8 pointer-events-none" />

      {/* Top label */}
      <div
        className="animate-fadeUp opacity-0"
        style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
      >
        <p className="font-['DM_Sans'] text-[0.65rem] tracking-[0.4em] uppercase text-[#C9A84C] mb-6">
          Lisboa · Portugal
        </p>
      </div>

      {/* Main heading */}
      <div
        className="animate-fadeUp opacity-0 px-6"
        style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}
      >
        <h1 className="font-['Playfair_Display'] text-6xl md:text-8xl lg:text-[9rem] leading-none tracking-tight text-[#F5EFE0]">
          O.J's
        </h1>
        <h1 className="font-['Playfair_Display'] italic text-5xl md:text-7xl lg:text-[8rem] leading-none tracking-tight gold-shimmer mb-6">
          Kitchen
        </h1>
      </div>

      {/* Divider */}
      <div
        className="animate-fadeUp opacity-0 flex items-center gap-4 mb-6"
        style={{ animationDelay: "0.8s", animationFillMode: "forwards" }}
      >
        <span className="block w-12 h-px bg-[#C9A84C]/40" />
        <span className="font-['Cormorant_Garamond'] text-sm italic text-[#9A9080] tracking-widest">
          Culinary Excellence
        </span>
        <span className="block w-12 h-px bg-[#C9A84C]/40" />
      </div>

      {/* Subtitle */}
      <div
        className="animate-fadeUp opacity-0 max-w-md px-6"
        style={{ animationDelay: "1s", animationFillMode: "forwards" }}
      >
        <p className="font-['Cormorant_Garamond'] text-xl md:text-2xl text-[#9A9080] leading-relaxed">
          Where Portuguese tradition meets contemporary artistry
        </p>
      </div>

      {/* CTA Buttons */}
      <div
        className="animate-fadeUp opacity-0 flex flex-col sm:flex-row items-center gap-4 mt-10 px-6"
        style={{ animationDelay: "1.2s", animationFillMode: "forwards" }}
      >
        <a href="#menu" className="btn-gold w-full sm:w-auto text-center">
          Explore the Menu
        </a>
        <a
          href="#about"
          className="font-['DM_Sans'] text-[0.75rem] tracking-[0.2em] uppercase text-[#9A9080] hover:text-[#C9A84C] transition-colors"
        >
          Meet the Chef →
        </a>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fadeIn opacity-0"
        style={{ animationDelay: "2s", animationFillMode: "forwards" }}
      >
        <span className="font-['DM_Sans'] text-[0.6rem] tracking-[0.3em] uppercase text-[#C9A84C]/40">
          Scroll
        </span>
        <div className="w-px h-10 bg-gradient-to-b from-[#C9A84C]/40 to-transparent" />
      </div>
    </section>
  );
}
