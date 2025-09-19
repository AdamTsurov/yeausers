import React from 'react'
import styles from './PopupItems.module.css'

const PopupItems = ({ children, style = {}, className = '', ...props }) => {
    const popupClass = `${styles['popup-items']} ${className}`

    return (
        <div style={style} className={popupClass} {...props}>
            {children}
        </div>
    )
}

export default PopupItems
