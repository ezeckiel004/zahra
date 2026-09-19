"use client";

import { COMMUNITY_FEATURES } from "@/data/content";
import { ArrowUpRight, Users, Sparkles, HeartHandshake, BookOpen, Compass, ShieldCheck } from "lucide-react";
import { motion } from "motion/react";

interface CommunityProps {
  onOpenJoin: () => void;
}

const getFeatureIcon = (idx: number) => {
  switch (idx) {
    case 0:
      return <Users className="w-5 h-5 text-[#A8606F]" />;
    case 1:
      return <Sparkles className="w-5 h-5 text-[#D4AF37]" />;
    case 2:
      return <Compass className="w-5 h-5 text-[#803848]" />;
    case 3:
      return <HeartHandshake className="w-5 h-5 text-[#A8606F]" />;
    case 4:
      return <ShieldCheck className="w-5 h-5 text-[#D4AF37]" />;
    case 5:
      return <BookOpen className="w-5 h-5 text-[#803848]" />;
    default:
      return <Sparkles className="w-5 h-5 text-[#D4AF37]" />;
  }
};

export default function CommunitySection({ onOpenJoin }: CommunityProps) {
  return (
    <section id="communaute" className="py-24 md:py-36 bg-[#F4EFE6] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Narrative & CTA (Cols 1-5) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5"
          >
            <span className="text-xs uppercase font-mono tracking-[0.25em] text-[#A8606F] font-semibold block mb-3">
              ÉCOSYSTÈME DE SOUTIEN
            </span>
            <h2 className="text-3xl sm:text-5xl font-sans font-medium text-[#4B2E2B] leading-tight mb-6">
              Parce qu&apos;on grandit aussi{" "}
              <span className="font-editorial italic font-normal text-[#803848] block">
                au contact des autres.
              </span>
            </h2>
            <p className="text-base sm:text-lg text-[#735653] font-normal leading-relaxed mb-8">
              Zahra ne se limite pas aux séances. Le programme crée un environnement où les participantes peuvent apprendre, échanger, être accompagnées et rencontrer des personnes capables de contribuer à leur parcours.
            </p>

            <button
              onClick={onOpenJoin}
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#4B2E2B] text-[#F9F6EF] font-semibold text-sm uppercase tracking-wider shadow-[0_10px_30px_rgba(75,46,43,0.12)] hover:bg-[#A8606F] transition-all duration-300 hover:shadow-[0_12px_32px_rgba(168,96,111,0.25)] hover:-translate-y-0.5"
            >
              <span>Découvrir notre approche</span>
              <ArrowUpRight className="w-4 h-4 text-[#D4AF37] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </motion.div>

          {/* Right Column: 6 Feature Cards Grid (Cols 6-12) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            {COMMUNITY_FEATURES.map((feat, idx) => (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="bg-white rounded-3xl p-6 sm:p-7 border border-[#4B2E2B]/10 hover:border-[#D4AF37]/60 shadow-[0_4px_20px_rgba(75,46,43,0.02)] hover:shadow-[0_12px_30px_rgba(75,46,43,0.06)] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="p-3 rounded-2xl bg-[#FAF0F3] border border-[#E7B8C2]/40 w-fit mb-4">
                    {getFeatureIcon(idx)}
                  </div>
                  <h3 className="font-editorial text-2xl font-semibold text-[#4B2E2B] mb-2">
                    {feat.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#735653] leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#4B2E2B]/5 flex items-center justify-between text-[11px] font-mono text-[#D4AF37]">
                  <span>0{idx + 1}</span>
                  <span>✦</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
