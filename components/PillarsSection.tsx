"use client";

import { useState } from "react";
import { PILLARS } from "@/data/content";
import { Sparkles, ArrowRight, Shield, Heart, Compass, Users, Mic, Target } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const getIcon = (iconName: string) => {
  switch (iconName) {
    case "sparkles":
      return <Sparkles className="w-6 h-6 text-[#D4AF37]" />;
    case "heart":
      return <Heart className="w-6 h-6 text-[#A8606F]" />;
    case "mic":
      return <Mic className="w-6 h-6 text-[#D4AF37]" />;
    case "compass":
      return <Compass className="w-6 h-6 text-[#A8606F]" />;
    case "users":
      return <Users className="w-6 h-6 text-[#D4AF37]" />;
    case "shield":
      return <Shield className="w-6 h-6 text-[#A8606F]" />;
    case "target":
      return <Target className="w-6 h-6 text-[#D4AF37]" />;
    default:
      return <Sparkles className="w-6 h-6 text-[#D4AF37]" />;
  }
};

export default function PillarsSection() {
  const [activePillarIndex, setActivePillarIndex] = useState(0);
  const activePillar = PILLARS[activePillarIndex];

  return (
    <section id="piliers" className="py-24 md:py-36 bg-[#F4EFE6] relative overflow-hidden">
      {/* Editorial Watermark */}
      <div
        className="pointer-events-none absolute right-4 bottom-8 font-editorial text-[14vw] leading-none text-[#4B2E2B]/[0.03] select-none"
        aria-hidden="true"
      >
        PILIERS
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <span className="text-xs uppercase font-mono tracking-[0.25em] text-[#A8606F] font-semibold block mb-3">
            FONDATIONS DU PROGRAMME
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-sans font-medium text-[#4B2E2B] leading-tight mb-6">
            Un parcours pour devenir{" "}
            <span className="font-editorial italic font-normal text-[#803848]">
              pleinement soi.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-[#735653] font-normal leading-relaxed">
            Huit dimensions indissociables conçues pour guider chaque jeune fille de la découverte intérieure à la prise de responsabilité dans le monde.
          </p>
        </div>

        {/* Desktop Exhibition Gallery Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left: Interactive Editorial Pillar Directory (Cols 1-7) */}
          <div className="lg:col-span-7 space-y-2">
            {PILLARS.map((pillar, idx) => {
              const isActive = idx === activePillarIndex;
              return (
                <div
                  key={pillar.id}
                  onClick={() => setActivePillarIndex(idx)}
                  onMouseEnter={() => setActivePillarIndex(idx)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      setActivePillarIndex(idx);
                    }
                  }}
                  className={`group w-full text-left p-4 sm:p-5 rounded-2xl transition-all duration-300 cursor-pointer border ${
                    isActive
                      ? "bg-white border-[#D4AF37]/60 shadow-[0_10px_25px_rgba(75,46,43,0.06)] translate-x-2"
                      : "bg-transparent border-transparent hover:bg-white/50 hover:border-[#4B2E2B]/10"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 sm:gap-6">
                      <span
                        className={`font-editorial text-2xl sm:text-3xl font-bold transition-colors ${
                          isActive ? "text-[#D4AF37]" : "text-[#735653]/60 group-hover:text-[#4B2E2B]"
                        }`}
                      >
                        {pillar.number}
                      </span>
                      <div>
                        <h3
                          className={`text-lg sm:text-xl font-sans font-semibold tracking-wide transition-colors ${
                            isActive ? "text-[#803848]" : "text-[#4B2E2B] group-hover:text-[#803848]"
                          }`}
                        >
                          {pillar.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-[#735653] mt-0.5 line-clamp-1 font-light">
                          {pillar.shortDesc}
                        </p>
                      </div>
                    </div>

                    <div
                      className={`p-2 rounded-full transition-transform duration-300 ${
                        isActive
                          ? "bg-[#FAF0F3] text-[#A8606F] scale-110"
                          : "text-[#735653]/40 group-hover:text-[#4B2E2B] group-hover:translate-x-1"
                      }`}
                    >
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: Featured Pillar Detailed Canvas (Cols 8-12) */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <AnimatePresence mode="wait">
              <motion.div
                key={activePillar.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="bg-white rounded-3xl p-8 sm:p-10 border border-[#D4AF37]/50 shadow-[0_20px_50px_rgba(75,46,43,0.08)] relative overflow-hidden"
              >
                {/* Decorative background watermark */}
                <div className="absolute right-4 -top-6 font-editorial text-8xl font-bold text-[#E7B8C2]/20 select-none pointer-events-none">
                  {activePillar.number}
                </div>

                {/* Header with Icon and Label */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-2xl bg-[#FAF0F3] border border-[#E7B8C2]/40">
                    {getIcon(activePillar.icon)}
                  </div>
                  <div>
                    <span className="text-[11px] uppercase font-mono tracking-widest text-[#735653] block">
                      PILIER {activePillar.number}
                    </span>
                    <h4 className="font-editorial text-3xl sm:text-4xl text-[#4B2E2B] font-semibold">
                      {activePillar.title}
                    </h4>
                  </div>
                </div>

                {/* Core philosophy */}
                <p className="font-editorial text-xl sm:text-2xl text-[#803848] italic leading-snug mb-6 pb-6 border-b border-[#4B2E2B]/10">
                  « {activePillar.shortDesc} »
                </p>

                {/* Detailed Exploration */}
                <p className="text-sm sm:text-base text-[#735653] leading-relaxed mb-8">
                  {activePillar.fullDesc}
                </p>

                {/* Key Themes tags */}
                <div>
                  <span className="text-xs uppercase font-semibold text-[#4B2E2B] tracking-wider block mb-3">
                    Thèmes d&apos;approfondissement :
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {activePillar.keyThemes.map((theme) => (
                      <span
                        key={theme}
                        className="text-xs px-3 py-1.5 rounded-full bg-[#FAF0F3] border border-[#E7B8C2]/60 text-[#803848] font-medium"
                      >
                        {theme}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Golden Seal Note */}
                <div className="mt-8 pt-6 border-t border-[#4B2E2B]/10 flex items-center justify-between text-xs text-[#735653]">
                  <span>Programme officiel Zahra</span>
                  <span className="font-serif italic text-[#D4AF37]">Briller en soi</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
