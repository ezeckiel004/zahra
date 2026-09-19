"use client";

import Image from "next/image";
import { HERO_CONTENT } from "@/data/content";
import { ArrowDown, ArrowUpRight, Sparkles } from "lucide-react";
import { motion } from "motion/react";

interface HeroProps {
  onOpenJoin: () => void;
}

export default function Hero({ onOpenJoin }: HeroProps) {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-subtle-mesh">
      {/* Editorial Watermark Background */}
      <div
        className="pointer-events-none absolute right-4 md:right-16 top-20 select-none font-editorial text-[18vw] leading-none text-[#4B2E2B]/[0.03] font-bold z-0"
        aria-hidden="true"
      >
        01
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left / Editorial Content (Col 1-7) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Top Micro-label */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#E7B8C2]/25 border border-[#D4AF37]/35 text-[#4B2E2B] text-xs font-semibold tracking-widest uppercase mb-6 md:mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse" />
              <span>{HERO_CONTENT.label}</span>
            </div>

            {/* Main Editorial Headline with Serif Contrast */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-sans tracking-tight text-[#4B2E2B] leading-[1.12] mb-6 md:mb-8">
              <span>{HERO_CONTENT.titlePart1} </span>
              <span className="font-editorial italic font-normal text-[#A8606F] text-4xl sm:text-6xl lg:text-7xl">
                {HERO_CONTENT.titlePart2Serif}
              </span>
              <br className="hidden sm:block" />
              <span> {HERO_CONTENT.titlePart3} </span>
              <span className="font-editorial italic font-normal text-[#803848] text-4xl sm:text-6xl lg:text-7xl underline decoration-[#D4AF37]/40 underline-offset-8">
                {HERO_CONTENT.titlePart4Serif}
              </span>
            </h1>

            {/* Editorial Lead Paragraph */}
            <p className="text-base sm:text-lg lg:text-xl text-[#735653] max-w-2xl font-normal leading-relaxed mb-8 md:mb-10">
              {HERO_CONTENT.description}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <a
                href="#manifeste"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#4B2E2B] text-[#F9F6EF] font-semibold text-sm uppercase tracking-wider shadow-[0_10px_30px_rgba(75,46,43,0.12)] hover:bg-[#A8606F] transition-all duration-300 hover:shadow-[0_12px_32px_rgba(168,96,111,0.25)] hover:-translate-y-0.5"
              >
                <span>{HERO_CONTENT.primaryCta}</span>
                <ArrowDown className="w-4 h-4 text-[#D4AF37] transition-transform duration-300 group-hover:translate-y-1" />
              </a>

              <button
                onClick={onOpenJoin}
                className="group inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full bg-transparent text-[#4B2E2B] border border-[#4B2E2B]/25 font-semibold text-sm uppercase tracking-wider hover:border-[#D4AF37] hover:bg-[#E7B8C2]/15 transition-all duration-300 hover:-translate-y-0.5"
              >
                <span>{HERO_CONTENT.secondaryCta}</span>
                <ArrowUpRight className="w-4 h-4 text-[#A8606F] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>

            {/* Micro Editorial Sign-off */}
            <div className="mt-12 pt-8 border-t border-[#4B2E2B]/10 grid grid-cols-3 gap-6 w-full max-w-lg">
              {HERO_CONTENT.keyMetrics.map((metric) => (
                <div key={metric.label} className="flex flex-col">
                  <span className="font-editorial text-2xl sm:text-3xl font-bold text-[#4B2E2B]">
                    {metric.value}
                  </span>
                  <span className="text-[11px] uppercase tracking-wider text-[#735653] font-medium mt-0.5">
                    {metric.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right / Visual Composition (Col 8-12) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center relative"
          >
            {/* Background Halo & Organic Rose Rings */}
            <div
              className="absolute -inset-4 rounded-full bg-gradient-to-tr from-[#E7B8C2]/30 via-[#D4AF37]/15 to-transparent blur-2xl"
              aria-hidden="true"
            />

            {/* Editorial Card Framing */}
            <div className="relative w-full max-w-md bg-white/70 backdrop-blur-sm border border-[#D4AF37]/35 rounded-3xl p-6 sm:p-8 shadow-[0_20px_50px_rgba(75,46,43,0.08)]">
              {/* Top Accent Note */}
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-[#4B2E2B]/10">
                <span className="text-[10px] uppercase font-mono tracking-[0.2em] text-[#735653]">
                  CENTRE OFFICIEL
                </span>
                <span className="inline-flex items-center gap-1 text-xs font-serif italic text-[#D4AF37]">
                  <Sparkles className="w-3.5 h-3.5" />
                  {HERO_CONTENT.taglineEmblem}
                </span>
              </div>

              {/* Central Official Medallion */}
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden border border-[#D4AF37]/40 shadow-inner group">
                <Image
                  src="/images/zahra-logo.jpeg"
                  alt="Emblème officiel de Zahra — Centre d'accompagnement des jeunes filles"
                  fill
                  sizes="(max-width: 768px) 100vw, 420px"
                  priority
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Motto Ribbon */}
              <div className="mt-6 pt-4 border-t border-[#4B2E2B]/10 text-center">
                <p className="text-xs uppercase tracking-[0.28em] text-[#4B2E2B] font-semibold">
                  {HERO_CONTENT.motto}
                </p>
                <p className="text-[11px] text-[#735653] font-editorial italic mt-1">
                  « Chaque jeune fille porte une souveraineté à révéler. »
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
