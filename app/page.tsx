"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ManifestoSection from "@/components/ManifestoSection";
import WhyZahraSection from "@/components/WhyZahraSection";
import PillarsSection from "@/components/PillarsSection";
import JourneySection from "@/components/JourneySection";
import MethodSection from "@/components/MethodSection";
import TransformationSection from "@/components/TransformationSection";
import CommunitySection from "@/components/CommunitySection";
import FinalCTA from "@/components/FinalCTA";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import JoinModal from "@/components/JoinModal";

export default function Home() {
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);

  const handleOpenJoin = () => setIsJoinModalOpen(true);
  const handleCloseJoin = () => setIsJoinModalOpen(false);

  return (
    <>
      {/* Navigation */}
      <Navbar onOpenJoin={handleOpenJoin} />

      {/* Main Experience */}
      <main id="main-content" className="flex-1">
        {/* Section 1 & 2: Hero */}
        <div id="programme">
          <Hero onOpenJoin={handleOpenJoin} />
        </div>

        {/* Section 3: Manifeste */}
        <ManifestoSection />

        {/* Section 4: Pourquoi Zahra / Le Problème */}
        <WhyZahraSection />

        {/* Section 5: Les 8 Piliers de Zahra */}
        <PillarsSection />

        {/* Section 6: Parcours 12 semaines */}
        <JourneySection onOpenJoin={handleOpenJoin} />

        {/* Section 7: La Méthode Zahra */}
        <MethodSection />

        {/* Section 8: La Transformation */}
        <TransformationSection />

        {/* Section 9: Communauté & Mentorat */}
        <CommunitySection onOpenJoin={handleOpenJoin} />

        {/* Section 10: CTA Final */}
        <FinalCTA onOpenJoin={handleOpenJoin} />

        {/* Section 12: FAQ */}
        <FAQSection />
      </main>

      {/* Section 13: Footer */}
      <Footer />

      {/* Candidature & Contact Interactive Modal */}
      <JoinModal isOpen={isJoinModalOpen} onClose={handleCloseJoin} />
    </>
  );
}
