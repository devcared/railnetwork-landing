"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MultiStepLoader } from "@/components/ui/multi-step-loader";

export default function Unternehmen() {
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
    setTimeout(() => {
      setIsLoading(false);
    }, 8000);
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
              <Link href="/" className="text-white font-medium relative group">
                Startseite
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[60%] h-0.5 bg-white opacity-0 group-hover:opacity-100 transition-opacity"></span>
              </Link>
              <a href="/unternehmen" className="text-white font-medium relative group">
                Unternehmen
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[60%] h-0.5 bg-white"></span>
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
              <Link 
                href="/" 
                className="text-white font-medium py-2 px-4 rounded-lg hover:bg-primary transition-colors"
                onClick={closeMobileMenu}
              >
                Startseite
              </Link>
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
      <section className="bg-white py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <Badge variant="outline" className="mb-3 md:mb-4 px-4 py-2 text-primary border-primary rounded-full">
              UNTERNEHMEN
            </Badge>
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4 md:mb-6 px-4">
              Die Zukunft der <span className="text-primary">Bahnindustrie</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4 mb-8 md:mb-10">
              RailNetwork revolutioniert die Bahnbranche mit KI-gestützten Lösungen für moderne Verkehrsunternehmen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
              <Button className="bg-primary hover:bg-primary/90 px-8 md:px-10 py-3 md:py-4 text-lg md:text-xl rounded-full">
                Mehr erfahren
              </Button>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white px-8 md:px-10 py-3 md:py-4 text-lg md:text-xl rounded-full">
                Kontakt aufnehmen
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 md:mb-8">
                Unsere Vision für die <span className="text-primary">Bahnindustrie</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 md:mb-8">
                Wir glauben an eine Zukunft, in der intelligente Technologien den Bahnverkehr sicherer, 
                effizienter und nachhaltiger machen. RailNetwork verbindet traditionelle Bahnwerte mit 
                modernster KI-Technologie.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <p className="text-gray-700">Nachhaltige Mobilitätslösungen für die Zukunft</p>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <p className="text-gray-700">KI-gestützte Optimierung von Verkehrsströmen</p>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <p className="text-gray-700">Innovative Sicherheits- und Überwachungssysteme</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-8 md:p-12 text-white">
                <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">
                  Zahlen sprechen für sich
                </h3>
                <div className="grid grid-cols-2 gap-6 md:gap-8">
                  <div className="text-center">
                    <div className="text-3xl md:text-4xl font-bold mb-2">500+</div>
                    <div className="text-sm md:text-base opacity-90">Unternehmen</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl md:text-4xl font-bold mb-2">99.9%</div>
                    <div className="text-sm md:text-base opacity-90">Uptime</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl md:text-4xl font-bold mb-2">24/7</div>
                    <div className="text-sm md:text-base opacity-90">Support</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl md:text-4xl font-bold mb-2">50+</div>
                    <div className="text-sm md:text-base opacity-90">Länder</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <Badge variant="outline" className="mb-3 md:mb-4 px-4 py-2 text-primary border-primary rounded-full">
              SERVICES
            </Badge>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 px-4">
              Unsere Lösungen für Unternehmen
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto px-4">
              Von kleinen Verkehrsbetrieben bis hin zu großen Bahnkonzernen - wir haben die passende Lösung.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 md:p-8">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 md:mb-6">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Analytics & Reporting</h3>
                <p className="text-gray-600 mb-4 md:mb-6">
                  Detaillierte Einblicke in Ihre Bahnbetriebe mit Echtzeit-Analytics und umfassenden Berichten.
                </p>
                <Button variant="outline" className="w-full">Mehr erfahren</Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 md:p-8">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 md:mb-6">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Sicherheits-Management</h3>
                <p className="text-gray-600 mb-4 md:mb-6">
                  Erweiterte Sicherheitsüberwachung und -management für alle Bahninfrastrukturen.
                </p>
                <Button variant="outline" className="w-full">Mehr erfahren</Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 md:p-8">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 md:mb-6">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">KI-Optimierung</h3>
                <p className="text-gray-600 mb-4 md:mb-6">
                  Intelligente Algorithmen optimieren Ihre Fahrpläne und Kapazitätsplanung automatisch.
                </p>
                <Button variant="outline" className="w-full">Mehr erfahren</Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 md:p-8">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 md:mb-6">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Fahrgast-Management</h3>
                <p className="text-gray-600 mb-4 md:mb-6">
                  Optimieren Sie die Fahrgasterfahrung mit intelligenten Crowd-Management-Lösungen.
                </p>
                <Button variant="outline" className="w-full">Mehr erfahren</Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 md:p-8">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 md:mb-6">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Predictive Maintenance</h3>
                <p className="text-gray-600 mb-4 md:mb-6">
                  Vorausschauende Wartung reduziert Ausfallzeiten und senkt Wartungskosten erheblich.
                </p>
                <Button variant="outline" className="w-full">Mehr erfahren</Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 md:p-8">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 md:mb-6">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Nachhaltigkeit</h3>
                <p className="text-gray-600 mb-4 md:mb-6">
                  Umweltfreundliche Lösungen für eine nachhaltige Zukunft des Bahnverkehrs.
                </p>
                <Button variant="outline" className="w-full">Mehr erfahren</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 py-12 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 md:mb-6 px-4">
            Bereit für die digitale Transformation?
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-8 md:mb-10 max-w-2xl mx-auto px-4">
            Lassen Sie uns gemeinsam die Zukunft der Bahnindustrie gestalten.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
            <Button 
              variant="secondary" 
              className="bg-white text-primary hover:bg-primary hover:text-white px-6 md:px-8 py-3 md:py-5 text-base md:text-lg rounded-full border-2 border-primary"
              onClick={handleDemoRequest}
            >
              Demo anfordern
            </Button>
            <Button variant="outline" className="bg-white text-primary hover:bg-primary hover:text-white px-6 md:px-8 py-3 md:py-5 text-base md:text-lg rounded-full border-2 border-primary">
              Kontakt aufnehmen
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-4">
        <div className="container mx-auto px-4 md:px-115">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-center md:text-left mb-4 md:mb-0 text-sm md:text-base">
              We are still working on this project! Please sign up for the waiting list!
            </p>
            <Button variant="secondary" className="bg-white text-primary hover:bg-gray-100 rounded-full text-sm md:text-base">
              Sign up
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
} 