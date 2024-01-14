import React, { useState } from 'react';
import { Col, Card, CardBody, Row, Label, Container, Input } from "reactstrap";
import 'react-datepicker/dist/react-datepicker.css';
import "../../App-new.css";
import "./Onboarding.css"
import { AvForm, AvField } from 'availity-reactstrap-validation';
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";
import DropDownSvg from '../../components/Common/DropDownSvg'

const CompanyDetailsOnboard = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [phone, setPhone] = useState("");
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    const handleFirstNameChange = (event) => {
        const value = event.target.value;
        setFirstName(value);
        // Automatically fill last name when first name is filled
        setLastName(value);
    };

    const handleLastNameChange = (event) => {
        setLastName(event.target.value);
    };
    const handleSubmit = (event, values) => {
        // Handle form submission here
        console.log(values); // Values from the form
    };

    return (
        <div className='container-stepper'>
            <div className="d-flex justify-content-center align-items-center">
                <div className="col-12 col-md-12 col-lg-12">
                    <Container fluid className="p-5 container-stepper">
                        <Card className='self-onboarding-card'>
                            <CardBody className='d-flex justify-content-center'>
                                <Col lg={12}>
                                    <div className="authentication-page-content d-flex">
                                        <div className="w-100">
                                            <Row className="justify-content-center">
                                                <Col lg={12}>
                                                    <div>
                                                        <div className="text-center">
                                                            <h2 className="font-size-25 mt-4 heading-bold-stepper">Add Your Company Details</h2>
                                                            <p className="text-muted" style={{ textAlign: 'center' }}>Add company info to proceed further.</p>
                                                        </div>
                                                        <div className="p-2 mt-5">
                                                            <AvForm className="form-horizontal" onValidSubmit={handleSubmit}>
                                                                <div>
                                                                    <AvField
                                                                        name="First Name"
                                                                        id="example-text-input"
                                                                        label={
                                                                            <span>
                                                                                Company Name <span style={{ color: 'red' }}>*</span>
                                                                            </span>
                                                                        }
                                                                        value={firstName}
                                                                        onChange={handleFirstNameChange}
                                                                        type="text"
                                                                        className="form-control text-muted"
                                                                        validate={{
                                                                            minLength: { value: 1, errorMessage: 'Enter Company Name' },
                                                                            required: { value: true, errorMessage: 'Enter Company Name' }
                                                                        }}
                                                                        placeholder="Enter company name"
                                                                    />

                                                                    <div className="mt-4 text-center d-flex" style={{ justifyContent: 'space-around' }}></div>
                                                                    <div className='d-flex'>
                                                                        <div className='company-url input-width-for-url'>
                                                                            <Input
                                                                                id='example-text-input' type="text" className="form-check-input company-url" value='https://' />
                                                                        </div>
                                                                        <div className='flex-grow-1'>
                                                                        <AvField
                                                                            name="url Name"
                                                                            value={lastName}
                                                                            id='example-text-input'
                                                                            onChange={handleLastNameChange}
                                                                            type="text"
                                                                            className="form-control f-grow input-width-for-url text-muted"
                                                                        />
                                                                        </div>
                                                                        
                                                                        <div className='company-url input-width-for-url'>
                                                                            <Input type="text" readOnly className="form-check-input"
                                                                                id='example-text-input' value='civitbuild.in' />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="mt-4 text-center d-flex" style={{ justifyContent: 'space-around' }}></div>
                                                                <Row>
                                                                    <Col md={6}>
                                                                        <Label htmlFor="mySelect">Company Type
                                                                            {/* <span style={{ color: 'red' }}>*</span> */}
                                                                        </Label>
                                                                        <div style={{ position: 'relative' }}>
                                                                            <select
                                                                                id="example-text-input"
                                                                                placeholder='Select'
                                                                                value=''
                                                                                name='taxType'
                                                                                onClick={toggleDropdown}
                                                                            >
                                                                                {/* {formSubmitted && taxType === '' && (
                                                                                    <p style={{ color: 'red' }}>Please Enter Valid Details</p>
                                                                                )} */}
                                                                                <option value="option1">Select</option>
                                                                                <option value="option1">LLP</option>
                                                                                <option value="option2">TAN</option>
                                                                                <option value="option3">TIN</option>
                                                                                <option value="option3">EIN</option>
                                                                            </select>
                                                                            <DropDownSvg isOpen={toggleDropdown} />
                                                                        </div>
                                                                    </Col>
                                                                    <Col md={6}>
                                                                        <Label htmlFor="mySelect">No. of Employees
                                                                            {/* <span style={{ color: 'red' }}>*</span> */}
                                                                        </Label>
                                                                        <div style={{ position: 'relative' }}>
                                                                            <select
                                                                                id="example-text-input"
                                                                                placeholder='Select'
                                                                                value=''
                                                                                name='taxType'
                                                                                onClick={toggleDropdown}
                                                                            >
                                                                                {/* {formSubmitted && taxType === '' && (
                                                                                    <p style={{ color: 'red' }}>Please Enter Valid Details</p>
                                                                                )} */}
                                                                                <option value="option1">Select</option>
                                                                                <option value="option1">LLP</option>
                                                                                <option value="option2">TAN</option>
                                                                                <option value="option3">TIN</option>
                                                                                <option value="option3">EIN</option>
                                                                            </select>
                                                                            <DropDownSvg isOpen={toggleDropdown} />
                                                                        </div>
                                                                    </Col>
                                                                </Row>
                                                                <div className="mt-4 text-center d-flex" style={{ justifyContent: 'space-around' }}></div>
                                                                <Row>
                                                                    <Col md={6}>
                                                                        <Label htmlFor="mySelect">State
                                                                            {/* <span style={{ color: 'red' }}>*</span> */}
                                                                        </Label>
                                                                        <div style={{ position: 'relative' }}>
                                                                            <select
                                                                                id="example-text-input"
                                                                                placeholder='Select'
                                                                                value=''
                                                                                name='taxType'
                                                                                onClick={toggleDropdown}
                                                                            >
                                                                                {/* {formSubmitted && taxType === '' && (
                                                                                    <p style={{ color: 'red' }}>Please Enter Valid Details</p>
                                                                                )} */}
                                                                                <option value="option1">Select</option>
                                                                                <option value="option1">LLP</option>
                                                                                <option value="option2">TAN</option>
                                                                                <option value="option3">TIN</option>
                                                                                <option value="option3">EIN</option>
                                                                            </select>
                                                                            <DropDownSvg isOpen={toggleDropdown} />
                                                                        </div>
                                                                    </Col>
                                                                    <Col md={6}>
                                                                        <Label htmlFor="mySelect">City
                                                                            {/* <span style={{ color: 'red' }}>*</span> */}
                                                                        </Label>
                                                                        <div style={{ position: 'relative' }}>
                                                                            <select
                                                                                id="example-text-input"
                                                                                placeholder='Select'
                                                                                value=''
                                                                                name='taxType'
                                                                                onClick={toggleDropdown}
                                                                            >
                                                                                {/* {formSubmitted && taxType === '' && (
                                                                                    <p style={{ color: 'red' }}>Please Enter Valid Details</p>
                                                                                )} */}
                                                                                <option value="option1">Select</option>
                                                                                <option value="option1">LLP</option>
                                                                                <option value="option2">TAN</option>
                                                                                <option value="option3">TIN</option>
                                                                                <option value="option3">EIN</option>
                                                                            </select>
                                                                            <DropDownSvg isOpen={toggleDropdown} />
                                                                        </div>
                                                                    </Col>
                                                                </Row>
                                                                <div className="mt-4 text-center d-flex" style={{ justifyContent: 'space-around' }}></div>
                                                                <div className="mt-4 text-center">
                                                                    <button className="w-md waves-effect waves-light save-button-onboarding save-button-onboarding-stepper" type="submit">Continue</button>
                                                                </div>
                                                            </AvForm>
                                                        </div>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                    </div>
                                </Col>
                            </CardBody>
                        </Card>
                    </Container>
                </div>
            </div>
        </div>
    );
}

export default CompanyDetailsOnboard;
