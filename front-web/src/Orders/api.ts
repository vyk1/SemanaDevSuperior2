import axios from "axios"

const API_URL = 'https://delivery-sds-2.herokuapp.com'


export const MB_TOKEN = process.env.REACT_APP_MB_TOKEN

const api = axios.create({
    baseURL: API_URL
})

export default api