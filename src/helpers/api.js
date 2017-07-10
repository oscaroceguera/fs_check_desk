import axios from 'axios'
const api = 'http://localhost:8000/api'

const headers = (token) => ({ headers: { 'Authorization': token } })

// AUTH
export const signupUser = (data) =>
  axios
    .post(`${api}/auth/register`, data)
    .then((items) => items)

export const login = (data) =>
  axios
    .post(`${api}/auth/login`, data)
    .then((response) => response)

// SCHEMAS
export const getSchemas = (token) =>
  axios
    .get(`${api}/auth/schemas`, headers(token))
    .then((items) => items.data)

export const getSchemaById = (id, token) =>
  axios
    .get(`${api}/auth/schemas/${id}`, headers(token))
    .then((items) => items.data)

export const postSchema = (data, token) =>
  axios
    .post(`${api}/auth/schema`, data, headers(token))
    .then((response) => response.data)

export const putSchema = (schemaId, data, token) =>
  axios
    .put(`${api}/auth/schemas/${schemaId}`, data, headers(token))
    .then((response) => response.data)

// MODULES
export const postModule = (data, token) =>
  axios
    .post(`${api}/auth/module`, data, headers(token))
    .then((response) => response.data)

export const putModule = (id, data, token) =>
  axios
    .put(`${api}/auth/modules/${id}`, data, headers(token))
    .then((response) => response.data)

export const getModulesBySchemaId = (schemaId, token) =>
  axios
    .get(`${api}/auth/modules/${schemaId}`, headers(token))
    .then((items) => items.data)

// ITEMS
export const postItem = (data, token) =>
  axios
    .post(`${api}/auth/item`, data, headers(token))
    .then((response) => response.data)

export const getItemsBySchemaId = (schemaId, token) =>
  axios
    .get(`${api}/auth/items/${schemaId}`, headers(token))
    .then((items) => items.data)

export const deleteItemById = (id, token) =>
  axios
    .delete(`${api}/auth/items/${id}`, headers(token))
    .then((items) => items.data)

export const putItem = (id, data, token) =>
  axios
    .put(`${api}/auth/items/${id}`, data, headers(token))
    .then((response) => response.data)

// CHECKLIST
export const postChecklist = (data, token) =>
  axios
    .post(`${api}/auth/checklist`, data, headers(token))
    .then((response) => response.data)

export const putChecklist = (checklistId, data, token) =>
  axios
    .put(`${api}/auth/checklists/${checklistId}`, data, headers(token))
    .then((response) => response.data)

export const getChecklists = (token) =>
  axios
    .get(`${api}/auth/checklists`, headers(token))
    .then(response => response.data)
