import React, {useState} from "react";

function GetTime(){

let curtime= new Date().toLocaleTimeString();

const [currenttime, settime] = useState(curtime);

function Update()
{
    curtime=new Date().toLocaleTimeString();
    settime(curtime);
}


return(
    <div>
    <h1>{currenttime}</h1>
    <button onClick={Update}>GET TIME</button>
    </div>
    )
}

export default GetTime;