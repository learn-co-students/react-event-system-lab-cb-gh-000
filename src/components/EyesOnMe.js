// Code EyesOnMe Component Here

// Code Keypad Component Here
import React from 'react';

export default class EyesOnMe extends React.Component {

  focus = () => {
    console.log('Good!');
  }

  second = () => {
    console.log('Hey! Eyes on me!');
  }

  render() {
    return <button onBlur={this.second} onFocus={this.focus}>Tickle me!</button>

  }
}
