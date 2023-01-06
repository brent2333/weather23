import { CurrentWeatherResponse } from "./APIResponseTypes";

const Results = ({ current }: CurrentWeatherResponse) => {
  return (
    <div className="">
        <span>{JSON.stringify(current)}</span>
    </div>
  );
};

export default Results;
