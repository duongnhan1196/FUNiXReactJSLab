import React, { Component} from 'react';
import { Media } from 'reactstrap'; 

class StaffList extends Component{

    constructor(props) {
        super(props);
        this.state = {
            staffs: [
                {
                    id: 0,
                    name: "Nguyễn Văn A",
                    doB: "1999-01-01T08:59:00.000Z",
                    salaryScale: 1.1,
                    startDate: "2019-04-30T08:59:00.000Z",
                    //department: DEPARTMENTS[0],
                    annualLeave: 1,
                    overTime: 1,
                    image: '/assets/images/alberto.png',
                },
                {
                    id: 1,
                    name: "Nguyễn Văn B",
                    doB: "2000-01-01T08:59:00.000Z",
                    salaryScale: 1.2,
                    startDate: "2019-04-30T08:59:00.000Z",
                    //department: DEPARTMENTS[1],
                    annualLeave: 2,
                    overTime: 3,
                    image: '/assets/images/alberto.png',
                },
                {
                    id: 3,
                    name: "Nguyễn Văn D",
                    doB: "2002-01-01T08:59:00.000Z",
                    salaryScale: 1,
                    startDate: "2019-04-30T08:59:00.000Z",
                   // department: DEPARTMENTS[2],
                    annualLeave: 6,
                    overTime: 7,
                    image: '/assets/images/alberto.png',
                }
            ]
        }
    }
    render() {
        const stafflist = this.state.staffs.map((staff) => {
            return (
                <div key={staff.id} className="col-12 mt-5">
                    <Media  tag="li">
                        <Media left middle>
                            <p> {staff.name} </p>
                        </Media>
                    </Media>
                </div>
            );
        });

        return (
            <div className='container'>
                <div className='row'>
                    <Media list>
                        {stafflist}
                    </Media>
                </div>
            </div>
        );
    }

}



export default StaffList;
