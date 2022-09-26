import React, { useState } from 'react';

const NameInput = () => {
    // useState is used for having a state in app that may change
    const [name, setName] = useState('Person');

    const onChange = (event) => {
        setName(event.target.value)
    }

    return (
        <div>
            <h2>Hello, {name.length === 0 ? 'John' : name}</h2>
            <input 
                placeholder='Please enter your name' 
                onChange={onChange} 
            />
        </div>
    );
}
export default NameInput;