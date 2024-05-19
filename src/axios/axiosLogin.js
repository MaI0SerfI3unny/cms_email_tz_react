import { instance } from "./instance"

export const axiosLogin = ({ username, password }) => {
    const hash = btoa(`${username}:${password}`)
    return instance(hash).get(`users/current/`)
}