// Code EyesOnMe Component Here
import React from 'react';
class EyesOnMe extends React.Component {
  fonks=()=>{
    console.log('Good!');
  }
  fonn=()=>{
    console.log('Hey! Eyes on me!');
  }
  render() {
    return (
      <button onFocus={this.fonks} onBlur={this.fonn} />
    )
  }
}
export default EyesOnMe;
