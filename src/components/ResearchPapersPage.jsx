import React, { useState, useMemo } from 'react';
import { ExternalLinkIcon } from '../utils/icons';

// ─── DONNÉES RÉELLES ─────────────────────────────────────────────────────────
const CATEGORIES = [
  { id: 'all', label: 'All' },
  { id: 'esg', label: 'ESG & Green Finance' },
  { id: 'tax', label: 'Environmental Taxation' },
  { id: 'energy', label: 'Energy Poverty' },
  { id: 'macro', label: 'Macroeconomics & Fiscal' },
];

const PAPERS = [
  // ── ESG & Green Finance ──────────────────────────────────────────────────
  {
    id: 1,
    category: 'esg',
    title: 'The weight of silent criteria: ESG score performance and investment attractiveness in Sub-Saharan Africa',
    authors: 'Pondie, T. M., Berriche, A., & Routis, D. L.',
    journal: 'Journal of Environmental Management',
    year: 2026,
    ref: 'Vol. 398, 128192',
    doi: 'https://doi.org/10.1016/j.jenvman.2025.128192',
    keywords: ['ESG', 'Green Finance', 'Sub-Saharan Africa', 'Investment'],
  },
  {
    id: 2,
    category: 'esg',
    title: 'New challenges for green finance and sustainable industrialization in developing countries: A panel data analysis',
    authors: 'Jawadi, F., Pondie, T. M., & Cheffou, A. I.',
    journal: 'Energy Economics',
    year: 2025,
    ref: 'Vol. 142, 108120',
    doi: 'https://doi.org/10.1016/j.eneco.2024.108120',
    keywords: ['Green Finance', 'Sustainable Industrialization', 'Panel Data'],
  },
  // ── Environmental Taxation ───────────────────────────────────────────────
  {
    id: 3,
    category: 'tax',
    title: 'Does environmental tax kill employment? Evidence from OECD and non-OECD countries',
    authors: 'Domguia, E. N., Pondie, T. M., Ngounou, B. A., & Nkengfack, H.',
    journal: 'Journal of Cleaner Production',
    year: 2022,
    ref: 'Vol. 380, 134873',
    doi: 'https://doi.org/10.1016/j.jclepro.2022.134873',
    keywords: ['Environmental Tax', 'Employment', 'OECD'],
  },
  {
    id: 4,
    category: 'tax',
    title: 'Environmental tax and energy poverty: an economic approach for an environmental and social solution',
    authors: 'Domguia, E. N., Ngounou, B. A., Pondie, T. M., & Bitoto, F. E.',
    journal: 'Energy',
    year: 2024,
    ref: 'Vol. 308, 132935',
    doi: 'https://doi.org/10.1016/j.energy.2024.132935',
    keywords: ['Environmental Tax', 'Energy Poverty', 'Social Policy'],
  },
  {
    id: 5,
    category: 'tax',
    title: 'Economic impact of the carbon tax: evaluation of the reduction in CO₂ emissions',
    authors: 'Noubissi, E. D., Nkengfack, H., Messie Pondie, T., & Ngounou, B. A.',
    journal: 'Natural Resources Forum',
    year: 2024,
    ref: 'Vol. 48(3), pp. 859–886',
    doi: 'https://doi.org/10.1111/1477-8947.12348',
    keywords: ['Carbon Tax', 'CO₂ Emissions', 'Decarbonization'],
  },
  {
    id: 6,
    category: 'tax',
    title: 'Do environmental taxes encourage the decarbonization of economies?',
    authors: 'Domguia, E. N., Nkengfack, H., Pondie, T. M., & Ngounou, B. A.',
    journal: 'Environment Development and Sustainability',
    year: 2024,
    ref: '',
    doi: 'https://doi.org/10.1007/s10668-024-05571-9',
    keywords: ['Environmental Taxes', 'Decarbonization', 'Sustainability'],
  },
  // ── Energy Poverty ───────────────────────────────────────────────────────
  {
    id: 7,
    category: 'energy',
    title: 'Transparency in energy-rich developing countries: A solution for energy poverty?',
    authors: 'Malah-Kuete, Y., & Messie-Pondie, T.',
    journal: 'Energy Policy',
    year: 2025,
    ref: 'Vol. 198, 114488',
    doi: 'https://doi.org/10.1016/j.enpol.2024.114488',
    keywords: ['Energy Poverty', 'Transparency', 'Natural Resources'],
  },
  {
    id: 8,
    category: 'energy',
    title: 'Energy poverty and respiratory health in Sub-Saharan Africa: Effects and transmission channels',
    authors: 'Pondie, T. M., Engwali, F. D., Nkoa, B. E. O., & Domguia, E. N.',
    journal: 'Energy',
    year: 2024,
    ref: 'Vol. 297, 131158',
    doi: 'https://doi.org/10.1016/j.energy.2024.131158',
    keywords: ['Energy Poverty', 'Health', 'Sub-Saharan Africa'],
  },
  {
    id: 9,
    category: 'energy',
    title: 'Does energy poverty increase starvation? Evidence from Sub-Saharan Africa',
    authors: 'Pondie, T. M., Engwali, F. D., Nkoa, B. E. O., & Domguia, E. N.',
    journal: 'Environmental Science and Pollution Research',
    year: 2023,
    ref: 'Vol. 30(17), pp. 48721–48738',
    doi: 'https://doi.org/10.1007/s11356-023-25997-4',
    keywords: ['Energy Poverty', 'Food Security', 'Africa'],
  },
  {
    id: 10,
    category: 'energy',
    title: 'Energy poverty in light of the climate emergency in Sub-Saharan Africa: Impact and transmission channels',
    authors: 'Messie Pondie, T., & Engwali, F. D.',
    journal: 'Natural Resources Forum',
    year: 2025,
    ref: 'Vol. 49(3), pp. 2505–2535',
    doi: 'https://doi.org/10.1111/1477-8947.12489',
    keywords: ['Energy Poverty', 'Climate Change', 'Sub-Saharan Africa'],
  },
  // ── Macroeconomics & Fiscal ──────────────────────────────────────────────
  {
    id: 11,
    category: 'macro',
    title: 'Does fiscal decentralisation hamper happiness? Evidence from African countries',
    authors: 'Ngounou, B. A., Djiogag, C. F., Domguia, E. N., Zanfack, L. T., & Pondie, T. M.',
    journal: 'World Development Perspectives',
    year: 2025,
    ref: 'Vol. 37, 100660',
    doi: 'https://doi.org/10.1016/j.wdp.2025.100660',
    keywords: ['Fiscal Decentralisation', 'Well-Being', 'Africa'],
  },
  {
    id: 12,
    category: 'macro',
    title: 'Political uncertainty and macro-financial dynamics in the BRICS',
    authors: 'Jawadi, F., & Pondie, T. M.',
    journal: 'International Economics',
    year: 2024,
    ref: 'Vol. 179, 100523',
    doi: 'https://doi.org/10.1016/j.inteco.2024.100523',
    keywords: ['Political Uncertainty', 'BRICS', 'Macro-Finance'],
  },
];

