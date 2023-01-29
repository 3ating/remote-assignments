import React from "react";

export default function Navigator({ navigator, setNavigator }) {
    function handleMenu() {
        setNavigator(!navigator);
    }
    return (
        <>
            <div className='navigator'>
                <span className='logo'>Website Title / Logo</span>
                <button onClick={handleMenu} className='btn'>
                    <span
                        id='menuIcon'
                        className='material-symbols-outlined'
                        style={navigator ? { display: "" } : { display: "none" }}
                    >
                        menu
                    </span>
                    <span
                        id='closeIcon'
                        className='material-symbols-outlined'
                        style={navigator ? { display: "none" } : { display: "flex" }}
                    >
                        close
                    </span>
                </button>
                <div className='menuItems'>
                    <a>Item 1</a>
                    <a>Item 2</a>
                    <a>Item 3</a>
                    <a>Item 4</a>
                </div>
            </div>
            <div className='mobile-menu' style={navigator ? { display: "none" } : { display: "flex" }}>
                <a className='menu-text1'>Item 1</a>
                <a className='menu-text'>Item 2</a>
                <a className='menu-text'>Item 3</a>
                <a className='menu-text'>Item 4</a>
            </div>
        </>
    );
}
