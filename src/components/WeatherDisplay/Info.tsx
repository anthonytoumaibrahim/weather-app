import { useWeatherData } from "../../hooks/useWeatherDisplay";

const Info = () => {
  const { weatherData } = useWeatherData();

  return <div>{weatherData?.visibility}</div>;
};

export default Info;
