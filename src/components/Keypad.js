import React, { Component } from 'react';


export default class KeyPad extends Component {
  passfunc = () => {
    console.log('Entering password...');
  }
  render() {
    return (
      <div className="key-pad">
        <input type="password" onKeyUp={this.passfunc} />
      </div>
    )
  }
}
