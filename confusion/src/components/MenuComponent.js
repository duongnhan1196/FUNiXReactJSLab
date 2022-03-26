import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
          selectedDish: null
        }
    }
    onDishSelect(dish) {
      this.setState({ selectedDish: dish});
    }
    renderDish(dish) {
      if(dish != null) {
        const cmt = dish.comments.map((comment) => {
          return(
            <div className='container'>
            <div key={comment.id}>
              
              <p>{comment.comment}</p>
              <p>-- {comment.author}, </p>
            </div>
            </div>
          );
        });
        return(
          <Card className="col-12">
            <Card className="col-6 float-left">
            <CardImg width="100%" src={dish.image} alt={dish.name}/>
            <CardBody>
              <CardTitle>{dish.name}</CardTitle>
              <CardText>{dish.description}</CardText>
            </CardBody>
            </Card>
            <Card className="col-5">
              <h4>Comments</h4>
              <div className='row'>{cmt}</div>
              <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
              </CardBody>
            </Card>
          </Card>          
        );
      }
      else {
        return(
          <div></div>
        );
      }
    }
    render() {
        const menu = this.props.dishes.map((dish) => {
            return (
              <div key={dish.id} className="col-12 col-md-5 m-1">
                <Card onClick={() => this.onDishSelect(dish)}>                 
                  <CardImg width="100%" src={dish.image} alt={dish.name} />
                  <CardImgOverlay>
                    <CardTitle>{dish.name}</CardTitle>
                  </CardImgOverlay>
                </Card>
              </div>
            );
        });

        return (
          <div className="container">
            <div className="row">
                  {menu}
            </div>
            <div className='row'>
              {this.renderDish(this.state.selectedDish)}
            </div>
          </div>
        );
    }
}

export default Menu;