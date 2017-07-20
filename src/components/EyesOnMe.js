import React from 'react'

export default class EyesOnMe extends React.Component{
  render(){
    const focus = () => console.log('Good!')
    const blur = () => console.log('Hey! Eyes on me!')
    return (
      <button onFocus={focus} onBlur={blur} />
    )
  }
}
