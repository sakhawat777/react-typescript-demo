import React from 'react';
import {Name} from './Person.types'
type PersonListProps = {
    names: Name[]
    // names: {
    //     firstName: string
    //     lastName: string
    // } []
}
// object in array props
const PersonList = (props: PersonListProps) => {
    return (
        <div>
            {
                props.names.map(name => {
                    return (
                    <h2 key={name.firstName}>{name.firstName} {name.lastName}</h2>
                    )
                })
            }
        </div>
    );
};

export default PersonList;