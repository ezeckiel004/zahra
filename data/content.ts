export interface NavItem {
  label: string;
  href: string;
}

export interface Pillar {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  keyThemes: string[];
  icon: string;
}

export interface WeekStep {
  number: string;
  title: string;
  phase: string;
  summary: string;
  milestone: string;
}

export interface MethodPrinciple {
  title: string;
  desc: string;
  detail: string;
  stepNumber: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  isPlaceholder?: boolean;
}

export const NAV_LINKS: NavItem[] = [
  { label: "Notre approche", href: "#approche" },
  { label: "Les Piliers", href: "#piliers" },
  { label: "Parcours 12 semaines", href: "#parcours" },
  { label: "Méthode", href: "#methode" },
  { label: "Communauté", href: "#communaute" },
  { label: "FAQ", href: "#faq" },
];

export const HERO_CONTENT = {
  label: "POUR ELLES. POUR LEUR AVENIR.",
  titlePart1: "Elle n'a pas besoin de devenir",
  titlePart2Serif: "quelqu'un d'autre.",
  titlePart3: "Elle a besoin de découvrir",
  titlePart4Serif: "qui elle est.",
  description:
    "Zahra accompagne les jeunes filles dans un parcours de découverte de soi, de confiance, de maturité et de construction de leur avenir.",
  primaryCta: "Découvrir Zahra",
  secondaryCta: "Rejoindre le programme",
  taglineEmblem: "Briller en soi",
  motto: "APPRENDRE • GRANDIR • RÉUSSIR",
  keyMetrics: [
    { label: "Semaines d'immersion", value: "12" },
    { label: "Piliers d'épanouissement", value: "08" },
    { label: "Espace bienveillant", value: "100%" },
  ],
};

export const MANIFESTO_CONTENT = {
  label: "NOTRE CONVICTION",
  lead: "Chaque jeune fille mérite un espace où elle peut apprendre à se connaître, comprendre sa valeur, faire entendre sa voix et imaginer son avenir.",
  secondaryText:
    "Zahra n'est pas une simple plateforme pédagogique. C'est un sanctuaire d'éveil, un espace où la pudeur de grandir rencontre la dignité de s'affirmer, pour que chaque pas soit un hommage à sa force singulière.",
};

export const WHY_ZAHRA_CONTENT = {
  badge: "LE CONSTAT",
  title: "Grandir ne devrait jamais signifier grandir seule.",
  lead: "Entre les attentes de la société, les doutes, les relations, les choix d'études, les questions sur l'avenir et la pression de devenir quelqu'un, il est parfois difficile de savoir qui l'on est vraiment.",
  conclusion: "Zahra crée un espace pour ralentir, comprendre, apprendre, échanger et avancer.",
  observations: [
    {
      num: "01",
      voice: "« Je ne sais pas toujours qui je suis. »",
      context:
        "Sous le regard des pairs, les injonctions extérieures et la quête de conformité, s'accorder le droit d'explorer sa propre identité devient une urgence.",
    },
    {
      num: "02",
      voice: "« Je doute parfois de ma valeur. »",
      context:
        "Le manque d'espaces sécurisants et de repères sincères peut fragiliser l'estime de soi au moment charnière où tout se construit.",
    },
    {
      num: "03",
      voice: "« Je veux construire quelque chose de grand, mais je ne sais pas toujours par où commencer. »",
      context:
        "L'aspiration au leadership et à l'autonomie a besoin d'outils concrets, d'exemples vivants et d'une communauté pour éclore.",
    },
  ],
  transition: "Zahra commence ici.",
};

