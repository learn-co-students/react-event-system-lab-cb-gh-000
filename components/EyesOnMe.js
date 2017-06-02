import React from 'react';

export default class EyesOnMe extends React.Component {
  constructor(props) {
    super(props);

    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  handleFocus() {
    console.log('Good!');
  }

  handleBlur() {
    console.log('Hey! Eyes on me!');
  }

  render() {
    return (
      <button onFocus={this.handleFocus} onBlur={this.handleBlur}></button>
    );
  }
}
