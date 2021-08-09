import React from "react";

function WeatherCard(props) {
  //dt: key trong 1 list api tra ve
  //main: nhung yeu to chinh nhu nhiet do, do am,...

  const { dt, temp_min, temp_max, main, icon } = props;
  const date = new Date(dt);
  return (
    <div className="card mt-3">
      <img
        className="card-img-top"
        src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
        alt="img-weather"
      />
      <div className="card-body">
        <h5 className="card-title">{main}</h5>
        <p className="card-text">
          {date.toLocaleDateString("en-GB")} - {date.toLocaleTimeString()}
        </p>
        <p className="card-text">Min: {Math.trunc(temp_min - 273.15)} ℃</p>
        <p className="card-text">Max: {Math.trunc(temp_max - 273.15)} ℃</p>
      </div>
    </div>
  );
}

export default WeatherCard;
