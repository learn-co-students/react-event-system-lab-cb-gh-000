import React from 'react'

export default class Keypad extends React.Component{
  render(){
    const log = () => console.log('Entering password...')
    return (
      <input type="password" onKeyUp={log} />
    )
  }
}
