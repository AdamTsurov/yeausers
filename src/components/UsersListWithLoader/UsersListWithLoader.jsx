import React from 'react'
import WithLoader from '@components/WithLoader/WithLoader'
import UsersList from '@components/UsersList/UsersList'

const UsersListWithLoader = ({ users, loading, error, renderPopupItems }) => {
    return (
        <WithLoader loading={loading} error={error} empty={!users?.length}>
            <UsersList users={users} renderPopupItems={renderPopupItems} />
        </WithLoader>
    )
}

export default UsersListWithLoader
