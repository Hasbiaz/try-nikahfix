import React, { useEffect, useRef } from 'react';
import "./intro.css";

export default function Intro() {
  const audioRef = useRef(null);

  useEffect(() => {
    // Play taadaa audio when component mounts (intro appears)
    if (audioRef.current) {
      // Set volume to reasonable level
      audioRef.current.volume = 0.7;
      
      // Try to play audio
      const playPromise = audioRef.current.play();
      
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.log('Auto-play was prevented by browser policy:', error);
          // Auto-play was prevented, but that's okay for user experience
        });
      }
    }
  }, []);

  return (
    <>
      {/* Audio element for taadaa sound */}
      <audio 
        ref={audioRef} 
        src="/audio/taadaa.mp3" 
        preload="auto"
      />
      
      <div id="container">
        {/* Netflix Intro Letter N */}
        <netflixintro letter="N">
          <div className="helper-1">
            <div className="effect-brush">
              {/* ...fur spans... */}
              {[...Array(31)].map((_, i) => (
                <span key={31 - i} className={`fur-${31 - i}`}></span>
              ))}
            </div>
            <div className="effect-lumieres">
              {/* ...lamp spans... */}
              {[...Array(28)].map((_, i) => (
                <span key={i + 1} className={`lamp-${i + 1}`}></span>
              ))}
            </div>
          </div>
          {[2, 3, 4].map((helper) => (
            <div key={helper} className={`helper-${helper}`}>
              <div className="effect-brush">
                {[...Array(31)].map((_, i) => (
                  <span key={31 - i} className={`fur-${31 - i}`}></span>
                ))}
              </div>
            </div>
          ))}
        </netflixintro>
      </div>
    </>
  );
}
