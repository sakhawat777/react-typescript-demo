import React, { useState } from 'react';

const LoggedIn = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const handleLogIn = () => {
        setIsLoggedIn(true)
    }
    const handleLogOut = () => {
        setIsLoggedIn(false)
    }
   
    return (
        <div>
            <button onClick={handleLogIn}>LogIn</button>
            <button onClick={handleLogOut}>LogOut</button>
            <div>User is {isLoggedIn? 'logged in': 'logged out'}</div>
        </div>
    );
};

export default LoggedIn;