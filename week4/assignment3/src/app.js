import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Container from "./components/Container";
import Navigator from "./components/Navigator";
import Message from "./components/Message";

function App() {
    const [action, setAction] = useState(true);
    const [navigator, setNavigator] = useState(true);
    const [message, setMessage] = useState("Welcome Message");

    function handleMenu() {
        setNavigator(!navigator);
    }

    function handleMessage() {
        setMessage("Have a Good Time!");
    }

    function handleAction() {
        setAction(!action);
    }

    return (
        <div className='container'>
            <Navigator navigator={navigator} handleMenu={handleMenu} />
            <Message message={message} handleMessage={handleMessage} />
            <Container action={action} handleAction={handleAction} />
        </div>
    );
}

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App />);
