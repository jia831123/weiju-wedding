import { useState, useEffect } from 'react'
import request from '../hooks/useRequest'

const useGoogleSheetsData = (
  spreadsheetId: string,
  spreadsheetName: string
) => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `https://content-sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${spreadsheetName}`
        const response = await request({
          method: 'get',
          url,
          data: {
            key: 'AIzaSyA8t-hUZ5R1OHDbUoVpt55lxWq9uh1Yq9Q',
          },
        })
        console.log(response)
        setData(response.data.values || [])
        setLoading(false)
      } catch (error) {
        console.error('Error fetching data:', error)
        setLoading(false)
      }
    }

    fetchData()
  }, [spreadsheetId, spreadsheetName])

  return { data, loading }
}

export default useGoogleSheetsData
