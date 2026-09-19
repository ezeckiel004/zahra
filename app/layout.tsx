import type { Metadata, Viewport } from "next";
import { Manrope, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const viewport: Viewport = {
  themeColor: "#F9F6EF",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Zahra — Grandir, comprendre, oser, construire",
  description:
    "Zahra accompagne les jeunes filles dans un parcours de découverte de soi, de confiance, de maturité, d'autonomie et de construction de leur avenir.",
  keywords: [
    "Zahra",
    "accompagnement jeunes filles",
    "développement personnel",
    "confiance en soi",
    "intelligence émotionnelle",
    "autonomie",
    "sororité",
    "mentorat",
    "leadership féminin",
  ],
  authors: [{ name: "Zahra" }],
  creator: "Zahra",
  publisher: "Zahra",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://zahra-programme.org"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/images/zahra-logo.jpeg", type: "image/jpeg" },
      { url: "/favicon.ico" },
    ],
    shortcut: ["/images/zahra-logo.jpeg"],
    apple: [
      { url: "/images/zahra-logo.jpeg", sizes: "180x180", type: "image/jpeg" },
    ],
  },
  openGraph: {
    title: "Zahra — Grandir, comprendre, oser, construire",
    description:
      "Zahra accompagne les jeunes filles dans un parcours de découverte de soi, de confiance, de maturité, d'autonomie et de construction de leur avenir.",
    url: "https://zahra-programme.org",
    siteName: "Zahra",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/images/zahra-logo.jpeg",
        width: 1080,
        height: 1080,
        alt: "Zahra — Centre d'accompagnement des jeunes filles",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zahra — Grandir, comprendre, oser, construire",
    description:
      "Zahra accompagne les jeunes filles dans un parcours de découverte de soi, de confiance, de maturité, d'autonomie et de construction de leur avenir.",
    images: ["/images/zahra-logo.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "EducationalOrganization",
        "@id": "https://zahra-programme.org/#organization",
        name: "Zahra",
        alternateName: "Centre d'accompagnement des jeunes filles Zahra",
        url: "https://zahra-programme.org",
        logo: "https://zahra-programme.org/images/zahra-logo.jpeg",
        description:
          "Zahra accompagne les jeunes filles dans un parcours de découverte de soi, de confiance, de maturité, d'autonomie et de construction de leur avenir.",
        slogan: "Briller en soi",
        knowsAbout: [
          "Développement personnel",
          "Leadership des jeunes filles",
          "Intelligence émotionnelle",
          "Orientation & Autonomie",
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://zahra-programme.org/#website",
        url: "https://zahra-programme.org",
        name: "Zahra",
        publisher: {
          "@id": "https://zahra-programme.org/#organization",
        },
        inLanguage: "fr-FR",
      },
    ],
  };

  return (
    <html
      lang="fr"
      className={`${manrope.variable} ${cormorant.variable} h-full scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#F9F6EF] text-[#4B2E2B] font-sans antialiased selection:bg-[#E7B8C2] selection:text-[#4B2E2B]">
        {children}
      </body>
    </html>
  );
}
