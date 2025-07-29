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

interface NewsArticle {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  publishedAt: string;
  readTime: string;
  image: string;
  featured: boolean;
  tags: string[];
}

export default function Aktuelles() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Alle");
  const [selectedArticle, setSelectedArticle] = useState<NewsArticle | null>(null);

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

  const categories = [
    { name: "Alle", count: 12 },
    { name: "Technologie", count: 4 },
    { name: "KI & Innovation", count: 3 },
    { name: "Bahnindustrie", count: 3 },
    { name: "Unternehmen", count: 2 }
  ];

  const articles: NewsArticle[] = [
    {
      id: "1",
      title: "RailNetwork führt KI-gestützte Predictive Maintenance ein",
      excerpt: "Neue Technologie revolutioniert die Wartung von Bahninfrastrukturen und reduziert Ausfallzeiten um 60%.",
      content: "RailNetwork hat heute seine neueste KI-gestützte Predictive Maintenance Lösung vorgestellt. Diese innovative Technologie analysiert kontinuierlich Sensordaten von Zügen und Infrastruktur, um potenzielle Probleme vorherzusagen, bevor sie auftreten. Die ersten Tests zeigen eine Reduzierung der ungeplanten Ausfallzeiten um beeindruckende 60%.",
      category: "Technologie",
      author: {
        name: "Dr. Sarah Weber",
        role: "CTO RailNetwork",
        avatar: "/placeholder-avatar.jpg"
      },
      publishedAt: "2024-01-15",
      readTime: "5 Min",
      image: "/dashboard-mockup.png",
      featured: true,
      tags: ["KI", "Predictive Maintenance", "Innovation"]
    },
    {
      id: "2",
      title: "Deutsche Bahn erweitert Partnerschaft mit RailNetwork",
      excerpt: "Langfristige Kooperation für die Digitalisierung des deutschen Schienennetzes.",
      content: "Die Deutsche Bahn AG und RailNetwork haben ihre strategische Partnerschaft erweitert. Im Rahmen der neuen Vereinbarung wird RailNetwork die Digitalisierung des gesamten deutschen Schienennetzes unterstützen. Das Projekt umfasst die Implementierung von Echtzeit-Monitoring, intelligenter Routenoptimierung und verbesserter Fahrgastkommunikation.",
      category: "Bahnindustrie",
      author: {
        name: "Michael Schmidt",
        role: "Head of Partnerships",
        avatar: "/placeholder-avatar.jpg"
      },
      publishedAt: "2024-01-12",
      readTime: "3 Min",
      image: "/dashboard-mockup.png",
      featured: false,
      tags: ["Partnerschaft", "Deutsche Bahn", "Digitalisierung"]
    },
    {
      id: "3",
      title: "Neue Studie: KI reduziert CO2-Emissionen im Bahnverkehr",
      excerpt: "Forschungsprojekt zeigt 40% weniger Emissionen durch intelligente Routenplanung.",
      content: "Eine umfassende Studie des Fraunhofer-Instituts in Zusammenarbeit mit RailNetwork zeigt beeindruckende Ergebnisse: Durch den Einsatz von KI-gestützter Routenoptimierung können Bahnbetriebe ihre CO2-Emissionen um bis zu 40% reduzieren. Die Studie basiert auf Daten von über 50 europäischen Bahnunternehmen.",
      category: "KI & Innovation",
      author: {
        name: "Prof. Dr. Klaus Müller",
        role: "Forschungsleiter",
        avatar: "/placeholder-avatar.jpg"
      },
      publishedAt: "2024-01-10",
      readTime: "7 Min",
      image: "/dashboard-mockup.png",
      featured: true,
      tags: ["Nachhaltigkeit", "CO2", "Forschung"]
    },
    {
      id: "4",
      title: "RailNetwork gewinnt European Innovation Award 2024",
      excerpt: "Auszeichnung für bahnbrechende KI-Lösungen im Verkehrssektor.",
      content: "RailNetwork wurde mit dem prestigeträchtigen European Innovation Award 2024 ausgezeichnet. Die Jury würdigte besonders die Entwicklung der RailAI-Plattform, die es Bahnbetrieben ermöglicht, ihre gesamte Infrastruktur intelligent zu überwachen und zu optimieren.",
      category: "Unternehmen",
      author: {
        name: "Lisa Chen",
        role: "Marketing Director",
        avatar: "/placeholder-avatar.jpg"
      },
      publishedAt: "2024-01-08",
      readTime: "4 Min",
      image: "/dashboard-mockup.png",
      featured: false,
      tags: ["Award", "Innovation", "Europa"]
    },
    {
      id: "5",
      title: "Echtzeit-Zugverfolgung: Revolution im Passagiererlebnis",
      excerpt: "Neue App-Features bieten Passagieren nie dagewesene Transparenz.",
      content: "RailNetwork hat seine Passagier-App mit revolutionären Echtzeit-Features erweitert. Nutzer können jetzt nicht nur den aktuellen Standort ihres Zuges verfolgen, sondern auch Informationen über Verspätungen, alternative Routen und die Kapazitätsauslastung in Echtzeit erhalten.",
      category: "Technologie",
      author: {
        name: "Alexandra Wagner",
        role: "Product Manager",
        avatar: "/placeholder-avatar.jpg"
      },
      publishedAt: "2024-01-05",
      readTime: "6 Min",
      image: "/dashboard-mockup.png",
      featured: false,
      tags: ["App", "Echtzeit", "Passagiererlebnis"]
    },
    {
      id: "6",
      title: "RailNetwork eröffnet neues KI-Forschungszentrum in Berlin",
      excerpt: "50 Millionen Euro Investition in die Zukunft der Bahntechnologie.",
      content: "RailNetwork hat heute die Eröffnung seines neuen KI-Forschungszentrums in Berlin bekannt gegeben. Mit einer Investition von 50 Millionen Euro wird das Zentrum über 100 KI-Experten beschäftigen und eng mit führenden Universitäten und Forschungseinrichtungen zusammenarbeiten.",
      category: "Unternehmen",
      author: {
        name: "Dr. Thomas Fischer",
        role: "CEO RailNetwork",
        avatar: "/placeholder-avatar.jpg"
      },
      publishedAt: "2024-01-03",
      readTime: "5 Min",
      image: "/dashboard-mockup.png",
      featured: true,
      tags: ["Forschung", "Berlin", "Investition"]
    }
  ];

  const filteredArticles = selectedCategory === "Alle" 
    ? articles 
    : articles.filter(article => article.category === selectedCategory);

  const featuredArticles = articles.filter(article => article.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Multi Step Loader */}
      <MultiStepLoader 
        loadingStates={loadingStates} 
        loading={isLoading} 
        duration={1600}
        loop={false}
      />
      
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200 relative">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <Image src="/logo.svg" alt="Logo" width={80} height={80} className="pr-4 md:pr-10" />
            </div>
            
            {/* Desktop Navigation - mittig zentriert */}
            <nav className="hidden md:flex space-x-8 absolute left-1/2 transform -translate-x-1/2">
              <a href="/" className="text-gray-700 font-medium relative group">
                Startseite
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[60%] h-0.5 bg-primary opacity-0 group-hover:opacity-100 transition-opacity"></span>
              </a>
              <a href="/unternehmen" className="text-gray-700 font-medium relative group">
                Unternehmen
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[60%] h-0.5 bg-primary opacity-0 group-hover:opacity-100 transition-opacity"></span>
              </a>
              <a href="/ueber-uns" className="text-gray-700 font-medium relative group">
                Über uns
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[60%] h-0.5 bg-primary opacity-0 group-hover:opacity-100 transition-opacity"></span>
              </a>
              <a href="/service" className="text-gray-700 font-medium relative group">
                Service
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[60%] h-0.5 bg-primary opacity-0 group-hover:opacity-100 transition-opacity"></span>
              </a>
              <a href="/preise" className="text-gray-700 font-medium relative group">
                Preise
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[60%] h-0.5 bg-primary opacity-0 group-hover:opacity-100 transition-opacity"></span>
              </a>
              <a href="/aktuelles" className="text-primary font-medium relative group">
                Aktuelles/News
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[60%] h-0.5 bg-primary"></span>
              </a>
            </nav>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-gray-700 p-2"
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
        <div className={`md:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-200 transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'opacity-100 visible max-h-96' : 'opacity-0 invisible max-h-0'
        }`}>
          <nav className="container mx-auto px-4 py-4">
            <div className="flex flex-col space-y-4">
              <a 
                href="/" 
                className="text-gray-700 font-medium py-2 px-4 rounded-lg hover:bg-gray-100 transition-colors"
                onClick={closeMobileMenu}
              >
                Startseite
              </a>
              <a 
                href="/unternehmen" 
                className="text-gray-700 font-medium py-2 px-4 rounded-lg hover:bg-gray-100 transition-colors"
                onClick={closeMobileMenu}
              >
                Unternehmen
              </a>
              <a 
                href="/ueber-uns" 
                className="text-gray-700 font-medium py-2 px-4 rounded-lg hover:bg-gray-100 transition-colors"
                onClick={closeMobileMenu}
              >
                Über uns
              </a>
              <a 
                href="/service" 
                className="text-gray-700 font-medium py-2 px-4 rounded-lg hover:bg-gray-100 transition-colors"
                onClick={closeMobileMenu}
              >
                Service
              </a>
              <a 
                href="/preise" 
                className="text-gray-700 font-medium py-2 px-4 rounded-lg hover:bg-gray-100 transition-colors"
                onClick={closeMobileMenu}
              >
                Preise
              </a>
              <a 
                href="/aktuelles" 
                className="text-primary font-medium py-2 px-4 rounded-lg hover:bg-primary/10 transition-colors"
                onClick={closeMobileMenu}
              >
                Aktuelles/News
              </a>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge variant="outline" className="mb-6 px-6 py-3 text-primary border-primary rounded-full text-sm">
                AKTUELLES & NEWS
              </Badge>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
                Bleiben Sie auf dem
                <span className="text-primary block">Laufenden</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                Entdecken Sie die neuesten Entwicklungen in der Bahnindustrie, 
                KI-Innovationen und Updates von RailNetwork.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg rounded-full shadow-lg"
                onClick={handleDemoRequest}
              >
                Demo anfordern
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 text-lg rounded-full"
              >
                Newsletter abonnieren
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      {featuredArticles.length > 0 && (
        <section className="py-20 md:py-32 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <Badge variant="outline" className="mb-6 px-6 py-3 text-primary border-primary rounded-full text-sm">
                EMPFOHLEN
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Top-Artikel der Woche
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Die wichtigsten Nachrichten und Entwicklungen aus der Bahnindustrie.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {featuredArticles.map((article, index) => (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group cursor-pointer"
                  onClick={() => setSelectedArticle(article)}
                >
                  <Card className="h-full hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-gray-200">
                    <div className="relative overflow-hidden rounded-t-lg">
                      <Image
                        src={article.image}
                        alt={article.title}
                        width={600}
                        height={300}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-primary text-white text-xs">
                          {article.category}
                        </Badge>
                      </div>
                      <div className="absolute top-4 right-4">
                        <Badge variant="outline" className="bg-white/90 text-gray-700 text-xs">
                          {article.readTime}
                        </Badge>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <Avatar className="w-8 h-8 mr-3">
                          <AvatarImage src={article.author.avatar} alt={article.author.name} />
                          <AvatarFallback>{article.author.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="text-sm font-medium text-gray-900">{article.author.name}</p>
                          <p className="text-xs text-gray-500">{article.author.role}</p>
                        </div>
                        <span className="ml-auto text-xs text-gray-500">
                          {new Date(article.publishedAt).toLocaleDateString('de-DE')}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {article.excerpt}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {article.tags.map((tag, tagIndex) => (
                          <Badge key={tagIndex} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Category Filter */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <motion.button
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => setSelectedCategory(category.name)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.name
                    ? 'bg-primary text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
                <span className="ml-2 text-xs opacity-75">({category.count})</span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* All Articles */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {filteredArticles.map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer"
                onClick={() => setSelectedArticle(article)}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-gray-200">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <Image
                      src={article.image}
                      alt={article.title}
                      width={400}
                      height={200}
                      className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3">
                      <Badge className="bg-primary text-white text-xs">
                        {article.category}
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center mb-3">
                      <Avatar className="w-6 h-6 mr-2">
                        <AvatarImage src={article.author.avatar} alt={article.author.name} />
                        <AvatarFallback className="text-xs">{article.author.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <span className="text-xs text-gray-500">{article.author.name}</span>
                      <span className="ml-auto text-xs text-gray-500">{article.readTime}</span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3 line-clamp-3">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">
                        {new Date(article.publishedAt).toLocaleDateString('de-DE')}
                      </span>
                      <div className="flex gap-1">
                        {article.tags.slice(0, 2).map((tag, tagIndex) => (
                          <Badge key={tagIndex} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Article Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
          >
            <div className="relative">
              <Image
                src={selectedArticle.image}
                alt={selectedArticle.title}
                width={800}
                height={400}
                className="w-full h-64 object-cover rounded-t-3xl"
              />
              <button
                onClick={() => setSelectedArticle(null)}
                className="absolute top-4 right-4 bg-white/90 hover:bg-white text-gray-700 hover:text-gray-900 rounded-full w-10 h-10 flex items-center justify-center text-xl font-bold shadow-lg"
              >
                ×
              </button>
              <div className="absolute bottom-4 left-4">
                <Badge className="bg-primary text-white">
                  {selectedArticle.category}
                </Badge>
              </div>
            </div>
            <div className="p-8">
              <div className="flex items-center mb-6">
                <Avatar className="w-12 h-12 mr-4">
                  <AvatarImage src={selectedArticle.author.avatar} alt={selectedArticle.author.name} />
                  <AvatarFallback>{selectedArticle.author.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900">{selectedArticle.author.name}</h3>
                  <p className="text-sm text-gray-500">{selectedArticle.author.role}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-500">{selectedArticle.readTime}</p>
                  <p className="text-sm text-gray-500">
                    {new Date(selectedArticle.publishedAt).toLocaleDateString('de-DE')}
                  </p>
                </div>
              </div>
              
              <h2 className="text-3xl font-bold text-gray-900 mb-6">{selectedArticle.title}</h2>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedArticle.tags.map((tag, index) => (
                  <Badge key={index} variant="outline" className="text-sm">
                    {tag}
                  </Badge>
                ))}
              </div>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-6">{selectedArticle.content}</p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Die Implementierung dieser Technologie markiert einen wichtigen Meilenstein in der Entwicklung 
                  intelligenter Bahnsysteme. RailNetwork setzt damit neue Maßstäbe in der Branche und zeigt, 
                  wie moderne Technologie die Zukunft des Bahnverkehrs gestaltet.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Weitere Informationen zu diesem Projekt und anderen Innovationen von RailNetwork finden Sie 
                  in unserem regelmäßig aktualisierten Blog oder kontaktieren Sie unser Team für eine 
                  persönliche Beratung.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 mt-8 pt-6 border-t border-gray-200">
                <Button 
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white flex-1"
                  onClick={handleDemoRequest}
                >
                  Demo anfordern
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-white flex-1"
                >
                  Artikel teilen
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-primary to-primary/90">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Bleiben Sie informiert
            </h2>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              Abonnieren Sie unseren Newsletter und erhalten Sie die neuesten Nachrichten 
              und Updates direkt in Ihr Postfach.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                variant="secondary" 
                className="bg-white text-primary hover:bg-primary hover:text-white px-6 md:px-8 py-3 md:py-5 text-base md:text-lg rounded-full border-2 border-primary"
              >
                Newsletter abonnieren
              </Button>
              <Button 
                size="lg"
                variant="outline" 
                className="bg-white text-primary hover:bg-primary hover:text-white px-6 md:px-8 py-3 md:py-5 text-base md:text-lg rounded-full border-2 border-primary"
                onClick={handleDemoRequest}
              >
                Demo anfordern
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-center md:text-left mb-4 md:mb-0 text-sm md:text-base text-gray-300">
              We are still working on this project! Please sign up for the waiting list!
            </p>
            <Button variant="secondary" className="bg-white text-gray-900 hover:bg-gray-100 rounded-full text-sm md:text-base">
              Sign up
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
} 