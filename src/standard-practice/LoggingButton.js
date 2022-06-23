import React from 'react';

class LoggingButton extends React.Component {

    // this 바인딩이 되지않음.
    // handleClick() {
    //     console.log('this is:', this);
    //     => this is: undefined
    // }

    // handleClick = () => {
    //     console.log('this is:', this);
    // }

    render() {
        return (
            <button onClick={this.handleClick}>
                click me
            </button>
        );
    }
}

export default LoggingButton;