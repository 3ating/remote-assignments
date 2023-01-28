import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Container from "./componments/Container";
import Navigator from "./componments/Navigator";
import Hidedcontainer from "./componments/Hidedcontainer";

function App() {
    const [action, setAction] = useState(true);
    function handleMessage() {
        const welMessage = document.querySelector(".wel-message");
        welMessage.textContent = "Have a Good Time!";
    }
    function handleAction() {
        const hidedBox = document.querySelector(".box-container-hided");
        if (action === true) {
            hidedBox.style.display = "flex";
            setAction(!action);
        } else if (action === false) {
            hidedBox.style.display = "none";
            setAction(!action);
        }
    }
    return (
        <div className='container'>
            <Navigator />
            <div onClick={handleMessage}>
                <h1 className='wel-message'>Welcome Message</h1>
            </div>
            <h2 className='sec-title'>Section Title</h2>
            <Container />
            <button onClick={handleAction} className='action-btn'>
                <p>Call to Action</p>
            </button>
            <Hidedcontainer />
        </div>
    );
}

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App />);
