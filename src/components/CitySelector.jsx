import React, { useState } from "react";
import PropTypes from "prop-types";

CitySelector.propTypes = {
  handleSearch: PropTypes.func,
};

function CitySelector(props) {
  const [city, setCity] = useState('');

  const {handleSearch} = props;

  const onSearch = () => {
    handleSearch(city);
    setCity('');
  }

  const onKeyPress = (e) => {
    if (e.key === 'Enter') onSearch();
  }

  return (
    <>
      <div className="row">
        <div className="col-12">
          <h1>Nhập tên thành phố</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-12 text-center mt-3 mb-3">
          <input
            type="text"
            placeholder="Nhập tên thành phố"
            className="text-center"
            onChange={(e) => setCity(e.target.value)}
            value={city}
            onKeyPress={onKeyPress}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <button 
          type="submit" 
          className="btn btn-primary"
          onClick={() => onSearch(city)}
          >
            Kiểm tra nhiệt độ
          </button>
        </div>
      </div>
    </>
  );
}

export default CitySelector;
