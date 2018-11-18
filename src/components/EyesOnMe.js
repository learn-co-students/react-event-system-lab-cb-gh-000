import React, { Component } from 'react';

export default class EyesOnMe extends Component {

  focusfunc = () => {
    console.log('Good!');
  }

  blurfunc = () => {
    console.log('Hey! Eyes on me!');
  }

  render () {
    return (
      <div className="eyes-on-me">
        <button onFocus={this.focusfunc} onBlur={this.blurfunc} >Focus or Blur</button>
      </div>
    )
  }
}
