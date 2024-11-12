import React from 'react';

interface TabButtonProps {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

export function TabButton({ active, onClick, children }: TabButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 text-sm transition-all duration-300 ${
        active
          ? 'bg-red-900/30 text-red-400 border-b-2 border-red-500'
          : 'text-red-400/70 hover:text-red-400 hover:bg-red-900/20'
      }`}
    >
      {children}
    </button>
  );
}