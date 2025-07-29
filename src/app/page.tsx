"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import BentoGridThirdDemo from "@/components/bento-grid-demo-3";
import { MultiStepLoader } from "@/components/ui/multi-step-loader";

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleDemoRequest = () => {
    setIsLoading(true);
    // Simuliere einen API-Call oder Demo-Anfrage
    setTimeout(() => {
      setIsLoading(false);
    }, 8000); // 8 Sekunden für alle Loading-States
  };

  const loadingStates = [
    {
      text: "Demo-Anfrage wird verarbeitet...",
    },
    {
      text: "Bahn-Daten werden analysiert...",
    },
    {
      text: "KI-Modelle werden geladen...",
    },
    {
      text: "Demo-Umgebung wird vorbereitet...",
    },
    {
      text: "Ihre Demo ist bereit!",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Multi Step Loader */}
      <MultiStepLoader 
        loadingStates={loadingStates} 
        loading={isLoading} 
        duration={1600}
        loop={false}
      />
      
      {/* Header */}
      <header className="bg-primary text-white relative">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <Image src="/logo.svg" alt="Logo" width={80} height={80} className="pr-4 md:pr-10" />
            </div>
            
            {/* Desktop Navigation - mittig zentriert */}
            <nav className="hidden md:flex space-x-8 absolute left-1/2 transform -translate-x-1/2">
              <a href="/" className="text-white font-medium relative group">
                Startseite
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[60%] h-0.5 bg-white"></span>
              </a>
              <a href="/unternehmen" className="text-white font-medium relative group">
                Unternehmen
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[60%] h-0.5 bg-white opacity-0 group-hover:opacity-100 transition-opacity"></span>
              </a>
              <a href="/ueber-uns" className="text-white font-medium relative group">
                Über uns
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[60%] h-0.5 bg-white opacity-0 group-hover:opacity-100 transition-opacity"></span>
              </a>
              <a href="/service" className="text-white font-medium relative group">
                Service
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[60%] h-0.5 bg-white opacity-0 group-hover:opacity-100 transition-opacity"></span>
              </a>
              <a href="/preise" className="text-white font-medium relative group">
                Preise
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[60%] h-0.5 bg-white opacity-0 group-hover:opacity-100 transition-opacity"></span>
              </a>
                                   <a href="/aktuelles" className="text-white font-medium relative group">
                       Aktuelles/News
                       <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[60%] h-0.5 bg-white opacity-0 group-hover:opacity-100 transition-opacity"></span>
                     </a>
            </nav>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-white p-2"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              <svg 
                className={`w-6 h-6 transition-transform duration-200 ${isMobileMenuOpen ? 'rotate-90' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`md:hidden absolute top-full left-0 right-0 bg-primary border-t border-white/20 transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'opacity-100 visible max-h-96' : 'opacity-0 invisible max-h-0'
        }`}>
          <nav className="container mx-auto px-4 py-4">
            <div className="flex flex-col space-y-4">
              <a 
                href="/" 
                className="text-white font-medium py-2 px-4 rounded-lg hover:bg-primary transition-colors"
                onClick={closeMobileMenu}
              >
                Startseite
              </a>
              <a 
                href="/unternehmen" 
                className="text-white font-medium py-2 px-4 rounded-lg hover:bg-primary transition-colors"
                onClick={closeMobileMenu}
              >
                Unternehmen
              </a>
              <a 
                href="/ueber-uns" 
                className="text-white font-medium py-2 px-4 rounded-lg hover:bg-primary transition-colors"
                onClick={closeMobileMenu}
              >
                Über uns
              </a>
              <a 
                href="/service" 
                className="text-white font-medium py-2 px-4 rounded-lg hover:bg-primary transition-colors"
                onClick={closeMobileMenu}
              >
                Service
              </a>
              <a 
                href="/preise" 
                className="text-white font-medium py-2 px-4 rounded-lg hover:bg-primary transition-colors"
                onClick={closeMobileMenu}
              >
                Preise
              </a>
                                   <a
                       href="/aktuelles"
                       className="text-white font-medium py-2 px-4 rounded-lg hover:bg-primary transition-colors"
                       onClick={closeMobileMenu}
                     >
                       Aktuelles/News
                     </a>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-white py-8 md:py-16 my-8 md:my-50">
        <div className="container mx-auto px-4 text-center">
          <Badge variant="destructive" className="mb-4 md:mb-6 px-6 md:px-10 py-2 rounded-full font-bold text-xs md:text-sm bg-primary">
            Verifiziert von über 100+ Unternehmen
          </Badge>
          
          <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold mb-6 md:mb-8 leading-tight px-4">
            <span className="text-primary">RailNetwork</span> ist das einzige Programm, <br className="hidden md:block" /> das Ihre Mitarbeiter benötigen!
          </h1>
          
        </div>
      </section>

      {/* Dashboard Mockup Section */}
      <section className="bg-gray-50 py-8 md:py-16">
        <div className="container mx-auto px-4 text-center mb-6 md:mb-10">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 px-4">
            Funktioniert auf jedem Gerät!
          </h2>
          <p className="text-base md:text-lg text-gray-600 px-4">
            Unser System funktioniert auf iOS, MacOS, Android und Windows!
          </p>
        </div>
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
          <div className="relative w-full h-auto">
                  <Image
                    src="/dashboard-mockup.png"
                    alt="RailNetwork Dashboard Mockup"
                    width={1200}
                    height={800}
                    className="w-full h-auto rounded-lg"
                    priority
                    draggable={false}
                  />
                </div>
          </div>
        </div>
      </section>

      {/* Features Section - Bento Grid */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <Badge variant="outline" className="mb-3 md:mb-4 px-4 py-2 text-primary border-primary rounded-full">
              FUNKTIONEN
            </Badge>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 px-4">
              Intelligente Bahn-Management
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              Erleben Sie die Zukunft des Bahnverkehrs mit unseren KI-gestützten Lösungen.
            </p>
          </div>
          
          <BentoGridThirdDemo />
        </div>
      </section>

      {/* Statistics Section */}
      <section className="bg-primary py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
            <div>
              <div className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-1 md:mb-2">500+</div>
              <p className="text-xs md:text-sm text-white/80">Aktive Unternehmen</p>
            </div>
            <div>
              <div className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-1 md:mb-2">10K+</div>
              <p className="text-xs md:text-sm text-white/80">Zufriedene Nutzer</p>
            </div>
            <div>
              <div className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-1 md:mb-2">99.9%</div>
              <p className="text-xs md:text-sm text-white/80">Uptime</p>
            </div>
            <div>
              <div className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-1 md:mb-2">24/7</div>
              <p className="text-xs md:text-sm text-white/80">Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-50 py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <Badge variant="outline" className="mb-3 md:mb-4 px-4 py-2 text-primary border-primary rounded-full">
              KUNDENSTIMMEN
            </Badge>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 px-4">
              Was unsere Kunden sagen
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              Echte Erfahrungen von Unternehmen, die RailNetwork bereits nutzen.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-4 md:p-6">
                <div className="flex items-center mb-3 md:mb-4">
                  <Avatar className="w-10 h-10 md:w-12 md:h-12 mr-3 md:mr-4">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-bold text-sm md:text-base">Julia Dietrich</h4>
                    <p className="text-xs md:text-sm text-gray-600">CEO, TechCorp</p>
                  </div>
                </div>
                <p className="text-sm md:text-base text-gray-700">
                  "RailNetwork hat unsere Geschäftsprozesse revolutioniert. Die Effizienz ist unglaublich gestiegen!"
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-4 md:p-6">
                <div className="flex items-center mb-3 md:mb-4">
                  <Avatar className="w-10 h-10 md:w-12 md:h-12 mr-3 md:mr-4">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>MS</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-bold text-sm md:text-base">Michael Schmidt</h4>
                    <p className="text-xs md:text-sm text-gray-600">CTO, InnovationLab</p>
                  </div>
                </div>
                <p className="text-sm md:text-base text-gray-700">
                  "Die Integration war nahtlos und der Support ist erstklassig. Absolut empfehlenswert!"
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-4 md:p-6">
                <div className="flex items-center mb-3 md:mb-4">
                  <Avatar className="w-10 h-10 md:w-12 md:h-12 mr-3 md:mr-4">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>AW</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-bold text-sm md:text-base">Anna Weber</h4>
                    <p className="text-xs md:text-sm text-gray-600">Operations Manager, GlobalRail</p>
                  </div>
                </div>
                <p className="text-sm md:text-base text-gray-700">
                  "Endlich eine Lösung, die wirklich für die Bahnbranche entwickelt wurde. Perfekt!"
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="bg-white py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <Badge variant="outline" className="mb-3 md:mb-4 px-4 py-2 text-primary border-primary rounded-full">
              PREISE
            </Badge>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 px-4">
              Wählen Sie Ihren Plan
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              Flexible Preismodelle für Unternehmen jeder Größe.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
            <Card className="border-2 border-gray-200 hover:border-primary transition-colors duration-300">
              <CardContent className="p-6 md:p-8 text-center">
                <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Starter</h3>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-1 md:mb-2">€99</div>
                <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-6">pro Monat</p>
                <ul className="text-left space-y-2 md:space-y-3 mb-6 md:mb-8 text-sm md:text-base">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2 md:mr-3"></span>
                    Bis zu 10 Nutzer
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2 md:mr-3"></span>
                    Grundlegende Features
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2 md:mr-3"></span>
                    E-Mail Support
                  </li>
                </ul>
                <Button variant="outline" className="w-full text-sm md:text-base">Jetzt starten</Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary relative">
              <div className="absolute -top-3 md:-top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-primary text-white px-3 md:px-4 py-1 text-xs md:text-sm">Empfohlen</Badge>
              </div>
              <CardContent className="p-6 md:p-8 text-center">
                <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Professional</h3>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-1 md:mb-2">€299</div>
                <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-6">pro Monat</p>
                <ul className="text-left space-y-2 md:space-y-3 mb-6 md:mb-8 text-sm md:text-base">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2 md:mr-3"></span>
                    Bis zu 50 Nutzer
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2 md:mr-3"></span>
                    Erweiterte Analytics
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2 md:mr-3"></span>
                    Priority Support
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2 md:mr-3"></span>
                    API Zugang
                  </li>
                </ul>
                <Button className="w-full text-sm md:text-base">Jetzt starten</Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-200 hover:border-primary transition-colors duration-300">
              <CardContent className="p-6 md:p-8 text-center">
                <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Enterprise</h3>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-1 md:mb-2">€599</div>
                <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-6">pro Monat</p>
                <ul className="text-left space-y-2 md:space-y-3 mb-6 md:mb-8 text-sm md:text-base">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2 md:mr-3"></span>
                    Unbegrenzte Nutzer
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2 md:mr-3"></span>
                    Custom Integration
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2 md:mr-3"></span>
                    24/7 Support
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2 md:mr-3"></span>
                    Dedicated Manager
                  </li>
                </ul>
                <Button variant="outline" className="w-full text-sm md:text-base">Kontakt aufnehmen</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 py-12 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 md:mb-4 px-4">
            Bereit für die Zukunft?
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-6 md:mb-8 max-w-2xl mx-auto px-4">
            Schließen Sie sich über 500 Unternehmen an, die bereits RailNetwork nutzen.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-4">
            <Button variant="secondary" className="bg-white text-primary hover:bg-primary hover:text-white px-6 md:px-8 py-3 md:py-5 text-base md:text-lg rounded-full border-2 border-primary">
              Kostenlos testen
            </Button>
            <Button 
              variant="outline" 
              className="bg-white text-primary hover:bg-primary hover:text-white px-6 md:px-8 py-3 md:py-5 text-base md:text-lg rounded-full border-2 border-primary"
              onClick={handleDemoRequest}
            >
              Demo anfordern
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-4">
        <div className="container mx-auto px-4 md:px-115">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-center md:text-left mb-4 md:mb-0 text-sm md:text-base">
              Wir arbeiten noch an diesem Projekt! Bitte melden Sie sich für die Warteliste an!
            </p>
            <Button variant="secondary" className="bg-white text-primary hover:bg-gray-100 rounded-full text-sm md:text-base">
              Anmelden
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
}