export interface User {
    user: {
        id: number
        name: string
        role: string
    }

    onUpdateName?: (name: string) => void
}