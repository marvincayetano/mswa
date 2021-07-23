import React, { useEffect, useState } from 'react';
import ModalSearch from '../components/Modal';
import cToF from '../helpers/cToF';
import fToC from '../helpers/fToC';
import getBG from '../helpers/getBG';
import { useCookies } from 'react-cookie';

interface HomeProps {}

export enum ScaleEnum {
  celsius = 'c',
  farenheit = 'f',
}

interface LocationInterface {
  id: number;
  city: string;
  country: string;
}

export default function Home({}: HomeProps) {
  const [isFound, setIsFound] = useState(true);
  const [data, setData] = useState<any | null>(null);
  const [loc, setLoc] = useState<LocationInterface>({
    id: 6167865,
    city: 'toronto',
    country: 'CA',
  });
  useEffect(() => {
    queryData();
  }, [loc]);

  const [cookies, setCookie] = useCookies([`${import.meta.env.VITE_COOKIES_IDS}`]);
  const [scale, setScale] = useState(ScaleEnum.celsius);

  const queryData = async () => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${loc.city},,${
        loc.country
      }&appid=${import.meta.env.VITE_API_WEATHER}&units=metric`,
    );

    if (response.status === 200) {
      const { main, weather, name, sys } = await response.json();
      setData({
        feelsLike: Math.round(main.feels_like),
        humidity: main.humidity,
        temp: Math.round(main.temp),
        temp_min: Math.round(main.temp_min),
        temp_max: Math.round(main.temp_max),
        name,
        country: sys.country,
        weather,
      });

      console.log(data);
    } else {
      setData({ err: 'Something went wrong!' });
    }

    setIsFound(true);
  };

  return (
    <>
      {!isFound && <ModalSearch setLoc={setLoc} />}
      {data && (
        <div
          className={`${getBG(
            scale,
            data.temp,
          )} bg-cold rounded h-1/2 flex items-center justify-center bg-center bg-no-repeat`}>
          <div className="text-center text-white">
            {data.weather.length && (
              <div className="flex justify-center items-center">
                <p className="text-2xl font-semibold">{data.weather[0].description}</p>
                <img
                  src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`}
                  alt=""
                />
              </div>
            )}
            <p className="text-lg font-bold">{`${data.name}, ${data.country}`}</p>
            <div className="flex-col justify-center pt-3">
              <p className="text-5xl font-extrabold">
                {data.temp}°{scale}
              </p>
              <p className="text-lg pb-5 font-medium">Feels like {data.feelsLike}°</p>
              <div className="flex-col font-bold">
                <p>
                  min: <span>{data.temp_min}°</span>
                </p>
                <p>
                  max: <span>{data.temp_max}°</span>
                </p>
              </div>
              <div className="pb-7 font-bold">
                <p>humidity: {data.humidity}%</p>
              </div>
              <div className="mt-2">
                <button
                  className="border-r border-white pr-5 hover:text-green-100 font-medium"
                  onClick={() => {
                    if (scale === ScaleEnum.farenheit) {
                      setData({
                        ...data,
                        temp: fToC(data.temp),
                        feelsLike: fToC(data.feelsLike),
                        temp_min: fToC(data.temp_min),
                        temp_max: fToC(data.temp_max),
                      });

                      setScale(ScaleEnum.celsius);
                    }
                  }}>
                  C°
                </button>
                <button
                  className="pl-5 hover:text-green-100 font-medium"
                  onClick={() => {
                    if (scale === ScaleEnum.celsius) {
                      setData({
                        ...data,
                        temp: cToF(data.temp),
                        feelsLike: cToF(data.feelsLike),
                        temp_min: cToF(data.temp_min),
                        temp_max: cToF(data.temp_max),
                      });

                      setScale(ScaleEnum.farenheit);
                    }
                  }}>
                  F°
                </button>
              </div>
            </div>
            <div className="pt-6">
              {/* {!cookies.includes(loc.id) && ( */}
              <button
                className="text-transparent bg-clip-text bg-gradient-to-br from-green-700 to-gray-600 m-2 hover:text-blue-500 hover:font-semibold"
                onClick={() => {
                  setCookie(
                    `${import.meta.env.VITE_COOKIES_IDS}`,
                    [loc.id, ...cookies.get(`${import.meta.env.VITE_COOKIES_IDS}`)],
                    {
                      path: '/',
                    },
                  );
                }}>
                Add to favourites
              </button>
              {/* )} */}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
