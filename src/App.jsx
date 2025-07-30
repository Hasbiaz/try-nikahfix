import { useState, useEffect } from 'react';
import './App.css';
import UserWatch from './components/section/user-watch';
import Thumbnail from './components/section/thumbnail';
import Intro from './components/section/intro';

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [showIntro, setShowIntro] = useState(true);
  useEffect(() => {
    if (showIntro) {
      const timer = setTimeout(() => setShowIntro(false), 5000);
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
        ) : (
          <UserWatch
            onClick={() => {
              setIsLogin(true);
            }}
          />
        )}
      </div>
    </div>
  );
}

export default App;
