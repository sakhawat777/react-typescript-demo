import React from 'react';
type GreetProps = {
    name: string
}
const Greet = (props: GreetProps) => {
    return (
        <div>
            <h1>Welcome {props.name}! You have 10 unread messages</h1>
        </div>
    );
};

export default Greet;