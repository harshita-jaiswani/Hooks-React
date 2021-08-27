import React, {useState} from "react";

function DigiClock(){

let curtime= new Date().toLocaleTimeString();

const [currenttime, settime] = useState(curtime);

function Update()
{
    curtime=new Date().toLocaleTimeString();
    settime(curtime);
}

setInterval(Update,1000);


return(
    <div>
    <h1>{currenttime}</h1>
    </div>
    )
}

export default DigiClock;