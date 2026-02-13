import { useState, useEffect, useRef, useCallback } from "react";

const B = import.meta.env.BASE_URL;

/* ══════════════════════════════════════════════════════════
   NAËL SID-ALI — Portfolio Premium + Page BRITA
   ══════════════════════════════════════════════════════════ */

/* ─── DATA ─── */
const D = {
  name: "Naël SID-ALI",
  title: "Management de Projet & Entrepreneuriat",
  tagline: "Je transforme les idées en projets concrets.",
  email: "nael.sid-ali@iae-aix.com",
  phone: "+33 6 52 06 73 01",
  linkedin: "https://www.linkedin.com/in/na%C3%ABl-sid-ali-45225220a",
  location: "Aix-en-Provence, France",
  bio: `Étudiant en Master Management de l'Innovation et de l'Entrepreneuriat à l'IAE Aix-Marseille, je recherche une alternance pour septembre 2026 au sein d'une startup ou d'une structure tech en croissance.\n\nJ'ai développé une approche entrepreneuriale à travers Leako, un projet d'application autour des enjeux d'identité et de numérique, qui m'a amené à confronter des idées au réel, à arbitrer et à prendre des décisions.\n\nForce de proposition, à l'aise à l'oral, avec un esprit critique et un mindset challenger, je m'investis pleinement dans les projets où l'on attend de la réflexion, du rythme et de la prise d'initiative.`,
  experiences: [
    {
      id: 1, role: "Innovation Intern", company: "Alstom", location: "Singapour 🇸🇬",
      period: "Janvier — Juin 2026", hasDetail: false,
      description: [
        "Participation à plusieurs projets innovants en smart & immersive mobility, mobilisant des compétences en code, algorithmes, robotique, 3D, idéation et gestion technique pour accélérer l'innovation en APAC.",
        "Drive de l'innovation au sein des équipes d'ingénieurs en identifiant les irritants opérationnels et en proposant des solutions IA.",
        "Conception d'un système multi-agents capable de retrouver l'information à travers plusieurs datasets et de réduire les silos internes.",
        "Création d'un hub d'innovation pour intrapreneurs et fournisseurs, incluant un générateur d'idées, d'images et de vidéos IA.",
      ],
      tags: ["Innovation", "IA", "Multi-Agents", "Smart Mobility", "3D", "Robotique", "APAC"],
    },
    {
      id: 2, role: "Stagiaire Marketing & Événementiel", company: "BRITA Group", location: "Paris 🇫🇷",
      period: "Février — Juillet 2025", hasDetail: true,
      description: [
        "Contribution à la mission stratégique de BRITA en adaptant le positionnement global en actions locales visant à réduire les déchets plastiques.",
        "Développement d'outils clés (calculateur CO₂, workflows automatisés, inventaires digitalisés) via vibecoding, Excel et VBA.",
        "Initiatives innovantes comme le scraping Python pour enrichir les bases clients, et organisation de salons majeurs (SETA, Paris Coffee Festival, Vending Show).",
      ],
      tags: ["Marketing", "Événementiel", "VBA", "Scraping", "Stratégie", "Sustainability"],
    },
    {
      id: 3, role: "Assistant Chargé de Production", company: "BBR — Experiential Event Agency", location: "Australie 🇦🇺",
      period: "Mai — Septembre 2023", hasDetail: false,
      description: [
        "Gestion d'un budget dédié, commande de la nourriture et coordination des prestataires pour un festival, garantissant une exécution fluide et rentable.",
        "Renforcement des compétences organisationnelles et de négociation dans un environnement international et multiculturel.",
      ],
      tags: ["Production", "Événementiel", "Budget", "Coordination", "International"],
    },
    {
      id: 4, role: "Service d'aide à la personne", company: "Groupe SNCF", location: "France 🇫🇷",
      period: "Mai — Septembre 2022", hasDetail: false,
      description: [
        "Accompagnement et assistance aux voyageurs en situation de handicap ou à mobilité réduite dans les gares.",
        "Développement du sens du service, de l'écoute et de la gestion des situations d'urgence.",
      ],
      tags: ["Service client", "Accessibilité", "Empathie", "Gestion de crise"],
    },
  ],
  certifications: [
    { id: 1, title: "RAG and Agentic AI", issuer: "IBM", status: "En cours", icon: "🤖" },
  ],
  volunteering: [
    { id: 1, title: "Aider les lycéens dans leur orientation scolaire et professionnelle", org: "Article 1", period: "Septembre 2024 — Août 2025", duration: "1 an", category: "Formation", icon: "🎓" },
    { id: 2, title: "Protection des bébés tortues en Indonésie", org: "Project Hiu Foundation", period: "Août 2024", duration: "1 mois", category: "Bien-être des animaux", icon: "🐢" },
  ],
  education: [
    { id: 1, degree: "Master Management de Projet & Entrepreneuriat", school: "IAE Aix-Marseille", detail: "Full English Track", period: "2024 — 2026", description: "Spécialisation en stratégie, innovation et management international de projet. Mobilité académique à MDI Gurgaon (Inde) : Brand Management, Behavioral Strategy, CRM et M&A.", icon: "🎓" },
    { id: 2, degree: "Classe Préparatoire ATS & Licence 3 en Économie", school: "Lycée Nicolas Brémontier, Bordeaux", detail: null, period: "2023 — 2024", description: "Année intensive de préparation aux grandes écoles de commerce et de management.", icon: "📚" },
    { id: 3, degree: "Double Diplôme en Économie & Gestion", school: "Toulouse School of Economics (TSE)", detail: null, period: "2021 — 2023", description: "Formation fondamentale en économie, gestion et méthodes quantitatives.", icon: "🏛️" },
  ],
  skills: [
    { category: "Design & Création", items: ["Suite Adobe (Photoshop, After Effects)", "Canva", "Figma", "PowerPoint"] },
    { category: "Tech & Data", items: ["Excel avancé & VBA", "Vibecoding + Python", "Outils & automatisation IA (n8n)", "Reporting KPI & analyse de données"] },
    { category: "Soft Skills", items: ["Anglais C1 — Fluent", "Esprit critique & résolution de problèmes", "Leadership & prise d'initiative", "Communication orale"] },
  ],
  projects: [
    { id: 1, title: "Leako", category: "Entrepreneuriat", description: "Projet d'application autour des enjeux d'identité et de numérique. De l'idéation au prototypage, en passant par la confrontation au marché et les arbitrages stratégiques. Leako m'a formé à l'entrepreneuriat par la pratique : comprendre un besoin, construire un produit, itérer et prendre des décisions.", tags: ["App Mobile", "Identité Numérique", "Lean Startup", "Prototypage", "UX Design"], featured: true },
    { id: 2, title: "Anna Kaleb", category: "Studio Créatif", description: "Studio spécialisé en branding, stratégie de communication et direction artistique, accompagnant les entreprises dans la construction de leur identité à travers du contenu visuel augmenté par l'IA. Services allant de la stratégie média aux relations presse et à la coordination événementielle.", tags: ["Branding", "Direction Artistique", "IA Créative", "Stratégie Média", "Relations Presse", "Événementiel"], featured: true },
    { id: 3, title: "Canal+ Reimagined", category: "Product & Vibecoding", description: "Pour me démarquer dans ma candidature chez Canal+, j'ai entièrement re-créé leur site web en vibecoding et imaginé deux nouvelles fonctionnalités : le Club+ revisité avec un espace commentaire sous chaque film, et le RO_BO+, une IA qui analyse les avis des spectateurs pour comprendre ce qu'ils ont réellement aimé et proposer des recommandations personnalisées.", tags: ["Vibecoding", "Product Design", "IA", "UX", "Streaming", "Innovation"], featured: true, url: "http://canalbynaelsidali.online" },
  ],
  photos: [
    { id: 1, alt: "Singapour — Alstom", src: B + "singapour.jpg" },
    { id: 2, alt: "Paris Coffee Festival", src: B + "pariscoffeefestival.jpg" },
    { id: 3, alt: "IAE Aix-Marseille", src: B + "iaeaixmaarseille.jpg" },
    { id: 4, alt: "MDI Gurgaon — Inde", src: B + "mdi inde.jpg" },
    { id: 5, alt: "Événementiel BRITA", src: B + "eventbrita.jpg" },
    { id: 6, alt: "Projets Innovation", src: "" },
  ],
};

/* ─── BRITA MISSIONS DATA ─── */
const BRITA_MISSIONS = [
  {
    id: "scraping",
    title: "Construction d'une base de données B2B par scraping",
    subtitle: "Identifier et qualifier des prospects dans le secteur des coffee shops en France",
    icon: "🔍",
    color: "#0071e3",
    context: "L'équipe commerciale avait exprimé un besoin stratégique : entrer en contact avec des coffee shops, dont les exigences en matière de qualité de l'eau sont particulièrement élevées. Les machines utilisées (entre 5 000 et 10 000 €) et l'impact direct de la qualité de l'eau sur le goût du café font de ce secteur un fort potentiel commercial pour BRITA.",
    challenge: "Il n'existe pas en France de base de données centralisée permettant d'identifier spécifiquement les coffee shops. Sur le plan administratif, ces établissements sont répertoriés sous des codes NAF communs à l'ensemble du secteur de la restauration. L'approche par achat de fichiers étant inopérante, il fallait concevoir une méthode alternative.",
    approach: [
      "Extraction de données depuis OpenStreetMap via Overpass Turbo et l'API Google Maps pour récupérer plus de 2 000 établissements à Paris",
      "Développement d'un script Python d'enrichissement automatique interrogeant l'API Google Places pour retrouver les sites web manquants",
      "Conception d'un second script d'analyse sémantique, capable de parcourir le contenu HTML des sites pour distinguer les coffee shops authentiques (latte, espresso, matcha) des bars traditionnels (bière, happy hour, alcool)",
      "Utilisation de Hunter.io pour l'extraction automatique des adresses e-mail professionnelles, avec conformité RGPD stricte",
    ],
    results: [
      "75 coffee shops identifiés et qualifiés à Lille et ses alentours",
      "Entre 300 et 2 000 établissements estimés à Paris intramuros",
      "35 000 résultats bruts à l'échelle nationale, nécessitant une segmentation zone par zone",
      "Recommandations formulées à l'équipe marketing pour la structuration future de la base",
    ],
    skills: ["Python", "Scraping", "API Google", "Hunter.io", "RGPD", "Data Analysis"],
  },
  {
    id: "calculateur",
    title: "Calculateur d'impact CO₂",
    subtitle: "Un outil d'aide à la vente pour démontrer les bénéfices écologiques et économiques",
    icon: "🌱",
    color: "#34c759",
    context: "Outiller les forces de vente terrain pour démontrer, de manière pédagogique et chiffrée, les bénéfices environnementaux et économiques associés au choix d'une fontaine BRITA plutôt qu'à l'achat récurrent de bouteilles plastiques.",
    challenge: "L'outil devait être accessible à tous les commerciaux, utilisable sur le terrain lors de rendez-vous clients ou sur salon, et permettant en quelques clics de modéliser un scénario de consommation. Interface simple en surface, mais architecture de calcul robuste en coulisses — sans code VBA pour des raisons de compatibilité et de sécurité IT.",
    approach: [
      "Structuration modulaire sur Excel : feuille Input (menus déroulants dynamiques), Base de données Tarifs et CO₂, et feuille Output de synthèse visuelle",
      "Automatisation du lien modèle-référence via fonctions INDEX + EQUIV combinées à des plages nommées dynamiques",
      "Construction d'une formule imbriquée (INDEX, EQUIV, CONCAT, SI.ERREUR) capable de croiser tous les critères et retourner automatiquement le bon prix",
      "Modélisation comparative CO₂ intégrant les données internes BRITA sur l'empreinte carbone des bouteilles plastiques vs fontaines",
    ],
    results: [
      "Outil déployé et utilisé par l'équipe terrain en rendez-vous clients",
      "Affichage automatique des tonnes de CO₂ évitées et des économies financières",
      "Fiche mode d'emploi rédigée pour l'ensemble de l'équipe commerciale",
      "Possibilité d'évolution vers un outil web interactif",
    ],
    skills: ["Excel avancé", "Formules INDEX/EQUIV", "Data modeling", "UX", "Sustainability"],
  },
  {
    id: "salons",
    title: "Optimisation des salons professionnels",
    subtitle: "Structurer et digitaliser l'organisation événementielle de BRITA France",
    icon: "🎪",
    color: "#ff9500",
    context: "BRITA France participe à 9 salons par an : SETA, Paris Café Festival, SIRHA, Vending Show, Coffee Meeting, HR Meeting, Workplace Convention et conventions CBRE. Malgré leur importance, leur organisation reposait sur des pratiques hétérogènes, peu formalisées, générant des pertes de temps et des erreurs logistiques.",
    challenge: "La to-do list était un simple fichier Excel partagé, peu lisible. L'inventaire des stocks était réparti entre deux lieux physiques sans système de suivi. Des situations problématiques survenaient : arrivée à un salon avec une fontaine mais sans arrivée d'eau, allers-retours inutiles dans les réserves, manque de coordination entre équipes.",
    approach: [
      "Audit complet des pratiques existantes et identification des points de friction à chaque étape",
      "Mise en place d'un inventaire structuré sous Excel avec codes QR, connecté à un outil en ligne via Glitch avec alertes par seuil critique",
      "Migration du pilotage des tâches vers Microsoft Planner (Teams) avec vues par calendrier, priorité et statut",
      "Développement d'un formulaire HTML de sélection de fontaines, hébergé sur Glitch, avec envoi automatique d'emails et bon de commande",
      "Conception de visuels de stand en lien avec une agence de design, standardisation des supports visuels",
    ],
    results: [
      "3 salons gérés directement : SETA, Paris Café Festival, Vending Show",
      "Réduction significative du temps de préparation des palettes",
      "Outils adoptés par l'équipe et transmissibles aux futurs collaborateurs",
      "Fiches pratiques rédigées pour les futurs participants aux salons",
    ],
    skills: ["Gestion de projet", "Planner/Teams", "HTML", "Glitch", "Coordination", "Événementiel"],
  },
  {
    id: "brief",
    title: "Brief créatif pour campagnes visuelles",
    subtitle: "Orchestrer la création de contenus social media B2B pour les agences",
    icon: "🎨",
    color: "#af52de",
    context: "BRITA a adopté une posture de communication plus contemporaine avec des slogans comme « Drink better, do better ». Il fallait concevoir un brief créatif structuré à destination des agences WAISSO et Comeback, intégrant positionnement de marque, objectifs marketing et contraintes par canal (LinkedIn, Meta, TikTok).",
    challenge: "Construire des scénarios narratifs différenciés, contextualisés par type de client (hôtel, salle de sport, restaurant, entreprise), pour permettre une déclinaison efficace des visuels. Ne pas simplement décrire un produit, mais raconter une scène de vie, une expérience, un usage.",
    approach: [
      "Structuration via les modèles AIDEA et le Golden Circle de Simon Sinek (Why – How – What)",
      "Segmentation par univers d'usage : hôtel haut de gamme, salle de sport, restaurant, open space",
      "Pour chaque contexte : accroche publicitaire, messages clés, recommandations visuelles (ambiance lumineuse, style photo), indications typographiques",
      "Présentation orale du brief en réunion à l'agence Comeback avec défense des partis pris créatifs",
    ],
    results: [
      "Brief adopté par les agences comme base de production des campagnes visuelles",
      "Autonomie totale sur la conduite de cette mission stratégique",
      "Naissance du projet Ziazou : une IA de génération automatique d'infographies respectant la charte graphique",
    ],
    skills: ["Content Marketing", "Brief créatif", "AIDEA", "Golden Circle", "Présentation orale"],
  },
  {
    id: "automatisation",
    title: "Automatisation de la personnalisation des bouteilles",
    subtitle: "Transformer un processus manuel fastidieux en workflow no-code",
    icon: "⚙️",
    color: "#ff3b30",
    context: "Un processus répétitif était resté orphelin : récupérer le logo client sur Monday, le placer sur un template de bouteille, remplir un tableau récapitulatif, obtenir la validation, puis transmettre à l'Allemagne via SharePoint. Un workflow entièrement manuel, chronophage et source d'erreurs.",
    challenge: "Monday ne fournit pas de lien URL direct vers les fichiers. Les noms de fichiers dans Cloudinary ne doivent contenir ni espaces ni caractères spéciaux. Le positionnement du logo sur la bouteille devait être pixel-perfect sur les deux faces.",
    approach: [
      "Construction d'un scénario Make.com se déclenchant à chaque ajout de fichier sur Monday",
      "Téléchargement du logo, conversion en Base64, upload sur Cloudinary pour obtenir une URL publique",
      "Génération d'une URL de transformation dynamique Cloudinary pour superposer le logo au bon endroit avec paramètres x, y, largeur, hauteur ajustés",
      "Intégration automatique dans un template Google Docs avec remplacement d'image repère, puis enregistrement sur Drive et envoi du lien au service ADV",
    ],
    results: [
      "Processus entièrement automatisé, de la réception du logo à l'envoi du bon à tirer",
      "Valeur estimée à plus de 4 000 € basée sur les offres similaires du marché",
      "Solution pérenne continuant de fonctionner après la fin du stage",
    ],
    skills: ["Make.com", "No-Code", "Cloudinary", "Monday", "Google Docs API", "Automatisation"],
  },
  {
    id: "bigidea",
    title: "Pitch BIG IDEA — Stratégie de sponsoring expérientiel",
    subtitle: "Imaginer des activations terrain pour ancrer BRITA dans la vie réelle de ses publics",
    icon: "💡",
    color: "#5856d6",
    context: "BRITA a pris un virage créatif dans sa communication avec un nouveau territoire plus vivant, moins technique. Il fallait imaginer des activations terrain et des partenariats permettant d'incarner le positionnement de BRITA dans des environnements culturels et sociaux cohérents.",
    challenge: "Articuler discours de marque et action terrain, avec un budget contraint. Co-construire avec une autre stagiaire tout en maintenant une ligne créative propre, et gérer les désaccords avec diplomatie.",
    approach: [
      "Cartographie des lieux et événements potentiels : food courts, cafés de spécialité, festivals urbains, marchés bio, clubs de running",
      "Proposition de sponsoring de clubs de running urbains avec équipement de fontaines aux points de rassemblement",
      "Présence ciblée sur les marchés bio (Aix-en-Provence) pour dégustations gratuites d'eau filtrée",
      "Sponsoring culturel : installation de fontaines dans des lieux comme La Bellevilloise, avec ambition d'étendre à des festivals comme We Love Green",
    ],
    results: [
      "Pitch PowerPoint structuré présenté aux responsables marketing B2B",
      "Projet salué pour sa cohérence stratégique et sa créativité maîtrisée",
      "Pistes opérationnellement viables et en cohérence avec le cycle de vente BRITA Pro",
    ],
    skills: ["Stratégie marketing", "Sponsoring", "Pitch", "PowerPoint", "Créativité", "Brand Awareness"],
  },
];

