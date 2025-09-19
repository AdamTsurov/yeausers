import React from 'react'

const IconImage = ({
    icon,
    alt = 'img',
    styles = {},
    className = '',
    ...props
}) => {
    return (
        <img
            src={icon}
            alt={alt}
            style={styles}
            className={className}
            {...props}
        />
    )
}

export default IconImage
