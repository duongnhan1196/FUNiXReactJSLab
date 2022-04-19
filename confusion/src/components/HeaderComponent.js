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
            <>
                <Jumbotron>
                    <div className="container">
                        <div className="row">
                                <h1>Ứng dụng quản lý nhân sự v2.0</h1>
                        </div>
                    </div>
                </Jumbotron>
                
                <Navbar dark expand="md">
                    <div className='container'>
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className="mr-auto" href="/">
                            <img src="assets/images/logo.png" height="30" width="41"
                                alt="logo" />
                        </NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/staffs">
                                        <span className="fa fa-home fa-lg"></span> Nhân Viên
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/department">
                                        <span className="fa fa-info fa-lg"></span> Phòng Ban
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/salary">
                                        <span className="fa fa-list fa-lg"></span> Bản Lương
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>

            </>
        );
    }
}

export default Header;