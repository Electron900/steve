import React, { useState, useEffect } from 'react';
import { MapPinIcon, MailIcon } from '../utils/icons';

// ─── Import images workshop depuis src/assets/ ────────────────────────────────
const w1Modules = import.meta.glob(
  '../assets/workshop1/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}',
  { eager: true }
);
const w2Modules = import.meta.glob(
  '../assets/workshop2/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}',
  { eager: true }
);

const buildImages = (modules) =>
  Object.entries(modules)
    .sort(([a], [b]) => a.localeCompare(b))
    .slice(0, 4)
    .map(([path, mod]) => ({
      src: mod.default ?? mod,
      alt: path.split('/').pop().replace(/^\d+-/, '').replace(/\.[^.]+$/, '').replace(/-/g, ' '),
    }));

const builtW1 = buildImages(w1Modules);
const builtW2 = buildImages(w2Modules);

const PLACEHOLDER_W1 = [
  { src: 'https://placehold.co/800x600/1e293b/94a3b8?text=Workshop+Photo+1', alt: 'Doctoral Research Workshop 2025' },
  { src: 'https://placehold.co/800x600/1e293b/94a3b8?text=Workshop+Photo+2', alt: 'Research Evaluation Session' },
  { src: 'https://placehold.co/800x600/1e293b/94a3b8?text=Workshop+Photo+3', alt: 'Panel Discussion' },
  { src: 'https://placehold.co/800x600/1e293b/94a3b8?text=Workshop+Photo+4', alt: 'Academic Exchange' },
];
const PLACEHOLDER_W2 = [
  { src: 'https://placehold.co/800x600/1e293b/94a3b8?text=Panel+Photo+1', alt: 'Energy Policy Panel 2025' },
  { src: 'https://placehold.co/800x600/1e293b/94a3b8?text=Panel+Photo+2', alt: 'Environmental Economics Discussion' },
  { src: 'https://placehold.co/800x600/1e293b/94a3b8?text=Panel+Photo+3', alt: 'Research Leadership' },
  { src: 'https://placehold.co/800x600/1e293b/94a3b8?text=Panel+Photo+4', alt: 'Policy Engagement' },
];

const WORKSHOP1_IMAGES = builtW1.length > 0 ? builtW1 : PLACEHOLDER_W1;
const WORKSHOP2_IMAGES = builtW2.length > 0 ? builtW2 : PLACEHOLDER_W2;

// ─── SOCIAL LINKS ─────────────────────────────────────────────────────────────
const SOCIAL_LINKS = [
  {
    label: 'Email',
    url: 'mailto:thierrypondie@gmail.com',
    color: 'hover:bg-red-500/20 hover:border-red-500/50',
    iconColor: '#EA4335',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7">
        <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 010 19.366V5.457c0-.27.069-.52.19-.74L12 13.33 23.81 4.717c.12.22.19.47.19.74zm-24 0c0-.904.732-1.636 1.636-1.636h20.728c.904 0 1.636.732 1.636 1.636L12 11.27 0 5.457z"/>
      </svg>
    ),
  },
  {
    label: 'WhatsApp',
    url: 'https://wa.me/qr/WP4V4GRGG4GJM1',
    color: 'hover:bg-green-500/20 hover:border-green-500/50',
    iconColor: '#25D366',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/thierry-pondie-ph-d-b537961a2',
    color: 'hover:bg-blue-600/20 hover:border-blue-600/50',
    iconColor: '#0A66C2',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    label: 'Google Scholar',
    url: 'https://scholar.google.fr/citations?hl=fr&user=TAwRJhwAAAAJ',
    color: 'hover:bg-blue-400/20 hover:border-blue-400/50',
    iconColor: '#4285F4',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7">
        <path d="M5.242 13.769L0 9.5 12 0l12 9.5-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5c-2.977 0-5.548 1.748-6.758 4.269zM12 10a7 7 0 100 14 7 7 0 000-14zm0 2a5 5 0 110 10A5 5 0 0112 12zm0 2a3 3 0 100 6 3 3 0 000-6z"/>
      </svg>
    ),
  },
];

