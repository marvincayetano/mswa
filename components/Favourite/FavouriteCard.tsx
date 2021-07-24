import React from "react";
import { useCookies } from "react-cookie";
import LocationInterface from "../../interfaces/LocationInterface";

interface FavouriteCardProps {
  bg: string;
  location: string;
  temperature: number;
  icon: string;
  weather: string;
  removeData: Function;
}

export function FavouriteCard({
  bg,
  location,
  temperature,
  icon,
  weather,
  removeData,
}: FavouriteCardProps) {
  const [cookies, setCookie] = useCookies(["ids"]);

  return (
    <div
      className={`flex justify-between w-full md:w-1/2 h-28 p-2 pl-4 pr-4 mb-2 rounded ${bg}`}
    >
      <div className="flex-col text-white">
        <p className="font-semibold">{location}</p>
        <div className="flex items-center">
          <h1 className="font-bold text-4xl pr-4">{temperature}°c</h1>
          <img
            src={`http://openweathermap.org/img/wn/${icon}.png`}
            alt="Weather Icon"
          />
        </div>
        <p className="pl-1 font-bold text-sm">{weather}</p>
      </div>

      {/* This are for favourite and delete button */}
      <div className="flex items-center">
        <button
          onClick={() => {
            const ids = cookies.ids.filter((loc: LocationInterface) => {
              return (
                `${loc.city}, ${loc.country}`.toLowerCase() !==
                location.toLowerCase()
              );
            });

            removeData(location.toLowerCase());
            setCookie("ids", ids, {
              path: "/",
            });
          }}
        >
          <span className="text-red-500 hover:text-red-300">❌ Delete</span>
        </button>
      </div>
    </div>
  );
}
