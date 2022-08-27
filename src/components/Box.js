import React, { Component } from 'react';
import "./Box.css";

class Box extends Component {
    constructor(props) {
        super(props);
        this.state = { color: this.choice(this.props.colors) };
        this.pickColor = this.pickColor.bind(this);
        this.choice = this.choice.bind(this);
    }
    choice(arr) {
        let randomIndex = Math.floor(Math.random() * arr.length);
        return arr[randomIndex];
    }
    pickColor() {
        let newColor;
        do {
            newColor = this.choice(this.props.colors);
        } while (newColor === this.state.color);

        this.setState({ color: newColor });
    }
    render() {
        return <div
            className='Box'
            style={{ backgroundColor: this.state.color }}
            onClick={this.pickColor}
        />
    }
}

export default Box;