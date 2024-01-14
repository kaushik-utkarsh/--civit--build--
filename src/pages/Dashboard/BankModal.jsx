import React, { useState } from 'react';
import { Col, Row, Label, Input } from "reactstrap";
import "../../App-new.css";
import 'react-datepicker/dist/react-datepicker.css';

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
                        <Modal.Title>Bank Details</Modal.Title>
                        {/* Add additional content or buttons in the header if needed */}
                    </Modal.Header>
                </div>
                <Modal.Body>
                    <Tabs
                        defaultActiveKey="home"
                        id="uncontrolled-tab-example"
                        className="mb-3"
                    >
                        <Tab eventKey="home" title="Bank" className='nav-link'>
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
                                                    <svg
                                                        className='drop-down-svg'
                                                        style={{
                                                            transform: `translateY(-50%) rotate(${isOpen ? '180deg' : '0deg'})`,// Ensure the SVG doesn't interfere with clicking on the select
                                                        }}
                                                        width="24"
                                                        height="24"
                                                        viewBox="0 0 24 24"
                                                    > <path d="M12.0007 13.1727L16.9507 8.22266L18.3647 9.63666L12.0007 16.0007L5.63672 9.63666L7.05072 8.22266L12.0007 13.1727Z" fill="#256EB5" />
                                                    </svg>
                                                </div>
                                            </Col>
                                            <Col md={6}>
                                                <Label htmlFor="mySelect">Account Type  <span style={{ color: 'red' }}>*</span></Label>
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
                                                    <svg
                                                        className='drop-down-svg'
                                                        style={{
                                                            transform: `translateY(-50%) rotate(${isOpen ? '180deg' : '0deg'})`,
                                                        }}
                                                        width="24"
                                                        height="24"
                                                        viewBox="0 0 24 24"
                                                    > <path d="M12.0007 13.1727L16.9507 8.22266L18.3647 9.63666L12.0007 16.0007L5.63672 9.63666L7.05072 8.22266L12.0007 13.1727Z" fill="#256EB5" />
                                                    </svg>
                                                </div>
                                            </Col>
                                        </Row>
                                        <Row className="mb-3">
                                            <Col md={6}>
                                                <Label htmlFor="example-text-input" className="col-md-12 col-form-label">Account Number  <span style={{ color: 'red' }}>*</span></Label>
                                                <Input type="text" placeholder="Enter Account Number" id="example-text-input" required={true} />
                                            </Col>

                                            <Col md={6}>
                                                <Label htmlFor="example-text-input" className="col-md-12 col-form-label">Account Name <span style={{ color: 'red' }}>*</span></Label>
                                                <Input type="text" placeholder="Enter Account Name" id="example-text-input" required={true} />
                                            </Col>
                                        </Row>
                                        <Row className="mb-3">
                                            <Col md={12}>
                                                <Label htmlFor="example-text-input" className="col-md-12 col-form-label">Branch Address <span style={{ color: 'red' }}>*</span></Label>
                                                <Input type="text" placeholder="Enter Branch Address" id="example-text-input" required={true} />

                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md={12}>
                                                <Row className="mb-3">
                                                    <Col md={6}>

                                                        <Label htmlFor="mySelect">Country <span style={{ color: 'red' }}>*</span></Label>
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
                                                            <svg
                                                                className='drop-down-svg'
                                                                style={{
                                                                    transform: `translateY(-50%) rotate(${isOpen ? '180deg' : '0deg'})`,
                                                                }}
                                                                width="24"
                                                                height="24"
                                                                viewBox="0 0 24 24"
                                                            >
                                                                <path d="M12.0007 13.1727L16.9507 8.22266L18.3647 9.63666L12.0007 16.0007L5.63672 9.63666L7.05072 8.22266L12.0007 13.1727Z" fill="#256EB5" />
                                                            </svg>
                                                        </div>
                                                    </Col>

                                                    <Col md={6}>

                                                        <Label htmlFor="mySelect">State <span style={{ color: 'red' }}>*</span></Label>
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
                                                            <svg
                                                                className='drop-down-svg'
                                                                style={{
                                                                    transform: `translateY(-50%) rotate(${isOpen ? '180deg' : '0deg'})`,
                                                                }}
                                                                width="24"
                                                                height="24"
                                                                viewBox="0 0 24 24"
                                                            >
                                                                <path d="M12.0007 13.1727L16.9507 8.22266L18.3647 9.63666L12.0007 16.0007L5.63672 9.63666L7.05072 8.22266L12.0007 13.1727Z" fill="#256EB5" />
                                                            </svg>
                                                        </div>
                                                    </Col>
                                                </Row>
                                                <Row className="mb-3">

                                                    <Col md={6}>
                                                        <Label htmlFor="mySelect">City <span style={{ color: 'red' }}>*</span></Label>
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
                                                            <svg
                                                                className='drop-down-svg'
                                                                style={{
                                                                    transform: `translateY(-50%) rotate(${isOpen ? '0deg' : '180deg'})`,
                                                                }}
                                                                width="24"
                                                                height="24"
                                                                viewBox="0 0 24 24"
                                                            >
                                                                <path d="M12.0007 13.1727L16.9507 8.22266L18.3647 9.63666L12.0007 16.0007L5.63672 9.63666L7.05072 8.22266L12.0007 13.1727Z" fill="#256EB5" />
                                                            </svg>
                                                        </div>
                                                    </Col>
                                                    <Col md={6}>
                                                        <Label htmlFor="example-text-input" className="col-md-12 col-form-label">Zip Code <span style={{ color: 'red' }}>*</span></Label>
                                                        <Input type="text" placeholder="Enter Zip Code" id="example-text-input" required={true} />

                                                    </Col>
                                                </Row>
                                            </Col>
                                        </Row>

                                        <Row className="mb-3">
                                            <Col md={6}>
                                                <Label htmlFor="example-text-input" className="col-md-12 col-form-label">Short Code <span style={{ color: 'red' }}>*</span></Label>
                                                <Input type="text" placeholder="Enter Short Code" id="example-text-input" required={true} />
                                            </Col>

                                            <Col md={6}>
                                                <Label htmlFor="example-text-input" className="col-md-12 col-form-label">Swift Code <span style={{ color: 'red' }}>*</span></Label>
                                                <Input type="text" placeholder="Enter Swift Code" id="example-text-input" required={true} />
                                            </Col>
                                        </Row>
                                        <Row className="mb-3">
                                            <Col md={6}>
                                                <Label htmlFor="example-text-input" className="col-md-12 col-form-label">BIC Code <span style={{ color: 'red' }}>*</span></Label>
                                                <Input type="text" placeholder="Enter BIC Code" id="example-text-input" required={true} />
                                            </Col>

                                            <Col md={6}>
                                                <Label htmlFor="example-text-input" className="col-md-12 col-form-label">IBAN Number <span style={{ color: 'red' }}>*</span></Label>
                                                <Input type="text" placeholder="Enter IBAN Number" id="example-text-input" required={true} />
                                            </Col>
                                        </Row>
                                        <Row className="mb-3">
                                            <Col md={6}>

                                                <div className="form-check mb-3 d-flex align-items-center" style={{ justifyContent: 'space-between' }}>
                                                    {/* Use className instead of bordeColor */}
                                                    <div>

                                                        <Input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            value=""
                                                            id="defaultCheck1"
                                                        />
                                                        <Label className="form-check-label" htmlFor="defaultCheck1">
                                                            Is Local Bank?
                                                        </Label>
                                                    </div>
                                                    <div>

                                                        <Input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            value=""
                                                            id="defaultCheck1"
                                                        />
                                                        <Label className="form-check-label" htmlFor="defaultCheck1">
                                                            Active
                                                        </Label>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Form>
                        </Tab>
                        <Tab eventKey="profile" title="Intermediate Bank Details">
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
                                                    <svg
                                                        className='drop-down-svg'
                                                        style={{
                                                            transform: `translateY(-50%) rotate(${isOpen ? '180deg' : '0deg'})`,
                                                        }}
                                                        width="24"
                                                        height="24"
                                                        viewBox="0 0 24 24"
                                                    > <path d="M12.0007 13.1727L16.9507 8.22266L18.3647 9.63666L12.0007 16.0007L5.63672 9.63666L7.05072 8.22266L12.0007 13.1727Z" fill="#256EB5" />
                                                    </svg>
                                                </div>
                                            </Col>
                                        </Row>
                                        <Row className="mb-3">
                                            <Col md={6}>
                                                <Label htmlFor="example-text-input" className="col-md-12 col-form-label">Account Number <span style={{ color: 'red' }}>*</span></Label>
                                                <Input type="text" placeholder="Enter Account Number" id="example-text-input" required={true} />
                                            </Col>

                                            <Col md={6}>
                                                <Label htmlFor="example-text-input" className="col-md-12 col-form-label">Account Name <span style={{ color: 'red' }}>*</span></Label>
                                                <Input type="text" placeholder="Enter Account Name" id="example-text-input" required={true} />
                                            </Col>
                                        </Row>
                                        <Row className="mb-3">
                                            <Col md={12}>
                                                <Label htmlFor="example-text-input" className="col-md-12 col-form-label">Branch Address <span style={{ color: 'red' }}>*</span></Label>
                                                <Input type="text" placeholder="Enter Branch Address" id="example-text-input" required={true} />

                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md={12}>
                                                <Row className="mb-3">
                                                    <Col md={6}>

                                                        <Label htmlFor="mySelect">Country <span style={{ color: 'red' }}>*</span></Label>
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
                                                            <svg
                                                                className='drop-down-svg'
                                                                style={{
                                                                    transform: `translateY(-50%) rotate(${isOpen ? '180deg' : '0deg'})`,
                                                                }}
                                                                width="24"
                                                                height="24"
                                                                viewBox="0 0 24 24"
                                                            >
                                                                <path d="M12.0007 13.1727L16.9507 8.22266L18.3647 9.63666L12.0007 16.0007L5.63672 9.63666L7.05072 8.22266L12.0007 13.1727Z" fill="#256EB5" />
                                                            </svg>
                                                        </div>
                                                    </Col>

                                                    <Col md={6}>

                                                        <Label htmlFor="mySelect">State <span style={{ color: 'red' }}>*</span></Label>
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
                                                            <svg
                                                                className='drop-down-svg'
                                                                style={{
                                                                    transform: `translateY(-50%) rotate(${isOpen ? '180deg' : '0deg'})`,
                                                                }}
                                                                width="24"
                                                                height="24"
                                                                viewBox="0 0 24 24"
                                                            >
                                                                <path d="M12.0007 13.1727L16.9507 8.22266L18.3647 9.63666L12.0007 16.0007L5.63672 9.63666L7.05072 8.22266L12.0007 13.1727Z" fill="#256EB5" />
                                                            </svg>
                                                        </div>
                                                    </Col>
                                                </Row>
                                                <Row className="mb-3">

                                                    <Col md={6}>
                                                        <Label htmlFor="mySelect">City <span style={{ color: 'red' }}>*</span></Label>
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
                                                            <svg
                                                                className='drop-down-svg'
                                                                style={{
                                                                    transform: `translateY(-50%) rotate(${isOpen ? '180deg' : '0deg'})`,
                                                                }}
                                                                width="24"
                                                                height="24"
                                                                viewBox="0 0 24 24"
                                                            >
                                                                <path d="M12.0007 13.1727L16.9507 8.22266L18.3647 9.63666L12.0007 16.0007L5.63672 9.63666L7.05072 8.22266L12.0007 13.1727Z" fill="#256EB5" />
                                                            </svg>
                                                        </div>
                                                    </Col>
                                                    <Col md={6}>
                                                        <Label htmlFor="example-text-input" className="col-md-12 col-form-label">Zip Code <span style={{ color: 'red' }}>*</span></Label>
                                                        <Input type="text" placeholder="Enter Zip Code" id="example-text-input" required={true} />

                                                    </Col>
                                                </Row>
                                            </Col>
                                        </Row>

                                        <Row className="mb-3">
                                            <Col md={6}>
                                                <Label htmlFor="example-text-input" className="col-md-12 col-form-label">Short Code <span style={{ color: 'red' }}>*</span></Label>
                                                <Input type="text" placeholder="Enter Short Code" id="example-text-input" required={true} />
                                            </Col>

                                            <Col md={6}>
                                                <Label htmlFor="example-text-input" className="col-md-12 col-form-label">Swift Code</Label>
                                                <Input type="text" placeholder="Enter Swift Code" id="example-text-input" required={true} />
                                            </Col>
                                        </Row>
                                        <Row className="mb-3">
                                            <Col md={6}>
                                                <Label htmlFor="example-text-input" className="col-md-12 col-form-label">BIC Code <span style={{ color: 'red' }}>*</span></Label>
                                                <Input type="text" placeholder="Enter BIC Code" id="example-text-input" required={true} />
                                            </Col>

                                            <Col md={6}>
                                                <Label htmlFor="example-text-input" className="col-md-12 col-form-label">IBAN Number <span style={{ color: 'red' }}>*</span></Label>
                                                <Input type="text" placeholder="Enter IBAN Number" id="example-text-input" required={true} />
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Form>
                        </Tab>
                    </Tabs>

                </Modal.Body>
                <Modal.Footer>
                    <div className="col col-md-12 add-client-button">
                        <div className="row">
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

export default BankModal