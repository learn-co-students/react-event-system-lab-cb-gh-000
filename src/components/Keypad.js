import React from 'react'

export default class Keypad extends React.Component {
  render() {
    return (
      <input type="password" onKeyUp={(e)=>{console.log('Entering password...')}} />
    )
  }
}