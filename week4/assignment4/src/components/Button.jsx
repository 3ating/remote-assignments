import React from "react";

export default function Button({ handleClick }) {
    return (
        <button className='more-btn' onClick={handleClick}>
            More
        </button>
    );
}
