import React from 'react';
import { NavIcon } from './NavIcon';
import { NavSearch } from './NavSearch';
import { NavSearchModal } from './NavSearchModal';

interface NavProps {}

export function Nav({}: NavProps) {
  return (
    <nav>
      <NavSearchModal />
      <div className="max-w-7xl mx-auto px-2 sm:pr-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
            <button
              onClick={() => console.log('TODO')}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className="hidden h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center md:items-stretch md:justify-start">
            <div className="hidden md:flex justify-around items-center w-full max-w-5xl ml-auto mr-auto">
              <a
                className="font-medium text-gray-700 p-1.5 rounded-2xl hover:bg-yellow-500 hover:text-gray-100 border-opacity-0 hover:border-opacity-80 border-b-2 hover:border-yellow-600"
                href="#bakery">
                favourites
              </a>
              <div className="flex-shrink-0 flex items-center">
                <NavIcon className="block lg:hidden w-auto" />
                <NavIcon className="hidden lg:block w-auto" />
              </div>
              <NavSearch />
            </div>
          </div>
        </div>
      </div>

      <div className="hidden md:hidden shadow-md">
        <div className="px-2 pt-2 pb-3 space-y-1 text-center">
          <a
            href="#bakery"
            className="hover:border-yellow-600 hover:border-b hover:text-gray-100 hover:bg-yellow-500 text-gray-600 block px-3 py-2 rounded-md text-base font-medium"
            aria-current="page">
            bakery
          </a>
          <a
            href="#dishes"
            className="hover:border-yellow-600 hover:border-b hover:text-gray-100 hover:bg-yellow-500 text-gray-600 block px-3 py-2 rounded-md text-base font-medium"
            aria-current="page">
            dishes
          </a>
        </div>
      </div>
    </nav>
  );
}
