import { WEATHER_ACTIONS } from "./constants";

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
