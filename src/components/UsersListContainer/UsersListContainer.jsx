import React from 'react'
import WithLoader from '@components/WithLoader/WithLoader'
import UsersList from '@components/UsersList/UsersList'
import { useUsers } from '@hooks/useUsers'
import favoriteUsersInfoImg from '@icons/avatar_favorite_users.svg'
import PopupItems from '@components/PopupItems/PopupItems'
import PopupItemMenu from '@components/PopupItemMenu/PopupItemMenu'
import UsersListWithLoader from '@components/UsersListWithLoader/UsersListWithLoader'

const UsersListContainer = () => {
    const {
        users,
        addToFavorites,
        removeFromFavorites,
        isFavorite,
        loading,
        error,
    } = useUsers()

    const renderPopupItems = (user, userId) => {
        const favorite = isFavorite(userId)
        return (
            <PopupItems>
                <PopupItemMenu
                    title={
                        favorite ? 'remove from favorite' : 'add to favorite'
                    }
                    style={
                        favorite
                            ? { backgroundColor: 'rgb(255, 226, 157)' }
                            : {}
                    }
                    onClick={() =>
                        favorite
                            ? removeFromFavorites(userId)
                            : addToFavorites(user, userId)
                    }
                    icon={favoriteUsersInfoImg}
                />
            </PopupItems>
        )
    }

    return (
        <UsersListWithLoader
            users={users}
            loading={loading}
            error={error}
            renderPopupItems={renderPopupItems}
        />
    )
}

export default UsersListContainer
