import React, { Component } from 'react';
import {
    Card, CardText, CardImg, CardBody, Form, Input, Button, FormGroup,
    Modal, Col, Row, Label, FormFeedback, ModalHeader, ModalBody, ModalFooter
} from 'reactstrap';
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
            modalOpen: false,
            nameSearch: "",
            name: "",
            doB: "",
            startDate: "",
            salaryScale: 1,
            department: "Sale",
            annualLeave: 0,
            overTime: 0,
            salary: 30000,
            image: "/assets/images/alberto.png",
            touched: {
                name: false,
                doB: false,
                startDate: false,
                salaryScale: false,
                department: false,
                annualLeave: false,
                overTime: false
            }

        };
        this.handleSearch = this.handleSearch.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.showModal = this.showModal.bind(this);
        this.close = this.close.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.validate = this.validate.bind(this);
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
            annualLeave: this.state.annualLeave,
            overTime: this.state.overTime,
            image: this.state.image
        };
        this.props.onAdd(newStaff);
    };

    showModal() {
        this.setState({ modalOpen: true });
    }

    close() {
        this.setState({
            modalOpen: false
        });
    }
    validate(name, department, salaryScale, doB, startDate, annualLeave, overTime) {
        const errors = {
            name: '',
            department: '',
            salaryScale: '',
            doB: '',
            startDate: '',
            annualLeave: '',
            overTime: ''
        };
        if (this.state.touched.name && name.length < 3)
            errors.name = 'Name should be >= 3 characters';
        else if (this.state.touched.name && name.length > 30)
            errors.name = 'Name should be <= 30 characters';
        if (this.state.touched.department && department.length < 1)
            errors.department = 'choose department';
        if (this.state.touched.doB && doB.length < 1)
            errors.doB = 'Choose doB';
        if (this.state.touched.startDate && startDate.length < 1)
            errors.startDate = 'Choose startDate';
        if (this.state.touched.annualLeave && annualLeave.length < 1)
            errors.annualLeave = 'Cannot empty';
        if (this.state.touched.overTime && overTime.length < 1)
            errors.overTime = 'choose overTime';
        if (this.state.touched.salaryScale && salaryScale.length < 1)
            errors.salaryScale = 'choose salaryScale';
        return errors;
    }

    render() {
        const errors = this.validate(this.state.name, this.state.department, this.state.salaryScale, this.state.doB,
            this.state.startDate, this.state.annualLeave, this.state.overTime);

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
                    <div>        
                        <Form onSubmit={this.handleSearch}>
                            <FormGroup className="row">
                                <h4 className='col-9 col-sm-4 col-md-3'>Nhân viên</h4>
                                <Button className="col-2 col-sm-1 col-md-1 m-1 " type="button" onClick={this.showModal}>
                                    <span className="fa fa-plus"></span>
                                </Button>
                                <Input
                                    type="text"
                                    id="keySearch"
                                    name="keySearch"
                                    placeholder="Tìm kiếm nhân viên"
                                    className="col-9 col-sm-4 col-md-6"
                                />
                                <Button color="primary" type="submit" className="col-2 col-sm-2 m-1 col-md-1">
                                    <span className="fa fa-search"></span> Tìm
                                </Button>
                            </FormGroup>
                        </Form>
                    </div>
                    <div className="row">
                        {staff}
                    </div>
                </div>
                <Modal isOpen={this.state.modalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Thêm nhân viên</ModalHeader>
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
                                        valid={errors.name === ""}
                                        invalid={errors.name !== ""}
                                        onBlur={this.handleBlur("name")}
                                        onChange={this.handleInputChange}
                                    />
                                    <FormFeedback>{errors.name}</FormFeedback>
                                </Col>
                            </Row>
                        </Form>
                        <Form onSubmit={this.handleSubmit}>
                            <Row className="control.group">
                                <Label htmlFor="doB" md={4}>Ngày sinh:</Label>
                                <Col md={8}>
                                    <Input
                                        type="date"
                                        className="form-control"
                                        id="doB"
                                        name="doB"
                                        value={this.state.doB}
                                        valid={errors.doB === ""}
                                        invalid={errors.doB !== ""}
                                        onBlur={this.handleBlur("doB")}
                                        onChange={this.handleInputChange}
                                    />
                                    <FormFeedback>{errors.doB}</FormFeedback>
                                </Col>
                            </Row>
                        </Form>
                        <Form onSubmit={this.handleSubmit}>
                            <Row className="control.group">
                                <Label htmlFor="startDate" md={4}>Ngày vào công ty:</Label>
                                <Col md={8}>
                                    <Input
                                        type="date"
                                        className="form-control"
                                        id="startDate"
                                        name="startDate"
                                        value={this.state.startDate}
                                        valid={errors.startDate === ""}
                                        invalid={errors.startDate !== ""}
                                        onBlur={this.handleBlur("startDate")}
                                        onChange={this.handleInputChange}
                                    />
                                    <FormFeedback>{errors.startDate}</FormFeedback>
                                </Col>
                            </Row>
                        </Form>
                        <Form onSubmit={this.handleSubmit}>
                            <Row className="control.group">
                                <Label htmlFor="department" md={4}>Phòng ban:</Label>
                                <Col md={8}>
                                    <Input
                                        type="select"
                                        className="form-control"
                                        id="department"
                                        name="department"
                                        value={this.state.department}
                                        valid={errors.department === ""}
                                        invalid={errors.department !== ""}
                                        onBlur={this.handleBlur("department")}
                                        onChange={this.handleInputChange}
                                    >
                                        <option>Sale</option>
                                        <option>HR</option>
                                        <option>Marketing</option>
                                        <option>IT</option>
                                        <option>Finance</option>
                                    </Input>

                                    <FormFeedback>{errors.department}</FormFeedback>
                                </Col>
                            </Row>
                        </Form>
                        <Form onSubmit={this.handleSubmit}>
                            <Row className="control.group">
                                <Label htmlFor="salaryScale" md={4}>Hệ số lương: </Label>
                                <Col md={8}>
                                    <Input
                                        type="text"
                                        className="form-control"
                                        id="salaryScale"
                                        name="salaryScale"
                                        value={this.state.salaryScale}
                                        valid={errors.salaryScale === ""}
                                        invalid={errors.salaryScale !== ""}
                                        onBlur={this.handleBlur("salaryScale")}
                                        onChange={this.handleInputChange}
                                    />
                                    <FormFeedback>{errors.salaryScale}</FormFeedback>
                                </Col>
                            </Row>
                        </Form>
                        <Form onSubmit={this.handleSubmit}>
                            <Row className="control.group">
                                <Label htmlFor="annualLeave" md={4}>Số ngày nghỉ còn lại:</Label>
                                <Col md={8}>
                                    <Input
                                        type="text"
                                        className="form-control"
                                        id="annualLeave"
                                        name="annualLeave"
                                        value={this.state.annualLeave}
                                        valid={errors.annualLeave === ""}
                                        invalid={errors.annualLeave !== ""}
                                        onBlur={this.handleBlur("annualLeave")}
                                        onChange={this.handleInputChange}
                                    />
                                    <FormFeedback>{errors.annualLeave}</FormFeedback>
                                </Col>
                            </Row>
                        </Form>
                        <Form onSubmit={this.handleSubmit}>
                            <Row className="control.group">
                                <Label htmlFor="overTime" md={4}>Số ngày đã làm thêm:</Label>
                                <Col md={8}>
                                    <Input
                                        type="text"
                                        className="form-control"
                                        id="overTime"
                                        name="overTime"
                                        value={this.state.overTime}
                                        valid={errors.overTime === ""}
                                        invalid={errors.overTime !== ""}
                                        onBlur={this.handleBlur("overTime")}
                                        onChange={this.handleInputChange}
                                    />
                                    <FormFeedback>{errors.overTime}</FormFeedback>
                                </Col>
                            </Row>
                        </Form>
                    </ModalBody>
                    <ModalFooter>
                        <Button
                            color="primary"
                            onClick={this.handleSubmit}>
                            Thêm
                        </Button>
                        {' '}
                        <Button onClick={this.close}>
                            Hủy
                        </Button>
                    </ModalFooter>
                </Modal>
            </div>

        );
    }
}


export default StaffList;
