// Code EyesOnMe Component Here
import React from 'react';
export default class Keypad extends React.Component {
  constructor() {

  }
  onKeyUp=()=>{
    console.log("Entering password...")
  }

  render(){
    return (<input type='text' onKeyUp={onKeyUp} />)
  }
}
