import React from 'react';
import "./intro.css";

export default function Intro() {
  return (
    <>
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
