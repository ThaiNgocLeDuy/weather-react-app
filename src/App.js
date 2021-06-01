import "./App.css";
import CitySelector from './components/CitySelector.jsx';

function App() {
  return (
    <div className="App">
        <h1>Weather App</h1>
        {/* <WeatherCard 
          dt={1602104400 * 1000} 
          temp_min="28" 
          temp_max="30"
          main="Hot"
          icon="01d"
        /> */}
        <CitySelector />
    </div>
  );
}

export default App;