const RESEARCH_AREAS = [
  'Energy Poverty',
  'Environmental Taxation',
  'Green Finance',
  'ESG and Sustainable Investment',
  'Decarbonization Policies',
  'Fiscal Policy and Public Economics',
  'Macroeconomic and Financial Stability',
  'Sustainable Development in Africa',
];

const CATEGORY_COLORS = {
  esg:    { bg: 'bg-green-500/15',  text: 'text-green-400',  border: 'border-green-500/30'  },
  tax:    { bg: 'bg-orange-500/15', text: 'text-orange-400', border: 'border-orange-500/30' },
  energy: { bg: 'bg-blue-500/15',   text: 'text-blue-400',   border: 'border-blue-500/30'   },
  macro:  { bg: 'bg-purple-500/15', text: 'text-purple-400', border: 'border-purple-500/30' },
};

// ─── HELPERS ─────────────────────────────────────────────────────────────────
function hl(text, query) {
  if (!query || typeof text !== 'string') return text;
  const parts = text.split(new RegExp(`(${query})`, 'gi'));
  return parts.map((part, i) =>
    part.toLowerCase() === query.toLowerCase()
      ? <span key={i} className="bg-blue-500 text-white font-bold px-1 rounded">{part}</span>
      : part
  );
}

// ─── MAIN COMPONENT ──────────────────────────────────────────────────────────
function ResearchPapersPage({ currentTheme, searchQuery }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const filtered = useMemo(() => {
    let list = activeCategory === 'all' ? PAPERS : PAPERS.filter(p => p.category === activeCategory);
    if (searchQuery && searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter(p =>
        p.title.toLowerCase().includes(q) ||
        p.authors.toLowerCase().includes(q) ||
        p.journal.toLowerCase().includes(q) ||
        p.keywords.some(k => k.toLowerCase().includes(q))
      );
    }
    return list;
  }, [activeCategory, searchQuery]);

  return (
    <div className="space-y-8 animate-fade-in">

      {/* Header */}
      <div>
        <h2 className={`mb-1 text-4xl font-black ${currentTheme.text}`}>Research Publications</h2>
        <p className={currentTheme.textSecondary}>
          Peer-reviewed articles in international journals — {PAPERS.length} publications
        </p>
      </div>

      {/* Research Areas */}
      <div className={`rounded-2xl border ${currentTheme.border} ${currentTheme.cardBg} p-5`}>
        <h3 className={`mb-3 text-sm font-bold uppercase tracking-wider ${currentTheme.textSecondary}`}>
          Research Areas
        </h3>
        <div className="flex flex-wrap gap-2">
          {RESEARCH_AREAS.map((area, i) => (
            <span
              key={i}
              className={`rounded-full border ${currentTheme.border} ${currentTheme.searchBg} px-3 py-1 text-sm font-medium ${currentTheme.text}`}
            >
              {area}
            </span>
          ))}
        </div>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2">
        {CATEGORIES.map(cat => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`rounded-xl px-4 py-2 text-sm font-semibold transition-all ${
              activeCategory === cat.id
                ? 'bg-blue-500 text-white shadow-lg'
                : `${currentTheme.searchBg} ${currentTheme.text} border ${currentTheme.border} ${currentTheme.buttonHover}`
            }`}
          >
            {cat.label}
            <span className={`ml-2 text-xs opacity-70`}>
              ({cat.id === 'all' ? PAPERS.length : PAPERS.filter(p => p.category === cat.id).length})
            </span>
          </button>
        ))}
      </div>

      {/* Papers List */}
      {filtered.length === 0 ? (
        <div className={`rounded-2xl border ${currentTheme.border} ${currentTheme.cardBg} p-12 text-center`}>
          <p className={`text-lg ${currentTheme.textSecondary}`}>No publication matches your search.</p>
        </div>
      ) : (
        <div className="space-y-5">
          {filtered.map((paper) => {
            const colors = CATEGORY_COLORS[paper.category];
            return (
              <div
                key={paper.id}
                className={`rounded-2xl border ${currentTheme.border} ${currentTheme.cardBg} p-6 transition-all hover:shadow-xl hover:scale-[1.01]`}
              >
                {/* Top row: category badge + year */}
                <div className="mb-3 flex flex-wrap items-center gap-2">
                  <span className={`rounded-full border ${colors.border} ${colors.bg} px-3 py-0.5 text-xs font-bold ${colors.text}`}>
                    {CATEGORIES.find(c => c.id === paper.category)?.label}
                  </span>
                  <span className={`text-sm font-medium ${currentTheme.textSecondary}`}>{paper.year}</span>
                  {paper.ref && (
                    <span className={`text-sm ${currentTheme.textSecondary}`}>· {paper.ref}</span>
                  )}
                </div>

                {/* Title */}
                <h3 className={`mb-2 text-lg font-bold leading-snug ${currentTheme.text}`}>
                  {hl(paper.title, searchQuery)}
                </h3>

                {/* Authors */}
                <p className="mb-1 text-sm font-medium text-purple-400">
                  {hl(paper.authors, searchQuery)}
                </p>

                {/* Journal */}
                <p className={`mb-4 text-sm italic ${currentTheme.textSecondary}`}>
                  {hl(paper.journal, searchQuery)}
                </p>

                {/* Keywords */}
                <div className="mb-4 flex flex-wrap gap-2">
                  {paper.keywords.map((kw, i) => (
                    <span
                      key={i}
                      className={`rounded-lg border ${colors.border} ${colors.bg} px-2.5 py-1 text-xs font-medium ${colors.text}`}
                    >
                      {hl(kw, searchQuery)}
                    </span>
                  ))}
                </div>

                {/* DOI link */}
                <a
                  href={paper.doi}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 rounded-xl bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-400 transition-all hover:bg-blue-500/20`}
                >
                  <ExternalLinkIcon className="h-4 w-4" />
                  View Article
                </a>
              </div>
            );
          })}
        </div>
      )}

    </div>
  );
}

export default ResearchPapersPage;
