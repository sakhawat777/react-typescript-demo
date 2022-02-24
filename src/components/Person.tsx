import React from 'react';
type personProps = {
    name: {
        firstName: string
        lastName: string
    }
}

const Person = (props: personProps) => {
    return (
        <div>
            <h2>{props.name.firstName} {props.name.lastName}</h2>
        </div>
    );
};

export default Person;