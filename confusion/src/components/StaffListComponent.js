import React, { Component} from 'react';
import { Card, CardText} from 'reactstrap'; 
import {Media} from 'reactstrap';

class StaffList extends Component{

    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        const stafflist = this.props.staffs.map((staff) => {
            return (
                <div key={staff.id} className="col-md-4 col-sm-6">
                    <Card>
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
            </div>
        );
    }

}



export default StaffList;
