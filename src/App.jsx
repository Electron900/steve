import React, { useState } from 'react';
import { themes } from './data/themes';
import Header from './components/Header';
import Carousel from './components/Carousel';
import HomePage from './components/HomePage';
import BiographyPage from './components/BiographyPage';
import ResearchPapersPage from './components/ResearchPapersPage';
import Footer from './components/Footer';

function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [theme, setTheme] = useState('dark');
  const [searchQuery, setSearchQuery] = useState('');

  const currentTheme = themes[theme];

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className={`min-h-screen ${currentTheme.bg} ${currentTheme.text} transition-all duration-500`}>
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        theme={theme}
        toggleTheme={toggleTheme}
        currentTheme={currentTheme}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      <Carousel currentTheme={currentTheme} />

      <main className="mx-auto max-w-7xl px-6 py-8">
        {activeTab === 'home' && <HomePage currentTheme={currentTheme} searchQuery={searchQuery} />}
        {activeTab === 'biographie' && <BiographyPage currentTheme={currentTheme} searchQuery={searchQuery} />}
        {activeTab === 'research-papers' && <ResearchPapersPage currentTheme={currentTheme} searchQuery={searchQuery} />}
      </main>

      <Footer currentTheme={currentTheme} />
    </div>
  );
}

export default App;
