import React from 'react';

export default class Keypad extends React.Component{

  constructor(){
    super();

    this.key=this.key.bind(this);
  }
  key(){
    console.log('Entering password...');
  }

  render(){
    return <input type='password' onKeyUp={this.key} />
  }
}