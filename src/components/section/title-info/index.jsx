import React from 'react';
import data from '../../../data/config.json';

export default function TitleInfo() {
  // Parse the wedding date from config
  const [day, month, year] = data.tanggal_pernikahan.split('/');
  const weddingDate = new Date(year, month - 1, day);

  // Format the wedding date as "Friday, 21 June 2024"
  const options = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };
  const formattedWeddingDate = weddingDate.toLocaleDateString('en-US', options);

  return (
    <div className="space-y-1">
      <div className="flex gap-2 items-center">
        <img src="/favicon.ico" alt="logo" width={18} height={18} />
        <span className="text-[#A3A1A1] text-xs mt-0.5 tracking-widest">
          LOVUMENTER
        </span>
      </div>
      <h2 className="text-lg leading-5 text-white font-bold">
         {data.pegantin.pria.panggilan} &amp; {data.pegantin.wanita.panggilan}:
        Before the Big Day
      </h2>
      <div className="flex gap-1 items-center">
        <span className="text-green-500 mr-2">100% match</span>
        <span className="bg-[#4D4D4D] text-white text-xs px-1 py-0 mr-2 rounded-sm">
          G {/* General, its like PGA RATE */} 
        </span>
        <span className="text-white mr-2">
          {new Intl.DateTimeFormat('en-US', { day: 'numeric', month: 'short', year: 'numeric' }).format(weddingDate)}
        </span>
        <span className="text-white mr-2">1h 26m</span>
        <span>
          <img src="/images/4k-icon.png" width={16} height={16} alt="4k" />
        </span>
        <span>
          <img src="/images/hd-icon.png" width={16} height={16} alt="hd" />
        </span>
      </div>
      <div className="bg-[#E50913] py-1 px-2 rounded text-xs text-white font-bold w-fit">
        Coming soon on {formattedWeddingDate}
      </div>
      <div className="pt-2">
        <p className="text-white text-sm leading-[1.15rem] mb-2">
          {data.intro}
        </p>
        <p className="text-[#A3A1A1] text-[10px] leading-[1rem]">
          {data.quote}
        </p>
      </div>
    </div>
  );
}
