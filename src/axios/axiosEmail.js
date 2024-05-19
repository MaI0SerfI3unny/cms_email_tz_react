import { instance } from "./instance"

export const createNewEmail = ({ username, password, sender, recipient,subject, message }) => {
    const hash = btoa(`${username}:${password}`)
    return instance(hash).post(`emails/`, { sender, recipient,subject, message })
}

export const getEmail = ({ username, password, offset }) => {
    const hash = btoa(`${username}:${password}`)
    return instance(hash).get(`emails/?limit=${process.env.REACT_APP_LIMIT}&offset=${offset}`)
}