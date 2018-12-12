import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Container
} from "reactstrap";

import { FaRegQuestionCircle, FaSearch, FaBell } from "react-icons/fa";

import { Avatar } from "react-avatar";

import NotificationBadge from "react-notification-badge";

export default class CustomNavbar extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      //This will be a prop inherited from the data
      count: 2
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <Navbar color="white" light expand="md" className="navbar">
        <Container>
          <NavbarBrand href="#">
            <img className="logo" src={require("../hexagon-64.png")} alt="" />
          </NavbarBrand>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="#" className="hover-blue">
                Dashboard
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Network</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Network</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">Network</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Network</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Network</NavLink>
            </NavItem>
            <NavItem active>
              <NavLink href="#">Billing</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Network</NavLink>
            </NavItem>
          </Nav>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="#">
                  <FaSearch size="1.5em" />
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">
                  <FaRegQuestionCircle size="1.5em" />
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">
                  <NotificationBadge count={this.state.count} />
                  <FaBell
                    size="1.5em"
                    color={this.state.count > 0 ? "black" : ""}
                  />
                </NavLink>
              </NavItem>

              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  <Avatar
                    name="Gabriel Gonzalez"
                    size="1.5em"
                    round
                    color="white"
                    fgColor="#7f7f7f"
                    textSizeRatio={1}
                  />
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>Option 1</DropdownItem>
                  <DropdownItem>Option 2</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Reset</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    );
  }
}
