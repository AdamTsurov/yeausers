import React from 'react'
import styles from './PopupItemMenu.module.css'

const PopupItemMenu = ({
    title,
    icon,
    onClick,
    style,
    className = '',
    ...props
}) => {
    const popupItemClass = `${styles['popup-item']} ${className}`

    return (
        <button
            className={popupItemClass}
            onClick={onClick}
            style={style}
            {...props}
        >
            <img src={icon} alt="icon-item" />
            <span>{title}</span>
        </button>
    )
}

export default PopupItemMenu
