import axios from 'axios'

const api  = axios.create({
    baseURL: 'https://talkapp-backend.heroku.com',
})

export default api;