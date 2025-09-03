import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MedicineBottle3D from "@/components/MedicineBottle3D";
import { 
  ArrowLeft, 
  CheckCircle, 
  AlertTriangle, 
  Clock,
  Pill,
  Heart,
  Shield,
  Download,
  Share2,
  Bookmark,
  Star
} from "lucide-react";

export default function MedicineDetails() {
  const { medicineName } = useParams<{ medicineName: string }>();
  const navigate = useNavigate();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [medicineName]);

  // Mock medicine data - in real app, this would come from API/database
  const medicineData: Record<string, any> = {
    "geniliv": {
      name: "GeniLiv",
      category: "Liver Care",
      color: "#16a34a",
      rating: 4.8,
      reviews: 234,
      description: "Advanced hepatoprotective formula designed to support liver function and promote hepatic regeneration with scientifically proven ingredients.",
      composition: [
        { ingredient: "Silymarin", strength: "140mg", percentage: 35 },
        { ingredient: "L-Ornithine L-Aspartate", strength: "250mg", percentage: 25 },
        { ingredient: "Vitamin E", strength: "10mg", percentage: 15 },
        { ingredient: "Zinc Sulfate", strength: "15mg", percentage: 10 },
        { ingredient: "Other Excipients", strength: "Q.S.", percentage: 15 }
      ],
      indications: [
        "Chronic hepatitis and liver cirrhosis",
        "Alcoholic liver disease", 
        "Drug-induced hepatotoxicity",
        "Fatty liver disease (NAFLD)",
        "Liver detoxification support"
      ],
      dosage: "One tablet twice daily with meals or as directed by physician",
      sideEffects: [
        { effect: "Mild gastrointestinal disturbance", severity: "low" },
        { effect: "Allergic reactions (rare)", severity: "medium" },
        { effect: "Headache", severity: "low" }
      ],
      contraindications: [
        "Hypersensitivity to any component",
        "Pregnancy and lactation (consult physician)",
        "Children under 12 years"
      ],
      clinicalData: {
        efficacy: 92,
        safety: 96,
        patientSatisfaction: 89
      },
      storage: "Store in a cool, dry place below 25°C. Keep away from direct sunlight.",
      shelfLife: "36 months from date of manufacture"
    },
    "geniboost": {
      name: "GeniBoost",
      category: "Immunity",
      color: "#dc2626",
      rating: 4.6,
      reviews: 189,
      description: "Comprehensive immune system enhancer with powerful antioxidants and essential nutrients for optimal wellness.",
      composition: [
        { ingredient: "Vitamin C", strength: "500mg", percentage: 30 },
        { ingredient: "Zinc Gluconate", strength: "15mg", percentage: 20 },
        { ingredient: "Vitamin D3", strength: "1000IU", percentage: 15 },
        { ingredient: "Elderberry Extract", strength: "200mg", percentage: 20 },
        { ingredient: "Other Excipients", strength: "Q.S.", percentage: 15 }
      ],
      indications: [
        "Immune system support",
        "Recovery from infections",
        "Seasonal wellness protection",
        "Antioxidant support",
        "Energy and vitality enhancement"
      ],
      dosage: "One tablet daily with breakfast or as directed by physician",
      sideEffects: [
        { effect: "Mild nausea", severity: "low" },
        { effect: "Stomach upset", severity: "low" }
      ],
      contraindications: [
        "Hypersensitivity to any component",
        "Autoimmune disorders (consult physician)",
        "Children under 6 years"
      ],
      clinicalData: {
        efficacy: 88,
        safety: 94,
        patientSatisfaction: 91
      },
      storage: "Store in a cool, dry place below 30°C. Keep container tightly closed.",
      shelfLife: "24 months from date of manufacture"
    },
    "genicalds": {
      name: "Genical-DS",
      category: "Bone Health", 
      color: "#0ea5e9",
      rating: 4.7,
      reviews: 312,
      description: "Dual-strength calcium supplement with Vitamin D3 for optimal bone health and enhanced calcium absorption.",
      composition: [
        { ingredient: "Calcium Carbonate", strength: "1000mg", percentage: 40 },
        { ingredient: "Vitamin D3", strength: "800IU", percentage: 25 },
        { ingredient: "Magnesium Oxide", strength: "100mg", percentage: 15 },
        { ingredient: "Vitamin K2", strength: "50mcg", percentage: 10 },
        { ingredient: "Other Excipients", strength: "Q.S.", percentage: 10 }
      ],
      indications: [
        "Osteoporosis prevention and treatment",
        "Calcium deficiency",
        "Bone fracture healing support",
        "Postmenopausal bone health",
        "Growing children and adolescents"
      ],
      dosage: "One tablet twice daily with meals or as directed by physician",
      sideEffects: [
        { effect: "Constipation", severity: "low" },
        { effect: "Bloating", severity: "low" },
        { effect: "Gas formation", severity: "low" }
      ],
      contraindications: [
        "Hypercalcemia",
        "Kidney stones",
        "Hypersensitivity to any component"
      ],
      clinicalData: {
        efficacy: 90,
        safety: 95,
        patientSatisfaction: 87
      },
      storage: "Store in a cool, dry place below 25°C. Protect from moisture.",
      shelfLife: "36 months from date of manufacture"
    },
    "geniplex": {
      name: "GeniPlex",
      category: "Multi-Vitamin",
      color: "#7c3aed",
      rating: 4.5,
      reviews: 267,
      description: "Complete multivitamin complex with essential minerals for comprehensive nutritional support and daily wellness.",
      composition: [
        { ingredient: "Vitamin Complex (A,B,C,D,E)", strength: "Various", percentage: 35 },
        { ingredient: "Mineral Blend", strength: "Various", percentage: 25 },
        { ingredient: "Antioxidant Complex", strength: "100mg", percentage: 20 },
        { ingredient: "Omega-3 Fatty Acids", strength: "50mg", percentage: 10 },
        { ingredient: "Other Excipients", strength: "Q.S.", percentage: 10 }
      ],
      indications: [
        "Nutritional deficiency prevention",
        "Daily wellness support",
        "Energy and metabolism boost",
        "Immune function support",
        "Stress and fatigue management"
      ],
      dosage: "One capsule daily with breakfast or as directed by physician",
      sideEffects: [
        { effect: "Mild nausea", severity: "low" },
        { effect: "Metallic taste", severity: "low" }
      ],
      contraindications: [
        "Hypervitaminosis",
        "Iron overload disorders",
        "Hypersensitivity to any component"
      ],
      clinicalData: {
        efficacy: 85,
        safety: 97,
        patientSatisfaction: 89
      },
      storage: "Store in a cool, dry place below 25°C. Keep away from children.",
      shelfLife: "24 months from date of manufacture"
    },
    "geniworm": {
      name: "GeniWorm",
      category: "Anti-Parasitic",
      color: "#ea580c",
      rating: 4.9,
      reviews: 156,
      description: "Effective broad-spectrum anthelmintic for treatment and prevention of parasitic worm infections.",
      composition: [
        { ingredient: "Albendazole", strength: "400mg", percentage: 80 },
        { ingredient: "Microcrystalline Cellulose", strength: "Q.S.", percentage: 15 },
        { ingredient: "Other Excipients", strength: "Q.S.", percentage: 5 }
      ],
      indications: [
        "Roundworm infections",
        "Hookworm infections", 
        "Whipworm infections",
        "Pinworm infections",
        "Parasitic prevention"
      ],
      dosage: "Single dose of 400mg or as directed by physician",
      sideEffects: [
        { effect: "Abdominal pain", severity: "low" },
        { effect: "Diarrhea", severity: "low" },
        { effect: "Nausea", severity: "medium" }
      ],
      contraindications: [
        "Pregnancy (first trimester)",
        "Hypersensitivity to benzimidazoles",
        "Children under 2 years"
      ],
      clinicalData: {
        efficacy: 96,
        safety: 93,
        patientSatisfification: 94
      },
      storage: "Store in a cool, dry place below 30°C. Protect from light.",
      shelfLife: "60 months from date of manufacture"
    }
  };

  const medicine = medicineData[medicineName?.toLowerCase() || "geniliv"] || medicineData.geniliv;

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Navigation Header */}
      <div className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Button 
              variant="ghost" 
              onClick={() => navigate(-1)}
              className="group"
            >
              <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              Back to Medicines
            </Button>
            
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Share2 className="h-4 w-4" />
                Share
              </Button>
              <Button variant="outline" size="sm">
                <Bookmark className="h-4 w-4" />
                Save
              </Button>
              <Button variant="medical" size="sm">
                <Download className="h-4 w-4" />
                Download PDF
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* 3D Medicine Visualization */}
          <div className="relative animate-fade-in">
            <div className="bg-gradient-card rounded-xl p-6 shadow-medical border border-border/50">
              <h3 className="text-xl font-semibold mb-4 text-center text-foreground">
                Interactive 3D Model
              </h3>
              <MedicineBottle3D medicineName={medicine.name} color={medicine.color} />
              <p className="text-xs text-muted-foreground text-center mt-4">
                🔄 Rotate • 🔍 Zoom • ✨ Interactive Medicine Bottle
              </p>
            </div>
          </div>

          {/* Medicine Overview */}
          <div className="space-y-6 animate-fade-in-up">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Badge variant="secondary" className="bg-primary/10 text-primary">
                  {medicine.category}
                </Badge>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-4 w-4 ${
                        i < Math.floor(medicine.rating) 
                          ? 'text-yellow-400 fill-yellow-400' 
                          : 'text-muted-foreground'
                      }`} 
                    />
                  ))}
                  <span className="text-sm text-muted-foreground ml-2">
                    {medicine.rating} ({medicine.reviews} reviews)
                  </span>
                </div>
              </div>
              
              <h1 className="text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
                {medicine.name}
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                {medicine.description}
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { label: "Efficacy", value: medicine.clinicalData.efficacy, icon: Heart, color: "text-success" },
                { label: "Safety", value: medicine.clinicalData.safety, icon: Shield, color: "text-primary" },
                { label: "Satisfaction", value: medicine.clinicalData.patientSatisfaction, icon: Star, color: "text-accent" }
              ].map((stat) => (
                <Card key={stat.label} className="text-center hover:shadow-medical transition-all duration-300 hover:scale-105">
                  <CardContent className="p-4">
                    <stat.icon className={`h-6 w-6 mx-auto mb-2 ${stat.color}`} />
                    <div className="text-2xl font-bold mb-1">{stat.value}%</div>
                    <div className="text-xs text-muted-foreground">{stat.label}</div>
                    <Progress value={stat.value} className="mt-2 h-1" />
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Key Benefits */}
            <Card className="shadow-medical">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Pill className="h-5 w-5 text-primary" />
                  Key Benefits
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {medicine.indications.slice(0, 4).map((indication: string, index: number) => (
                    <div key={index} className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-success mt-1 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{indication}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Detailed Information Tabs */}
        <div className="animate-fade-in">
          <Tabs defaultValue="composition" className="w-full">
            <TabsList className="grid w-full grid-cols-5 mb-8">
              <TabsTrigger value="composition">Composition</TabsTrigger>
              <TabsTrigger value="indications">Indications</TabsTrigger>
              <TabsTrigger value="dosage">Dosage & Administration</TabsTrigger>
              <TabsTrigger value="safety">Safety Profile</TabsTrigger>
              <TabsTrigger value="storage">Storage & Handling</TabsTrigger>
            </TabsList>

            <TabsContent value="composition" className="space-y-6">
              <Card className="shadow-medical">
                <CardHeader>
                  <CardTitle>Active & Inactive Ingredients</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {medicine.composition.map((comp: any, index: number) => (
                      <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-gradient-card border border-border/50">
                        <div className="flex-1">
                          <div className="font-semibold text-foreground">{comp.ingredient}</div>
                          <div className="text-sm text-muted-foreground">{comp.strength}</div>
                        </div>
                        <div className="flex items-center gap-4">
                          <Progress value={comp.percentage} className="w-20 h-2" />
                          <span className="text-sm font-medium w-12 text-right">{comp.percentage}%</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="indications" className="space-y-6">
              <Card className="shadow-medical">
                <CardHeader>
                  <CardTitle>Therapeutic Indications</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {medicine.indications.map((indication: string, index: number) => (
                      <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-gradient-card border border-border/50">
                        <CheckCircle className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                        <span className="text-foreground leading-relaxed">{indication}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="dosage" className="space-y-6">
              <Card className="shadow-medical">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-primary" />
                    Dosage & Administration
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-gradient-card rounded-lg p-6 border border-border/50">
                    <h4 className="font-semibold text-lg mb-4 text-foreground">Recommended Dosage</h4>
                    <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                      {medicine.dosage}
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h5 className="font-medium mb-3 text-foreground">Administration Guidelines:</h5>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li>• Take with food to reduce gastric irritation</li>
                          <li>• Maintain consistent timing for optimal results</li>
                          <li>• Complete the full course as prescribed</li>
                          <li>• Do not exceed recommended dosage</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-medium mb-3 text-foreground">Special Populations:</h5>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li>• Elderly: No dose adjustment required</li>
                          <li>• Renal impairment: Consult physician</li>
                          <li>• Hepatic impairment: Use with caution</li>
                          <li>• Pediatric: Not recommended under 12 years</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="safety" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="shadow-medical">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-orange-600">
                      <AlertTriangle className="h-5 w-5" />
                      Side Effects
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {medicine.sideEffects.map((effect: any, index: number) => (
                        <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-gradient-card border border-border/50">
                          <div className={`w-3 h-3 rounded-full mt-1 flex-shrink-0 ${
                            effect.severity === 'low' ? 'bg-green-400' :
                            effect.severity === 'medium' ? 'bg-yellow-400' : 'bg-red-400'
                          }`} />
                          <span className="text-sm text-muted-foreground">{effect.effect}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-medical">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-red-600">
                      <Shield className="h-5 w-5" />
                      Contraindications
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {medicine.contraindications.map((contraindication: string, index: number) => (
                        <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-gradient-card border border-border/50">
                          <AlertTriangle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{contraindication}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="storage" className="space-y-6">
              <Card className="shadow-medical">
                <CardHeader>
                  <CardTitle>Storage & Handling Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <h4 className="font-semibold text-foreground">Storage Conditions</h4>
                      <p className="text-muted-foreground leading-relaxed">{medicine.storage}</p>
                      
                      <div className="bg-gradient-card rounded-lg p-4 border border-border/50">
                        <div className="flex items-center gap-2 mb-2">
                          <Clock className="h-4 w-4 text-primary" />
                          <span className="font-medium text-foreground">Shelf Life</span>
                        </div>
                        <p className="text-muted-foreground">{medicine.shelfLife}</p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h4 className="font-semibold text-foreground">Handling Guidelines</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Keep container tightly closed when not in use</li>
                        <li>• Protect from moisture and humidity</li>
                        <li>• Keep out of reach of children and pets</li>
                        <li>• Do not use after expiration date</li>
                        <li>• Dispose of unused medicine properly</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* Call to Action */}
        <Card className="mt-16 shadow-medical bg-gradient-hero">
          <CardContent className="p-8 text-center">
            <h3 className="text-3xl font-bold mb-4 text-foreground">
              Need More Information?
            </h3>
            <p className="text-muted-foreground mb-6 text-lg max-w-2xl mx-auto">
              Contact our medical team for detailed prescribing information, 
              clinical studies, or any questions about {medicine.name}.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg">
                Contact Medical Team
              </Button>
              <Button variant="outline" size="lg">
                Download Complete Monograph
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}