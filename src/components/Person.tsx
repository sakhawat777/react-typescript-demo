import React from 'react';
// Import from ts file
import { personProps } from './Person.types';
// type personProps = {
//     name: {
//         firstName: string
//         lastName: string
//     }
// }
// props
const Person = (props: personProps) => {
    return (
        <div>
            <h2>{props.name.firstName} {props.name.lastName}</h2>
        </div>
    );
};

export default Person;