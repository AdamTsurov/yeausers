import React, { useState } from 'react'
import ModalUsers from '@components/ModalUsers/ModalUsers'
import UserModalContent from '@components/UserModalContent/UserModalContent'
import FormUsers from '@components/FormUsers/FormUsers'

const FavoriteUsersModalManager = ({
    createFavorite,
    editFavorite,
    children,
}) => {
    const [isOpen, setIsOpen] = useState(false)
    const [editingUser, setEditingUser] = useState(null)

    const openCreate = () => {
        setEditingUser(null)
        setIsOpen(true)
    }

    const openEdit = (user) => {
        setEditingUser(user)
        setIsOpen(true)
    }

    const close = () => {
        setEditingUser(null)
        setIsOpen(false)
    }

    return (
        <>
            {children({ openCreate, openEdit })}

            {isOpen && (
                <ModalUsers toggleShowingModal={close}>
                    <UserModalContent
                        modalTitle={
                            editingUser
                                ? 'Edit Favorite User'
                                : 'Create Favorite User'
                        }
                    >
                        <FormUsers
                            initialValues={editingUser}
                            onSubmit={(values) => {
                                if (editingUser) {
                                    editFavorite(editingUser.id, values)
                                } else {
                                    createFavorite(values)
                                }
                                close()
                            }}
                        />
                    </UserModalContent>
                </ModalUsers>
            )}
        </>
    )
}

export default FavoriteUsersModalManager
