import { useGetCurrentWeatherQuery } from "./weatherApiService";
const useWeatherQuery = async (location: string) => {
  const { data: current, isLoading } = useGetCurrentWeatherQuery(location, {
    skip: !location
  })
  if (!location) {
    return [[], 'loaded'];
  }
  return [current ?? {}, isLoading ? "loading" : "loaded"];
}

export default useWeatherQuery;