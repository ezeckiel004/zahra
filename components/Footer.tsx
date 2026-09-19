"use client";

import Image from "next/image";
import Link from "next/link";
import { Sparkles } from "lucide-react";

export default function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-[#2B1513] text-[#F9F6EF] pt-20 pb-12 border-t border-[#D4AF37]/30">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-white/10">
          {/* Brand Column (Cols 1-5) */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <Link href="/" className="flex items-center gap-3 mb-5 group">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border border-[#D4AF37] bg-white">
                <Image
                  src="/images/zahra-logo.jpeg"
                  alt="Logo Zahra"
                  fill
                  sizes="48px"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-editorial text-3xl font-semibold text-[#F9F6EF] tracking-tight group-hover:text-[#E7B8C2] transition-colors">
                  Zahrã
                </span>
                <span className="text-[9px] uppercase tracking-[0.24em] text-[#D4AF37]">
                  Centre d&apos;accompagnement
                </span>
              </div>
            </Link>

            {/* Emblem Motto */}
            <p className="font-editorial text-2xl sm:text-3xl text-[#E7B8C2] italic leading-snug mb-4">
              « Grandir. Comprendre. Oser. Construire. »
            </p>

            <p className="text-sm text-[#F9F6EF]/70 font-light max-w-md leading-relaxed mb-6">
              Zahra accompagne les jeunes filles dans leur construction personnelle et leur développement, afin qu&apos;elles deviennent des jeunes femmes conscientes, confiantes et actrices de leur avenir.
            </p>

            <div className="inline-flex items-center gap-2 text-xs text-[#D4AF37] font-serif italic">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Briller en soi — APPRENDRE • GRANDIR • RÉUSSIR</span>
            </div>
          </div>

          {/* Navigation Column (Cols 6-8) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase font-mono tracking-[0.2em] text-[#D4AF37] font-semibold mb-6">
              NAVIGATION
            </h4>
            <ul className="space-y-3.5 text-sm text-[#F9F6EF]/80">
              <li>
                <a href="#programme" className="hover:text-[#E7B8C2] transition-colors">
                  Programme
                </a>
              </li>
              <li>
                <a href="#approche" className="hover:text-[#E7B8C2] transition-colors">
                  Notre approche
                </a>
              </li>
              <li>
                <a href="#piliers" className="hover:text-[#E7B8C2] transition-colors">
                  Les 8 Piliers
                </a>
              </li>
              <li>
                <a href="#parcours" className="hover:text-[#E7B8C2] transition-colors">
                  Parcours 12 semaines
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#E7B8C2] transition-colors">
                  Questions fréquentes (FAQ)
                </a>
              </li>
              <li>
                <a href="mailto:contact@zahra-programme.org" className="hover:text-[#E7B8C2] transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Connect Column (Cols 9-12) */}
          <div className="lg:col-span-4">
            <h4 className="text-xs uppercase font-mono tracking-[0.2em] text-[#D4AF37] font-semibold mb-6">
              REJOINDRE LA COMMUNAUTÉ
            </h4>
            <p className="text-sm text-[#F9F6EF]/70 font-light leading-relaxed mb-5">
              Suivez l&apos;actualité des promotions, les rencontres inspirantes et les initiatives du centre.
            </p>

            {/* Social Links */}
            <div className="flex flex-wrap gap-3 mb-6">
              {[
                { name: "Instagram", href: "https://instagram.com" },
                { name: "Facebook", href: "https://facebook.com" },
                { name: "LinkedIn", href: "https://linkedin.com" },
                { name: "Email", href: "mailto:contact@zahra-programme.org" },
              ].map((soc) => (
                <a
                  key={soc.name}
                  href={soc.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold px-4 py-2 rounded-full bg-white/5 hover:bg-[#E7B8C2] hover:text-[#4B2E2B] border border-white/10 transition-all duration-300"
                >
                  {soc.name}
                </a>
              ))}
            </div>

            <div className="p-4 rounded-2xl bg-white/5 border border-[#D4AF37]/20 text-xs text-[#F9F6EF]/80">
              <span className="font-semibold text-[#D4AF37] block mb-1">
                Initiative Panafricaine
              </span>
              <span>Dédiée à l&apos;émancipation et au rayonnement des jeunes filles.</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#F9F6EF]/60">
          <p>© {currentYear} Zahra. Tous droits réservés.</p>
          <div className="flex items-center gap-6">
            <a href="#mentions" className="hover:text-[#E7B8C2] transition-colors">
              Mentions légales
            </a>
            <a href="#confidentialite" className="hover:text-[#E7B8C2] transition-colors">
              Politique de confidentialité
            </a>
            <a href="#conditions" className="hover:text-[#E7B8C2] transition-colors">
              Conditions d&apos;utilisation
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
