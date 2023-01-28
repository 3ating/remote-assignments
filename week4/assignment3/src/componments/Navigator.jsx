import React, { useState } from "react";

export default function Navigator() {
    const [navigator, setNavigator] = useState(true);
    function handleMenu() {
        const mobileMenu = document.querySelector(".mobile-menu");
        const menuIcon = document.querySelector("#menuIcon");
        const closeIcon = document.querySelector("#closeIcon");

        if (navigator === true) {
            menuIcon.style.display = "none";
            mobileMenu.style.display = "flex";
            closeIcon.style.display = "flex";
            setNavigator(!navigator);
        } else if (navigator === false) {
            menuIcon.style.display = "";
            mobileMenu.style.display = "none";
            closeIcon.style.display = "none";
            setNavigator(!navigator);
        }
    }
    return (
        <>
            <div className='navigator'>
                <span className='logo'>Website Title / Logo</span>
                <button onClick={handleMenu} className='btn'>
                    <span id='menuIcon' className='material-symbols-outlined'>
                        menu
                    </span>
                    <span id='closeIcon' className='material-symbols-outlined'>
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
            <div className='mobile-menu'>
                <a className='menu-text1'>Item 1</a>
                <a className='menu-text'>Item 2</a>
                <a className='menu-text'>Item 3</a>
                <a className='menu-text'>Item 4</a>
            </div>
        </>
    );
}
