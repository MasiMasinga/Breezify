import axios from 'axios';

// Dotenv
import { REACT_NATIVE_OPEN_WEATHER_URL } from 'react-native-dotenv';

const instance = axios.create({
    baseURL: REACT_NATIVE_OPEN_WEATHER_URL,
    timeout: 120000,
    timeoutErrorMessage: 'timeout',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json; charset=UTF-8',
    },
});

instance.interceptors.response.use(
    (response) => {
        return response;
    }
);

export default instance;