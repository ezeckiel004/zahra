"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS } from "@/data/content";
import { Menu, X, ArrowUpRight, Sparkles } from "lucide-react";

interface NavbarProps {
  onOpenJoin: () => void;
}

export default function Navbar({ onOpenJoin }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? "py-3 bg-[#F9F6EF]/90 backdrop-blur-md border-b border-[#4B2E2B]/10 shadow-[0_4px_24px_rgba(75,46,43,0.04)]"
            : "py-5 md:py-6 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus-visible:ring-2 focus-visible:ring-[#D4AF37] rounded-full p-1 transition-transform"
            aria-label="Zahra — Accueil"
          >
            <div className="relative w-10 h-10 md:w-11 md:h-11 rounded-full overflow-hidden border border-[#D4AF37]/50 shadow-sm transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/images/zahra-logo.jpeg"
                alt="Logo Zahra"
                fill
                sizes="48px"
                className="object-cover"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-editorial text-2xl md:text-3xl font-semibold tracking-tight text-[#4B2E2B] leading-none group-hover:text-[#A8606F] transition-colors">
                Zahrã
              </span>
              <span className="text-[9px] uppercase tracking-[0.24em] text-[#735653] font-medium mt-0.5">
                Accompagnement
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav
            className="hidden md:flex items-center gap-7 lg:gap-9 text-sm font-medium text-[#4B2E2B]/85"
            aria-label="Navigation principale"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative py-1 transition-colors hover:text-[#A8606F] after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#D4AF37] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Button */}
          <div className="hidden sm:flex items-center gap-4">
            <button
              onClick={onOpenJoin}
              className="group relative inline-flex items-center gap-2 px-5 py-2.5 text-xs md:text-sm font-semibold tracking-wide uppercase rounded-full bg-[#4B2E2B] text-[#F9F6EF] border border-[#D4AF37]/30 shadow-sm transition-all duration-300 hover:bg-[#A8606F] hover:shadow-[0_4px_16px_rgba(168,96,111,0.25)] hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Rejoindre Zahra</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#D4AF37] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            className="md:hidden p-2 rounded-full text-[#4B2E2B] hover:bg-[#E7B8C2]/20 transition-colors focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </header>

      {/* Fullscreen Mobile Drawer */}
      <div
        className={`fixed inset-0 z-50 bg-[#4B2E2B]/40 backdrop-blur-sm md:hidden transition-opacity duration-300 ${
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden="true"
      />

      <aside
        className={`fixed top-0 right-0 bottom-0 z-50 w-full max-w-xs bg-[#F9F6EF] border-l border-[#D4AF37]/30 shadow-2xl p-6 flex flex-col justify-between md:hidden transition-transform duration-500 ease-out ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-label="Menu mobile"
      >
        <div>
          <div className="flex items-center justify-between pb-6 border-b border-[#4B2E2B]/10">
            <div className="flex items-center gap-2.5">
              <div className="relative w-9 h-9 rounded-full overflow-hidden border border-[#D4AF37]/50">
                <Image
                  src="/images/zahra-logo.jpeg"
                  alt="Logo Zahra"
                  fill
                  sizes="36px"
                  className="object-cover"
                />
              </div>
              <span className="font-editorial text-2xl font-semibold text-[#4B2E2B]">
                Zahrã
              </span>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Fermer le menu"
              className="p-2 rounded-full text-[#4B2E2B] hover:bg-[#E7B8C2]/30 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <nav className="mt-8 flex flex-col space-y-4">
            {NAV_LINKS.map((link, idx) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between py-2 text-base font-medium text-[#4B2E2B] hover:text-[#A8606F] border-b border-[#4B2E2B]/5 transition-colors"
              >
                <span>{link.label}</span>
                <span className="text-xs font-mono text-[#D4AF37]">
                  0{idx + 1}
                </span>
              </a>
            ))}
          </nav>
        </div>

        <div className="pt-6 border-t border-[#4B2E2B]/10 space-y-3">
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenJoin();
            }}
            className="w-full py-3 px-5 text-sm font-semibold tracking-wide uppercase rounded-full bg-[#4B2E2B] text-[#F9F6EF] flex items-center justify-center gap-2 shadow-sm hover:bg-[#A8606F] transition-all"
          >
            <span>Rejoindre Zahra</span>
            <Sparkles className="w-4 h-4 text-[#D4AF37]" />
          </button>
          <p className="text-center text-[11px] text-[#735653]">
            Un parcours de souveraineté & d&apos;avenir
          </p>
        </div>
      </aside>
    </>
  );
}
