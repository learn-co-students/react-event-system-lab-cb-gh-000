// Code Keypad Component Here
import React from 'react';

class Keypad extends React.Component {
    beep = () => {
        console.log("Entering password...");
    }
    render(){
        return (
            <input type="password" onKeyUp={this.beep}></input>
        );
    }
}

export default Keypad;