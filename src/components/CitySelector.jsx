import React, { useState } from "react";
import PropTypes from "prop-types";
import {API_KEY, API_BASE_URL} from './../apis/config';

CitySelector.propTypes = {};

function CitySelector(props) {
  const [city, setCity] = useState("");

  const handleSearch = () => {
    fetch(`${API_BASE_URL}/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`)
    .then((response) => response.json())
    .then((result) => console.log(result));
    setCity('');
  }

  const handleEnter = (event) => {
    if (event.key === 'Enter') handleSearch();
  }

  return (
    <>
      <div className="row">
        <div className="col-12">
          <h1>Search your city</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-12 text-center mt-3 mb-3">
          <input
            type="text"
            placeholder="Enter city's name"
            className="text-center"
            onChange={(e) => setCity(e.target.value)}
            value={city}
            onKeyPress={handleEnter}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <button 
          type="submit" 
          className="btn btn-primary"
          onClick={handleSearch}
          >
            Check Weather
          </button>
        </div>
      </div>
    </>
  );
}

export default CitySelector;
