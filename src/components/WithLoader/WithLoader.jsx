import React from 'react'

const WithLoader = ({ loading, error, empty, children }) => {
    const renderMessage = (text, color = '#333') => (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: '30px',
                fontSize: '20px',
                fontWeight: '500',
                color,
            }}
        >
            {text}
        </div>
    )

    if (loading) return renderMessage('Загрузка...', '#555')
    if (error) return renderMessage(error, 'red')
    if (empty) return renderMessage('Пользователей нет', '#777')

    return <>{children}</>
}

export default WithLoader
