import React from 'react'
import { useUsers } from '@hooks/useUsers'
import PopupItems from '@components/PopupItems/PopupItems'
import PopupItemMenu from '@components/PopupItemMenu/PopupItemMenu'
import UsersListWithLoader from '@components/UsersListWithLoader/UsersListWithLoader'
import WithSearchAndAdd from '@components/WithSearchAndAdd/WithSearchAndAdd'
import iconRemove from '@icons/icon_menu_remove.svg'
import iconEdit from '@icons/icon_menu_edit.svg'
import FavoriteUsersModalManager from '@components/FavoriteUsersModalManager/FavoriteUsersModalManager'

const FavoriteUsersListContainer = () => {
    const {
        favorites: favoriteUsers,
        removeFromFavorites,
        editFavorite,
        createFavorite,
    } = useUsers()

    return (
        <FavoriteUsersModalManager
            createFavorite={createFavorite}
            editFavorite={editFavorite}
        >
            {({ openCreate, openEdit }) => (
                <WithSearchAndAdd
                    data={favoriteUsers}
                    title="Favorite Users"
                    addButtonText="Add"
                    searchPlaceholder="search favorites..."
                    onAddClick={openCreate}
                    render={(filteredData) => (
                        <UsersListWithLoader
                            users={filteredData}
                            renderPopupItems={(user, id) => (
                                <PopupItems>
                                    <PopupItemMenu
                                        title="remove from favorite"
                                        onClick={() => removeFromFavorites(id)}
                                        icon={iconRemove}
                                        style={{ backgroundColor: '#ff9292' }}
                                    />
                                    <PopupItemMenu
                                        title="edit favorite"
                                        onClick={() => openEdit(user)}
                                        icon={iconEdit}
                                    />
                                </PopupItems>
                            )}
                        />
                    )}
                />
            )}
        </FavoriteUsersModalManager>
    )
}

export default FavoriteUsersListContainer
