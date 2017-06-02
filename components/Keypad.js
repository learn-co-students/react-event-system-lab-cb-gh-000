import React from 'react';

export default class Keypad extends React.Component {
  constructor(props) {
    super(props);

    this.printText = this.printText.bind(this);
  }

  printText() {
    console.log('Entering password...');
  }

  render() {
    return (
      <input type="password" onKeyUp={this.printText} />
    );
  }
}
