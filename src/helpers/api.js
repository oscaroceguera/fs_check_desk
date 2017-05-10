import axios from 'axios'
const api = 'http://localhost:8000/api'

const headers = {
  headers: { 'Authorization': localStorage.getItem('token') }
}

export const signupUser = (data) =>
  axios
    .post(`${api}/auth/register`, data)
    .then((items) => items)

export const login = (data) =>
  axios
    .post(`${api}/auth/login`, data)
    .then((response) => response)

export const getSchemas = () => [
  { id: '6a1129cc-5cc1-4c1d-9efe-1cb6dbed3199', name: 'SENASICA', version: '1.2', description: 'Design Patterns is a library with its code with a lightweight 3D library for transferring data fetching. VueJS is a high-level.  VueJS is a.' },
  { id: 'a413210f-74a4-454e-9ca7-cbe315b178ca', name: 'Primus gfs', version: '1.2', description: 'Design Patterns is a library with its code with a lightweight 3D library for transferring data fetching. VueJS is a high-level.  VueJS is a.' },
  { id: '4e61907d-adc4-420e-b597-332c6031c22c', name: 'SENASICA BUMA GLOBAL GAB SENASICA BUMA GLOBAL GAB SENASICA BUMA GLOBAL GAB', version: '1.2', description: 'Design Patterns is a library with its code with a lightweight 3D library for transferring data fetching. VueJS is a high-level.  VueJS is a.' },
  { id: 'a1bc995b-8beb-406d-9068-db7d3395ed6c', name: 'SENASICA BUMA GLOBAL GAB', version: '1.2', description: 'Design Patterns is a library with its code with a lightweight 3D library for transferring data fetching. VueJS is a high-level.  VueJS is a.' },
  { id: '4baba281-4e62-4dbf-9e17-04f86e6c26e2', name: 'SENASICA BUMA GLOBAL GAB', version: '1.2', description: 'Design Patterns is a library with its code with a lightweight 3D library for transferring data fetching. VueJS is a high-level.  VueJS is a.' },
  { id: '32df06bc-8194-4232-be57-822dabb06e6f', name: 'SENASICA BUMA GLOBAL GAB', version: '1.2', description: 'Design Patterns is a library with its code with a lightweight 3D library for transferring data fetching. VueJS is a high-level.  VueJS is a.' },
  { id: '888a967b-ba43-4e7b-b6ab-32262825a314', name: 'SENASICA BUMA GLOBAL GAB SENASICA BUMA GLOBAL GAB SENASICA BUMA GLOBAL GAB', version: '1.2', description: 'Design Patterns is a library with its code with a lightweight 3D library for transferring data fetching. VueJS is a high-level.  VueJS is a.' }
]

export const postSchema = (data) =>
  axios
    .post(`${api}/auth/schema`, data, headers)
    .then((response) => response.data)
