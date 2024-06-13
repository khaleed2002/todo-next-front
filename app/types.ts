export type TaskType = {
    id: string,
    description: string,
    status: boolean,
    user_id: string
}
export type UserType = {
    id: string,
    email: string
}
export type RegisterUserType = {
    name: string,
    password: string,
    email: string
}
export type credentialsType = {
    email: string,
    password: string
}
