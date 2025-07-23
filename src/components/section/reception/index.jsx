import React from 'react';
import data from '../../../data/config.json';

export default function Reception() {
    return (
      <div>
      <h2 className="text-lg leading-5 text-left text-white font-bold mb-4">
        Event
      </h2>
      <div className="grid grid-cols-1 items-center text-base mb-6 bg-[#232323] p-5 rounded-lg">
        <h3 className="text-center font-black">Akad</h3>
        <div className="flex sm:flex-row flex-col items-center justify-center">
        <span className="whitespace-pre-line font-bold text-center">{data.akad?.date || '-'}</span>
        </div>
        <div className="flex sm:flex-row flex-col items-center justify-center">
        <span className="whitespace-pre-line text-sm font-semibold text-white text-center">{data.akad?.time || '-'}</span>
        </div>
        <div className="flex sm:flex-row flex-col items-center justify-center text-center">
        <span className="whitespace-pre-line text-xs text-[#A3A1A1] text-center">{data.akad?.venue || '-'}</span>
        </div>
      </div>
      <div className="grid grid-cols-1 items-center text-base bg-[#232323] p-4 rounded-lg mb-6">
        <h3 className="text-center font-black">Reception</h3>
        <div className="flex sm:flex-row flex-col items-center justify-center">
        <span className="whitespace-pre-line font-bold text-center">{data.reception?.date || '-'}</span>
        </div>
        <div className="flex sm:flex-row flex-col items-center justify-center">
        <span className="whitespace-pre-line text-sm font-semibold text-white text-center">{data.reception?.time || '-'}</span>
        </div>
        <div className="flex sm:flex-row flex-col items-center justify-center text-center">
        <span className="whitespace-pre-line text-xs text-[#A3A1A1] text-center">{data.reception?.venue || '-'}</span>
        </div>
      </div>
      </div>
    )
}