import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import DirectoryPage from './components/DirectoryPage';
import ToolDetailPage from './components/ToolDetailPage';
import SubmitToolPage from './components/SubmitToolPage';
import PrivacyPage from './components/PrivacyPage';
import TermsPage from './components/TermsPage';
import ScrollToTop from './components/ScrollToTop';

// Page Types
type Page = 'directory' | 'tool-detail' | 'submit' | 'privacy' | 'terms';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('directory');
  const [selectedTool, setSelectedTool] = useState<any>(null);

  // Navigation Handlers
  const navigateToTool = (tool: any) => {
    setSelectedTool(tool);
    setCurrentPage('tool-detail');
    window.scrollTo(0, 0);
  };

  const navigateTo = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-blue-600/30">
      <ScrollToTop />
      
      {/* Navigation Header */}
      <Header onLogoClick={() => navigateTo('directory')} />

      {/* Main Content Area */}
      <main className="pt-24 pb-20 px-4 max-w-7xl mx-auto">
        {currentPage === 'directory' && (
          <DirectoryPage onToolClick={navigateToTool} />
        )}

        {currentPage === 'tool-detail' && selectedTool && (
          <ToolDetailPage 
            tool={selectedTool} 
            onBack={() => navigateTo('directory')} 
          />
        )}

        {currentPage === 'submit' && (
          <SubmitToolPage onBack={() => navigateTo('directory')} />
        )}

        {currentPage === 'privacy' && (
          <PrivacyPage onBack={() => navigateTo('directory')} />
        )}

        {currentPage === 'terms' && (
          <TermsPage onBack={() => navigateTo('directory')} />
        )}
      </main>

      {/* Shared Footer */}
      <Footer 
        onPrivacyClick={() => navigateTo('privacy')}
        onTermsClick={() => navigateTo('terms')}
        onSubmitClick={() => navigateTo('submit')}
      />
    </div>
  );
}

export default App;
            
