import { useState, useEffect, useRef } from 'react';
import { cn } from '../lib/utils';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: 'square' | 'video' | 'portrait' | 'auto';
  priority?: boolean;
  onLoad?: () => void;
  onError?: () => void;
}

const LazyImage = ({
  src,
  alt,
  className,
  aspectRatio = 'auto',
  priority = false,
  onLoad,
  onError,
}: LazyImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const [error, setError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const aspectRatioClasses = {
    square: 'aspect-square',
    video: 'aspect-video',
    portrait: 'aspect-[3/4]',
    auto: 'aspect-auto',
  };

  useEffect(() => {
    if (priority) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  useEffect(() => {
    if (!isInView || !src) return;

    const img = new Image();
    img.src = src;
    
    img.onload = () => {
      setIsLoaded(true);
      onLoad?.();
    };

    img.onerror = () => {
      setError(true);
      onError?.();
    };

    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [src, isInView, onLoad, onError]);

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
    <div 
      ref={containerRef}
      className={cn('relative overflow-hidden', aspectRatioClasses[aspectRatio], className)}
    >
      {/* Placeholder */}
      <div 
        className={cn(
          'absolute inset-0 bg-gray-200 transition-opacity duration-500',
          isLoaded ? 'opacity-0' : 'opacity-100'
        )}
      />
      
      {/* Loading skeleton */}
      {!isLoaded && isInView && (
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-gray-300/20 to-transparent animate-pulse" />
      )}

      {/* Actual image */}
      {isInView && (
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          className={cn(
            'absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out',
            isLoaded ? 'opacity-100 blur-0' : 'opacity-0 blur-sm'
          )}
          loading={priority ? 'eager' : 'lazy'}
        />
      )}
    </div>
  );
};

export default LazyImage;
