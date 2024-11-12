import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, SkipForward, SkipBack, Volume2, Mail, ShoppingBag, Film, Gamepad2, Radio } from 'lucide-react';
import Marketplace from './pages/Marketplace';
import ArtistProfile from './pages/ArtistProfile';

export default function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');
  const audioRef = useRef<HTMLAudioElement>(null);

  const newAlbums = [
    { name: 'Shadows of Eternity', artist: 'Crimson Void', link: '#' },
    { name: 'Mechanical Heart', artist: 'Neon Dystopia', link: '#' },
    { name: 'Whispers in the Dark', artist: 'Midnight Specter', link: '#' },
    { name: 'Synthetic Dreams', artist: 'Circuit Breaker', link: '#' },
  ];

  const stations = [
    { name: 'Ethereal Echoes', link: '#' },
    { name: 'Neon Nights', link: '#' },
    { name: 'Cyberpunk Serenades', link: '#' },
    { name: 'Gothic Whispers', link: '#' },
  ];

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (audioRef.current) {
      audioRef.current.volume = Number(e.target.value);
    }
  };

  if (currentPage === 'shop') {
    return <Marketplace />;
  }

  if (currentPage === 'profile') {
    return <ArtistProfile />;
  }

  return (
    <div className="min-h-screen flex flex-col text-red-500 relative" style={{ 
      fontFamily: "'Mansalva', cursive",
      backgroundImage: "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%20-v7h175LEmfhxLf9qmbnxHfqhF5Khd8.jpg')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
    }}>
      <div className="absolute top-4 right-4 flex items-center space-x-4 z-10">
        <h1 className="text-red-500 text-xl sm:text-2xl" style={{ fontFamily: "'Mansalva', cursive" }}>fatale.fm</h1>
        <a href="#contact" className="text-red-500 hover:text-red-400 transition-colors">
          <Mail size={20} />
        </a>
      </div>
      <div className="absolute top-4 left-4 z-10">
        <button onClick={() => setCurrentPage('profile')} className="block">
          <div className="flex flex-col items-start p-2 border-2 border-red-500 rounded-lg gothic-frame">
            <h2 className="text-base sm:text-lg font-light mb-1 text-red-400">Artist Profile</h2>
            <p className="text-xs opacity-75 text-red-300 hover:text-red-400 transition-colors">Enter the realm of darkness</p>
          </div>
        </button>
      </div>
      <main className="flex-grow p-4 sm:p-8 relative overflow-hidden">
        <div className="absolute right-4 top-20 flex flex-col items-end">
          <div className="w-48 mb-4 p-3 border border-gray-600 rounded-md bg-black/30 backdrop-blur-sm">
            <h2 className="text-sm font-light mb-2 text-red-400">New Releases</h2>
            <div className="space-y-2">
              {newAlbums.map((album, index) => (
                <div key={index} className="bg-black/30 p-1.5 rounded-lg">
                  <a href={album.link} className="block">
                    <h3 className="text-xs font-light text-red-300 truncate hover:text-red-400 transition-colors">{album.name}</h3>
                  </a>
                  <p className="text-[10px] text-red-400">{album.artist}</p>
                </div>
              ))}
            </div>
            <div className="mt-3 text-right">
              <a href="#past-releases" className="inline-block text-[9px] text-red-700 hover:text-red-600 transition-colors">
                past releases {'->'} 
              </a>
            </div>
          </div>
          <a 
            href="#about" 
            className="text-pink-500 hover:text-pink-400 transition-colors text-xs font-light py-2 px-4 rounded-md bg-black border border-gray-600"
          >
            About Us
          </a>
        </div>
        <div className="absolute bottom-20 left-4 z-10 flex space-x-4">
          <div className="flex flex-col items-center">
            <button 
              onClick={() => setCurrentPage('shop')}
              className="block w-14 h-14 sm:w-20 sm:h-20 bg-red-900/50 rounded-full flex items-center justify-center border border-gray-600 gothic-button"
            >
              <ShoppingBag size={20} className="text-red-400" />
            </button>
            <p className="mt-2 text-xs sm:text-sm font-light text-red-400 text-center">Main Shop</p>
          </div>
          <div className="flex flex-col items-center">
            <a href="#arcade" className="block w-14 h-14 sm:w-20 sm:h-20 bg-red-900/50 rounded-full flex items-center justify-center border border-gray-600 gothic-button">
              <Gamepad2 size={20} className="text-red-400" />
            </a>
            <p className="mt-2 text-xs sm:text-sm font-light text-red-400 text-center">Arcade</p>
          </div>
          <div className="flex flex-col items-center">
            <a href="#cinema" className="block w-14 h-14 sm:w-20 sm:h-20 bg-red-900/50 rounded-full flex items-center justify-center border border-gray-600 gothic-button">
              <Film size={20} className="text-red-400" />
            </a>
            <p className="mt-2 text-xs sm:text-sm font-light text-red-400 text-center">Cinema</p>
          </div>
        </div>
        <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-full max-w-md px-4">
          <div className="p-4 border-2 border-red-500 rounded-lg gothic-frame">
            <h2 className="text-lg font-light mb-2 text-red-400 text-center">Stations</h2>
            <div className="grid grid-cols-2 gap-2">
              {stations.map((station, index) => (
                <a key={index} href={station.link} className="flex items-center space-x-2 text-red-300 hover:text-red-400 transition-colors">
                  <Radio size={16} />
                  <span className="text-[15.7px]" style={{ fontFamily: "'Cinzel', serif" }}>{station.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="stars"></div>
        <div className="gothic-corner top-0 left-0"></div>
        <div className="gothic-corner top-0 right-0"></div>
        <div className="gothic-corner bottom-0 left-0"></div>
        <div className="gothic-corner bottom-0 right-0"></div>
      </main>
      <footer className="fixed bottom-0 left-0 right-0 bg-black/80 backdrop-blur-sm p-2 sm:p-3 flex flex-wrap justify-between items-center text-red-500" style={{ fontFamily: "'Cinzel', serif" }}>
        <div className="flex items-center space-x-2 sm:space-x-4 mb-2 sm:mb-0">
          <button onClick={handlePlayPause} className="hover:text-red-400">
            {isPlaying ? <Pause size={20} /> : <Play size={20} />}
          </button>
          <SkipBack size={16} className="hover:text-red-400 cursor-pointer" />
          <SkipForward size={16} className="hover:text-red-400 cursor-pointer" />
        </div>
        <div className="text-center mb-2 sm:mb-0 w-full sm:w-auto">
          <h3 className="text-xs sm:text-sm font-light">Now Playing: Death Waltz</h3>
          <p className="text-xs opacity-75 hidden sm:block">Adam S. Hurst</p>
        </div>
        <div className="flex items-center space-x-2 w-full sm:w-auto justify-end">
          <Volume2 size={16} />
          <input 
            type="range" 
            className="w-16 sm:w-24 accent-red-500" 
            min="0" 
            max="1" 
            step="0.1" 
            onChange={handleVolumeChange}
          />
        </div>
        <audio ref={audioRef} src="/path/to/death-waltz.mp3" />
      </footer>
    </div>
  );
}