// ─── CV DATA ─────────────────────────────────────────────────────────────────
const cv = {
  name: "Thierry MESSIE PONDIE, Ph.D.",
  title: "Energy, Environmental and Public Finance Economist",
  position: "Postdoctoral Researcher, University of Pretoria",
  avatar: "👨‍🎓",
  emails: ["thierrypondie@gmail.com"],
  phone: "(+237) 697 66 49 05 / 678 33 88 82",
  location: "Pretoria, South Africa",
  summary:
    "Energy and public finance economist specializing in the intersection of natural resource governance, fiscal policy, and sustainable development — with strong expertise in econometrics and applied policy research in Sub-Saharan Africa. Combines high-level academic publications, international institutional experience, policy-oriented macro-fiscal expertise, and energy & environmental economics specialization.",
  researchFields: [
    "Energy and Environmental Economics",
    "Public Finance and Fiscal Policy",
    "Political Economy of Natural Resources",
    "Extractive Industries Governance (EITI)",
    "Domestic Revenue Mobilization (DRM)",
    "Green Finance and Sustainable Industrialization",
    "Energy Poverty and Inequality",
    "Development Economics (Sub-Saharan Africa)",
  ],
  appointments: [
    {
      role: "Postdoctoral Researcher",
      institution: "University of Pretoria",
      period: "Current",
      details: "Research on energy transition, environmental sustainability, fiscal instruments, and inclusive development in Africa.",
    },
    {
      role: "Researcher",
      institution: "Centre for Economic and Management Studies and Research, Cameroon",
      period: "2025–",
      details: "Contribution to public ministry and World Bank reports (CEMAC zone). Macroeconomic and budgetary sector analysis. Advanced econometric modeling and policy evaluation.",
    },
    {
      role: "Teaching Assistant – Public Economics",
      institution: "University of Dschang",
      period: "2022–2023",
      details: "Courses: Macroeconomics, Microeconomics.",
    },
  ],
  education: [
    {
      degree: "Postdoctoral in Public Economics, Energy Economics",
      institution: "University of Pretoria, South Africa",
    },
    {
      degree: "Ph.D. in Energy and Environmental Economics",
      institution: "University of Dschang, Cameroon",
      thesis: "Testing the Effects of Energy Poverty on Well-Being in Sub-Saharan Africa",
    },
    {
      degree: "Master II in Macroeconomics",
      institution: "University of Yaoundé II-Soa, Cameroon",
    },
    {
      degree: "Bachelor's Degree in Macroeconomics",
      institution: "University of Yaoundé II-Soa, Cameroon",
    },
  ],
  affiliations: [
    "UNU-WIDER",
    "International Monetary Fund (FIP-2021 Program)",
    "Agence Française de Développement",
    "African Development Bank Group",
    "FERDI (Foundation for International Development Studies and Research)",
  ],
  policyThemes: [
    "Fiscal reforms and public finance efficiency",
    "Extractive industries governance",
    "Energy transition and climate finance",
    "Sustainable development policy in Africa",
  ],
  journals: [
    "World Development",
    "Resources Policy",
    "Energy Policy",
    "Energy Economics",
    "Journal of Cleaner Production",
    "Environmental Science and Pollution Research",
    "Natural Resources Forum",
    "African Development Review",
  ],
  pubThemes: [
    "Energy poverty and well-being",
    "Environmental taxation and decarbonization",
    "Natural resources and inclusive growth",
    "ESG performance and investment attractiveness",
    "Informal economy and trade",
    "Green finance and sustainable industrialization",
  ],
  methods: [
    "Advanced Econometrics (Panel Data, Dynamic Models, GMM)",
    "Impact Evaluation",
    "Macroeconomic Modeling",
    "Fiscal Policy Analysis",
    "Environmental Policy Assessment",
    "Large-Scale Household and Cross-Country Data Analysis",
  ],
  software: ["Stata", "EViews", "R", "Excel"],
  awards: [
    { title: "Winner — Pépinière Doctorale", body: "French Embassy in Cameroon (2023)" },
    { title: "Best Research Theme in Economics in Central Africa", body: "" },
    { title: "Best Research Project with Social and Scientific Impact (PRISS)", body: "" },
  ],
  languages: [
    { lang: "English", level: "Fluent" },
    { lang: "French", level: "Fluent" },
    { lang: "Spanish", level: "Intermediate" },
  ],
  workshop1: {
    title: "Doctoral Research Workshop — Rapporteur (2025)",
    icon: "🎓",
    paragraphs: [
      "In 2025, I had the honor of serving as a rapporteur at the Doctoral Research Workshop, a highly demanding academic experience that allowed me to fully mobilize my analytical, methodological, and critical skills. In this role, I evaluated research papers from diverse disciplinary backgrounds, with particular attention to scientific rigor, theoretical coherence, and empirical robustness. This responsibility required me to formulate constructive and strategic feedback aimed at enhancing the quality of the presented projects, thereby strengthening my ability to quickly identify the strengths, limitations, and future research perspectives of scholarly work.",
      "In addition, I actively participated in a high-level panel discussion dedicated to energy and environmental issues. During this session, I contributed to in-depth discussions on contemporary challenges related to the energy transition, sustainability, and public policy. This engagement provided an opportunity to showcase my expertise on the interconnections between economics, energy, and the environment, while demonstrating my ability to communicate complex analyses in a clear, structured, and persuasive manner to both academic and professional audiences.",
      "These experiences highlight my positioning as a committed researcher capable of combining scientific excellence, critical thinking, and collaborative engagement. They attest to my mastery of international research standards, my ease in intellectually demanding environments, and my constant commitment to advancing knowledge.",
    ],
  },
  workshop2: {
    title: "Research Leadership & Policy Engagement",
    icon: "🌍",
    paragraphs: [
      "In 2025, I served as Rapporteur at a Doctoral Research Workshop, a high-level academic platform bringing together emerging scholars from diverse disciplinary backgrounds. In this role, I conducted rigorous assessments of research projects, ensuring methodological soundness, theoretical coherence, and empirical credibility. My evaluations were designed not only to provide constructive feedback, but also to strategically strengthen the analytical positioning and policy relevance of the work presented.",
      "I also contributed to a high-level panel on energy and environmental policy, engaging in substantive discussions on energy transition, sustainability, and public finance implications. My intervention emphasized the economic dimensions of environmental policy design, the governance of natural resources, and the macro-fiscal challenges associated with climate and energy reforms.",
      "Collectively, these experiences reinforce my profile as a research-driven economist committed to analytical rigor, interdisciplinary collaboration, and policy impact. They reflect my ability to operate effectively in intellectually demanding environments and support evidence-based decision-making processes.",
    ],
  },
};