export const PILLARS: Pillar[] = [
  {
    id: "identite",
    number: "01",
    title: "IDENTITÉ",
    shortDesc: "Comprendre qui je suis, ce qui me définit et ce qui donne du sens à mon parcours.",
    fullDesc:
      "Explorer son histoire personnelle, ses forces, ses valeurs profondes et la singularité de sa personnalité sans chercher à correspondre à des moules imposés.",
    keyThemes: ["Connaissance de soi", "Origines & Fierté", "Alignement intérieur"],
    icon: "sparkles",
  },
  {
    id: "confiance",
    number: "02",
    title: "CONFIANCE",
    shortDesc: "Apprendre à croire en sa valeur, prendre sa place et oser avancer.",
    fullDesc:
      "Déconstruire le syndrome d'illégitimité, apprivoiser le regard des autres, célébrer ses victoires et développer une assurance durable et enracinée.",
    keyThemes: ["Estime de soi", "Dépassement du doute", "Posture & Présence"],
    icon: "heart",
  },
  {
    id: "voix",
    number: "03",
    title: "VOIX",
    shortDesc: "S'exprimer avec clarté, poser ses limites et apprendre à être entendue.",
    fullDesc:
      "Libérer sa parole en public et en privé, articuler sa pensée avec justesse, défendre ses idées avec élégance et fermeté sans agressivité.",
    keyThemes: ["Prise de parole", "Communication bienveillante", "Affirmation sereine"],
    icon: "mic",
  },
  {
    id: "emotions",
    number: "04",
    title: "ÉMOTIONS",
    shortDesc: "Comprendre ce que je ressens pour mieux me connaître et mieux réagir.",
    fullDesc:
      "Accueillir la joie, la vulnérabilité, la colère ou la peur non comme des faiblesses, mais comme des signaux précieux à comprendre et réguler avec douceur.",
    keyThemes: ["Intelligence émotionnelle", "Gestion du stress", "Résilience"],
    icon: "compass",
  },
  {
    id: "relations",
    number: "05",
    title: "RELATIONS",
    shortDesc: "Construire des relations fondées sur le respect, la confiance et des limites saines.",
    fullDesc:
      "Distinguer les liens nourrissants des dynamiques toxiques, poser des limites claires sans culpabilité et cultiver des amitiés de sororité authentiques.",
    keyThemes: ["Limites personnelles", "Sororité", "Communication saine"],
    icon: "users",
  },
  {
    id: "protection",
    number: "06",
    title: "PROTECTION",
    shortDesc: "Développer la vigilance, connaître ses limites et apprendre à mieux se protéger.",
    fullDesc:
      "Sensibilisation aux enjeux de sécurité physique, numérique et psychologique, affirmation du consentement et développement de réflexes de vigilance protecteurs.",
    keyThemes: ["Sécurité personnelle", "Limites corporelles", "Prévoyance"],
    icon: "shield",
  },
  {
    id: "avenir",
    number: "07",
    title: "AVENIR",
    shortDesc: "Explorer ses possibilités, développer ses compétences et commencer à construire son avenir.",
    fullDesc:
      "Découvrir des trajectoires inspirantes, faire dialoguer ses passions avec le monde professionnel et structurer une vision ambitieuse pour ses études et sa vie.",
    keyThemes: ["Orientation & Carrière", "Compétences clés", "Vision stratégique"],
    icon: "target",
  },
  {
    id: "autonomie",
    number: "08",
    title: "AUTONOMIE",
    shortDesc: "Développer les réflexes et compétences qui permettent de devenir progressivement autonome.",
    fullDesc:
      "Acquérir la discipline personnelle, l'organisation, la gestion du temps, la curiosité intellectuelle et la capacité de prendre des décisions éclairées par soi-même.",
    keyThemes: ["Prise de décision", "Gestion personnelle", "Esprit d'initiative"],
    icon: "compass",
  },
];

