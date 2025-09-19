import { routes } from '@routes/index'
import React from 'react'
import { Route, Routes } from 'react-router'

const AppRouter = () => {
    return (
        <Routes>
            {routes.map((route) => (
                <Route
                    key={route.path}
                    element={route.component}
                    path={route.path}
                    index={route.index}
                />
            ))}
        </Routes>
    )
}

export default AppRouter
