import React from 'react';

export default class EyesOnMe extends React.Component {

  onFocusListener = () => {
    console.log('Good!');
  }

  onBlurListener = () => {
    console.log('Hey! Eyes on me!');
  }
  render() {
    return(
      <button onFocus={this.onFocusListener} onBlur={this.onBlurListener} />
    );
  }
}
