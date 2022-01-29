import axios from 'axios'
import { useState } from 'react'

const usePostDataToAPI = () => {
  const BASE_URL = process.env.REACT_APP_BACKEND_URL
  const [messages, setMessages] = useState({
    success: '',
    error: '',
  })
  const postData = async (url: string, params: unknown) => {
    await axios.post(`${BASE_URL}/${url}`, params)
      .then(() => setMessages({ error: '', success: 'Data was posted' }))
      .catch((err: string) => {
        console.log(err)
        setMessages({ error: 'Error occurred', success: '' })
      })
  }
  return {
    postData,
    messages,
  }
}

export default usePostDataToAPI
