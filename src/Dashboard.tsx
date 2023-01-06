import { FormEvent } from "react";
import { useGetCurrentWeatherQuery } from "./weatherApiService";
import { useAppSelector, useAppDispatch } from "./hooks";
import { current } from "./weatherSearchSlice";
import Results from "./Results";
const Dashboard = () => {
  const selectedCurrentWeather = useAppSelector(
    (state) => state.weatherSearch.value.currentLocation
  );
  let { data: currentWeather } = useGetCurrentWeatherQuery(
    selectedCurrentWeather
  );
  currentWeather = currentWeather ?? undefined;
  const dispatch = useAppDispatch();

  return (
    <div className="grid grid-flow-col auto-cols-max mx-auto my-0 max-w-screen-lg">
      <div className="col-auto max-w-xs h-48">
        <form
          onSubmit={(event: FormEvent<HTMLFormElement>): void => {
            event.preventDefault();
            const formData = new FormData(event.target as HTMLFormElement);
            const loc = formData.get("location")?.toString() ?? "";
            console.log("SUBMIT", loc);
            dispatch(current(loc));
          }}
          className="bg-gray-300 shadow-md rounded px-8 pt-6 pb-6 m-4"
        >
          <div className="mb-4">
            <label
              htmlFor="location"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Search a Location
              <input
                id="location"
                name="location"
                placeholder="Location"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </label>
          </div>
          <button className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
            Submit
          </button>
        </form>
      </div>
      {currentWeather ? (
      <div className="col-auto h-48">
      <Results current={currentWeather} />
      </div>
      ): null}
    </div>
  );
};

export default Dashboard;
