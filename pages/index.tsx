import React, { useEffect, useState } from "react";
import ModalSearch from "../components/Modal";
import cToF from "../helpers/cToF";
import fToC from "../helpers/fToC";
import getBG from "../helpers/getBG";
import queryData from "../helpers/queryData";
import LocationInterface from "../interfaces/LocationInterface";
import { useCookies } from "react-cookie";

interface HomeProps {
  isModalOpen: boolean;
  setIsModalOpen: Function;
}

export enum ScaleEnum {
  celsius = "c",
  farenheit = "f",
}

export default function Home({ isModalOpen, setIsModalOpen }: HomeProps) {
  const [isFound, setIsFound] = useState(true);
  const [data, setData] = useState<any | null>(null);
  const [cookies, setCookie] = useCookies(["ids"]);

  function getFirstCookie() {
    if (cookies.ids) {
      if (cookies.ids[0]) return cookies.ids[0];
    }

    // Toronto is default. ey
    return {
      city: "toronto",
      country: "CA",
    };
  }

  const [loc, setLoc] = useState<LocationInterface>(getFirstCookie());
  useEffect(() => {
    queryData(loc.city, loc.country).then((result) => {
      if (!result.err) {
        setData(result);
        setIsFound(true);
      } else {
        console.error(result.err);
      }
    });

    setIsModalOpen(false);
  }, [loc]);

  const [scale, setScale] = useState(ScaleEnum.celsius);

  const cookieExists = (city: string, country: string) => {
    console.log;
    if (cookies) {
      if (cookies.ids) {
        return (
          cookies.ids.filter(
            (i: any) => i.city === loc.city && i.country === loc.country
          ).length > 0
        );
      }
    }

    return false;
  };

  return (
    <>
      {!isFound ||
        (isModalOpen && (
          <ModalSearch setLoc={setLoc} setIsModalOpen={setIsModalOpen} />
        ))}
      {data && (
        <div
          className={`${getBG(
            scale,
            data.temp
          )} rounded h-1/2 flex items-center justify-center bg-center bg-no-repeat w-full`}
        >
          <div className="text-center text-white">
            {data.weather.length && (
              <div className="flex justify-center items-center">
                <p className="text-2xl font-semibold">
                  {data.weather[0].description}
                </p>
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
              <p className="text-lg pb-5 font-medium">
                Feels like {data.feelsLike}°
              </p>
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
                  }}
                >
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
                  }}
                >
                  F°
                </button>
              </div>
            </div>
            <div className="pt-6">
              {/* If data is in the cookies already then dont show this button */}
              {!cookieExists(loc.city, loc.country) ? (
                <button
                  className="text-transparent bg-clip-text bg-gradient-to-br from-green-700 to-gray-600 m-2 hover:text-blue-500 hover:font-semibold"
                  onClick={() => {
                    setCookie(
                      "ids",
                      cookies.ids
                        ? [
                            { city: loc.city, country: loc.country },
                            ...cookies.ids,
                          ]
                        : [{ city: loc.city, country: loc.country }],
                      {
                        path: "/",
                      }
                    );
                  }}
                >
                  Add to favourites
                </button>
              ) : (
                <p className="font-medium font-sm">
                  Already added to the list!
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
