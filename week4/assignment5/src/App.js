import React, { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";

function App() {
    const [counters, setCounters] = useState([0, 0, 0]);

    function handleAddAll() {
        setCounters(counters.map((counter) => counter + 1));
    }

    function handleAddCounter() {
        setCounters([...counters, 0]);
    }

    return (
        <div className='container'>
            <button onClick={handleAddAll}>All + 1</button>
            {counters.map((counter, index) => (
                <Counter
                    key={index}
                    value={counter}
                    setValue={(value) => setCounters(counters.map((c, i) => (i === index ? value : c)))}
                />
            ))}
            <button onClick={handleAddCounter}>Add a Counter</button>
        </div>
    );
}

export default App;
