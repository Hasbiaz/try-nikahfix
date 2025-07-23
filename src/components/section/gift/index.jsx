import React from 'react';
import data from '../../../data/config.json';

export default function Gift() {
return (
    <div>
        <h2 className="text-lg leading-5 text-white font-bold mb-4">
        Send Gift
      </h2>
        <div className="bg-[#232323] p-5 rounded-lg mb-6 flex items-center">
            <div className="flex-1">
                <p className="text-white text-sm">
                    Jika Anda ingin memberikan hadiah, silakan transfer ke nomor rekening berikut:
                </p>
                <div className="text-[#A3A1A1] text-xs">
                    <span className=" text-red-500">Bank:</span> {data.bank['name']}<br />
                    <span className=" text-red-500">Nomor Rekening:</span> {data.bank['account']}<br />
                    <span className=" text-red-500">Atas Nama:</span> {data.bank['holder']}
                </div>
            </div>
            <div className="ml-4">
                {/* Bank account icon */}
                <svg width="40" height="40" fill="none" viewBox="0 0 24 24">
                    <rect width="24" height="24" rx="6" fill="#E50914"/>
                    <path d="M6 10v6a2 2 0 002 2h8a2 2 0 002-2v-6M4 10h16M8 6h8v4H8V6z" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </div>
        </div>
        <div className="bg-[#232323] p-5 rounded-lg flex items-center">
            <div className="flex-1">
                <p className="text-white text-sm ">
                    Atau dapat dikirim ke alamat berikut:
                </p>
                <div className="text-[#A3A1A1] text-xs">
                    {data.address}
                </div>
            </div>
            <div className="ml-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" viewBox="0 0 24 24">
                    <rect width="24" height="24" rx="6" fill="#E50914"/>
                    <path d="M12 21s7-5 7-10.5a7 7 0 00-14 0C5 16 12 21 12 21z" stroke="#fff" strokeWidth="2"/>
                    <circle cx="12" cy="10.5" r="2.5" stroke="#fff" strokeWidth="2"/>
                </svg>
            </div>
        </div>
    </div>
);
}