import React, { Component } from 'react';
import { Card, CardText, CardImg, CardBody, Form, Input, Button, FormGroup } from 'reactstrap';
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

class StaffList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nameSearch: ""
        };
        this.handleSearch = this.handleSearch.bind(this);
    }
    handleSearch(event) {
        event.preventDefault();
        const keySearch = event.target.keySearch.value;
        this.setState({ nameSearch: keySearch });
    }


    render() {

        const staff = this.props.staffs.filter((val) => {
            if (this.state.nameSearch === "") return val;
            else if (
                val.name.toLowerCase().includes(this.state.nameSearch.toLowerCase())
            )
                return val;
            return 0;
        })
            .map((val) => {
                return (
                    <div key={val.id} className="col-6 col-md-2 col-sm-4 p-2">
                        <RenderCard staff={val} />
                    </div>
                );
            });

        return (
            <div style={{ backgroundColor: '#b8e6f0' }}>
                <div className="container" style={{ backgroundColor: '#ccffff' }} >
                    <div className='row'>
                        <div className='col-4'>
                            <h3>Nhân viên</h3>
                            <hr />
                        </div>
                        <Form className='col-8' onSubmit={this.handleSearch}>
                            <FormGroup className="row">
                                <Input
                                    type="text"
                                    id="keySearch"
                                    name="keySearch"
                                    placeholder="Tìm kiếm nhân viên"
                                    className="col-10 m-1"
                                />
                                <Button type="submit"><span className="fa fa-search fa-lg"></span> Tìm kiếm</Button>
                                <Button type="submit" color="primary"><span className="fa fa-plus fa-lg"></span> Thêm Nhân Viên</Button>
                            </FormGroup>


                        </Form>
                    </div>
                    <div className="row">
                        {staff}
                    </div>
                </div>
            </div>

        );
    }
}


export default StaffList;
