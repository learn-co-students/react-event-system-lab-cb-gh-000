// Code EyesOnMe Component Here
import React, { Component } from "react"

class EyesOnMe extends Component{
    blurry = ()=>{
        console.log("Hey! Eyes on me!");
    }
    focusing = ()=>{
        console.log("Good!");
    }
    render(){
        return(
            <button onFocus={this.focusing} onBlur={this.blurry}>Yo</button>
        )
    }
}
export default EyesOnMe;
