"use client";

import { MANIFESTO_CONTENT } from "@/data/content";
import { Sparkles } from "lucide-react";
import { motion } from "motion/react";

export default function ManifestoSection() {
  return (
    <section
      id="manifeste"
      className="relative py-28 sm:py-36 lg:py-44 bg-[#4B2E2B] text-[#F9F6EF] overflow-hidden bg-dark-mesh"
    >
      {/* Editorial Watermark background */}
      <div
        className="pointer-events-none absolute left-6 top-12 font-editorial text-[14vw] leading-none text-white/[0.02] select-none"
        aria-hidden="true"
      >
        CONVICTION
      </div>

      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 text-center">
        {/* Top subtle badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#D4AF37]/40 bg-white/5 text-[#D4AF37] text-xs font-semibold tracking-[0.25em] uppercase mb-10 md:mb-14"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span>{MANIFESTO_CONTENT.label}</span>
        </motion.div>

        {/* Grand Manifesto Text with Serif Emphasis */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="font-editorial text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-normal leading-[1.25] tracking-tight mb-12 sm:mb-16"
        >
          <span>Chaque jeune fille mérite un </span>
          <span className="text-[#E7B8C2] italic">espace</span>
          <span> où elle peut </span>
          <span className="text-[#F9F6EF] border-b border-[#D4AF37]/50 pb-1">
            apprendre à se connaître
          </span>
          <span>, </span>
          <br className="hidden md:block" />
          <span>comprendre </span>
          <span className="text-[#D4AF37] italic">sa valeur</span>
          <span>, faire entendre </span>
          <span className="text-[#E7B8C2]">sa voix</span>
          <br className="hidden md:block" />
          <span> et </span>
          <span className="italic text-[#D4AF37]">imaginer son avenir</span>.
        </motion.div>

        {/* Poetic Secondary Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-2xl mx-auto pt-8 border-t border-white/10"
        >
          <p className="text-base sm:text-lg text-[#F9F6EF]/75 font-sans font-light leading-relaxed">
            {MANIFESTO_CONTENT.secondaryText}
          </p>
          <div className="mt-8 flex justify-center items-center gap-3">
            <span className="h-[1px] w-12 bg-[#D4AF37]/50" />
            <span className="text-xs uppercase tracking-[0.3em] text-[#D4AF37] font-medium font-serif italic">
              Briller en soi
            </span>
            <span className="h-[1px] w-12 bg-[#D4AF37]/50" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
