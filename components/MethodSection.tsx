"use client";

import { METHOD_PRINCIPLES } from "@/data/content";
import { BookOpen, MessagesSquare, Sparkles, UserCheck, Zap } from "lucide-react";
import { motion } from "motion/react";

const getMethodIcon = (title: string) => {
  switch (title) {
    case "APPRENDRE":
      return <BookOpen className="w-5 h-5 text-[#D4AF37]" />;
    case "ÉCHANGER":
      return <MessagesSquare className="w-5 h-5 text-[#A8606F]" />;
    case "EXPÉRIMENTER":
      return <Sparkles className="w-5 h-5 text-[#D4AF37]" />;
    case "ÊTRE ACCOMPAGNÉE":
      return <UserCheck className="w-5 h-5 text-[#A8606F]" />;
    case "AGIR":
      return <Zap className="w-5 h-5 text-[#D4AF37]" />;
    default:
      return <Sparkles className="w-5 h-5 text-[#D4AF37]" />;
  }
};

export default function MethodSection() {
  return (
    <section id="methode" className="py-24 md:py-36 bg-[#F4EFE6] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-24">
          <span className="text-xs uppercase font-mono tracking-[0.25em] text-[#A8606F] font-semibold block mb-3">
            PÉDAGOGIE VIVANTE
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-sans font-medium text-[#4B2E2B] leading-tight mb-6">
            Nous ne voulons pas seulement transmettre.{" "}
            <span className="font-editorial italic font-normal text-[#803848] block">
              Nous voulons faire vivre.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-[#735653] font-normal leading-relaxed">
            La transformation ne naît pas d&apos;un cours magistral, mais d&apos;un cycle continu d&apos;appropriation, de résonance humaine et de passage à l&apos;action.
          </p>
        </div>

        {/* 5-Step Connected Cycle Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 relative">
          {METHOD_PRINCIPLES.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative bg-white rounded-3xl p-7 border border-[#4B2E2B]/10 hover:border-[#D4AF37] shadow-[0_4px_20px_rgba(75,46,43,0.03)] hover:shadow-[0_16px_36px_rgba(75,46,43,0.08)] transition-all duration-300 flex flex-col justify-between"
            >
              {/* Top Row: Step Number & Icon */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-editorial text-3xl font-bold text-[#D4AF37]">
                    {item.stepNumber}
                  </span>
                  <div className="p-2.5 rounded-2xl bg-[#FAF0F3] border border-[#E7B8C2]/40 group-hover:scale-110 transition-transform">
                    {getMethodIcon(item.title)}
                  </div>
                </div>

                {/* Principle Title */}
                <h3 className="font-sans text-lg font-bold tracking-wider text-[#4B2E2B] mb-2 group-hover:text-[#A8606F] transition-colors">
                  {item.title}
                </h3>

                {/* Short Mantra */}
                <p className="font-editorial text-lg text-[#803848] italic leading-snug mb-3">
                  « {item.desc} »
                </p>

                {/* Detail */}
                <p className="text-xs sm:text-sm text-[#735653] leading-relaxed">
                  {item.detail}
                </p>
              </div>

              {/* Bottom Subtle Indicator */}
              <div className="mt-8 pt-4 border-t border-[#4B2E2B]/5 flex items-center justify-between text-[11px] font-mono text-[#735653]">
                <span>Étape {idx + 1}/5</span>
                <span className="text-[#D4AF37]">●</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Central Cyclical Motto Card */}
        <div className="mt-16 p-6 sm:p-8 rounded-3xl bg-white/70 border border-[#D4AF37]/35 max-w-2xl mx-auto text-center backdrop-blur-sm">
          <p className="font-editorial text-xl sm:text-2xl text-[#4B2E2B] italic">
            « Une boucle vertueuse où chaque apprentissage devient une décision, et chaque décision forge l&apos;autonomie. »
          </p>
        </div>
      </div>
    </section>
  );
}
