import React, { Component } from 'react';
import {
    Card, CardText, CardImg, CardBody, Form, Input, Button, FormGroup,
    Modal, Col, Row, Label, FormFeedback, ModalHeader, ModalBody} from 'reactstrap';
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
            nameSearch: "",
            name: "",
            doB: "",
            startDate: "",
            salaryScale: 1,
            department: "Sale",
            anualLeave: 0,
            overTime: 0,
            salary: 30000,
            image: "/assets/images/alberto.png",
            touched: {
                name: false,
                doB: false,
                startDate: false,
                salaryScale: false,
                department: false,
                anualLeave: false,
                overTime: false
            },
            modalOpen: false

        };
        this.handleSearch = this.handleSearch.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSearch(event) {
        event.preventDefault();
        const keySearch = event.target.keySearch.value;
        this.setState({ nameSearch: keySearch });
    }

    handleBlur = (field) => (event) => {
        this.setState({
            touched: { ...this.state.touched, [field]: true }
        });
    };
    
    handleInputChange(event) {
        const target = event.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }
    handleSubmit = () => {
        const newStaff = {
            name: this.state.name,
            doB: this.state.doB,
            startDate: this.state.startDate,
            department: this.state.department,
            salaryScale: this.state.salaryScale,
            anualLeave: this.state.anualLeave,
            overTime: this.state.overTime,
            image: this.state.image
        };
        this.props.onAdd(newStaff);
    };
          

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
                                <Button type="submit" color="primary"><span className="fa fa-plus fa-lg"></span> Thêm</Button>
                                <Input
                                    type="text"
                                    id="keySearch"
                                    name="keySearch"
                                    placeholder="Tìm kiếm nhân viên"
                                    className="col-8 m-1"
                                />
                                <Button type="submit"><span className="fa fa-search"></span> Tìm kiếm</Button>                             
                            </FormGroup>

                        </Form>
                    </div>
                    <div className="row">
                        {staff}
                    </div>
                </div>
                <Modal isOpen={this.state.modalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Thêm Nhân Viên</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleSubmit}>
                            <Row className="control.group">
                                <Label htmlFor="name" md={4}>Tên:</Label>
                                <Col md={8}>
                                    <Input
                                        type="text"
                                        className="form-control"
                                        id="name"
                                        name="name"
                                        value={this.state.name}
                                        onBlur={this.handleBlur("name")}
                                        onChange={this.handleInputChange}
                                    />
                                </Col>
                            </Row>

                        </Form>
                    </ModalBody>

                </Modal>
            </div>

        );
    }
}


export default StaffList;
