import React, { useState } from 'react';
import data from '../../../data/config.json';

export default function Gift() {
    const [selectedOption, setSelectedOption] = useState(() => {
        // Set default selected option to the first available option
        if (data.gift_options.bank) return 'bank';
        if (data.gift_options.qris) return 'qris';
        if (data.gift_options.physical) return 'address';
        return 'bank'; // fallback
    });
    const [copiedField, setCopiedField] = useState('');

    const handleCopy = (text, field) => {
        navigator.clipboard.writeText(text);
        setCopiedField(field);
        setTimeout(() => setCopiedField(''), 2000);
    };

    // Check if at least one gift option is enabled
    const hasAnyGiftOption = data.gift_options.bank || data.gift_options.qris || data.gift_options.physical;

    return (
        <div className="bg-zinc-900 rounded-lg p-6 border border-zinc-800">
            {/* Header */}
            <h2 className="text-2xl font-bold text-white mb-2 text-center">
                Send Us a Bunch of Love
            </h2>
            <p className="text-zinc-300 text-sm text-center mb-8">
                Your presence is the greatest gift, but if you'd like to contribute...
            </p>

            {!hasAnyGiftOption ? (
                <div className="text-center py-12">
                    <p className="text-zinc-400 text-lg">
                        Gift options are currently not available.
                    </p>
                    <p className="text-zinc-500 text-sm mt-2">
                        Your presence and prayers are the greatest gifts we could ask for.
                    </p>
                </div>
            ) : (
                <>
                    {/* Payment Options */}
                    <div className="space-y-4 mb-6">
                {/* Bank Transfer Option */}
                {data.gift_options.bank && (
                <div 
                    className={`bg-zinc-800 border-2 rounded-lg p-6 cursor-pointer transition-all duration-200 ${
                        selectedOption === 'bank' 
                            ? 'border-red-600 shadow-lg shadow-red-600/20 bg-zinc-800' 
                            : 'border-zinc-600 hover:border-red-500 hover:shadow-md hover:shadow-red-500/10'
                    }`}
                    onClick={() => setSelectedOption('bank')}
                >
                    <div className="flex items-start justify-between">
                        <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center shadow-lg shadow-red-600/30 flex-shrink-0">
                                <svg width="20" height="20" fill="none" viewBox="0 0 24 24" className="flex-shrink-0">
                                    <path d="M2 5h20v2H2V5zm0 4h20v10a1 1 0 01-1 1H3a1 1 0 01-1-1V9zm4 3h4v2H6v-2z" fill="#fff"/>
                                </svg>
                            </div>
                            <div className="flex-1 min-w-0">
                                <h3 className="text-white font-bold text-lg">Bank Transfer</h3>
                                <p className="text-zinc-300 text-sm">Secure bank-to-bank transfer</p>
                            </div>
                        </div>
                        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                            selectedOption === 'bank' ? 'border-red-600 bg-red-600/10' : 'border-zinc-400'
                        }`}>
                            {selectedOption === 'bank' && (
                                <div className="w-2.5 h-2.5 bg-red-600 rounded-full flex-shrink-0"></div>
                            )}
                        </div>
                    </div>

                    {selectedOption === 'bank' && (
                        <div className="mt-6 pt-4 border-t border-zinc-600">
                            <div className="bg-zinc-900 rounded-lg p-4 border border-zinc-700">
                                {/* First row with button aligned to first text line */}
                                <div className="flex items-start justify-between mb-3">
                                    <div className="flex-1">
                                        <span className="text-zinc-200 text-sm font-medium">Bank Name</span>
                                        <p className="text-white font-mono text-sm">{data.bank.name}</p>
                                    </div>
                                    <button 
                                        onClick={() => handleCopy(data.bank.account, 'account')}
                                        className="text-red-500 text-sm hover:text-red-400 transition-colors font-medium bg-red-600/15 px-3 py-1 rounded hover:bg-red-600/25 flex-shrink-0 ml-4"
                                    >
                                        {copiedField === 'account' ? 'Copied!' : 'Copy'}
                                    </button>
                                </div>
                                {/* Full width content below */}
                                <div className="mb-3">
                                    <span className="text-zinc-200 text-sm font-medium">Account Number</span>
                                    <p className="text-white font-mono text-sm tracking-wider">{data.bank.account}</p>
                                </div>
                                <div>
                                    <span className="text-zinc-200 text-sm font-medium">Account Holder</span>
                                    <p className="text-white font-mono text-sm">{data.bank.holder}</p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                )}

                {/* QRIS Option */}
                {data.gift_options.qris && (
                <div 
                    className={`bg-zinc-800 border-2 rounded-lg p-6 cursor-pointer transition-all duration-200 ${
                        selectedOption === 'qris' 
                            ? 'border-red-600 shadow-lg shadow-red-600/20 bg-zinc-800' 
                            : 'border-zinc-600 hover:border-red-500 hover:shadow-md hover:shadow-red-500/10'
                    }`}
                    onClick={() => setSelectedOption('qris')}
                >
                    <div className="flex items-start justify-between">
                        <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center shadow-lg shadow-red-600/30 flex-shrink-0">
                                <svg width="20" height="20" fill="none" viewBox="0 0 24 24" className="flex-shrink-0">
                                    <rect x="3" y="3" width="7" height="7" rx="1" fill="#fff"/>
                                    <rect x="14" y="3" width="7" height="7" rx="1" fill="#fff"/>
                                    <rect x="3" y="14" width="7" height="7" rx="1" fill="#fff"/>
                                    <rect x="14" y="14" width="7" height="7" rx="1" fill="#fff"/>
                                    <rect x="5" y="5" width="3" height="3" fill="#dc2626"/>
                                    <rect x="16" y="5" width="3" height="3" fill="#dc2626"/>
                                    <rect x="5" y="16" width="3" height="3" fill="#dc2626"/>
                                    <rect x="16" y="16" width="3" height="3" fill="#dc2626"/>
                                </svg>
                            </div>
                            <div className="flex-1 min-w-0">
                                <h3 className="text-white font-bold text-lg">QRIS Payment</h3>
                                <p className="text-zinc-300 text-sm">Scan QR code with any e-wallet</p>
                            </div>
                        </div>
                        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                            selectedOption === 'qris' ? 'border-red-600 bg-red-600/10' : 'border-zinc-400'
                        }`}>
                            {selectedOption === 'qris' && (
                                <div className="w-2.5 h-2.5 bg-red-600 rounded-full flex-shrink-0"></div>
                            )}
                        </div>
                    </div>

                    {selectedOption === 'qris' && (
                        <div className="mt-6 pt-4 border-t border-zinc-600">
                            <div className="bg-zinc-900 rounded-lg p-4 border border-zinc-700">
                                {/* QR Code Display */}
                                <div className="flex flex-col items-center mb-4">
                                    <span className="text-zinc-200 text-sm font-medium mb-4">Scan QR Code</span>
                                    <div className="bg-white p-4 rounded-lg flex items-center justify-center w-44 h-44 sm:w-52 sm:h-52">
                                        <img 
                                            src={data.qris.qr_code} 
                                            alt="QRIS QR Code"
                                            className="w-36 h-36 sm:w-44 sm:h-44 aspect-square object-contain"
                                            style={{ aspectRatio: '1/1' }}
                                            onError={(e) => {
                                                e.target.style.display = 'none';
                                                e.target.nextSibling.style.display = 'flex';
                                            }}
                                        />
                                        <div className="w-36 h-36 sm:w-44 sm:h-44 aspect-square bg-zinc-200 rounded-lg flex items-center justify-center text-zinc-600 text-xs" style={{ display: 'none' }}>
                                            QR Code will appear here
                                        </div>
                                    </div>
                                </div>
                                {/* Merchant Info */}
                                <div className="mb-3 text-center">
                                    <span className="text-zinc-200 text-sm font-medium">Merchant</span>
                                    <p className="text-white font-mono text-sm">{data.qris.merchant}</p>
                                </div>
                                {/* NMID Info */}
                                <div className="mb-3 text-center">
                                    <span className="text-zinc-200 text-sm font-medium">NMID</span>
                                    <p className="text-white font-mono text-sm">{data.qris.nmid}</p>
                                </div>
                                <div className="text-center">
                                    <p className="text-zinc-300 text-xs">
                                        Compatible with GoPay, OVO, DANA, ShopeePay, and other e-wallets
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                )}

                {/* Physical Gift Option */}
                {data.gift_options.physical && (
                <div 
                    className={`bg-zinc-800 border-2 rounded-lg p-6 cursor-pointer transition-all duration-200 ${
                        selectedOption === 'address' 
                            ? 'border-red-600 shadow-lg shadow-red-600/20 bg-zinc-800' 
                            : 'border-zinc-600 hover:border-red-500 hover:shadow-md hover:shadow-red-500/10'
                    }`}
                    onClick={() => setSelectedOption('address')}
                >
                    <div className="flex items-start justify-between">
                        <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center shadow-lg shadow-red-600/30 flex-shrink-0">
                                <svg width="20" height="20" fill="none" viewBox="0 0 24 24" className="flex-shrink-0" strokeWidth="2">
                                    <path d="M12 21s7-5 7-10.5a7 7 0 00-14 0C5 16 12 21 12 21z" stroke="#fff" fill="none"/>
                                    <circle cx="12" cy="10.5" r="2.5" stroke="#fff" fill="none"/>
                                </svg>
                            </div>
                            <div className="flex-1 min-w-0">
                                <h3 className="text-white font-bold text-lg">Physical Gift</h3>
                                <p className="text-zinc-300 text-sm">Send to our address</p>
                            </div>
                        </div>
                        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                            selectedOption === 'address' ? 'border-red-600 bg-red-600/10' : 'border-zinc-400'
                        }`}>
                            {selectedOption === 'address' && (
                                <div className="w-2.5 h-2.5 bg-red-600 rounded-full flex-shrink-0"></div>
                            )}
                        </div>
                    </div>

                    {selectedOption === 'address' && (
                        <div className="mt-6 pt-4 border-t border-zinc-600">
                            <div className="bg-zinc-900 rounded-lg p-4 border border-zinc-700">
                                {/* First row with button aligned to first text line */}
                                <div className="flex items-start justify-between mb-3">
                                    <div className="flex-1">
                                        <span className="text-zinc-200 text-sm font-medium">Delivery Address</span>
                                    </div>
                                    <button 
                                        onClick={() => handleCopy(`${data.receiver}\n${data.address}`, 'address-receiver')}
                                        className="text-red-500 text-sm hover:text-red-400 transition-colors font-medium bg-red-600/15 px-3 py-1 rounded hover:bg-red-600/25 flex-shrink-0 ml-4"
                                    >
                                        {copiedField === 'address-receiver' ? 'Copied!' : 'Copy'}
                                    </button>
                                </div>
                                {/* Full width content below */}
                                <div>
                                    <p className="text-white text-sm leading-relaxed">
                                        <span className="font-bold">{data.receiver}</span>
                                        <br />
                                        <span className="">{data.address}</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                )}
            </div>
            <div className="text-center">
                <p className="text-zinc-300 text-sm leading-relaxed">
                    Your love and presence mean the world to us. Any contribution is deeply appreciated but never expected.
                </p>
            </div>
                </>
            )}
        </div>
    );
}