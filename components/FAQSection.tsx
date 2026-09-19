"use client";

import { useState } from "react";
import { FAQ_ITEMS } from "@/data/content";
import { ChevronDown, HelpCircle, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 md:py-36 bg-[#F9F6EF] relative">
      <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <span className="text-xs uppercase font-mono tracking-[0.25em] text-[#A8606F] font-semibold block mb-3">
            QUESTIONS FRÉQUENTES
          </span>
          <h2 className="text-3xl sm:text-5xl font-sans font-medium text-[#4B2E2B] leading-tight mb-6">
            Tout ce que vous devez savoir sur{" "}
            <span className="font-editorial italic font-normal text-[#803848]">
              Zahra.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-[#735653] font-normal leading-relaxed max-w-xl mx-auto">
            Les réponses aux interrogations régulières des participantes, des parents et des institutions partenaires.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl border border-[#4B2E2B]/10 overflow-hidden transition-all duration-300 hover:border-[#D4AF37]/60"
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${item.id}`}
                  id={`faq-btn-${item.id}`}
                  className="w-full flex items-center justify-between p-6 sm:p-7 text-left text-[#4B2E2B] font-medium transition-colors focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
                >
                  <span className="font-sans text-base sm:text-lg pr-4 font-semibold">
                    {item.question}
                  </span>
                  <div
                    className={`p-2 rounded-full transition-transform duration-300 shrink-0 ${
                      isOpen
                        ? "rotate-180 bg-[#FAF0F3] text-[#A8606F]"
                        : "bg-[#F9F6EF] text-[#735653]"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-answer-${item.id}`}
                      role="region"
                      aria-labelledby={`faq-btn-${item.id}`}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden border-t border-[#4B2E2B]/5"
                    >
                      <div className="p-6 sm:p-7 pt-2 text-sm sm:text-base text-[#735653] leading-relaxed font-light">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Need more help note */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-[#F4EFE6] border border-[#D4AF37]/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-left">
            <HelpCircle className="w-5 h-5 text-[#A8606F] shrink-0" />
            <p className="text-xs sm:text-sm text-[#4B2E2B]">
              Une question spécifique pour votre situation ou celle de votre fille ?
            </p>
          </div>
          <a
            href="mailto:contact@zahra-programme.org"
            className="text-xs uppercase tracking-wider font-semibold text-[#803848] hover:text-[#4B2E2B] underline decoration-[#D4AF37] underline-offset-4 shrink-0 inline-flex items-center gap-1"
          >
            <span>Écrire à l&apos;équipe</span>
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
          </a>
        </div>
      </div>
    </section>
  );
}
