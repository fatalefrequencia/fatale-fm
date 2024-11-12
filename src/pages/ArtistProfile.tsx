import React, { useState } from 'react';
import { Play, Heart, Calendar, Book, Users, Mic, Video, Music } from 'lucide-react';
import { ArtistCard } from '../components/ArtistCard';
import { TabButton } from '../components/TabButton';

const artist = {
  name: 'Crimson Shadowcaster',
  username: '@shadowcaster',
  bio: 'Weaver of dark melodies, curator of gothic atmospheres, and channeler of ethereal energies.',
  avatar: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400&h=400&fit=crop',
  coverImage: 'https://images.unsplash.com/photo-1501426026826-31c667bdf23d?w=1200&h=400&fit=crop',
  followers: 66666,
  socialLinks: {
    instagram: '#',
    twitter: '#',
    youtube: '#'
  }
};

const content = {
  feed: [
    { 
      type: 'post', 
      content: 'New dark ambient album emerging from the shadows soon...', 
      likes: 666, 
      comments: 99 
    },
    { 
      type: 'photo', 
      content: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?w=500&h=500&fit=crop', 
      description: 'Channeling the void', 
      likes: 999, 
      comments: 111 
    },
  ],
  music: [
    { title: 'Whispers of the Damned', plays: 666000, duration: '6:66', tokens: 13 },
    { title: 'Nocturnal Requiem', plays: 333000, duration: '4:44', tokens: 9 },
    { title: 'Gothic Lullaby', plays: 444000, duration: '5:55', tokens: 11 },
  ],
  events: [
    { name: 'Dark Moon Ritual', date: '2024-06-06', venue: 'Ancient Cathedral' },
    { name: 'Midnight Masquerade', date: '2024-07-13', venue: 'Haunted Manor' },
  ],
  books: [
    { title: 'Shadows of the Soul', year: 2023, description: 'Dark Poetry Collection' },
    { title: 'Gothic Sound Design', year: 2022, description: 'Sonic Grimoire' },
  ],
};

export default function ArtistProfile() {
  const [activeTab, setActiveTab] = useState('feed');

  return (
    <div className="min-h-screen bg-black/90 text-red-500 p-6 sm:p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="relative mb-12 gothic-frame">
          <img 
            src={artist.coverImage} 
            alt="Cover" 
            className="w-full h-80 object-cover rounded-lg opacity-80"
          />
          <div className="absolute bottom-4 left-4 flex items-end space-x-6 z-10">
            <div className="w-32 h-32 rounded-full border-2 border-red-500 overflow-hidden">
              <img 
                src={artist.avatar} 
                alt={artist.name} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-red-400">
              <h1 className="text-4xl font-light mb-2" style={{ fontFamily: "'Cinzel', serif" }}>
                {artist.name}
              </h1>
              <p className="text-xl text-red-500/80">{artist.username}</p>
              <p className="text-red-400/60">{artist.followers.toLocaleString()} souls following</p>
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent rounded-lg"></div>
        </div>

        <div className="flex justify-between items-center mb-8">
          <p className="text-red-400/80 max-w-2xl font-light">{artist.bio}</p>
          <div className="flex space-x-3">
            {Object.entries(artist.socialLinks).map(([platform, url]) => (
              <a
                key={platform}
                href={url}
                className="px-4 py-2 border border-red-900/50 rounded-lg text-red-400 hover:bg-red-900/20 transition-all duration-300"
              >
                {platform}
              </a>
            ))}
          </div>
        </div>

        <div className="border-b border-red-900/30 mb-8">
          <div className="flex space-x-2">
            <TabButton active={activeTab === 'feed'} onClick={() => setActiveTab('feed')}>
              Feed
            </TabButton>
            <TabButton active={activeTab === 'music'} onClick={() => setActiveTab('music')}>
              <Music className="w-4 h-4 mr-2 inline-block" />
              Dark Hymns
            </TabButton>
            <TabButton active={activeTab === 'events'} onClick={() => setActiveTab('events')}>
              <Calendar className="w-4 h-4 mr-2 inline-block" />
              Rituals
            </TabButton>
            <TabButton active={activeTab === 'books'} onClick={() => setActiveTab('books')}>
              <Book className="w-4 h-4 mr-2 inline-block" />
              Grimoires
            </TabButton>
          </div>
        </div>

        <div className="space-y-6">
          {activeTab === 'feed' && (
            <ArtistCard title="Dark Chronicles">
              <div className="space-y-6">
                {content.feed.map((item, index) => (
                  <div key={index} className="bg-black/50 p-4 rounded-lg">
                    {item.type === 'post' ? (
                      <p className="text-red-400/90">{item.content}</p>
                    ) : (
                      <div className="space-y-2">
                        <img src={item.content} alt={item.description} className="w-full rounded-lg" />
                        <p className="text-red-400/70 text-sm">{item.description}</p>
                      </div>
                    )}
                    <div className="flex items-center space-x-4 mt-4 text-sm text-red-400/60">
                      <span className="flex items-center">
                        <Heart className="w-4 h-4 mr-1" /> {item.likes}
                      </span>
                      <span>{item.comments} whispers</span>
                    </div>
                  </div>
                ))}
              </div>
            </ArtistCard>
          )}

          {activeTab === 'music' && (
            <ArtistCard title="Dark Hymns">
              <div className="space-y-4">
                {content.music.map((song, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-black/50 rounded-lg hover:bg-red-900/20 transition-all duration-300">
                    <div className="flex items-center space-x-4">
                      <button className="p-2 rounded-full hover:bg-red-900/30">
                        <Play className="w-4 h-4" />
                      </button>
                      <div>
                        <p className="text-red-400">{song.title}</p>
                        <p className="text-sm text-red-400/60">{song.plays.toLocaleString()} echoes</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <span className="text-red-400/80">{song.duration}</span>
                      <span className="text-red-500">{song.tokens} tokens</span>
                    </div>
                  </div>
                ))}
              </div>
            </ArtistCard>
          )}

          {activeTab === 'events' && (
            <ArtistCard title="Dark Rituals">
              <div className="space-y-4">
                {content.events.map((event, index) => (
                  <div key={index} className="p-4 bg-black/50 rounded-lg">
                    <h4 className="text-red-400 text-lg mb-2">{event.name}</h4>
                    <p className="text-red-400/70">{event.venue}</p>
                    <p className="text-sm text-red-400/60 mt-2">{new Date(event.date).toLocaleDateString()}</p>
                  </div>
                ))}
              </div>
            </ArtistCard>
          )}

          {activeTab === 'books' && (
            <ArtistCard title="Ancient Grimoires">
              <div className="space-y-4">
                {content.books.map((book, index) => (
                  <div key={index} className="p-4 bg-black/50 rounded-lg">
                    <h4 className="text-red-400 text-lg mb-1">{book.title}</h4>
                    <p className="text-red-400/70 text-sm">{book.description}</p>
                    <p className="text-red-400/60 text-sm mt-2">Published in the year of darkness {book.year}</p>
                  </div>
                ))}
              </div>
            </ArtistCard>
          )}
        </div>
      </div>
    </div>
  );
}