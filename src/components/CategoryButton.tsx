import React from 'react';
import { LucideIcon } from 'lucide-react';

interface CategoryButtonProps {
  icon: React.ReactNode;
  name: string;
}

export function CategoryButton({ icon, name }: CategoryButtonProps) {
  return (
    <button className="group h-24 w-full flex flex-col items-center justify-center bg-black/30 backdrop-blur-sm border border-red-900/50 rounded-lg hover:border-red-500/50 transition-all duration-300 gothic-button">
      <div className="text-red-400 group-hover:text-red-300 transition-colors duration-300">
        {icon}
      </div>
      <span className="mt-2 text-red-400 text-sm group-hover:text-red-300 transition-colors duration-300">
        {name}
      </span>
    </button>
  );
}