export const JOURNEY_WEEKS: WeekStep[] = [
  {
    number: "01",
    title: "Me découvrir",
    phase: "Phase 1 : Enracinement",
    summary: "Poser le miroir avec tendresse : identifier mes talents, mes curiosités et ce qui fait mon unicité.",
    milestone: "Portrait intime & boussole personnelle",
  },
  {
    number: "02",
    title: "Comprendre ma valeur",
    phase: "Phase 1 : Enracinement",
    summary: "Reconnaître que ma valeur ne dépend ni des notes, ni des validations extérieures, mais de mon être profond.",
    milestone: "Pacte de dignité & d'estime de soi",
  },
  {
    number: "03",
    title: "Construire ma confiance",
    phase: "Phase 1 : Enracinement",
    summary: "Traverser les doutes, oser les petits pas et cultiver un dialogue intérieur protecteur et courageux.",
    milestone: "Atelier du courage & dépassement",
  },
  {
    number: "04",
    title: "Trouver ma voix",
    phase: "Phase 2 : Rayonnement",
    summary: "Apprendre à formuler ses besoins, structurer ses arguments et faire résonner sa voix sans trembler.",
    milestone: "Session d'éloquence & de présence",
  },
  {
    number: "05",
    title: "Comprendre mes émotions",
    phase: "Phase 2 : Rayonnement",
    summary: "Déchiffrer la carte des ressentis et faire de ses émotions un guide plutôt qu'une tempête.",
    milestone: "Outils de régulation & de sérénité",
  },
  {
    number: "06",
    title: "Construire des relations saines",
    phase: "Phase 2 : Rayonnement",
    summary: "Choisir son entourage, identifier la réciprocité et cultiver la fidélité à soi au sein du groupe.",
    milestone: "Cercle de parole & pacte relationnel",
  },
  {
    number: "07",
    title: "Apprendre à me protéger",
    phase: "Phase 3 : Émancipation",
    summary: "Poser des limites nettes, savoir dire non avec fermeté et développer un bouclier d'autodéfense mentale et émotionnelle.",
    milestone: "Atelier limites claires & vigilance",
  },
  {
    number: "08",
    title: "Clarifier mon orientation",
    phase: "Phase 3 : Émancipation",
    summary: "Connecter qui je suis avec ce que je veux bâtir : cartographie des vocations et des filières d'excellence.",
    milestone: "Feuille de route académique",
  },
  {
    number: "09",
    title: "Explorer mon avenir",
    phase: "Phase 3 : Émancipation",
    summary: "Découvrir le monde entrepreneurial, les métiers émergents et rencontrer des femmes mentors pionnières.",
    milestone: "Immersion mentors & horizons",
  },
  {
    number: "10",
    title: "Développer mon autonomie",
    phase: "Phase 4 : Souveraineté",
    summary: "Méthodes concrètes de gestion du temps, prise de décision autonome et responsabilité au quotidien.",
    milestone: "Boîte à outils de l'autonomie",
  },
  {
    number: "11",
    title: "Devenir une influence positive",
    phase: "Phase 4 : Souveraineté",
    summary: "Comprendre comment mon éveil peut inspirer mes sœurs, ma famille et ma communauté proche.",
    milestone: "Mini-projet d'impact & d'entraide",
  },
  {
    number: "12",
    title: "Écrire la suite",
    phase: "Phase 4 : Souveraineté",
    summary: "Célébration du chemin parcouru, serment personnel et entrée dans le réseau permanent des Alumni Zahra.",
    milestone: "Cérémonie de passage & couronnement",
  },
];

export const METHOD_PRINCIPLES: MethodPrinciple[] = [
  {
    stepNumber: "01",
    title: "APPRENDRE",
    desc: "Comprendre de nouvelles choses.",
    detail: "Des contenus clairs, stimulants et adaptés aux questionnements réels de l'adolescence et de la jeunesse.",
  },
  {
    stepNumber: "02",
    title: "ÉCHANGER",
    desc: "Pouvoir parler, écouter et apprendre des autres.",
    detail: "Des cercles de parole confidentiels et sécurisés où chaque voix compte et aucune question n'est taboue.",
  },
  {
    stepNumber: "03",
    title: "EXPÉRIMENTER",
    desc: "Mettre les apprentissages en pratique.",
    detail: "Des mises en situation réelles, jeux de rôle d'affirmation, exercices d'éloquence et projets concrets.",
  },
  {
    stepNumber: "04",
    title: "ÊTRE ACCOMPAGNÉE",
    desc: "Ne pas avancer seule.",
    detail: "La présence attentive d'animatrices dévouées et de mentors bienveillantes tout au long du cheminement.",
  },
  {
    stepNumber: "05",
    title: "AGIR",
    desc: "Transformer les idées en décisions et en actions.",
    detail: "Chaque semaine se conclut par un engagement mesurable dans sa vie scolaire, familiale et personnelle.",
  },
];

export const TRANSFORMATION_ITEMS = [
  {
    before: "Doutes persistants sur ses capacités",
    after: "Développement d'une plus grande clarté sur ses forces",
    dimension: "Perception de soi",
  },
  {
    before: "Questionnements sans réponses rassurantes",
    after: "Espace structuré pour poser ses questions sans jugement",
    dimension: "Repères & Vérité",
  },
  {
    before: "Peur de prendre sa place et d'oser parler",
    after: "Facilite l'affirmation d'une voix posée et respectée",
    dimension: "Présence & Prise de parole",
  },
  {
    before: "Manque de repères face aux pressions extérieures",
    after: "Capacité accrue à poser des limites personnelles saines",
    dimension: "Relations & Protection",
  },
  {
    before: "Incertitude et anxiété face aux choix d'avenir",
    after: "Aide à explorer ses perspectives avec sérénité et méthode",
    dimension: "Avenir & Autonomie",
  },
];

