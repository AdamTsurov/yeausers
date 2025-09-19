import React from 'react'
import sharedStyles from '@styles/sharedStyles.module.css'

const ContainerInfo = ({ styles = {}, className = '', children, ...props }) => {
    const containerClass = `${sharedStyles.container} ${className}`

    return (
        <div style={styles} className={containerClass} {...props}>
            {children}
        </div>
    )
}

export default ContainerInfo
