import React from 'react';
import TitleInfo from '../title-info';
import BreakingNews from '../breaking-news';
import Bridegroom from '../bride-groom';
import LoveStory from '../love-story';
import OurGallery from '../our-gallery';
import WishSection from '../wish';
import Footer from '../footer';
import data from '../../../data/config.json';
import SongButton from '../../ui/song-button';
import Gift from '../gift'; // Assuming gift is a component
import Reception from '../reception'; // Assuming reception is a component
import useScrollAnimation from '../../../hooks/useScrollAnimation';

// Animated wrapper component
const AnimatedSection = ({ children, delay = 0, animation = 'fade-up' }) => {
  const [ref, isVisible] = useScrollAnimation();
  
  const getAnimationClasses = () => {
    const baseClasses = 'transition-all duration-700 ease-out';
    const visibleClasses = 'opacity-100 translate-y-0 translate-x-0 scale-100';
    
    switch (animation) {
      case 'fade-up':
        return `${baseClasses} ${isVisible ? visibleClasses : 'opacity-0 translate-y-8'}`;
      case 'slide-left':
        return `${baseClasses} ${isVisible ? visibleClasses : 'opacity-0 -translate-x-8'}`;
      case 'slide-right':
        return `${baseClasses} ${isVisible ? visibleClasses : 'opacity-0 translate-x-8'}`;
      case 'scale':
        return `${baseClasses} ${isVisible ? visibleClasses : 'opacity-0 scale-95'}`;
      default:
        return `${baseClasses} ${isVisible ? visibleClasses : 'opacity-0 translate-y-8'}`;
    }
  };

  return (
    <div
      ref={ref}
      className={getAnimationClasses()}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default function DetailInfo() {
  const [mediaRef, isMediaVisible] = useScrollAnimation();
  
  return (
    <div className="space-y-5 pb-10 mt-2">
      {/* Conditional rendering based on config */}
      {data.use_video ? (
        <video 
          ref={mediaRef}
          className={`w-full rounded-lg transition-all duration-1000 ease-out ${
            isMediaVisible 
              ? 'opacity-100 translate-y-0 scale-100' 
              : 'opacity-0 translate-y-8 scale-95'
          }`}
          autoPlay 
          muted
          loop
        >
          <source src={data.url_video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <img
          ref={mediaRef}
          className={`w-full rounded-lg aspect-video object-cover transition-all duration-1000 ease-out ${
            isMediaVisible 
              ? 'opacity-100 translate-y-0 scale-100' 
              : 'opacity-0 translate-y-8 scale-95'
          }`}
          src={data.video_replacement}
          alt="Wedding Cover"
        />
      )}

      <div className="px-4 space-y-4">
        <AnimatedSection delay={100} animation="slide-left">
          <TitleInfo />
        </AnimatedSection>
        
        {data.show_menu.breaking_news && (
          <AnimatedSection delay={200} animation="slide-right">
            <BreakingNews />
          </AnimatedSection>
        )}
        
        {data.show_menu.bride_and_groom && (
          <AnimatedSection delay={300} animation="fade-up">
            <Bridegroom />
          </AnimatedSection>
        )}
        
        {data.show_menu.reception && (
          <AnimatedSection delay={400} animation="slide-left">
            <Reception />
          </AnimatedSection>
        )}
        
        {data.show_menu.love_story && (
          <AnimatedSection delay={500} animation="slide-right">
            <LoveStory />
          </AnimatedSection>
        )}
        
        {data.show_menu.gallery && (
          <AnimatedSection delay={600} animation="scale">
            <OurGallery gallery={data.gallery} show_menu={data.show_menu} />
          </AnimatedSection>
        )}
        
        {data.show_menu.gift && (
          <AnimatedSection delay={700} animation="slide-left">
            <Gift />
          </AnimatedSection>
        )}
        
        <AnimatedSection delay={800} animation="fade-up">
          <div className="space-y-2">
            <h2 className="text-lg leading-5 text-white font-bold mb-4">
              Location
            </h2>
          </div>
        </AnimatedSection>
        
        <AnimatedSection delay={900} animation="scale">
          <div className="text-center pb-4">
            <div className="mb-5">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3954.9839907468668!2d110.2801894!3d-7.5767207999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a8bb5aab69a41%3A0x9e8788d66dfb950f!2sGedung%20Muhammadiyah%20Bakalan!5e0!3m2!1sid!2sid!4v1753235603881!5m2!1sid!2sid"
                style={{
                  border: 0,
                  width: '100%',
                  borderRadius: '0.5rem'
                }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <a 
              className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-500 transition-all duration-300 ease-smooth transform hover:scale-105 inline-block"
              href="https://maps.app.goo.gl/12pjqXd5sRPq9jrv6"
              target="_blank"
              rel="noopener noreferrer"
            >
              Click to see location
            </a>
          </div>
        </AnimatedSection>
        
        {data.show_menu.wish && import.meta.env.VITE_APP_TABLE_NAME ? (
          <AnimatedSection delay={1000} animation="fade-up">
            <WishSection />
          </AnimatedSection>
        ) : null}
      </div>
      
      <Footer />
      <SongButton />
    </div>
  );
}
