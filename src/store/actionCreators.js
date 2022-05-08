import { WEATHER_ACTIONS } from "./constants";
import {getCurrentWeather} from '../api'

export const fetchStart = () => ({
    type: WEATHER_ACTIONS.fetchStart
})

export const fetchError = () => ({
    type: WEATHER_ACTIONS.fetchError
})

export const fetchSuccess = (weather) => ({
    type: WEATHER_ACTIONS.fetchSuccess,
    payload: weather,
})

export const fetchWeather = (city) => {
    return async (dispatch) => {
        try {
            dispatch(fetchStart())
            const weather = await getCurrentWeather(city)
            dispatch(fetchSuccess(weather.main))
        } catch {
            dispatch(fetchError())
        }
    }
}
