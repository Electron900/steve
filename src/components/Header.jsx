import React from 'react';
import logo from '../assets/logo.jpg';
import { HomeIcon, UserIcon, BookIcon, SunIcon, MoonIcon, SearchIcon, XIcon } from '../utils/icons';

const OWNER = {
  name: "Thierry MESSIE PONDIE, Ph.D.",
  title: "Public Economist · University of Pretoria",
};

function Header({ activeTab, setActiveTab, theme, toggleTheme, currentTheme, searchQuery, setSearchQuery }) {
  const tabs = [
    { id: 'home',            label: 'Home',      Icon: HomeIcon  },
    { id: 'biographie',     label: 'Biography', Icon: UserIcon  },
    { id: 'research-papers', label: 'Research',  Icon: BookIcon  },
  ];

  return (
    <header className={`sticky top-0 z-50 border-b ${currentTheme.border} ${currentTheme.headerBg} backdrop-blur-2xl`}>
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center justify-between py-4">

          {/* ── LOGO + NOM ── */}
          <div className="flex items-center space-x-3">
            <img
              src={logo}
              alt="Dr. Thierry Messie Pondie"
              className="h-12 w-12 rounded-2xl object-cover shadow-lg ring-2 ring-white/10"
            />
            <div>
              <h1 className={`text-lg font-black leading-tight ${currentTheme.text}`}>
                {OWNER.name}
              </h1>
              <p className={`text-xs ${currentTheme.textSecondary}`}>{OWNER.title}</p>
            </div>
          </div>

          {/* ── NAV DESKTOP ── */}
          <nav className="hidden md:flex items-center space-x-1">
            {tabs.map(({ id, label, Icon }) => (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                className={`flex items-center space-x-2 rounded-xl px-5 py-2.5 font-semibold transition-all ${
                  activeTab === id
                    ? `bg-gradient-to-r ${currentTheme.gradient} text-white shadow-lg`
                    : `${currentTheme.textSecondary} ${currentTheme.buttonHover}`
                }`}
              >
                <Icon className="h-4 w-4" />
                <span>{label}</span>
              </button>
            ))}
          </nav>

          {/* ── TOGGLE THÈME ── */}
          <button
            onClick={toggleTheme}
            className={`rounded-xl border ${currentTheme.border} ${currentTheme.searchBg} p-3 transition-all hover:scale-110`}
          >
            {theme === 'dark'
              ? <SunIcon  className="h-5 w-5 text-yellow-400" />
              : <MoonIcon className="h-5 w-5 text-blue-600"   />}
          </button>
        </div>

        {/* ── BARRE DE RECHERCHE ── */}
        <div className="relative pb-4">
          <SearchIcon className={`absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 ${currentTheme.textSecondary}`} />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search publications, topics, keywords…"
            className={`w-full rounded-xl border ${currentTheme.border} ${currentTheme.searchBg} py-3.5 pl-12 pr-12 ${currentTheme.text} placeholder-gray-500 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500/20`}
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className={`absolute right-4 top-1/2 -translate-y-1/2 ${currentTheme.textSecondary}`}
            >
              <XIcon className="h-5 w-5" />
            </button>
          )}
        </div>
      </div>

      {/* ── NAV MOBILE ── */}
      <div className={`border-t ${currentTheme.border} md:hidden`}>
        <div className="flex">
          {tabs.map(({ id, label, Icon }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id)}
              className={`flex flex-1 flex-col items-center space-y-1 py-3 transition-all ${
                activeTab === id ? 'bg-blue-500/10 text-blue-500' : currentTheme.textSecondary
              }`}
            >
              <Icon className="h-5 w-5" />
              <span className="text-xs font-medium">{label}</span>
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}

export default Header;
