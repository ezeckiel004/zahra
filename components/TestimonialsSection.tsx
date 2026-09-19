"use client";

import { TESTIMONIALS } from "@/data/content";
import { Quote, Sparkles } from "lucide-react";
import { motion } from "motion/react";

export default function TestimonialsSection() {
  return (
    <section className="py-24 md:py-36 bg-[#F9F6EF] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <span className="text-xs uppercase font-mono tracking-[0.25em] text-[#A8606F] font-semibold block mb-3">
            ÉCHOS & RÉSONANCES
          </span>
          <h2 className="text-3xl sm:text-5xl font-sans font-medium text-[#4B2E2B] leading-tight mb-6">
            Des voix qui apprennent{" "}
            <span className="font-editorial italic font-normal text-[#803848]">
              à résonner.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-[#735653] font-normal leading-relaxed">
            Espaces de recueil et retours d&apos;expérience des promotions pilotes et de leur entourage.
          </p>
        </div>

        {/* Testimonial Cards Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="bg-white rounded-3xl p-8 sm:p-9 border border-[#4B2E2B]/10 hover:border-[#D4AF37]/60 shadow-[0_4px_24px_rgba(75,46,43,0.03)] hover:shadow-[0_16px_40px_rgba(75,46,43,0.06)] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Quote Icon & Gold Star */}
                <div className="flex items-center justify-between mb-6">
                  <Quote className="w-8 h-8 text-[#E7B8C2]" />
                  <Sparkles className="w-4 h-4 text-[#D4AF37]" />
                </div>

                {/* Editorial Quote */}
                <blockquote className="font-editorial text-xl sm:text-2xl text-[#4B2E2B] leading-snug italic mb-6">
                  {item.quote}
                </blockquote>
              </div>

              {/* Author & Role Footer */}
              <div className="pt-6 border-t border-[#4B2E2B]/10">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#A8606F]" />
                  <span className="font-sans text-sm font-semibold text-[#4B2E2B]">
                    {item.author}
                  </span>
                </div>
                <p className="text-xs text-[#735653] font-medium mt-1">
                  {item.role}
                </p>
                {item.isPlaceholder && (
                  <span className="inline-block mt-2 text-[10px] font-mono uppercase tracking-wider text-[#A8606F]/70 bg-[#FAF0F3] px-2 py-0.5 rounded">
                    Placeholder administrable
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
