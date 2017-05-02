import axios from 'axios'
const api = 'http://localhost:8000/api'

export const signupUser = (data) =>
  axios
    .post(`${api}/auth/register`, data)
    .then((items) => items)

export const login = (data) =>
  axios
    .post(`${api}/auth/login`, data)
    .then((response) => response)
