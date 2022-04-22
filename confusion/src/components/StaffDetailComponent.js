import React from "react";
import { CardTitle, CardText, Breadcrumb, BreadcrumbItem} from 'reactstrap';
import dateFormat from 'dateformat';
import { Link } from 'react-router-dom';



function RenderStaff({ staff }) {
    return (
        <div className="row">
            <div className="col-12 col-md-3 col-sm-4">
                <img src={staff.image} alt={staff.name} width="100%"/>
            </div>
                <div className="col-12 col-md-9 col-sm-8">
                    <CardTitle>Họ và tên: {staff.name}</CardTitle>
                    <CardText>Ngày sinh: {dateFormat(staff.doB, "dd/mm/yyyy")}</CardText>
                    <CardText>Ngày vào công ty: {dateFormat(staff.startDate, "dd/mm/yyyy")}</CardText>
                    <CardText>Phòng ban: {staff.department.name}</CardText>
                    <CardText>Số ngày nghỉ còn lại: {staff.annualLeave}</CardText>
                    <CardText>Số ngày đã làm thêm: {staff.overTime}</CardText>
                </div>     
            </div>
    );
}
const StaffDetail = (props) => {
    if (props.staff != null) {
        return (
            <div className="container">
                <div className='row'>
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/staffs'><b>Nhân Viên</b></Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.staff.name}</BreadcrumbItem>
                    </Breadcrumb>
                </div>
                <div className="row">
                    <div className="col-12">
                        <RenderStaff staff={props.staff} />
                    </div>
                </div>
            </div>
        )
    }
    else {
        return <div></div>
    }
}


export default StaffDetail;