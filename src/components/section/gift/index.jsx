import React, { useState } from 'react';
import data from '../../../data/config.json';

export default function Gift() {
    const [selectedOption, setSelectedOption] = useState('bank');
    const [copiedField, setCopiedField] = useState('');

    const handleCopy = (text, field) => {
        navigator.clipboard.writeText(text);
        setCopiedField(field);
        setTimeout(() => setCopiedField(''), 2000);
    };

    return (
        <div className="bg-zinc-900 rounded-lg p-6 border border-zinc-800">
            {/* Header */}
            <h2 className="text-2xl font-bold text-white mb-2 text-center">
                Send Us a Bunch of Love
            </h2>
            <p className="text-zinc-300 text-sm text-center mb-8">
                Your presence is the greatest gift, but if you'd like to contribute...
            </p>

            {/* Payment Options */}
            <div className="space-y-4 mb-6">
                {/* Bank Transfer Option */}
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
                            <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center shadow-lg shadow-red-600/30">
                                <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path d="M2 5h20v2H2V5zm0 4h20v10a1 1 0 01-1 1H3a1 1 0 01-1-1V9zm4 3h4v2H6v-2z" fill="#fff"/>
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-white font-bold text-lg">Bank Transfer</h3>
                                <p className="text-zinc-300 text-sm">Secure bank-to-bank transfer</p>
                            </div>
                        </div>
                        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                            selectedOption === 'bank' ? 'border-red-600 bg-red-600/10' : 'border-zinc-400'
                        }`}>
                            {selectedOption === 'bank' && (
                                <div className="w-3 h-3 bg-red-600 rounded-full"></div>
                            )}
                        </div>
                    </div>

                    {selectedOption === 'bank' && (
                        <div className="mt-6 pt-4 border-t border-zinc-600">
                            <div className="space-y-4">
                                <div className="bg-zinc-900 rounded-lg p-4 border border-zinc-700">
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="text-zinc-200 text-sm font-medium">Bank Name</span>
                                        <button 
                                            onClick={() => handleCopy(data.bank.name, 'bank')}
                                            className="text-red-500 text-sm hover:text-red-400 transition-colors font-medium bg-red-600/15 px-3 py-1 rounded hover:bg-red-600/25"
                                        >
                                            {copiedField === 'bank' ? 'Copied!' : 'Copy'}
                                        </button>
                                    </div>
                                    <p className="text-white font-mono text-sm">{data.bank.name}</p>
                                </div>
                                
                                <div className="bg-zinc-900 rounded-lg p-4 border border-zinc-700">
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="text-zinc-200 text-sm font-medium">Account Number</span>
                                        <button 
                                            onClick={() => handleCopy(data.bank.account, 'account')}
                                            className="text-red-500 text-sm hover:text-red-400 transition-colors font-medium bg-red-600/15 px-3 py-1 rounded hover:bg-red-600/25"
                                        >
                                            {copiedField === 'account' ? 'Copied!' : 'Copy'}
                                        </button>
                                    </div>
                                    <p className="text-white font-mono text-sm tracking-wider">{data.bank.account}</p>
                                </div>
                                
                                <div className="bg-zinc-900 rounded-lg p-4 border border-zinc-700">
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="text-zinc-200 text-sm font-medium">Account Holder</span>
                                        <button 
                                            onClick={() => handleCopy(data.bank.holder, 'holder')}
                                            className="text-red-500 text-sm hover:text-red-400 transition-colors font-medium bg-red-600/15 px-3 py-1 rounded hover:bg-red-600/25"
                                        >
                                            {copiedField === 'holder' ? 'Copied!' : 'Copy'}
                                        </button>
                                    </div>
                                    <p className="text-white font-mono text-sm">{data.bank.holder}</p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Physical Gift Option */}
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
                            <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center shadow-lg shadow-red-600/30">
                                <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path d="M12 21s7-5 7-10.5a7 7 0 00-14 0C5 16 12 21 12 21z" stroke="#fff" strokeWidth="2" fill="none"/>
                                    <circle cx="12" cy="10.5" r="2.5" stroke="#fff" strokeWidth="2" fill="none"/>
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-white font-bold text-lg">Physical Gift</h3>
                                <p className="text-zinc-300 text-sm">Send to our address</p>
                            </div>
                        </div>
                        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                            selectedOption === 'address' ? 'border-red-600 bg-red-600/10' : 'border-zinc-400'
                        }`}>
                            {selectedOption === 'address' && (
                                <div className="w-3 h-3 bg-red-600 rounded-full"></div>
                            )}
                        </div>
                    </div>

                    {selectedOption === 'address' && (
                        <div className="mt-6 pt-4 border-t border-zinc-600">
                            <div className="bg-zinc-900 rounded-lg p-4 border border-zinc-700">
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-zinc-200 text-sm font-medium">Delivery Address</span>
                                    <button 
                                        onClick={() => handleCopy(data.address, 'address')}
                                        className="text-red-500 text-sm hover:text-red-400 transition-colors font-medium bg-red-600/15 px-3 py-1 rounded hover:bg-red-600/25"
                                    >
                                        {copiedField === 'address' ? 'Copied!' : 'Copy'}
                                    </button>
                                </div>
                                <p className="text-white text-sm leading-relaxed">{data.address}</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Footer Note */}
            <div className="text-center">
                <p className="text-zinc-300 text-sm leading-relaxed">
                    Your love and presence mean the world to us. Any contribution is deeply appreciated but never expected.
                </p>
            </div>
        </div>
    );
}