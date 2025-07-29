"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { MultiStepLoader } from "@/components/ui/multi-step-loader";

interface Service {
  id: string;
  category: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  price: string;
  color: string;
  popular: boolean;
}

export default function Service() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("all");
  const [selectedService, setSelectedService] = useState<Service | null>(null);

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

  const services = [
    {
      id: "analytics",
      category: "analytics",
      title: "Rail Analytics Pro",
      description: "Umfassende Datenanalyse und Reporting für Ihre Bahnbetriebe",
      icon: "Chart",
      features: ["Echtzeit-Dashboards", "Predictive Analytics", "Custom Reports", "API-Integration"],
      price: "ab €299/Monat",
      color: "from-blue-500 to-blue-600",
      popular: false
    },
    {
      id: "safety",
      category: "safety",
      title: "SafetyGuard AI",
      description: "KI-gestützte Sicherheitsüberwachung für alle Bahninfrastrukturen",
      icon: "Shield",
      features: ["Video-Analyse", "Anomalie-Erkennung", "Automatische Alarme", "Compliance-Reporting"],
      price: "ab €499/Monat",
      color: "from-red-500 to-red-600",
      popular: true
    },
    {
      id: "optimization",
      category: "optimization",
      title: "Route Optimizer",
      description: "Intelligente Fahrplanoptimierung und Kapazitätsplanung",
      icon: "Train",
      features: ["KI-Algorithmen", "Dynamische Anpassungen", "Energie-Optimierung", "Störungsmanagement"],
      price: "ab €399/Monat",
      color: "from-green-500 to-green-600",
      popular: false
    },
    {
      id: "passenger",
      category: "passenger",
      title: "PassengerFlow",
      description: "Fahrgast-Management und Crowd-Control-Lösungen",
      icon: "Users",
      features: ["Crowd-Analyse", "Kapazitätsplanung", "Mobile Apps", "Echtzeit-Updates"],
      price: "ab €249/Monat",
      color: "from-purple-500 to-purple-600",
      popular: false
    },
    {
      id: "maintenance",
      category: "maintenance",
      title: "Predictive Maintenance",
      description: "Vorausschauende Wartung reduziert Ausfallzeiten erheblich",
      icon: "Wrench",
      features: ["IoT-Sensoren", "ML-Predictions", "Wartungsplanung", "Kosteneinsparungen"],
      price: "ab €599/Monat",
      color: "from-orange-500 to-orange-600",
      popular: false
    },
    {
      id: "sustainability",
      category: "sustainability",
      title: "GreenRail",
      description: "Nachhaltige Lösungen für umweltfreundlichen Bahnverkehr",
      icon: "Leaf",
      features: ["CO2-Tracking", "Energie-Optimierung", "Nachhaltigkeits-Reporting", "Green-Certification"],
      price: "ab €199/Monat",
      color: "from-emerald-500 to-emerald-600",
      popular: false
    }
  ];

  const categories = [
    { id: "all", name: "Alle Services", icon: "Star" },
    { id: "analytics", name: "Analytics", icon: "Chart" },
    { id: "safety", name: "Sicherheit", icon: "Shield" },
    { id: "optimization", name: "Optimierung", icon: "Train" },
    { id: "passenger", name: "Fahrgäste", icon: "Users" },
    { id: "maintenance", name: "Wartung", icon: "Wrench" },
    { id: "sustainability", name: "Nachhaltigkeit", icon: "Leaf" }
  ];

  const filteredServices = activeTab === "all" 
    ? services 
    : services.filter(service => service.category === activeTab);

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
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[60%] h-0.5 bg-white opacity-0 group-hover:opacity-100 transition-opacity"></span>
              </a>
              <a href="/ueber-uns" className="text-white font-medium relative group">
                Über uns
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[60%] h-0.5 bg-white opacity-0 group-hover:opacity-100 transition-opacity"></span>
              </a>
              <a href="/service" className="text-white font-medium relative group">
                Service
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[60%] h-0.5 bg-white"></span>
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
      <section className="bg-gradient-to-br from-primary via-primary/90 to-primary/80 py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <Badge variant="outline" className="mb-3 md:mb-4 px-4 py-2 text-white border-white rounded-full">
              SERVICES
            </Badge>
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-4 md:mb-6 px-4">
              Unsere <span className="text-yellow-300">Service-Lösungen</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto px-4 mb-8 md:mb-10">
              Entdecken Sie unsere umfassende Palette an KI-gestützten Bahnmanagementsystemen, 
              die Ihre Betriebe revolutionieren werden.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
              <Button 
                variant="secondary" 
                className="bg-white text-primary hover:bg-primary hover:text-white px-8 md:px-10 py-3 md:py-4 text-lg md:text-xl rounded-full"
                onClick={handleDemoRequest}
              >
                Demo anfordern
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary px-8 md:px-10 py-3 md:py-4 text-lg md:text-xl rounded-full">
                Alle Services entdecken
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="bg-white py-8 md:py-12 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 rounded-full text-sm md:text-base font-medium transition-all duration-300 ${
                  activeTab === category.id
                    ? 'bg-primary text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <span className="text-lg">
                  {category.icon === "Star" && (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  )}
                  {category.icon === "Chart" && (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  )}
                  {category.icon === "Shield" && (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  )}
                  {category.icon === "Train" && (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  )}
                  {category.icon === "Users" && (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                    </svg>
                  )}
                  {category.icon === "Wrench" && (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  )}
                  {category.icon === "Leaf" && (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  )}
                </span>
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredServices.map((service) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="group"
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 cursor-pointer border-0 shadow-lg hover:scale-105">
                  <div className={`bg-gradient-to-br ${service.color} p-6 md:p-8 text-white rounded-t-lg relative overflow-hidden`}>
                    {service.popular && (
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-yellow-400 text-black text-xs font-bold">
                          POPULAR
                        </Badge>
                      </div>
                    )}
                    <div className="text-4xl md:text-5xl mb-4">
                      {service.icon === "Chart" && (
                        <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                      )}
                      {service.icon === "Shield" && (
                        <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      )}
                      {service.icon === "Train" && (
                        <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                      )}
                      {service.icon === "Users" && (
                        <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                        </svg>
                      )}
                      {service.icon === "Wrench" && (
                        <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      )}
                      {service.icon === "Leaf" && (
                        <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      )}
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold mb-2">{service.title}</h3>
                    <p className="text-white/90 text-sm md:text-base">{service.description}</p>
                  </div>
                  <CardContent className="p-6 md:p-8">
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Features:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, index) => (
                          <li key={index} className="flex items-center text-sm text-gray-600">
                            <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="text-2xl font-bold text-primary">{service.price}</div>
                      <Button 
                        className="bg-primary hover:bg-primary/90 text-white"
                        onClick={() => setSelectedService(service)}
                      >
                        Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Details Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className={`bg-gradient-to-br ${selectedService.color} p-6 md:p-8 text-white rounded-t-2xl`}>
              <div className="flex justify-between items-start">
                <div>
                  <div className="text-4xl mb-4">{selectedService.icon}</div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-2">{selectedService.title}</h2>
                  <p className="text-white/90">{selectedService.description}</p>
                </div>
                <button
                  onClick={() => setSelectedService(null)}
                  className="text-white hover:text-gray-200 text-2xl"
                >
                  ×
                </button>
              </div>
            </div>
            <div className="p-6 md:p-8">
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-4">Detaillierte Features:</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {selectedService.features.map((feature, index) => (
                    <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg">
                      <span className="w-3 h-3 bg-primary rounded-full mr-3"></span>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  className="bg-primary hover:bg-primary/90 text-white flex-1"
                  onClick={handleDemoRequest}
                >
                  Demo anfordern
                </Button>
                <Button variant="outline" className="flex-1">
                  Mehr erfahren
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* Comparison Section */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <Badge variant="outline" className="mb-3 md:mb-4 px-4 py-2 text-primary border-primary rounded-full">
              VERGLEICH
            </Badge>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 px-4">
              Warum RailNetwork Services?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto px-4">
              Vergleichen Sie unsere Lösungen mit traditionellen Bahnmanagementsystemen.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <Card className="border-2 border-gray-200">
              <CardContent className="p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-600">Traditionelle Systeme</h3>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                    Manuelle Prozesse
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                    Begrenzte Analysemöglichkeiten
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                    Hohe Wartungskosten
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                    Reaktive Problemlösung
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                    Begrenzte Skalierbarkeit
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary bg-primary/5">
              <CardContent className="p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold mb-4 text-primary">RailNetwork Services</h3>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    KI-gestützte Automatisierung
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    Umfassende Echtzeit-Analytics
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    Predictive Maintenance
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    Proaktive Problemlösung
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    Unbegrenzte Skalierbarkeit
                  </li>
                </ul>
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
            Lassen Sie uns gemeinsam Ihre Bahnbetriebe in die Zukunft führen.
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