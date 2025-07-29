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

interface Plan {
  id: string;
  name: string;
  description: string;
  monthlyPrice: number;
  yearlyPrice: number;
  features: string[];
  popular: boolean;
  color: string;
}

export default function Preise() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [billingCycle, setBillingCycle] = useState("monthly");
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);

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

  const plans = [
    {
      id: "starter",
      name: "Starter",
      description: "Perfekt für kleine Verkehrsbetriebe",
      monthlyPrice: 99,
      yearlyPrice: 990,
      features: [
        "Bis zu 5 Nutzer",
        "Grundlegende Analytics",
        "E-Mail Support",
        "Standard-Integrationen",
        "5 GB Speicherplatz",
        "Monatliche Reports"
      ],
      popular: false,
      color: "from-gray-500 to-gray-600"
    },
    {
      id: "professional",
      name: "Professional",
      description: "Ideal für wachsende Unternehmen",
      monthlyPrice: 299,
      yearlyPrice: 2990,
      features: [
        "Bis zu 25 Nutzer",
        "Erweiterte Analytics",
        "Priority Support",
        "API-Zugang",
        "25 GB Speicherplatz",
        "Echtzeit-Dashboards",
        "Custom Reports",
        "Mobile App"
      ],
      popular: true,
      color: "from-primary to-primary/80"
    },
    {
      id: "enterprise",
      name: "Enterprise",
      description: "Für große Bahnkonzerne",
      monthlyPrice: 599,
      yearlyPrice: 5990,
      features: [
        "Unbegrenzte Nutzer",
        "KI-gestützte Analytics",
        "24/7 Support",
        "Custom Integrationen",
        "Unbegrenzter Speicher",
        "Predictive Maintenance",
        "Advanced Security",
        "Dedicated Manager"
      ],
      popular: false,
      color: "from-purple-500 to-purple-600"
    }
  ];

  const addons = [
    {
      name: "SafetyGuard AI",
      description: "KI-gestützte Sicherheitsüberwachung",
      monthlyPrice: 199,
      yearlyPrice: 1990
    },
    {
      name: "Route Optimizer",
      description: "Intelligente Fahrplanoptimierung",
      monthlyPrice: 149,
      yearlyPrice: 1490
    },
    {
      name: "Predictive Maintenance",
      description: "Vorausschauende Wartung",
      monthlyPrice: 299,
      yearlyPrice: 2990
    },
    {
      name: "GreenRail Analytics",
      description: "Nachhaltigkeits-Reporting",
      monthlyPrice: 99,
      yearlyPrice: 990
    }
  ];

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
              <a href="/preise" className="text-primary font-medium relative group">
                Preise
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[60%] h-0.5 bg-primary"></span>
              </a>
                                   <a href="/aktuelles" className="text-gray-700 font-medium relative group">
                       Aktuelles/News
                       <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[60%] h-0.5 bg-primary opacity-0 group-hover:opacity-100 transition-opacity"></span>
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
                className="text-primary font-medium py-2 px-4 rounded-lg hover:bg-primary/10 transition-colors"
                onClick={closeMobileMenu}
              >
                Preise
              </a>
                                   <a 
                       href="/aktuelles" 
                       className="text-gray-700 font-medium py-2 px-4 rounded-lg hover:bg-gray-100 transition-colors"
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
                PREISE
              </Badge>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
                Wählen Sie Ihren
                <span className="text-primary block">perfekten Plan</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                Transparente Preise, flexible Pläne und keine versteckten Kosten. 
                Finden Sie die Lösung, die zu Ihrem Unternehmen passt.
              </p>
            </motion.div>

            {/* Billing Toggle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center items-center gap-6 mb-12"
            >
              <span className={`text-lg font-medium ${billingCycle === 'monthly' ? 'text-gray-900' : 'text-gray-500'}`}>
                Monatlich
              </span>
              <button
                onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
                className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors ${
                  billingCycle === 'yearly' ? 'bg-primary' : 'bg-gray-300'
                }`}
              >
                <span
                  className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform shadow-lg ${
                    billingCycle === 'yearly' ? 'translate-x-7' : 'translate-x-1'
                  }`}
                />
              </button>
              <div className="flex items-center gap-3">
                <span className={`text-lg font-medium ${billingCycle === 'yearly' ? 'text-gray-900' : 'text-gray-500'}`}>
                  Jährlich
                </span>
                <Badge className="bg-green-500 text-white text-xs px-3 py-1">
                  20% Rabatt
                </Badge>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
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
                Alle Features vergleichen
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto pt-8">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Card className={`h-full transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 relative ${
                  plan.popular 
                    ? 'ring-4 ring-primary/20 shadow-xl border-primary' 
                    : 'border-gray-200 hover:border-primary/50'
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                      <Badge className="bg-primary text-white px-6 py-2 text-sm font-bold shadow-lg">
                        BELIEBTESTER
                      </Badge>
                    </div>
                  )}
                  
                  <CardContent className="p-8 md:p-10">
                    <div className="text-center mb-8">
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                      <p className="text-gray-600 mb-6">{plan.description}</p>
                      <div className="mb-6">
                        <span className="text-4xl md:text-5xl font-bold text-gray-900">
                          €{billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice}
                        </span>
                        <span className="text-gray-500 ml-2">
                          /{billingCycle === 'monthly' ? 'Monat' : 'Jahr'}
                        </span>
                      </div>
                      {billingCycle === 'yearly' && (
                        <p className="text-sm text-green-600 font-medium">
                          Sparen Sie €{(plan.monthlyPrice * 12) - plan.yearlyPrice} pro Jahr
                        </p>
                      )}
                    </div>

                    <div className="space-y-4 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start">
                          <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="space-y-3">
                      <Button 
                        size="lg"
                        className={`w-full ${
                          plan.popular 
                            ? 'bg-primary hover:bg-primary/90 text-white' 
                            : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                        }`}
                        onClick={() => setSelectedPlan(plan)}
                      >
                        Plan auswählen
                      </Button>
                      {plan.popular && (
                        <Button 
                          variant="outline" 
                          size="lg"
                          className="w-full border-primary text-primary hover:bg-primary hover:text-white"
                          onClick={handleDemoRequest}
                        >
                          Demo anfordern
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Badge variant="outline" className="mb-6 px-6 py-3 text-primary border-primary rounded-full text-sm">
              ADD-ONS
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Erweitern Sie Ihre Lösung
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Fügen Sie spezialisierte Module zu Ihrem bestehenden Plan hinzu und 
              optimieren Sie Ihre Bahnbetriebe weiter.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {addons.map((addon, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-gray-200">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{addon.name}</h3>
                    <p className="text-gray-600 text-sm mb-4">{addon.description}</p>
                    <div className="flex items-baseline mb-4">
                      <span className="text-2xl font-bold text-primary">
                        €{billingCycle === 'monthly' ? addon.monthlyPrice : addon.yearlyPrice}
                      </span>
                      <span className="text-gray-500 ml-2">
                        /{billingCycle === 'monthly' ? 'Monat' : 'Jahr'}
                      </span>
                    </div>
                    <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white">
                      Hinzufügen
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Badge variant="outline" className="mb-6 px-6 py-3 text-primary border-primary rounded-full text-sm">
              FAQ
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Häufig gestellte Fragen
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Antworten auf die wichtigsten Fragen zu unseren Preisen und Plänen.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                question: "Kann ich meinen Plan jederzeit wechseln?",
                answer: "Ja, Sie können Ihren Plan jederzeit upgraden oder downgraden. Die Änderungen werden zum nächsten Abrechnungszeitpunkt wirksam."
              },
              {
                question: "Gibt es eine Kündigungsfrist?",
                answer: "Nein, alle unsere Pläne können monatlich gekündigt werden. Es gibt keine langfristigen Vertragsbindungen."
              },
              {
                question: "Bietet ihr auch maßgeschneiderte Lösungen an?",
                answer: "Ja, für Enterprise-Kunden bieten wir maßgeschneiderte Lösungen an. Kontaktieren Sie uns für ein individuelles Angebot."
              },
              {
                question: "Welche Zahlungsmethoden werden akzeptiert?",
                answer: "Wir akzeptieren alle gängigen Kreditkarten, SEPA-Lastschrift und Rechnung (für Enterprise-Kunden)."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="border-gray-200 hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{faq.question}</h3>
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Plan Details Modal */}
      {selectedPlan && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
          >
            <div className={`bg-gradient-to-br ${selectedPlan.color} p-8 text-white rounded-t-3xl`}>
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-3xl font-bold mb-2">{selectedPlan.name}</h2>
                  <p className="text-white/90 text-lg">{selectedPlan.description}</p>
                </div>
                <button
                  onClick={() => setSelectedPlan(null)}
                  className="text-white hover:text-gray-200 text-3xl font-bold"
                >
                  ×
                </button>
              </div>
            </div>
            <div className="p-8">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Plan-Details:</h3>
                <div className="space-y-6">
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl">
                    <span className="text-lg font-medium text-gray-700">Preis:</span>
                    <span className="text-2xl font-bold text-primary">
                      €{billingCycle === 'monthly' ? selectedPlan.monthlyPrice : selectedPlan.yearlyPrice}
                      /{billingCycle === 'monthly' ? 'Monat' : 'Jahr'}
                    </span>
                  </div>
                  <div className="grid gap-4">
                    {selectedPlan.features.map((feature, index) => (
                      <div key={index} className="flex items-center p-4 bg-gray-50 rounded-xl">
                        <svg className="w-5 h-5 text-green-500 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
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
                  Plan auswählen
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
              Bereit für den nächsten Schritt?
            </h2>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              Starten Sie noch heute mit RailNetwork und transformieren Sie Ihre Bahnbetriebe 
              mit modernster KI-Technologie.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                variant="secondary" 
                className="bg-white text-primary hover:bg-primary hover:text-white px-6 md:px-8 py-3 md:py-5 text-base md:text-lg rounded-full border-2 border-primary"
                onClick={handleDemoRequest}
              >
                Demo anfordern
              </Button>
              <Button 
                size="lg"
                variant="outline" 
                className="bg-white text-primary hover:bg-primary hover:text-white px-6 md:px-8 py-3 md:py-5 text-base md:text-lg rounded-full border-2 border-primary"
              >
                Kontakt aufnehmen
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