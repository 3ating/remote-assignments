import React from "react";

export default function Container() {
    return (
        <div className='box-container'>
            <div id='content-box' className='content-box'>
                <p className='box'>Content Box 1</p>
            </div>
            <div id='content-box' className='content-box'>
                <p className='box'>Content Box 2</p>
            </div>
            <div id='content-box' className='content-box'>
                <p className='box'>Content Box 3</p>
            </div>
            <div id='content-box' className='content-box'>
                <p className='box'>Content Box 4</p>
            </div>
        </div>
    );
}