// ─── HELPERS ─────────────────────────────────────────────────────────────────
function Section({ title, icon, children, currentTheme }) {
  return (
    <div className={`rounded-2xl border ${currentTheme.border} ${currentTheme.cardBg} p-6 shadow-lg`}>
      <h3 className={`mb-4 flex items-center gap-2 text-xl font-bold ${currentTheme.text}`}>
        <span>{icon}</span>{title}
      </h3>
      {children}
    </div>
  );
}

function Badge({ label, currentTheme }) {
  return (
    <span className={`inline-block rounded-full border ${currentTheme.border} ${currentTheme.searchBg} px-3 py-1 text-sm font-medium ${currentTheme.text}`}>
      {label}
    </span>
  );
}

// ─── LIGHTBOX ─────────────────────────────────────────────────────────────────
function Lightbox({ img, onClose }) {
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 99999,
        backgroundColor: 'rgba(0,0,0,0.95)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '80px 20px 20px 20px', // padding-top pour passer sous la navbar
      }}
    >
      {/* Bouton fermer */}
      <button
        onClick={onClose}
        style={{
          position: 'absolute',
          top: '16px',
          right: '16px',
          width: '48px',
          height: '48px',
          borderRadius: '50%',
          background: 'rgba(255,255,255,0.12)',
          border: '1px solid rgba(255,255,255,0.2)',
          color: 'white',
          fontSize: '18px',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backdropFilter: 'blur(8px)',
          transition: 'background 0.2s',
        }}
      >
        ✕
      </button>

      {/* Image */}
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '16px',
          maxWidth: '88vw',
          maxHeight: 'calc(90vh - 80px)',
        }}
      >
        <img
          src={img.src}
          alt={img.alt}
          style={{
            maxWidth: '88vw',
            maxHeight: 'calc(85vh - 80px)',
            width: 'auto',
            height: 'auto',
            borderRadius: '12px',
            boxShadow: '0 32px 80px rgba(0,0,0,0.9)',
            display: 'block',
            objectFit: 'contain',
          }}
        />
        {img.alt && (
          <p style={{
            color: 'rgba(255,255,255,0.7)',
            fontSize: '13px',
            textAlign: 'center',
            letterSpacing: '0.03em',
          }}>
            📷 {img.alt}
          </p>
        )}
      </div>
    </div>
  );
}

