import React, { Component } from 'react';
import { Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

class Navigation extends Component {
    handleSelect(k) {
        console.log(k);
    }
    render() {
        return(<Nav bsStyle="tabs" activeKey="1" onSelect={k => this.handleSelect(k)}>
        <NavItem eventKey="/home" href="/home">
          NavItem 1 content
        </NavItem>
        <NavItem eventKey="/faq" href="/faq">
          NavItem 2 content
        </NavItem>
        <NavItem eventKey="/test" href="/test">
          NavItem 3 content
        </NavItem>
        <NavDropdown eventKey="4" title="Dropdown" id="nav-dropdown">
          <MenuItem eventKey="4.1">Action</MenuItem>
          <MenuItem eventKey="4.2">Another action</MenuItem>
          <MenuItem eventKey="4.3">Something else here</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey="4.4">Separated link</MenuItem>
        </NavDropdown>
      </Nav>);
    }
}
export default Navigation;
