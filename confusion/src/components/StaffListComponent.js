import React from 'react';
import { Card, CardText,  CardImg, CardBody  } from 'reactstrap'; 
import { Link } from 'react-router-dom';


function RenderCard({ staff }) {
    return (
        <div >
            <Card style={{ backgroundColor: '#d1e0e0' }}>
                <Link to={`/staffs/${staff.id}`}>
                    <CardImg src={staff.image} alt={staff.name} />
                </Link>
                     <CardBody>
                        <CardText className="text-center">{staff.name}</CardText>
                    </CardBody>
   
            </Card>
        </div>
        
    );
}



const StaffList = (props) => {
    const staff = props.staffs.map((staff) => {
        return (
            <div key={staff.id} className="col-6 col-md-2 col-sm-4 p-2">
                <RenderCard staff={staff} />
            </div>
        );
    });

    return (
        <div className="container">
            <div className='row'>
                <div className='col-12'>
                    <h3>Nhân viên</h3>
                    <hr />
                </div>
            </div>
            <div className="row">       
                    {staff}            
            </div>
        </div>
    );
}




export default StaffList;
