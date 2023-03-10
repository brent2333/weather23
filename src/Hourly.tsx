import { Fragment } from "react";
import { ForecastWeatherReponse, Hour } from "./APIResponseTypes";
import { VictoryChart, VictoryTheme, VictoryLine, VictoryAxis, VictoryContainer } from "victory";
import isThisHour from 'date-fns/isThisHour'

const getHour = (time: string) => {
  const timeExtract = parseInt(time.split(" ")[1]);
  let hour;
  let ampm;
  if (timeExtract > 12) {
    hour = timeExtract - 12;
    ampm = "PM";
  } else {
    hour = timeExtract
    ampm = "AM";
  }
  return String(hour + '' + ampm);
};
const filterHours = (hours: Hour[]) => {
  let start = 0;
  hours.forEach((h, index)=> {
    if (isThisHour(new Date(h.time))) {
      start = index;
    }
  });
  return hours.slice(start, start + 5);
}
const Hourly = (forecastResponse: ForecastWeatherReponse) => {
  const hours = forecastResponse.forecast.forecastday[0].hour;
  const filteredHours = filterHours(hours);
  const graphData = filteredHours.map((h) => {
    return {
      x: getHour(h.time),
      y: h.temp_f
    };
  });
  return (
    <div className="lg:block md:block sm:hidden">
      <h2 className="mx-4 text-white">Hourly</h2>
      <div className="min-w-full max-h-96 mt-100">
      <VictoryChart 
      theme={VictoryTheme.material}
      width={600}
      height={200}
      containerComponent={
        <VictoryContainer
          preserveAspectRatio="none"
          style={{marginTop: "-70px"}}
        />
      }>
        <VictoryAxis
          tickValues={graphData}
          style={{
            grid: { stroke: "#777" },
            ticks: {stroke: "grey", size: 5},
            tickLabels: {fontSize: 6, padding: 4, fill: "#ddd"}
          }}/>
        <VictoryAxis
          dependentAxis
          tickFormat={(tick) => `${Math.round(tick)}°`}
          style={{
            grid: { stroke: "#777" },
            ticks: {stroke: "grey", size: 5},
            tickLabels: {fontSize: 6, padding: 4, fill: "#ddd"}
          }}
        />
        <VictoryLine
          style={{
            data: { stroke: "#4F46E5" },
          }}
          data={graphData}
        />
      </VictoryChart>
      </div>
    </div>
  );
};

export default Hourly;
