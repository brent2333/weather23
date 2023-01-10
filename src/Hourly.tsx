import { Fragment } from "react";
import { ForecastWeatherReponse } from "./APIResponseTypes";
import { VictoryChart, VictoryTheme, VictoryLine } from "victory";
const getHour = (time: string) => {
  return time.split(" ")[1];
};
const Hourly = (forecastResponse: ForecastWeatherReponse) => {
  const hours = forecastResponse.forecast.forecastday[0].hour;
  const graphData = hours.map((h) => {
    return {
      x: getHour(h.time),
      y: h.temp_c
    };
  });
  return (
    <Fragment>
      <h2 className="mx-4 text-white">Hourly</h2>
      <VictoryChart theme={VictoryTheme.material}>
        <VictoryLine
          style={{
            data: { stroke: "#c43a31" },
            parent: { border: "1px solid #ccc" }
          }}
          data={graphData}
        />
      </VictoryChart>
    </Fragment>
  );
};

export default Hourly;
