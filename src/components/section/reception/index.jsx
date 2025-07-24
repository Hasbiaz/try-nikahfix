import React, { useState, useEffect } from 'react';
import data from '../../../data/config.json';

export default function Reception() {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        // Convert date from config (05/12/2025) to target date
        const [day, month, year] = data.tanggal_pernikahan.split('/');
        const targetDate = new Date(`${year}-${month}-${day}T06:00:00`).getTime();

        const timer = setInterval(() => {
            const now = new Date().getTime();
            const difference = targetDate - now;

            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                    minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
                    seconds: Math.floor((difference % (1000 * 60)) / 1000)
                });
            } else {
                // When countdown ends, set all values to 0
                setTimeLeft({
                    days: 0,
                    hours: 0,
                    minutes: 0,
                    seconds: 0
                });
            }
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    // Check if countdown has ended
    const hasCountdownEnded = timeLeft.days === 0 && timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0;

    return (
      <div>
        {/* Netflix-style Section Header */}
        <h2 className="text-lg leading-5 text-white font-bold mb-4">
        The Wedding Ceremony
        </h2>
        
        {/* Netflix Card Grid */}
        <div className="grid grid-cols-1 gap-6">
          {/* Minimalist Netflix-Style Countdown Card - Only show when countdown is active */}
          {!hasCountdownEnded && (
            <div className="relative bg-zinc-900 rounded-lg overflow-hidden">
              {/* Simple Countdown Timer */}
              <div className="p-6">
                <div className="grid grid-cols-4 gap-4 text-center">
                  <div>
                    <div className="text-3xl font-bold text-white">{timeLeft.days}</div>
                    <div className="text-xs text-red-500 uppercase font-medium">Days</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-white">{timeLeft.hours}</div>
                    <div className="text-xs text-red-500 uppercase font-medium">Hours</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-white">{timeLeft.minutes}</div>
                    <div className="text-xs text-red-500 uppercase font-medium">Mins</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-white">{timeLeft.seconds}</div>
                    <div className="text-xs text-red-500 uppercase font-medium">Secs</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Akad Event Card */}
          <div className="relative bg-zinc-900 rounded-lg overflow-hidden">
            {/* Card Image/Icon Area */}
            <div className="relative h-48 bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center">
              <div className="absolute inset-0 bg-black bg-opacity-30"></div>
              <div className="relative z-10 text-center">
                <div className="w-16 h-16 mx-auto mb-3 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-white">AKAD NIKAH</h3>
              </div>
            </div>
            
            {/* Card Content */}
            <div className="p-6">
              <div className="space-y-2">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-red-500 text-sm font-semibold uppercase tracking-wider">Sacred Ceremony</p>
                    <h4 className="font-bold text-white mt-1">Akad Nikah</h4>
                  </div>
                  <div className="bg-red-600 text-white text-xs px-2 py-1 rounded">
                    LIVE
                  </div>
                </div>
                
                <div>
                  <div className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="text-white font-semibold">{data.akad?.date || '-'}</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-red-400 font-medium">{data.akad?.time || '-'}</span>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-gray-300 text-sm leading-relaxed">{data.akad?.venue || '-'}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Reception Event Card */}
          <div className="relative bg-zinc-900 rounded-lg overflow-hidden">
            {/* Card Image/Icon Area */}
            <div className="relative h-48 bg-gradient-to-br from-amber-600 to-orange-700 flex items-center justify-center">
              <div className="absolute inset-0 bg-black bg-opacity-30"></div>
              <div className="relative z-10 text-center">
                <div className="w-16 h-16 mx-auto mb-3 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-white">RECEPTION</h3>
              </div>
            </div>
            
            {/* Card Content */}
            <div className="p-6">
              <div className="space-y-2">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-amber-500 text-sm font-semibold uppercase tracking-wider">Grand Celebration</p>
                    <h4 className="font-bold text-white mt-1">Wedding Reception</h4>
                  </div>
                  <div className="bg-amber-600 text-white text-xs px-2 py-1 rounded">
                    INTIMATE
                  </div>
                </div>
                
                <div>
                  <div className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="text-white font-semibold">{data.reception?.date || '-'}</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-amber-400 font-medium">{data.reception?.time || '-'}</span>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-gray-300 text-sm  leading-relaxed">{data.reception?.venue || '-'}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}