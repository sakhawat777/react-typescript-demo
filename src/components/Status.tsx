import React from 'react';
type StatusProps = {
    status:"loading" | "success" | "error"
}
// props
const Status = (props: StatusProps) => {
    let message;
    if(props.status === "loading"){
        message = "loading...";
    }
    else if (props.status === "success"){
        message = "Data fetched successfully";
    }
    else if (props.status === "error"){
        message = "error fetching data";
    }
    return (
        <div>
           <h1> Status - {message}</h1> 
        </div>
    );
};

export default Status;