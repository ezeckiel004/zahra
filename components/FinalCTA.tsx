"use client";

import Image from "next/image";
import { ArrowUpRight, Sparkles, Heart } from "lucide-react";
import { motion } from "motion/react";

interface FinalCTAProps {
  onOpenJoin: () => void;
}

export default function FinalCTA({ onOpenJoin }: FinalCTAProps) {
  return (
    <section className="relative py-28 sm:py-36 lg:py-44 bg-[#E7B8C2] text-[#4B2E2B] overflow-hidden">
      {/* Background Decorative Gold Rings */}
      <div
        className="pointer-events-none absolute -left-20 -top-20 w-96 h-96 rounded-full border border-[#D4AF37]/30 blur-sm"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-24 -bottom-24 w-[500px] h-[500px] rounded-full border border-white/40"
        aria-hidden="true"
      />

      {/* Editorial Watermark */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-editorial text-[18vw] leading-none text-[#4B2E2B]/[0.04] font-bold select-none"
        aria-hidden="true"
      >
        ZAHRA
      </div>

      <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10 text-center">
        {/* Logo Medallion integration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="relative w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-8 rounded-full overflow-hidden border-2 border-[#D4AF37] shadow-[0_10px_30px_rgba(75,46,43,0.15)] bg-white"
        >
          <Image
            src="/images/zahra-logo.jpeg"
            alt="Emblème Zahra"
            fill
            sizes="96px"
            className="object-cover"
          />
        </motion.div>

        {/* Top Micro Label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/40 border border-[#4B2E2B]/20 text-[#4B2E2B] text-xs font-semibold tracking-[0.25em] uppercase mb-8"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span>SON HISTOIRE COMMENCE ICI.</span>
        </motion.div>

        {/* Grand Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-sans text-3xl sm:text-5xl lg:text-7xl font-medium tracking-tight text-[#4B2E2B] leading-tight mb-8"
        >
          Et si elle commençait{" "}
          <span className="font-editorial italic font-normal text-[#803848] block sm:inline">
            par croire en elle ?
          </span>
        </motion.h2>

        {/* Body Description */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-base sm:text-xl text-[#4B2E2B]/85 max-w-2xl mx-auto font-normal leading-relaxed mb-12"
        >
          Zahra ouvre un espace pour apprendre, grandir, s&apos;exprimer et construire la suite avec plus de confiance.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
        >
          <button
            onClick={onOpenJoin}
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-9 py-4 rounded-full bg-[#4B2E2B] text-[#F9F6EF] font-semibold text-sm uppercase tracking-wider shadow-[0_12px_36px_rgba(75,46,43,0.22)] hover:bg-[#2B1513] transition-all duration-300 hover:-translate-y-0.5"
          >
            <span>Rejoindre Zahra</span>
            <ArrowUpRight className="w-4 h-4 text-[#D4AF37] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>

          <a
            href="#programme"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/50 hover:bg-white text-[#4B2E2B] border border-[#4B2E2B]/20 font-semibold text-sm uppercase tracking-wider transition-all duration-300 hover:-translate-y-0.5"
          >
            <span>Découvrir le programme</span>
            <Heart className="w-4 h-4 text-[#A8606F]" />
          </a>
        </motion.div>

        {/* Golden Subtitle flourish */}
        <div className="mt-14 flex items-center justify-center gap-3">
          <span className="w-12 h-[1px] bg-[#4B2E2B]/20" />
          <span className="font-serif italic text-sm text-[#4B2E2B] tracking-wide">
            APPRENDRE • GRANDIR • RÉUSSIR
          </span>
          <span className="w-12 h-[1px] bg-[#4B2E2B]/20" />
        </div>
      </div>
    </section>
  );
}
