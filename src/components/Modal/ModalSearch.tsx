import React, { useEffect, useState } from 'react';
import { NavSearch } from '../Nav/NavSearch';
import { ModalSearchCard } from './ModalSearchCard';
import cities from './utils/cities';

interface ModalSearchProps {
  setLoc: Function;
}

interface CityInterface {
  id: number;
  name: string;
  state: string;
  country: string;
  coord: { lon: number; lat: number };
}

export function ModalSearch({ setLoc }: ModalSearchProps) {
  const [input, setInput] = useState('');
  const [currentList, setCurrentList] = useState<CityInterface[] | []>([]);
  useEffect(() => {
    // Search here
    if (input !== '') {
      setCurrentList(
        cities.filter((city) => {
          if (city.name.toLowerCase().includes(input)) {
            return city;
          }
        }),
      );
    }

    return () => {
      setInput('');
    };
  }, [input]);

  return (
    <div className="p-72 h-screen left-0 top-0 fixed w-screen flex flex-col bg-gray-200 bg-opacity-50">
      <div className="mt-0 mb-0 ml-auto mr-auto w-96 bg-white opacity-100 h-full rounded">
        <NavSearch
          className="p-5 ml-10 mr-10 border-b border-gray-200"
          fnInput={setInput}
        />
        <div className="flex-auto w-full h-3/4 p-6 pt-2 overflow-y-scroll">
          {currentList.map((city) => (
            <ModalSearchCard
              key={city.id}
              id={city.id}
              city={city.name}
              country={city.country}
              setLoc={setLoc}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
