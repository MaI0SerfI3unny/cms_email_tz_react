import axios from "axios";

export const instance = (auth = false) => {
    return axios.create({
        baseURL: process.env.REACT_APP_API_URL,
        headers: auth ? {
            'authorization': `Basic ${auth}`,
        } : {}
    });
}