import { useState, useEffect, useRef } from 'react';
import { cn } from '../lib/utils';

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

  // Generate a simple color placeholder
  const generateBlurPlaceholder = () => {
    // Return a simple color instead of SVG to avoid btoa issues
    return '#e5e7eb';
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
      {/* Initial color placeholder */}
      <div 
        className={cn(
          'absolute inset-0 transition-all duration-500',
          isLoaded ? 'opacity-0' : 'opacity-100'
        )}
        style={{
          backgroundColor: generateBlurPlaceholder(),
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
