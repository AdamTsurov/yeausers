import React from 'react'
import styles from './UsersControlPanel.module.css'
import Input from '@ui/Input/Input'
import IconImage from '@ui/IconImage/IconImage'
import iconClear from '@icons/icon_menu_remove.svg'
import iconSearch from '@icons/icon_menu_search.svg'

const UsersControlPanel = ({
    showSearch,
    showAddButton,
    addButtonText,
    onAddClick,
    searchProps,
}) => {
    const searchInputStyles = {
        containerStyles: {
            maxWidth: '240px',
        },
        inputStyles: {
            color: '#333',
            fontSize: '16px',
            padding: '3px 10px',
        },
        containerClassName: styles['search-input'],
    }

    return (
        <div className={styles['controls']}>
            {showSearch && (
                <Input
                    value={searchProps.value}
                    onChange={searchProps.onChange}
                    placeholder={searchProps.placeholder}
                    startAdornment={
                        <img
                            src={iconSearch}
                            className={styles['search-icon']}
                        />
                    }
                    endAdornment={
                        searchProps.value && (
                            <button
                                variant="text"
                                onClick={searchProps.onClear}
                                className={styles['clear-button']}
                            >
                                <IconImage
                                    icon={iconClear}
                                    className={styles['clear-icon']}
                                />
                            </button>
                        )
                    }
                    {...searchInputStyles}
                />
            )}

            {showAddButton && (
                <button onClick={onAddClick} className={styles['add-button']}>
                    {addButtonText}
                </button>
            )}
        </div>
    )
}

export default UsersControlPanel
