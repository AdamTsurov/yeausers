import axios from 'axios'
import { useEffect, useState } from 'react'

export const useDataApi = (url, cacheKey = 'users') => {
    const [data, setData] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)
    const [reload, setReload] = useState(0)

    useEffect(() => {
        const controller = new AbortController()

        const loadData = async () => {
            const cachedData = localStorage.getItem(cacheKey)
            if (cachedData) {
                setData(JSON.parse(cachedData))
            }

            setLoading(true)
            setError(null)

            try {
                const response = await axios.get(url, {
                    signal: controller.signal,
                })

                setData(response.data)
                localStorage.setItem(cacheKey, JSON.stringify(response.data))
            } catch (error) {
                if (axios.isCancel(error)) return
                setError(error.message)

                if (!cachedData) {
                    setData(null)
                }
            } finally {
                setLoading(false)
            }
        }

        loadData()

        return () => {
            controller.abort()
        }
    }, [url, cacheKey, reload])

    const refetch = () => setReload((r) => r + 1)

    return { data, error, loading, refetch }
}
