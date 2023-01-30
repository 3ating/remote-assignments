import React, { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";

function App() {
    const [num, setNum] = useState(1);
    const [count, setCount] = useState(0);

    function handleAdd() {
        setNum(num + 1);
    }

    function handleCount() {
        setCount(count + 1);
    }

    return (
        <div className='container'>
            <button onClick={handleAdd}>All + 1</button>
            <Counter num={num} count={count} />
            <Counter num={num} count={count} />
            <Counter num={num} count={count} />
            <button onClick={handleCount}>Add a Counter</button>
        </div>
    );
}

export default App;
