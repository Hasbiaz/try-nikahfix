import React from 'react';
import data from '../../../data/config.json';

const LoveItem = ({ imageUrl, title, duration, description }) => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-2">
        <div>
          <img
            className="w-full rounded-md object-cover"
            height={100}
            style={{
              maxHeight: '100px',
            }}
            src={imageUrl}
            alt="dummy"
          />
        </div>
        <div className="flex justify-center">
          <div className="my-auto">
            <p className="text-white mb-2 tracking-tighter">{title}</p>
            <p className="text-xs text-[#A3A1A1]">{duration}</p>
          </div>
        </div>
      </div>
      <p className="text-[#A3A1A1] text-xs mt-2">{description}</p>
    </div>
  );
};

export default function LoveStory() {
  // Helper to generate random duration
  const getRandomDuration = () => {
    const min = 1;
    const max = 59;
    const minutes = Math.floor(Math.random() * (max - min + 1)) + min;
    const seconds = Math.floor(Math.random() * 60);
    return `${minutes}m ${seconds}s`;
  };

  return (
    <div>
      <h2 className="text-lg leading-5 text-white font-bold mb-4">
        Our Love Story
      </h2>
      <div className="space-y-4">
        {data.love_story.map((item, index) => {
          const isLast = index === data.love_story.length - 1;
          const duration = isLast ? 'Until Death Do Us Part' : getRandomDuration();
          return (
            <LoveItem
              key={index}
              imageUrl={item.image_url}
              title={item.title}
              duration={duration}
              description={item.description}
            />
          );
        })}
      </div>
    </div>
  );
}
