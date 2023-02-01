import React from "react";

export default function Message({ message, handleMessage }) {
    return (
        <>
            <div onClick={handleMessage}>
                <h1 className='wel-message'>{message}</h1>
            </div>
            <h2 className='sec-title'>Section Title</h2>
        </>
    );
}
