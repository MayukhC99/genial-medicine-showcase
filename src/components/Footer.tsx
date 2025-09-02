import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  Heart, 
  Mail, 
  Phone, 
  MapPin,
  ArrowUp,
  Linkedin,
  Twitter,
  Facebook
} from "lucide-react";

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
      title: "Products",
      links: [
        { label: "GeniLiv", href: "#medicines" },
        { label: "GeniBoost", href: "#medicines" },
        { label: "Genical-DS", href: "#medicines" },
        { label: "GeniPlex", href: "#medicines" }
      ]
    },
    {
      title: "Support",
      links: [
        { label: "Product Information", href: "#" },
        { label: "Safety Data", href: "#" },
        { label: "Medical Inquiries", href: "#" },
        { label: "Download Center", href: "#" }
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
              <div className="p-2 rounded-full bg-gradient-primary">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold">
                Genial Health Care
              </span>
            </div>
            
            <p className="text-background/80 leading-relaxed mb-6">
              Pioneering pharmaceutical excellence for over 25 years, delivering 
              innovative medicines that transform lives and advance healthcare worldwide.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-background/80">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-sm">info@genialhealthcare.com</span>
              </div>
              <div className="flex items-center gap-3 text-background/80">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-sm">+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-3 text-background/80">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-sm">Medical District, Healthcare Plaza</span>
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
                {section.links.map((link, linkIndex) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-background/80 hover:text-primary transition-colors duration-300 text-sm flex items-center group"
                    >
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        {link.label}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social Links & Newsletter */}
        <div className="mt-16 pt-8 border-t border-background/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            {/* Social Media */}
            <div className="flex items-center gap-4 animate-fade-in">
              <span className="text-background/80 text-sm font-medium">Follow Us:</span>
              <div className="flex gap-3">
                {[
                  { icon: Linkedin, href: "#" },
                  { icon: Twitter, href: "#" },
                  { icon: Facebook, href: "#" }
                ].map((social, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    size="icon"
                    className="h-10 w-10 rounded-full border border-background/20 hover:bg-primary hover:border-primary transition-all duration-300 hover:scale-110"
                  >
                    <social.icon className="h-4 w-4" />
                  </Button>
                ))}
              </div>
            </div>

            {/* Back to Top */}
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
      </div>

      {/* Copyright */}
      <Separator className="bg-background/20" />
      <div className="py-6">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/60">
            <p>
              © 2024 Genial Health Care Pvt. Ltd. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-primary transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="hover:text-primary transition-colors duration-300">
                Medical Disclaimer
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}