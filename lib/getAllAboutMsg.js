import axios from "axios"
axios.defaults.withCredentials = true

export const getFriends = async () => {
    const { data } = await axios.post("http://192.168.178.125:7777/api/getFriends", {})
    console.log(data)
    return data
}