import axios from 'axios'
import { useEffect, useState } from 'react'

const useGetSingleDataFromAPI = (apiUrl: string, elementId: string) => {
  const BASE_URL = process.env.REACT_APP_BACKEND_URL
  const [result, setResult] = useState([])
  const [error, setError] = useState()
  const getData = async (url: string, id: string) => {
    await axios.get(`${BASE_URL}/${url}/${id}`)
      .then((res) => setResult(res.data))
      .catch((err) => setError(err))
  }
  useEffect(() => {
    getData(apiUrl, elementId)
  }, [])
  return [result, error]
}

export default useGetSingleDataFromAPI
