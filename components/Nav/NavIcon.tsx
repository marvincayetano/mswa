import React from 'react';

interface NavIconProps {
  className: string;
}

export function NavIcon({ className }: NavIconProps) {
  return (
    <span className={`flex-col text-center ${className}`}>
      <p className="text-lg italic font-semibold text-transparent bg-clip-text bg-gradient-to-br from-green-800 to-red-400">
        mswa
      </p>
      <p className="text-xs -mt-2.5 text-gray-600">most simple weather app</p>
    </span>
  );
}
