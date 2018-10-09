import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom'
const mapStateToProps = state => {
  return { navItems: state.navigation.navItems };
};

class Navigation extends Component {
    handleSelect(k) {
        console.log(k);
    }
    renderNavItems () {
        const navList = [];
        this.props.navItems.map(el => (
            navList.push(<li><Link key={el.id} to={el.path} className="nav-item">{el.title}</Link></li>)
        ));
        //navList.push(<hr/>);
        return navList;
    }
    render() {
        return(<header>
                <nav>
                    <span className="nav-logo"><span className="logo"></span>
                    <span className="name">
                Silicon Valley
                Academy
            </span></span>
                    <ul>
                    {this.renderNavItems()}
                </ul>
    </nav>
  </header>
        );
    }
}

export default connect(mapStateToProps)(Navigation);
