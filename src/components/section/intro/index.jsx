import React, { useEffect, useRef, useState } from 'react';
import "./intro.css";
// Import audio file explicitly to ensure correct path in production
import taadaaAudio from '/audio/taadaa.mp3';

export default function Intro() {
  const audioRef = useRef(null);
  const [showAudioPrompt, setShowAudioPrompt] = useState(false);
  const [audioStarted, setAudioStarted] = useState(false);

  useEffect(() => {
    // Strategy: Start muted autoplay, then unmute after user interaction
    const initAudio = async () => {
      if (audioRef.current && !audioStarted) {
        try {
          // Set up audio
          audioRef.current.currentTime = 0;
          audioRef.current.volume = 0.7;
          audioRef.current.muted = true; // Start muted for autoplay to work
          
          // Try autoplay with muted
          await audioRef.current.play();
          setAudioStarted(true);
          console.log('Muted autoplay started');
          
          // Set up user interaction to unmute
          const unmute = () => {
            if (audioRef.current) {
              audioRef.current.muted = false;
              console.log('Audio unmuted by user interaction');
              setShowAudioPrompt(false);
              
              // Remove listeners
              document.removeEventListener('click', unmute);
              document.removeEventListener('touchstart', unmute);
              document.removeEventListener('keydown', unmute);
            }
          };
          
          // Show prompt and wait for interaction
          setShowAudioPrompt(true);
          document.addEventListener('click', unmute, { once: true });
          document.addEventListener('touchstart', unmute, { once: true });
          document.addEventListener('keydown', unmute, { once: true });
          
        } catch (error) {
          console.log('Even muted autoplay failed:', error);
          setShowAudioPrompt(true);
        }
      }
    };

    const timer = setTimeout(initAudio, 500);
    return () => clearTimeout(timer);
  }, [audioStarted]);

  // Fallback for manual audio start
  const handleEnableAudio = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.muted = false;
      audioRef.current.volume = 0.7;
      audioRef.current.play().then(() => {
        console.log('Audio manually started');
        setShowAudioPrompt(false);
        setAudioStarted(true);
      }).catch(err => {
        console.log('Manual audio start failed:', err);
      });
    }
  };

  return (
    <>
      {/* Audio element for taadaa sound */}
      <audio 
        ref={audioRef} 
        src={taadaaAudio} 
        preload="auto"
        playsInline
        muted
      />
      
      {/* Simple audio enable prompt */}
      {showAudioPrompt && (
        <div 
          onClick={handleEnableAudio}
          style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            background: 'rgba(0, 0, 0, 0.8)',
            color: '#fff',
            padding: '20px 30px',
            borderRadius: '15px',
            cursor: 'pointer',
            fontSize: '16px',
            fontWeight: 'bold',
            zIndex: 1000,
            textAlign: 'center',
            border: '2px solid #fff',
            backdropFilter: 'blur(10px)'
          }}
        >
          🎵 Tap to play sound
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
