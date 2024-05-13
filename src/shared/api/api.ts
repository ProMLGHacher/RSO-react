import { store } from "../../app/store/store";
import { logOut } from "../../features/authorization/authSlice";
import axios from "axios";

export const $baseURL = "http://82.97.249.229:9000"

export const $api = axios.create({
    baseURL: $baseURL,
})

$api.interceptors.request.use(
    config => {
        const token = store.getState().auth.tokens.accessToken;
        if (token) {
            config.headers.Authorization = `${token}`;
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

$api.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;
        if (error.response.status === 401 && !originalRequest._retry) {
            store.dispatch(logOut())
            return Promise.reject(error);
        }

        return Promise.reject(error);
    }
);