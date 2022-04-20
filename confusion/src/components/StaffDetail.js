import React from "react";
import { Card, CardTitle, CardText, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import dateFormat from 'dateformat';
import { Link } from 'react-router-dom';



 function RenderStaff(staff) {
     return (
             <Card className='col-sm-12' style={{
                 backgroundColor: '#80ffff',
                 borderColor: '#333'
             }}>
                 <CardTitle>Họ và tên: {staff.name}</CardTitle>
                 <CardText>Ngày sinh: {dateFormat(staff.doB, "dd/mm/yyyy")}</CardText>
                 <CardText>Ngày vào công ty: {dateFormat(staff.startDate, "dd/mm/yyyy")}</CardText>
                 <CardText>Phòng ban: {staff.department.name}</CardText>
                 <CardText>Số ngày nghỉ còn lại: {staff.annualLeave}</CardText>
                 <CardText>Số ngày đã làm thêm: {staff.overTime}</CardText>
             </Card>
        );
}
const StaffDetail = (props) => {
    if (props.staff != null)
        return (
            <div class="container">
                <div className='row'>
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/staffs'>Nhân Viên</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.staff.name}</BreadcrumbItem>
                    </Breadcrumb>
                </div>
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderStaff staff={props.staff} />
                    </div>
                </div>
            </div>
        )
}


export default StaffDetail;