import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle, CardGroup } from 'reactstrap';



function RenderDish({dish}) {  
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
        
function RenderComments({ comments }) {
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
    }
} 
        
const DishDetail = (props) => {
        if(props.dish !=null)
            return (
                <div class="container">
                    <div className="row">
                        <RenderDish dish={props.dish} /> 
                        <RenderComments comments={(props.dish.comments)} />
                    </div>          
                </div>
        )
        else {
            return (<div></div>);
        }
    }

    


export default DishDetail;