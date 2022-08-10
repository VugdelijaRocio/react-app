import axios, { AxiosRequestConfig } from "axios";

//const baseURL = process.env.REACT_APP_API_URL; => I'm not using env just because this is a test
const baseURL = "https://api.factoryfour.com";

const headers: AxiosRequestConfig["headers"] = {};

const API = axios.create({ baseURL, headers });

API.interceptors.request.use((config) => {
    if (config.headers === undefined) {
        config.headers = {};
    }

    config.headers["Content-Type"] = "application/json";

    return config;
});

export default API;
