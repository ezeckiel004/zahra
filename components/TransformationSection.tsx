"use client";

import { TRANSFORMATION_ITEMS } from "@/data/content";
import { ArrowRight, Sparkles, Compass } from "lucide-react";
import { motion } from "motion/react";

export default function TransformationSection() {
  return (
    <section className="py-24 md:py-36 bg-[#F9F6EF] relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <span className="text-xs uppercase font-mono tracking-[0.25em] text-[#A8606F] font-semibold block mb-3">
            LE CHEMINEMENT
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-sans font-medium text-[#4B2E2B] leading-tight mb-6">
            De la découverte{" "}
            <span className="font-editorial italic font-normal text-[#803848]">
              à la transformation.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-[#735653] font-normal leading-relaxed">
            Une évolution respectueuse du rythme de chaque participante, favorisant un éveil progressif plutôt que des promesses artificielles.
          </p>
        </div>

        {/* Conceptual Journey Comparison Table */}
        <div className="space-y-4 max-w-4xl mx-auto">
          {TRANSFORMATION_ITEMS.map((item, idx) => (
            <motion.div
              key={item.dimension}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="group bg-white rounded-2xl p-5 sm:p-6 border border-[#4B2E2B]/10 hover:border-[#D4AF37]/50 shadow-[0_2px_12px_rgba(75,46,43,0.02)] transition-all duration-300"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 items-center">
                {/* Left: Dimension & Before State */}
                <div className="md:col-span-5 flex flex-col">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#735653]/70 mb-1">
                    {item.dimension} • Point de départ
                  </span>
                  <p className="text-sm sm:text-base text-[#4B2E2B]/80 font-normal">
                    {item.before}
                  </p>
                </div>

                {/* Center: Bridge Zahra Icon */}
                <div className="md:col-span-2 flex items-center justify-center py-2 md:py-0">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF0F3] border border-[#E7B8C2]/50 text-[11px] font-medium text-[#803848]">
                    <Compass className="w-3 h-3 text-[#D4AF37]" />
                    <span className="hidden sm:inline">Zahra</span>
                    <ArrowRight className="w-3 h-3 text-[#A8606F]" />
                  </div>
                </div>

                {/* Right: After State / Transformation */}
                <div className="md:col-span-5 flex flex-col md:text-right">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#A8606F] font-semibold mb-1">
                    Évolution favorisée
                  </span>
                  <p className="text-sm sm:text-base font-editorial text-lg text-[#803848] font-medium leading-snug">
                    « {item.after} »
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Ethical Note / Realistic disclaimer */}
        <div className="mt-12 text-center max-w-xl mx-auto">
          <p className="text-xs text-[#735653]/80 leading-relaxed font-light flex items-center justify-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
            <span>
              Chaque jeune fille chemine selon sa propre histoire : Zahra n&apos;impose aucun modèle unique, mais nourrit l&apos;autonomie et l&apos;esprit critique.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