// ─── IMAGE GRID avec lightbox ─────────────────────────────────────────────────
function ImageGrid({ images, currentTheme }) {
  const [selected, setSelected] = useState(null);

  if (!images || images.length === 0) return null;

  const gridClass =
    images.length === 1 ? 'grid-cols-1' : 'grid-cols-1 sm:grid-cols-2';

  return (
    <>
      <div className={`mt-8 grid gap-6 ${gridClass}`}>
        {images.map((img, i) => (
          <div
            key={i}
            onClick={() => setSelected(img)}
            style={{ cursor: 'pointer' }}
          >
            {/* Carte photo pro */}
            <div
              style={{
                position: 'relative',
                overflow: 'hidden',
                borderRadius: '16px',
                height: '280px',
                boxShadow: '0 4px 24px rgba(0,0,0,0.18)',
                transition: 'transform 0.25s ease, box-shadow 0.25s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.32)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 24px rgba(0,0,0,0.18)';
              }}
            >
              <img
                src={img.src}
                alt={img.alt}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'top',
                  display: 'block',
                  transition: 'transform 0.5s ease',
                }}
                onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.04)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
              />

              {/* Dégradé bas + légende toujours visible */}
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%)',
                padding: '32px 16px 14px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}>
                <span style={{ fontSize: '13px' }}>📷</span>
                <p style={{
                  color: 'rgba(255,255,255,0.92)',
                  fontSize: '13px',
                  fontWeight: 500,
                  textTransform: 'capitalize',
                  margin: 0,
                }}>
                  {img.alt}
                </p>
              </div>

              {/* Overlay click — icône loupe centrée */}
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'rgba(0,0,0,0)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'background 0.3s',
              }}
                onMouseEnter={e => e.currentTarget.style.background = 'rgba(0,0,0,0.28)'}
                onMouseLeave={e => e.currentTarget.style.background = 'rgba(0,0,0,0)'}
              >
                <div style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '50%',
                  background: 'rgba(255,255,255,0.15)',
                  backdropFilter: 'blur(8px)',
                  border: '1px solid rgba(255,255,255,0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '22px',
                  opacity: 0,
                  transition: 'opacity 0.3s',
                }}
                  onMouseEnter={e => e.currentTarget.style.opacity = '1'}
                  onMouseLeave={e => e.currentTarget.style.opacity = '0'}
                >
                  🔍
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selected && <Lightbox img={selected} onClose={() => setSelected(null)} />}
    </>
  );
}

// ─── WORKSHOP SECTION ─────────────────────────────────────────────────────────
function WorkshopSection({ data, images, currentTheme, hl }) {
  return (
    <Section title={data.title} icon={data.icon} currentTheme={currentTheme}>
      <div className="space-y-4">
        {data.paragraphs.map((p, i) => (
          <p key={i} className={`leading-relaxed text-justify ${currentTheme.textSecondary}`}>
            {hl(p)}
          </p>
        ))}
      </div>
      <ImageGrid images={images} currentTheme={currentTheme} />
    </Section>
  );
}

