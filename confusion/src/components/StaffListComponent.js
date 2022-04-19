import React, { Component} from 'react';
import { Card, CardText, CardTitle, CardSubtitle  } from 'reactstrap'; 
import dateFormat from 'dateformat';

class StaffList extends Component{

    constructor(props) {
        super(props);
        this.state = {
            selectedStaff: null,
        };
    }
    onStaffSelect(staff) {
        this.setState({ selectedStaff: staff});
    }
    setColum(col) {
        this.setState({
            coLumDefault: col
        });
    }


    renderStaff(staff) {
        if (staff != null) {
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
        else{
            return(
                <div><p>Bấm vào tên nhân viên để xem thông tin.</p></div>
            );
        }
    }

    render() {
        const stafflist = this.props.staffs.map((staff) => {
            return (
                <div key={staff.id} className={this.state.coLumDefault}>
                    <Card onClick={() => this.onStaffSelect(staff)} style={{
                        backgroundColor: '#80ffff',
                        borderColor: '#333'
                    }}>
                            <CardText> {staff.name} </CardText>
                    </Card>
                </div>
            );
        });

        return (
            <div className='container'>
                <div className='row'>
                    <CardSubtitle className={"m-2 mt-1"} color="secondary">
                        Số cột hiển thị 
                    </CardSubtitle>
                </div>
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
