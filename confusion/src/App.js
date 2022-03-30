import logo from './logo.svg';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponent';
import StaffList from './components/StaffListComponent';
import './App.css';
import { DISHES } from './shared/dishes';
import { Component } from 'react';


class App extends Component {

  
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES
    };
  }
  render() {
  return (
    <div>
      <Navbar dark color="primary">
        <div className='container'>
          <NavbarBrand href="/">Ứng dụng quản lý nhân sự v1.0</NavbarBrand>
        </div>
      </Navbar>
      {/*<Menu dishes={this.state.dishes}/>*/}
      <StaffList />
    </div>
  );
  }
}

export default App;
