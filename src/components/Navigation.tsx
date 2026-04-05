import { User } from '../types/user'

const Navigation = ({ user }: User) => {
    return (
        <p>Logged in user: {user.name}</p>
    )
}

export default Navigation
