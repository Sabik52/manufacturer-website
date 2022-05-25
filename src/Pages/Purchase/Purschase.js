import React, { useEffect } from 'react';
import { useState } from 'react';

const Purschase = () => {
    const [parts, setParts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/part')
        .then(res => res.json())
        .then(data => setParts(data));
    },[])
    return (
        <div>
            <h2>Parts {parts.length}</h2>
        </div>
    );
};

export default Purschase;