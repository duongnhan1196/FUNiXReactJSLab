import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponent';
import './App.css';
import { DISHES } from './shared/dishes';
import { Component } from 'react';
import DishDetail from './DishdetailComponent';


class Main extends Component {


    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,
            selectedDish: null
        };
    }
    render() {
        return (
            <div>
                <Navbar dark color="primary">
                    <div className='container'>
                        <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
                    </div>
                </Navbar>
                <Menu dishes={this.state.dishes} />
                <DishDetail dish={}></DishDetail>
            </div>
        );
    }
}

export default Main;
