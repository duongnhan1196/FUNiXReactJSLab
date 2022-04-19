import React from 'react';
import { Card, CardImg, CardText, CardBody } from 'reactstrap';

function RenderCard({ item }) {
    return (
        <Card col-6 col-md-2 col-sm-4 p-1>
            <CardImg src={item.image} alt={item.name} />
            <CardBody>
                <CardText middle>{item.description}</CardText>
            </CardBody>
        </Card>
    );
}


function Home(props) {
    const staff = this.props.staffs.map((staff) => {
        return (
            <div key={staff.id}>
                <RenderCard item={staff} />
            </div>
        );
    });
}

export default Home;