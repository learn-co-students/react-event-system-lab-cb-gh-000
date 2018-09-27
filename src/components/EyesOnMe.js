// Code EyesOnMe Component Here

import React from 'react';

export default class EyesOnMe extends React.Component {
    constructor(){
        super();

        this.onFocus = this.focus.bind(this);
        this.onBlur = this.blur.bind(this);
    }
    focus = () => {
        console.log('Good!');
    }

    blur = () => {
        console.log('Hey! Eyes on me!');
    }

    render () {
        return (
            <div>
                <button onFocus={this.focus} onBlur={this.blur}/>
            </div>
        )
    }

}
