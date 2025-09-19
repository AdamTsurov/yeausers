import UsersPage from '@pages/UsersPage/UsersPage'
import NavUserInfo from '@components/NavUserInfo/NavUserInfo'
import { UsersProvider } from '@components/providers/UsersProvider'
import './App.css'
import AppRouter from '@components/AppRouter'
import { BrowserRouter } from 'react-router'

function App() {
    return (
        <div className="app">
            <UsersProvider>
                <BrowserRouter>
                    <NavUserInfo />
                    <AppRouter />
                </BrowserRouter>
            </UsersProvider>
        </div>
    )
}

export default App
