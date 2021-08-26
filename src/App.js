import React from "react";
import IncNum from "./IncNum";
import GetTime from "./GetTime";


function App()
{
    return(
        <>
    <IncNum></IncNum> 
    <h3>On clicking the button the number will increase by 1.</h3>
    <GetTime />
    <h3>On clicking the button you will get the current time.</h3>

        </>
    )
}

export default App;