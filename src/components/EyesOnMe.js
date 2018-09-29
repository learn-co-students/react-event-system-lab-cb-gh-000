// Code EyesOnMe Component Here
import React from 'react';
export default class EyesOnMe extends React.Component {
  constructor() {

  }
  onFocues=()=>{
    console.log("Good!")
  }
  onBlur=()=>{
    console.log("Hey! Eyes on me!")

  }
  render(){
    return (<button
      onFocus={ this.onFocues }
           onBlur={ this.onBlur }
      ></button>)
  }
}
