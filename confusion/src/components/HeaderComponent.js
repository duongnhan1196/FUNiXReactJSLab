import React, { Component } from "react";
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false
        };
        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }
    render() {
        return (
            <div>
                <Jumbotron style={{ backgroundColor: '#4da6ff' }}>
                    <div className="container">
                        <div className="row">
                            <h1>Ứng dụng quản lý nhân sự v2.0</h1>
                        </div>
                    </div>
                </Jumbotron >

                <div>
                    <Navbar color="dark" expand="md" dark>
                        <NavbarBrand className="mr-auto" href="/">
                            <img src="assets/images/logo.png" height="40" width="50" alt="logo" />
                        </NavbarBrand>
                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav
                                className="mr-auto"
                                navbar
                            >
                                <NavItem>
                                    <NavLink className="nav-link" to="/staffs">
                                        <span className="fa fa-address-card-o"></span> Nhân viên
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/departments">
                                        <span className="fa fa-users"></span> Phòng Ban
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/salary">
                                        <span className="fa fa-money"></span> Bảng Lương
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Navbar>
                </div>
            </div>

        );

    }
}

export default Header;