import { useState } from "react";

export function FunctionalCounter(props) {
    const {initialValue} = props;

    const [value, setValue] = useState(initialValue);

    const increment = () => {
        const newValue = value + 1;
        setValue(newValue);
    }

    const reset = () => {
        setValue(initialValue);
    }

    return (
        <div>
            <p>Functional Counter: {value}</p>
            <button onClick={() => increment()}>+</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}