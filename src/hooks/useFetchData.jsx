import axios from 'axios'
import { useState, useEffect } from 'react'

function useFetchData (url) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)
    axios
      .get(url)
      .then((res) => {
        setData(res.data)
        setLoading(false)
      })
      .catch((err) => {
        setData(err)
        setError(err)
        setLoading(false)
      })
  }, [url])

  return { data, error, loading }
}

export default useFetchData
