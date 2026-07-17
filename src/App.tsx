import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Toaster } from './components/ui/sonner';
import { MessageCircle } from 'lucide-react';
import { CONTACT_INFO } from './data';
import { LiveStockPage } from './pages/LiveStockPage';
import { HomePage } from './pages/HomePage';
import { PrivacyPage } from './pages/PrivacyPage';

function App() {
  return (
    <div className="relative min-h-screen bg-black selection:bg-primary selection:text-black antialiased">
      {/* Theme Override for Gold Accent - Ensures consistency across all shadcn components */}
      <style dangerouslySetInnerHTML={{ __html: `
        :root, .dark {
          --primary: oklch(0.75 0.15 85) !important;
          --ring: oklch(0.75 0.15 85) !important;
          --primary-foreground: oklch(0 0 0) !important;
          --primary-rgb: 212, 175, 55;
        }
      `}} />

      {/* Background Image Removed as per User Request ("Remove the first image completely") */}

      <Router>
        {/* Content Container */}
        <div className="relative z-10 flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/live-stock" element={<LiveStockPage />} />
              <Route path="/privacy" element={<PrivacyPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>

      {/* Floating WhatsApp Icon */}
      <a 
        href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(34,197,94,0.5)] hover:scale-110 transition-transform duration-300"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={28} className="text-white fill-white/20" />
      </a>

      <Toaster position="bottom-right" theme="dark" richColors />
    </div>
  );
}

export default App;