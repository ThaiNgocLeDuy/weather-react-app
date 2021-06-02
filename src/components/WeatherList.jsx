import React from "react";
import WeatherCard from "./WeatherCard";

function WeatherList(props) {
  const { weather } = props;
  return (
    <div className="row">
      {weather.map(({ dt, main, weather }) => (
        <div className="col-3" key={dt}>
          <WeatherCard
            temp_max={main.temp_max}
            temp_min={main.temp_min}
            dt={dt * 1000}
            main={weather[0].main}
            icon={weather[0].icon}
          />
        </div>
      ))}
    </div>
  );
}

export default WeatherList;
