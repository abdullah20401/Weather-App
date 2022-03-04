import { useState, useEffect } from "react";

const useFetch = (location) => {
  const [data, setData] = useState([null]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(
      `https://api.weatherapi.com/v1/current.json?key=f05c9107971d43a1890213552222802&q=${location}&aqi=no`
    )
      .then((res) => {
        if (!res.ok) {
          throw Error("Could not fetch the data for that resource");
        }
        return res.json();
      })
      .then((data) => {
        setData({
          country: data.location.country,
          temp_f: Math.round(data.current.temp_f),
          temp_c: Math.round(data.current.temp_c),
          description: data.current.condition.text,
          icon: data.current.condition.icon
        });
        setIsLoading(false);
        setError(null);
      })
      .catch((err) => {
        setData(null);
        setIsLoading(false);
        setError(err.message);
      });
  }, [location]);
  return { data, isLoading, error };
};

export default useFetch;
