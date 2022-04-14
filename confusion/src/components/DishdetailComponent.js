import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle, CardGroup } from 'reactstrap';



function RenderDish({dish}) {  
            return (
                <Card className="col-12 col-md-5 m-1">
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                    </Card>
            );
        }
        
function RenderComments({ comments }) {
        const cmt = comments.map((comment) => {
            return (
                    <div key={comment.id}>
                        <p>{comment.comment}</p>
                        <p>-- {comment.author} , {new Intl.DateTimeFormat('en-US', { month: 'short', day: '2-digit', year: 'numeric' }).format(new Date(comment.date))} </p>
                    </div>
            );       
        })
    return (
        <Card className="col-6 col-sm-12 m-1">
            <h4>Comments</h4>
            <div>{cmt}</div>
        </Card>
    );
} 
        
const DishDetail = (props) => {
        if(props.dish !=null)
            return (
                <div class="container">
                    <div className="row">
                        <CardGroup>
                            <RenderDish dish={props.dish} /> 
                            <RenderComments comments={(props.dish.comments)} />
                        </CardGroup>
                        
                    </div>          
                </div>
        )
        else {
            return (<div></div>);
        }
}
    
export default DishDetail;