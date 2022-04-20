import React, { Component } from "react";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import StaffList from "./StaffListComponent";
import Department from "./DepartmentComponent";
import StaffDetail from "./StaffDetail";
import { DEPARTMENTS, STAFFS } from "../shared/staffs";
import { Switch, Route, Redirect } from 'react-router-dom';





class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            staffs: STAFFS,
            departments: DEPARTMENTS
        };
    }
    

    render() {
        const StaffWithId = ({ match }) => {
            return (
                <StaffDetail staff={this.state.staffs.filter((staff) => staff.id === parseInt(match.params.id, 10))[0]}        
                />
            );
        }

        return (
            <div>
                <Header />
                <Switch>
                    <Route exact path="/staffs" component={() => <StaffList staffs={this.state.staffs} />} />      
                    <Route path="/staffs/:id" component={StaffWithId} />
                    <Route path="/departments" component={() => <Department departments={this.state.departments} />} />
                    {/*<Route path="/salary" component={ } />*/}
                     <Redirect to="/staffs" />
                </Switch>
                <Footer />
            </div>
        );

    }
}


export default Main;