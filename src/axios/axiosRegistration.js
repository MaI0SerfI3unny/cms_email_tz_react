import { instance } from "./instance"

export const axiosRegister = ({ username, password, email }) => {
    const hash = btoa(`${username}:${password}`)
    return instance(hash).post("users/", { username, password, email })
}