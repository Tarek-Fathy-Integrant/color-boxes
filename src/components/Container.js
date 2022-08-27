import React, { Component } from 'react';
import Box from './Box';

class Container extends Component {
      
    render() {
        const {base} = this.props.base;
        let numBoxes = base * base;
        let boxes = [];
        for(let i = 0; i < numBoxes; i++){
            boxes.push(<Box />)
        }
        return <div>
            {boxes}
        </div>
    }
}

export default Container;