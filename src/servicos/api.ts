import axios from "axios"

const API = axios.create({
    baseURL: 'http://192.168.100.48:3000'
})

export { API }