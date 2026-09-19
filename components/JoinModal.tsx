"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { X, Sparkles, Check, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface JoinModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function JoinModal({ isOpen, onClose }: JoinModalProps) {
  const [profile, setProfile] = useState<"girl" | "parent" | "mentor" | "partner">("girl");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState("");
  const [motivation, setMotivation] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
      setIsSubmitted(false);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this can connect to backend API / CRM / Airtable / Supabase
    setIsSubmitted(true);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#4B2E2B]/60 backdrop-blur-sm"
            aria-hidden="true"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="join-modal-title"
            className="relative w-full max-w-xl bg-[#F9F6EF] rounded-3xl p-6 sm:p-10 border border-[#D4AF37]/40 shadow-2xl z-10 my-8 max-h-[90vh] overflow-y-auto"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              aria-label="Fermer"
              className="absolute top-6 right-6 p-2 rounded-full text-[#4B2E2B] hover:bg-[#E7B8C2]/30 transition-colors focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
            >
              <X className="w-5 h-5" />
            </button>

            {!isSubmitted ? (
              <div>
                {/* Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden border border-[#D4AF37] shrink-0">
                    <Image
                      src="/images/zahra-logo.jpeg"
                      alt="Logo Zahra"
                      fill
                      sizes="40px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-mono tracking-widest text-[#A8606F] font-semibold block">
                      CANDIDATURE & CONTACT
                    </span>
                    <h3
                      id="join-modal-title"
                      className="font-editorial text-2xl sm:text-3xl font-semibold text-[#4B2E2B]"
                    >
                      Rejoindre Zahra
                    </h3>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#735653] font-light leading-relaxed mb-6">
                  Remplissez ce formulaire pour manifester votre intérêt pour les prochaines cohortes ou pour proposer une collaboration.
                </p>

                {/* Profile Selector */}
                <div className="mb-6">
                  <label className="text-xs font-semibold text-[#4B2E2B] uppercase tracking-wider block mb-2">
                    Vous êtes :
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {[
                      { key: "girl", label: "Jeune fille" },
                      { key: "parent", label: "Parent / Tuteur" },
                      { key: "mentor", label: "Mentor" },
                      { key: "partner", label: "Partenaire" },
                    ].map((item) => (
                      <button
                        type="button"
                        key={item.key}
                        onClick={() => setProfile(item.key as any)}
                        className={`text-xs py-2 px-3 rounded-xl border text-center transition-all ${
                          profile === item.key
                            ? "bg-[#4B2E2B] text-[#F9F6EF] border-[#4B2E2B] font-semibold shadow-sm"
                            : "bg-white text-[#4B2E2B] border-[#4B2E2B]/15 hover:border-[#D4AF37]"
                        }`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="text-xs font-medium text-[#4B2E2B] block mb-1">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Ex: Amina Diallo"
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#4B2E2B]/15 focus:border-[#D4AF37] focus:outline-none text-sm text-[#4B2E2B]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-medium text-[#4B2E2B] block mb-1">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="amina@exemple.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#4B2E2B]/15 focus:border-[#D4AF37] focus:outline-none text-sm text-[#4B2E2B]"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-medium text-[#4B2E2B] block mb-1">
                        Téléphone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+225 07..."
                        className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#4B2E2B]/15 focus:border-[#D4AF37] focus:outline-none text-sm text-[#4B2E2B]"
                      />
                    </div>
                  </div>

                  {profile === "girl" && (
                    <div>
                      <label className="text-xs font-medium text-[#4B2E2B] block mb-1">
                        Âge de la participante
                      </label>
                      <input
                        type="number"
                        min="1"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        placeholder="Votre âge"
                        className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#4B2E2B]/15 focus:border-[#D4AF37] focus:outline-none text-sm text-[#4B2E2B]"
                      />
                    </div>
                  )}

                  <div>
                    <label className="text-xs font-medium text-[#4B2E2B] block mb-1">
                      Message / Motivations
                    </label>
                    <textarea
                      rows={3}
                      value={motivation}
                      onChange={(e) => setMotivation(e.target.value)}
                      placeholder="Partagez vos attentes ou questions..."
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#4B2E2B]/15 focus:border-[#D4AF37] focus:outline-none text-sm text-[#4B2E2B]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full mt-6 py-3.5 px-6 rounded-full bg-[#4B2E2B] hover:bg-[#A8606F] text-[#F9F6EF] font-semibold text-sm uppercase tracking-wider shadow-md transition-all flex items-center justify-center gap-2"
                  >
                    <span>Envoyer ma demande</span>
                    <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
                  </button>

                  <p className="text-[11px] text-[#735653] text-center pt-2">
                    Vos données personnelles restent strictement confidentielles.
                  </p>
                </form>
              </div>
            ) : (
              <div className="py-8 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#FAF0F3] border border-[#D4AF37] text-[#D4AF37] flex items-center justify-center mx-auto shadow-sm">
                  <Check className="w-8 h-8 text-[#A8606F]" />
                </div>
                <h3 className="font-editorial text-3xl font-semibold text-[#4B2E2B]">
                  Merci {fullName}
                </h3>
                <p className="text-sm text-[#735653] max-w-sm mx-auto leading-relaxed">
                  Votre demande a bien été enregistrée. L&apos;équipe de Zahra prendra contact avec vous dans les plus brefs délais pour vous présenter les modalités de la prochaine cohorte.
                </p>
                <div className="pt-4">
                  <button
                    onClick={onClose}
                    className="px-8 py-2.5 rounded-full bg-[#4B2E2B] text-[#F9F6EF] text-xs uppercase font-semibold tracking-wider hover:bg-[#A8606F] transition-colors"
                  >
                    Retour au site
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
