import React, { useEffect, useRef, useState } from 'react';
import "./intro.css";
// Import audio file explicitly to ensure correct path in production
import taadaaAudio from '/audio/taadaa.mp3';

export default function Intro() {
  const audioRef = useRef(null);
  const [audioBlocked, setAudioBlocked] = useState(false);

  const enableAudio = async () => {
    try {
      if (audioRef.current) {
        audioRef.current.volume = 0.7;
        await audioRef.current.play();
        setAudioBlocked(false);
        console.log('Audio enabled successfully');
      }
    } catch (error) {
      console.log('Failed to enable audio:', error);
    }
  };

  useEffect(() => {
    // Try to play audio with user interaction fallback
    const playAudio = async () => {
      if (audioRef.current) {
        try {
          // Set volume to reasonable level
          audioRef.current.volume = 0.7;
          
          // Try to play audio immediately
          await audioRef.current.play();
          console.log('Audio playing successfully');
          setAudioBlocked(false);
        } catch (error) {
          console.log('Auto-play prevented, audio will play on user interaction');
          setAudioBlocked(true);
          
          // Create a one-time user interaction handler
          const handleUserInteraction = async () => {
            try {
              if (audioRef.current) {
                await audioRef.current.play();
                console.log('Audio started after user interaction');
                setAudioBlocked(false);
              }
            } catch (e) {
              console.log('Audio play failed even after user interaction:', e);
            }
            
            // Remove all listeners after first successful interaction
            document.removeEventListener('click', handleUserInteraction);
            document.removeEventListener('touchstart', handleUserInteraction);
            document.removeEventListener('keydown', handleUserInteraction);
          };
          
          // Add multiple event listeners for better coverage
          document.addEventListener('click', handleUserInteraction, { once: true });
          document.addEventListener('touchstart', handleUserInteraction, { once: true });
          document.addEventListener('keydown', handleUserInteraction, { once: true });
        }
      }
    };

    // Small delay to ensure component is mounted
    const timer = setTimeout(playAudio, 100);
    
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      {/* Audio element for taadaa sound */}
      <audio 
        ref={audioRef} 
        src={taadaaAudio} 
        preload="auto"
        playsInline
        crossOrigin="anonymous"
      />
      
      {/* Audio enable button if autoplay is blocked */}
      {audioBlocked && (
        <div 
          onClick={enableAudio}
          style={{
            position: 'fixed',
            top: '20px',
            right: '20px',
            background: 'rgba(255, 255, 255, 0.9)',
            color: '#000',
            padding: '8px 12px',
            borderRadius: '20px',
            cursor: 'pointer',
            fontSize: '12px',
            fontWeight: 'bold',
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            gap: '5px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.3)'
          }}
        >
          🔊 Tap to enable sound
        </div>
      )}
      
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
