import React from "react";

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            step: 1
        };
    }

    increment() {
        this.setState({
            count: this.state.count + this.state.step
        });
    }

    decrement() {
        if(this.state.count > 0) {
            this.setState({
                count: this.state.count - this.state.step
            });
        } else if(this.state.count === 0) {
            alert('Лічильник = 0. Декремент заборонено!');
        }
    }

    render() {
        const counter = React.createElement('h2', {}, `Значення лічильника: ${this.state.count}`);
        const step = React.createElement('h2', {}, `Значення кроку: ${this.state.step}`);

        const buttonIncrement = React.createElement('button', {onClick: () => {this.increment()}}, '+');
        const buttonDecrement = React.createElement('button', {onClick: () => {this.decrement()}}, '-');

        const setStepButton = React.createElement('button', {onClick: () => {
            this.setState({
                step: Number(prompt('Введіть нове значення для кроку:'))
            })
        }}, 'Встановити нове значення для кроку');

        return React.createElement(React.Fragment, {}, counter, buttonIncrement, buttonDecrement, step, setStepButton);
    }
}

export default Counter;