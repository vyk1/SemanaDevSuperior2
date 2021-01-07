import axios from "axios"

const API_URL = 'https://delivery-sds-2.herokuapp.com'

const api = axios.create({
    baseURL: API_URL
})

export default api