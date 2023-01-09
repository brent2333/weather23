import { Fragment, useState } from "react";
import { SharedLocationObject } from "./APIResponseTypes";
import { useGetFutureForecastsQuery } from "./weatherApiService";

const Forecast = (loc: SharedLocationObject) => {
const { data: currentForecast } = useGetFutureForecastsQuery(
    loc.location
    );
const [unit, setUnit] = useState(true)
  return (
    <div>
      <div className="flex">
      <h2 className="mx-4 text-white">5 Day Forecast</h2>
      <button onClick={() => setUnit(!unit)} className="inline text-white text-xs bg-slate-800 p-1.5 left-34 top-1.5 rounded-lg"> &#176;F /  &#176;C</button>
      </div>
      <div className="lg:flex">
        {!currentForecast ? (
        <h1>No Forecast Found</h1>
      ) : (
        currentForecast?.forecastday.map((day, index: number) => {
          return (
            <div className="flex-1 shadow-md rounded m-4  p-8 bg-gray-300" key={`forecast${index}`}>
                <h3 className="font-bold text-xl text-black tracking-tight mb-2">{new Date(day.date.replace('-', '/')).toString().split(' ')[0]}</h3>
                <div className="flex-1">
                <div className="basis-full text-center mb-4">
                        <div className="block text-center">{day.day.condition.text}</div>
                        {day.day.condition.icon ? (
          <img src={`https:${day.day.condition.icon}`} alt={day.day.condition.icon} className="inline-block" />
          ) : null}
                        </div>
                    <div className="basis-full">
                      {unit ? (
                        <Fragment>
                        <div>Low: <span className="font-bold">{day.day.mintemp_f}</span> &#176;F</div> 
                        <div>High: <span className="font-bold">{day.day.maxtemp_f}</span> &#176;F</div>
                        </Fragment>
                      ) : (
                        <Fragment>
                        <div>Low: <span className="font-bold">{day.day.mintemp_c}</span> &#176;C</div> 
                        <div>High: <span className="font-bold">{day.day.maxtemp_c}</span> &#176;C</div>
                        </Fragment>
                      )}
                    </div>
                </div>
            </div>
            );
        })
      )}
    </div>
    </div>
  );
};

export default Forecast;
