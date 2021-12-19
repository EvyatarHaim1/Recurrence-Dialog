import {
    UPDATE_CITY,
    GET_CURRENT_WEATHER,
    GET_FIVE_DAYS_FORECAST
} from "./event.action";

const initialState = {
    city: 'tel aviv',
    locationKey: '215854',
    current_Weather_Metric: '',
    current_Weather_Imperial: '',
    weatherStatus: '',
    dailyForecast: [],
    headlineText: '',
}

export default (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_CITY:
            return {
                ...state,
                city: action.payload.city,
                locationKey: action.payload.key
            }
        case GET_CURRENT_WEATHER:
            return {
                ...state,
                current_Weather_Metric: action.payload.tempC,
                current_Weather_Imperial: action.payload.tempF,
                weatherStatus: action.payload.weatherStatus
            }
        case GET_FIVE_DAYS_FORECAST:
            return {
                ...state,
                dailyForecast: action.payload.forecast,
                headlineText: action.payload.headlineText
            }
        default:
            return state;
    }
};