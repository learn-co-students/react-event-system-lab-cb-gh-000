// Code EyesOnMe Component Here

import React, { Component } from 'react';


class EyesOnMe extends Component {

  toggleFocus() {
    console.log('Good!');
  }
  toggleBlur() {
    console.log('Hey! Eyes on me!');
  }

  render() {
    return (
      <div>
        <button onFocus={this.toggleFocus} onBlur={this.toggleBlur}/>
      </div>
    );
  }

}

export default EyesOnMe;
