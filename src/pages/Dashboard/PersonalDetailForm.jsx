import React, { useEffect, useState } from 'react';
import { Col, Row, Label, Input, } from "reactstrap";
import "../../App-new.css";
import 'react-datepicker/dist/react-datepicker.css';
import Form from 'react-bootstrap/Form';

const PersonalDetails = (props) => {
    const { onparentFun, formValue, handleInputChange, setUnfilledFields, unfilledFields } = props;
    const [isOpen, setIsOpen] = useState(false);
    const [companyName, setCompanyName] = useState('');
    const [taxNumber, setTaxNumber] = useState('');
    const [companyType, setCompanyType] = useState('');
    const [taxType, setTaxType] = useState('');
    const [address1, setAddress1] = useState('');
    const [address2, setAddress2] = useState('');
    const [address3, setAddress3] = useState('');
    const [country, setCountry] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [isValid, setIsValid] = useState(true);



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

    const onSubmit = async (event, errors, values) => {
        // Call the onparentFun function to handle validation in the parent component
        const isValid = !errors.length;
        onparentFun(isValid);

        // Your additional logic here, if needed
    };

    // const handleFormSubmission = () => {
    //     // Check if mandatory fields are filled
    //     if (
    //         companyName === '' ||
    //         taxNumber === '' ||
    //         companyType === '' ||
    //         taxType === '' ||
    //         country === '' ||
    //         city === '' ||
    //         state === '' ||
    //         zipCode === ''
    //     ) {
    //         // You can show an error message or take other actions
    //         console.log('Mandatory fields are not filled');
    //     } else {
    //         // Process the form or perform other actions
    //         setFormSubmitted(true);
    //         console.log('Form submitted successfully');
    //         // return onSubmit
    //         // Notify the parent component about the form submission

    //     }
    // };

    // if (companyName && taxNumber && country && city && state && zipCode) {
    //     handleFormSubmission();
    // }
    // if (companyName) {
    //     handleFormSubmission();
    // }

    const validate = (value) => {
        // Add your validation logic here
        return value.trim() !== ''; // For example, value should not be an empty string
    };

    useEffect(() => {
        console.log("child==>>", props);
        validate('')
    }, [])

    return (
        <div className='scrollable-container'>
            {/* <AvForm onValidSubmit={onSubmit} model={formValue}> */}
                <Row>
                    {/* <Col xs={9}> */}
                    <Row >
                        <div>
                            <p className="card-title-desc mt-3">Code <b style={{ color: '#000' }}>CLI/109</b></p>
                        </div>
                        <Col md={4}>
                            <div>
                                <p className='text-styles-para'> <strong>1 / 3</strong></p>
                                <h4 class='text-styles-heading'>Company Details</h4>
                                <p className='text-styles-para'>Enter Your Company Details Here</p>
                            </div>
                        </Col>
                        <Col md={8}>
                            <Row className="mb-4">

                                <Col md={6}>
                                    <Label htmlFor="example-text-input" className="col-md-12 col-form-label">Company Name <span style={{ color: 'red' }}>*</span></Label>
                                    {/* <AvForm> */}
                                    {/* <AvField
                                        label={("Company Name *")}
                                        type="text"
                                        name="name"
                                        id="example-text-input"
                                        placeholder={("Enter Company Name")}
                                        validate={{ required: { value: true, errorMessage: "Please enter company name" } }}
                                        onChange={handleInputChange}
                                        isInvalid={!formValue?.nameFilled} // Manually manage isInvalid based on your field tracking
                                    /> */}
                                    {/* </AvForm> */}
                                    <Input type="text"  id="example-text-input" placeholder={("Enter Company Name")} value={formValue?.name}
                                        onChange={handleInputChange} required={true} />
                                    {formSubmitted && formValue?.name === '' && (
                                        <p style={{ color: 'red' }}>Please enter company name</p>
                                    )}
                                </Col>
                                <Col md={6}>

                                    {/* <AvField
                                        label={("Tax ID Number *")}
                                        id="example-text-input"
                                        //   className="form-control"
                                        type="text"
                                        name="taxId"
                                        placeholder={("Enter Tax ID Number")}
                                        onChange={handleInputChange}
                                        value={formValue?.taxId}
                                        validate={{ required: { value: true } }}
                                        errorMessage={("Please enter a Valid Tax ID number.")}
                                    /> */}

                                    <Label htmlFor="example-text-input" className="col-md-12 col-form-label">Tax ID Number <span style={{ color: 'red' }}>*</span></Label>
                            <Input type="text" placeholder="Enter Tax ID Number" id="example-text-input" value={formValue?.taxId} onChange={handleInputChange} required={true} />
                            {formSubmitted && formValue?.taxId === '' && (
                                <p style={{ color: 'red' }}>Please enter a Valid Tax ID number.</p>
                            )}
                                </Col>
                            </Row>
                            <Row className="mb-4">
                                <Col md={6}>
                                    {/* <Label htmlFor="mySelect">
                                    Company Type <span style={{ color: 'red' }}>*</span>
                                </Label>
                                <div style={{ position: 'relative' }}>
                                    <select
                                        id="example-text-input"
                                        placeholder='Select'
                                        value={companyType}
                                        // onChange={(e) => setCompanyType(e.currentTarget.value)}
                                        onChange={(e) => {
                                            const value = e.currentTarget.value;
                                            setCompanyType(value);
                                            // Add your validation logic here and update isValid state accordingly
                                            // setIsValid(validate(value));
                                        }}
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
                                    {formSubmitted && (companyType === 'Select' || companyType === '') && (
                                        <p style={{ color: 'red' }}>Please select a valid company type</p>
                                    )}
                                    <svg
                                        className='svg-dropdown'
                                        style={{
                                            transform: `translateY(-50%) rotate(${isOpen ? '180deg' : '0deg'})`,
                                            transition: 'transform 0.3s ease',
                                            pointerEvents: 'none',
                                        }}
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12.0007 13.1727L16.9507 8.22266L18.3647 9.63666L12.0007 16.0007L5.63672 9.63666L7.05072 8.22266L12.0007 13.1727Z" fill="#256EB5" />
                                    </svg>
                                </div> */}
                                    <Form.Group controlId="exampleForm.SelectCustom">
                                        <Form.Label> Company Type</Form.Label>
                                        <Form.Select
                                            id="example-text-input"
                                            value={formValue?.companyType}
                                            onChange={handleInputChange}
                                            name='companyType'
                                            validate={{ required: { value: true, errorMessage: "Name cannot be empty" } }}
                                        // isInvalid={!isValid} // Mark as invalid based on validation
                                        >
                                            <option value="">Choose...</option>
                                            <option value="option1">Option 1</option>
                                            <option value="option2">Option 2</option>
                                        </Form.Select>
                                        <Form.Control.Feedback type="invalid">
                                            Please select a valid option.
                                        </Form.Control.Feedback>
                                    </Form.Group>

                                </Col>

                                <Col md={6}>
                                    <Label htmlFor="mySelect">Tax ID Type
                                        {/* <span style={{ color: 'red' }}>*</span> */}
                                    </Label>
                                    <div style={{ position: 'relative' }}>
                                        <select
                                            id="example-text-input"
                                            placeholder='Select'
                                            value={formValue?.taxType}
                                            name='taxType'
                                            onChange={handleInputChange}
                                            onClick={toggleDropdown}
                                        >
                                            {formSubmitted && taxType === '' && (
                                                <p style={{ color: 'red' }}>Please Enter Valid Details</p>
                                            )}
                                            <option value="option1">Select</option>
                                            <option value="option1">LLP</option>
                                            <option value="option2">TAN</option>
                                            <option value="option3">TIN</option>
                                            <option value="option3">EIN</option>
                                        </select>
                                        <svg
                                            className='svg-dropdown'
                                            style={{

                                                transform: `translateY(-50%) rotate(${isOpen ? '180deg' : '0deg'})`,
                                                transition: 'transform 0.3s ease',
                                                pointerEvents: 'none', // Ensure the SVG doesn't interfere with clicking on the select
                                            }}
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                        > <path d="M12.0007 13.1727L16.9507 8.22266L18.3647 9.63666L12.0007 16.0007L5.63672 9.63666L7.05072 8.22266L12.0007 13.1727Z" fill="#256EB5" />
                                        </svg>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row style={{ marginTop: '20px' }} >
                        <Col md={4}>
                            <div>
                                <p className='text-styles-para'> <strong>2 / 3</strong></p>
                                <h4 class='text-styles-heading'>Address Information</h4>
                                <p className='text-styles-para'>Enter your address information here</p>
                            </div>
                        </Col>
                        <Col md={8}>
                            <Row className="mb-3">
                                <Col md={12}>
                                    <Label htmlFor="example-text-input" className="col-md-12 col-form-label">Address 1</Label>
                                    <Input type="text" placeholder='Enter Address' id="example-text-input" required={true} onChange={(e) => setAddress1(e.currentTarget.value)} />
                                </Col>

                            </Row>
                            <Row className="mb-3">
                                <Col md={12}>
                                    <Label htmlFor="example-text-input" className="col-md-12 col-form-label">Address 2</Label>
                                    <Input type="text" placeholder='Enter Address' id="example-text-input" required={true} onChange={(e) => setAddress2(e.currentTarget.value)} />
                                </Col>
                            </Row>
                            <Row className="mb-3">
                                <Col md={12}>
                                    <Label htmlFor="example-text-input" className="col-md-12 col-form-label">Address 3</Label>
                                    <Input type="text" placeholder='Enter Address' id="example-text-input" required={true} onChange={(e) => setAddress3(e.currentTarget.value)} />

                                </Col>
                            </Row>
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
                                            onClick={toggleDropdown}
                                            value={country}  // Assuming you have a state variable for country
                                            onChange={(e) => setCountry(e.currentTarget.value)}  // Assuming you have a state function for setting country
                                            required={true}
                                        >
                                            <option value="">Select</option>
                                            <option value="option1">Option 1</option>
                                            <option value="option2">Option 2</option>
                                            <option value="option3">Option 3</option>
                                        </select>
                                        {formSubmitted && country === '' && (
                                            <p style={{ color: 'red' }}>Please select a country</p>
                                        )}
                                        <svg
                                            className='svg-dropdown'
                                            style={{
                                                transform: `translateY(-50%) rotate(${isOpen ? '180deg' : '0deg'})`,
                                                transition: 'transform 0.3s ease',
                                                pointerEvents: 'none', // Ensure the SVG doesn't interfere with clicking on the select
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
                                    <Label htmlFor="mySelect">
                                        State <span style={{ color: 'red' }}>*</span>
                                    </Label>
                                    <div style={{ position: 'relative' }}>
                                        <select
                                            id="example-text-input"
                                            onClick={toggleDropdown}
                                            value={state} // Assuming you have state to track the selected value
                                            onChange={(e) => setState(e.currentTarget.value)}
                                            required
                                        >
                                            <option value="option1">Option 1</option>
                                            <option value="option2">Option 2</option>
                                            <option value="option3">Option 3</option>
                                        </select>
                                        <svg
                                            className='svg-dropdown'
                                            style={{
                                                transform: `translateY(-50%) rotate(${isOpen ? '180deg' : '0deg'})`,
                                                transition: 'transform 0.3s ease',
                                                pointerEvents: 'none',
                                            }}
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M12.0007 13.1727L16.9507 8.22266L18.3647 9.63666L12.0007 16.0007L5.63672 9.63666L7.05072 8.22266L12.0007 13.1727Z" fill="#256EB5" />
                                        </svg>
                                    </div>
                                    {formSubmitted && state === 'Select' && (
                                        <p style={{ color: 'red' }}>Please select a state</p>
                                    )}


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
                                            onClick={toggleDropdown}
                                            value={city}  // Assuming you have a state variable for city
                                            onChange={(e) => setCity(e.currentTarget.value)}  // Assuming you have a state function for setting city
                                            required={true}
                                        >
                                            <option value="">Select</option>
                                            <option value="Lucknow">Lucknow</option>
                                            <option value="Kanpur">Kanpur</option>
                                            <option value="Nagpur">Nagpur</option>
                                        </select>
                                        {formSubmitted && city === '' && (
                                            <p style={{ color: 'red' }}>Please select a city</p>
                                        )}
                                        <svg
                                            className='svg-dropdown'
                                            style={{
                                                transform: `translateY(-50%) rotate(${isOpen ? '180deg' : '0deg'})`,
                                                transition: 'transform 0.3s ease',
                                                pointerEvents: 'none', // Ensure the SVG doesn't interfere with clicking on the select
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
                                    <Input type="text" placeholder="Enter Zip Code" id="example-text-input" required={true} onChange={(e) => setZipCode(e.currentTarget.value)} />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row style={{ marginTop: '20px'}}>
                        <Col md={4}>
                            <div>
                                <p className='text-styles-para'> <strong>3 / 3</strong></p>
                                <h4 class='text-styles-heading'>Contact Information</h4>
                                <p className='text-styles-para'>Enter Your Contact Information Here</p>
                            </div>
                        </Col>
                        <Col md={8}>
                            <Row className="mb-4">

                                <Col md={6}>
                                    <Label htmlFor="example-text-input" className="col-md-12 col-form-label">Contact Person</Label>
                                    <Input type="text" placeholder='Enter Contact Person' id="example-text-input" required='true' />

                                </Col>
                                <Col md={6}>
                                    <Label htmlFor="example-text-input" className="col-md-12 col-form-label">Designation</Label>
                                    <Input type="text" placeholder="Enter Designation" id="example-text-input" />

                                </Col>
                            </Row>



                            <Row className="mb-4">

                                <Col md={6}>
                                    <Label htmlFor="example-text-input" className="col-md-12 col-form-label">Email ID</Label>
                                    <Input type="text" placeholder='Enter Email ID' id="example-text-input" required='true' />

                                </Col>
                                <Col md={6}>
                                    <Label htmlFor="example-text-input" className="col-md-12 col-form-label">Mobile Number</Label>
                                    <Input type="text" placeholder="Enter Mobile Number" id="example-text-input" />

                                </Col>
                            </Row>



                            <Row className="mb-4">

                                <Col md={6}>
                                    <Label htmlFor="example-text-input" className="col-md-12 col-form-label">Phone Number 1</Label>
                                    <Input type="text" placeholder='Enter Phone Number' id="example-text-input" required='true' />

                                </Col>
                                <Col md={6}>
                                    <Label htmlFor="example-text-input" className="col-md-12 col-form-label">Phone Number 2</Label>
                                    <Input type="text" placeholder="Enter Phone Number" id="example-text-input" />

                                </Col>
                            </Row>



                            <Row className="mb-4">
                                <Col md={6}>
                                    <Label htmlFor="example-text-input" className="col-md-12 col-form-label">Fax</Label>
                                    <Input type="text" placeholder='Enter Fax' id="example-text-input" required='true' />

                                </Col>
                            </Row>
                        </Col>
                    </Row>

                    {/* </Col> */}
                </Row>
            {/* </AvForm> */}
        </div>
    )
}

export default PersonalDetails