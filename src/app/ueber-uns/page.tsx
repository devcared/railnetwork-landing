"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import { MultiStepLoader } from "@/components/ui/multi-step-loader";

export default function UeberUns() {
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
              <a href="/" className="text-white font-medium relative group">
                Startseite
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[60%] h-0.5 bg-white opacity-0 group-hover:opacity-100 transition-opacity"></span>
              </a>
              <a href="/unternehmen" className="text-white font-medium relative group">
                Unternehmen
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[60%] h-0.5 bg-white opacity-0 group-hover:opacity-100 transition-opacity"></span>
              </a>
              <a href="/ueber-uns" className="text-white font-medium relative group">
                Über uns
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[60%] h-0.5 bg-white"></span>
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
      <section className="bg-white py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <Badge variant="outline" className="mb-3 md:mb-4 px-4 py-2 text-primary border-primary rounded-full">
              ÜBER UNS
            </Badge>
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4 md:mb-6 px-4">
              Die Geschichte hinter <span className="text-primary">RailNetwork</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4 mb-8 md:mb-10">
              Von der Vision einer digitalen Bahnindustrie bis zur Realisierung innovativer KI-Lösungen - 
              entdecken Sie die Menschen und Werte, die RailNetwork ausmachen.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 md:mb-8">
                Unsere <span className="text-primary">Geschichte</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 md:mb-8">
                RailNetwork wurde 2020 von einem Team aus Bahnexperten und KI-Spezialisten gegründet. 
                Unsere Mission war klar: Die Bahnindustrie durch innovative Technologien zu revolutionieren 
                und nachhaltige Mobilitätslösungen für die Zukunft zu schaffen.
              </p>
              <p className="text-lg text-gray-600 mb-6 md:mb-8">
                Was als kleines Startup begann, ist heute ein führendes Unternehmen in der digitalen 
                Bahnindustrie mit über 500 Kunden weltweit und einem Team von mehr als 100 Experten.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">2020</div>
                  <div className="text-sm md:text-base text-gray-600">Gründung</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">2024</div>
                  <div className="text-sm md:text-base text-gray-600">Heute</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-8 md:p-12 text-white">
                <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">
                  Unsere Mission
                </h3>
                <p className="text-lg mb-6">
                  "Wir glauben an eine Zukunft, in der intelligente Technologien den Bahnverkehr 
                  sicherer, effizienter und nachhaltiger machen."
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-white rounded-full mr-3"></div>
                    <span>Nachhaltige Mobilität fördern</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-white rounded-full mr-3"></div>
                    <span>Innovation vorantreiben</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-white rounded-full mr-3"></div>
                    <span>Menschen verbinden</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <Badge variant="outline" className="mb-3 md:mb-4 px-4 py-2 text-primary border-primary rounded-full">
              WERTE
            </Badge>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 px-4">
              Was uns ausmacht
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto px-4">
              Unsere Werte sind das Fundament unseres Erfolgs und leiten jede Entscheidung, die wir treffen.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 md:p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 md:mb-4">Innovation</h3>
                <p className="text-gray-600">
                  Wir denken außerhalb der Box und entwickeln bahnbrechende Lösungen für die Zukunft.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 md:p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 md:mb-4">Qualität</h3>
                <p className="text-gray-600">
                  Wir setzen höchste Standards in allem, was wir tun - von Code bis Kundenservice.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 md:p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 md:mb-4">Nachhaltigkeit</h3>
                <p className="text-gray-600">
                  Wir fördern umweltfreundliche Lösungen für eine bessere Zukunft der Mobilität.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 md:p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 md:mb-4">Teamwork</h3>
                <p className="text-gray-600">
                  Zusammen erreichen wir mehr - intern und mit unseren Kunden und Partnern.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <Badge variant="outline" className="mb-3 md:mb-4 px-4 py-2 text-primary border-primary rounded-full">
              TEAM
            </Badge>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 px-4">
              Das Team hinter RailNetwork
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto px-4">
              Lernen Sie die Experten kennen, die unsere Vision Wirklichkeit werden lassen.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 md:p-8">
                <Avatar className="w-20 h-20 mx-auto mb-4 md:mb-6">
                  <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face" />
                  <AvatarFallback className="bg-primary text-white text-xl">MS</AvatarFallback>
                </Avatar>
                <h3 className="text-xl font-bold mb-2">Dr. Michael Schmidt</h3>
                <p className="text-primary font-medium mb-3 md:mb-4">CEO & Gründer</p>
                <p className="text-gray-600 text-sm">
                  Bahnexperte mit 15+ Jahren Erfahrung in der Verkehrsindustrie. 
                  Promoviert in Verkehrsplanung und KI-Anwendungen.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 md:p-8">
                <Avatar className="w-20 h-20 mx-auto mb-4 md:mb-6">
                  <AvatarImage src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face" />
                  <AvatarFallback className="bg-primary text-white text-xl">AW</AvatarFallback>
                </Avatar>
                <h3 className="text-xl font-bold mb-2">Anna Weber</h3>
                <p className="text-primary font-medium mb-3 md:mb-4">CTO</p>
                <p className="text-gray-600 text-sm">
                  KI-Spezialistin und Software-Architektin. 
                  Expertin für Machine Learning und Big Data Analytics.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 md:p-8">
                <Avatar className="w-20 h-20 mx-auto mb-4 md:mb-6">
                  <AvatarImage src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face" />
                  <AvatarFallback className="bg-primary text-white text-xl">TM</AvatarFallback>
                </Avatar>
                <h3 className="text-xl font-bold mb-2">Thomas Müller</h3>
                <p className="text-primary font-medium mb-3 md:mb-4">Head of Operations</p>
                <p className="text-gray-600 text-sm">
                  Operations-Experte mit Fokus auf Kundenservice und 
                  Implementierung von Bahnmanagementsystemen.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 md:p-8">
                <Avatar className="w-20 h-20 mx-auto mb-4 md:mb-6">
                  <AvatarImage src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face" />
                  <AvatarFallback className="bg-primary text-white text-xl">SK</AvatarFallback>
                </Avatar>
                <h3 className="text-xl font-bold mb-2">Sarah Klein</h3>
                <p className="text-primary font-medium mb-3 md:mb-4">Head of Product</p>
                <p className="text-gray-600 text-sm">
                  Produktmanagerin mit Expertise in UX/UI-Design und 
                  Kundenbedürfnisse-Analyse im Bahnsektor.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 md:p-8">
                <Avatar className="w-20 h-20 mx-auto mb-4 md:mb-6">
                  <AvatarImage src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face" />
                  <AvatarFallback className="bg-primary text-white text-xl">DL</AvatarFallback>
                </Avatar>
                <h3 className="text-xl font-bold mb-2">David Lange</h3>
                <p className="text-primary font-medium mb-3 md:mb-4">Head of Sales</p>
                <p className="text-gray-600 text-sm">
                  Vertriebsexperte mit 10+ Jahren Erfahrung im B2B-Sektor 
                  und tiefem Verständnis der Bahnindustrie.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 md:p-8">
                <Avatar className="w-20 h-20 mx-auto mb-4 md:mb-6">
                  <AvatarImage src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face" />
                  <AvatarFallback className="bg-primary text-white text-xl">LF</AvatarFallback>
                </Avatar>
                <h3 className="text-xl font-bold mb-2">Lisa Fischer</h3>
                <p className="text-primary font-medium mb-3 md:mb-4">Head of Marketing</p>
                <p className="text-gray-600 text-sm">
                  Marketing-Expertin mit Fokus auf digitale Strategien und 
                  Markenentwicklung im Technologie-Sektor.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Milestones Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <Badge variant="outline" className="mb-3 md:mb-4 px-4 py-2 text-primary border-primary rounded-full">
              MEILENSTEINE
            </Badge>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 px-4">
              Unser Weg zum Erfolg
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto px-4">
              Von der Gründung bis heute - die wichtigsten Stationen unserer Entwicklung.
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-200 h-full hidden md:block"></div>
            
            <div className="space-y-8 md:space-y-12">
              <div className="flex flex-col md:flex-row items-center md:items-start">
                <div className="md:w-1/2 md:pr-8 text-center md:text-right">
                  <div className="bg-primary text-white rounded-full w-4 h-4 mx-auto md:ml-auto md:mr-0 mb-4 md:mb-0 md:mt-2"></div>
                </div>
                <div className="md:w-1/2 md:pl-8">
                  <h3 className="text-xl font-bold mb-2">2020 - Gründung</h3>
                  <p className="text-gray-600">
                    RailNetwork wird von einem Team aus Bahnexperten und KI-Spezialisten in Berlin gegründet. 
                    Erste Prototypen der KI-gestützten Bahnmanagementsysteme werden entwickelt.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center md:items-start">
                <div className="md:w-1/2 md:pr-8 text-center md:text-right order-2 md:order-1">
                  <h3 className="text-xl font-bold mb-2">2021 - Erste Kunden</h3>
                  <p className="text-gray-600">
                    Die ersten regionalen Verkehrsbetriebe werden Kunden von RailNetwork. 
                    Das Team wächst auf 25 Mitarbeiter an.
                  </p>
                </div>
                <div className="md:w-1/2 md:pl-8 order-1 md:order-2">
                  <div className="bg-primary text-white rounded-full w-4 h-4 mx-auto md:mr-auto md:ml-0 mb-4 md:mb-0 md:mt-2"></div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center md:items-start">
                <div className="md:w-1/2 md:pr-8 text-center md:text-right">
                  <div className="bg-primary text-white rounded-full w-4 h-4 mx-auto md:ml-auto md:mr-0 mb-4 md:mb-0 md:mt-2"></div>
                </div>
                <div className="md:w-1/2 md:pl-8">
                  <h3 className="text-xl font-bold mb-2">2022 - Internationale Expansion</h3>
                  <p className="text-gray-600">
                    Erste internationale Kunden in Österreich und der Schweiz. 
                    Das Produktportfolio wird erweitert und das Team wächst auf 50 Mitarbeiter.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center md:items-start">
                <div className="md:w-1/2 md:pr-8 text-center md:text-right order-2 md:order-1">
                  <h3 className="text-xl font-bold mb-2">2023 - Series A Funding</h3>
                  <p className="text-gray-600">
                    Erfolgreiche Series A Finanzierungsrunde mit 10 Millionen Euro. 
                    Expansion in weitere europäische Märkte beginnt.
                  </p>
                </div>
                <div className="md:w-1/2 md:pl-8 order-1 md:order-2">
                  <div className="bg-primary text-white rounded-full w-4 h-4 mx-auto md:mr-auto md:ml-0 mb-4 md:mb-0 md:mt-2"></div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center md:items-start">
                <div className="md:w-1/2 md:pr-8 text-center md:text-right">
                  <div className="bg-primary text-white rounded-full w-4 h-4 mx-auto md:ml-auto md:mr-0 mb-4 md:mb-0 md:mt-2"></div>
                </div>
                <div className="md:w-1/2 md:pl-8">
                  <h3 className="text-xl font-bold mb-2">2024 - Marktführer</h3>
                  <p className="text-gray-600">
                    RailNetwork ist heute Marktführer in der digitalen Bahnindustrie mit über 500 Kunden 
                    in 50+ Ländern und einem Team von 100+ Experten.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 py-12 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 md:mb-6 px-4">
            Werden Sie Teil unserer Geschichte
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
              Karriere
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