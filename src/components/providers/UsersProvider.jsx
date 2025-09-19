import { API_BASE_URL, API_ENDPOINTS } from '@constants/api'
import { useDataApi } from '@hooks/useDataApi'
import { useToggleFavorite } from '@hooks/useToggleFavorite'
import { useEditFavoriteUsers } from '@hooks/useEditFavoriteUsers'
import { UsersContext } from '../../context/UsersContext'

export const UsersProvider = ({ children }) => {
    const {
        data: users,
        error,
        loading,
        refetch,
    } = useDataApi(`${API_BASE_URL}${API_ENDPOINTS.USERS}`, 'users')

    const { favorites, createFavorite, editFavorite, removeFavorite } =
        useEditFavoriteUsers('favoriteUsers')

    const { addToFavorites, removeFromFavorites, isFavorite } =
        useToggleFavorite(favorites, createFavorite, removeFavorite)

    return (
        <UsersContext.Provider
            value={{
                users,
                error,
                loading,
                refetch,
                favorites,
                addToFavorites,
                removeFromFavorites,
                isFavorite,
                editFavorite,
            }}
        >
            {children}
        </UsersContext.Provider>
    )
}
