import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { connect } from "react-redux";
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
            navList.push(<NavItem key={el.id} className="nav-item" eventKey={el.id} href={el.path} >{el.title}</NavItem>)
        ));
        //navList.push(<hr/>);
        return navList;
    }
    render() {
        return(<Navbar inverse collapseOnSelect className="navigation with-indicator" onSelect={k => this.handleSelect(k)}>
            <Navbar.Header>
                <span className="logo"></span>
                <span className="name">
                    Silicon Valley
                    Academy
                </span>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav>
                    {this.renderNavItems()}
                </Nav>
        </Navbar.Collapse>
    </Navbar>);
    }
}

export default connect(mapStateToProps)(Navigation);
