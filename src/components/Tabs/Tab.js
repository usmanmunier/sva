import React, {Component} from 'react'

class Tab extends Component {
    handleClick = (event) => {
        this.props.onChange(this.props.children);
    }
    render() {
        return(<li key={this.props.id}
            data-id={this.props.id}
            onClick={this.handleClick}>
            {this.props.title}
        </li>);
    }
}
export default Tab;
