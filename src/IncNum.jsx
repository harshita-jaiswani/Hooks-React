import React, {useState} from "react";

function IncNum(){

//const state = useState();
const [count , setCount] = useState(0);

function IncNumber()
{
    setCount(count+1);
}


return(
    <div>
    <h1>{count}</h1>
    <button onClick={IncNumber}>CLICK ME</button>
    </div>
    )
}

export default IncNum;