import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import MedicineImageGallery from "@/components/MedicineImageGallery";
import { CompositionCard } from "@/components/medicine-details/CompositionCard";
import { DosageCard } from "@/components/medicine-details/DosageCard";
import { 
  ArrowLeft, 
  CheckCircle, 
  AlertTriangle, 
  Clock,
  Pill,
  Shield,
  Download,
  Share2,
  Copy,
  Check,
} from "lucide-react";
import { getMedicineBySlug, MedicineData } from "@/data/medicineData";

interface SideEffectItem {
  effect: string;
  severity: 'low' | 'medium' | 'high';
}

export default function MedicineDetails() {
  const { medicineName } = useParams<{ medicineName: string }>();
  const navigate = useNavigate();
  const location = useLocation();
  const [shareDialogOpen, setShareDialogOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  
  const productUrl = `${window.location.origin}${location.pathname}`;
  
  const handleCopyLink = async () => {
    await navigator.clipboard.writeText(productUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  
  const handleContactClick = () => {
    navigate('/');
    setTimeout(() => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [medicineName]);

  // Get medicine data from centralized data file
  const medicine: MedicineData | undefined = getMedicineBySlug(medicineName?.toLowerCase() || "geniliv");
  
  // If medicine not found, redirect to home
  if (!medicine) {
    return (
      <div className="min-h-screen bg-gradient-subtle flex items-center justify-center">
        <Card className="shadow-medical max-w-md">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
            <p className="text-muted-foreground mb-6">
              The medicine you're looking for doesn't exist.
            </p>
            <Button onClick={() => navigate('/')}>Go Back Home</Button>
          </CardContent>
        </Card>
      </div>
    );
  }

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
              <Button variant="outline" size="sm" onClick={() => setShareDialogOpen(true)}>
                <Share2 className="h-4 w-4" />
                Share
              </Button>
              <Button 
                variant="medical" 
                size="sm"
                onClick={() => {
                  if (medicine.pdfUrl) {
                    const link = document.createElement('a');
                    link.href = medicine.pdfUrl;
                    link.download = `${medicine.name}-brochure.pdf`;
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  }
                }}
                disabled={!medicine.pdfUrl}
                className="disabled:opacity-50 disabled:cursor-not-allowed"
              >
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
                Product Gallery
              </h3>
              <MedicineImageGallery medicineName={medicine.name} color={medicine.color} />
            </div>
          </div>

          {/* Medicine Overview */}
          <div className="space-y-6 animate-fade-in-up">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Badge variant="secondary" className="bg-primary/10 text-primary">
                  {medicine.category}
                </Badge>
              </div>
              
              <h1 className="text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
                {medicine.name}
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                {medicine.description}
              </p>
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
            <TabsList className="flex flex-wrap justify-start gap-2 h-auto p-2 mb-8 md:grid md:grid-cols-5 md:gap-0">
              <TabsTrigger value="composition" className="text-xs sm:text-sm whitespace-nowrap">Composition</TabsTrigger>
              <TabsTrigger value="indications" className="text-xs sm:text-sm whitespace-nowrap">Indications</TabsTrigger>
              <TabsTrigger value="dosage" className="text-xs sm:text-sm whitespace-nowrap">Dosage</TabsTrigger>
              <TabsTrigger value="safety" className="text-xs sm:text-sm whitespace-nowrap">Safety</TabsTrigger>
              <TabsTrigger value="storage" className="text-xs sm:text-sm whitespace-nowrap">Storage</TabsTrigger>
            </TabsList>

            <TabsContent value="composition" className="space-y-6">
              <CompositionCard 
                servingSize={medicine.servingSize} 
                composition={medicine.composition} 
              />
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
              <DosageCard dosage={medicine.dosage} />
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
                      {medicine.sideEffects.map((effect: SideEffectItem, index: number) => (
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
              <Button variant="hero" size="lg" onClick={handleContactClick}>
                Contact Medical Team
              </Button>
              <Button variant="outline" size="lg">
                Download Complete Monograph
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Share Dialog */}
      <Dialog open={shareDialogOpen} onOpenChange={setShareDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Share Product</DialogTitle>
            <DialogDescription>
              Copy the link below to share this medicine with others.
            </DialogDescription>
          </DialogHeader>
          <div className="flex items-center gap-2">
            <Input
              readOnly
              value={productUrl}
              className="flex-1"
            />
            <Button onClick={handleCopyLink} variant="outline" className="shrink-0">
              {copied ? (
                <>
                  <Check className="h-4 w-4 text-success" />
                  Copied
                </>
              ) : (
                <>
                  <Copy className="h-4 w-4" />
                  Copy
                </>
              )}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}