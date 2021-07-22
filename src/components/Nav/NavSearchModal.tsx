import React from 'react';
import { NavSearch } from './NavSearch';
import { NavSearchModalCard } from './NavSearchModalCard';

interface NavSearchModalProps {}

export function NavSearchModal({}: NavSearchModalProps) {
  return (
    <div className="p-72 h-screen left-0 top-0 fixed w-screen flex flex-col bg-gray-200 bg-opacity-50">
      <div className="mt-0 mb-0 ml-auto mr-auto w-3/5 bg-white opacity-100 h-full rounded">
        <NavSearch className="p-5 ml-10 mr-10 border-b border-gray-200" />
        <div className="flex-auto w-full h-full overflow-auto">
          <NavSearchModalCard />
        </div>
      </div>
    </div>
  );
}
