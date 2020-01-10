// Code Keypad Component Here
import React from 'react';
class Keypad extends React.Component {
  fonks=()=>{
    console.log('Entering password...');
  }
  render() {
    return (
      <input onKeyUp={this.fonks} type='password' />
    )
  }
}
export default Keypad;
