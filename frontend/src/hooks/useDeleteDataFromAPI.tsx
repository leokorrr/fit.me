import axios from 'axios'
import { useState } from 'react'

const useDeleteDataFromAPI = () => {
  const BASE_URL = process.env.REACT_APP_BACKEND_URL
  const [messages, setMessages] = useState({
    success: '',
    error: '',
  })
  const deleteData = async (url: string, id: string) => {
    await axios.delete(`${BASE_URL}/${url}/${id}`)
      .then(() => setMessages({ error: '', success: 'Data was deleted' }))
      .catch((err: string) => {
        console.log(err)
        setMessages({ error: 'Error occurred', success: '' })
      })
  }
  return {
    deleteData,
    messages,
  }
}

export default useDeleteDataFromAPI
