import React from 'react'
import styles from './UsersList.module.css'
import UserCard from '@components/UserCard/UserCard'

const UsersList = ({ users, renderPopupItems }) => {
    return (
        <div className={styles['users-info-container']}>
            {users.map((user) => (
                <UserCard
                    key={user.id}
                    user={user}
                    id={user.id}
                    age={user.age ?? 'no-info'}
                    popupItems={renderPopupItems(user, user.id)}
                />
            ))}
        </div>
    )
}

export default UsersList
