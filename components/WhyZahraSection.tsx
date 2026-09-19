"use client";

import { WHY_ZAHRA_CONTENT } from "@/data/content";
import { ArrowRight, Quote } from "lucide-react";
import { motion } from "motion/react";

export default function WhyZahraSection() {
  return (
    <section id="approche" className="py-24 md:py-32 lg:py-40 bg-[#F9F6EF] relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Editorial Statement (Cols 1-6) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 lg:sticky lg:top-28"
          >
            {/* Category Tag */}
            <span className="text-xs uppercase font-mono tracking-[0.25em] text-[#A8606F] font-semibold block mb-4">
              {WHY_ZAHRA_CONTENT.badge}
            </span>

            {/* Editorial Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-medium text-[#4B2E2B] leading-tight mb-6">
              Grandir ne devrait jamais{" "}
              <span className="font-editorial italic font-normal text-[#A8606F] block sm:inline">
                signifier grandir seule.
              </span>
            </h2>

            {/* Body Text */}
            <div className="space-y-5 text-[#735653] text-base sm:text-lg leading-relaxed mb-8">
              <p>{WHY_ZAHRA_CONTENT.lead}</p>
              <p className="font-medium text-[#4B2E2B] text-lg sm:text-xl border-l-2 border-[#D4AF37] pl-4 italic font-editorial">
                {WHY_ZAHRA_CONTENT.conclusion}
              </p>
            </div>

            {/* Transition Badge */}
            <div className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-[#FAF0F3] border border-[#E7B8C2]/60 text-[#803848] font-semibold text-sm shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#A8606F]" />
              <span>{WHY_ZAHRA_CONTENT.transition}</span>
              <ArrowRight className="w-4 h-4 text-[#A8606F]" />
            </div>
          </motion.div>

          {/* Right Column: 3 Visual Observation Cards (Cols 7-12) */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-8">
            {WHY_ZAHRA_CONTENT.observations.map((obs, idx) => (
              <motion.article
                key={obs.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="group relative bg-[#FFFFFF] border border-[#4B2E2B]/10 hover:border-[#D4AF37]/60 rounded-3xl p-7 sm:p-9 shadow-[0_8px_30px_rgba(75,46,43,0.03)] hover:shadow-[0_16px_40px_rgba(75,46,43,0.07)] transition-all duration-300"
              >
                {/* Header with Number & Quote Icon */}
                <div className="flex items-center justify-between mb-4">
                  <span className="font-editorial text-3xl sm:text-4xl font-bold text-[#D4AF37]/80 group-hover:text-[#D4AF37] transition-colors">
                    {obs.num}
                  </span>
                  <Quote className="w-5 h-5 text-[#E7B8C2] group-hover:text-[#A8606F] transition-colors" />
                </div>

                {/* Observation Quote */}
                <h3 className="font-editorial text-2xl sm:text-3xl text-[#4B2E2B] leading-snug mb-3">
                  {obs.voice}
                </h3>

                {/* Contextual Narrative */}
                <p className="text-sm sm:text-base text-[#735653] font-sans leading-relaxed">
                  {obs.context}
                </p>

                {/* Bottom line accent */}
                <div className="w-8 h-[2px] bg-[#E7B8C2] mt-6 group-hover:w-16 group-hover:bg-[#D4AF37] transition-all duration-300" />
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
