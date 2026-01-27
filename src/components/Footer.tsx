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

  const footerSections = [
    {
      title: "Quick Links",
      links: [
        { label: "Home", href: "#home" },
        { label: "Medicines", href: "#medicines" },
        { label: "About Us", href: "#about" },
        { label: "Contact", href: "#contact" }
      ]
    },
    {
      title: "Human Healthcare",
      links: [
        { label: "GeniLiv", href: "/medicine/geniliv" }
      ]
    },
    {
      title: "Veterinary Products",
      links: [
        { label: "Genical-DS Gold", href: "/medicine/genical-ds-gold" },
        { label: "Genical-DS", href: "/medicine/genical-ds" },
        { label: "GeniBoost", href: "/medicine/geniboost" },
        { label: "GeniLiv Vet", href: "/medicine/geniliv-vet" },
        { label: "GeniMix Bolus", href: "/medicine/genimix-bolus" },
        { label: "GeniPlex", href: "/medicine/geniplex" },
        { label: "GromiVit", href: "/medicine/gromivit" },
        { label: "GeniZole-NT Bolus", href: "/medicine/genizole-nt-bolus" },
        { label: "GeniMol-Plus", href: "/medicine/genimol-plus" },
        { label: "PMelogen Injection", href: "/medicine/pmelogen-injection" },
        { label: "Improcef-S", href: "/medicine/improcef-s" },
        { label: "GeniMec", href: "/medicine/genimec" },
        { label: "GeniOrm", href: "/medicine/geniorm" },
        { label: "GeniFen Bolus", href: "/medicine/genifen-bolus" },
        { label: "Floxenro", href: "/medicine/floxenro" },
        { label: "GeniZole-CT", href: "/medicine/genizole-ct" },
        { label: "Improlexin", href: "/medicine/improlexin" }
      ]
    }
  ];

  return (
    <footer className="bg-foreground text-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-primary" />
      
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1 animate-fade-in">
            <div className="flex items-center gap-2 mb-6">
              <img 
                src={genialLogo} 
                alt="Genial Healthcare Logo" 
                className="h-10 w-10 rounded-lg object-cover"
              />
              <span className="text-xl font-bold">
                Genial Health Care
              </span>
            </div>
            
            <p className="text-background/80 leading-relaxed mb-6">
              Pioneering pharmaceutical excellence for over 15 years, delivering 
              innovative medicines that transform lives and advance healthcare worldwide.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-background/80">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-sm">genialhealthcare@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-background/80">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-sm">9433033466 | WhatsApp: 9123714025</span>
              </div>
              <div className="flex items-center gap-3 text-background/80">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-sm">ESER MINERAL COMPLEX, Kolkata - 700110</span>
              </div>
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section, sectionIndex) => (
            <div 
              key={section.title} 
              className="animate-fade-in"
              style={{ animationDelay: `${(sectionIndex + 1) * 200}ms` }}
            >
              <h3 className="text-lg font-bold mb-6 text-primary">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    {link.href.startsWith('/') ? (
                      <Link
                        to={link.href}
                        className="text-background/80 hover:text-primary transition-colors duration-300 text-sm flex items-center group"
                      >
                        <span className="group-hover:translate-x-1 transition-transform duration-300">
                          {link.label}
                        </span>
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        className="text-background/80 hover:text-primary transition-colors duration-300 text-sm flex items-center group"
                      >
                        <span className="group-hover:translate-x-1 transition-transform duration-300">
                          {link.label}
                        </span>
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Back to Top */}
        <div className="mt-16 pt-8 border-t border-background/20 flex justify-center">
          <Button
            variant="outline"
            size="sm"
            onClick={scrollToTop}
            className="group bg-transparent border-background/20 text-background hover:bg-primary hover:border-primary hover:text-white animate-fade-in"
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