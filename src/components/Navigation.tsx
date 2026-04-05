interface User {
    user: {
        id: number
        name: string
        role: string
    }
}

const Navigation = ({ user }: User) => {
    return (
        <p>Logged in user: {user.name}</p>
    )
}

export default Navigation
