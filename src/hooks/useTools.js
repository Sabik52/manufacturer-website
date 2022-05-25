import { useEffect, useState } from "react";


const useTool = ()=>{
    const [tool, setTool] = useState([]);
    useEffect(() => {
        fetch ('http://localhost:5000/part')
        .then(res => res.json())
        .then(data => setTool(data));
    },[])

    return [tool, setTool];
}

export default useTool;