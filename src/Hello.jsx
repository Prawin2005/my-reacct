import { useState } from "react";
export const Hello = () => {

const [name, setName] = useState("");
const [count, setCount] = useState(0);

    return (

        <div>
           
            <input type="text" placeholder="enter the name" onChange={(e)=>
                setName(e.target.value)
            }/>
             <p>Hello</p>
            <h1>{name}</h1>
            <button onClick={()=>{setCount(count +1)}}>Increase</button>
            <h1>{count}</h1>
        </div>


    );
}