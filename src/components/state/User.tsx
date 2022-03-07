import React, {useState} from 'react';

type AuthUser = {
    name: string
    email: string
}
const User = () => {
    const [user, setUser] = useState<AuthUser | null>(null);
    const handleLogIn = () => {
       setUser({
           name: "Tina",
           email: "Tina@gmail.com",
       })
    }
    const handleLogOut = () => {
       setUser(null)
    }
   
    return (
        <div>
            <button onClick={handleLogIn}>LogIn</button>
            <button onClick={handleLogOut}>LogOut</button>
            {/* optional ? */}
            <div>User name is {user?.name}</div>
            <div>User email is {user?.email}</div>
        </div>
    );
};

export default User;