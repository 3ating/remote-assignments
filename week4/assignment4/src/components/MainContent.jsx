import React from "react";

export default function MainContent({ items }) {
    return (
        <div className='container'>
            {items.map((item, index) => (
                <div key={item.id} className={index === items.length - 1 ? "" : "element"}>
                    <div className='name-visibility'>
                        <h2 className='name'>{item.name}</h2>
                        <p className='private'>{item.private ? "Private" : "Public"}</p>
                    </div>
                    <p className='description'>{item.description}</p>
                    <div className={`${item.topics.length === 0 ? "topic-none" : ""}`}>
                        {item.topics.map((topic, index) => (
                            <p key={index} className='topic'>
                                {topic}
                            </p>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}
