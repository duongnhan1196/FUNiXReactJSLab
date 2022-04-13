import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle, CardGroup } from 'reactstrap';


class DishDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    renderDish(dish) {  
        if (this.props.dish != null) {
            const cmt = this.props.dish.comments.map((comment) => {
                return (
                    <div className='container'>
                        <div key={comment.id}>

                            <p>{comment.comment}</p>
                            <p>-- {comment.author} , {new Intl.DateTimeFormat('en-US', { month: 'short', day: '2-digit', year: 'numeric' }).format(new Date(comment.date))} </p>
                        </div>
                    </div>
                );
            })
            return (
                <CardGroup className='col-sm-12'>
                <Card className="col-6 col-sm-12">
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                    </Card>    
                    <Card className="col-6 col-sm-12">
                        <h4>Comments</h4>
                        <div className='row'>{cmt}</div>
                    </Card>
                </CardGroup>
            );
            
        }
        else {
            return (
                <div></div>
            );
        }
        }
        
    
        
    render() {
            return (
                <div class="container">
                    <div className="row">
                        {this.renderDish(this.props.dish)}               
                    </div>          
                </div>
            )
    }

    
}

export default DishDetail;