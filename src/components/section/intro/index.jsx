import React, { useEffect, useRef } from 'react';
import "./intro.css";
// Import audio file explicitly to ensure correct path in production
import taadaaAudio from '/audio/taadaa.mp3';

export default function Intro() {
  const audioRef = useRef(null);

  useEffect(() => {
    // Delay audio play slightly to ensure component is fully mounted
    const playAudio = async () => {
      if (audioRef.current) {
        try {
          // Set volume to reasonable level
          audioRef.current.volume = 0.7;
          
          // Load the audio first
          await audioRef.current.load();
          
          // Try to play audio with better error handling
          await audioRef.current.play();
          console.log('Audio playing successfully');
        } catch (error) {
          console.log('Auto-play was prevented by browser policy:', error);
          
          // Fallback: try to enable audio on any user interaction
          const enableAudio = () => {
            if (audioRef.current) {
              audioRef.current.play().catch(e => console.log('Fallback audio play failed:', e));
              document.removeEventListener('click', enableAudio);
              document.removeEventListener('touchstart', enableAudio);
            }
          };
          
          document.addEventListener('click', enableAudio);
          document.addEventListener('touchstart', enableAudio);
        }
      }
    };

    // Small delay to ensure everything is ready
    const timer = setTimeout(playAudio, 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Audio element for taadaa sound */}
      <audio 
        ref={audioRef} 
        src={taadaaAudio} 
        preload="auto"
        crossOrigin="anonymous"
        playsInline
        muted={false}
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
