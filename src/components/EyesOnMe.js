// Code EyesOnMe Component Here
import React from 'react';

class EyesOnMe extends React.Component{

  showText1 = ()=>{
    console.log('Good!');
  }
  render(){
    return(
        <div className="eyes-on-me">
          <button onFocus={this.showText1} onBlur={()=>{console.log('Hey! Eyes on me!');}}>
          </button>
        </div>
    );
  }
}

export default EyesOnMe;
