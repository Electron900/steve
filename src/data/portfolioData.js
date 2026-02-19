// Données du portfolio
export const portfolioData = {
  profile: {
    name: "Dr. Thierry PONDIE",
    title: "Chercheuse en science economique",
    tagline: "Exploratrice des frontières de l'IA et des sciences cognitives",
    avatar: "👩‍🔬",
    email: "marie.dupont@recherche.fr",
    location: "paris, France",
    
    socialLinks: [
      { platform: "LinkedIn", url: "https://linkedin.com/in/mariedupont", handle: "@mariedupont" },
      // { platform: "GitHub", url: "https://github.com/mariedupont", handle: "@mariedupont" },
      // { platform: "Twitter", url: "https://twitter.com/mariedupont", handle: "@marie_dupont_ai" },
      // { platform: "Website", url: "https://mariedupont.fr", handle: "mariedupont.fr" },
    ],

    introText: "Bienvenue sur mon portfolio académique ! Je suis passionnée par l'intelligence artificielle et son impact sur la société.",

    homeImages: [
      { url: "🎤", caption: "Conférence NeurIPS 2025", description: "Présentation de recherches" },
      { url: "🔬", caption: "Laboratoire CNRS", description: "Travail quotidien" },
      { url: "🏆", caption: "Prix d'Excellence", description: "Récompense en IA" },
      { url: "👥", caption: "Équipe de Recherche", description: "Collaboration" },
      { url: "💻", caption: "Hackathon IA", description: "Mentorat" },
    ]
  },

  biography: {
    paragraphs: [
      "Je suis Dr. Marie Dupont, chercheuse en Intelligence Artificielle au CNRS depuis 2020.",
      "Mon parcours a débuté à l'École Polytechnique en 2015.",
      "J'ai réalisé un post-doctorat au MIT à Boston.",
      "Je dirige une équipe de recherche dynamique au CNRS.",
      "J'ai publié plus de 45 articles scientifiques.",
    ],

    biographyImages: [
      { url: "🎓", caption: "Thèse - 2019", description: "Doctorat en IA" },
      { url: "🇺🇸", caption: "MIT - 2020", description: "Post-Doc" },
      { url: "🇫🇷", caption: "CNRS - 2020", description: "Recherche" },
    ]
  },

  researchPapers: [
    {
      id: 1,
      title: "Deep Learning for NLP",
      authors: "Dupont, M., Bernard, P.",
      journal: "Journal of AI Research",
      year: 2025,
      date: "15 January 2026",
      doi: "10.1613/jair.1.13456",
      abstract: "Novel deep learning architectures for NLP. Results show 40% increase in accuracy.",
      keywords: ["Deep Learning", "NLP"],
      link: "https://example.com/paper1",
      citations: 23,
      venue: "JAIR"
    },
    {
      id: 2,
      title: "Ethical AI Framework",
      authors: "Dupont, M., Silva, R.",
      journal: "Ethics in Technology",
      year: 2025,
      date: "10 January 2026",
      doi: "10.1080/etq.2025.456789",
      abstract: "Framework for identifying and mitigating biases in AI systems.",
      keywords: ["AI Ethics", "Fairness"],
      link: "https://example.com/paper2",
      citations: 67,
      venue: "ETQ"
    },
  ],

  researchPapersImages: [
    { url: "📚", caption: "Publications", description: "45+ articles" },
    { url: "🎓", caption: "Conférences", description: "NeurIPS, ICML" },
  ]
};