export const COMMUNITY_FEATURES = [
  {
    title: "Communauté de sororité",
    desc: "Un réseau solidaire de jeunes filles partageant les mêmes aspirations d'élévation et de respect mutuel.",
  },
  {
    title: "Mentorat de référence",
    desc: "Des femmes modèles, bienveillantes et inspirantes qui partagent leurs parcours, leurs leçons et leurs conseils avisés.",
  },
  {
    title: "Ateliers immersifs",
    desc: "Des rendez-vous thématiques dynamiques pour travailler la voix, le leadership, la gestion émotionnelle et la créativité.",
  },
  {
    title: "Cercles d'échanges",
    desc: "Des conversations guidées pour briser l'isolement, confronter les idées et grandir au contact des vécus partagés.",
  },
  {
    title: "Accompagnement continu",
    desc: "Une écoute individualisée et attentive assurée par des encadrantes formées et protectrices.",
  },
  {
    title: "Ressources & Guides",
    desc: "Cahiers d'exercices, carnets de route, fiches réflexes et bibliothèques de contenus exclusifs Zahra.",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    quote:
      "« Zahra a été pour moi cet endroit rare où l'on ne m'a pas demandé d'être sage ou parfaite, mais où l'on m'a simplement appris à écouter ce que j'avais à dire. J'y ai découvert que ma voix avait du poids. »",
    author: "[Témoignage participante à remplacer]",
    role: "Participante — Cohorte Fondatrice (16 ans)",
    isPlaceholder: true,
  },
  {
    id: "t2",
    quote:
      "« Avant le programme, je disais oui à tout par peur de décevoir. En quelques semaines, j'ai appris à poser mes limites sans colère, avec dignité. Cela a transformé mes relations avec mes amis et à l'école. »",
    author: "[Témoignage participante à remplacer]",
    role: "Participante — Session Pilote (15 ans)",
    isPlaceholder: true,
  },
  {
    id: "t3",
    quote:
      "« Voir ma fille revenir des ateliers avec les yeux brillants et une posture tellement plus affirmée a été une révélation. Zahra comble un vide essentiel dans l'éducation de nos jeunes filles. »",
    author: "[Témoignage parent / mentor à remplacer]",
    role: "Mère d'une participante & Partenaire éducative",
    isPlaceholder: true,
  },
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: "faq-1",
    question: "À qui s'adresse Zahra ?",
    answer:
      "Zahra s'adresse aux jeunes filles adolescentes et jeunes femmes qui souhaitent mieux se connaître, affermir leur confiance, développer leur discernement et acquérir les repères nécessaires pour aborder leur avenir avec sérénité et ambition.",
  },
  {
    id: "faq-2",
    question: "Quel est l'âge des participantes ?",
    answer:
      "Le programme est ouvert à toute personne désireuse d'apprendre, de mieux se connaître, de développer sa confiance et de construire son avenir. Des cohortes adaptées sont organisées afin d'assurer des échanges harmonieux et pertinents.",
  },
  {
    id: "faq-3",
    question: "Combien de temps dure le programme ?",
    answer:
      "Le cycle fondamental se déploie sur 12 semaines progressives. Ce rythme permet une assimilation en profondeur des apprentissages, l'expérimentation concrète au quotidien et la création de liens durables au sein de la promotion.",
  },
  {
    id: "faq-4",
    question: "Comment se déroule une session ?",
    answer:
      "Chaque semaine articule des temps de transmission thématiques, des cercles d'expression sécurisés, des exercices pratiques immersifs (jeux de rôle, écriture, éloquence) et des temps de réflexion personnelle guidés.",
  },
  {
    id: "faq-5",
    question: "Le programme est-il en présentiel ou en ligne ?",
    answer:
      "Zahra privilégie une expérience humaine hybride : des sessions en présentiel pour l'ancrage relationnel et la puissance du groupe, complétées par des espaces d'échanges numériques encadrés et des ressources accessibles en continu.",
  },
  {
    id: "faq-6",
    question: "Comment rejoindre Zahra ?",
    answer:
      "L'admission s'effectue via un formulaire d'inscription suivi d'un échange bienveillant avec l'équipe pédagogique. Cet entretien permet de s'assurer que le programme répond fidèlement aux besoins et aspirations de la jeune fille.",
  },
  {
    id: "faq-7",
    question: "Y a-t-il un accompagnement individuel ?",
    answer:
      "Oui. Au-delà de la dynamique collective de cohorte, chaque participante bénéficie de points d'étape personnalisés avec une référente pour faire le point sur son évolution et ses objectifs personnels.",
  },
  {
    id: "faq-8",
    question: "Comment devenir mentor ou partenaire ?",
    answer:
      "Nous accueillons avec honneur les femmes professionnelles, leaders et institutions partageant nos valeurs. Vous pouvez manifester votre intérêt via notre formulaire de contact dédié en précisant votre domaine de contribution.",
  },
];
