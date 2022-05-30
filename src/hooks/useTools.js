import { useEffect, useState } from "react";


const useTool = ()=>{
    const [tool, setTool] = useState([]);
    useEffect(() => {
        fetch ('https://whispering-bastion-71459.herokuapp.com/parts')
        .then(res => res.json())
        .then(data => setTool(data));
    },[])

    return [tool, setTool];
}

export default useTool;