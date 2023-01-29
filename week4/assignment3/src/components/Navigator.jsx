import React from "react";

export default function Navigator({ handleMenu, navigator }) {
    const items = ["Item 1 ", "Item 2 ", "Item 3 ", "Item 4"];
    return (
        <>
            <div className='navigator'>
                <span className='logo'>Website Title / Logo</span>
                <button onClick={handleMenu} className='btn'>
                    <span id={navigator ? "menuIcon" : "hide"} className='material-symbols-outlined'>
                        menu
                    </span>
                    <span id={navigator ? "closeIcon" : "show"} className='material-symbols-outlined'>
                        close
                    </span>
                </button>
                <div className='menuItems'>
                    {items.map((item, index) => (
                        <a key={index}>{item}</a>
                    ))}
                </div>
            </div>
            <div id={navigator ? "closeIcon" : "show"} className='mobile-menu'>
                {items.map((item, index) => (
                    <a key={index} className='menu-text'>
                        {item}
                    </a>
                ))}
            </div>
        </>
    );
}
