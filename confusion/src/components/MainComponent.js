import React, { Component } from "react";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import StaffList from "./StaffListComponent";
import { DEPARTMENTS, STAFFS } from "../shared/staffs";
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from "./HomeCoponent";
import Department from "./DepartmentComponent";

import { STAFFS, DEPARTMENTS } from "../shared/staffs";
class Main extends Component{
    constructor(props) {
        super(props);
        this.state = {
            staffs: STAFFS,
            departments: DEPARTMENTS
        };
    }

    render() {
        return (
            <div>
                <Header />
                <Switch>
                    <Route path="/staffs" component={Home} />             
                    <Route path="/department" component={Department } />
                    {/*<Route path="/salary" component={ } />*/}
                     <Redirect to="/staffs" />
                </Switch>
                <Footer />
            </div>
        );

    }
}


export default Main;