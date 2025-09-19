import IconImage from '@ui/IconImage/IconImage'
import React from 'react'

const NavCardUsersInfo = ({
    styles = {},
    className = '',
    title,
    count = 0,
    icon,
    alt,
}) => {
    return (
        <>
            <div className={className.containerInfo}>
                <h3 className={className.title}>{title}</h3>
                <p className={className.count}>{count}</p>
            </div>
            <IconImage className={className.icon} icon={icon} alt={alt} />
        </>
    )
}

export default NavCardUsersInfo
