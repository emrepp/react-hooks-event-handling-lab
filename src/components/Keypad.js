// Code Keypad Component Here
import React from "react";
function Keypad (){
    function password(){
        console.log('Entering password...')
    }
    return (
        <div>
            <input onChange={password} type="password" />
        </div>
    )
}

export default Keypad;