import React from "react";

export default function Counter({ num, count }) {
    return (
        <div>
            <h1 className='num'>{num}</h1>
            <h1 className='count'>{count}</h1>
        </div>
    );
}
