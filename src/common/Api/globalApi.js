import axios from "axios";

export const customFetch = axios.create({
    baseURL: process.env.REACT_APP_API_URL
})