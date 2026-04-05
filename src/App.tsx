import { useState } from 'react'
import Navigation from './components/Navigation'
import ProfilePage from './components/ProfilePage'

const App = () => {
    const [user, setUser] = useState({
        id: 1,
        name: 'John Doe',
        role: 'admin',
    })

    const handleUpdateName = () => {
        setUser({...user, name: 'Jane Doe'})
    }

    return (
        <>
            <Navigation user={user} />
            <ProfilePage user={user} onUpdateName={handleUpdateName} />
        </>
    )
}

export default App
