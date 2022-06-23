import React from "react";

class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isToggle: true
        };

        // 콜백에서 `this`가 작동하려면 아래와 같이 바인딩 해주어야 합니다.
        // 기본적으로 클래스 메서드는 바인딩되지 않음.
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    render() {
        return (
            <button onClick={this.handleClick}>
                {this.state.isToggle ? 'ON' : 'OFF'}
            </button>
        );
    }
}

export default Toggle;