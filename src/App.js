import "./App.css";
import CitySelector from "./components/CitySelector.jsx";
import { API_KEY, API_BASE_URL } from "./apis/config";
import UseFetch from "./custom/UseFetch";
import WeatherList from "./components/WeatherList";

function App() {
  const { data, error, isLoading, setUrl } = UseFetch();

  return (
    <div className="App">
      <h1>Weather App</h1>
      <CitySelector
        handleSearch={(city) =>
          setUrl(`${API_BASE_URL}/data/2.5/forecast?q=${city}&appid=${API_KEY}`)
        }
      />

      {data && <WeatherList weather={data.list} />}
    </div>
  );
}

export default App;
