import MedicineCard from "@/components/MedicineCard";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, User, PawPrint, ChevronDown } from "lucide-react";
import { useState } from "react";

export default function MedicinesSection() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const humanMedicines = [
    {
      name: "GeniLiv",
      category: "Liver Care",
      description: "Advanced hepatoprotective formula designed to support liver function and promote hepatic regeneration.",
      features: [
        "Supports liver detoxification",
        "Promotes hepatic cell regeneration",
        "Reduces oxidative stress",
        "Improves liver enzyme levels"
      ],
      isPopular: true
    }
  ];

  const veterinaryMedicines = [
    {
      name: "GeniLiv",
      category: "Liver Care",
      description: "Advanced hepatoprotective formula designed to support liver function and promote hepatic regeneration.",
      features: [
        "Supports liver detoxification",
        "Promotes hepatic cell regeneration",
        "Reduces oxidative stress",
        "Improves liver enzyme levels"
      ],
      isPopular: true
    },
    {
      name: "GeniBoost",
      category: "Immunity",
      description: "Comprehensive immune system enhancer with powerful antioxidants and essential nutrients.",
      features: [
        "Boosts natural immunity",
        "Rich in antioxidants",
        "Supports energy metabolism",
        "Enhances overall wellness"
      ]
    },
    {
      name: "Genical-DS",
      category: "Bone Health",
      description: "Dual-strength calcium supplement with Vitamin D3 for optimal bone health and calcium absorption.",
      features: [
        "High bioavailable calcium",
        "Enhanced with Vitamin D3",
        "Supports bone density",
        "Prevents calcium deficiency"
      ]
    },
    {
      name: "GeniPlex",
      category: "Multi-Vitamin",
      description: "Complete multivitamin complex with essential minerals for comprehensive nutritional support.",
      features: [
        "Complete vitamin profile",
        "Essential mineral blend",
        "Supports daily nutrition",
        "Enhances energy levels"
      ],
      isPopular: true
    },
    {
      name: "GeniWorm",
      category: "Anti-Parasitic",
      description: "Effective broad-spectrum anthelmintic for treatment and prevention of parasitic infections.",
      features: [
        "Broad-spectrum efficacy",
        "Safe for all age groups",
        "Single-dose treatment",
        "Prevents reinfection"
      ]
    },
    {
      name: "GeniZol-MT",
      category: "Anti-Fungal",
      description: "Advanced antifungal medication with enhanced bioavailability for effective fungal treatment.",
      features: [
        "Rapid antifungal action",
        "Enhanced bioavailability",
        "Minimal side effects",
        "Effective against resistant strains"
      ]
    },
    {
      name: "GeniZol-CT",
      category: "Combination Therapy",
      description: "Synergistic combination therapy for comprehensive treatment of mixed infections.",
      features: [
        "Dual-action formula",
        "Broad antimicrobial spectrum",
        "Reduced treatment duration",
        "Enhanced therapeutic efficacy"
      ]
    },
    {
      name: "Improcef",
      category: "Antibiotic",
      description: "Third-generation cephalosporin antibiotic for serious bacterial infections treatment.",
      features: [
        "Broad-spectrum antibiotic",
        "Hospital-grade efficacy",
        "Excellent tissue penetration",
        "Low resistance development"
      ]
    },
    {
      name: "GeniFen",
      category: "Pain Relief",
      description: "Fast-acting analgesic and anti-inflammatory medication for effective pain management.",
      features: [
        "Rapid pain relief",
        "Anti-inflammatory action",
        "Long-lasting effect",
        "Minimal gastric irritation"
      ],
      isPopular: true
    }
  ];

  return (
    <section id="medicines" className="py-20 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="h-6 w-6 text-primary animate-pulse-glow" />
            <span className="text-primary font-semibold tracking-wide uppercase text-sm">
              Our Medicine Portfolio
            </span>
            <Sparkles className="h-6 w-6 text-primary animate-pulse-glow" />
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Innovative Medicines
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover our comprehensive range of pharmaceutical products, each crafted with 
            precision and backed by rigorous research to deliver exceptional therapeutic outcomes.
          </p>
        </div>

        {/* Category Cards */}
        <div className="space-y-6 mb-16">
          {/* Human Healthcare Category */}
          <div className="rounded-2xl border border-border/50 bg-gradient-card shadow-medical overflow-hidden">
            <button
              onClick={() => toggleSection('human')}
              className="w-full flex items-center justify-between p-6 hover:bg-primary/5 transition-colors duration-300 group"
            >
              <div className="flex items-center gap-4">
                <div className="p-4 rounded-xl bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-colors duration-300">
                  <User className="h-8 w-8 text-primary" />
                </div>
                <div className="text-left">
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground">Human Healthcare</h3>
                  <p className="text-muted-foreground mt-1">{humanMedicines.length} product{humanMedicines.length > 1 ? 's' : ''} available</p>
                </div>
              </div>
              <ChevronDown 
                className={`h-8 w-8 text-primary transition-transform duration-500 ease-out ${
                  expandedSection === 'human' ? 'rotate-180' : ''
                }`} 
              />
            </button>
            
            <div
              className={`grid transition-all duration-500 ease-out ${
                expandedSection === 'human' 
                  ? 'grid-rows-[1fr] opacity-100' 
                  : 'grid-rows-[0fr] opacity-0'
              }`}
            >
              <div className="overflow-hidden">
                <div className="p-6 pt-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {humanMedicines.map((medicine, index) => (
                    <div
                      key={medicine.name}
                      className={`transition-all duration-500 ${
                        expandedSection === 'human' 
                          ? 'translate-y-0 opacity-100' 
                          : 'translate-y-4 opacity-0'
                      }`}
                      style={{ transitionDelay: expandedSection === 'human' ? `${index * 100}ms` : '0ms' }}
                    >
                      <MedicineCard {...medicine} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Veterinary Healthcare Category */}
          <div className="rounded-2xl border border-border/50 bg-gradient-card shadow-medical overflow-hidden">
            <button
              onClick={() => toggleSection('veterinary')}
              className="w-full flex items-center justify-between p-6 hover:bg-accent/5 transition-colors duration-300 group"
            >
              <div className="flex items-center gap-4">
                <div className="p-4 rounded-xl bg-accent/10 border border-accent/20 group-hover:bg-accent/20 transition-colors duration-300">
                  <PawPrint className="h-8 w-8 text-accent" />
                </div>
                <div className="text-left">
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground">Veterinary Healthcare</h3>
                  <p className="text-muted-foreground mt-1">{veterinaryMedicines.length} products available</p>
                </div>
              </div>
              <ChevronDown 
                className={`h-8 w-8 text-accent transition-transform duration-500 ease-out ${
                  expandedSection === 'veterinary' ? 'rotate-180' : ''
                }`} 
              />
            </button>
            
            <div
              className={`grid transition-all duration-500 ease-out ${
                expandedSection === 'veterinary' 
                  ? 'grid-rows-[1fr] opacity-100' 
                  : 'grid-rows-[0fr] opacity-0'
              }`}
            >
              <div className="overflow-hidden">
                <div className="p-6 pt-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {veterinaryMedicines.map((medicine, index) => (
                    <div
                      key={`vet-${medicine.name}`}
                      className={`transition-all duration-500 ${
                        expandedSection === 'veterinary' 
                          ? 'translate-y-0 opacity-100' 
                          : 'translate-y-4 opacity-0'
                      }`}
                      style={{ transitionDelay: expandedSection === 'veterinary' ? `${index * 100}ms` : '0ms' }}
                    >
                      <MedicineCard {...medicine} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center animate-fade-in-up">
          <div className="bg-gradient-card rounded-2xl p-8 shadow-medical border border-border/50">
            <h3 className="text-3xl font-bold mb-4 text-foreground">
              Need Detailed Information?
            </h3>
            <p className="text-muted-foreground mb-6 text-lg">
              Get comprehensive product details, prescribing information, and clinical data
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" className="group">
                Download Complete Catalog
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg">
                Contact Medical Team
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}