import { useState } from "react";
import { ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import medicineBottle1 from "@/assets/medicine-bottle-1.jpg";
import medicineBottle2 from "@/assets/medicine-bottle-2.jpg";
import medicineBottle3 from "@/assets/medicine-bottle-3.jpg";
import medicineBox1 from "@/assets/medicine-box-1.jpg";

interface MedicineImageGalleryProps {
  medicineName: string;
  color?: string;
}

export default function MedicineImageGallery({ medicineName }: MedicineImageGalleryProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });

  // Mock images - in real app, these would be specific to each medicine
  const images = [
    { src: medicineBottle1, alt: `${medicineName} bottle view 1`, label: "Front View" },
    { src: medicineBottle2, alt: `${medicineName} bottle view 2`, label: "Side View" },
    { src: medicineBottle3, alt: `${medicineName} bottle view 3`, label: "Back View" },
    { src: medicineBox1, alt: `${medicineName} packaging`, label: "Packaging" }
  ];

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
    if (!isZoomed) return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    
    setZoomPosition({ x, y });
  };

  const handleMouseEnter = () => {
    setIsZoomed(true);
  };

  const handleMouseLeave = () => {
    setIsZoomed(false);
  };

  return (
    <div className="space-y-4">
      {/* Main Image Display */}
      <div className="relative group">
        <div 
          className="relative aspect-square bg-gradient-card rounded-xl overflow-hidden border border-border/50 cursor-zoom-in"
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img
            src={images[currentImageIndex].src}
            alt={images[currentImageIndex].alt}
            className={`w-full h-full object-cover transition-transform duration-300 ${
              isZoomed ? 'scale-150' : 'scale-100'
            }`}
            style={
              isZoomed
                ? {
                    transformOrigin: `${zoomPosition.x}% ${zoomPosition.y}%`,
                  }
                : {}
            }
          />
          
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

      {/* Thumbnail Navigation */}
      <div className="flex gap-2 justify-center">
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
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
            <div className={`absolute inset-0 transition-opacity ${
              index === currentImageIndex ? 'bg-primary/10' : 'bg-transparent hover:bg-primary/5'
            }`} />
          </button>
        ))}
      </div>

      {/* Interaction Tips */}
      <div className="text-center">
        <p className="text-xs text-muted-foreground">
          🖱️ Hover to zoom • 👆 Click thumbnails to switch views
        </p>
      </div>
    </div>
  );
}