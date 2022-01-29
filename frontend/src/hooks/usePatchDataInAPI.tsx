import axios from 'axios'
import { useState } from 'react'

const usePatchDataInAPI = () => {
  const BASE_URL = process.env.REACT_APP_BACKEND_URL
  const [messages, setMessages] = useState({
    success: '',
    error: '',
  })
  const patchData = async (url: string, id: string, params: unknown) => {
    await axios.patch(`${BASE_URL}/${url}/${id}`, params)
      .then(() => setMessages({ error: '', success: 'Data was updated' }))
      .catch((err: string) => {
        console.log(err)
        setMessages({ error: 'Error occurred', success: '' })
      })
  }
  return {
    patchData,
    messages,
  }
}

export default usePatchDataInAPI
