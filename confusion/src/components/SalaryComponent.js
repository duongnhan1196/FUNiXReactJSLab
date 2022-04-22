import React from 'react';
import { Card, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderSalary({ staff }) {

    const salaryOfStaff = parseInt(parseFloat(staff.salaryScale, 10) * 3000000 + parseFloat(staff.overTime, 10) * 200000);
    return (
        <div >
            <Card>
                <CardBody>
                    <CardTitle className="text-center">{staff.name}</CardTitle>
                    <CardText>Mã nhân viên: {staff.id}</CardText>
                    <CardText>Hệ số lương: {staff.salaryScale}</CardText>
                    <CardText>Số ngày làm thêm: {staff.overTime}</CardText>
                    <CardText>Lương: {salaryOfStaff}</CardText>
                </CardBody>

            </Card>
        </div>

    );
}



const Salary = (props) => {
    const staff = props.staffs.map((staff) => {
        return (
            <div key={staff.id} className="col-12 col-md-4 col-sm-6 p-1">
                <RenderSalary staff={staff} />
            </div>
        );
    });

    return (
        <div style={{ backgroundColor: '#d1e0e0' }}>
            <div className="container" >
            <div className='row'>
                <Breadcrumb>
                    <BreadcrumbItem><Link to='/staffs'>Nhân Viên</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Bảng Lương</BreadcrumbItem>
                </Breadcrumb>
            </div>
            <div className="row">
                {staff}
            </div>
        </div>
        </div>
        
    );
}




export default Salary;
