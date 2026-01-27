import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Pill, CheckCircle, Info } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface MedicineCardProps {
  name: string;
  category: string;
  description: string;
  features: string[];
  isPopular?: boolean;
}

export default function MedicineCard({ 
  name, 
  category, 
  description, 
  features, 
  isPopular = false 
}: MedicineCardProps) {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    // Convert name to URL-friendly slug (lowercase, spaces/special chars to hyphens)
    const medicineSlug = name
      .toLowerCase()
      .replace(/\s+/g, '-')           // spaces to hyphens
      .replace(/[()]/g, '')           // remove parentheses
      .replace(/-+/g, '-')            // collapse multiple hyphens
      .replace(/^-|-$/g, '');         // trim leading/trailing hyphens
    navigate(`/medicine/${medicineSlug}`);
  };

  return (
    <Card className="group relative bg-gradient-card border-border/50 hover:shadow-medical transition-all duration-500 hover:scale-105 transform overflow-hidden animate-fade-in">
      {/* Glow effect on hover */}
      <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-lg" />
      
      {isPopular && (
        <div className="absolute -top-1 -right-1 z-10">
          <Badge className="bg-accent text-accent-foreground animate-pulse-glow">
            Popular
          </Badge>
        </div>
      )}
      
      <CardHeader className="relative pb-4">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
            <Pill className="h-5 w-5 text-primary group-hover:animate-float" />
          </div>
          <Badge variant="secondary" className="text-xs font-medium">
            {category}
          </Badge>
        </div>
        
        <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
          {name}
        </CardTitle>
        
        <CardDescription className="text-muted-foreground leading-relaxed">
          {description}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="pt-0">
        <div className="space-y-3 mb-6">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="flex items-start gap-2 text-sm group-hover:translate-x-1 transition-transform duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
              <span className="text-muted-foreground">{feature}</span>
            </div>
          ))}
        </div>
        
        <div className="flex gap-2">
          <Button 
            variant="medical" 
            size="sm" 
            className="flex-1"
            onClick={handleViewDetails}
          >
            <Info className="h-4 w-4" />
            View Details
          </Button>
          <Button 
            variant="outline" 
            size="sm"
          >
            Download PDF
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}