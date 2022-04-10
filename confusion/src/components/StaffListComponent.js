import React, { Component} from 'react';
import { Card, CardText, CardTitle} from 'reactstrap'; 
import dateFormat from 'dateformat';

class StaffList extends Component{

    constructor(props) {
        super(props);
        this.state = {
            selectedStaff: null
        }
    }
    onStaffSelect(staff) {
        this.setState({ selectedStaff: staff});
    }
    renderStaff(staff) {
        if (staff != null) {
            return(
                <Card className='col-sm-12'>
                    <CardTitle>Họ và tên: {staff.name}</CardTitle>
                    <CardText>Ngày sinh: {dateFormat(staff.doB, "dd/mm/yyyy")}</CardText>
                    <CardText>Ngày vào công ty: {dateFormat(staff.startDate, "dd/mm/yyyy")}</CardText>
                    <CardText>Phòng ban: {staff.department.name}</CardText>
                    <CardText>Số ngày nghỉ còn lại: {staff.annualLeave}</CardText>
                    <CardText>Số ngày đã làm thêm: {staff.overTime}</CardText>
                    
                </Card>
            );
        }
        else{
            return(
                <div><p>Bấm vào tên nhân viên để xem thông tin.</p></div>
            );
        }
    }



    render() {
        const stafflist = this.props.staffs.map((staff) => {
            return (
                <div key={staff.id} className="col-md-4 col-sm-6 p-1">
                    <Card onClick={() => this.onStaffSelect(staff)}>
                            <CardText> {staff.name} </CardText>
                    </Card>
                </div>
            );
        });

        return (
            <div className='container'>
                <div className='row'>
                    {stafflist}
                </div>
                <div className='row'>
                    {this.renderStaff(this.state.selectedStaff)}
                </div>
            </div>
        );
    }

}



export default StaffList;
