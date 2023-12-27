import api from "../api";
import { handleError } from "../utils";

// Dotenv
import { REACT_NATIVE_OPEN_WEATHER_API_KEY } from 'react-native-dotenv';

const isBrowser = typeof window !== `undefined`;

export const getCoordinates = async (city) => {
    if (!isBrowser) return false;

    return await api
        .get(`/geo/1.0/direct?q=${city}&limit=5&appid=${REACT_NATIVE_OPEN_WEATHER_API_KEY}/`)
        .then(function (response) {
            if (response.status === 200) {
                return {
                    status: true,
                    data: response.data,
                };
            }
        })
        .catch(function (error) {
            return handleError(error);
        });
};

export const getWeather = async (lat, lon) => {
    if (!isBrowser) return false;

    return await api
        .get(`/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${REACT_NATIVE_OPEN_WEATHER_API_KEY}`)
        .then(function (response) {
            if (response.status === 200) {
                return {
                    status: true,
                    data: response.data,
                };
            }
        })
        .catch(function (error) {
            return handleError(error);
        });
};

const GeneralServices = {
    getCoordinates,
    getWeather,
};

export default GeneralServices;
