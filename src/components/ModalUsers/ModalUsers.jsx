import React, { useRef } from 'react'
import { useOnClickOutside } from '@hooks/useOnClickOutside'
import styles from './ModalUsers.module.css'

const ModalUsers = ({ toggleShowingModal, children }) => {
    const modalRef = useRef(null)
    useOnClickOutside(modalRef, toggleShowingModal)

    return (
        <div
            ref={modalRef}
            className={styles['modal']}
            onClick={toggleShowingModal}
        >
            {children}
        </div>
    )
}

export default ModalUsers
