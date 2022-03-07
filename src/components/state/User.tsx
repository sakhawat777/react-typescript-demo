import React, {useState} from 'react';

type AuthUser = {
    name: string
    email: string
}
const User = () => {
    // like as type inference <AuthUser | null>
   const [user, setUser] = useState<AuthUser | null>(null);
   
   // useState Type Assertion
//    const [user, setUser] = useState<AuthUser>({} as AuthUser);
    const handleLogIn = () => {
       setUser({
           name: "Tina",
           email: "Tina@gmail.com",
       })
    }
    const handleLogOut = () => {
        // Log out can't work when used useState Type Assertion
        // No need  handleLogOut() method
      setUser(null)
    }
   
    return (
        <div>
            <button onClick={handleLogIn}>LogIn</button>
            <button onClick={handleLogOut}>LogOut</button>
            {/* optional ? */}
            <div>User name is {user?.name}</div>
            <div>User email is {user?.email}</div>
            {/* <div>User name is {user.name}</div>
            <div>User email is {user.email}</div> */}
        </div>
    );
};

export default User;