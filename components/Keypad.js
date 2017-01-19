const React = require('react');
class Keypad extends React.Component{
  handleKey(e){
     console.log("Entering password...")
  }
  render(){
     return(

          <input type="password" onKeyUp = {this.handleKey}/>

     )
}}
module.exports = Keypad
