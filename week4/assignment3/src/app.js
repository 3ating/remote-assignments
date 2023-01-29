import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Container from "./componments/Container";
import Navigator from "./componments/Navigator";
import Hidedcontainer from "./componments/Hidedcontainer";

function App() {
    const [action, setAction] = useState(true);
    const [message, setMessage] = useState("Welcome Message");
    const [navigator, setNavigator] = useState(true);

    function handleMessage() {
        setMessage("Have a Good Time!");
    }

    function handleAction() {
        setAction(!action);
    }

    return (
        <div className='container'>
            <Navigator navigator={navigator} setNavigator={setNavigator} />
            <div onClick={handleMessage}>
                <h1 className='wel-message'>{message}</h1>
            </div>
            <h2 className='sec-title'>Section Title</h2>
            <Container />
            <button onClick={handleAction} className='action-btn'>
                <p>Call to Action</p>
            </button>
            <Hidedcontainer action={action} />
        </div>
    );
}

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App />);
