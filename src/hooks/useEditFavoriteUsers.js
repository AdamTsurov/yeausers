import { useState, useEffect } from 'react'

export const useEditFavoriteUsers = (storageKey = 'favoriteUsers') => {
    const [favorites, setFavorites] = useState([])

    useEffect(() => {
        const cached = localStorage.getItem(storageKey)
        if (cached) {
            setFavorites(JSON.parse(cached))
        }
    }, [storageKey])

    useEffect(() => {
        localStorage.setItem(storageKey, JSON.stringify(favorites))
    }, [favorites, storageKey])

    const createFavorite = (user, id) => {
        const newId = id ?? Date.now()
        setFavorites((prev) => [...prev, { ...user, id: newId }])
    }

    const editFavorite = (id, updatedFields) => {
        setFavorites((prev) =>
            prev.map((fav) =>
                fav.id === id ? { ...fav, ...updatedFields } : fav
            )
        )
    }

    const removeFavorite = (id) => {
        setFavorites((prev) => prev.filter((fav) => fav.id !== id))
    }

    return {
        favorites,
        setFavorites,
        createFavorite,
        editFavorite,
        removeFavorite,
    }
}
