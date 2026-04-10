import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

// Default images
import medicineBottle1 from "@/assets/medicine-bottle-1.jpg";
import medicineBottle2 from "@/assets/medicine-bottle-2.jpg";
import medicineBottle3 from "@/assets/medicine-bottle-3.jpg";
import medicineBox1 from "@/assets/medicine-box-1.jpg";

// Human GeniLiv images
import genilivBottleBox from "@/assets/products/geniliv-bottle-box.jpg";
import genilivBox from "@/assets/products/geniliv-box.jpg";

// Veterinary product images
import genicalDsGold from "@/assets/products/genical-ds-gold.jpg";
import genicalDs1 from "@/assets/products/genical-ds-1.jpg";
import genicalDs2 from "@/assets/products/genical-ds-2.jpg";
import genifenBolus1 from "@/assets/products/genifen-bolus-1.jpg";
import genifenBolus2 from "@/assets/products/genifen-bolus-2.jpg";
import genilivVet from "@/assets/products/geniliv-vet.jpg";
import genimec1 from "@/assets/products/genimec-1.jpg";
import genimec2 from "@/assets/products/genimec-2.jpg";
import genimec3 from "@/assets/products/genimec-3.jpg";
import genimixBolus from "@/assets/products/genimix-bolus.jpg";
import genimixForte1 from "@/assets/products/genimix-forte-1.jpeg";
import genimixForte2 from "@/assets/products/genimix-forte-2.jpeg";
import genimolPlus1 from "@/assets/products/genimol-plus-1.jpg";
import genimolPlus2 from "@/assets/products/genimol-plus-2.jpg";
import geniorm1 from "@/assets/products/geniorm-1.jpg";
import geniorm2 from "@/assets/products/geniorm-2.jpg";
import geniplex from "@/assets/products/geniplex.jpg";
import genizoleCt from "@/assets/products/genizole-ct.jpg";
import genizoleNt1 from "@/assets/products/genizole-nt-1.jpg";
import genizoleNt2 from "@/assets/products/genizole-nt-2.jpg";
import improcefS1 from "@/assets/products/improcef-s-1.jpg";
import improcefS2 from "@/assets/products/improcef-s-2.jpg";
import improlexin from "@/assets/products/improlexin.jpeg";
import pmelogen from "@/assets/products/pmelogen.jpg";
import gromivit from "@/assets/products/gromivit.jpg";
import geniboost from "@/assets/products/geniboost.jpg";
import floxenro from "@/assets/products/floxenro.jpg";
import improcid1 from "@/assets/products/improcid-1.jpg";
import improcid2 from "@/assets/products/improcid-2.jpg";
import improcid3 from "@/assets/products/improcid-3.jpg";

interface MedicineImageGalleryProps {
  medicineName: string;
  color?: string;
}

interface GalleryImage {
  src: string;
  alt: string;
  label: string;
}

// Image cache to store preloaded images
const imageCache = new Map<string, HTMLImageElement>();

const preloadImage = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    if (imageCache.has(src)) {
      resolve();
      return;
    }
    const img = new Image();
    img.onload = () => {
      imageCache.set(src, img);
      resolve();
    };
    img.onerror = reject;
    img.src = src;
  });
};

