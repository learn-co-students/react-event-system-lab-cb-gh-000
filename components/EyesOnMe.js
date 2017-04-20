import React from 'react';

export default class EyesOnMe extends React.Component{

  constructor(){
    super();
    this.Focus=this.Focus.bind(this);
    this.Blur=this.Blur.bind(this);
  }

  Focus(){
    console.log('Good!');
  }
  Blur(){
    console.log('Hey! Eyes on me!');
  }
  render(){
    return <button onFocus={this.Focus} onBlur={this.Blur}>click</button>
  }
}