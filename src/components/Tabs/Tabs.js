import React, { Component } from 'react';
import '../../assets/css/Tabs.scss';

class Tabs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: props.children[0].props.children
        }
    }

    handleChange= (event) => {
        this.setState({
            content: event
        });
    }
    render() {
        return(<div className="tab-container">
            <ul>
                {React.Children.map(this.props.children, child => {
                    return React.cloneElement(child, {onChange: this.handleChange});
                })}
            </ul>
            <div className="content-container">
                {this.state.content}
            </div>
        </div>);
    }
}

export default Tabs;
