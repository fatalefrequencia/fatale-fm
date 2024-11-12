import React from 'react';

interface ArtistCardProps {
  title: string;
  children: React.ReactNode;
}

export function ArtistCard({ title, children }: ArtistCardProps) {
  return (
    <div className="bg-black/30 backdrop-blur-sm border border-red-900/50 rounded-lg overflow-hidden">
      <div className="p-4 border-b border-red-900/30">
        <h3 className="text-red-400 font-light text-xl" style={{ fontFamily: "'Cinzel', serif" }}>{title}</h3>
      </div>
      <div className="p-4">
        {children}
      </div>
    </div>
  );
}