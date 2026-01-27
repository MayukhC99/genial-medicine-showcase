import { Button } from "@/components/ui/button";
import { ArrowRight, Stethoscope, Award, Users } from "lucide-react";
import heroImage from "@/assets/medical-hero.jpg";

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-subtle pt-20 md:pt-16">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Genial Healthcare veterinary and pharmaceutical products" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 opacity-30 animate-float">
        <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
          <Stethoscope className="h-8 w-8 text-primary" />
        </div>
      </div>
      
      <div className="absolute top-40 right-20 opacity-30 animate-float" style={{animationDelay: '1s'}}>
        <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
          <Award className="h-6 w-6 text-accent" />
        </div>
      </div>
      
      <div className="absolute bottom-32 left-20 opacity-30 animate-float" style={{animationDelay: '2s'}}>
        <div className="w-14 h-14 rounded-full bg-success/20 flex items-center justify-center">
          <Users className="h-7 w-7 text-success" />
        </div>
      </div>
      
      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div className="animate-fade-in-up">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent leading-tight">
            Genial Health Care
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Pioneering pharmaceutical excellence with innovative medicines 
            that transform lives and advance healthcare worldwide
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button variant="hero" size="xl" className="group">
              Explore Our Medicines
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="xl">
              Contact Us
            </Button>
          </div>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 animate-slide-in-right">
          <div className="text-center group">
            <div className="text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
              15+
            </div>
            <div className="text-muted-foreground">Years of Excellence</div>
          </div>
          <div className="text-center group">
            <div className="text-4xl font-bold text-accent mb-2 group-hover:scale-110 transition-transform duration-300">
              18
            </div>
            <div className="text-muted-foreground">Pharmaceutical Products</div>
          </div>
          <div className="text-center group">
            <div className="text-4xl font-bold text-success mb-2 group-hover:scale-110 transition-transform duration-300">
              1M+
            </div>
            <div className="text-muted-foreground">Lives Improved</div>
          </div>
        </div>
      </div>
    </section>
  );
}