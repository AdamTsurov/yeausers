import React from 'react'
import styles from './UserCard.module.css'
import ContainerInfo from '@ui/ContainerInfo/ContainerInfo'
import { getGenderInfo } from '@utils/genderUtils'
import iconMenuButton from '@icons/icon_menu.svg'
import UserCardInfo from '@components/UserCardInfo/UserCardInfo'
import UserCardContactInfo from '@components/UserCardContactInfo/UserCardContactInfo'

const UserCard = ({ user, age, popupItems }) => {
    const { icon, label, type } = getGenderInfo(user.gender)

    console.log(type)

    const userInfoClassnames = {
        containerInfo: styles['user-container-info'],
        block: styles['user-block-info'],
        basicInfo: styles['user-basic-info'],
        contactInfo: styles['user-contact-info'],
        icon: styles['user-icon'],
        menuItems: styles['user-menu-items'],
        menuItem: styles['user-menu-item'],
        buttonMenu: styles['user-menu-button'],
        popupItemsContainer: styles['user-popup-items'],
    }

    return (
        <ContainerInfo className={styles['user-card-info']}>
            <UserCardInfo
                className={userInfoClassnames}
                age={age}
                name={user.name}
                altForUserIcon={'icon-image-' + type}
                iconUser={icon}
                type={type}
                iconMenuButton={iconMenuButton}
                popupItems={popupItems}
            />

            <UserCardContactInfo
                className={userInfoClassnames}
                email={user.email}
                phone={user.phone}
            />
        </ContainerInfo>
    )
}

export default UserCard
