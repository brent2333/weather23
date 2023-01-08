import { Fragment } from "react";
import { CurrentWeatherResponse, SharedLocationObject } from "./APIResponseTypes";
import { CloudIcon, SunIcon } from "@heroicons/react/24/solid";

const Results = ({ current }: CurrentWeatherResponse, loc: SharedLocationObject) => {
  return (
    <Fragment>
      <h2 className="mx-6 text-white w-full basis-full">Current Weather</h2>
      <div className="lg:grid lg:grid-flow-col sm:flex md:flex mx-auto my-0 max-w-screen-lg">
        <div className="shadow-md rounded m-4 text-3xl font-bold center-flex p-8 bg-gray-300">
          {current?.condition.text}&nbsp;
          {current?.condition.icon ? (
          <img src={`https:${current?.condition.icon}`} alt={current?.condition.icon} />
          ) : null}
        </div>
        {current?.temp_f ? (
          <div className="shadow-md rounded m-4 text-3xl font-extrabold center-flex p-8 bg-gray-300">
            {current?.temp_f} <span>&#176;</span>F
          </div>
        ) : null}
        {current?.temp_c ? (
          <div className="shadow-md rounded  m-4 text-3xl font-extrabold center-flex p-8 bg-gray-300">
            {current?.temp_c} <span>&#176;</span>C
          </div>
        ) : null}
      </div>
    </Fragment>
  );
};

export default Results;
