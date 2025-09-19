import React from 'react'
import styles from './Input.module.css'

const Input = ({
    icon,
    startAdornment,
    endAdornment,
    containerStyles = {},
    inputStyles = {},
    containerClassName = '',
    inputClassName = '',
    children,
    ...inputProps
}) => {
    return (
        <div
            className={`${styles.inputContainer} ${containerClassName}`}
            style={containerStyles}
        >
            {startAdornment && (
                <div className={styles.startAdornment}>{startAdornment}</div>
            )}

            <input
                type="text"
                className={`${styles.input} ${inputClassName}`}
                style={inputStyles}
                {...inputProps}
            />

            {endAdornment && (
                <div className={styles.endAdornment}>{endAdornment}</div>
            )}

            {children}
        </div>
    )
}

export default Input
