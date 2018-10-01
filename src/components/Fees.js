import React, { Component }  from "react";
import '../assets/css/Fees.scss';
class Fees extends Component {

    render() {
        const feeClasses = `list fee ${this.props.className}`, buttonClasses = `button ${this.props.className}`;;
        return(<div className="fees-box">
            <div className="title">{this.props.title}</div>
            <div className={feeClasses}><span className="unit">{this.props.unit}</span>{this.props.fee}<span className="per">{this.props.per}</span></div>
            <div className="list">{this.props.time}</div>
            <div className="list">{this.props.snacks}</div>
            <div className="list">{this.props.activities}</div>
            <div className="list">{this.props.desc1}</div>
            <div className="list">{this.props.desc2}</div>
            <button className={buttonClasses}>Learn More</button>
        </div>);
    }
}

export default Fees;