/* ─── HOOKS ─── */
function useInView(opts = {}) {
  const ref = useRef(null);
  const [v, setV] = useState(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setV(true); o.unobserve(el); } }, { threshold: 0.1, ...opts });
    o.observe(el); return () => o.disconnect();
  }, []); return [ref, v];
}

function A({ children, className = "", delay = 0, style = {} }) {
  const [ref, v] = useInView();
  return (<div ref={ref} className={className} style={{ opacity: v ? 1 : 0, transform: v ? "translateY(0)" : "translateY(44px)", transition: `all .8s cubic-bezier(.22,1,.36,1) ${delay}s`, ...style }}>{children}</div>);
}

/* ─── THEME ─── */
const T = (d) => d ? {
  bg:"#050505",bgS:"#0e0e0e",bgC:"#161616",tx:"#f5f5f7",txS:"#a1a1a6",txM:"#6e6e73",
  ac:"#2997ff",ac2:"#a855f7",ac3:"#06b6d4",acS:"rgba(41,151,255,.1)",
  bd:"rgba(255,255,255,.07)",bdH:"rgba(255,255,255,.14)",sh:"0 8px 40px rgba(0,0,0,.5)",gl:"rgba(12,12,12,.75)",
} : {
  bg:"#fbfbfd",bgS:"#f2f2f7",bgC:"#ffffff",tx:"#1d1d1f",txS:"#6e6e73",txM:"#a1a1a6",
  ac:"#0071e3",ac2:"#9333ea",ac3:"#0891b2",acS:"rgba(0,113,227,.07)",
  bd:"rgba(0,0,0,.06)",bdH:"rgba(0,0,0,.12)",sh:"0 8px 40px rgba(0,0,0,.06)",gl:"rgba(251,251,253,.75)",
};

const G = [
  "linear-gradient(135deg,#1a1a2e,#16213e,#0f3460)","linear-gradient(135deg,#0c0c1d,#1b1b3a,#2d1b69)",
  "linear-gradient(135deg,#0a192f,#112240,#1d3461)","linear-gradient(135deg,#141e30,#243b55,#2d5f8a)",
  "linear-gradient(135deg,#1a0a2e,#2d1854,#4a2080)","linear-gradient(135deg,#0d1b2a,#1b2838,#2a4a6b)",
];

/* ═══════════════════════════════════════
   BRITA DETAIL PAGE
   ═══════════════════════════════════════ */
