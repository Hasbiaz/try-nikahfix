import { useState, useEffect } from 'react';
import './App.css';
import './fade.css';
import UserWatch from './components/section/user-watch';
import Thumbnail from './components/section/thumbnail';
import Intro from './components/section/intro';

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [showIntro, setShowIntro] = useState(true);
  const [showUserWatch, setShowUserWatch] = useState(false);
  
  useEffect(() => {
    if (showIntro) {
      const timer = setTimeout(() => {
        setShowIntro(false);
        // Add small delay before showing UserWatch with fade animation
        setTimeout(() => setShowUserWatch(true), 100);
      }, 4500);
      return () => clearTimeout(timer);
    }
  }, [showIntro]);
  return (
    <div className="bg-black text-white min-h-screen flex flex-col justify-center">
      <div className="max-w-sm container flex flex-col justify-center min-h-screen mx-auto overflow-hidden">
        {showIntro ? (
          <Intro />
        ) : isLogin ? (
          <Thumbnail />
        ) : showUserWatch ? (
          <div className="fade-in">
            <UserWatch
              onClick={() => {
                setIsLogin(true);
              }}
            />
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default App;
