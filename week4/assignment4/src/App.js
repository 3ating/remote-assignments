/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import "./App.css";
import Button from "./components/Button";
import MainContent from "./components/MainContent";

function App() {
    const [items, setItems] = useState([]);
    const [page, setPage] = useState(1);

    function handleClick() {
        setPage(page + 1);
    }

    async function fetchData() {
        const res = await fetch(`https://api.github.com/orgs/facebook/repos?per_page=5&page=${page}`);
        const data = await res.json();
        setItems([...items, ...data]);
    }

    useEffect(() => {
        fetchData();
    }, [page]);

    return (
        <>
            <MainContent items={items} />
            <Button handleClick={handleClick} />
        </>
    );
}

export default App;
