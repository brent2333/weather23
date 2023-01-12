import { FormEvent, Fragment, lazy, Suspense } from "react";
import { useGetCurrentWeatherQuery } from "./weatherApiService";
import { useAppSelector, useAppDispatch } from "./hooks";
import { current } from "./weatherSearchSlice";
import { ArrowPathIcon } from "@heroicons/react/24/outline";

const Results = lazy(() => import("./Results"));
const Forecast = lazy(() => import("./Forecast"));


const Dashboard = () => {
  const selectedCurrentLocation = useAppSelector(
    (state) => state.weatherSearch.value.currentLocation
  );
  let { data: currentWeather } = useGetCurrentWeatherQuery(
    selectedCurrentLocation
  );
  currentWeather = currentWeather ?? undefined;
  const dispatch = useAppDispatch();

  return (
    <Fragment>
      <div className="col-auto lg:max-w-xs h-48 sm:min-w-full md:min-w-full">
        <form
          onSubmit={(event: FormEvent<HTMLFormElement>): void => {
            event.preventDefault();
            const formData = new FormData(event.target as HTMLFormElement);
            const loc = formData.get("location")?.toString() ?? "";
            dispatch(current(loc));
          }}
          className="bg-gray-300 shadow-md rounded px-8 pt-6 pb-6 m-6 lg:max-w-md md:max-w-sm sm:max-w-full"
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
        <div data-testid="results-container">
          <Suspense
              fallback={
                <div className="items-center justify-center flex p-4">
                  <div className="w-10 h-10 animate-spin"><ArrowPathIcon/></div>
                </div>
              }>
              <Results current={currentWeather} />
          </Suspense>
          <Suspense
              fallback={
                <div className="items-center justify-center flex p-4">
                  <div className="w-10 h-10 animate-spin"><ArrowPathIcon/></div>
                </div>
              }
            >
          <Forecast location={selectedCurrentLocation} />
          </Suspense>
        </div>
      ) : null}
    </Fragment>
  );
};

export default Dashboard;
