import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NavIcon } from './NavIcon';
import { NavSearch } from './NavSearch';

interface NavProps {
  setIsModalOpen: Function;
}

export function Nav({ setIsModalOpen }: NavProps) {
  let location = useLocation();

  return (
    <nav className="w-full md:w-10/12 m-0 m:m-auto">
      <div className="mx-auto px-2 sm:pr-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
            <button
              onClick={() => console.log('TODO')}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
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
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
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
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center md:items-stretch md:justify-start">
            <div className="hidden md:flex justify-between items-center w-full max-w-5xl ml-auto mr-auto">
              {location.pathname === '/favourite' ? (
                <Link
                  to="/"
                  className="font-medium text-gray-700 p-1.5 rounded-2xl hover:bg-green-500 hover:text-gray-100 border-opacity-0 hover:border-opacity-80 border-b-2 hover:border-green-600">
                  back to main
                </Link>
              ) : (
                <Link
                  to="/favourite"
                  className="font-medium text-gray-700 p-1.5 rounded-2xl hover:bg-green-500 hover:text-gray-100 border-opacity-0 hover:border-opacity-80 border-b-2 hover:border-green-600">
                  favourites
                </Link>
              )}
              <div className="flex-shrink-0 flex items-center">
                <Link to="/">
                  <NavIcon className="block lg:hidden w-auto" />
                  <NavIcon className="hidden lg:block w-auto" />
                </Link>
              </div>
              {location.pathname === '/' ? (
                <div className={'relative text-gray-600 focus-within:text-gray-400'}>
                  <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                    <button
                      type="submit"
                      className="p-1 focus:outline-none focus:shadow-outline">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        className="w-6 h-6">
                        <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </button>
                  </span>
                  <input
                    type="search"
                    name="q"
                    className="w-full py-2 text-sm bg-white rounded-md pl-10 focus:outline-none text-gray-900"
                    placeholder="Search..."
                    autoComplete="off"
                    readOnly
                    onClick={() => {
                      setIsModalOpen(true);
                    }}
                  />
                </div>
              ) : (
                <div className="w-52" />
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="hidden md:hidden shadow-md">
        <div className="px-2 pt-2 pb-3 space-y-1 text-center">
          <Link
            to="/"
            className="hover:border-green-500 hover:border-b hover:text-gray-100 hover:bg-green-400 text-gray-600 block px-3 py-2 rounded-md text-base font-medium"
            aria-current="page">
            home
          </Link>
          {location.pathname !== '/favourite' && (
            <Link
              to="/favourite"
              className="hover:border-green-500 hover:border-b hover:text-gray-100 hover:bg-green-400 text-gray-600 block px-3 py-2 rounded-md text-base font-medium"
              aria-current="page">
              favourites
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
