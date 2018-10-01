import React, { Component } from 'react';

class TextBlock extends Component {
    render() {
        return(<div>
            <div className="small-heading">{this.props.heading}</div>
            <div className="text-block">{this.props.text}</div>
        </div>);
    }
}

export default TextBlock;