// Product-specific image configurations
const productImages: Record<string, GalleryImage[]> = {
  "geniliv": [
    { src: genilivBox, alt: "GeniLiv packaging box", label: "Packaging" },
    { src: genilivBottleBox, alt: "GeniLiv bottle with packaging", label: "Product View" }
  ],
  "genical-ds gold": [
    { src: genicalDsGold, alt: "Genical-DS Gold bottle", label: "Product View" }
  ],
  "genical-ds": [
    { src: genicalDs1, alt: "Genical-DS 5l bottle", label: "5l Bottle" },
    { src: genicalDs2, alt: "Genical-DS 1l & 500ml bottle", label: "1l & 500ml Bottles" }
  ],
  "geniboost": [
    { src: geniboost, alt: "GeniBoost product range", label: "Product Range" }
  ],
  "genifen bolus": [
    { src: genifenBolus1, alt: "GeniFen Bolus box", label: "Product View" },
    { src: genifenBolus2, alt: "GeniFen Bolus box with tablets", label: "Bolus" }
  ],
  "geniliv vet": [
    { src: genilivVet, alt: "Geniliv Vet product range", label: "Product Range" }
  ],
  "genimec": [
    { src: genimec1, alt: "Genimec Tablets", label: "Tablets" },
    { src: genimec2, alt: "Genimec Bolus", label: "Bolus" },
    { src: genimec3, alt: "Genimec injection", label: "Injection" }
  ],
  "genimix bolus": [
    { src: genimixBolus, alt: "GeniMix Bolus box", label: "Product View" }
  ],
  "genimix forte": [
    { src: genimixForte2, alt: "Genimix Forte front packaging", label: "Front View" },
    { src: genimixForte1, alt: "Genimix Forte back with composition", label: "Back View" }
  ],
  "genimol-plus": [
    { src: genimolPlus1, alt: "GeniMol Plus box", label: "Product View" },
    { src: genimolPlus2, alt: "GeniMol Plus Tablets", label: "Tablets" }
  ],
  "geniorm": [
    { src: geniorm1, alt: "Geniorm Bolus", label: "Bolus" },
    { src: geniorm2, alt: "Geniorm Oral suspension", label: "Oral suspension" }
  ],
  "geniplex": [
    { src: geniplex, alt: "GeniPlex product range", label: "Product Range" }
  ],
  "genizole-ct": [
    { src: genizoleCt, alt: "Genizole-CT powder container", label: "Product View" }
  ],
  "genizole-nt bolus": [
    { src: genizoleNt1, alt: "Genizole-NT Packaging box", label: "Packaging" },
    { src: genizoleNt2, alt: "Genizole-NT Bolus box with tablets", label: "Bolus" }
  ],
  "improcef-s": [
    { src: improcefS1, alt: "Improcef-S product range", label: "Product Range" },
    { src: improcefS2, alt: "Improcef-S injection kit", label: "Product Kit" }
  ],
  "improlexin": [
    { src: improlexin, alt: "Improlexin sachets", label: "Product View" }
  ],
  "pmelogen injection": [
    { src: pmelogen, alt: "Pmelogen Injection bottle with box", label: "Product View" }
  ],
  "gromivit": [
    { src: gromivit, alt: "Gromivit product range", label: "Product Range" }
  ],
  "floxenro": [
    { src: floxenro, alt: "Floxenro bottle", label: "Product View" }
  ],
  "improcid": [
    { src: improcid1, alt: "Improcid box packaging", label: "Packaging" },
    { src: improcid2, alt: "Improcid bottle", label: "Bottle" },
    { src: improcid3, alt: "Improcid box with bottle", label: "Product View" }
  ],
};

