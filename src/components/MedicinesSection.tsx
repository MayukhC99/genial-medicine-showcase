import MedicineCard from "@/components/MedicineCard";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, User, PawPrint, ChevronDown } from "lucide-react";
import { useState } from "react";
export default function MedicinesSection() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };
  const humanMedicines = [{
    name: "GeniLiv",
    category: "Liver Care",
    description: "Advanced hepatoprotective formula designed to support liver function and promote hepatic regeneration.",
    features: ["Supports liver detoxification", "Promotes hepatic cell regeneration", "Reduces oxidative stress", "Improves liver enzyme levels"],
    isPopular: true
  }];
  const veterinaryMedicines = [{
    name: "Genical-DS Gold",
    category: "Calcium & Lactation",
    description: "Double strength calcium, phosphorus and Vitamin AD3 with galactagogues for enhanced milk production and better health.",
    features: ["Improves milk yield & health", "Enhances milk let-down", "Better growth, strong bones", "Butterfat in milk and SNF content"],
    isPopular: true
  }, {
    name: "Genical-DS",
    category: "Calcium Supplement",
    description: "Double power liquid feed supplement with calcium, phosphorus and Vitamin AD3 for improved milk production and health.",
    features: ["Increased milk production", "Better growth, strong bones", "Fulfills calcium & phosphorus needs", "Must for reproduction & lactation"]
  }, {
    name: "GeniBoost",
    category: "Immunomodulator",
    description: "Powerful immunomodulator that boosts and maintains immune system, reduces stress and prevents bacterial & viral outbreaks.",
    features: ["Boosts & maintains immune system", "Reduces stress, maintains homeostasis", "Improves WBC activity & FCR", "Can be used with antibiotics"],
    isPopular: true
  }, {
    name: "GeniLiv Vet",
    category: "Liver Tonic",
    description: "Powerful liver tonic for cattle & poultry that relieves anorexia, rejuvenates from hepatic problems and prevents fatty liver syndrome.",
    features: ["Relieves anorexia", "Rejuvenates from hepatic problems", "Prevents fatty liver syndrome", "Co-therapy with antibiotics"]
  }, {
    name: "GeniMix Bolus",
    category: "Probiotic & Enzyme",
    description: "Accomplished mixture of prebiotic, probiotic, enzyme & growth stimulants for improved ruminal function and appetite.",
    features: ["Prevents pathogenic bacteria", "Increases ruminal microflora", "Normalizes appetite in anorexia", "Helps prevent diarrhea"]
  }, {
    name: "GeniPlex",
    category: "B-Complex",
    description: "Complete B-complex rich in vitamins B1 and H for proper metabolism, nervous system function and energy conversion.",
    features: ["Transforms stunted growth", "Eliminates anaemia & anorexia", "Boosts immunity", "Supports pregnancy nutrition"],
    isPopular: true
  }, {
    name: "GromiVit",
    category: "Anti-Stress Vitamin",
    description: "Optimal powerful concentration of anti-stress liquid vitamin feed supplement for cattle and poultry.",
    features: ["Removes stress from vaccination/transport", "Builds body resistance to infection", "Improves growth & fertility", "Better egg & milk production"]
  }, {
    name: "GeniZole-NT Bolus",
    category: "Anti-Bacterial/Protozoal",
    description: "Unique combination for bacterial and protozoal infections including mixed gut infections, diarrhea and dysentery.",
    features: ["Bacterial & protozoal infections", "Mixed gut infections & diarrhea", "Calf scour treatment", "Bovine coccidiosis & enteritis"]
  }, {
    name: "GeniMol-Plus",
    category: "Pain & Fever Relief",
    description: "Highly effective in controlling fever, pain, inflammation and tissue swelling for systemic infections and musculoskeletal pain.",
    features: ["Controls fever & inflammation", "Mastitis & metritis treatment", "Musculoskeletal pain relief", "Post-surgical pain management"]
  }, {
    name: "PMelogen Injection",
    category: "NSAID Injection",
    description: "Anti-inflammatory, analgesic & antipyretic injection that relieves fever, pain and inflammation in various conditions.",
    features: ["Controls pyrexia", "Arthritis & osteoarthritis", "Mastitis & metritis", "Laminitis & pneumonia"]
  }, {
    name: "Improcef-S",
    category: "Antibiotic",
    description: "Powerful combination of Ceftriaxone with Sulbactam for serious bacterial infections and surgical prophylaxis.",
    features: ["Mastitis treatment", "Respiratory tract infections", "Septicaemia & meningitis", "Pre parturition & dystocia"],
    isPopular: true
  }, {
    name: "GeniMec",
    category: "Anti-Parasitic",
    description: "100% effective in killing both endo and ectoparasites, safe for pregnant animals throughout pregnancy.",
    features: ["Kills endo & ectoparasites", "Safe for pregnant animals", "Prolonged activity", "Fewer treatments required"]
  }, {
    name: "GeniOrm",
    category: "Anthelmintic",
    description: "Highly effective, tasty and safe broad spectrum anthelmintic for roundworms, tapeworms, lungworms and adult liver flukes.",
    features: ["Ovicidal & larvicidal", "Cysticidal & wormicidal", "Control all major worms", "Safe for all animals"]
  }, {
    name: "GeniFen Bolus",
    category: "Anthelmintic",
    description: "Broad-spectrum anthelmintic for gastrointestinal parasites with high safety margin and long-lasting action.",
    features: ["Wormicidal & larvicidal", "Wide margin of safety", "Faster intestinal absorption", "Short milk residue period"]
  }, {
    name: "Floxenro",
    category: "Antibacterial & Mucolytic",
    description: "Distinctive combination of antibacterial and mucolytic for respiratory infections and Mycoplasma control.",
    features: ["Rapid antibacterial activity", "Controls Mycoplasma", "Reduces respiratory complications", "Speedy recovery"]
  }, {
    name: "GeniZole-CT",
    category: "Antibacterial/Antiprotozoal",
    description: "Excellent combination of broad spectrum antibacterial and antiprotozoal for mixed infections in poultry.",
    features: ["Broad spectrum antibacterial", "Treats all types of diarrhea", "E. coli & Salmonella", "Fowl cholera & coryza"]
  }, {
    name: "Improlexin",
    category: "Water-Soluble Antibiotic",
    description: "Broad-spectrum water-soluble powder antibiotic with low protein binding and fast action for poultry.",
    features: ["Prevents early chick mortality", "Fast acting antibiotic", "Coryza & fowl typhoid", "Higher safety & efficacy"]
  }];
  return <section id="medicines" className="py-20 bg-gradient-subtle">
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
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">Medicines</h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover our comprehensive range of pharmaceutical products, each crafted with 
            precision and backed by rigorous research to deliver exceptional therapeutic outcomes.
          </p>
        </div>

        {/* Category Cards */}
        <div className="space-y-6 mb-16">
          {/* Human Healthcare Category */}
          <div className="rounded-2xl border border-border/50 bg-gradient-card shadow-medical overflow-hidden">
            <button onClick={() => toggleSection('human')} className="w-full flex items-center justify-between p-6 hover:bg-primary/5 transition-colors duration-300 group">
              <div className="flex items-center gap-4">
                <div className="p-4 rounded-xl bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-colors duration-300">
                  <User className="h-8 w-8 text-primary" />
                </div>
                <div className="text-left">
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground">Human Healthcare</h3>
                  <p className="text-muted-foreground mt-1">{humanMedicines.length} product{humanMedicines.length > 1 ? 's' : ''} available</p>
                </div>
              </div>
              <ChevronDown className={`h-8 w-8 text-primary transition-transform duration-500 ease-out ${expandedSection === 'human' ? 'rotate-180' : ''}`} />
            </button>
            
            <div className={`grid transition-all duration-500 ease-out ${expandedSection === 'human' ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
              <div className="overflow-hidden">
                <div className="p-6 pt-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {humanMedicines.map((medicine, index) => <div key={medicine.name} className={`transition-all duration-500 ${expandedSection === 'human' ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`} style={{
                  transitionDelay: expandedSection === 'human' ? `${index * 100}ms` : '0ms'
                }}>
                      <MedicineCard {...medicine} />
                    </div>)}
                </div>
              </div>
            </div>
          </div>

          {/* Veterinary Healthcare Category */}
          <div className="rounded-2xl border border-border/50 bg-gradient-card shadow-medical overflow-hidden">
            <button onClick={() => toggleSection('veterinary')} className="w-full flex items-center justify-between p-6 hover:bg-accent/5 transition-colors duration-300 group">
              <div className="flex items-center gap-4">
                <div className="p-4 rounded-xl bg-accent/10 border border-accent/20 group-hover:bg-accent/20 transition-colors duration-300">
                  <PawPrint className="h-8 w-8 text-accent" />
                </div>
                <div className="text-left">
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground">Veterinary Healthcare</h3>
                  <p className="text-muted-foreground mt-1">{veterinaryMedicines.length} products available</p>
                </div>
              </div>
              <ChevronDown className={`h-8 w-8 text-accent transition-transform duration-500 ease-out ${expandedSection === 'veterinary' ? 'rotate-180' : ''}`} />
            </button>
            
            <div className={`grid transition-all duration-500 ease-out ${expandedSection === 'veterinary' ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
              <div className="overflow-hidden">
                <div className="p-6 pt-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {veterinaryMedicines.map((medicine, index) => <div key={`vet-${medicine.name}`} className={`transition-all duration-500 ${expandedSection === 'veterinary' ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`} style={{
                  transitionDelay: expandedSection === 'veterinary' ? `${index * 100}ms` : '0ms'
                }}>
                      <MedicineCard {...medicine} />
                    </div>)}
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
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Contact Medical Team
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>;
}