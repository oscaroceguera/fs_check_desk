import axios from 'axios'
const api = 'http://localhost:8000/api'

const headers = (token) => ({ headers: { 'Authorization': token } })

export const signupUser = (data) =>
  axios
    .post(`${api}/auth/register`, data)
    .then((items) => items)

export const login = (data) =>
  axios
    .post(`${api}/auth/login`, data)
    .then((response) => response)

export const getSchemas = (token) =>
  axios
    .get(`${api}/auth/schemas`, headers(token))
    .then((items) => items.data)

export const postSchema = (data, token) =>
  axios
    .post(`${api}/auth/schema`, data, headers(token))
    .then((response) => response.data)
