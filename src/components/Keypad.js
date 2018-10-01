// Code EyesOnMe Component Here
import React from 'react';
export default class Keypad extends React.Component {
  constructor(props) {
super(props);
  }
  onKeyUp=()=>{
    console.log("Entering password...")
  }

  render(){
    return (<input type='text' type='password' keyUp={this.onKeyUp} onKeyUp={this.onKeyUp} />)
  }
}
