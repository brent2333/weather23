import { Fragment } from "react";
import { CurrentWeatherResponse } from "./APIResponseTypes";
import { CloudIcon, SunIcon } from "@heroicons/react/24/solid";

const Results = ({ current }: CurrentWeatherResponse) => {
  return (
    <Fragment>
      <div className="lg:grid lg:grid-flow-col lg:auto-cols-max h-48 sm:flex md:flex">
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
      <div className="grid grid-flow-col auto-cols-max h-48"></div>
    </Fragment>
  );
};

export default Results;
