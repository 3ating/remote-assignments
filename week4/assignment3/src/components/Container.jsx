import React from "react";

export default function Container({ action, handleAction }) {
    const contentBoxes = ["Content Box 1", "Content Box 2", "Content Box 3", "Content Box 4"];
    const hiddenBoxes = ["Content Box 5", "Content Box 6", "Content Box 7", "Content Box 8"];

    return (
        <>
            <div className='box-container'>
                {contentBoxes.map((box, index) => (
                    <div key={index} id='content-box' className='content-box'>
                        <p className='box'>{box}</p>
                    </div>
                ))}
            </div>
            <button onClick={handleAction} className='action-btn'>
                <p>Call to Action</p>
            </button>
            <div className={`box-container-hided ${action ? "hide" : "show"}`}>
                {hiddenBoxes.map((box, index) => (
                    <div key={index} id='content-box' className='content-box'>
                        <p className='box'>{box}</p>
                    </div>
                ))}
            </div>
        </>
    );
}
