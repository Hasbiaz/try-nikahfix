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
    <div className="flex items-center justify-center min-h-screen">
      <div className="py-10 text-center space-y-28">
        <img
          className="mx-auto scale-110"
          src="images/NIKAHFIX.webp"
          width={'125px'}
          height={'48px'}
          alt="nikahfix"
        />
        <div>
          <p className="mb-10 text-2xl">Who's Watching?</p>
          <div onClick={() => {
            playClickSound();
            setTimeout(() => {
              onClick();
            }, 300);
          }} className="group cursor-pointer">
            <img
              className="mx-auto group-hover:scale-125"
              src="images/guest-icon.png"
              width={100}
              height={100}
              alt="nikahfix"
            />
            <p className="text-xl mt-2 group-hover:scale-125 group-hover:pt-5">
              {to}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
