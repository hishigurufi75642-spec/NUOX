
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import About from './pages/About';
import Materials from './pages/Materials';
import Contacts from './pages/Contacts';
import AIAssistant from './components/AIAssistant';

const App: React.FC = () => {
  const [currentPath, setCurrentPath] = useState('/');

  const navigate = (path: string) => {
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (currentPath) {
      case '/': return <Home onNavigate={navigate} />;
      case '/catalog': return <Catalog onNavigate={navigate} />;
      case '/about': return <About />;
      case '/materials': return <Materials />;
      case '/contacts': return <Contacts />;
      default: return <Home onNavigate={navigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar onNavigate={navigate} currentPath={currentPath} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer onNavigate={navigate} />
      <AIAssistant />
    </div>
  );
};

export default App;
