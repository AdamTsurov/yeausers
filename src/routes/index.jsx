import FavoriteUsersPage from '@pages/FavoriteUsersPage/FavoriteUsersPage'
import UsersPage from '@pages/UsersPage/UsersPage'

export const routes = [
    { path: '/', component: <UsersPage />, index: true },
    { path: '/favorite-users', component: <FavoriteUsersPage /> },
    { path: '*', component: <Navigate to="/" replace={true} /> },
]
