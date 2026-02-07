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
import genilivBottleBox from "@/assets/geniliv-bottle-box.jpg";
import genilivBox from "@/assets/geniliv-box.jpg";

// Veterinary product images
import genicalDsGold from "@/assets/products/genical-ds-gold.jpeg";
import genicalDs from "@/assets/products/genical-ds.jpeg";
import genifenBolus from "@/assets/products/genifen-bolus.jpeg";
import genilivVet from "@/assets/products/geniliv-vet.jpeg";
import genimec1 from "@/assets/products/genimec-1.jpeg";
import genimec2 from "@/assets/products/genimec-2.jpeg";
import genimixBolus from "@/assets/products/genimix-bolus.jpeg";
import genimolPlus from "@/assets/products/genimol-plus.jpeg";
import geniorm1 from "@/assets/products/geniorm-1.jpeg";
import geniorm2 from "@/assets/products/geniorm-2.jpeg";
import geniorm3 from "@/assets/products/geniorm-3.jpeg";
import geniplex from "@/assets/products/geniplex.jpeg";
import genizoleCt from "@/assets/products/genizole-ct.jpeg";
import genizoleNt from "@/assets/products/genizole-nt.jpeg";
import improcefS from "@/assets/products/improcef-s.jpeg";
import improlexin from "@/assets/products/improlexin.jpeg";
import pmelogen from "@/assets/products/pmelogen.jpeg";

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
    { src: genilivBottleBox, alt: "GeniLiv bottle with packaging", label: "Product View" },
    { src: genilivBox, alt: "GeniLiv packaging box", label: "Packaging" }
  ],
  "genical-ds gold": [
    { src: genicalDsGold, alt: "Genical-DS Gold bottle", label: "Product View" }
  ],
  "genical-ds": [
    { src: genicalDs, alt: "Genical-DS bottle", label: "Product View" }
  ],
  "genifen bolus": [
    { src: genifenBolus, alt: "GeniFen Bolus box with tablets", label: "Product View" }
  ],
  "geniliv vet": [
    { src: genilivVet, alt: "GeniLiv Vet product range", label: "Product Range" }
  ],
  "genimec": [
    { src: genimec1, alt: "Genimec product range", label: "Product Range" },
    { src: genimec2, alt: "Genimec injection with box", label: "Injection" }
  ],
  "genimix bolus": [
    { src: genimixBolus, alt: "GeniMix Bolus box with tablets", label: "Product View" }
  ],
  "genimol plus": [
    { src: genimolPlus, alt: "GeniMol Plus box", label: "Product View" }
  ],
  "geniorm": [
    { src: geniorm2, alt: "GeniOrm packaging box", label: "Packaging" },
    { src: geniorm1, alt: "GeniOrm box with blister strips", label: "Bolus" },
    { src: geniorm3, alt: "GeniOrm Micronised suspension", label: "Oral suspension" }
  ],
  "geniplex": [
    { src: geniplex, alt: "GeniPlex product range", label: "Product Range" }
  ],
  "genizole-ct": [
    { src: genizoleCt, alt: "Genizole-CT powder container", label: "Product View" }
  ],
  "genizole-nt bolus": [
    { src: genizoleNt, alt: "Genizole-NT Bolus box with tablets", label: "Product View" }
  ],
  "improcef-s": [
    { src: improcefS, alt: "Improcef-S injection kit", label: "Product Kit" }
  ],
  "improlexin": [
    { src: improlexin, alt: "Improlexin sachets", label: "Product View" }
  ],
  "pmelogen injection": [
    { src: pmelogen, alt: "Pmelogen Injection bottle with box", label: "Product View" }
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
              <Skeleton className="w-full h-full" />
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
