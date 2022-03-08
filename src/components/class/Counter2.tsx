import React, { Component } from 'react';
type Counter2Props = {
    message: string
}
type Counter2State = {
    count: number
}

class Counter2 extends Component <Counter2Props, Counter2State> {
    state = {
        count: 0,
    }
    handleClick = () => {
        this.setState((prevState) => ({
            count: prevState.count + 1
        }))
    }
    render() {
        return (
            <div>
                <button onClick={this.handleClick}>Increment</button>
                {this.props.message} {this.state.count}
            </div>
        );
    }
}

export default Counter2;