export default function MedicineImageGallery({ medicineName }: MedicineImageGalleryProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [zoomPosition, setZoomPosition] = useState({ x: 50, y: 50 });
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());
  const [isCurrentImageLoaded, setIsCurrentImageLoaded] = useState(false);
  const imageContainerRef = useRef<HTMLDivElement>(null);

  const defaultImages: GalleryImage[] = [
    { src: medicineBottle1, alt: `${medicineName} bottle view 1`, label: "Front View" },
    { src: medicineBottle2, alt: `${medicineName} bottle view 2`, label: "Side View" },
    { src: medicineBottle3, alt: `${medicineName} bottle view 3`, label: "Back View" },
    { src: medicineBox1, alt: `${medicineName} packaging`, label: "Packaging" }
  ];

  // Get product-specific images or fall back to defaults
  const normalizedName = medicineName.toLowerCase();
  const images = productImages[normalizedName] || defaultImages;

  // Preload all images on mount
  useEffect(() => {
    setCurrentImageIndex(0);
    setLoadedImages(new Set());
    
    images.forEach((image, index) => {
      preloadImage(image.src).then(() => {
        setLoadedImages(prev => new Set(prev).add(index));
      });
    });
  }, [medicineName]);

  // Check if current image is loaded
  useEffect(() => {
    setIsCurrentImageLoaded(loadedImages.has(currentImageIndex));
  }, [currentImageIndex, loadedImages]);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleImageSelect = (index: number) => {
    setCurrentImageIndex(index);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imageContainerRef.current) return;
    
    const rect = imageContainerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    
    setZoomPosition({ x: Math.max(0, Math.min(100, x)), y: Math.max(0, Math.min(100, y)) });
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <div className="space-y-4">
      {/* Main Image Display with Zoom Preview */}
      <div className="relative flex gap-4">
        {/* Main Image Container */}
        <div className="relative group flex-1">
          <div 
            ref={imageContainerRef}
            className="relative aspect-square bg-gradient-card rounded-xl overflow-hidden border border-border/50 cursor-crosshair"
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {!isCurrentImageLoaded ? (
              <div className="w-full h-full flex flex-col items-center justify-center bg-muted/30">
                <div className="relative">
                  <div className="w-16 h-16 border-4 border-primary/20 rounded-full"></div>
                  <div className="absolute inset-0 w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
                </div>
                <p className="mt-4 text-sm text-muted-foreground animate-pulse">Loading image...</p>
              </div>
            ) : (
              <img
                src={images[currentImageIndex].src}
                alt={images[currentImageIndex].alt}
                className="w-full h-full object-contain bg-muted/30"
              />
            )}
            
            {/* Hover Lens Indicator */}
            {isHovering && isCurrentImageLoaded && (
              <div 
                className="absolute w-24 h-24 border-2 border-primary/50 bg-primary/10 pointer-events-none rounded-sm"
                style={{
                  left: `calc(${zoomPosition.x}% - 48px)`,
                  top: `calc(${zoomPosition.y}% - 48px)`,
                }}
              />
            )}
            
            {/* Zoom Indicator */}
            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="bg-background/90 backdrop-blur-sm rounded-lg p-2 border border-border/50">
                <ZoomIn className="h-4 w-4 text-muted-foreground" />
              </div>
            </div>

            {/* Navigation Arrows */}
            {images.length > 1 && (
              <>
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute left-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-background/90 backdrop-blur-sm hover:bg-background"
                  onClick={prevImage}
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute right-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-background/90 backdrop-blur-sm hover:bg-background"
                  onClick={nextImage}
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </>
            )}

            {/* Image Counter */}
            {images.length > 1 && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="bg-background/90 backdrop-blur-sm rounded-lg px-3 py-1 border border-border/50">
                  <span className="text-sm text-muted-foreground">
                    {currentImageIndex + 1} / {images.length}
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Current Image Label */}
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2">
            <div className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
              {images[currentImageIndex].label}
            </div>
          </div>
        </div>

        {/* Zoom Preview Panel (Amazon-style) */}
        {isHovering && isCurrentImageLoaded && (
          <div className="hidden lg:block absolute left-[calc(100%+16px)] top-0 w-[400px] h-[400px] bg-background border border-border rounded-xl overflow-hidden shadow-xl z-50">
            <div 
              className="w-full h-full"
              style={{
                backgroundImage: `url(${images[currentImageIndex].src})`,
                backgroundSize: '200%',
                backgroundPosition: `${zoomPosition.x}% ${zoomPosition.y}%`,
              }}
            />
          </div>
        )}
      </div>

      {/* Thumbnail Navigation */}
      {images.length > 1 && (
        <div className="flex gap-2 justify-center pt-4">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => handleImageSelect(index)}
              className={`relative w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-200 hover:scale-105 ${
                index === currentImageIndex
                  ? 'border-primary shadow-lg'
                  : 'border-border/50 hover:border-primary/50'
              }`}
            >
              {loadedImages.has(index) ? (
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-contain bg-muted/30"
                />
              ) : (
                <Skeleton className="w-full h-full" />
              )}
              <div className={`absolute inset-0 transition-opacity ${
                index === currentImageIndex ? 'bg-primary/10' : 'bg-transparent hover:bg-primary/5'
              }`} />
            </button>
          ))}
        </div>
      )}

      {/* Interaction Tips */}
      <div className="text-center">
        <p className="text-xs text-muted-foreground">
          🖱️ Hover to see zoomed preview {images.length > 1 && "• 👆 Click thumbnails to switch views"}
        </p>
      </div>
    </div>
  );
}
