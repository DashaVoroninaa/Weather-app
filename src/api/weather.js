import {request} from './request';

const host = 'https://api.openweathermap.org/data/2.5';
const TOKEN = process.env.REACT_APP_TOKEN;

export const getCurrentWeather = ({city, units = 'metric'}) => {
    const url = `${host}/weather`;

    const params = {
        q: city,
        units,
        appid: TOKEN,
    };

    return request(url, {params});
};
