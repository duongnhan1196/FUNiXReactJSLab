import logo from './logo.svg';
import { Navbar, NavbarBrand, DropdownToggle, Dropdown, DropdownMenu, DropdownItem } from 'reactstrap';
import { ButtonGroup, Button, CardText } from 'reactstrap';
import StaffList from './components/StaffListComponent';
import './App.css';
import { STAFFS, DEPARTMENTS } from './shared/staffs';
import { Component } from 'react';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      staffs: STAFFS
    };
  }
  render() {
  return (
    <div style={{
      backgroundColor: '#b3ffb3',
      borderColor: '#333'
    }}>
      <Navbar dark color="primary">
        <div className='container'>
          <NavbarBrand href="/">Ứng dụng quản lý nhân sự v1.0</NavbarBrand>
        </div>
        
        
      </Navbar>
      {/*<Menu dishes={this.state.dishes}/>*/}
      <StaffList staffs={this.state.staffs} />
    </div>
    
  );
  }
}

export default App;
