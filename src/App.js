import React from "react";
import IncNum from "./IncNum";
import GetTime from "./GetTime";
import DigiClock from "./DigiClock";



function App()
{
    return(
        <>
            <h3>On clicking the button the number will increase by 1.</h3>

    <IncNum></IncNum> 
    <h3>On clicking the button you will get the current time.</h3>

    <GetTime />
    <h3>This is a Digital Clock</h3>
    <DigiClock />

        </>
    )
}

export default App;