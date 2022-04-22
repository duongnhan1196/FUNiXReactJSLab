import React from "react";
import { Card, CardText, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderDepartment({ department }) {
    return (
        <Card>
            <CardTitle className="p-1">{department.name}</CardTitle>
            <CardText className="pl-4">Số lượng nhân viên: {department.numberOfStaff}</CardText>
        </Card>
    );
}


function Department(props) {
    const department = props.departments.map((department) => {
        return (
            <div key={department.id} className="col-12 col-md-4 col-sm-6 p-2">
                <RenderDepartment department={department} />
            </div>
        );
    });
    return (
        <div style={{ backgroundColor: '#d1e0e0' }}>
            <div className="container">
                <div className='row'>
                    <Breadcrumb >
                        
                        <BreadcrumbItem><Link to='/staffs'><b>Nhân Viên</b></Link></BreadcrumbItem>
                        <BreadcrumbItem active>Phòng Ban</BreadcrumbItem>
                    </Breadcrumb>
                </div>
                <div className="row">{department}</div>
            </div>
        </div>
        
    );
}

export default Department;