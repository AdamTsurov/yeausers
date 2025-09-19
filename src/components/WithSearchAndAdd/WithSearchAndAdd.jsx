import React, { useState, useMemo } from 'react'
import styles from './WithSearchAndAdd.module.css'
import UsersControlPanel from '@components/UsersControlPanel/UsersControlPanel'

const WithSearchAndAdd = ({
    render,
    data = [],
    showAddButton = true,
    showSearch = true,
    title = 'Users',
    searchFields = ['name', 'lastname'],
    addButtonText = 'Add',
    onAddClick,
    searchPlaceholder = 'Search...',
}) => {
    const [searchTerm, setSearchTerm] = useState('')

    const filteredData = useMemo(() => {
        if (!searchTerm) return data

        return data.filter((item) =>
            searchFields.some((field) =>
                item[field]
                    ?.toString()
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase())
            )
        )
    }, [data, searchTerm, searchFields])

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value)
    }

    const handleClearSearch = () => {
        setSearchTerm('')
    }

    return (
        <div className={styles['container']}>
            <div className={styles['header']}>
                <h2 className={styles['title']}>{title}</h2>
                <UsersControlPanel
                    showSearch={showSearch}
                    showAddButton={showAddButton}
                    addButtonText={addButtonText}
                    onAddClick={onAddClick}
                    searchProps={{
                        value: searchTerm,
                        onChange: handleSearchChange,
                        onClear: handleClearSearch,
                        placeholder: searchPlaceholder,
                    }}
                />
            </div>

            {render(filteredData)}
        </div>
    )
}

export default WithSearchAndAdd
