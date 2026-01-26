import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import medicineBottle1 from "@/assets/medicine-bottle-1.jpg";
import medicineBottle2 from "@/assets/medicine-bottle-2.jpg";
import medicineBottle3 from "@/assets/medicine-bottle-3.jpg";
import medicineBox1 from "@/assets/medicine-box-1.jpg";
import genilivBottleBox from "@/assets/geniliv-bottle-box.jpg";
import genilivBox from "@/assets/geniliv-box.jpg";

interface MedicineImageGalleryProps {
  medicineName: string;
  color?: string;
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

export default function MedicineImageGallery({ medicineName }: MedicineImageGalleryProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [zoomPosition, setZoomPosition] = useState({ x: 50, y: 50 });
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());
  const [isCurrentImageLoaded, setIsCurrentImageLoaded] = useState(false);
  const imageContainerRef = useRef<HTMLDivElement>(null);

  // Product-specific images
  const genilivImages = [
    { src: genilivBottleBox, alt: "GeniLiv bottle with packaging", label: "Product View" },
    { src: genilivBox, alt: "GeniLiv packaging box", label: "Packaging" }
  ];

  const defaultImages = [
    { src: medicineBottle1, alt: `${medicineName} bottle view 1`, label: "Front View" },
    { src: medicineBottle2, alt: `${medicineName} bottle view 2`, label: "Side View" },
    { src: medicineBottle3, alt: `${medicineName} bottle view 3`, label: "Back View" },
    { src: medicineBox1, alt: `${medicineName} packaging`, label: "Packaging" }
  ];

  // Use GeniLiv-specific images when applicable
  const images = medicineName.toLowerCase() === "geniliv" ? genilivImages : defaultImages;

  // Preload all images on mount
  useEffect(() => {
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
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="bg-background/90 backdrop-blur-sm rounded-lg px-3 py-1 border border-border/50">
                <span className="text-sm text-muted-foreground">
                  {currentImageIndex + 1} / {images.length}
                </span>
              </div>
            </div>
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

      {/* Interaction Tips */}
      <div className="text-center">
        <p className="text-xs text-muted-foreground">
          🖱️ Hover to see zoomed preview • 👆 Click thumbnails to switch views
        </p>
      </div>
    </div>
  );
}