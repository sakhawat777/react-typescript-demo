import React from 'react';
type GreetProps = {
    name: string
    messageCount?: number
    isLoggedIn: boolean
}
// Optional Props
const Greet = (props: GreetProps) => {
    const {messageCount = 0} = props
    return (
        <div>
            
            <h1>
                {
                    props.isLoggedIn? `Welcome ${props.name}! You have ${messageCount} unread messages` : `Welcome Guest`
                }
            </h1>
        </div>
    );
};

export default Greet;