function BritaPage({ onBack, t }) {
  const [expandedMission, setExpanded] = useState(null);

  // BRITA brand blue
  const britaBlue = "#003d7a";
  const britaLight = "#0071ce";

  return (
    <div style={{ background: t.bg, minHeight: "100vh", transition: "background .5s" }}>
      {/* Hero */}
      <section style={{ position: "relative", padding: "100px 24px 80px", overflow: "hidden", background: `linear-gradient(135deg, ${britaBlue} 0%, ${britaLight} 100%)` }}>
        <div style={{ position: "absolute", inset: 0, opacity: 0.08, backgroundImage: "radial-gradient(circle at 20% 50%, #fff 1px, transparent 1px), radial-gradient(circle at 80% 20%, #fff 1px, transparent 1px)", backgroundSize: "60px 60px, 40px 40px" }} />
        <div style={{ maxWidth: 900, margin: "0 auto", position: "relative", zIndex: 2 }}>
          <button onClick={onBack} style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(255,255,255,.15)", border: "none", borderRadius: 980, padding: "10px 20px", color: "#fff", fontSize: 14, fontWeight: 600, cursor: "pointer", backdropFilter: "blur(8px)", marginBottom: 32, fontFamily: "'General Sans',sans-serif", transition: "all .3s" }}
            onMouseEnter={e => e.target.style.background = "rgba(255,255,255,.25)"}
            onMouseLeave={e => e.target.style.background = "rgba(255,255,255,.15)"}>
            ← Retour au portfolio
          </button>

          <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 20 }}>
            <div style={{ width: 56, height: 56, borderRadius: 16, background: "rgba(255,255,255,.15)", display: "flex", alignItems: "center", justifyContent: "center", backdropFilter: "blur(8px)", overflow: "hidden" }}>
              <img src={B + "BRITA_Logo.png"} alt="BRITA Logo" style={{ width: "100%", height: "100%", objectFit: "contain", padding: 6 }} />
            </div>
            <div>
              <p style={{ fontSize: 14, color: "rgba(255,255,255,.7)", fontWeight: 500 }}>Février — Juillet 2025 · Paris</p>
              <h1 style={{ fontFamily: "'Satoshi',sans-serif", fontSize: "clamp(28px,5vw,48px)", fontWeight: 900, color: "#fff", lineHeight: 1.1, letterSpacing: "-.03em" }}>
                Stage Marketing & Événementiel
              </h1>
            </div>
          </div>

          <p style={{ fontSize: 18, lineHeight: 1.7, color: "rgba(255,255,255,.85)", maxWidth: 700 }}>
            Au sein de l'équipe marketing B2B de BRITA France, j'ai optimisé et structuré la partie événementielle de l'entreprise, avec un rôle à la fois opérationnel, stratégique et technique, et un fort accent sur l'automatisation des processus et la stratégie de brand awareness.
          </p>

          {/*  */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 12, marginTop: 32, maxWidth: 600 }}>
            <div style={{ height: 140, borderRadius: 16, overflow: "hidden", border: "1px solid rgba(255,255,255,.1)" }}>
              <img src={B + "Britastand.jpg"} alt="Stand BRITA — Salon SETA" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <div style={{ height: 140, borderRadius: 16, overflow: "hidden", border: "1px solid rgba(255,255,255,.1)" }}>
              <img src={B + "britabooth.png"} alt="Paris Coffee Festival" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
          </div>
        </div>
      </section>

      {/* Context */}
      <section style={{ padding: "80px 24px", maxWidth: 900, margin: "0 auto" }}>
        <A>
          <p style={{ fontFamily: "'Satoshi',sans-serif", fontSize: 14, fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase", color: britaLight, marginBottom: 14 }}>Contexte</p>
          <h2 style={{ fontFamily: "'Satoshi',sans-serif", fontSize: "clamp(28px,4vw,40px)", fontWeight: 900, color: t.tx, lineHeight: 1.1, letterSpacing: "-.02em", marginBottom: 20 }}>
            Pourquoi BRITA<span style={{ color: britaLight }}>.</span>
          </h2>
        </A>
        <A delay={0.1}>
          <p style={{ fontSize: 17, lineHeight: 1.8, color: t.txS }}>
            BRITA France est une filiale du groupe allemand BRITA GmbH, structurée autour de plusieurs pôles fonctionnels. L'entreprise regroupe une centaine de collaborateurs, avec un département marketing composé de deux pôles : B2C (produits grand public) et B2B (solutions professionnelles pour CHR, entreprises, collectivités).
          </p>
          <p style={{ fontSize: 17, lineHeight: 1.8, color: t.txS, marginTop: 16 }}>
            Le secteur B2B est le cœur de mon stage : derrière l'image de marque grand public, il y a tout un écosystème de solutions professionnelles pensées pour les cafés, restaurants, boulangeries, cuisines collectives et entreprises — toujours avec le même objectif : réduire l'impact environnemental tout en améliorant la qualité gustative et la performance des équipements.
          </p>
        </A>

        {/* Stats */}
        <A delay={0.15}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(130px,1fr))", gap: 16, marginTop: 40 }}>
            {[
              { n: "9", l: "Salons par an" }, { n: "3", l: "Salons gérés" },
              { n: "6", l: "Missions majeures" }, { n: "100+", l: "Collaborateurs" },
            ].map((s, i) => (
              <div key={i} style={{ background: t.bgS, borderRadius: 16, padding: 24, border: `1px solid ${t.bd}` }}>
                <div style={{ fontFamily: "'Satoshi',sans-serif", fontSize: 36, fontWeight: 900, color: britaLight }}>{s.n}</div>
                <div style={{ fontSize: 13, color: t.txM, marginTop: 4 }}>{s.l}</div>
              </div>
            ))}
          </div>
        </A>
      </section>

      {/* Missions */}
      <section style={{ padding: "40px 24px 100px", maxWidth: 900, margin: "0 auto" }}>
        <A>
          <p style={{ fontFamily: "'Satoshi',sans-serif", fontSize: 14, fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase", color: britaLight, marginBottom: 14 }}>Missions</p>
          <h2 style={{ fontFamily: "'Satoshi',sans-serif", fontSize: "clamp(28px,4vw,40px)", fontWeight: 900, color: t.tx, lineHeight: 1.1, letterSpacing: "-.02em", marginBottom: 40 }}>
            Ce que j'ai réalisé<span style={{ color: britaLight }}>.</span>
          </h2>
        </A>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {BRITA_MISSIONS.map((m, i) => {
            const isOpen = expandedMission === m.id;
            return (
              <A key={m.id} delay={i * 0.06}>
                <div style={{
                  background: t.bgC, borderRadius: 20, border: `1px solid ${isOpen ? m.color + "44" : t.bd}`,
                  overflow: "hidden", transition: "all .4s cubic-bezier(.22,1,.36,1)",
                  boxShadow: isOpen ? `0 4px 24px ${m.color}15` : "none",
                }}>
                  {/* Header — always visible */}
                  <button onClick={() => setExpanded(isOpen ? null : m.id)} style={{
                    width: "100%", display: "flex", alignItems: "center", gap: 14, padding: "clamp(16px,3vw,24px) clamp(16px,3vw,28px)",
                    background: "none", border: "none", cursor: "pointer", textAlign: "left",
                  }}>
                    <div style={{ width: 48, height: 48, borderRadius: 14, background: m.color + "18", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, flexShrink: 0 }}>{m.icon}</div>
                    <div style={{ flex: 1 }}>
                      <h3 style={{ fontFamily: "'Satoshi',sans-serif", fontSize: 18, fontWeight: 700, color: t.tx, lineHeight: 1.3 }}>{m.title}</h3>
                      <p style={{ fontSize: 13, color: t.txM, marginTop: 2 }}>{m.subtitle}</p>
                    </div>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={t.txM} strokeWidth="2" style={{ flexShrink: 0, transition: "transform .3s", transform: isOpen ? "rotate(180deg)" : "rotate(0)" }}>
                      <path d="M6 9l6 6 6-6"/>
                    </svg>
                  </button>

                  {/* Expandable content */}
                  <div style={{
                    maxHeight: isOpen ? 2000 : 0, overflow: "hidden",
                    transition: "max-height .6s cubic-bezier(.22,1,.36,1)",
                  }}>
                    <div style={{ padding: "0 clamp(16px,3vw,28px) clamp(16px,3vw,28px)" }}>
                      <div style={{ height: 1, background: t.bd, marginBottom: 24 }} />

                      {/* Context */}
                      <div style={{ marginBottom: 24 }}>
                        <h4 style={{ fontFamily: "'Satoshi',sans-serif", fontSize: 14, fontWeight: 700, color: m.color, letterSpacing: ".05em", textTransform: "uppercase", marginBottom: 8 }}>Contexte</h4>
                        <p style={{ fontSize: 14, lineHeight: 1.75, color: t.txS }}>{m.context}</p>
                      </div>

                      {/* Challenge */}
                      <div style={{ marginBottom: 24 }}>
                        <h4 style={{ fontFamily: "'Satoshi',sans-serif", fontSize: 14, fontWeight: 700, color: m.color, letterSpacing: ".05em", textTransform: "uppercase", marginBottom: 8 }}>Challenge</h4>
                        <p style={{ fontSize: 14, lineHeight: 1.75, color: t.txS }}>{m.challenge}</p>
                      </div>

                      {/* Approach */}
                      <div style={{ marginBottom: 24 }}>
                        <h4 style={{ fontFamily: "'Satoshi',sans-serif", fontSize: 14, fontWeight: 700, color: m.color, letterSpacing: ".05em", textTransform: "uppercase", marginBottom: 12 }}>Démarche</h4>
                        {m.approach.map((a, j) => (
                          <div key={j} style={{ display: "flex", gap: 12, marginBottom: 10, alignItems: "flex-start" }}>
                            <div style={{ width: 24, height: 24, borderRadius: 8, background: m.color + "18", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 700, color: m.color, flexShrink: 0, marginTop: 1 }}>{j + 1}</div>
                            <p style={{ fontSize: 14, lineHeight: 1.7, color: t.txS }}>{a}</p>
                          </div>
                        ))}
                      </div>

                      {/* Results */}
                      <div style={{ marginBottom: 20 }}>
                        <h4 style={{ fontFamily: "'Satoshi',sans-serif", fontSize: 14, fontWeight: 700, color: m.color, letterSpacing: ".05em", textTransform: "uppercase", marginBottom: 12 }}>Résultats</h4>
                        {m.results.map((r, j) => (
                          <div key={j} style={{ display: "flex", gap: 10, marginBottom: 8, alignItems: "flex-start" }}>
                            <span style={{ color: m.color, fontSize: 16, lineHeight: 1.4 }}>✓</span>
                            <p style={{ fontSize: 14, lineHeight: 1.6, color: t.txS }}>{r}</p>
                          </div>
                        ))}
                      </div>

                      {/* Skills tags */}
                      <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                        {m.skills.map(s => (
                          <span key={s} style={{ display: "inline-block", padding: "4px 12px", borderRadius: 100, fontSize: 11, fontWeight: 600, background: m.color + "15", color: m.color }}>{s}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </A>
            );
          })}
        </div>
      </section>

      {/* Campagne visuelle */}
      <section style={{ padding: "60px 24px 100px", background: t.bgS, transition: "background .5s" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <A>
            <p style={{ fontFamily: "'Satoshi',sans-serif", fontSize: 14, fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase", color: britaLight, marginBottom: 14 }}>Campagne</p>
            <h2 style={{ fontFamily: "'Satoshi',sans-serif", fontSize: "clamp(24px,4vw,36px)", fontWeight: 900, color: t.tx, lineHeight: 1.1, letterSpacing: "-.02em", marginBottom: 20 }}>
              La nouvelle identité BRITA<span style={{ color: britaLight }}>.</span>
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: t.txS, maxWidth: 600 }}>
              BRITA s'est affranchie de son image sérieuse et technique pour adopter un ton plus jeune, ancré dans le quotidien. Des campagnes comme « Drink better, do better » illustrent cette transformation.
            </p>
          </A>
          <A delay={0.1}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: 14, marginTop: 32 }}>
              {[
                { src: B + "NouvelleDA.png", alt: "Campagne « Drink better »" },
                { src: B + "Britastand.jpg", alt: "Stand BRITA — Salon" },
                { src: B + "brita-calculateur-de-CO2.png", alt: "Calculateur CO₂ BRITA" },
              ].map((img, i) => (
                <div key={i} style={{ height: 180, borderRadius: 16, overflow: "hidden", border: `1px solid ${t.bd}` }}>
                  <img src={img.src} alt={img.alt} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
              ))}
            </div>
          </A>
        </div>
      </section>

      {/* Back button */}
      <div style={{ padding: "40px 24px 60px", textAlign: "center" }}>
        <button onClick={onBack} style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "15px 30px", borderRadius: 980, background: britaLight, color: "#fff", fontWeight: 600, fontSize: 15, border: "none", cursor: "pointer", fontFamily: "'General Sans',sans-serif", transition: "all .3s" }}
          onMouseEnter={e => e.target.style.filter = "brightness(1.1)"}
          onMouseLeave={e => e.target.style.filter = "none"}>
          ← Retour au portfolio
        </button>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════
   LEAKO DETAIL PAGE
   ═══════════════════════════════════════ */
function LeakoPage({ onBack, t }) {
  const leakoGrad = "linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)";
  const leakoPurple = "#764ba2";
  const leakoBlue = "#667eea";

  const features = [
    {
      icon: "🔐", title: "Authentification renforcée",
      desc: "Vérification des données issues d'un document officiel (carte d'identité ou passeport), combinée à une capture biométrique en temps réel. Le système évalue l'authenticité du document, détecte les tentatives de falsification et réalise une correspondance biométrique. Seule la personne concernée peut activer la surveillance de sa propre image.",
      color: "#667eea",
    },
    {
      icon: "🔍", title: "Détection intelligente",
      desc: "Des agents automatisés analysent des environnements numériques sensibles afin d'identifier la présence d'images correspondant à l'empreinte visuelle de l'utilisateur. L'analyse intègre les transformations usuelles destinées à masquer l'origine d'un contenu. Les résultats sont consolidés dans un rapport structuré d'aide à la décision.",
      color: "#a855f7",
    },
    {
      icon: "⚡", title: "Retrait automatisé",
      desc: "Lorsque des contenus sont identifiés comme préjudiciables, Leako accompagne l'utilisateur dans les démarches de retrait. La plateforme structure les procédures, prépare les demandes et automatise certaines étapes. Réduire le délai entre détection et action conditionne directement l'ampleur du préjudice.",
      color: "#f5576c",
    },
    {
      icon: "🔗", title: "Architecture Web3 & Blockchain",
      desc: "L'enrôlement biométrique repose sur une architecture Web3 intégrant des mécanismes blockchain pour renforcer la transparence, la traçabilité et la sécurité des preuves d'identité. La blockchain agit comme un registre de confiance, scellant les validations sans exposer les informations sensibles.",
      color: "#06b6d4",
    },
    {
      icon: "🕵️", title: "Infiltration des espaces fermés",
      desc: "Leako investit un champ de recherche avancée dédié à l'identification et l'accès aux nouveaux espaces de diffusion illicite : forums privés, messageries chiffrées. Les systèmes d'IA s'infiltrent dans ces environnements pour identifier les contenus et les victimes ciblées avant leur diffusion à grande échelle.",
      color: "#ff9500",
    },
    {
      icon: "🤝", title: "Vision institutionnelle",
      desc: "La vision cible repose sur une coopération étroite avec les institutions publiques et les plateformes numériques pour permettre une intervention en amont dans les mécanismes de diffusion des contenus non consentis. Cette trajectoire s'inscrit dans un horizon de moyen à long terme.",
      color: "#34c759",
    },
  ];

  return (
    <div style={{ background: t.bg, minHeight: "100vh", transition: "background .5s" }}>
      {/* Hero with 3D hand holding phone */}
      <section style={{ position: "relative", minHeight: "100vh", overflow: "hidden", background: leakoGrad, display: "flex", alignItems: "center", justifyContent: "center" }}>
        {/* Background effects */}
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
          <div style={{ position: "absolute", inset: 0, opacity: .03, backgroundImage: "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)", backgroundSize: "50px 50px" }} />
          <div style={{ position: "absolute", top: "10%", left: "5%", width: 300, height: 300, borderRadius: "50%", background: leakoBlue, filter: "blur(140px)", opacity: .15, animation: "orb1 12s ease-in-out infinite" }} />
          <div style={{ position: "absolute", bottom: "10%", right: "10%", width: 250, height: 250, borderRadius: "50%", background: leakoPurple, filter: "blur(120px)", opacity: .15, animation: "orb2 10s ease-in-out infinite" }} />
          <div style={{ position: "absolute", top: "50%", left: "50%", width: 180, height: 180, borderRadius: "50%", background: "#f5576c", filter: "blur(100px)", opacity: .08, animation: "orb1 14s ease-in-out infinite reverse" }} />
        </div>

        {/* Back button */}
        <button onClick={onBack} style={{ position: "absolute", top: 24, left: 24, zIndex: 10, display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(255,255,255,.1)", border: "none", borderRadius: 980, padding: "10px 20px", color: "#fff", fontSize: 14, fontWeight: 600, cursor: "pointer", backdropFilter: "blur(8px)", fontFamily: "'General Sans',sans-serif", transition: "all .3s" }}
          onMouseEnter={e => e.target.style.background = "rgba(255,255,255,.2)"}
          onMouseLeave={e => e.target.style.background = "rgba(255,255,255,.1)"}>
          ← Retour
        </button>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "clamp(30px,6vw,100px)", maxWidth: 1100, padding: "120px 20px 80px", position: "relative", zIndex: 2, flexWrap: "wrap", margin: "0 auto" }}>
          {/* Left — Title */}
          <div style={{ flex: "1 1 280px", maxWidth: 480, minWidth: 0 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(255,255,255,.08)", borderRadius: 980, padding: "6px 16px", marginBottom: 24, border: "1px solid rgba(255,255,255,.1)" }}>
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#34c759", animation: "pulse 1.5s infinite" }} />
              <span style={{ fontSize: 12, fontWeight: 600, color: "rgba(255,255,255,.7)" }}>Projet en cours de développement</span>
            </div>
            <h1 style={{ fontFamily: "'Satoshi',sans-serif", fontSize: "clamp(56px,10vw,100px)", fontWeight: 900, color: "#fff", lineHeight: .9, letterSpacing: "-.05em", textShadow: `0 4px 40px ${leakoBlue}55` }}>
              Leako
            </h1>
            <p style={{ fontSize: 20, lineHeight: 1.6, color: "rgba(255,255,255,.7)", marginTop: 20, maxWidth: 400 }}>
              Reprends le contrôle de ton image à l'ère du numérique.
            </p>
            <p style={{ fontSize: 15, lineHeight: 1.7, color: "rgba(255,255,255,.45)", marginTop: 16, maxWidth: 400 }}>
              Infrastructure de protection de l'identité visuelle — à l'intersection du droit, de la technologie et de la protection individuelle.
            </p>
          </div>

          {/* Right — 3D Hand holding iPhone with video */}
          <div style={{ flex: "0 0 auto", position: "relative", transform: "scale(clamp(0.75,calc(0.5 + 0.3 * (100vw - 320px) / 448),1))", transformOrigin: "center center" }}>
            {/* Hand silhouette */}
            <div style={{
              position: "relative", width: 220, height: 420,
              animation: "float 6s ease-in-out infinite",
            }}>
              {/* Hand shape — stylized */}
              <div style={{
                position: "absolute", bottom: -30, left: "50%", transform: "translateX(-50%)",
                width: 180, height: 200,
                background: "linear-gradient(180deg, transparent 0%, rgba(255,255,255,.03) 40%, rgba(255,255,255,.06) 100%)",
                borderRadius: "0 0 60px 60px",
                clipPath: "polygon(10% 0%, 90% 0%, 100% 30%, 95% 100%, 5% 100%, 0% 30%)",
              }} />
              {/* Thumb */}
              <div style={{
                position: "absolute", bottom: 60, left: -16, width: 28, height: 90,
                background: "linear-gradient(180deg, rgba(255,255,255,.04), rgba(255,255,255,.08))",
                borderRadius: "14px 14px 10px 14px", transform: "rotate(-15deg)",
              }} />
              {/* Fingers behind */}
              {[0, 1, 2, 3].map(i => (
                <div key={i} style={{
                  position: "absolute", bottom: 140 + i * 6, right: -8 + i * 2,
                  width: 22, height: 55 - i * 4,
                  background: `rgba(255,255,255,${.03 + i * .01})`,
                  borderRadius: 11, transform: `rotate(${5 + i * 3}deg)`,
                }} />
              ))}

              {/* iPhone frame */}
              <div style={{
                position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)",
                width: 190, height: 380, borderRadius: 32,
                background: "linear-gradient(145deg, #1a1a2e, #0a0a1a)",
                border: "2px solid rgba(255,255,255,.12)",
                boxShadow: `0 30px 80px rgba(0,0,0,.6), 0 0 40px ${leakoBlue}22, inset 0 1px 0 rgba(255,255,255,.1)`,
                overflow: "hidden", display: "flex", flexDirection: "column",
              }}>
                {/* Dynamic Island */}
                <div style={{ display: "flex", justifyContent: "center", paddingTop: 12, paddingBottom: 8 }}>
                  <div style={{ width: 80, height: 24, borderRadius: 12, background: "#000", border: "1px solid rgba(255,255,255,.05)" }} />
                </div>

                {/* Screen — Video */}
                <div style={{
                  flex: 1, margin: "0 6px 6px", borderRadius: 22, overflow: "hidden",
                  position: "relative",
                }}>
                  <video src={B + "LEAKOV2 2.mp4"} autoPlay muted loop playsInline style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>

                {/* Home indicator */}
                <div style={{ display: "flex", justifyContent: "center", paddingBottom: 8, paddingTop: 4 }}>
                  <div style={{ width: 100, height: 4, borderRadius: 2, background: "rgba(255,255,255,.15)" }} />
                </div>
              </div>
            </div>

            {/* Glow effect behind phone */}
            <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 300, height: 300, borderRadius: "50%", background: `radial-gradient(circle, ${leakoBlue}20, transparent 70%)`, pointerEvents: "none" }} />
          </div>
        </div>

        {/* Scroll indicator */}
        <div style={{ position: "absolute", bottom: 32, left: "50%", transform: "translateX(-50%)", animation: "pulse 2.5s infinite" }}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,.4)" strokeWidth="2"><path d="M12 5v14M19 12l-7 7-7-7"/></svg>
        </div>
      </section>

      {/* Origin story */}
      <section style={{ padding: "100px 24px", maxWidth: 800, margin: "0 auto" }}>
        <A>
          <p style={{ fontFamily: "'Satoshi',sans-serif", fontSize: 14, fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase", color: leakoBlue, marginBottom: 14 }}>Genèse</p>
          <h2 style={{ fontFamily: "'Satoshi',sans-serif", fontSize: "clamp(28px,4vw,40px)", fontWeight: 900, color: t.tx, lineHeight: 1.1, letterSpacing: "-.02em", marginBottom: 24 }}>
            Pourquoi Leako<span style={{ color: leakoBlue }}>.</span>
          </h2>
        </A>
        <A delay={0.1}>
          <p style={{ fontSize: 17, lineHeight: 1.85, color: t.txS }}>
            L'idée de Leako est née en suivant le retentissant procès des viols de Mazan — une affaire qui a révélé comment un individu avait exploité des plateformes numériques pour organiser, coordonner et filmer des violences sans consentement. Cette dimension numérique de la prédation a profondément marqué ma réflexion.
          </p>
          <p style={{ fontSize: 17, lineHeight: 1.85, color: t.txS, marginTop: 16 }}>
            Face à cette réalité, une question s'est imposée : comment permettre à chaque individu de reprendre le contrôle effectif sur l'usage et la circulation de son image en ligne ? Leako est la réponse que je construis.
          </p>
        </A>
      </section>

      {/* Mission */}
      <section style={{ padding: "60px 24px 100px", maxWidth: 800, margin: "0 auto" }}>
        <A>
          <div style={{ background: t.bgS, borderRadius: 24, padding: "40px 36px", border: `1px solid ${t.bd}` }}>
            <p style={{ fontFamily: "'Satoshi',sans-serif", fontSize: 22, fontWeight: 700, color: t.tx, lineHeight: 1.4, marginBottom: 16 }}>
              « Rendre à chacun la maîtrise de son image dans un environnement qui l'a, jusqu'ici, systématiquement dépossédé. »
            </p>
            <p style={{ fontSize: 15, lineHeight: 1.7, color: t.txS }}>
              Leako ne se présente pas comme une solution miracle. Il se construit comme une infrastructure de confiance, progressive et rigoureuse, à l'intersection du droit, de la technologie et de la protection individuelle.
            </p>
          </div>
        </A>
      </section>

      {/* Features / Capabilities */}
      <section style={{ padding: "60px 24px 120px", background: t.bgS, transition: "background .5s" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <A>
            <p style={{ fontFamily: "'Satoshi',sans-serif", fontSize: 14, fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase", color: leakoBlue, marginBottom: 14 }}>Fonctionnement</p>
            <h2 style={{ fontFamily: "'Satoshi',sans-serif", fontSize: "clamp(28px,4vw,40px)", fontWeight: 900, color: t.tx, lineHeight: 1.1, letterSpacing: "-.02em", marginBottom: 40 }}>
              Comment ça marche<span style={{ color: leakoBlue }}>.</span>
            </h2>
          </A>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16 }}>
            {features.map((f, i) => (
              <A key={i} delay={i * 0.07}>
                <div style={{
                  background: t.bgC, borderRadius: 20, padding: 28,
                  border: `1px solid ${t.bd}`, transition: "all .4s cubic-bezier(.22,1,.36,1)",
                  height: "100%",
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = `0 8px 30px ${f.color}15`; e.currentTarget.style.borderColor = f.color + "33"; }}
                onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.borderColor = t.bd; }}>
                  <div style={{ width: 48, height: 48, borderRadius: 14, background: f.color + "15", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, marginBottom: 16 }}>{f.icon}</div>
                  <h3 style={{ fontFamily: "'Satoshi',sans-serif", fontSize: 17, fontWeight: 700, color: t.tx, marginBottom: 10 }}>{f.title}</h3>
                  <p style={{ fontSize: 13, lineHeight: 1.7, color: t.txS }}>{f.desc}</p>
                </div>
              </A>
            ))}
          </div>
        </div>
      </section>

      {/* Approach — curative vs preventive */}
      <section style={{ padding: "80px 24px", maxWidth: 800, margin: "0 auto" }}>
        <A>
          <p style={{ fontFamily: "'Satoshi',sans-serif", fontSize: 14, fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase", color: leakoBlue, marginBottom: 14 }}>Stratégie</p>
          <h2 style={{ fontFamily: "'Satoshi',sans-serif", fontSize: "clamp(24px,4vw,36px)", fontWeight: 900, color: t.tx, lineHeight: 1.1, letterSpacing: "-.02em", marginBottom: 24 }}>
            Une posture pragmatique<span style={{ color: leakoBlue }}>.</span>
          </h2>
        </A>
        <A delay={0.1}>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: t.txS }}>
            À ce stade, Leako assume une logique curative : il intervient après publication, dans un environnement où la viralité précède souvent toute réaction. Cette limite structurelle constitue le socle stratégique du projet.
          </p>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: t.txS, marginTop: 16 }}>
            Pour changer d'échelle, Leako doit s'imposer comme un acteur légitime, reconnu à la fois par les autorités publiques et par les grandes plateformes numériques. Cette légitimité conditionne toute capacité d'intervention plus précoce dans la chaîne de diffusion des contenus.
          </p>
        </A>

        {/* Timeline roadmap */}
        <A delay={0.15}>
          <div style={{ display: "flex", gap: 16, marginTop: 40, flexWrap: "wrap" }}>
            {[
              { phase: "Phase 1", label: "Détection curative", desc: "Post-publication", status: "active" },
              { phase: "Phase 2", label: "Partenariats institutionnels", desc: "Légitimité & accords", status: "next" },
              { phase: "Phase 3", label: "Intervention préventive", desc: "Avant diffusion", status: "future" },
            ].map((p, i) => (
              <div key={i} style={{
                flex: "1 1 200px", padding: 20, borderRadius: 16,
                background: p.status === "active" ? leakoBlue + "15" : t.bgS,
                border: `1.5px solid ${p.status === "active" ? leakoBlue + "44" : t.bd}`,
              }}>
                <span style={{ fontSize: 11, fontWeight: 700, color: p.status === "active" ? leakoBlue : t.txM, letterSpacing: ".08em", textTransform: "uppercase" }}>{p.phase}</span>
                <h4 style={{ fontFamily: "'Satoshi',sans-serif", fontSize: 16, fontWeight: 700, color: t.tx, marginTop: 6 }}>{p.label}</h4>
                <p style={{ fontSize: 13, color: t.txS, marginTop: 4 }}>{p.desc}</p>
                {p.status === "active" && <span style={{ display: "inline-flex", alignItems: "center", gap: 4, fontSize: 11, fontWeight: 600, color: leakoBlue, marginTop: 8 }}><span style={{ width: 6, height: 6, borderRadius: "50%", background: leakoBlue, animation: "pulse 1.5s infinite" }} />En cours</span>}
              </div>
            ))}
          </div>
        </A>
      </section>

      {/* Back */}
      <div style={{ padding: "40px 24px 80px", textAlign: "center" }}>
        <button onClick={onBack} style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "15px 30px", borderRadius: 980, background: leakoBlue, color: "#fff", fontWeight: 600, fontSize: 15, border: "none", cursor: "pointer", fontFamily: "'General Sans',sans-serif" }}>
          ← Retour au portfolio
        </button>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════
   ANNA KALEB DETAIL PAGE
   ═══════════════════════════════════════ */
function AnnaKalebPage({ onBack, t }) {
  const pink = "#ff2d87";
  const pinkLight = "#ff6eb4";
  const pinkGrad = "linear-gradient(135deg, #ff2d87 0%, #c850c0 40%, #7f00ff 100%)";

  const services = [
    { icon: "🎨", title: "Identités visuelles", desc: "Conception de logos, chartes graphiques complètes et univers visuels mémorables, déclinables sur tous supports : print, digital, merchandising et signalétique.", color: "#ff2d87" },
    { icon: "📣", title: "Stratégie média & communication", desc: "Élaboration de stratégies de communication multicanales (Meta, TikTok, LinkedIn), calendriers éditoriaux et création de contenu adapté à chaque plateforme.", color: "#c850c0" },
    { icon: "🤝", title: "Relations presse & événementiel", desc: "Démarchage et gestion des relations presse, couverture médiatique d'événements, partenariats stratégiques avec des marques et acteurs culturels locaux.", color: "#7f00ff" },
    { icon: "⚡", title: "IA & direction artistique", desc: "Utilisation de l'IA comme levier créatif pour générer des visuels, explorer des concepts et repousser les limites de la création. Un langage créatif, stratégique et mémorable.", color: "#ff6eb4" },
    { icon: "👕", title: "Merchandising", desc: "Conception de collections de produits dérivés (t-shirts, tote bags, casquettes) avec une stratégie de déploiement progressive : sur place, en ligne, puis éditions limitées en collaboration.", color: "#ff2d87" },
    { icon: "📹", title: "Contenu vidéo", desc: "Aftermovies, teasers, reels dynamiques et formats courts pensés pour TikTok et Instagram. Montages rythmés captant l'adrénaline sportive et l'ambiance festive.", color: "#c850c0" },
  ];

  return (
    <div style={{ background: t.bg, minHeight: "100vh", transition: "background .5s" }}>
      {/* Hero */}
      <section style={{ position: "relative", minHeight: "85vh", overflow: "hidden", background: pinkGrad, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
          {/* Animated grid */}
          <div style={{ position: "absolute", inset: 0, opacity: .06, backgroundImage: "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)", backgroundSize: "50px 50px" }} />
          {/* Glowing orbs */}
          <div style={{ position: "absolute", top: "15%", right: "10%", width: 250, height: 250, borderRadius: "50%", background: "#ff2d87", filter: "blur(100px)", opacity: .3, animation: "orb1 10s ease-in-out infinite" }} />
          <div style={{ position: "absolute", bottom: "20%", left: "5%", width: 200, height: 200, borderRadius: "50%", background: "#7f00ff", filter: "blur(100px)", opacity: .25, animation: "orb2 12s ease-in-out infinite" }} />
          <div style={{ position: "absolute", top: "50%", left: "40%", width: 150, height: 150, borderRadius: "50%", background: "#fff", filter: "blur(80px)", opacity: .08, animation: "orb1 8s ease-in-out infinite reverse" }} />
          {/* 3D floating shapes */}
          {[
            { top: "12%", left: "8%", size: 60, rot: 25, delay: 0 },
            { top: "70%", right: "12%", size: 45, rot: -30, delay: 1 },
            { top: "25%", right: "20%", size: 35, rot: 45, delay: 2 },
            { top: "60%", left: "15%", size: 28, rot: -15, delay: 3 },
          ].map((s, i) => (
            <div key={i} style={{
              position: "absolute", top: s.top, left: s.left, right: s.right,
              width: s.size, height: s.size, borderRadius: s.size * .25,
              border: "2px solid rgba(255,255,255,.15)",
              background: "rgba(255,255,255,.04)",
              backdropFilter: "blur(4px)",
              transform: `rotate(${s.rot}deg)`,
              animation: `float 7s ease-in-out ${s.delay}s infinite`,
            }} />
          ))}
          {/* Pufferfish / globe shape — abstract */}
          <div style={{ position: "absolute", top: "20%", right: "15%", width: 120, height: 120 }}>
            <div style={{ width: "100%", height: "100%", borderRadius: "50%", background: "rgba(255,255,255,.06)", border: "2px solid rgba(255,255,255,.12)", animation: "float 5s ease-in-out infinite", position: "relative" }}>
              {/* Spikes */}
              {Array.from({length: 12}).map((_, i) => (
                <div key={i} style={{
                  position: "absolute", top: "50%", left: "50%", width: 3, height: 20,
                  background: "rgba(255,255,255,.15)", borderRadius: 2,
                  transform: `rotate(${i * 30}deg) translateY(-70px)`, transformOrigin: "center center",
                }} />
              ))}
              <div style={{ position: "absolute", top: "35%", left: "30%", width: 10, height: 10, borderRadius: "50%", background: "rgba(255,255,255,.2)" }} />
              <div style={{ position: "absolute", top: "35%", right: "30%", width: 10, height: 10, borderRadius: "50%", background: "rgba(255,255,255,.2)" }} />
            </div>
          </div>
        </div>

        <button onClick={onBack} style={{ position: "absolute", top: 24, left: 24, zIndex: 10, display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(255,255,255,.12)", border: "none", borderRadius: 980, padding: "10px 20px", color: "#fff", fontSize: 14, fontWeight: 600, cursor: "pointer", backdropFilter: "blur(8px)", fontFamily: "'General Sans',sans-serif" }}>
          ← Retour
        </button>

        <div style={{ textAlign: "center", position: "relative", zIndex: 2, padding: "120px 24px 80px", maxWidth: 700 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(255,255,255,.1)", borderRadius: 980, padding: "6px 16px", marginBottom: 28, border: "1px solid rgba(255,255,255,.15)" }}>
            <span style={{ fontSize: 14 }}>🎨</span>
            <span style={{ fontSize: 12, fontWeight: 600, color: "rgba(255,255,255,.8)" }}>Studio Créatif</span>
          </div>
          <h1 style={{
            fontFamily: "'Satoshi',sans-serif", fontSize: "clamp(52px,12vw,110px)", fontWeight: 900,
            color: "#fff", lineHeight: .88, letterSpacing: "-.05em",
            textShadow: "0 4px 50px rgba(255,45,135,.5), 0 0 100px rgba(200,80,192,.3)",
          }}>
            Anna<br/>Kaleb
          </h1>
          <p style={{ fontSize: 19, lineHeight: 1.6, color: "rgba(255,255,255,.75)", marginTop: 24, maxWidth: 480, margin: "24px auto 0" }}>
            Là où l'intelligence artificielle rencontre la créativité. Branding, stratégie marketing et identité visuelle pour les marques ambitieuses.
          </p>
          <div style={{ display: "flex", gap: 10, justifyContent: "center", marginTop: 28, flexWrap: "wrap" }}>
            {["Branding", "IA Créative", "Stratégie", "Direction Artistique"].map(t2 => (
              <span key={t2} style={{ padding: "6px 16px", borderRadius: 980, background: "rgba(255,255,255,.1)", color: "rgba(255,255,255,.7)", fontSize: 13, fontWeight: 600, border: "1px solid rgba(255,255,255,.1)" }}>{t2}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section style={{ padding: "100px 24px", maxWidth: 800, margin: "0 auto" }}>
        <A>
          <p style={{ fontFamily: "'Satoshi',sans-serif", fontSize: 14, fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase", color: pink, marginBottom: 14 }}>Mission</p>
          <h2 style={{ fontFamily: "'Satoshi',sans-serif", fontSize: "clamp(28px,4vw,40px)", fontWeight: 900, color: t.tx, lineHeight: 1.1, letterSpacing: "-.02em", marginBottom: 24 }}>
            Pourquoi Anna Kaleb<span style={{ color: pink }}>.</span>
          </h2>
        </A>
        <A delay={0.1}>
          <p style={{ fontSize: 17, lineHeight: 1.85, color: t.txS }}>
            Les marques ont besoin de plus que de simples visuels. Elles ont besoin d'un langage créatif, stratégique et mémorable. Chez Anna Kaleb, nous façonnons des identités fortes grâce au branding, conseillons sur la stratégie média et la communication, accompagnons dans les relations presse et l'événementiel, et explorons le potentiel de l'IA pour repousser les limites de la création.
          </p>
          <p style={{ fontSize: 17, lineHeight: 1.85, color: t.txS, marginTop: 16 }}>
            Chaque projet est pensé comme une rencontre entre art, innovation et impact. Mon côté créatif m'a naturellement conduit à fonder ce studio, spécialisé dans la conception d'identités visuelles percutantes et dans l'élaboration de stratégies de marque ambitieuses.
          </p>
        </A>
      </section>

      {/* Services grid */}
      <section style={{ padding: "40px 24px 100px", background: t.bgS, transition: "background .5s" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <A><p style={{ fontFamily: "'Satoshi',sans-serif", fontSize: 14, fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase", color: pink, marginBottom: 14 }}>Services</p>
          <h2 style={{ fontFamily: "'Satoshi',sans-serif", fontSize: "clamp(24px,4vw,36px)", fontWeight: 900, color: t.tx, lineHeight: 1.1, letterSpacing: "-.02em", marginBottom: 40 }}>Ce que nous proposons<span style={{ color: pink }}>.</span></h2></A>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16 }}>
            {services.map((s, i) => (
              <A key={i} delay={i * 0.07}>
                <div style={{ background: t.bgC, borderRadius: 20, padding: 28, border: `1px solid ${t.bd}`, transition: "all .4s cubic-bezier(.22,1,.36,1)", height: "100%" }}
                  onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = `0 8px 30px ${s.color}15`; e.currentTarget.style.borderColor = s.color + "33"; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.borderColor = t.bd; }}>
                  <div style={{ width: 48, height: 48, borderRadius: 14, background: s.color + "18", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, marginBottom: 16 }}>{s.icon}</div>
                  <h3 style={{ fontFamily: "'Satoshi',sans-serif", fontSize: 17, fontWeight: 700, color: t.tx, marginBottom: 10 }}>{s.title}</h3>
                  <p style={{ fontSize: 13, lineHeight: 1.7, color: t.txS }}>{s.desc}</p>
                </div>
              </A>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study — Péniche Ski Club */}
      <section style={{ padding: "80px 24px", maxWidth: 800, margin: "0 auto" }}>
        <A>
          <p style={{ fontFamily: "'Satoshi',sans-serif", fontSize: 14, fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase", color: pink, marginBottom: 14 }}>Étude de cas</p>
          <h2 style={{ fontFamily: "'Satoshi',sans-serif", fontSize: "clamp(24px,4vw,36px)", fontWeight: 900, color: t.tx, lineHeight: 1.1, letterSpacing: "-.02em", marginBottom: 24 }}>
            Péniche Ski Club<span style={{ color: pink }}>.</span>
          </h2>
        </A>
        <A delay={0.1}>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: t.txS }}>
            Mission complète de branding et stratégie pour la Péniche Ski Club à Toulouse — un lieu unique mêlant wakeboard sur la Garonne, soirées festives et esprit californien.
          </p>
        </A>

        <A delay={0.15}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 14, marginTop: 32 }}>
            {[
              { title: "Identité visuelle", desc: "Logo, charte graphique, palette de couleurs, typographies et charte photo (N&B sportif + couleur lifestyle)" },
              { title: "Stratégie marketing", desc: "Partenariats Redbull, relations presse locales, collaborations mode avec Dirty Habits" },
              { title: "Réseaux sociaux", desc: "Stratégie Instagram & TikTok, calendrier éditorial, reels, aftermovies et micro-trottoirs" },
              { title: "Merchandising", desc: "T-shirts, tote bags, casquettes — déploiement progressif : sur place → e-shop → éditions limitées" },
            ].map((item, i) => (
              <div key={i} style={{ background: t.bgS, borderRadius: 16, padding: 22, border: `1px solid ${t.bd}` }}>
                <h4 style={{ fontFamily: "'Satoshi',sans-serif", fontSize: 15, fontWeight: 700, color: t.tx, marginBottom: 8 }}>{item.title}</h4>
                <p style={{ fontSize: 13, lineHeight: 1.65, color: t.txS }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </A>

        {/* Image placeholders */}
        <A delay={0.2}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10, marginTop: 24 }}>
            {["📷 Logo Ski Club", "📷 Feed Instagram", "📷 Merchandising"].map((l, i) => (
              <div key={i} style={{ height: 130, borderRadius: 14, background: `linear-gradient(135deg, ${["#ff2d87","#c850c0","#7f00ff"][i]}33, ${["#ff2d87","#c850c0","#7f00ff"][i]}11)`, display: "flex", alignItems: "center", justifyContent: "center", border: `1px solid ${t.bd}` }}>
                <span style={{ fontSize: 12, fontWeight: 600, color: t.txM }}>{l}</span>
              </div>
            ))}
          </div>
        </A>
      </section>

      {/* Back */}
      <div style={{ padding: "40px 24px 80px", textAlign: "center" }}>
        <button onClick={onBack} style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "15px 30px", borderRadius: 980, background: pink, color: "#fff", fontWeight: 600, fontSize: 15, border: "none", cursor: "pointer", fontFamily: "'General Sans',sans-serif" }}>
          ← Retour au portfolio
        </button>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════
   MAIN PORTFOLIO
   ═══════════════════════════════════════ */
export default function Portfolio() {
  const [isDark, setDark] = useState(true);
  const [page, setPage] = useState("home"); // "home" | "brita"
  const [active, setActive] = useState("hero");
  const [scrollY, setSY] = useState(0);
  const [modal, setModal] = useState(null);
  const [menuOpen, setMenu] = useState(false);
  const [skillTab, setSkillTab] = useState(0);
  const t = T(isDark);

  useEffect(() => { const h = () => setSY(window.scrollY); window.addEventListener("scroll", h, { passive: true }); return () => window.removeEventListener("scroll", h); }, []);
  useEffect(() => {
    if (page !== "home") return;
    const ids = ["hero","about","experience","education","skills","certifications","projects","volunteering","travels","gallery","contact"];
    const o = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); }), { threshold: 0.2 });
    ids.forEach((id) => { const el = document.getElementById(id); if (el) o.observe(el); });
    return () => o.disconnect();
  }, [page]);

  const go = useCallback((id) => { document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); setMenu(false); }, []);
  const goPage = (p) => { setPage(p); window.scrollTo({ top: 0, behavior: "smooth" }); };

  const nav = [
    { id: "about", l: "À propos" }, { id: "experience", l: "Expérience" },
    { id: "education", l: "Formation" }, { id: "skills", l: "Compétences" },
    { id: "certifications", l: "Certifications" },
    { id: "projects", l: "Projets" }, { id: "volunteering", l: "Bénévolat" },
    { id: "travels", l: "Voyages" },
    { id: "gallery", l: "Galerie" },
    { id: "contact", l: "Contact" },
  ];

  const g = (i) => G[i % G.length];

  /* ─── Styles ─── */
  const css = `
    @import url('https://api.fontshare.com/v2/css?f[]=satoshi@700,900,500,400&f[]=general-sans@400,500,600&display=swap');
    *,*::before,*::after{margin:0;padding:0;box-sizing:border-box}
    html{scroll-behavior:smooth;-webkit-font-smoothing:antialiased}
    body{font-family:'General Sans',system-ui,sans-serif;background:${t.bg};color:${t.tx};overflow-x:hidden;transition:background .5s,color .5s}
    ::selection{background:${t.ac};color:#fff}
    ::-webkit-scrollbar{width:5px}::-webkit-scrollbar-track{background:transparent}::-webkit-scrollbar-thumb{background:${t.bd};border-radius:3px}
    @keyframes pulse{0%,100%{opacity:.35}50%{opacity:.75}}
    @keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-20px)}}
    @keyframes slideUp{from{opacity:0;transform:translateY(40px)}to{opacity:1;transform:translateY(0)}}
    @keyframes fadeIn{from{opacity:0}to{opacity:1}}
    @keyframes scaleIn{from{opacity:0;transform:scale(.92)}to{opacity:1;transform:scale(1)}}
    @keyframes gradMove{0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}
    @keyframes orb1{0%{transform:translate(0,0) scale(1)}33%{transform:translate(60px,-40px) scale(1.1)}66%{transform:translate(-30px,50px) scale(.95)}100%{transform:translate(0,0) scale(1)}}
    @keyframes orb2{0%{transform:translate(0,0) scale(1)}33%{transform:translate(-50px,30px) scale(.9)}66%{transform:translate(40px,-60px) scale(1.05)}100%{transform:translate(0,0) scale(1)}}
    @keyframes spin3d{0%{transform:rotate(0deg) rotateX(15deg)}100%{transform:rotate(360deg) rotateX(15deg)}}
    @keyframes morphBlob{0%,100%{border-radius:60% 40% 30% 70%/60% 30% 70% 40%}50%{border-radius:30% 60% 70% 40%/50% 60% 30% 60%}}
    @keyframes shimmer{0%{background-position:-200% 0}100%{background-position:200% 0}}
    .ambient-orb{position:fixed;border-radius:50%;pointer-events:none;filter:blur(80px);z-index:0;opacity:.035;transition:opacity 1s}
    .section-glow{position:relative;overflow:hidden}
    .section-glow::before{content:'';position:absolute;top:-50%;left:-50%;width:200%;height:200%;background:radial-gradient(circle at 30% 40%, ${t.ac}08 0%, transparent 50%);pointer-events:none}
    .nav-glass{backdrop-filter:saturate(180%) blur(20px);-webkit-backdrop-filter:saturate(180%) blur(20px)}
    .card{background:${t.bgC};border:1px solid ${t.bd};border-radius:20px;transition:all .4s cubic-bezier(.22,1,.36,1);position:relative;overflow:hidden}
    .card::before{content:'';position:absolute;top:0;left:-100%;width:50%;height:100%;background:linear-gradient(90deg,transparent,${isDark?"rgba(255,255,255,.03)":"rgba(255,255,255,.5)"},transparent);transition:left .6s;pointer-events:none}
    .card:hover::before{left:150%}
    .card:hover{transform:translateY(-4px);box-shadow:${t.sh},0 0 20px ${t.ac}08;border-color:${t.bdH}}
    .tag{display:inline-block;padding:4px 13px;border-radius:100px;font-size:12px;font-weight:500;background:${t.acS};color:${t.ac};margin:3px}
    .btn-p{display:inline-flex;align-items:center;gap:8px;padding:15px 30px;border-radius:980px;background:${t.ac};color:#fff;font-weight:600;font-size:15px;border:none;cursor:pointer;transition:all .3s;text-decoration:none;font-family:'General Sans',sans-serif}
    .btn-p:hover{filter:brightness(1.1);transform:scale(1.03);box-shadow:0 8px 25px ${t.ac}44}
    .btn-s{display:inline-flex;align-items:center;gap:8px;padding:15px 30px;border-radius:980px;background:transparent;color:${t.tx};font-weight:600;font-size:15px;border:1.5px solid ${t.bd};cursor:pointer;transition:all .3s;text-decoration:none;font-family:'General Sans',sans-serif}
    .btn-s:hover{border-color:${t.ac};color:${t.ac}}
    .sl{font-family:'Satoshi',sans-serif;font-size:14px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:${t.ac};margin-bottom:14px}
    .st{font-family:'Satoshi',sans-serif;font-size:clamp(32px,5vw,52px);font-weight:900;line-height:1.08;letter-spacing:-.03em;color:${t.tx};margin-bottom:20px}
    .tl-line{position:absolute;left:23px;top:0;bottom:0;width:2px;background:linear-gradient(to bottom,transparent,${t.ac},transparent)}
    .tl-dot{width:12px;height:12px;border-radius:50%;background:${t.ac};border:3px solid ${t.bg};box-shadow:0 0 0 2px ${t.ac};position:relative;z-index:2;flex-shrink:0;margin-top:6px}
    .photo-item{cursor:pointer;border-radius:16px;overflow:hidden;transition:all .4s cubic-bezier(.22,1,.36,1);aspect-ratio:1}
    .photo-item:hover{transform:scale(1.04);box-shadow:${t.sh}}
    .photo-item:nth-child(1){grid-row:span 2;aspect-ratio:auto}
    .modal-bg{position:fixed;inset:0;background:rgba(0,0,0,.7);z-index:9998;display:flex;align-items:center;justify-content:center;animation:fadeIn .3s;backdrop-filter:blur(16px);padding:20px}
    .modal-box{background:${t.bgC};border-radius:24px;max-width:680px;width:100%;max-height:85vh;overflow-y:auto;animation:scaleIn .4s cubic-bezier(.22,1,.36,1);border:1px solid ${t.bd}}
    .mob-menu{position:fixed;inset:0;background:${t.gl};backdrop-filter:blur(48px);-webkit-backdrop-filter:blur(48px);z-index:999;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:28px;animation:fadeIn .25s}
    .skill-tab{padding:10px 22px;border-radius:980px;border:1.5px solid ${t.bd};background:transparent;color:${t.txS};font-size:14px;font-weight:600;cursor:pointer;transition:all .3s;font-family:'General Sans',sans-serif}
    .skill-tab.active{background:${t.ac};color:#fff;border-color:${t.ac}}
    .detail-btn{display:inline-flex;align-items:center;gap:6px;padding:10px 20px;border-radius:980px;background:${t.acS};color:${t.ac};font-size:13px;font-weight:600;border:none;cursor:pointer;transition:all .35s cubic-bezier(.22,1,.36,1);font-family:'General Sans',sans-serif;margin-top:16px}
    .detail-btn:hover{background:${t.ac};color:#fff;transform:translateY(-2px);box-shadow:0 6px 20px ${t.ac}33}
    @media(max-width:768px){
      .d-nav{display:none!important}
      .mob-btn{display:flex!important}
      .hero-btns{flex-direction:column;width:100%}
      .hero-btns a{width:100%;justify-content:center}
      .proj-g{grid-template-columns:1fr!important}
      .ph-g{grid-template-columns:1fr 1fr!important}
      .ph-g .photo-item:nth-child(1){grid-row:span 1}
      .sk-g{grid-template-columns:1fr!important}
      .stat-row{flex-direction:column;gap:24px!important}
      section{padding-left:16px!important;padding-right:16px!important}
      .st{font-size:clamp(26px,7vw,40px)!important}
      .modal-box{margin:12px;max-height:90vh}
      .card{border-radius:16px!important}
    }
    @media(max-width:480px){
      .ph-g{grid-template-columns:1fr!important}
      .btn-p,.btn-s{padding:13px 24px!important;font-size:14px!important}
      .tag{font-size:11px!important;padding:3px 10px!important}
    }
    @media(min-width:769px){.mob-btn{display:none!important}}
    @media(min-width:1400px){
      .st{font-size:clamp(40px,4vw,60px)!important}
    }
  `;

  if (page === "brita") {
    return (<><style>{css}</style><BritaPage onBack={() => goPage("home")} t={t} /></>);
  }
  if (page === "leako") {
    return (<><style>{css}</style><LeakoPage onBack={() => goPage("home")} t={t} /></>);
  }
  if (page === "annakaleb") {
    return (<><style>{css}</style><AnnaKalebPage onBack={() => goPage("home")} t={t} /></>);
  }

  return (
    <>
      <style>{css}</style>
      <div style={{ background: t.bg, minHeight: "100vh", transition: "background .5s", position: "relative" }}>

        {/* Ambient background effects */}
        <div style={{ position:"fixed",inset:0,pointerEvents:"none",zIndex:0,overflow:"hidden" }}>
          {/* Floating gradient orbs */}
          <div className="ambient-orb" style={{ top:"8%",left:"-5%",width:500,height:500,background:t.ac,animation:"orb1 25s ease-in-out infinite" }}/>
          <div className="ambient-orb" style={{ bottom:"15%",right:"-8%",width:400,height:400,background:isDark?"#a855f7":"#6366f1",animation:"orb2 20s ease-in-out infinite" }}/>
          <div className="ambient-orb" style={{ top:"50%",left:"40%",width:300,height:300,background:isDark?"#06b6d4":"#0ea5e9",animation:"orb1 30s ease-in-out infinite reverse" }}/>
          {/* Morphing blob */}
          <div style={{ position:"fixed",top:"25%",right:"10%",width:180,height:180,background:t.ac,opacity:.015,borderRadius:"60% 40% 30% 70%/60% 30% 70% 40%",animation:"morphBlob 12s ease-in-out infinite",filter:"blur(40px)" }}/>
          {/* 3D rotating ring */}
          <div style={{ position:"fixed",bottom:"20%",left:"8%",width:120,height:120,border:`1.5px solid ${isDark?"rgba(255,255,255,.03)":"rgba(0,0,0,.03)"}`,borderRadius:"50%",animation:"spin3d 30s linear infinite",perspective:200 }}/>
          {/* Subtle noise texture overlay */}
          <div style={{ position:"fixed",inset:0,opacity:isDark?.025:.015,backgroundImage:"url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",backgroundSize:"180px 180px" }}/>
        </div>

        {/* NAV */}
        <nav className="nav-glass" style={{ position:"fixed",top:0,left:0,right:0,zIndex:100,background:t.gl,borderBottom:scrollY>50?`1px solid ${t.bd}`:"1px solid transparent",transition:"all .3s" }}>
          <div style={{ maxWidth:1200,margin:"0 auto",padding:"0 24px",display:"flex",alignItems:"center",justifyContent:"space-between",height:56 }}>
            <button onClick={()=>go("hero")} style={{ background:"none",border:"none",cursor:"pointer",fontFamily:"'Satoshi',sans-serif",fontWeight:900,fontSize:20,color:t.tx,letterSpacing:"-.02em" }}>Naël<span style={{color:t.ac}}>.</span></button>
            <div className="d-nav" style={{ display:"flex",alignItems:"center",gap:28 }}>
              {nav.map(n=>(<button key={n.id} onClick={()=>go(n.id)} style={{ background:"none",border:"none",cursor:"pointer",fontFamily:"'General Sans',sans-serif",fontSize:13,fontWeight:500,color:active===n.id?t.tx:t.txM,transition:"color .3s",position:"relative" }}>{n.l}{active===n.id&&<span style={{ position:"absolute",bottom:-4,left:"50%",transform:"translateX(-50%)",width:4,height:4,borderRadius:"50%",background:t.ac }}/>}</button>))}
              <button onClick={()=>setDark(!isDark)} style={{ background:t.bgS,border:`1px solid ${t.bd}`,borderRadius:"50%",width:34,height:34,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",fontSize:15 }}>{isDark?"☀️":"🌙"}</button>
            </div>
            <button className="mob-btn" onClick={()=>setMenu(!menuOpen)} style={{ background:"none",border:"none",cursor:"pointer",display:"flex",flexDirection:"column",gap:5,padding:8 }}>
              <span style={{ width:22,height:2,background:t.tx,borderRadius:2,transition:"all .3s",transform:menuOpen?"rotate(45deg) translate(5px,5px)":"none" }}/>
              <span style={{ width:22,height:2,background:t.tx,borderRadius:2,transition:"all .3s",opacity:menuOpen?0:1 }}/>
              <span style={{ width:22,height:2,background:t.tx,borderRadius:2,transition:"all .3s",transform:menuOpen?"rotate(-45deg) translate(5px,-5px)":"none" }}/>
            </button>
          </div>
        </nav>

        {menuOpen&&(<div className="mob-menu">{nav.map((n,i)=>(<button key={n.id} onClick={()=>go(n.id)} style={{ background:"none",border:"none",cursor:"pointer",fontFamily:"'Satoshi',sans-serif",fontSize:28,fontWeight:700,color:t.tx,animation:`slideUp .4s ${i*.04}s both` }}>{n.l}</button>))}<button onClick={()=>{setDark(!isDark);setMenu(false)}} style={{ background:t.bgS,border:`1px solid ${t.bd}`,borderRadius:980,padding:"10px 24px",cursor:"pointer",fontSize:15,color:t.tx,fontFamily:"'General Sans',sans-serif" }}>{isDark?"☀️ Clair":"🌙 Sombre"}</button></div>)}

        {/* HERO */}
        <section id="hero" style={{ position:"relative",minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",overflow:"hidden",padding:"120px 24px 80px" }}>
          <div style={{ position:"absolute",width:500,height:500,borderRadius:"50%",background:t.ac,filter:"blur(120px)",opacity:.15,top:"-10%",right:"-8%",animation:"orb1 12s ease-in-out infinite",pointerEvents:"none" }}/>
          <div style={{ position:"absolute",width:400,height:400,borderRadius:"50%",background:t.ac2,filter:"blur(120px)",opacity:.12,bottom:"0%",left:"-5%",animation:"orb2 14s ease-in-out infinite",pointerEvents:"none" }}/>
          {/* 3D floating geometric shapes */}
          <div style={{ position:"absolute",top:"15%",left:"8%",width:60,height:60,border:`1.5px solid ${isDark?"rgba(255,255,255,.06)":"rgba(0,0,0,.04)"}`,borderRadius:16,transform:"rotate(30deg)",animation:"float 8s ease-in-out infinite",pointerEvents:"none" }}/>
          <div style={{ position:"absolute",bottom:"22%",right:"10%",width:40,height:40,border:`1.5px solid ${isDark?"rgba(255,255,255,.05)":"rgba(0,0,0,.03)"}`,borderRadius:12,transform:"rotate(-20deg)",animation:"float 10s ease-in-out infinite 2s",pointerEvents:"none" }}/>
          <div style={{ position:"absolute",top:"30%",right:"18%",width:24,height:24,background:isDark?"rgba(255,255,255,.03)":"rgba(0,0,0,.02)",borderRadius:8,transform:"rotate(45deg)",animation:"float 7s ease-in-out infinite 1s",pointerEvents:"none" }}/>
          <div style={{ position:"absolute",bottom:"35%",left:"15%",width:32,height:32,borderRadius:"50%",border:`1px solid ${isDark?"rgba(255,255,255,.04)":"rgba(0,0,0,.03)"}`,animation:"spin3d 20s linear infinite",pointerEvents:"none" }}/>
          {/* Shimmer line */}
          <div style={{ position:"absolute",top:"60%",left:0,right:0,height:1,background:`linear-gradient(90deg, transparent, ${t.ac}15, transparent)`,pointerEvents:"none" }}/>
          <div style={{ textAlign:"center",position:"relative",zIndex:2,maxWidth:800 }}>
            <div style={{ position:"relative",width:130,height:130,margin:"0 auto 28px",animation:"slideUp .8s .1s both" }}>
              <div style={{ position:"absolute",inset:-6,borderRadius:"50%",border:`2px solid ${t.ac}22`,animation:"spin3d 12s linear infinite" }}/>
              <div style={{ width:130,height:130,borderRadius:"50%",border:`3px solid ${t.bd}`,boxShadow:`0 0 0 8px ${t.acS}, 0 10px 40px ${t.ac}22`,overflow:"hidden" }}><img src={B + "photos-de-profil.png"} alt="Naël SID-ALI" style={{ width:"100%",height:"100%",objectFit:"cover" }} /></div>
            </div>
            <p style={{ fontFamily:"'Satoshi',sans-serif",fontSize:15,fontWeight:600,color:t.ac,letterSpacing:".04em",marginBottom:14,animation:"slideUp .8s .2s both" }}>{D.title}</p>
            <h1 style={{ fontFamily:"'Satoshi',sans-serif",fontSize:"clamp(42px,8vw,78px)",fontWeight:900,lineHeight:1.02,letterSpacing:"-.045em",background:`linear-gradient(135deg,${t.tx} 0%,${t.txS} 50%,${t.ac} 100%)`,backgroundSize:"200% 200%",animation:"gradMove 8s ease infinite, slideUp .8s .3s both",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",marginBottom:20 }}>{D.name}</h1>
            <p style={{ fontSize:19,lineHeight:1.6,color:t.txS,maxWidth:520,margin:"0 auto 36px",animation:"slideUp .8s .4s both" }}>{D.tagline}</p>
            <div className="hero-btns" style={{ display:"flex",gap:14,justifyContent:"center",animation:"slideUp .8s .5s both" }}>
              <a href={`mailto:${D.email}`} className="btn-p"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>Me contacter</a>
              <a href={D.linkedin} target="_blank" rel="noopener noreferrer" className="btn-s"><svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>LinkedIn</a>
            </div>
            <div style={{ marginTop:72,animation:"pulse 2.5s infinite",opacity:.4 }}><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={t.txM} strokeWidth="2"><path d="M12 5v14M19 12l-7 7-7-7"/></svg></div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" style={{ padding:"120px 24px",maxWidth:900,margin:"0 auto" }}>
          <A><p className="sl">À propos</p><h2 className="st">Qui suis-je<span style={{color:t.ac}}>.</span></h2></A>
          <A delay={.12}><div style={{ fontSize:17,lineHeight:1.85,color:t.txS,whiteSpace:"pre-line" }}>{D.bio}</div><div style={{ marginTop:16,fontSize:15,color:t.txM }}>📍 {D.location} · 📧 {D.email} · 📱 {D.phone}</div></A>
          <A delay={.2}><div className="stat-row" style={{ marginTop:48,display:"flex",gap:56,flexWrap:"wrap" }}>{[{n:"4",l:"Expériences professionnelles"},{n:"4+",l:"Projets innovants"},{n:"3",l:"Formations d'excellence"},{n:"C1",l:"Anglais — Fluent"}].map((s,i)=>(<div key={i}><div style={{ fontFamily:"'Satoshi',sans-serif",fontSize:44,fontWeight:900,color:t.ac,lineHeight:1 }}>{s.n}</div><div style={{ fontSize:13,color:t.txM,marginTop:4,maxWidth:140 }}>{s.l}</div></div>))}</div></A>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" style={{ padding:"120px 24px",background:t.bgS,transition:"background .5s" }}>
          <div style={{ maxWidth:900,margin:"0 auto" }}>
            <A><p className="sl">Parcours</p><h2 className="st">Expérience professionnelle<span style={{color:t.ac}}>.</span></h2></A>
            <div style={{ position:"relative",marginTop:48 }}>
              <div className="tl-line"/>
              {D.experiences.map((exp,i)=>(
                <A key={exp.id} delay={i*.12}>
                  <div style={{ display:"flex",gap:28,marginBottom:40,paddingLeft:8 }}>
                    <div className="tl-dot"/>
                    <div className="card" style={{ flex:1,padding:28,cursor:"default" }}>
                      <div style={{ display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:8,marginBottom:6 }}>
                        <div>
                          <h3 style={{ fontFamily:"'Satoshi',sans-serif",fontSize:21,fontWeight:700,color:t.tx }}>{exp.role}</h3>
                          <p style={{ fontSize:15,fontWeight:600,color:t.ac }}>{exp.company} — {exp.location}</p>
                        </div>
                        <span style={{ fontSize:12,color:t.txM,fontWeight:500,background:isDark?"rgba(255,255,255,.05)":"rgba(0,0,0,.04)",padding:"5px 14px",borderRadius:980,whiteSpace:"nowrap" }}>{exp.period}</span>
                      </div>
                      <ul style={{ marginTop:14,paddingLeft:0,listStyle:"none" }}>
                        {exp.description.map((d,j)=>(<li key={j} style={{ fontSize:14,lineHeight:1.75,color:t.txS,marginBottom:10,paddingLeft:18,position:"relative" }}><span style={{ position:"absolute",left:0,top:9,width:6,height:6,borderRadius:"50%",background:t.ac,opacity:.5 }}/>{d}</li>))}
                      </ul>
                      <div style={{ display:"flex",flexWrap:"wrap" }}>{exp.tags.map(tag=><span key={tag} className="tag">{tag}</span>)}</div>
                      {exp.hasDetail && (
                        <button className="detail-btn" onClick={() => goPage("brita")}>
                          En savoir plus →
                        </button>
                      )}
                    </div>
                  </div>
                </A>
              ))}
            </div>
          </div>
        </section>

        {/* EDUCATION */}
        <section id="education" style={{ padding:"120px 24px",maxWidth:900,margin:"0 auto" }}>
          <A><p className="sl">Formation</p><h2 className="st">Éducation<span style={{color:t.ac}}>.</span></h2></A>
          <div style={{ marginTop:48,display:"flex",flexDirection:"column",gap:20 }}>
            {D.education.map((edu,i)=>(
              <A key={edu.id} delay={i*.1}>
                <div className="card" style={{ padding:28,display:"flex",gap:20,alignItems:"flex-start" }}>
                  <div style={{ width:52,height:52,borderRadius:16,background:g(i),display:"flex",alignItems:"center",justifyContent:"center",fontSize:24,flexShrink:0 }}>{edu.icon}</div>
                  <div style={{ flex:1 }}>
                    <h3 style={{ fontFamily:"'Satoshi',sans-serif",fontSize:19,fontWeight:700,color:t.tx }}>{edu.degree}</h3>
                    <p style={{ fontSize:15,fontWeight:600,color:t.ac,marginTop:2 }}>{edu.school} {edu.detail&&<span style={{ color:t.txM,fontWeight:400 }}>· {edu.detail}</span>}</p>
                    <span style={{ display:"inline-block",fontSize:12,color:t.txM,fontWeight:500,background:isDark?"rgba(255,255,255,.05)":"rgba(0,0,0,.04)",padding:"5px 14px",borderRadius:980,marginTop:8 }}>{edu.period}</span>
                    <p style={{ fontSize:14,lineHeight:1.7,color:t.txS,marginTop:10 }}>{edu.description}</p>
                  </div>
                </div>
              </A>
            ))}
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" style={{ padding:"120px 24px",background:t.bgS,transition:"background .5s" }}>
          <div style={{ maxWidth:900,margin:"0 auto" }}>
            <A><p className="sl">Compétences</p><h2 className="st">Ce que je maîtrise<span style={{color:t.ac}}>.</span></h2></A>
            <A delay={.1}><div style={{ display:"flex",gap:10,flexWrap:"wrap",marginTop:32,marginBottom:32 }}>{D.skills.map((c,i)=>(<button key={i} className={`skill-tab ${skillTab===i?"active":""}`} onClick={()=>setSkillTab(i)}>{c.category}</button>))}</div></A>
            <A delay={.15}><div className="sk-g" style={{ display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(260px,1fr))",gap:14 }}>{D.skills[skillTab].items.map((item,j)=>(<div key={`${skillTab}-${j}`} className="card" style={{ padding:"20px 24px",display:"flex",alignItems:"center",gap:14 }}><div style={{ width:10,height:10,borderRadius:"50%",background:t.ac,flexShrink:0,opacity:.7 }}/><span style={{ fontSize:15,fontWeight:500,color:t.tx }}>{item}</span></div>))}</div></A>
          </div>
        </section>

        {/* CERTIFICATIONS */}
        <section id="certifications" style={{ padding:"80px 24px",maxWidth:900,margin:"0 auto" }}>
          <A><p className="sl">Certifications</p><h2 className="st">En apprentissage continu<span style={{color:t.ac}}>.</span></h2></A>
          <div style={{ marginTop:32,display:"flex",flexDirection:"column",gap:16 }}>
            {D.certifications.map((c,i)=>(
              <A key={c.id} delay={i*.1}>
                <div className="card" style={{ padding:24,display:"flex",alignItems:"center",gap:20 }}>
                  <div style={{ width:52,height:52,borderRadius:16,background:t.acS,display:"flex",alignItems:"center",justifyContent:"center",fontSize:24,flexShrink:0 }}>{c.icon}</div>
                  <div style={{ flex:1 }}>
                    <h3 style={{ fontFamily:"'Satoshi',sans-serif",fontSize:18,fontWeight:700,color:t.tx }}>{c.title}</h3>
                    <p style={{ fontSize:14,color:t.ac,fontWeight:600,marginTop:2 }}>{c.issuer}</p>
                  </div>
                  <span style={{ fontSize:12,fontWeight:600,color:"#ff9500",background:"rgba(255,149,0,.12)",padding:"6px 14px",borderRadius:980,whiteSpace:"nowrap",display:"flex",alignItems:"center",gap:4 }}>
                    <span style={{ width:6,height:6,borderRadius:"50%",background:"#ff9500",animation:"pulse 1.5s infinite" }}/>
                    {c.status}
                  </span>
                </div>
              </A>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" style={{ padding:"120px 24px",maxWidth:1000,margin:"0 auto" }}>
          <A><p className="sl">Réalisations</p><h2 className="st">Projets<span style={{color:t.ac}}>.</span></h2></A>

          {/* LEAKO — Featured Project */}
          <A delay={0.1}>
            <div style={{
              marginTop:40, borderRadius:28, overflow:"hidden",
              border:`1px solid ${t.bd}`, background:t.bgC,
              boxShadow:t.sh, transition:"all .4s",
            }}>
              {/* Leako Hero Banner with 3D visuals */}
              <div style={{
                position:"relative", height:"clamp(220px,40vw,340px)", overflow:"hidden",
                background:"linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)",
              }}>
                {/* Floating 3D shapes */}
                <div style={{ position:"absolute",inset:0,overflow:"hidden",pointerEvents:"none" }}>
                  {/* Phone mockup shape */}
                  <div style={{
                    position:"absolute", right:"8%", top:"50%", transform:"translateY(-50%) rotateY(-15deg) rotateX(5deg)",
                    width:120, height:220, borderRadius:24, border:"2px solid rgba(255,255,255,.15)",
                    background:"linear-gradient(145deg, rgba(255,255,255,.08), rgba(255,255,255,.02))",
                    backdropFilter:"blur(4px)", boxShadow:"0 20px 60px rgba(0,0,0,.4), inset 0 1px 0 rgba(255,255,255,.1)",
                    display:"flex", alignItems:"center", justifyContent:"center", flexDirection:"column", gap:8,
                    animation:"float 6s ease-in-out infinite",
                  }}>
                    <div style={{ width:60, height:60, borderRadius:16, background:"linear-gradient(135deg, #667eea, #764ba2)", display:"flex", alignItems:"center", justifyContent:"center" }}>
                      <span style={{ fontSize:28, fontWeight:900, color:"#fff", fontFamily:"'Satoshi',sans-serif" }}>L</span>
                    </div>
                    <div style={{ width:50, height:4, borderRadius:2, background:"rgba(255,255,255,.15)" }}/>
                    <div style={{ width:70, height:4, borderRadius:2, background:"rgba(255,255,255,.1)" }}/>
                    <div style={{ width:40, height:4, borderRadius:2, background:"rgba(255,255,255,.08)" }}/>
                  </div>

                  {/* Floating orbs */}
                  <div style={{ position:"absolute", top:"15%", left:"10%", width:80, height:80, borderRadius:"50%", background:"linear-gradient(135deg, #667eea, #764ba2)", opacity:.25, filter:"blur(20px)", animation:"orb1 10s ease-in-out infinite" }}/>
                  <div style={{ position:"absolute", bottom:"20%", left:"25%", width:50, height:50, borderRadius:"50%", background:"linear-gradient(135deg, #f093fb, #f5576c)", opacity:.2, filter:"blur(16px)", animation:"orb2 8s ease-in-out infinite" }}/>
                  <div style={{ position:"absolute", top:"30%", right:"30%", width:35, height:35, borderRadius:"50%", background:"linear-gradient(135deg, #4facfe, #00f2fe)", opacity:.2, filter:"blur(12px)", animation:"orb1 12s ease-in-out infinite reverse" }}/>

                  {/* 3D Cubes */}
                  <div style={{ position:"absolute", top:"20%", left:"20%", width:40, height:40, border:"1.5px solid rgba(255,255,255,.12)", borderRadius:10, transform:"rotate(35deg)", animation:"float 8s ease-in-out infinite 1s" }}/>
                  <div style={{ position:"absolute", bottom:"25%", right:"25%", width:28, height:28, border:"1.5px solid rgba(255,255,255,.08)", borderRadius:8, transform:"rotate(-20deg)", animation:"float 7s ease-in-out infinite 2s" }}/>
                  <div style={{ position:"absolute", top:"60%", left:"8%", width:20, height:20, background:"rgba(255,255,255,.06)", borderRadius:6, transform:"rotate(45deg)", animation:"float 9s ease-in-out infinite 3s" }}/>

                  {/* Grid pattern */}
                  <div style={{ position:"absolute", inset:0, opacity:.04, backgroundImage:"linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)", backgroundSize:"40px 40px" }}/>

                  {/* Glowing line */}
                  <div style={{ position:"absolute", top:"45%", left:0, right:0, height:1, background:"linear-gradient(90deg, transparent, rgba(102,126,234,.3), transparent)" }}/>
                </div>

                {/* LEAKO title */}
                <div style={{ position:"absolute", left:"6%", top:"50%", transform:"translateY(-50%)", zIndex:2 }}>
                  <span style={{ fontSize:13, fontWeight:600, color:"rgba(255,255,255,.5)", letterSpacing:".15em", textTransform:"uppercase", display:"block", marginBottom:12 }}>Projet entrepreneurial</span>
                  <h2 style={{
                    fontFamily:"'Satoshi',sans-serif", fontSize:"clamp(48px,8vw,80px)", fontWeight:900,
                    color:"#fff", lineHeight:.95, letterSpacing:"-.04em",
                    textShadow:"0 4px 30px rgba(102,126,234,.4)",
                  }}>
                    Leako
                  </h2>
                  <div style={{ display:"flex", gap:8, marginTop:16 }}>
                    <span style={{ padding:"5px 14px", borderRadius:980, background:"rgba(255,255,255,.1)", color:"rgba(255,255,255,.7)", fontSize:12, fontWeight:600, backdropFilter:"blur(4px)" }}>App Mobile</span>
                    <span style={{ padding:"5px 14px", borderRadius:980, background:"rgba(255,255,255,.1)", color:"rgba(255,255,255,.7)", fontSize:12, fontWeight:600, backdropFilter:"blur(4px)" }}>Identité</span>
                    <span style={{ padding:"5px 14px", borderRadius:980, background:"rgba(255,255,255,.1)", color:"rgba(255,255,255,.7)", fontSize:12, fontWeight:600, backdropFilter:"blur(4px)" }}>Numérique</span>
                  </div>
                </div>

                {/* Category badge */}
                <span style={{ position:"absolute", top:20, right:20, background:"rgba(255,255,255,.12)", color:"#fff", fontSize:12, fontWeight:600, padding:"6px 16px", borderRadius:980, backdropFilter:"blur(8px)", border:"1px solid rgba(255,255,255,.1)" }}>
                  Entrepreneuriat
                </span>
              </div>

              {/* Content */}
              <div style={{ padding:"clamp(20px,4vw,32px) clamp(16px,4vw,32px) clamp(24px,4vw,36px)" }}>
                <p style={{ fontSize:16, lineHeight:1.8, color:t.txS }}>
                  {D.projects[0].description}
                </p>
                <div style={{ display:"flex", flexWrap:"wrap", gap:6, marginTop:20 }}>
                  {D.projects[0].tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
                </div>
                <button onClick={() => goPage("leako")} className="detail-btn" style={{ marginTop:20, background:"linear-gradient(135deg, #667eea, #764ba2)", color:"#fff", border:"none", padding:"12px 24px", fontSize:14 }}>
                  Découvrir le projet →
                </button>
              </div>
            </div>
          </A>

          {/* ANNA KALEB — Featured Project */}
          <A delay={0.15}>
            <div style={{
              marginTop:28, borderRadius:28, overflow:"hidden",
              border:`1px solid ${t.bd}`, background:t.bgC,
              boxShadow:t.sh, transition:"all .4s",
            }}>
              {/* Anna Kaleb Hero Banner — Hot pink 3D */}
              <div style={{
                position:"relative", height:"clamp(220px,40vw,340px)", overflow:"hidden",
                background:"linear-gradient(135deg, #ff2d87 0%, #c850c0 40%, #7f00ff 100%)",
              }}>
                <div style={{ position:"absolute",inset:0,overflow:"hidden",pointerEvents:"none" }}>
                  {/* Grid */}
                  <div style={{ position:"absolute", inset:0, opacity:.05, backgroundImage:"linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)", backgroundSize:"45px 45px" }}/>
                  {/* Orbs */}
                  <div style={{ position:"absolute", top:"10%", left:"10%", width:100, height:100, borderRadius:"50%", background:"#fff", filter:"blur(50px)", opacity:.15, animation:"orb1 8s ease-in-out infinite" }}/>
                  <div style={{ position:"absolute", bottom:"15%", right:"15%", width:80, height:80, borderRadius:"50%", background:"#ff2d87", filter:"blur(40px)", opacity:.3, animation:"orb2 10s ease-in-out infinite" }}/>

                  {/* 3D Pufferfish abstract */}
                  <div style={{ position:"absolute", right:"8%", top:"50%", transform:"translateY(-50%)", animation:"float 6s ease-in-out infinite" }}>
                    <div style={{ width:130, height:130, borderRadius:"50%", background:"rgba(255,255,255,.08)", border:"2px solid rgba(255,255,255,.15)", backdropFilter:"blur(4px)", position:"relative", boxShadow:"0 20px 60px rgba(0,0,0,.2)" }}>
                      {/* Spikes */}
                      {Array.from({length:10}).map((_,i) => (
                        <div key={i} style={{ position:"absolute", top:"50%", left:"50%", width:3, height:18, background:"rgba(255,255,255,.2)", borderRadius:2, transform:`rotate(${i*36}deg) translateY(-75px)`, transformOrigin:"center center" }}/>
                      ))}
                      {/* Eyes */}
                      <div style={{ position:"absolute", top:"38%", left:"28%", width:12, height:12, borderRadius:"50%", background:"rgba(255,255,255,.3)" }}/>
                      <div style={{ position:"absolute", top:"38%", right:"28%", width:12, height:12, borderRadius:"50%", background:"rgba(255,255,255,.3)" }}/>
                      {/* Mouth */}
                      <div style={{ position:"absolute", bottom:"30%", left:"50%", transform:"translateX(-50%)", width:16, height:8, borderRadius:"0 0 8px 8px", background:"rgba(255,255,255,.15)" }}/>
                    </div>
                  </div>

                  {/* Floating shapes */}
                  <div style={{ position:"absolute", top:"20%", left:"22%", width:35, height:35, border:"2px solid rgba(255,255,255,.12)", borderRadius:10, transform:"rotate(35deg)", animation:"float 7s ease-in-out infinite 1s" }}/>
                  <div style={{ position:"absolute", bottom:"20%", left:"35%", width:24, height:24, background:"rgba(255,255,255,.06)", borderRadius:7, transform:"rotate(-25deg)", animation:"float 9s ease-in-out infinite 2s" }}/>

                  {/* Glowing lines */}
                  <div style={{ position:"absolute", top:"35%", left:0, right:0, height:1, background:"linear-gradient(90deg, transparent, rgba(255,255,255,.2), transparent)" }}/>
                  <div style={{ position:"absolute", top:"65%", left:0, right:0, height:1, background:"linear-gradient(90deg, transparent, rgba(255,255,255,.1), transparent)" }}/>
                </div>

                {/* Title */}
                <div style={{ position:"absolute", left:"6%", top:"50%", transform:"translateY(-50%)", zIndex:2 }}>
                  <span style={{ fontSize:13, fontWeight:600, color:"rgba(255,255,255,.6)", letterSpacing:".15em", textTransform:"uppercase", display:"block", marginBottom:12 }}>Studio Créatif</span>
                  <h2 style={{
                    fontFamily:"'Satoshi',sans-serif", fontSize:"clamp(44px,7vw,72px)", fontWeight:900,
                    color:"#fff", lineHeight:.92, letterSpacing:"-.04em",
                    textShadow:"0 4px 30px rgba(255,45,135,.4)",
                  }}>
                    Anna<br/>Kaleb
                  </h2>
                  <div style={{ display:"flex", gap:8, marginTop:16 }}>
                    {["Branding","IA","Événementiel"].map(l => (
                      <span key={l} style={{ padding:"5px 14px", borderRadius:980, background:"rgba(255,255,255,.12)", color:"rgba(255,255,255,.7)", fontSize:12, fontWeight:600, backdropFilter:"blur(4px)" }}>{l}</span>
                    ))}
                  </div>
                </div>

                <span style={{ position:"absolute", top:20, right:20, background:"rgba(255,255,255,.12)", color:"#fff", fontSize:12, fontWeight:600, padding:"6px 16px", borderRadius:980, backdropFilter:"blur(8px)", border:"1px solid rgba(255,255,255,.1)" }}>
                  Studio Créatif
                </span>
              </div>

              {/* Content */}
              <div style={{ padding:"clamp(20px,4vw,32px) clamp(16px,4vw,32px) clamp(24px,4vw,36px)" }}>
                <p style={{ fontSize:16, lineHeight:1.8, color:t.txS }}>
                  {D.projects[1].description}
                </p>
                <div style={{ display:"flex", flexWrap:"wrap", gap:6, marginTop:20 }}>
                  {D.projects[1].tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
                </div>
                <button onClick={() => goPage("annakaleb")} className="detail-btn" style={{ marginTop:20, background:"linear-gradient(135deg, #ff2d87, #c850c0)", color:"#fff", border:"none", padding:"12px 24px", fontSize:14 }}>
                  Découvrir le projet →
                </button>
              </div>
            </div>
          </A>

          {/* CANAL+ — Featured Project */}
          <A delay={0.2}>
            <div style={{
              marginTop:28, borderRadius:28, overflow:"hidden",
              border:`1px solid ${t.bd}`, background:t.bgC,
              boxShadow:t.sh, transition:"all .4s",
            }}>
              {/* Canal+ Hero Banner — Cinema dark red */}
              <div style={{
                position:"relative", height:"clamp(220px,40vw,340px)", overflow:"hidden",
                background:"linear-gradient(135deg, #0a0a0a 0%, #1a0000 30%, #2d0a0a 60%, #0a0a0a 100%)",
              }}>
                <div style={{ position:"absolute",inset:0,overflow:"hidden",pointerEvents:"none" }}>
                  {/* Red grid overlay — Canal+ style */}
                  <div style={{ position:"absolute", inset:0, opacity:.08, backgroundImage:"linear-gradient(rgba(200,0,0,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(200,0,0,.5) 1px, transparent 1px)", backgroundSize:"50px 50px" }}/>

                  {/* Cinema seat rows — abstract */}
                  {[0,1,2].map(row => (
                    <div key={row} style={{ position:"absolute", bottom: 30 + row * 28, left:0, right:0, display:"flex", justifyContent:"center", gap:4, opacity: .06 + row * .03 }}>
                      {Array.from({length: 14 - row * 2}).map((_,i) => (
                        <div key={i} style={{ width: 20, height: 16, borderRadius:"4px 4px 0 0", background:"#c80000" }}/>
                      ))}
                    </div>
                  ))}

                  {/* Glowing orbs */}
                  <div style={{ position:"absolute", top:"20%", right:"15%", width:120, height:120, borderRadius:"50%", background:"#c80000", filter:"blur(60px)", opacity:.15, animation:"orb1 10s ease-in-out infinite" }}/>
                  <div style={{ position:"absolute", bottom:"30%", left:"10%", width:80, height:80, borderRadius:"50%", background:"#ff3333", filter:"blur(50px)", opacity:.1, animation:"orb2 8s ease-in-out infinite" }}/>

                  {/* Robot eye — abstract */}
                  <div style={{ position:"absolute", right:"10%", top:"35%", animation:"float 6s ease-in-out infinite" }}>
                    <div style={{ width:90, height:90, borderRadius:"50%", background:"rgba(255,255,255,.04)", border:"2px solid rgba(255,255,255,.08)", display:"flex", alignItems:"center", justifyContent:"center" }}>
                      <div style={{ width:50, height:50, borderRadius:"50%", background:"rgba(200,0,0,.15)", border:"2px solid rgba(200,0,0,.25)", display:"flex", alignItems:"center", justifyContent:"center" }}>
                        <div style={{ width:20, height:20, borderRadius:"50%", background:"rgba(200,0,0,.4)", boxShadow:"0 0 20px rgba(200,0,0,.3)" }}/>
                      </div>
                    </div>
                  </div>

                  {/* Floating UI cards */}
                  <div style={{ position:"absolute", left:"55%", top:"15%", width:70, height:45, borderRadius:8, border:"1px solid rgba(255,255,255,.08)", background:"rgba(255,255,255,.03)", animation:"float 8s ease-in-out infinite 1s" }}>
                    <div style={{ margin:6, display:"flex", gap:3 }}>
                      <div style={{ width:8, height:8, borderRadius:"50%", background:"rgba(200,0,0,.3)" }}/>
                      <div style={{ flex:1, height:3, borderRadius:2, background:"rgba(255,255,255,.1)", marginTop:2.5 }}/>
                    </div>
                    <div style={{ margin:"0 6px", height:3, borderRadius:2, background:"rgba(255,255,255,.06)", width:"60%" }}/>
                  </div>
                </div>

                {/* Title */}
                <div style={{ position:"absolute", left:"6%", top:"50%", transform:"translateY(-50%)", zIndex:2 }}>
                  <span style={{ fontSize:13, fontWeight:600, color:"rgba(255,255,255,.5)", letterSpacing:".15em", textTransform:"uppercase", display:"block", marginBottom:12 }}>Product & Vibecoding</span>
                  <h2 style={{
                    fontFamily:"'Satoshi',sans-serif", fontSize:"clamp(36px,6vw,60px)", fontWeight:900,
                    color:"#fff", lineHeight:.95, letterSpacing:"-.03em",
                  }}>
                    Canal+
                  </h2>
                  <p style={{ fontSize:"clamp(16px,3vw,22px)", fontWeight:700, color:"rgba(200,0,0,.8)", marginTop:4, fontFamily:"'Satoshi',sans-serif" }}>
                    Reimagined
                  </p>
                  <div style={{ display:"flex", gap:8, marginTop:16 }}>
                    {["Club+","RO_BO+","IA"].map(l => (
                      <span key={l} style={{ padding:"5px 14px", borderRadius:980, background:"rgba(200,0,0,.15)", color:"rgba(255,100,100,.8)", fontSize:12, fontWeight:600, border:"1px solid rgba(200,0,0,.2)" }}>{l}</span>
                    ))}
                  </div>
                </div>

                <span style={{ position:"absolute", top:20, right:20, background:"rgba(255,255,255,.08)", color:"rgba(255,255,255,.6)", fontSize:12, fontWeight:600, padding:"6px 16px", borderRadius:980, border:"1px solid rgba(255,255,255,.08)" }}>
                  Candidature créative
                </span>
              </div>

              {/* Content */}
              <div style={{ padding:"clamp(20px,4vw,32px) clamp(16px,4vw,32px) clamp(24px,4vw,36px)" }}>
                <p style={{ fontSize:16, lineHeight:1.8, color:t.txS }}>
                  {D.projects[2].description}
                </p>

                {/* Two features */}
                <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(220px, 1fr))", gap:12, marginTop:20 }}>
                  <div style={{ padding:18, borderRadius:14, background:isDark?"rgba(200,0,0,.06)":"rgba(200,0,0,.04)", border:`1px solid ${isDark?"rgba(200,0,0,.12)":"rgba(200,0,0,.08)"}` }}>
                    <span style={{ fontSize:18, marginRight:8 }}>💬</span>
                    <span style={{ fontSize:14, fontWeight:700, color:t.tx }}>Le Club+ revisité</span>
                    <p style={{ fontSize:12, color:t.txS, marginTop:6, lineHeight:1.6 }}>Espace commentaire sous chaque film, réponses des stars, commentaires vocaux retranscrits, ajout d'amis et partage de recommandations.</p>
                  </div>
                  <div style={{ padding:18, borderRadius:14, background:isDark?"rgba(200,0,0,.06)":"rgba(200,0,0,.04)", border:`1px solid ${isDark?"rgba(200,0,0,.12)":"rgba(200,0,0,.08)"}` }}>
                    <span style={{ fontSize:18, marginRight:8 }}>🤖</span>
                    <span style={{ fontSize:14, fontWeight:700, color:t.tx }}>Le RO_BO+</span>
                    <p style={{ fontSize:12, color:t.txS, marginTop:6, lineHeight:1.6 }}>Une IA qui analyse les commentaires pour comprendre ce que l'on a réellement aimé, au-delà du simple pouce levé, et fait des recommandations en conséquence.</p>
                  </div>
                </div>

                <div style={{ display:"flex", flexWrap:"wrap", gap:6, marginTop:20 }}>
                  {D.projects[2].tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
                </div>
                <a href="http://canalbynaelsidali.online" target="_blank" rel="noopener noreferrer" className="detail-btn" style={{ marginTop:20, background:"linear-gradient(135deg, #c80000, #ff3333)", color:"#fff", border:"none", padding:"12px 24px", fontSize:14, textDecoration:"none", display:"inline-flex" }}>
                  Voir le site →
                </a>
              </div>
            </div>
          </A>
        </section>

        {/* VOLUNTEERING */}
        <section id="volunteering" style={{ padding:"80px 24px",background:t.bgS,transition:"background .5s" }}>
          <div style={{ maxWidth:900,margin:"0 auto" }}>
            <A><p className="sl">Bénévolat</p><h2 className="st">Engagement citoyen<span style={{color:t.ac}}>.</span></h2></A>
            <div style={{ marginTop:32,display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(320px,1fr))",gap:16 }}>
              {D.volunteering.map((v,i)=>(
                <A key={v.id} delay={i*.1}>
                  <div className="card" style={{ padding:28 }}>
                    <div style={{ display:"flex",alignItems:"center",gap:14,marginBottom:14 }}>
                      <div style={{ width:48,height:48,borderRadius:14,background:g(i+3),display:"flex",alignItems:"center",justifyContent:"center",fontSize:22,flexShrink:0 }}>{v.icon}</div>
                      <div>
                        <h3 style={{ fontFamily:"'Satoshi',sans-serif",fontSize:17,fontWeight:700,color:t.tx,lineHeight:1.3 }}>{v.title}</h3>
                        <p style={{ fontSize:14,fontWeight:600,color:t.ac,marginTop:2 }}>{v.org}</p>
                      </div>
                    </div>
                    <div style={{ display:"flex",gap:10,flexWrap:"wrap" }}>
                      <span style={{ fontSize:12,color:t.txM,fontWeight:500,background:isDark?"rgba(255,255,255,.05)":"rgba(0,0,0,.04)",padding:"5px 12px",borderRadius:980 }}>{v.period}</span>
                      <span style={{ fontSize:12,color:t.txM,fontWeight:500,background:isDark?"rgba(255,255,255,.05)":"rgba(0,0,0,.04)",padding:"5px 12px",borderRadius:980 }}>{v.duration}</span>
                      <span className="tag">{v.category}</span>
                    </div>
                  </div>
                </A>
              ))}
            </div>
          </div>
        </section>

        {/* TRAVELS */}
        <section id="travels" style={{ padding:"120px 24px",transition:"background .5s" }}>
          <div style={{ maxWidth:1100,margin:"0 auto" }}>
            <A><p className="sl">Voyages</p><h2 className="st">Solo Backpacking<span style={{color:t.ac}}>.</span></h2></A>
            <A delay={0.08}>
              <p style={{ fontSize:16, lineHeight:1.8, color:t.txS, maxWidth:700, marginBottom:12 }}>
                En 2022, j'enchaînais les missions d'intérim pendant que tous mes amis partaient en vacances. Je me suis promis que l'année suivante, ce serait à mon tour. J'ai économisé pendant un an et, après ma L2, je suis parti seul en Australie avec un Working Holiday Visa — quatre mois à travailler et visiter le pays.
              </p>
              <p style={{ fontSize:16, lineHeight:1.8, color:t.txS, maxWidth:700, marginBottom:40 }}>
                Depuis, le solo backpacking ne m'a plus quitté. Je finance entièrement ces voyages moi-même, sans livret A ni aide extérieure. Chaque destination m'a appris l'autonomie, l'adaptabilité et la débrouillardise.
              </p>
            </A>

            {/* Interactive Map */}
            <A delay={0.15}>
              <div style={{ position:"relative", borderRadius:24, overflow:"hidden", background:isDark?"#060918":"#f0f4f8", border:`1px solid ${t.bd}`, padding:"clamp(16px,3vw,40px)" }}>
                <style>{`
                  @keyframes dashFlow{from{stroke-dashoffset:20}to{stroke-dashoffset:0}}
                  @keyframes glow{0%,100%{opacity:.6;r:3}50%{opacity:1;r:4.5}}
                  @keyframes pingDot{0%{r:3;opacity:.8}100%{r:12;opacity:0}}
                  .map-line{stroke-dasharray:6 4;animation:dashFlow 1.5s linear infinite}
                  .map-dot{animation:glow 3s ease-in-out infinite}
                  .map-ping{animation:pingDot 2s ease-out infinite}
                  .map-dot-g:hover .map-label{opacity:1;transform:translateY(-4px)}
                  .map-label{opacity:0;transition:all .3s;pointer-events:none;transform:translateY(0)}
                `}</style>

                {(() => {
                  // Map projection: simple mercator centered on Asia-Pacific
                  // Longitude range: 60E to 165E → map to 0-900
                  // Latitude range: 40N to 45S → map to 0-550
                  const W = 900, H = 550;
                  const proj = (lat, lon) => {
                    const x = ((lon - 60) / 105) * W;
                    const y = ((40 - lat) / 85) * H;
                    return [Math.max(0, Math.min(W, x)), Math.max(0, Math.min(H, y))];
                  };

                  const countries = [
                    { name: "Australie", color: "#06b6d4", cities: [
                      { n: "Melbourne", lat: -37.81, lon: 144.96 }, { n: "Canberra", lat: -35.28, lon: 149.13 },
                      { n: "Sydney", lat: -33.87, lon: 151.21 }, { n: "Byron Bay", lat: -28.64, lon: 153.62 },
                      { n: "Gold Coast", lat: -28.02, lon: 153.43 }, { n: "Brisbane", lat: -27.47, lon: 153.03 },
                      { n: "Fraser Island", lat: -25.24, lon: 153.13 }, { n: "Whitsundays", lat: -20.28, lon: 148.95 },
                      { n: "Cairns", lat: -16.92, lon: 145.77 },
                    ]},
                    { name: "Indonésie", color: "#f59e0b", cities: [
                      { n: "Lombok", lat: -8.65, lon: 116.35 }, { n: "Nias", lat: 1.1, lon: 97.55 },
                    ]},
                    { name: "Inde", color: "#ef4444", cities: [
                      { n: "Delhi", lat: 28.61, lon: 77.21 }, { n: "Varanasi", lat: 25.32, lon: 83.0 },
                      { n: "Jaipur", lat: 26.91, lon: 75.79 }, { n: "Agra", lat: 27.18, lon: 78.02 },
                      { n: "Jaisalmer", lat: 26.92, lon: 70.91 }, { n: "Goa", lat: 15.5, lon: 73.83 },
                      { n: "Varkala", lat: 8.74, lon: 76.72 }, { n: "Udaipur", lat: 24.58, lon: 73.68 },
                      { n: "Jodhpur", lat: 26.24, lon: 73.02 }, { n: "Ladakh", lat: 34.15, lon: 77.58 },
                      { n: "Kashmir", lat: 34.08, lon: 74.8 }, { n: "Mumbai", lat: 19.08, lon: 72.88 },
                    ]},
                    { name: "Thaïlande", color: "#a855f7", cities: [
                      { n: "Koh Tao", lat: 10.1, lon: 99.84 }, { n: "Koh Phangan", lat: 9.73, lon: 100.0 },
                      { n: "Bangkok", lat: 13.76, lon: 100.5 }, { n: "Koh Samui", lat: 9.51, lon: 100.07 },
                    ]},
                    { name: "Singapour", color: "#10b981", cities: [
                      { n: "Singapour", lat: 1.35, lon: 103.82 },
                    ]},
                  ];

                  const upcoming = [
                    { n: "Vietnam", lat: 16.05, lon: 108.22 }, { n: "Laos", lat: 19.86, lon: 102.5 },
                    { n: "Sri Lanka", lat: 7.87, lon: 80.77 }, { n: "Philippines", lat: 12.88, lon: 121.77 },
                  ];

                  // Generate connection lines within each country
                  const lines = [];
                  countries.forEach(c => {
                    for (let i = 0; i < c.cities.length - 1; i++) {
                      const [x1, y1] = proj(c.cities[i].lat, c.cities[i].lon);
                      const [x2, y2] = proj(c.cities[i + 1].lat, c.cities[i + 1].lon);
                      lines.push({ x1, y1, x2, y2, color: c.color });
                    }
                  });

                  // Cross-country connections
                  const crossLinks = [
                    { from: { lat: -16.92, lon: 145.77 }, to: { lat: -8.65, lon: 116.35 }, color: "#f59e0b" }, // Cairns → Lombok
                    { from: { lat: 1.1, lon: 97.55 }, to: { lat: 1.35, lon: 103.82 }, color: "#10b981" }, // Nias → Singapore
                    { from: { lat: 1.35, lon: 103.82 }, to: { lat: 13.76, lon: 100.5 }, color: "#a855f7" }, // Singapore → Bangkok
                    { from: { lat: 13.76, lon: 100.5 }, to: { lat: 28.61, lon: 77.21 }, color: "#ef4444" }, // Bangkok → Delhi
                  ];
                  crossLinks.forEach(l => {
                    const [x1, y1] = proj(l.from.lat, l.from.lon);
                    const [x2, y2] = proj(l.to.lat, l.to.lon);
                    lines.push({ x1, y1, x2, y2, color: l.color, cross: true });
                  });

                  return (
                    <svg viewBox={`0 0 ${W} ${H}`} style={{ width: "100%", height: "auto", display: "block" }}>
                      {/* Ambient glow background */}
                      <defs>
                        {countries.map(c => (
                          <radialGradient key={c.name + "g"} id={`glow-${c.name}`} cx="50%" cy="50%" r="50%">
                            <stop offset="0%" stopColor={c.color} stopOpacity=".15"/>
                            <stop offset="100%" stopColor={c.color} stopOpacity="0"/>
                          </radialGradient>
                        ))}
                        <filter id="blur-glow"><feGaussianBlur stdDeviation="8"/></filter>
                      </defs>

                      {/* Simplified landmass outlines */}
                      {(() => {
                        const landColor = isDark ? "rgba(255,255,255,.06)" : "rgba(0,0,0,.05)";
                        const borderColor = isDark ? "rgba(255,255,255,.1)" : "rgba(0,0,0,.08)";
                        // Simplified country outlines using projection
                        // Each shape is an array of [lat, lon] points
                        const shapes = {
                          india: [
                            [35.5,74],[35,77],[32,77],[30,80],[28.5,84],[27,88],[26,89],[22,89],
                            [21.5,87],[18,84],[15,80],[11,80],[8,77],[8,76],[10,76],[13,74],
                            [15,73],[17,73],[20,72],[22,69],[24,68.5],[25,70],[27,70],[30,72],
                            [32,74],[35.5,74]
                          ],
                          sriLanka: [
                            [10,80],[9.8,81],[8,82],[6,81],[6,80],[7.5,80],[10,80]
                          ],
                          thailand: [
                            [20.5,100],[19,101],[17.5,103],[15,105],[14,102],[13,101],[12,102],
                            [10,99],[7,100.5],[6,101],[7,99],[9,98.5],[10,98.5],[11,99],
                            [13,99],[14,99],[15,98.5],[16,98],[17,97.5],[18,97.5],[19,98],[20,99.5],[20.5,100]
                          ],
                          vietnam: [
                            [23,104],[22,106],[21,107.5],[19,106],[18,106.5],[16,108],
                            [14,109],[12,109],[10.5,107],[9,106],[8.5,105],[9,104],
                            [10,106],[11,108],[13,109],[16,108],[18,106.5],[20,106],
                            [21,105],[23,104]
                          ],
                          laos: [
                            [22,101],[21,102],[20,104],[19,104],[18,103],[17,105],[16,106],
                            [15,106],[14,105],[15,105.5],[17,104],[18,102],[19,101],[20,100],
                            [21,101],[22,101]
                          ],
                          indonesia: [
                            // Sumatra
                            [5.5,95],[4,97],[2,99],[0,101],[-1,102],[-3,104],[-5.5,105],
                            [-6,104],[-4,102],[-2,100],[0,99],[2,97],[4,96],[5.5,95]
                          ],
                          java: [
                            [-6,105.5],[-6.5,107],[-7,109],[-7.5,111],[-8,112],[-8.5,114],
                            [-8.3,115],[-8,114],[-7.5,112],[-7,110],[-6.5,108],[-6,105.5]
                          ],
                          borneo: [
                            [7,117],[6,118],[4,118],[2,117],[1,110],[0,109],
                            [1,108],[2,110],[4,115],[5,116],[7,117]
                          ],
                          sulawesi: [
                            [-1,120],[0,121],[1,122],[0,123],[-1,122],[-2,121],
                            [-3,121],[-5,122],[-5.5,120],[-4,121],[-2,120],[-1,120]
                          ],
                          papuaNG: [
                            [-2,141],[-4,143],[-6,147],[-8,148],[-9,148],[-8,146],
                            [-6,144],[-5,142],[-3,141],[-2,141]
                          ],
                          lombok: [
                            [-8.2,115.8],[-8.5,116.5],[-8.8,116.8],[-8.6,115.8],[-8.2,115.8]
                          ],
                          malaysia: [
                            [6.5,100],[5,103],[2,104],[1,104],[1.5,103],[2,102],
                            [4,103],[5.5,100],[6.5,100]
                          ],
                          philippines: [
                            [18,121],[17,122],[15,121],[14,123],[13,124],[11,124],
                            [10,123],[9,126],[7,126],[6,125],[7,123],[9,124],
                            [10,122],[12,121],[14,120],[16,120],[18,121]
                          ],
                          australia: [
                            [-12,130],[-12,136],[-14,136],[-17,140],[-16,146],[-19,147],
                            [-21,149],[-23,151],[-25,153],[-28,153.5],[-30,153],[-33,152],
                            [-35,151],[-37,150],[-39,147],[-39,144],[-38,141],[-35,137],
                            [-34,135],[-32,133],[-32,131],[-31,128],[-32,125],[-34,121],
                            [-35,117],[-34,115],[-31,115],[-28,114],[-25,113],[-22,114],
                            [-20,119],[-18,122],[-15,125],[-14,127],[-13,129],[-12,130]
                          ],
                          tasmania: [
                            [-41,145],[-42,146],[-43,148],[-43.5,147],[-42.5,145],[-41,145]
                          ],
                          singapore: [
                            [1.2,103.6],[1.4,104],[1.3,104.1],[1.15,103.9],[1.2,103.6]
                          ],
                          myanmar: [
                            [28,97],[26,98],[25,97],[22,97],[20,93],[18,95],[16,97],
                            [15,98],[14,98],[10,98.5],[11,98],[14,97],[16,96],[18,94],
                            [20,92],[22,93],[25,95],[27,96],[28,97]
                          ],
                          china_south: [
                            [40,74],[40,80],[38,87],[37,96],[35,98],[30,97],[28,99],
                            [25,101],[22,100],[21,101],[22,107],[21,110],[20,110],
                            [22,113],[23,117],[25,119],[27,121],[30,122],[32,122],
                            [35,120],[37,118],[39,118],[41,120],[42,124],[43,130],
                            [42,131],[40,125],[39,117],[37,116],[34,119],[30,121],
                            [27,120],[25,118],[23,116],[22,112],[21,109],[20,107],
                            [22,103],[23,101],[25,99],[28,97],[32,96],[36,95],
                            [38,90],[40,82],[40,74]
                          ],
                        };

                        return Object.entries(shapes).map(([name, pts]) => {
                          const projected = pts.map(([lat, lon]) => proj(lat, lon));
                          const d = projected.map((p, i) => `${i === 0 ? 'M' : 'L'}${p[0].toFixed(1)},${p[1].toFixed(1)}`).join(' ') + ' Z';
                          return <path key={name} d={d} fill={landColor} stroke={borderColor} strokeWidth={0.5}/>;
                        });
                      })()}

                      {/* Ocean grid lines for depth */}
                      {Array.from({length:10}).map((_,i) => (
                        <line key={`gx${i}`} x1={i*100} y1={0} x2={i*100} y2={550}
                          stroke={isDark?"rgba(255,255,255,.02)":"rgba(0,0,0,.02)"} strokeWidth={0.5}/>
                      ))}
                      {Array.from({length:6}).map((_,i) => (
                        <line key={`gy${i}`} x1={0} y1={i*100} x2={900} y2={i*100}
                          stroke={isDark?"rgba(255,255,255,.02)":"rgba(0,0,0,.02)"} strokeWidth={0.5}/>
                      ))}

                      {/* Country area glows */}
                      {countries.map(c => {
                        const pts = c.cities.map(ci => proj(ci.lat, ci.lon));
                        const cx = pts.reduce((s, p) => s + p[0], 0) / pts.length;
                        const cy = pts.reduce((s, p) => s + p[1], 0) / pts.length;
                        const r = Math.max(40, Math.max(...pts.map(p => Math.sqrt((p[0]-cx)**2 + (p[1]-cy)**2))) + 30);
                        return <circle key={c.name + "bg"} cx={cx} cy={cy} r={r} fill={`url(#glow-${c.name})`}/>;
                      })}

                      {/* Connection lines */}
                      {lines.map((l, i) => (
                        <line key={`l${i}`} x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2}
                          stroke={l.color} strokeWidth={l.cross ? 1 : 1.5} opacity={l.cross ? .25 : .35}
                          className="map-line" style={{ animationDelay: `${i * .15}s` }}/>
                      ))}

                      {/* City dots */}
                      {countries.map(c => c.cities.map((ci, j) => {
                        const [cx, cy] = proj(ci.lat, ci.lon);
                        return (
                          <g key={ci.n} className="map-dot-g" style={{ cursor: "default" }}>
                            <circle cx={cx} cy={cy} r={8} fill={c.color} opacity={.08} className="map-ping" style={{ animationDelay: `${j * .3}s` }}/>
                            <circle cx={cx} cy={cy} r={3} fill={c.color} className="map-dot" style={{ animationDelay: `${j * .2}s` }}/>
                            <circle cx={cx} cy={cy} r={1.2} fill="#fff" opacity={.9}/>
                            {/* Label */}
                            <g className="map-label">
                              <rect x={cx - ci.n.length * 3.2} y={cy - 20} width={ci.n.length * 6.4 + 8} height={16} rx={4}
                                fill={isDark ? "rgba(0,0,0,.8)" : "rgba(255,255,255,.95)"} stroke={c.color} strokeWidth={.5}/>
                              <text x={cx + 4} y={cy - 9} textAnchor="middle" fill={c.color}
                                style={{ fontSize: 7.5, fontWeight: 600, fontFamily: "'General Sans',sans-serif" }}>{ci.n}</text>
                            </g>
                          </g>
                        );
                      }))}

                      {/* Upcoming — dashed circles */}
                      {upcoming.map(u => {
                        const [cx, cy] = proj(u.lat, u.lon);
                        return (
                          <g key={u.n}>
                            <circle cx={cx} cy={cy} r={4} fill="none" stroke={isDark ? "rgba(255,255,255,.2)" : "rgba(0,0,0,.15)"} strokeWidth={1} strokeDasharray="2 2"/>
                            <circle cx={cx} cy={cy} r={1.5} fill={isDark ? "rgba(255,255,255,.15)" : "rgba(0,0,0,.1)"}/>
                            <text x={cx} y={cy - 10} textAnchor="middle" fill={isDark ? "rgba(255,255,255,.25)" : "rgba(0,0,0,.2)"}
                              style={{ fontSize: 7, fontWeight: 500, fontFamily: "'General Sans',sans-serif", fontStyle: "italic" }}>{u.n}</text>
                          </g>
                        );
                      })}
                    </svg>
                  );
                })()}

                {/* Legend */}
                <div style={{ display:"flex", flexWrap:"wrap", gap:14, marginTop:20, justifyContent:"center" }}>
                  {[
                    { n: "Australie", c: "#06b6d4", count: 9 }, { n: "Inde", c: "#ef4444", count: 12 },
                    { n: "Thaïlande", c: "#a855f7", count: 4 }, { n: "Indonésie", c: "#f59e0b", count: 2 },
                    { n: "Singapour", c: "#10b981", count: 1 },
                  ].map(l => (
                    <div key={l.n} style={{ display:"flex", alignItems:"center", gap:6 }}>
                      <div style={{ width:8, height:8, borderRadius:"50%", background:l.c, boxShadow:`0 0 8px ${l.c}66` }}/>
                      <span style={{ fontSize:12, fontWeight:600, color:t.txS }}>{l.n}</span>
                      <span style={{ fontSize:11, color:t.txM }}>({l.count})</span>
                    </div>
                  ))}
                  <div style={{ display:"flex", alignItems:"center", gap:6 }}>
                    <div style={{ width:8, height:8, borderRadius:"50%", border:`1.5px dashed ${t.txM}` }}/>
                    <span style={{ fontSize:12, fontWeight:500, color:t.txM, fontStyle:"italic" }}>À venir</span>
                  </div>
                </div>

                {/* Stats */}
                <div style={{ display:"flex", justifyContent:"center", gap:"clamp(24px,5vw,60px)", marginTop:28, flexWrap:"wrap" }}>
                  {[
                    { n: "5", l: "Pays" }, { n: "28+", l: "Villes" }, { n: "4", l: "Prochains pays" },
                  ].map((s, i) => (
                    <div key={i} style={{ textAlign:"center" }}>
                      <div style={{ fontFamily:"'Satoshi',sans-serif", fontSize:32, fontWeight:900, color:t.ac }}>{s.n}</div>
                      <div style={{ fontSize:12, color:t.txM }}>{s.l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </A>
          </div>
        </section>

        {/* GALLERY */}
        <section id="gallery" style={{ padding:"120px 24px",background:t.bgS,transition:"background .5s" }}>
          <div style={{ maxWidth:1200,margin:"0 auto" }}>
            <A><p className="sl">Galerie</p><h2 className="st">En images<span style={{color:t.ac}}>.</span></h2></A>
            <div className="ph-g" style={{ display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:14,marginTop:40 }}>
              {D.photos.map((p,i)=>(<A key={p.id} delay={i*.06}><div className="photo-item" style={{ overflow:"hidden",position:"relative" }}><img src={p.src} alt={p.alt} style={{ width:"100%",height:"100%",objectFit:"cover",display:"block" }} /></div></A>))}
            </div>
          </div>
        </section>

        {/* INTERESTS */}
        <section style={{ padding:"80px 24px" }}>
          <div style={{ maxWidth:900,margin:"0 auto" }}>
            <A><p className="sl">Centres d'intérêt</p><h2 className="st">En dehors du travail<span style={{color:t.ac}}>.</span></h2></A>
            <div style={{ display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))",gap:16,marginTop:32 }}>
              {[
                { icon:"🏊", title:"Natation", color:"#06b6d4" },
                { icon:"🏄", title:"Surf", color:"#0ea5e9" },
                { icon:"🎬", title:"Cinéma", color:"#ef4444" },
                { icon:"📷", title:"Photographie", color:"#a855f7" },
              ].map((item,i)=>(
                <A key={i} delay={i*.08}>
                  <div style={{ display:"flex",alignItems:"center",gap:16,padding:22,borderRadius:18,background:t.bgS,border:`1px solid ${t.bd}`,transition:"all .3s" }}
                    onMouseEnter={e=>{e.currentTarget.style.borderColor=item.color+"44";e.currentTarget.style.transform="translateY(-2px)"}}
                    onMouseLeave={e=>{e.currentTarget.style.borderColor=t.bd;e.currentTarget.style.transform="translateY(0)"}}>
                    <div style={{ width:46,height:46,borderRadius:14,background:item.color+"15",display:"flex",alignItems:"center",justifyContent:"center",fontSize:22,flexShrink:0 }}>{item.icon}</div>
                    <span style={{ fontFamily:"'Satoshi',sans-serif",fontSize:16,fontWeight:700,color:t.tx }}>{item.title}</span>
                  </div>
                </A>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" style={{ padding:"120px 24px",textAlign:"center" }}>
          <div style={{ maxWidth:660,margin:"0 auto" }}>
            <A><p className="sl">Contact</p><h2 className="st" style={{ margin:"0 auto 20px" }}>Échangeons<span style={{color:t.ac}}>.</span></h2><p style={{ fontSize:18,lineHeight:1.7,color:t.txS,maxWidth:620,margin:"0 auto 44px" }}>Vous avez un projet, une opportunité d'alternance ou envie d'échanger ? N'hésitez pas.</p></A>
            <A delay={.12}><div style={{ display:"flex",gap:14,justifyContent:"center",flexWrap:"wrap" }}>
              <a href={`mailto:${D.email}`} className="btn-p" style={{ fontSize:16,padding:"16px 32px" }}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>Email</a>
              <a href={D.linkedin} target="_blank" rel="noopener noreferrer" className="btn-s" style={{ fontSize:16,padding:"16px 32px" }}><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>LinkedIn</a>
              <a href="https://wa.me/33652067301" target="_blank" rel="noopener noreferrer" className="btn-s" style={{ fontSize:16,padding:"16px 32px" }}>📱 WhatsApp</a>
            </div></A>
          </div>
        </section>

        <footer style={{ padding:"36px 24px",borderTop:`1px solid ${t.bd}`,textAlign:"center" }}><p style={{ fontSize:13,color:t.txM }}>© {new Date().getFullYear()} {D.name}</p></footer>
      </div>
    </>
  );
}