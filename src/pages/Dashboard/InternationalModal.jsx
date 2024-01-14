import React, { Component, useState } from 'react';
import { Card, CardBody, Col, Row, Label, Input, Button } from "reactstrap";
import "../../App-new.css";
import 'react-datepicker/dist/react-datepicker.css';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Svg from '../../components/Common/DropDownSvg';

const InternationalModal = () => {

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

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
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
    <Button variant="primary" onClick={handleShow3}>
        Launch modal 2 (International bank)
    </Button>
    <Modal show={show3} onHide={handleClose3}>
        <div className="modal-header">
            <Modal.Header closeButton closeVariant='white' style={{ position: 'relative' }}>
                <Modal.Title>Bank Details</Modal.Title>
                {/* Add additional content or buttons in the header if needed */}
            </Modal.Header>
        </div>
        <Modal.Body>
            <Form>
                <Row>
                    <Col md={12}>
                        <Row className="mb-3">

                            <Col md={6}>
                                <Label htmlFor="mySelect">Bank Name <span style={{ color: 'red' }}>*</span></Label>

                                <div style={{ position: 'relative' }}>
                                    <select
                                        id="example-text-input"
                                        style={{
                                            width: '100%',
                                            padding: '10px',
                                            appearance: 'none',
                                            maxHeight: "2.5rem"

                                        }}
                                        placeholder='Select'
                                        value={TanHolderType}
                                        onChange={(e) => setTanHolderType(e.target.value)}

                                        onClick={toggleDropdown}
                                        required={true}
                                    >
                                        {formSubmitted && TanHolderType === '' && (
                                            <p style={{ color: 'red' }}>Please Enter Valid Details</p>
                                        )}
                                        <option value="option1">Option 1</option>
                                        <option value="option2">Option 2</option>
                                        <option value="option3">Option 3</option>
                                    </select>
                                   <Svg isOpen={isOpen} />
                                </div>
                            </Col>
                        </Row>
                        <Row className="mb-3">
                            <Col md={6}>
                                <Label htmlFor="example-text-input" className="col-md-12 col-form-label">Account Number</Label>
                                <Input type="text" placeholder="Enter Account Number" id="example-text-input" required={true} />
                            </Col>

                            <Col md={6}>
                                <Label htmlFor="example-text-input" className="col-md-12 col-form-label">Account Name</Label>
                                <Input type="text" placeholder="Enter Account Name" id="example-text-input" required={true} />
                            </Col>
                        </Row>
                        <Row className="mb-3">
                            <Col md={12}>
                                <Label htmlFor="example-text-input" className="col-md-12 col-form-label">Branch Address</Label>
                                <Input type="text" placeholder="Enter Branch Address" id="example-text-input" required={true} />

                            </Col>
                        </Row>
                        <Row>
                            <Col md={12}>
                                <Row className="mb-3">
                                    <Col md={6}>

                                        <Label htmlFor="mySelect">Country</Label>
                                        <div
                                            style={{
                                                position: 'relative',
                                            }}
                                        >
                                            <select
                                                id="example-text-input"
                                                style={{
                                                    width: '100%',
                                                    padding: '10px',
                                                    appearance: 'none',
                                                }}
                                                onClick={toggleDropdown}
                                                required={true}
                                            >
                                                <option value="option1">Option 1</option>
                                                <option value="option2">Option 2</option>
                                                <option value="option3">Option 3</option>
                                            </select>
                                            <Svg isOpen={isOpen} />
                                        </div>
                                    </Col>

                                    <Col md={6}>

                                        <Label htmlFor="mySelect">State</Label>
                                        <div
                                            style={{
                                                position: 'relative',
                                            }}
                                        >
                                            <select
                                                id="example-text-input"
                                                style={{
                                                    width: '100%',
                                                    padding: '10px',
                                                    appearance: 'none',
                                                }}
                                                onClick={toggleDropdown}
                                                required={true}
                                            >
                                                <option value="option1">Option 1</option>
                                                <option value="option2">Option 2</option>
                                                <option value="option3">Option 3</option>
                                            </select>
                                            <Svg isOpen={isOpen} />
                                        </div>
                                    </Col>
                                </Row>
                                <Row className="mb-3">

                                    <Col md={6}>
                                        <Label htmlFor="mySelect">State</Label>
                                        <div
                                            style={{
                                                position: 'relative',
                                            }}
                                        >
                                            <select
                                                id="example-text-input"
                                                style={{
                                                    width: '100%',
                                                    padding: '10px',
                                                    appearance: 'none',
                                                }}
                                                onClick={toggleDropdown}
                                                required={true}
                                            >
                                                <option value="option1">Option 1</option>
                                                <option value="option2">Option 2</option>
                                                <option value="option3">Option 3</option>
                                            </select>
                                            <Svg isOpen={isOpen} />
                                        </div>
                                    </Col>
                                    <Col md={6}>
                                        <Label htmlFor="example-text-input" className="col-md-12 col-form-label">Zip Code</Label>
                                        <Input type="text" placeholder="Enter Zip Code" id="example-text-input" required={true} />

                                    </Col>
                                </Row>
                            </Col>
                        </Row>

                        <Row className="mb-3">
                            <Col md={6}>
                                <Label htmlFor="example-text-input" className="col-md-12 col-form-label">Short Code</Label>
                                <Input type="text" placeholder="Enter Short Code" id="example-text-input" required={true} />
                            </Col>

                            <Col md={6}>
                                <Label htmlFor="example-text-input" className="col-md-12 col-form-label">Swift Code</Label>
                                <Input type="text" placeholder="Enter Swift Code" id="example-text-input" required={true} />
                            </Col>
                        </Row>
                        <Row className="mb-3">
                            <Col md={6}>
                                <Label htmlFor="example-text-input" className="col-md-12 col-form-label">BIC Code</Label>
                                <Input type="text" placeholder="Enter BIC Code" id="example-text-input" required={true} />
                            </Col>

                            <Col md={6}>
                                <Label htmlFor="example-text-input" className="col-md-12 col-form-label">IBAN Number</Label>
                                <Input type="text" placeholder="Enter IBAN Number" id="example-text-input" required={true} />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Form>
        </Modal.Body>
        <Modal.Footer>
            <div className="col col-md-12 add-client-button">
                <div className="row">
                    {/* <div className="col col-md-6 mb-3">
                <h3>Add Client</h3>
            </div> */}
                    <div className="col col-md-12 mb-3" style={{ float: 'right' }}>
                        <button className="save-button" onClick={handleButtonClick}>Save</button>
                        <button className="cancel-button">Cancel</button>
                    </div>
                </div>
            </div>
        </Modal.Footer>
    </Modal>
</div>
  )
}

export default InternationalModal