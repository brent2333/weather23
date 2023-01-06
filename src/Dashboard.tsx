import { FormEvent } from "react";
import { useGetCurrentWeatherQuery } from './weatherApiService';
import { useAppSelector, useAppDispatch } from "./hooks";
import { current } from './weatherSearchSlice';
const Dashboard = () => {
  const selectedCurrentWeather = useAppSelector((state) => state.selectedCurrentWeather);
  let { data: currentWeather } = useGetCurrentWeatherQuery(selectedCurrentWeather);
  currentWeather = currentWeather ?? undefined;
  const dispatch = useAppDispatch();

  return (
    <div className="">
      <form
        onSubmit={(event: FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
          const formData = new FormData(event.target as HTMLFormElement);
          const loc = formData.get("location")?.toString() ?? "";
          console.log('SUBMIT', loc)
          dispatch(current(loc));
        }}
      >
        <label htmlFor="location">
          Location
          <input id="location" name="location" placeholder="Location" />
        </label>

        <button>Submit</button>
      </form>
    </div>
  );
};

export default Dashboard;