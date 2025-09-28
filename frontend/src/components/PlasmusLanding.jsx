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
            src={mockData.images.plasmusMain}
            alt="Plasmus"
            className="h-12 w-auto object-contain"
          />
          <img 
            src={mockData.images.plasmaLogo}
            alt="PLASMA Logo"
            className="h-10 w-auto object-contain"
          />
          <span className="ml-2 text-2xl font-bold text-white">PLASMUS</span>
        </div>
        <nav className="dark-nav">
          <a href="#about" className="dark-nav-link">About</a>
          <a href="#tokenomics" className="dark-nav-link">Token</a>
          <a href="#contract" className="dark-nav-link">Contract</a>
        </nav>
      </header>

      {/* Hero Section with Split Layout */}
      <main className="hero-section">
        <div className="hero-content">
          <div className="hero-left">
            <Badge className="mb-6 bg-brand-primary text-black px-4 py-2 text-sm font-medium">
              Official PLASMA Blockchain Mascot
            </Badge>
            
            <h1 className="display-huge text-white mb-6">
              {mockData.hero.title}
            </h1>
            
            <h2 className="display-medium text-brand-primary mb-8">
              {mockData.hero.subtitle}
            </h2>
            
            <p className="body-large text-white/85 mb-12 max-w-2xl">
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
              <p className="body-medium text-white/85 leading-relaxed">
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

      <Separator className="border-white/10" />

      {/* Tokenomics Section */}
      <section id="tokenomics" className="section-padding">
        <div className="content-container text-center">
          <h3 className="display-medium text-white mb-16">Tokenomics</h3>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <Card className="bg-white/5 border-white/20 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="text-4xl font-bold text-brand-primary mb-4">
                  {mockData.tokenomics.totalSupply}
                </div>
                <div className="text-white/70">Total Supply</div>
              </CardContent>
            </Card>
            
            <Card className="bg-white/5 border-white/20 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="text-4xl font-bold text-brand-primary mb-4">
                  ${mockData.tokenomics.symbol}
                </div>
                <div className="text-white/70">Token Symbol</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Separator className="border-white/10" />

      {/* Contract Section */}
      <section id="contract" className="section-padding">
        <div className="content-container text-center">
          <h3 className="display-medium text-white mb-16">Contract Address</h3>
          
          <Card className="bg-white/5 border-white/20 backdrop-blur-sm max-w-4xl mx-auto">
            <CardContent className="p-8">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex-1 min-w-0">
                  <div className="text-sm text-white/70 mb-2">PLASMA Blockchain</div>
                  <code className="text-brand-primary text-lg font-mono break-all">
                    {mockData.contract.address}
                  </code>
                </div>
                
                <div className="flex gap-3">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-white hover:text-brand-primary"
                    onClick={() => copyToClipboard(mockData.contract.address)}
                  >
                    <Copy className="w-4 h-4" />
                  </Button>
                  
                  <Button
                    variant="ghost" 
                    size="sm"
                    className="text-white hover:text-brand-primary"
                    onClick={() => window.open('#', '_blank')}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer-section">
        <div className="content-container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-4">
              <img 
                src={mockData.images.plasmusMain}
                alt="Plasmus"
                className="h-10 w-auto object-contain"
              />
              <img 
                src={mockData.images.plasmaLogo}
                alt="PLASMA Logo"
                className="h-8 w-auto object-contain"
              />
              <span className="text-white text-lg font-semibold">PLASMUS</span>
            </div>
            
            <div className="flex gap-6">
              <Button
                variant="ghost"
                size="sm"
                className="text-white hover:text-brand-primary"
                onClick={() => window.open(mockData.social.twitter, '_blank')}
              >
                <Twitter className="w-5 h-5" />
              </Button>
            </div>
            
            <div className="text-white/50 text-sm">
              © 2025 PLASMUS. Powered by PLASMA Blockchain.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PlasmusLanding;