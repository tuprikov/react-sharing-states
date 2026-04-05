interface User {
    user: {
        id: number
        name: string
        role: string
    }

    onUpdateName: (name: string) => void
}

const ProfilePage = ({ user, onUpdateName }: User) => {
    return (
        <>
            <h1>Profile Page</h1>
            <span>{user.name}</span>
            <button onClick={onUpdateName}>Update name</button>
        </>
    )
}

export default ProfilePage
