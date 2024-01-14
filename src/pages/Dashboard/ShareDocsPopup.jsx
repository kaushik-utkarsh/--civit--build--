import React, { useState } from 'react';
import { Col, Row, Label, Input, Button, FormGroup } from "reactstrap";
import "../../App-new.css";
import 'react-datepicker/dist/react-datepicker.css';
import shareDocsImg from "../../assets/images/shareDocsImg.svg";
import { AvBaseInput, AvCheckbox, AvField, AvInput, AvForm, AvGroup, AvFeedback } from "availity-reactstrap-validation";
import DropDownSvg from '../../components/Common/DropDownSvg'

// import { useState } from 'react';
// import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

// import React, { useState } from "react";
import { Tabs, Tab } from "react-bootstrap";

const BankModal = ({ show: show1, onHide }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [name, setName] = useState('');
    const [PanNumber, setPanNumber] = useState('');
    const [TanHolderType, setTanHolderType] = useState('');
    const [County, setCountry] = useState('');
    const [City, setCity] = useState('');
    const [formSubmitted, setFormSubmitted] = useState(false);


    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);

    const handleClose = () => onHide();
    // const handleShow = () => setShow(true);
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);
    const handleClose3 = () => setShow3(false);
    const handleShow3 = () => setShow3(true);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    const handleButtonClick = () => {
        // Mark the form as submitted
        setFormSubmitted(true);

        // Check if mandatory fields are filled
        if (name === '' || PanNumber === '' || TanHolderType === '' || County === '' || City === '') {
            // You can show an error message or take other actions
            console.log('Mandatory fields are not filled');
        } else {
            // Process the form or perform other actions
            console.log('Form submitted successfully');
        }
    };

    return (

        <div className='modal-content'>
            <Modal show={show1} onHide={handleClose}>
                <div className="modal-header">
                    <Modal.Header closeButton closeVariant='white' style={{ position: 'relative' }}>
                        <Modal.Title>Share - Doc 1</Modal.Title>
                        {/* Add additional content or buttons in the header if needed */}
                    </Modal.Header>
                </div>
                <Modal.Body>
                    <Row>
                        <Col md={6}>
                            <img src={shareDocsImg} alt="shareDocsImg" />
                        </Col>
                        <Col md={6}>
                            <AvForm>
                                <div className="mb-3">
                                    <Label htmlFor="mySelect">
                                        Share With <span style={{ color: 'red' }}>*</span>
                                    </Label>
                                    <div style={{ position: 'relative' }}>
                                        <select
                                            id="example-text-input"
                                            placeholder='Select'
                                            value={''}
                                            // onChange={(e) => setCompanyType(e.currentTarget.value)}
                                            // onChange={(e) => {
                                            //     const value = e.currentTarget.value;
                                            //     setCompanyType(value);
                                            //     // Add your validation logic here and update isValid state accordingly
                                            //     // setIsValid(validate(value));
                                            // }}
                                            onClick={toggleDropdown}
                                            required={true}
                                        >
                                            <option value="Select">Select</option>
                                            <option value="option1">LLP</option>
                                            <option value="option2">LLC</option>
                                            <option value="option3">Private Limited</option>
                                            <option value="option3">Public Limited</option>
                                            <option value="option3">Incorporated</option>
                                        </select>
                                        <DropDownSvg isOpen={toggleDropdown} />
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <AvField
                                        name="Remark" // Name attribute without the HTML or JSX syntax inside
                                        label={
                                            <span>
                                                Remark <span style={{ color: 'red' }}>*</span>
                                            </span>
                                        }
                                        placeholder="Enter Comment"
                                        id="example-text-input"
                                        type="textarea"
                                        rows="5"
                                        validate={{
                                            required: { value: true },
                                            pattern: {
                                                value: /^[0-9a-zA-Z]+$/,
                                                errorMessage: "Only Textarea"
                                            }
                                        }}
                                    />
                                    <span>
                                        Upto 500 characters
                                    </span>
                                </div>

                                <FormGroup className="mb-0">
                                    <div>
                                        <button className="save-button" type="submit" color="primary">
                                            Submit
                                        </button>{" "}
                                        <button className="cancel-button" type="reset" color="secondary">
                                            Cancel
                                        </button>
                                    </div>
                                </FormGroup>
                            </AvForm>
                        </Col>
                    </Row>
                </Modal.Body>
                {/* <Modal.Footer>
                    <div className="col col-md-12 add-client-button">
                        <div className="row">
                            <div className="col col-md-12 mb-3" style={{ float: 'right' }}>
                                <button className="save-button" onClick={handleButtonClick}>Save</button>
                                <button className="cancel-button">Cancel</button>
                            </div>
                        </div>
                    </div>
                </Modal.Footer> */}
            </Modal>
        </div>
    )
}

export default BankModal 