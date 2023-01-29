import React from "react";

export default function Hidedcontainer({ hide }) {
    return (
        <div className='box-container-hided' style={{ display: hide }}>
            <div id='content-box' className='content-box'>
                <p className='box'>Content Box 5</p>
            </div>
            <div id='content-box' className='content-box'>
                <p className='box'>Content Box 6</p>
            </div>
            <div id='content-box' className='content-box'>
                <p className='box'>Content Box 7</p>
            </div>
            <div id='content-box' className='content-box'>
                <p className='box'>Content Box 8</p>
            </div>
        </div>
    );
}
