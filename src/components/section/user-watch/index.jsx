import React, { useEffect, useState } from 'react';

export default function UserWatch({ onClick }) {
  //get params from url
  const [to, setTo] = useState('Guest');

  // Function to play click sound
  const playClickSound = () => {
    const audio = new Audio('/audio/click-sound.mp3');
    audio.play().catch(error => {
      console.log('Error playing click sound:', error);
    });
  };

  useEffect(() => {
    if (window) {
      const url = new URL(window.location.href);
      const to = url.searchParams.get('to');
      setTo(to ? to : 'Guest');
    }
  }, []);

  return (
    <div className="min-h-screen bg-black flex flex-col justify-between items-center px-4">
      {/* Main Content */}
      <div className="flex-1 flex flex-col justify-center items-center">
        {/* Logo */}
        <div className="mb-16 flex justify-center">
          <img
            className="mx-auto"
            src="images/NIKAHFIX.webp"
            width={'180px'}
            height={'72px'}
            alt="nikahfix"
          />
        </div>
        <div className="text-center">
          <h1 className="text-white text-xl max-w-[75%] mx-auto md:text-2xl font-light mb-12 tracking-wide">
            Hey there! Who's excited for the wedding?
          </h1>
          
          {/* Profile Card */}
          <div
            onClick={() => {
              playClickSound();
              setTimeout(() => {
                onClick();
              }, 300);
            }} 
            className="group cursor-pointer transition-all duration-300 ease-in-out hover:scale-105"
          >
            <div className="flex flex-col items-center space-y-4">
              {/* Avatar Container */}
              <div className="relative">
                <div className="w-24 h-24 md:w-28 md:h-28 rounded-lg overflow-hidden border-transparent transition-all duration-300 shadow-2xl">
                  <img
                    className="w-full h-full object-cover group-hover:brightness-110 transition-all duration-300"
                    src="images/guest-icon.png"
                    alt="Guest Profile"
                  />
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-white bg-opacity-10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              {/* Name */}
              <p className="text-white text-lg md:text-xl font-medium group-hover:text-gray-300 transition-colors duration-300">
                {to}
              </p>
            </div>
          </div>

          {/* Additional Netflix-style elements */}
          <div className="mt-16 text-gray-400 text-sm">
            <p>Click your profile to view our wedding invitation</p>
          </div>
        </div>
      </div>

      {/* Footer Attribution */}
      <div className="w-full text-center py-6">
        <p className="text-gray-500 text-xs">
          Made with love to celebrate the union of two hearts
        </p>
      </div>

      {/* Background decoration */}
      <div className="fixed inset-0 bg-gradient-to-b from-black via-gray-900 to-black opacity-80 -z-10"></div>
    </div>
  );
}
