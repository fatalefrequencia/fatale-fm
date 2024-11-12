import React from 'react';
import { ImageIcon, Package, Music, Video, Book, Users } from 'lucide-react';
import { CategoryButton } from '../components/CategoryButton';
import { MarketplaceCard } from '../components/MarketplaceCard';

const categories = [
  { name: 'Digital Art', icon: <ImageIcon className="h-6 w-6" /> },
  { name: 'Physical Art', icon: <Package className="h-6 w-6" /> },
  { name: 'Dark Beats', icon: <Music className="h-6 w-6" /> },
  { name: 'Gothic Samples', icon: <Music className="h-6 w-6" /> },
  { name: 'Horror LUTs', icon: <Video className="h-6 w-6" /> },
  { name: 'Grimoires', icon: <Book className="h-6 w-6" /> },
  { name: 'Dark Services', icon: <Users className="h-6 w-6" /> },
];

const featuredItems = [
  { 
    name: 'Ethereal Nightmares', 
    artist: 'Dark Digital', 
    price: 50, 
    image: 'https://images.unsplash.com/photo-1572431447238-425af66a273b?w=500&h=500&fit=crop' 
  },
  { 
    name: 'Gothic Beats Vol.1', 
    artist: 'Phantom Producer', 
    price: 25, 
    image: 'https://images.unsplash.com/photo-1501426026826-31c667bdf23d?w=500&h=500&fit=crop' 
  },
  { 
    name: 'Dark Canvas Original', 
    artist: 'Shadow Artist', 
    price: 150, 
    image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?w=500&h=500&fit=crop' 
  },
  { 
    name: 'Horror Cinema LUTs', 
    artist: 'Night Colorist', 
    price: 30, 
    image: 'https://images.unsplash.com/photo-1517999144091-3d9dca6d1e43?w=500&h=500&fit=crop' 
  },
];

export default function Marketplace() {
  return (
    <div className="min-h-screen bg-black/90 text-red-500 p-6 sm:p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="gothic-frame border-2 border-red-500/50 p-6 rounded-lg">
          <h2 className="text-3xl font-light mb-6 text-center" style={{ fontFamily: "'Cinzel', serif" }}>
            Dark Marketplace
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 mb-12">
            {categories.map((category, index) => (
              <CategoryButton key={index} {...category} />
            ))}
          </div>

          <h3 className="text-2xl font-light mb-6 text-center" style={{ fontFamily: "'Cinzel', serif" }}>
            Featured Artifacts
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredItems.map((item, index) => (
              <MarketplaceCard key={index} {...item} />
            ))}
          </div>
        </div>

        <div className="gothic-corner top-0 left-0"></div>
        <div className="gothic-corner top-0 right-0"></div>
        <div className="gothic-corner bottom-0 left-0"></div>
        <div className="gothic-corner bottom-0 right-0"></div>
      </div>
    </div>
  );
}