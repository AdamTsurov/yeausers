import React from 'react'
import styles from './UserModalContent.module.css'

const UserModalContent = ({ modalTitle, children }) => {
    return (
        <div
            className={styles['modal-content']}
            onClick={(e) => e.stopPropagation()}
        >
            <p className={styles['modal-content-title']}>{modalTitle}</p>
            {children}
        </div>
    )
}

export default UserModalContent
