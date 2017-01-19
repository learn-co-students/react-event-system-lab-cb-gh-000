const React = require('react');
class EyesOnMe extends React.Component{
  handleKey(e){
     console.log("Entering password...")
  }
  handleBlur(){
     console.log('Hey! Eyes on me!')
  }
  handleFocus(){
     console.log('Good!')
  }
  render(){
     return(

        <button onBlur={this.handleBlur} onFocus = {this.handleFocus}>ajim</button>

     )
  }
}
module.exports = EyesOnMe
