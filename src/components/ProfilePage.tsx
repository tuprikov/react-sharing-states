import { User } from '../types/user'

const ProfilePage = ({ user, onUpdateName }: User) => {
    return (
        <>
            <h1>Profile Page</h1>
            <span>{user.name}</span>
            <button onClick={() => onUpdateName(user.name)}>Update name</button>
        </>
    )
}

export default ProfilePage
