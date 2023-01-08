import { Fragment } from "react";
import { SharedLocationObject } from "./APIResponseTypes";
import { useGetFutureForecastsQuery } from "./weatherApiService";

const Forecast = (loc: SharedLocationObject) => {
const { data: currentForecast } = useGetFutureForecastsQuery(
    loc.location
    );
// currentForecast = currentForecast ?? [];

  return (
    <div className="flex m-4  max-w-full flex-wrap">
      <h2 className="mx-4 text-white flex-1 basis-full">5 Day Forecast</h2>
        {!currentForecast ? (
        <h1>No Forecast Found</h1>
      ) : (
        currentForecast?.forecastday.map((day, index: number) => {
          return (
            <div className="flex-1 shadow-md rounded m-4 center-flex p-8 bg-gray-300" key={index}>
                <div className="flex center-flex">
                    <div className="flex-1">
                        <div className="inline-block">Low: <span className="font-bold">{day.day.mintemp_f}</span>&#176;F</div> 
                        <div className="inline-block">High: <span className="font-bold">{day.day.maxtemp_f}</span>&#176;F</div>
                    </div>
                    <span className="flex-1">
                        {day.day.condition.text}
                        {day.day.condition.icon ? (
          <img src={`https:${day.day.condition.icon}`} alt={day.day.condition.icon} />
          ) : null}
                        </span>
                </div>
            </div>
            );
        })
      )}
    </div>
  );
};

export default Forecast;
