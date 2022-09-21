import React from 'react';

export default class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: props.initialValue
        };
    }

    increment() {
        this.setState({
            value: this.state.value + 1
        });
    }

    decrement() {
        this.setState({
            value: this.state.value - 1
        });
    }

    reset() {
        this.setState({
            value: this.props.initialValue
        });
    }

    set400() {
        this.setState({
            value: 400
        });
    }
    
    render() {
        return (
            <div>
                <p>Counter: {this.state.value}</p>
                <button onClick={() => this.decrement()}>-</button>
                <button onClick={() => this.increment()}>+</button>
                <button onClick={() => this.reset()}>Reset</button>
                <button onClick={() => this.set400()}>Set 400</button>
            </div>
        );
    }
}
