import React, { useState, useEffect } from 'react';
import data from '../../../data/config.json';

const GalleryCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const gallery = data.gallery;

  // Auto slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => 
        prevSlide === gallery.length - 1 ? 0 : prevSlide + 1
      );
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [gallery.length]);

  const goToSlide = (slideIndex) => {
    setCurrentSlide(slideIndex);
  };

  const goToPrevious = () => {
    setCurrentSlide(currentSlide === 0 ? gallery.length - 1 : currentSlide - 1);
  };

  const goToNext = () => {
    setCurrentSlide(currentSlide === gallery.length - 1 ? 0 : currentSlide + 1);
  };

  return (
    <div className="relative w-full max-w-md mx-auto">
      {/* Carousel container with 9:16 aspect ratio */}
      <div className="relative w-full" style={{ aspectRatio: '9/16' }}>
        <div className="overflow-hidden rounded-lg h-full">
          <div 
            className="flex transition-transform duration-500 ease-in-out h-full"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {gallery.map((image, index) => (
              <div key={index} className="w-full flex-shrink-0 h-full">
                <img
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Netflix-style Navigation arrows - positioned outside rounded container */}
        <button
          onClick={goToPrevious}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-gray-100 text-red-500 hover:text-red-600 rounded-full p-2 transition-all duration-200 hover:scale-110 z-20 border-2 border-red-500 hover:border-red-600"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" strokeWidth="2"/>
          </svg>
        </button>
        <button
          onClick={goToNext}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-gray-100 text-red-500 hover:text-red-600 rounded-full p-2 transition-all duration-200 hover:scale-110 z-20 border-2 border-red-500 hover:border-red-600"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" strokeWidth="2"/>
          </svg>
        </button>
      </div>

      {/* Dots indicator */}
      <div className="flex justify-center mt-4 space-x-2">
        {gallery.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'
            }`}
          />
        ))}
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
