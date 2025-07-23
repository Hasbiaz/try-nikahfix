import React from 'react';
import data from '../../../data/config.json';

export default function Reception() {
    return (
      <div>
        <h2 className="text-lg leading-5 text-white font-bold mb-4">
            Reception Wedding
        </h2>
        <div className="grid grid-cols-1 items-center text-2xl">
          <div className="flex sm:flex-row flex-col items-center justify-center">
            <span className="whitespace-pre-line font-black">{data.reception?.date || '-'}</span>
          </div>
          <div className="flex sm:flex-row flex-col items-center justify-center">
            <span className="whitespace-pre-line text-sm font-bold text-white">{data.reception?.time || '-'}</span>
          </div>
          <div className="flex sm:flex-row flex-col items-center justify-center text-center">
            <span className="whitespace-pre-line text-xs text-[#A3A1A1]">{data.reception?.venue || '-'}</span>
          </div>
        </div>
      </div>
    )
}