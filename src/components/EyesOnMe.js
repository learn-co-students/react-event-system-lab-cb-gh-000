import React from 'react'

class EyesOnMe extends React.Component {

  focused = () => {console.log("Good!");}
  blured = () => {console.log("Hey! Eyes on me!");}

  render() {
    return (
      <button onFocus={this.focused} onBlur={this.blured}>Button</button>
    )
  }
}

export default EyesOnMe
