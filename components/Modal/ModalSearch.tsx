import React, { useEffect, useState } from "react";
import { NavSearch } from "../Nav/NavSearch";
import { ModalSearchCard } from "./ModalSearchCard";
import cities from "../../utils/cities";

interface ModalSearchProps {
  setLoc: Function;
  setIsModalOpen: Function;
}

interface CityInterface {
  id: number;
  name: string;
  state: string;
  country: string;
  coord: { lon: number; lat: number };
}

export function ModalSearch({ setLoc, setIsModalOpen }: ModalSearchProps) {
  const [input, setInput] = useState("");
  const [currentList, setCurrentList] = useState<CityInterface[] | []>([]);
  useEffect(() => {
    // Search here
    if (input !== "") {
      setCurrentList(
        cities.filter((city) => {
          if (city.name.toLowerCase().includes(input)) {
            return city;
          }
        })
      );
    }

    return () => {
      setInput("");
    };
  }, [input]);

  return (
    <div className="py-16 md:py-72 md:p-72 h-screen left-0 top-0 fixed w-screen flex flex-col bg-gray-200 bg-opacity-50">
      <div className="mt-0 mb-0 ml-auto mr-auto w-72 md:w-96 bg-white opacity-100 h-full rounded">
        <div className="flex justify-end px-5 pt-2">
          <button
            className="text-sm text-red-400"
            onClick={() => {
              setIsModalOpen(false);
            }}
          >
            close
          </button>
        </div>
        <NavSearch
          className="p-5 pt-0 ml-10 mr-10 border-b border-gray-200"
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
