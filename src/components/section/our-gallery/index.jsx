import React, { useState, useEffect, useRef } from 'react';
import data from '../../../data/config.json';

const GalleryCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(1); // Start at 1 for infinite loop
  const [isHovered, setIsHovered] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);
  const intervalRef = useRef(null);
  const carouselRef = useRef(null);
  const gallery = data.gallery;
  
  // Create infinite loop by duplicating first and last images
  const infiniteGallery = [gallery[gallery.length - 1], ...gallery, gallery[0]];

  // Auto slide functionality with pause on hover
  useEffect(() => {
    if (!isHovered && !isTransitioning) {
      intervalRef.current = setInterval(() => {
        goToNext();
      }, 4000); // Increased to 4 seconds for better Netflix feel
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [isHovered, isTransitioning]);

  // Handle infinite loop transitions
  useEffect(() => {
    if (currentSlide === 0) {
      // If at clone of last image, jump to real last image
      setTimeout(() => {
        setCurrentSlide(gallery.length);
        if (carouselRef.current) {
          carouselRef.current.style.transition = 'none';
          carouselRef.current.style.transform = `translateX(-${gallery.length * 100}%)`;
          setTimeout(() => {
            carouselRef.current.style.transition = 'transform 700ms ease-out';
          }, 50);
        }
      }, 700);
    } else if (currentSlide === gallery.length + 1) {
      // If at clone of first image, jump to real first image
      setTimeout(() => {
        setCurrentSlide(1);
        if (carouselRef.current) {
          carouselRef.current.style.transition = 'none';
          carouselRef.current.style.transform = `translateX(-${1 * 100}%)`;
          setTimeout(() => {
            carouselRef.current.style.transition = 'transform 700ms ease-out';
          }, 50);
        }
      }, 700);
    }
  }, [currentSlide, gallery.length]);

  const goToSlide = (slideIndex) => {
    const targetSlide = slideIndex + 1; // Adjust for infinite array
    if (targetSlide !== currentSlide) {
      setIsTransitioning(true);
      setCurrentSlide(targetSlide);
      setTimeout(() => setIsTransitioning(false), 700);
    }
  };

  const goToPrevious = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide(prev => prev - 1);
      setTimeout(() => setIsTransitioning(false), 700);
    }
  };

  const goToNext = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide(prev => prev + 1);
      setTimeout(() => setIsTransitioning(false), 700);
    }
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e) => {
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStartX || !touchEndX) return;
    
    const distance = touchStartX - touchEndX;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      goToNext();
    } else if (isRightSwipe) {
      goToPrevious();
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowLeft') {
        goToPrevious();
      } else if (event.key === 'ArrowRight') {
        goToNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide]);

  return (
    <div 
      className="relative w-full max-w-md mx-auto group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Carousel container with aspect ratio */}
      <div className="relative w-full" style={{ aspectRatio: '2/3' }}>
        <div className="overflow-hidden rounded-lg h-full shadow-2xl">
          <div 
            ref={carouselRef}
            className="flex transition-all duration-700 ease-out h-full transform"
            style={{ 
              transform: `translateX(-${currentSlide * 100}%)`,
              filter: isTransitioning ? 'brightness(0.9)' : 'brightness(1)'
            }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {infiniteGallery.map((image, index) => {
              // Calculate the actual gallery index for display purposes
              let displayIndex;
              if (index === 0) {
                displayIndex = gallery.length - 1; // Last image clone
              } else if (index === infiniteGallery.length - 1) {
                displayIndex = 0; // First image clone
              } else {
                displayIndex = index - 1; // Normal images
              }
              
              return (
                <div key={`${index}-${image}`} className="w-full flex-shrink-0 h-full relative">
                  <img
                    src={image}
                    alt={`Gallery image ${displayIndex + 1}`}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    loading={Math.abs(index - currentSlide) <= 1 ? "eager" : "lazy"}
                  />
                  {/* Netflix-style gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Netflix-style Navigation arrows - only show on hover */}
        <button
          onClick={goToPrevious}
          className={`absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/60 backdrop-blur-sm hover:bg-black/80 text-white rounded-full p-3 transition-all duration-300 z-20 border border-white/20 hover:border-white/40 hover:scale-110 shadow-lg ${
            isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'
          } ${isTransitioning ? 'pointer-events-none' : ''}`}
          disabled={isTransitioning}
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" strokeWidth="2"/>
          </svg>
        </button>
        <button
          onClick={goToNext}
          className={`absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/60 backdrop-blur-sm hover:bg-black/80 text-white rounded-full p-3 transition-all duration-300 z-20 border border-white/20 hover:border-white/40 hover:scale-110 shadow-lg ${
            isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'
          } ${isTransitioning ? 'pointer-events-none' : ''}`}
          disabled={isTransitioning}
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" strokeWidth="2"/>
          </svg>
        </button>
      </div>

      {/* Enhanced dots indicator with Netflix-style */}
      <div className="flex justify-center mt-6 space-x-3">
        {gallery.map((_, index) => {
          const isActive = ((currentSlide - 1) % gallery.length + gallery.length) % gallery.length === index;
          return (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`relative transition-all duration-300 hover:scale-125 ${
                isActive 
                  ? 'w-8 h-2 bg-red-600 rounded-full' 
                  : 'w-2 h-2 bg-white/50 hover:bg-white/75 rounded-full'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            >
              {isActive && (
                <div className="absolute inset-0 bg-red-600 rounded-full animate-pulse"></div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default function OurGallery() {
  return (
    <div>
      <h2 className="text-lg leading-5 text-white font-bold mb-4">
        Our Gallery
      </h2>
      <GalleryCarousel />
    </div>
  );
}
