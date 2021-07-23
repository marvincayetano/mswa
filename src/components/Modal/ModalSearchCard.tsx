import React from 'react';

interface ModalSearchCardProps {
  id: number;
  city: string;
  country: string;
  setLoc: Function;
}

export function ModalSearchCard({ id, city, country, setLoc }: ModalSearchCardProps) {
  return (
    <button
      className="flex w-full items-center justify-between h-12 bg-gray-200 rounded-lg p-4 hover:bg-gray-50 cursor-pointer mb-1"
      onClick={() => {
        setLoc({ id, city, country });
      }}>
      <p className="text-gray-700">{city}</p>
      <p className="text-gray-700">{country}</p>
    </button>
  );
}
