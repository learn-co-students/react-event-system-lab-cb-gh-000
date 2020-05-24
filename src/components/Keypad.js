// Code Keypad Component Here
import React, { Component } from "react";

class Keypad extends Component{
    password = ()=>{
        console.log("Entering password...");
    }
    render(){
        return(
            <input type="password" onKeyUp={this.password}></input>
        )
    }
}
export default Keypad;
