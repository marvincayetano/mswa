import React, { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import FavouriteCard from '../components/Favourite';
import queryData from '../helpers/queryData';
import LocationInterface from '../interfaces/LocationInterface';
import APIResultInterface from '../interfaces/APIResultInterface';
import getBG from '../helpers/getBG';
import { ScaleEnum } from '../pages/Home';

interface FavouriteProps {}

export default function Favourite({}: FavouriteProps) {
  const [cookies] = useCookies([`${import.meta.env.VITE_COOKIES_IDS}`]);
  const [data, setData] = useState<APIResultInterface | any>([]);

  // Unpredictable API Result
  useEffect(() => {
    // Get all the temperatures here
    getAllData();

    return function cleanup() {
      setData([]);
    };
  }, []);

  const getAllData = () => {
    if (cookies.ids) {
      const promiseArr = cookies.ids.map((loc: LocationInterface) => {
        return queryData(loc.city, loc.country);
      });

      Promise.all(promiseArr).then((values) => {
        setData(values);
      });
    }
  };

  function removeData(location: string) {
    setData(
      data.filter((i: APIResultInterface) => {
        if (`${i.name}, ${i.country}`.toLowerCase() !== location) {
          return true;
        }
      }),
    );
  }

  return (
    <div className="flex flex-col items-center px-3 md:px-0">
      {data && data.length > 0 ? (
        /* Return value from api is unpredictable */
        data.map((loc: APIResultInterface, i: number) => (
          <FavouriteCard
            key={i}
            bg={getBG(ScaleEnum.celsius, loc.temp)}
            location={`${loc.name}, ${loc.country}`}
            temperature={loc.temp}
            icon={loc.weather[0] && loc.weather[0].icon}
            weather={loc.weather[0] && loc.weather[0].description}
            removeData={removeData}
          />
        ))
      ) : (
        <div className="flex justify-center -ml-14">
          <h1 className="text-4xl text-gray-400 font-bold">List is empty</h1>
        </div>
      )}
    </div>
  );
}
