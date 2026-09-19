"use client";

import { JOURNEY_WEEKS } from "@/data/content";
import { ArrowUpRight, CheckCircle2, Sparkles } from "lucide-react";
import { motion } from "motion/react";

interface JourneyProps {
  onOpenJoin: () => void;
}

export default function JourneySection({ onOpenJoin }: JourneyProps) {
  return (
    <section id="parcours" className="py-24 md:py-36 bg-[#F9F6EF] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 md:mb-28">
          <span className="text-xs uppercase font-mono tracking-[0.25em] text-[#A8606F] font-semibold block mb-3">
            CURRICULUM D&apos;EXCELLENCE
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-sans font-medium text-[#4B2E2B] leading-tight mb-6">
            12 semaines pour{" "}
            <span className="font-editorial italic font-normal text-[#803848]">
              avancer autrement.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-[#735653] font-normal leading-relaxed">
            Un parcours progressif où chaque étape prépare la suivante, articulé en 4 phases fondamentales pour une maturation sereine et durable.
          </p>
        </div>

        {/* Editorial Vertical Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Continuous Central/Left Vertical Line */}
          <div
            className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2 bg-gradient-to-b from-[#D4AF37]/20 via-[#D4AF37] to-[#A8606F]/40"
            aria-hidden="true"
          />

          <div className="space-y-12 sm:space-y-16">
            {JOURNEY_WEEKS.map((step, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: 0.05 }}
                  className={`relative flex flex-col sm:flex-row items-start sm:items-center ${
                    isEven ? "sm:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline Central Node Marker */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#F9F6EF] border-2 border-[#D4AF37] shadow-sm flex items-center justify-center z-10">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#A8606F]" />
                  </div>

                  {/* Content Card */}
                  <div
                    className={`ml-12 sm:ml-0 sm:w-1/2 ${
                      isEven ? "sm:pl-12" : "sm:pr-12 sm:text-right"
                    }`}
                  >
                    <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#4B2E2B]/10 hover:border-[#D4AF37]/50 shadow-[0_4px_20px_rgba(75,46,43,0.03)] hover:shadow-[0_12px_30px_rgba(75,46,43,0.06)] transition-all duration-300">
                      {/* Step Header */}
                      <div
                        className={`flex items-center gap-3 mb-3 ${
                          isEven ? "" : "sm:justify-end"
                        }`}
                      >
                        <span className="font-editorial text-2xl sm:text-3xl font-bold text-[#D4AF37]">
                          {step.number}
                        </span>
                        <span className="text-[11px] uppercase font-mono tracking-wider text-[#A8606F] font-semibold bg-[#FAF0F3] px-2.5 py-1 rounded-full border border-[#E7B8C2]/40">
                          {step.phase}
                        </span>
                      </div>

                      {/* Step Title */}
                      <h3 className="font-editorial text-2xl sm:text-3xl text-[#4B2E2B] font-medium mb-3">
                        {step.title}
                      </h3>

                      {/* Summary */}
                      <p className="text-sm sm:text-base text-[#735653] leading-relaxed mb-4">
                        {step.summary}
                      </p>

                      {/* Milestone badge */}
                      <div
                        className={`inline-flex items-center gap-2 text-xs font-medium text-[#4B2E2B] bg-[#F4EFE6] px-3 py-1.5 rounded-xl ${
                          isEven ? "" : "sm:ml-auto"
                        }`}
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37]" />
                        <span>Acquis : {step.milestone}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom Call to Action */}
        <div className="mt-20 sm:mt-28 text-center">
          <button
            onClick={onOpenJoin}
            className="group inline-flex items-center gap-3 px-9 py-4 rounded-full bg-[#4B2E2B] text-[#F9F6EF] font-semibold text-sm uppercase tracking-wider shadow-[0_10px_30px_rgba(75,46,43,0.12)] hover:bg-[#A8606F] transition-all duration-300 hover:shadow-[0_12px_32px_rgba(168,96,111,0.25)] hover:-translate-y-0.5"
          >
            <span>Découvrir le parcours complet</span>
            <ArrowUpRight className="w-4 h-4 text-[#D4AF37] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
          <div className="mt-4 flex items-center justify-center gap-2 text-xs text-[#735653]">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Cohortes limitées pour garantir la qualité de l&apos;écoute</span>
          </div>
        </div>
      </div>
    </section>
  );
}
