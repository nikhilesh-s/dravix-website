import { useState, useEffect } from 'react';
import { Menu, X, ExternalLink } from 'lucide-react';
import chemistryIcon from './assets/chemistry-svgrepo-com.svg';
import DravixPage from './components/pages/DravixPage';
import DemoPage from './components/pages/DemoPage';
import SystemPage from './components/pages/SystemPage';
import ValidationPage from './components/pages/ValidationPage';
import ImpactPage from './components/pages/ImpactPage';
import BrandPage from './components/pages/BrandPage';
import RoadmapPage from './components/pages/RoadmapPage';
import TeamPage from './components/pages/TeamPage';

type Page = 'dravix' | 'demo' | 'system' | 'validation' | 'impact' | 'brand' | 'roadmap' | 'team';

const navItems: { id: Page; label: string }[] = [
  { id: 'dravix', label: 'Dravix' },
  { id: 'demo', label: 'Demo' },
  { id: 'system', label: 'System' },
  { id: 'validation', label: 'Validation' },
  { id: 'impact', label: 'Impact & Market' },
  { id: 'brand', label: 'Brand' },
  { id: 'roadmap', label: 'Roadmap' },
  { id: 'team', label: 'Team' },
];

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('dravix');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigate = (page: Page) => {
    setCurrentPage(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'dravix': return <DravixPage onNavigate={navigate} />;
      case 'demo': return <DemoPage />;
      case 'system': return <SystemPage />;
      case 'validation': return <ValidationPage />;
      case 'impact': return <ImpactPage />;
      case 'brand': return <BrandPage />;
      case 'roadmap': return <RoadmapPage />;
      case 'team': return <TeamPage />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100' : 'bg-white border-b border-gray-100'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="hidden lg:flex items-center justify-between h-16">
            <button
              onClick={() => navigate('dravix')}
              className="flex items-center gap-2.5 hover:opacity-80 transition-opacity flex-shrink-0"
            >
              <div className="w-8 h-8 bg-white border border-gray-200 rounded-lg flex items-center justify-center shadow-sm">
                <img src={chemistryIcon} alt="Dravix" className="w-4.5 h-4.5" />
              </div>
              <span className="text-base font-light text-[#762123] tracking-wide">Dravix</span>
            </button>

            <nav className="flex items-center gap-0.5">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => navigate(item.id)}
                  className={`px-3.5 py-2 rounded-lg text-sm transition-colors whitespace-nowrap ${
                    currentPage === item.id
                      ? 'text-[#762123] font-medium'
                      : 'text-gray-500 hover:text-[#762123] hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                  {currentPage === item.id && (
                    <span className="block h-0.5 bg-[#762123] rounded-full mt-0.5 -mb-0.5" />
                  )}
                </button>
              ))}
            </nav>

            <a
              href="https://dravix-engine.materiamse.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2 bg-[#762123] text-white text-sm rounded-full hover:bg-[#9E2A2A] transition-colors flex-shrink-0"
            >
              Try Demo
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="lg:hidden flex items-center justify-between h-14">
            <button
              onClick={() => navigate('dravix')}
              className="flex items-center gap-2.5 hover:opacity-80 transition-opacity"
            >
              <div className="w-8 h-8 bg-white border border-gray-200 rounded-lg flex items-center justify-center shadow-sm">
                <img src={chemistryIcon} alt="Dravix" className="w-4 h-4" />
              </div>
              <span className="text-base font-light text-[#762123] tracking-wide">Dravix</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-10 h-10 flex items-center justify-center text-[#762123] hover:bg-gray-50 rounded-lg transition-colors"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => navigate(item.id)}
                className={`w-full text-left px-4 py-3 rounded-xl text-sm transition-colors ${
                  currentPage === item.id
                    ? 'text-[#762123] bg-[#762123]/8 font-medium'
                    : 'text-gray-500 hover:text-[#762123] hover:bg-gray-50'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-3 border-t border-gray-100">
              <a
                href="https://dravix-engine.materiamse.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full px-5 py-3 bg-[#762123] text-white text-sm rounded-full hover:bg-[#9E2A2A] transition-colors"
              >
                Try Demo
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        )}
      </header>

      <main className="pt-16">
        {renderPage()}
      </main>

      <footer className="bg-[#F8F8F8] border-t border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-white border border-gray-200 rounded-xl flex items-center justify-center shadow-sm">
                <img src={chemistryIcon} alt="Dravix" className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[#762123] font-light text-base">Dravix</div>
                <div className="text-[#762123]/50 text-xs">Materials fire-risk screening</div>
              </div>
            </div>
            <div className="flex flex-wrap gap-4 text-sm text-gray-400">
              {navItems.map((item) => (
                <button key={item.id} onClick={() => navigate(item.id)} className="hover:text-[#762123] transition-colors">
                  {item.label}
                </button>
              ))}
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <p className="text-xs text-gray-400">
              Product and Website designed by Nikhilesh Suravarjjala and Team.
            </p>
            <a
              href="https://dravix-engine.materiamse.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs text-[#762123] hover:text-[#9E2A2A] transition-colors"
            >
              Try Demo <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
