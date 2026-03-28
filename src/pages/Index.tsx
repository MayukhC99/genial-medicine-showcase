import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import MedicinesSection from "@/components/MedicinesSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, [location.hash]);
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Genial Health Care | Pharmaceutical Manufacturing Company</title>
        <meta name="description" content="Leading pharmaceutical company delivering high-quality, reliable healthcare solutions. Trusted for consistent standards, responsible manufacturing, and products that healthcare professionals depend on." />
        <link rel="canonical" href="https://genialhealthcare.com/" />
      </Helmet>
      <Navigation />
      <main>
        <HeroSection />
        <MedicinesSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;