import { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface ProgressiveImageProps {
  src: string;
  alt: string;
  className?: string;
  thumbnailClassName?: string;
  aspectRatio?: 'square' | 'video' | 'portrait' | 'auto';
  priority?: boolean;
  onLoad?: () => void;
  onError?: () => void;
}

const ProgressiveImage = ({
  src,
  alt,
  className,
  thumbnailClassName,
  aspectRatio = 'auto',
  priority = false,
  onLoad,
  onError,
}: ProgressiveImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [thumbnailSrc, setThumbnailSrc] = useState<string>('');
  const imgRef = useRef<HTMLImageElement>(null);
  const thumbnailRef = useRef<HTMLImageElement>(null);

  // Generate thumbnail URL with blur placeholder
  const generateThumbnailUrl = (originalSrc: string) => {
    // For now, we'll use the same image but add blur via CSS
    // In a real implementation, you might use a CDN or service to generate thumbnails
    return originalSrc;
  };

  // Generate a data URI for a simple blur placeholder
  const generateBlurPlaceholder = () => {
    // Simple SVG blur placeholder
    const svg = `
      <svg width="40" height="40" xmlns="http://www.w3.org/2000/svg">
        <rect width="100%" height="100%" fill="#e5e7eb"/>
        <rect width="100%" height="100%" fill="#d1d5db" opacity="0.5"/>
      </svg>
    `;
    return `data:image/svg+xml;base64,${btoa(svg)}`;
  };

  useEffect(() => {
    setThumbnailSrc(generateThumbnailUrl(src));
  }, [src]);

  useEffect(() => {
    if (!src) return;

    // Load thumbnail first
    if (thumbnailRef.current && thumbnailSrc) {
      thumbnailRef.current.src = thumbnailSrc;
    }

    // Load full image
    const img = new Image();
    img.src = src;
    
    img.onload = () => {
      setIsLoaded(true);
      setIsLoading(false);
      onLoad?.();
    };

    img.onerror = () => {
      setError(true);
      setIsLoading(false);
      onError?.();
    };

    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [src, thumbnailSrc, onLoad, onError]);

  const aspectRatioClasses = {
    square: 'aspect-square',
    video: 'aspect-video',
    portrait: 'aspect-[3/4]',
    auto: 'aspect-auto',
  };

  if (error) {
    return (
      <div className={cn(
        'flex items-center justify-center bg-muted border border-border rounded-lg',
        aspectRatioClasses[aspectRatio],
        className
      )}>
        <div className="text-center p-4">
          <div className="text-muted-foreground text-sm">
            Failed to load image
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={cn('relative overflow-hidden', aspectRatioClasses[aspectRatio], className)}>
      {/* Initial blur placeholder */}
      <div 
        className={cn(
          'absolute inset-0 transition-all duration-500',
          isLoaded ? 'opacity-0' : 'opacity-100'
        )}
        style={{
          backgroundImage: `url(${generateBlurPlaceholder()})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(20px)',
          transform: 'scale(1.1)',
        }}
      />

      {/* Loading skeleton overlay */}
      {isLoading && (
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-muted-foreground/10 to-transparent animate-pulse" />
      )}

      {/* Thumbnail/Blur placeholder */}
      <img
        ref={thumbnailRef}
        alt=""
        className={cn(
          'absolute inset-0 w-full h-full object-cover transition-all duration-700',
          isLoaded ? 'opacity-0 scale-110 blur-xl' : 'opacity-50 scale-100 blur-lg',
          thumbnailClassName
        )}
        loading={priority ? 'eager' : 'lazy'}
      />

      {/* Full quality image */}
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        className={cn(
          'absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-out',
          isLoaded ? 'opacity-100 scale-100 blur-0' : 'opacity-0 scale-105 blur-sm',
          className
        )}
        loading={priority ? 'eager' : 'lazy'}
      />

      {/* Subtle gradient overlay for depth */}
      <div className={cn(
        'absolute inset-0 bg-gradient-to-t from-black/5 to-transparent pointer-events-none transition-opacity duration-500',
        isLoaded ? 'opacity-100' : 'opacity-0'
      )} />
    </div>
  );
};

export default ProgressiveImage;
