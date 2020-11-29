import * as Types from "./actionTypes";
import Axios from "axios";
import { addRecentLocation } from "../../utils";

const API_KEY = "3fb296926f3e5f37563712dd032de47c";

export const load_weather_data = (location) => (dispatch) => {
	if (!location)
		return dispatch({
			type: Types.SET_ERRORS,
			payload: "Please enter a location!",
		});

	// set loading true
	dispatch({ type: Types.SET_LOADING, payload: true });
	dispatch({ type: Types.WEATHER_DATA_LOADED, payload: {} });
	const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`;
	Axios.get(url)
		.then((res) => {
			dispatch({
				type: Types.WEATHER_DATA_LOADED,
				payload: res.data
			});

            addRecentLocation(res.data.name)
            
            // set loading false
			dispatch({ type: Types.SET_LOADING, payload: false });
		})
		.catch((error) => {
            console.log(error);
			dispatch({
				type: Types.SET_ERRORS,
				payload: error.response
					? "Weather data not found!"
					: "Please check your network connection!",
			});
			dispatch({ type: Types.SET_LOADING, payload: false });
		});
};
