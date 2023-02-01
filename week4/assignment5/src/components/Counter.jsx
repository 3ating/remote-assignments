import React from "react";

export default function Counter({ value, setValue }) {
    function increment() {
        setValue(value + 1);
    }

    return (
        <div>
            <button className='add-one' onClick={increment}>
                +1
            </button>
            <h1 className='num'>{value}</h1>
        </div>
    );
}
