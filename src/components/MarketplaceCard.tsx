import React from 'react';

interface MarketplaceCardProps {
  name: string;
  artist: string;
  price: number;
  image: string;
}

export function MarketplaceCard({ name, artist, price, image }: MarketplaceCardProps) {
  return (
    <div className="bg-black/30 backdrop-blur-sm border border-red-900/50 rounded-lg overflow-hidden hover:border-red-500/50 transition-all duration-300">
      <div className="relative group">
        <img src={image} alt={name} className="w-full aspect-square object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-4">
        <h3 className="text-red-400 font-light text-lg">{name}</h3>
        <p className="text-red-300/70 text-sm">{artist}</p>
        <div className="flex justify-between items-center mt-3">
          <span className="text-red-500 font-semibold">{price} tokens</span>
          <button className="px-4 py-2 bg-red-900/30 text-red-400 border border-red-500/30 rounded hover:bg-red-900/50 hover:border-red-500/50 transition-all duration-300 text-sm">
            Purchase
          </button>
        </div>
      </div>
    </div>
  );
}