// ─── COMPOSANT PRINCIPAL ─────────────────────────────────────────────────────
function HomePage({ currentTheme, searchQuery }) {
  const hl = (text) => {
    if (!searchQuery || typeof text !== 'string') return text;
    const parts = text.split(new RegExp(`(${searchQuery})`, 'gi'));
    return parts.map((part, i) =>
      part.toLowerCase() === searchQuery.toLowerCase()
        ? <span key={i} className="bg-blue-500 text-white font-bold px-1 rounded">{part}</span>
        : part
    );
  };

  return (
    <div className="space-y-6 animate-fade-in">

      {/* ── HERO ── */}
      <div className={`rounded-3xl border ${currentTheme.border} ${currentTheme.cardBg} p-8 shadow-2xl text-center`}>
        <div className="mb-5 flex justify-center">
          <div className={`flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br ${currentTheme.gradient} text-5xl shadow-2xl`}>
            {cv.avatar}
          </div>
        </div>
        <h2 className={`mb-2 text-3xl font-black ${currentTheme.text}`}>{hl(cv.name)}</h2>
        <p className="mb-1 text-xl font-semibold text-purple-500">{cv.title}</p>
        <p className={`mb-4 text-base font-medium ${currentTheme.textSecondary}`}>{cv.position}</p>
        <div className={`mb-5 flex flex-wrap justify-center gap-4 text-sm ${currentTheme.textSecondary}`}>
          <span className="flex items-center gap-1"><MapPinIcon className="h-4 w-4" /> {cv.location}</span>
          {cv.emails.map((e, i) => (
            <a key={i} href={`mailto:${e}`} className="flex items-center gap-1 hover:text-blue-400 transition-colors">
              <MailIcon className="h-4 w-4" /> {e}
            </a>
          ))}
          <span>📞 {cv.phone}</span>
        </div>
        <p className={`mx-auto max-w-3xl text-base leading-relaxed ${currentTheme.textSecondary}`}>
          {hl(cv.summary)}
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          {SOCIAL_LINKS.map((s, i) => (
            <a
              key={i}
              href={s.url}
              target={s.url.startsWith('mailto') ? '_self' : '_blank'}
              rel="noopener noreferrer"
              title={s.label}
              className={`group flex flex-col items-center gap-1.5 rounded-2xl border ${currentTheme.border} ${currentTheme.searchBg} px-5 py-4 transition-all duration-200 hover:scale-105 hover:shadow-lg ${s.color}`}
              style={{ color: s.iconColor }}
            >
              {s.icon}
              <span className={`text-xs font-semibold ${currentTheme.textSecondary} group-hover:text-current transition-colors`}>
                {s.label}
              </span>
            </a>
          ))}
        </div>
      </div>

      {/* ── RESEARCH FIELDS ── */}
      <Section title="Research Fields" icon="🔬" currentTheme={currentTheme}>
        <div className="flex flex-wrap gap-2">
          {cv.researchFields.map((f, i) => <Badge key={i} label={f} currentTheme={currentTheme} />)}
        </div>
      </Section>

      {/* ── APPOINTMENTS ── */}
      <Section title="Academic Appointments" icon="🏛️" currentTheme={currentTheme}>
        <div className="space-y-4">
          {cv.appointments.map((a, i) => (
            <div key={i} className={`rounded-xl border ${currentTheme.border} ${currentTheme.searchBg} p-4`}>
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div>
                  <p className={`font-bold ${currentTheme.text}`}>{a.role}</p>
                  <p className="text-sm font-medium text-purple-500">{a.institution}</p>
                </div>
                {a.period && (
                  <span className="rounded-full bg-blue-500/20 px-3 py-1 text-xs font-semibold text-blue-400">{a.period}</span>
                )}
              </div>
              <p className={`mt-2 text-sm ${currentTheme.textSecondary}`}>{a.details}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── EDUCATION ── */}
      <Section title="Education" icon="🎓" currentTheme={currentTheme}>
        <div className="space-y-3">
          {cv.education.map((e, i) => (
            <div key={i} className={`rounded-xl border ${currentTheme.border} ${currentTheme.searchBg} p-4`}>
              <p className={`font-bold ${currentTheme.text}`}>{e.degree}</p>
              <p className="text-sm font-medium text-purple-500">{e.institution}</p>
              {e.thesis && <p className={`mt-1 text-sm italic ${currentTheme.textSecondary}`}>Dissertation: {e.thesis}</p>}
            </div>
          ))}
        </div>
      </Section>

      {/* ── AFFILIATIONS + POLICY ── */}
      <div className="grid gap-6 md:grid-cols-2">
        <Section title="Research Affiliations" icon="🤝" currentTheme={currentTheme}>
          <ul className="space-y-2">
            {cv.affiliations.map((a, i) => (
              <li key={i} className={`flex items-start gap-2 text-sm ${currentTheme.textSecondary}`}>
                <span className="mt-0.5 text-blue-400">▸</span> {a}
              </li>
            ))}
          </ul>
        </Section>
        <Section title="Policy Contributions" icon="📋" currentTheme={currentTheme}>
          <ul className="space-y-2">
            {cv.policyThemes.map((t, i) => (
              <li key={i} className={`flex items-start gap-2 text-sm ${currentTheme.textSecondary}`}>
                <span className="mt-0.5 text-purple-400">▸</span> {t}
              </li>
            ))}
          </ul>
        </Section>
      </div>

      {/* ── PUBLICATIONS ── */}
      <Section title="Selected Peer-Reviewed Publications" icon="📚" currentTheme={currentTheme}>
        <p className={`mb-4 text-sm ${currentTheme.textSecondary}`}>Published in leading international journals.</p>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <p className={`mb-2 text-sm font-semibold ${currentTheme.text}`}>Journals</p>
            <ul className="space-y-1">
              {cv.journals.map((j, i) => (
                <li key={i} className={`flex items-start gap-2 text-sm ${currentTheme.textSecondary}`}>
                  <span className="text-green-400">▸</span> {j}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className={`mb-2 text-sm font-semibold ${currentTheme.text}`}>Research Themes</p>
            <ul className="space-y-1">
              {cv.pubThemes.map((t, i) => (
                <li key={i} className={`flex items-start gap-2 text-sm ${currentTheme.textSecondary}`}>
                  <span className="text-green-400">▸</span> {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* ── METHODS + AWARDS + LANGUAGES ── */}
      <div className="grid gap-6 md:grid-cols-2">
        <Section title="Research Methods" icon="📊" currentTheme={currentTheme}>
          <div className="flex flex-wrap gap-2">
            {cv.methods.map((m, i) => <Badge key={i} label={m} currentTheme={currentTheme} />)}
          </div>
          <p className={`mt-3 text-sm ${currentTheme.textSecondary}`}>
            <span className="font-semibold">Software:</span> {cv.software.join(' · ')}
          </p>
        </Section>
        <div className="space-y-6">
          <Section title="Awards" icon="🏆" currentTheme={currentTheme}>
            <ul className="space-y-2">
              {cv.awards.map((a, i) => (
                <li key={i} className={`text-sm ${currentTheme.textSecondary}`}>
                  <span className={`font-semibold ${currentTheme.text}`}>{a.title}</span>
                  {a.body && <span className="ml-1">— {a.body}</span>}
                </li>
              ))}
            </ul>
          </Section>
          <Section title="Languages" icon="🌍" currentTheme={currentTheme}>
            <div className="flex flex-wrap gap-3">
              {cv.languages.map((l, i) => (
                <div key={i} className={`rounded-xl border ${currentTheme.border} ${currentTheme.searchBg} px-4 py-2 text-center`}>
                  <p className={`font-bold ${currentTheme.text}`}>{l.lang}</p>
                  <p className={`text-xs ${currentTheme.textSecondary}`}>{l.level}</p>
                </div>
              ))}
            </div>
          </Section>
        </div>
      </div>

      {/* ── WORKSHOP 1 ── */}
      <WorkshopSection data={cv.workshop1} images={WORKSHOP1_IMAGES} currentTheme={currentTheme} hl={hl} />

      {/* ── WORKSHOP 2 ── */}
      <WorkshopSection data={cv.workshop2} images={WORKSHOP2_IMAGES} currentTheme={currentTheme} hl={hl} />

    </div>
  );
}

export default HomePage;
