import { useEffect } from "react";
import { useState } from "react";

const Effect = () => {
    useEffect(() => {
        console.log("from useEffect");
        
        return () => {
        console.log("Component unmounted");
        };
    }, []); 
    return (
        <div>
        <h1>Count:{count}</h1>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <ul>
            {users.map((user)=>(
                <li key={user.id} >{user.name}</li>
            ))}
        </ul>
    </div>
    )
}
export default Effect;