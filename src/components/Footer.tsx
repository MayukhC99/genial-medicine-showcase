import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  Mail, 
  Phone, 
  MapPin,
  ArrowUp
} from "lucide-react";
import { Link } from "react-router-dom";
import genialLogo from "@/assets/genial-logo.jpeg";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "Medicines", href: "#medicines" },
    { label: "About Us", href: "#about" },
    { label: "Contact", href: "#contact" }
  ];

  const productLinks = [
    { label: "Geniliv", href: "/medicine/geniliv" },
    { label: "Genical-DS Gold", href: "/medicine/genical-ds-gold" },
    { label: "Genical-DS", href: "/medicine/genical-ds" },
    { label: "Geniboost", href: "/medicine/geniboost" },
    { label: "Geniliv Vet", href: "/medicine/geniliv-vet" },
    { label: "Genimix Bolus", href: "/medicine/genimix-bolus" },
    { label: "Geniplex", href: "/medicine/geniplex" },
    { label: "Gromivit", href: "/medicine/gromivit" },
    { label: "Genizole-NT Bolus", href: "/medicine/genizole-nt-bolus" },
    { label: "Genimol-Plus", href: "/medicine/genimol-plus" },
    { label: "Pmelogen Injection", href: "/medicine/pmelogen-injection" },
    { label: "Improcef-S", href: "/medicine/improcef-s" },
    { label: "Genimec", href: "/medicine/genimec" },
    { label: "Geniorm", href: "/medicine/geniorm" },
    { label: "Genifen Bolus", href: "/medicine/genifen-bolus" },
    { label: "Floxenro", href: "/medicine/floxenro" },
    { label: "Genizole-CT", href: "/medicine/genizole-ct" },
    { label: "Improlexin", href: "/medicine/improlexin" }
  ];

  return (
    <footer className="bg-foreground text-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-primary" />
      
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-4 animate-fade-in">
            <div className="flex items-center gap-2 mb-4">
              <img 
                src={genialLogo} 
                alt="Genial Healthcare Logo" 
                className="h-10 w-10 rounded-lg object-cover"
              />
              <span className="text-xl font-bold">
                Genial Health Care
              </span>
            </div>
            
            <p className="text-background/80 leading-relaxed mb-4 text-sm">
              Pioneering pharmaceutical excellence for over 15 years, delivering 
              innovative medicines that transform lives.
            </p>
            
            <div className="space-y-2">
              <div className="flex items-center gap-3 text-background/80">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-sm">genialhealthcare@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-background/80">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-sm">9433033466 | WhatsApp: 9123714025</span>
              </div>
              <div className="flex items-center gap-3 text-background/80">
                <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-sm">ESER MINERAL COMPLEX, Kolkata - 700110</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 animate-fade-in" style={{ animationDelay: '200ms' }}>
            <h3 className="text-lg font-bold mb-4 text-primary">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-background/80 hover:text-primary transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products - Multi-column grid */}
          <div className="lg:col-span-6 animate-fade-in" style={{ animationDelay: '400ms' }}>
            <h3 className="text-lg font-bold mb-4 text-primary">Products</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-2">
              {productLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className="text-background/80 hover:text-primary transition-colors duration-300 text-sm truncate"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Back to Top */}
        <div className="mt-10 pt-6 border-t border-background/20 flex justify-center">
          <Button
            variant="outline"
            size="sm"
            onClick={scrollToTop}
            className="group bg-transparent border-background/20 text-background hover:bg-primary hover:border-primary hover:text-white"
          >
            <ArrowUp className="h-4 w-4 group-hover:-translate-y-1 transition-transform duration-300" />
            Back to Top
          </Button>
        </div>
      </div>

      {/* Copyright */}
      <Separator className="bg-background/20" />
      <div className="py-6">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center text-sm text-background/60">
            <p>
              © 2013 Genial Health Care Pvt. Ltd. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}