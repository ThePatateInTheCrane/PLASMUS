import React, { useEffect, useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Separator } from './ui/separator';
import { Copy, ExternalLink, Twitter } from 'lucide-react';
import { mockData } from '../mock';
import Spline from '@splinetool/react-spline';

const PlasmusLanding = () => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="plasmus-container">
      {/* Navigation Header */}
      <header className="dark-header">
        <div className="flex items-center gap-4">
          <img 
            src={mockData.images.plasmaLogo}
            alt="PLASMA Logo"
            className="h-12 w-auto object-contain"
          />
          <span className="ml-2 text-2xl font-bold text-white">$PLASMUS</span>
        </div>
        <nav className="dark-nav">
          <a href="#about" className="dark-nav-link">About</a>
        </nav>
      </header>

      {/* Hero Section with Split Layout */}
      <main className="hero-section">
        <div className="hero-content">
          <div className="hero-left">
            <div className="mb-6 px-4 py-2 text-sm font-medium inline-block rounded" style={{backgroundColor: 'rgba(22, 47, 41, 1)', color: 'white'}}>
              Official PLASMA Blockchain Mascot
            </div>
            
            <h1 className="display-huge text-black mb-6">
              {mockData.hero.title}
            </h1>
            
            <h2 className="display-medium text-black mb-8" style={{color: 'rgba(22, 47, 41, 1)'}}>
              {mockData.hero.subtitle}
            </h2>
            
            <p className="body-large text-black mb-12 max-w-2xl">
              {mockData.hero.description}
            </p>

            <div className="flex gap-6 mb-12">
              <Button 
                className="btn-primary"
                onClick={() => window.open(mockData.social.twitter, '_blank')}
              >
                <Twitter className="w-5 h-5" />
                Follow on Twitter
              </Button>
              
              <Button 
                variant="secondary"
                className="btn-secondary"
                onClick={() => copyToClipboard(mockData.contract.address)}
                className="text-black"
              >
                <Copy className="w-5 h-5" />
                {copied ? 'Copied!' : 'Copy Contract'}
              </Button>
            </div>
          </div>

          <div className="hero-right">
            <div className="spline-container">
              <Spline 
                scene="https://prod.spline.design/NbVmy6DPLhY-5Lvg/scene.splinecode"
                style={{ width: '100%', height: '100%' }}
              />
            </div>
          </div>
        </div>
      </main>

      {/* About Section */}
      <section id="about" className="section-padding">
        <div className="content-container">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="display-medium text-white mb-8">
                {mockData.about.title}
              </h3>
              <p className="body-medium text-white leading-relaxed">
                {mockData.about.description}
              </p>
            </div>
            
            <div className="flex justify-center">
              <img 
                src={mockData.images.plasmusMain}
                alt="Plasmus Character"
                className="w-80 h-auto object-contain filter drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sections supprimées - tokenomics et contract address */}

      {/* Footer */}
      <footer className="footer-section">
        <div className="content-container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-4">
              <img 
                src={mockData.images.plasmaLogo}
                alt="PLASMA Logo"
                className="h-10 w-auto object-contain"
              />
              <span className="text-white text-lg font-semibold">$PLASMUS</span>
            </div>
            
            <div className="flex gap-6">
              <Button
                variant="ghost"
                size="sm"
                className="text-white"
                style={{color: 'rgba(22, 47, 41, 1)'}}
                onMouseEnter={(e) => e.target.style.color = '#FFFFFF'}
                onMouseLeave={(e) => e.target.style.color = 'rgba(22, 47, 41, 1)'}
                onClick={() => window.open(mockData.social.twitter, '_blank')}
              >
                <Twitter className="w-5 h-5" />
              </Button>
            </div>
            
            <div className="text-white/70 text-sm">
              © 2025 $PLASMUS. Powered by PLASMA Blockchain.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PlasmusLanding;