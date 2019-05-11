import React from "react";

class EyesOnMe extends React.Component {
  //event handler focus
  eventHandlerFocus = () => {
    console.log("Good!");
  };
  //event handler blur --> on blur is when you click into the form
  eventHandlerBlur = () => {
   console.log("Hey! Eyes on me!");
  };

  render() {
    //render your button
    return (
      <button onFocus={this.eventHandlerFocus} onBlur={this.eventHandlerBlur} />
    );
  }
}

export default EyesOnMe;
