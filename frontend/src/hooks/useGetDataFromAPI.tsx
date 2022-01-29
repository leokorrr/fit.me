import axios from 'axios'
import { useEffect, useState } from 'react'

const useGetDataFromAPI = (apiUrl: string) => {
  const BASE_URL = process.env.REACT_APP_BACKEND_URL
  const [results, setResults] = useState([])
  const [error, setError] = useState()
  const getData = async (url: string) => {
    await axios.get(`${BASE_URL}/${url}`)
      .then((res) => setResults(res.data))
      .catch((err) => setError(err))
  }
  useEffect(() => {
    getData(apiUrl)
  }, [])
  return [results, error]
}

export default useGetDataFromAPI
