import React, { useState } from 'react';
import { SparklesIcon, MailIcon, MapPinIcon } from '../utils/icons';

// ─── DONNÉES BIOGRAPHIQUES ────────────────────────────────────────────────────
const BIO = {
  name: "Thierry Messie Pondie, Ph.D.",
  position: "Postdoctoral Fellow — Department of Economics, University of Pretoria, South Africa",
  email: "thierrypondie@gmail.com",
  location: "Pretoria, South Africa",

  paragraphs: [
    "Dr. Thierry Messie Pondie is a Public Economist specializing in environmental and energy economics, with extensive expertise in fiscal policy, sustainable development, and macro-financial analysis in developing economies. He is currently a Postdoctoral Fellow in the Department of Economics at the University of Pretoria, South Africa.",

    "Dr. Pondie's research focuses on the intersection of public finance, climate policy, and development economics, with particular emphasis on Sub-Saharan Africa. His work examines energy poverty, environmental taxation, green finance, ESG performance, fiscal decentralization, and the macroeconomic implications of political and climate-related uncertainty. He applies advanced econometric and panel data methodologies to evaluate the effectiveness of public policies aimed at promoting inclusive growth, decarbonization, and social welfare.",

    "His research has been published in leading international peer-reviewed journals, including the Journal of Environmental Management, Energy Economics, Energy Policy, Journal of Cleaner Production, Environmental Science and Pollution Research, Natural Resources Forum, and World Development Perspectives.",

    "Dr. Pondie's research contributions provide policy-relevant insights into the design of fiscal instruments, environmental taxation frameworks, and sustainable finance mechanisms to support climate resilience and economic transformation in low- and middle-income countries. His work bridges academic research and policy application, supporting evidence-based decision-making in the areas of energy transition, public sector efficiency, and sustainable industrialization.",
  ],

  stats: [
    { value: '12+', label: 'Publications' },
    { value: '8',   label: 'Journals' },
    { value: '1',   label: 'Ph.D' },
    { value: '5+',  label: 'Institutions' },
  ],
};

const SOCIAL_LINKS = [
  {
    label: 'Email',
    url: 'mailto:thierrypondie@gmail.com',
    color: '#EA4335',
    hoverBg: 'hover:bg-red-500/15',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
        <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 010 19.366V5.457c0-.27.069-.52.19-.74L12 13.33 23.81 4.717c.12.22.19.47.19.74zm-24 0c0-.904.732-1.636 1.636-1.636h20.728c.904 0 1.636.732 1.636 1.636L12 11.27 0 5.457z"/>
      </svg>
    ),
  },
  {
    label: 'WhatsApp',
    url: 'https://wa.me/qr/WP4V4GRGG4GJM1',
    color: '#25D366',
    hoverBg: 'hover:bg-green-500/15',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/thierry-pondie-ph-d-b537961a2',
    color: '#0A66C2',
    hoverBg: 'hover:bg-blue-600/15',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    label: 'Google Scholar',
    url: 'https://scholar.google.fr/citations?hl=fr&user=TAwRJhwAAAAJ',
    color: '#4285F4',
    hoverBg: 'hover:bg-blue-400/15',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
        <path d="M5.242 13.769L0 9.5 12 0l12 9.5-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5c-2.977 0-5.548 1.748-6.758 4.269zM12 10a7 7 0 100 14 7 7 0 000-14zm0 2a5 5 0 110 10A5 5 0 0112 12zm0 2a3 3 0 100 6 3 3 0 000-6z"/>
      </svg>
    ),
  },
];

// ─── COMPOSANT ────────────────────────────────────────────────────────────────
function BiographyPage({ currentTheme, searchQuery }) {
  const [hoveredParagraph, setHoveredParagraph] = useState(null);

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
    <div className="space-y-8 animate-fade-in">

      {/* ── HEADER ── */}
      <div className={`rounded-3xl border ${currentTheme.border} ${currentTheme.cardBg} p-8 shadow-2xl`}>

        {/* Avatar + nom */}
        <div className="mb-6 flex flex-col items-center text-center gap-3">
          <div className={`flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br ${currentTheme.gradient} text-4xl shadow-xl`}>
            👨‍🎓
          </div>
          <div>
            <h2 className={`text-3xl font-black ${currentTheme.text}`}>{BIO.name}</h2>
            <p className="mt-1 text-base font-medium text-purple-500">{BIO.position}</p>
          </div>

          {/* Contact */}
          <div className={`flex flex-wrap justify-center gap-4 text-sm ${currentTheme.textSecondary}`}>
            <a href={`mailto:${BIO.email}`} className="flex items-center gap-1.5 hover:text-blue-400 transition-colors">
              <MailIcon className="h-4 w-4" /> {BIO.email}
            </a>
            <span className="flex items-center gap-1.5">
              <MapPinIcon className="h-4 w-4" /> {BIO.location}
            </span>
          </div>
        </div>

        {/* Stats */}
        <div className="mb-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {BIO.stats.map((s, i) => (
            <div key={i} className={`rounded-2xl border ${currentTheme.border} ${currentTheme.searchBg} p-4 text-center`}>
              <p className={`text-2xl font-black ${currentTheme.text}`}>{s.value}</p>
              <p className={`text-xs font-medium ${currentTheme.textSecondary}`}>{s.label}</p>
            </div>
          ))}
        </div>

        {/* Réseaux sociaux */}
        <div className="flex flex-wrap justify-center gap-3">
          {SOCIAL_LINKS.map((s, i) => (
            <a
              key={i}
              href={s.url}
              target={s.url.startsWith('mailto') ? '_self' : '_blank'}
              rel="noopener noreferrer"
              title={s.label}
              className={`group flex items-center gap-2.5 rounded-2xl border ${currentTheme.border} ${currentTheme.searchBg} px-5 py-3 transition-all duration-200 hover:scale-105 hover:shadow-lg ${s.hoverBg}`}
              style={{ color: s.color }}
            >
              {s.icon}
              <span className={`text-sm font-semibold ${currentTheme.textSecondary} group-hover:text-current transition-colors`}>
                {s.label}
              </span>
            </a>
          ))}
        </div>
      </div>

      {/* ── BIOGRAPHIE ── */}
      <div className={`rounded-3xl border ${currentTheme.border} ${currentTheme.cardBg} p-8 shadow-2xl`}>
        <h3 className={`mb-6 text-2xl font-bold ${currentTheme.text} flex items-center gap-2`}>
          <SparklesIcon className="h-6 w-6 text-purple-500" />
          Academic Profile
        </h3>

        <div className="space-y-6">
          {BIO.paragraphs.map((paragraph, idx) => (
            <div
              key={idx}
              className="relative group"
              onMouseEnter={() => setHoveredParagraph(idx)}
              onMouseLeave={() => setHoveredParagraph(null)}
            >
              {/* Barre décorative gauche */}
              <div className={`absolute left-0 top-0 bottom-0 w-1 rounded-full transition-all duration-300 ${
                hoveredParagraph === idx
                  ? `bg-gradient-to-b ${currentTheme.gradient}`
                  : 'bg-transparent'
              }`} />

              <p className={`pl-5 leading-relaxed text-justify transition-all duration-300 ${
                hoveredParagraph === idx
                  ? `${currentTheme.text} ${currentTheme.searchBg} rounded-2xl py-4 pr-4`
                  : hoveredParagraph !== null
                  ? `${currentTheme.textSecondary} opacity-50`
                  : currentTheme.text
              }`}>
                {hl(paragraph)}
              </p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

export default BiographyPage;
