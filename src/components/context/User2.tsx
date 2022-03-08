import { useContext } from "react"
import { UserContext } from "./UserContext"
export const User2 = () => {
    const userContext = useContext(UserContext)
    const handleLogIn = () => {
        if(userContext){
            userContext.setUser({
                name: 'rocky',
                email: 'rocky@gmail.com'
            })
        }
    }
    const handleLogOut = () => {
        if(userContext){
            userContext.setUser(null)
        }
    }

    return (
        <div>
        <button onClick={handleLogIn}>LogIn</button>
        <button onClick={handleLogOut}>LogOut</button>
        <div>User name is {userContext.user?.name}</div>
        <div>User email is {userContext.user?.email}</div>
        </div>
    )
}