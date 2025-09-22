import React from 'react'
import { Link } from 'react-router'
import styles from './NavUserInfo.module.css'
import { useUsers } from '@hooks/useUsers'
import ContainerInfo from '@ui/ContainerInfo/ContainerInfo'
import NavCardUsersInfo from '@components/NavCardUsersInfo/NavCardUsersInfo'
import usersInfoImg from '@icons/avatar_users.svg'
import favoriteUsersInfoImg from '@icons/avatar_favorite_users.svg'

const NavUserInfo = () => {
    const { favorites, users } = useUsers()

    const navInfoClassnames = {
        containerInfo: styles['nav-users-info'],
        title: styles['nav-users-info-title'],
        count: styles['nav-users-info-count'],
        icon: styles['nav-icon'],
    }

    return (
        <div className={styles['nav-info']}>
            <Link to="/users" className={styles['nav-link']}>
                <ContainerInfo className={styles['nav-block-users']}>
                    <NavCardUsersInfo
                        title={'Total Users'}
                        count={users.length}
                        className={navInfoClassnames}
                        icon={usersInfoImg}
                        alt={'icon-image-users'}
                    />
                </ContainerInfo>
            </Link>

            <Link to="/favorite-users" className={styles['nav-link']}>
                <ContainerInfo className={styles['nav-block-favorite-users']}>
                    <NavCardUsersInfo
                        title={'Favorite Users'}
                        count={favorites.length}
                        className={navInfoClassnames}
                        icon={favoriteUsersInfoImg}
                        alt={'icon-image-favorite-users'}
                    />
                </ContainerInfo>
            </Link>
        </div>
    )
}

export default NavUserInfo
