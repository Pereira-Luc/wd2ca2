import axios from "axios"

axios.defaults.withCredentials = true

export const loginUser = async (username, pwInput) => {
    const { data } = await axios.post("http://192.168.178.125:7777/api/login", {
        username,
        pwInput,
    })
    return data
}