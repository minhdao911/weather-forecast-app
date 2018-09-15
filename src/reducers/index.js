import { combineReducers } from "redux";
import WeatherReducer from "./reducer_weather";

const rootReducers = combineReducers({
  weather: WeatherReducer
});

export default rootReducers;
