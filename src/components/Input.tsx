import React from 'react';
type InputProps = {
    value: string,
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void ;
}
// Here Destructure Props
const Input = ({value, handleChange}: InputProps) => {
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event);
    }
    return (
        <div>
            <input type="text" value={value} onChange={handleInputChange} />
        </div>
    );
};

export default Input;