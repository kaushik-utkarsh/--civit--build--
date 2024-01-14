import React, { useState } from 'react';
import { Col, Card, CardBody, Row, Table, Input, Container, Label } from "reactstrap";
import 'react-datepicker/dist/react-datepicker.css';
import "../../App-new.css";
import "./InviteUsers.css"
import { AvForm, AvField } from 'availity-reactstrap-validation';
import "react-phone-input-2/lib/bootstrap.css";
import avatar from '../../assets/images/Avatar.svg'
import Close_square from '../../assets/images/Close_square.svg'
import DropDownSvg from '../../components/Common/DropDownSvg'


const InviteUsers = () => {
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
        <React.Fragment>
            <div className='container-stepper'>
                <div className="d-flex justify-content-center align-items-center">
                    <div className="col-12 col-md-12 col-lg-12">
                        <div className='container-stepper my-5 p-5 bg-white text-center'>
                            <Col lg={12}>
                                <div className="authentication-page-content d-flex">
                                    <div className="w-100">
                                        <Row className="justify-content-center">
                                            <Col lg={12}>
                                                <div>
                                                    <div className="text-center">
                                                        <h2 className="font-size-25 mt-4 heading-bold-stepper" style={{ textAlign: 'center' }}>Invite Users</h2>
                                                        <p className="text-muted" style={{ textAlign: 'center' }}>Invite your team members to start  collaborating on CivitBUILD</p>
                                                    </div>

                                                </div>
                                            </Col>
                                            <div className='col col-lg-9 mx-auto'>
                                                <div className="mt-3 d-flex align-item-center " >
                                                    <AvForm className="form-horizontal" onValidSubmit={handleSubmit}>
                                                        <div className="d-flex text-start justify-content-between">
                                                            <AvField
                                                                name="Email ID"
                                                                id="example-text-input"
                                                                label={
                                                                    <span>
                                                                        Email ID <span style={{ color: 'red' }}>*</span>
                                                                    </span>
                                                                }
                                                                value={firstName}
                                                                onChange={handleFirstNameChange}
                                                                type="text"
                                                                className="form-control text-muted"
                                                                validate={{
                                                                    minLength: { value: 1, errorMessage: 'Enter Email ID' },
                                                                    required: { value: true, errorMessage: 'Enter Email ID' }
                                                                }}
                                                                placeholder="Enter Email ID"
                                                                style={{ width: '464px', margin: '0' }}
                                                            />
                                                            {/* <div className="mt-4 text-center" style={{ justifyContent: 'space-around' }}></div> */}
                                                            <div className="mt-4 text-center d-flex align-item-end" style={{ gap: '20%', paddingTop: '0.85%' }}>
                                                                <button className="w-md waves-effect waves-light cancel-button m-0" type="submit" style={{ width:"148px",height: '76%' }}>+ Add</button>
                                                            </div>
                                                        </div>
                                                    </AvForm>
                                                </div>
                                            </div>
                                        </Row>

                                        <Row>
                                        <div className='col col-lg-9 mx-auto'>
                                        <Table borderless className="custom-table-invite">
                                                <thead >

                                                    <tr>
                                                        <th colSpan={4}>Added Users (15) </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {/* <div className='scrollable-container-onboarding'> */}
                                                    <tr>
                                                        <td><img src={avatar} /></td>
                                                        <td>
                                                            emilyjohnson420@gmail.com
                                                        </td>
                                                        <td><div style={{ position: 'relative' }}>
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
                                                                <option value="option1">Admin</option>
                                                                <option value="option2">Field Eng.</option>
                                                                <option value="option3">Cost Estimator</option>
                                                                <option value="option3">Invoice Administrator</option>
                                                            </select>
                                                            <DropDownSvg isOpen={toggleDropdown} />
                                                        </div></td>
                                                        <td><img src={Close_square} /></td>

                                                    </tr>
                                                    <tr>
                                                        <td><img src={avatar} /></td>
                                                        <td>
                                                            emilyjohnson420@gmail.com
                                                        </td>
                                                        <td><div style={{ position: 'relative' }}>
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
                                                                <option value="option1">Admin</option>
                                                                <option value="option2">Field Eng.</option>
                                                                <option value="option3">Cost Estimator</option>
                                                                <option value="option3">Invoice Administrator</option>
                                                            </select>
                                                            <DropDownSvg isOpen={toggleDropdown} />
                                                        </div></td>
                                                        <td><img src={Close_square} /></td>
                                                    </tr>
                                                    <tr>
                                                        <td><img src={avatar} /></td>
                                                        <td>
                                                            emilyjohnson420@gmail.com
                                                        </td>
                                                        <td><div style={{ position: 'relative' }}>
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
                                                                <option value="option1">Admin</option>
                                                                <option value="option2">Field Eng.</option>
                                                                <option value="option3">Cost Estimator</option>
                                                                <option value="option3">Invoice Administrator</option>
                                                            </select>
                                                            <DropDownSvg isOpen={toggleDropdown} />
                                                        </div></td>
                                                        <td><img src={Close_square} /></td>

                                                    </tr>
                                                    <tr>
                                                        <td><img src={avatar} /></td>
                                                        <td>
                                                            emilyjohnson420@gmail.com
                                                        </td>
                                                        <td><div style={{ position: 'relative' }}>
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
                                                                <option value="option1">Admin</option>
                                                                <option value="option2">Field Eng.</option>
                                                                <option value="option3">Cost Estimator</option>
                                                                <option value="option3">Invoice Administrator</option>
                                                            </select>
                                                            <DropDownSvg isOpen={toggleDropdown} />
                                                        </div></td>
                                                        <td><img src={Close_square} /></td>

                                                    </tr>
                                                    {/* </div> */}
                                                </tbody>
                                            </Table>
                                        </div>
                                           
                                        </Row>
                                        <Row>
                                            <div className='invite-bottom d-flex'>
                                                <button className='save-button-invite-transparent'
                                                    style={{ width: 'auto' }} >Skip and finish
                                                </button>
                                                <button className='save-button-invite'
                                                    style={{ width: '20%' }} >Invite
                                                </button>
                                            </div>
                                        </Row>
                                    </div>
                                </div>
                            </Col>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default InviteUsers;
