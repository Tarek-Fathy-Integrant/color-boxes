import React, { Component } from 'react';
import "./Container.css";
import Box from './Box';

class Container extends Component {
    static defaultProps = {
        numBoxes: 18,
        allColors: ["purple", "magenta", "violet", "pink"]
    };
    render() {
        const boxes = Array.from({ length: this.props.numBoxes }).map(() => (
            <Box colors={this.props.allColors} />
        ));

        return <div className='Container'>{boxes}</div>;
    }
}

export default Container;