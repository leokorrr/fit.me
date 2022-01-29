import axios from 'axios'

const BASE_URL = 'http://localhost:5000/API'
export const postData = async (url: string, obj: any) => axios.post(`${BASE_URL}/${url}`, obj)
export const updateData = async (url: string, obj: any, id: any) => axios.put(`${BASE_URL}/${url}/${id}`, obj)
export const deleteData = async (url: string, id: any) => axios.delete(`${BASE_URL}/${url}/${id}`)
