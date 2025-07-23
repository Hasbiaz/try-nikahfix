import React from 'react';
import data from '../../../data/config.json';

export default function Bridegroom() {
  return (
    <div>
      <h2 className="text-lg leading-5 text-white font-bold mb-4">
        Bride and Groom
      </h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <img
            src={data.pegantin.wanita.foto}
            className="w-full rounded-md"
            height={164}
          />
          <div>
            <h4 className="text-sm text-white font-medium mt-2">
              {data.pegantin.wanita.nama}
            </h4>
            <p className="text-[#A3A1A1] text-xs leading-4 mt-2">
              Daughter of {data.pegantin.wanita.bapak} &amp;{' '}
              {data.pegantin.wanita.ibu}
            </p>
          </div>
        </div>
        <div>
          <img
            src={data.pegantin.pria.foto}
            className="w-full rounded-md"
            height={164}
          />
          <div>
            <h4 className="text-sm text-white font-medium mt-2">
              {data.pegantin.pria.nama}
            </h4>
            <p className="text-[#A3A1A1] text-xs leading-4 mt-2">
              Son of {data.pegantin.pria.bapak} &amp; {' '}
              {data.pegantin.pria.ibu}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
