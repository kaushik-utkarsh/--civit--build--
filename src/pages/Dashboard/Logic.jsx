import React, {useState } from 'react';
import { Card, CardBody, Col, Row } from "reactstrap";
// import "../Add-client/AddClient.css";
// import 'react-datepicker/dist/react-datepicker.css';

// // import { useState } from 'react';
// // import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import Modal from 'react-bootstrap/Modal';

// import GridExample from "./PeopleDataTable";

// import PersonalDetailForm from "./PersonalDetailForm";

// import RegistrationDetails from './RegistrationDetails';
// import customer from '../../assets/images/customer-relationship-management-rafiki.png'
// import dragAndDrop from '../../assets/images/rafiki.svg'
// import addBank from '../../assets/images/rafiki2.svg'
// import delete_svg from '../../assets/images/rafikidelete_svg.svg'
// import upload from '../../assets/images/upload.svg'

// // import React, { useState } from "react";
// import { Tabs, Tab } from "react-bootstrap";
// import AddClient from './AddClient';

// const PersonalDetails = () => {

//     const [isOpen, setIsOpen] = useState(1);
//     const onNextPageHandler = () => {
//         setIsOpen(isOpen + 1);
//     }
//     const onCancleHandler = () => {
//         setIsOpen(isOpen - 1);
//     }



//     return (
//         <Row>
//             {/* <Col xs={3}>
//                         <Card className='mt-3' style={{ boxShadow: 'none', background: '#f5fbfd', borderRadius: '0' }}>
//                             <CardBody style={{ alignItems: 'start' }}>
//                                 <Row style={{ display: 'flex', alignItems: 'start' }}>
//                                     <div style={{ display: 'flex', gap: '20px' }}>
//                                         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" height="20" width="20"><rect width="256" height="256" fill="none"></rect>
//                                             <circle cx="128" cy="128" r="96" fill="none" stroke="#256EB5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="20"></circle>
//                                             <polyline points="108 100 132 84 132 176" fill="none" stroke="#256EB5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="15"></polyline>
//                                         </svg>
//                                         <div>
//                                             <h6 style={{ color: "#256EB5", fontSize: "13px" }}>
//                                                 CLIENT DETAILS
//                                             </h6>
//                                             <p className="card-title-desc">Mandatory</p>
//                                         </div>
//                                     </div>
//                                 </Row>
//                                 <Row style={{ display: 'flex' }}>
//                                     <div style={{ display: 'flex', gap: '20px' }}>
//                                         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" height="20" width="20"><rect width="256" height="256" fill="none"></rect><circle cx="128" cy="128" r="96" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="16"></circle><path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M105.886,94.65812a24.00387,24.00387,0,1,1,42.01514,22.7605v0L104,176v-.00575h48"></path></svg>
//                                         <div>
//                                             <h6 style={{ color: "#000", fontSize: "13px" }}>
//                                                 REGISTRATION DETAILS
//                                             </h6>
//                                             <p className="card-title-desc">Mandatory</p>
//                                         </div>
//                                     </div>
//                                 </Row>
//                                 <Row style={{ display: 'flex' }}>
//                                     <div style={{ display: 'flex', gap: '20px' }}>
//                                         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" height="20" width="20"><rect width="256" height="256" fill="none"></rect><circle cx="128" cy="128" r="96" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="16"></circle><path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M103.99683,83.99216h48L124.00317,124a28,28,0,1,1-19.799,47.799"></path></svg>

//                                         <div>
//                                             <h6 style={{ color: "#000", fontSize: "13px" }}>
//                                                 DOCUMENTS
//                                             </h6>
//                                             <p className="card-title-desc">Optional</p>
//                                         </div>
//                                     </div>
//                                 </Row>
//                                 <Row style={{ display: 'flex' }}>
//                                     <div style={{ display: 'flex', gap: '20px' }}>
//                                         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" height="20" width="20"><rect width="256" height="256" fill="none"></rect><circle cx="128" cy="128" r="96" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="16"></circle><polyline fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" points="123.998 76 100 144 148 144"></polyline><line x1="148" x2="148" y1="112" y2="176" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line></svg>                                <div>
//                                             <h6 style={{ color: "#000", fontSize: "13px" }}>
//                                                 BANK DETAILS
//                                             </h6>
//                                             <p className="card-title-desc">Optional</p>
//                                         </div>
//                                     </div>
//                                 </Row>
//                             </CardBody>
//                         </Card>

//                     </Col> */}
//             <Col xs={12}  className='internal-scroll'>
//                 <PersonalDetailForm/>
//             </Col>
//         </Row>
//     )
// }

// export default PersonalDetails


// import { Row, Col } from "reactstrap";
import "../../App-new.css";
import 'react-datepicker/dist/react-datepicker.css';
import PersonalDetails from './PersonalDetailForm';
import RegistrationDetails from './RegistrationDetails';
import Documents from './Documents';
import BankDetails from './BankDetails';
import GridExample from "./PeopleDataTable";
import AddClient from "./AddClient";

const LogicForMovement = () => {
    const [formValue, setFormValue] = useState({
        name: "",
        taxId: "",
        companyType: "",
        taxType: "",
    });
    const [unfilledFields, setUnfilledFields] = useState([]);

    // const handleInputChange = (event) => {
    //     const { name, value } = event.target;
    //     setFormValue((prevProps) => ({
    //         ...prevProps,
    //         [name]: value
    //     }));
    //     console.log("parentValue==>>",value);
    // };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        const isFilled = value.trim() !== ''; // Check if the field is filled
        setFormValue((prev) => ({
            ...prev,
            [name]: value,
            [`${name}Filled`]: isFilled, // Track whether the field is filled
        }));
    };


    const [activeStep, setActiveStep] = useState(1);
    const [check, setCheck] = useState(false)
    const [formError, setFormError] = useState(false);
    const [validationStatus, setValidationStatus] = useState({
        personalDetails: false,
        registrationDetails: false,
        // Add more fields as needed
    });
    // const steps = [
    //     { id: 1, title: "COMPANY DETAILS", component: PersonalDetails },
    //     { id: 2, title: "REGISTRATION DETAILS", component: RegistrationDetails },
    //     { id: 3, title: "UPDATED FILE LIST", component: UpdatedFileList },
    //     { id: 4, title: "UPLOAD DOCUMENTS", component: Documents },
    //     { id: 5, title: "BANK DETAILS", component: BankDetails },
    //     { id: 6, title: "SUMMARY", component: GridExample },
    // ];
    const steps = [
        { id: 1, title: "Add Client Details", component: PersonalDetails, mandatory: true },
        { id: 2, title: "REGISTRATION DETAILS", component: RegistrationDetails, mandatory: true },
        { id: 3, title: "UPLOAD DOCUMENTS", component: Documents, mandatory: false },
        { id: 4, title: "BANK DETAILS", component: BankDetails, mandatory: false },
        { id: 5, title: "LIST VIEW", component: GridExample, mandatory: false },
    ];
    const [saveButtonClicked, setSaveButtonClicked] = useState(false);
    const onChilderHandler = (isValid) => {
        // Handle the boolean value received from PersonalDetails
        if (isValid) {
            setCheck(true);
            console.log('PersonalDetails form is valid');
            // Add any other logic you want to execute when the form is valid
        } else {
            setCheck(false);
            console.log('PersonalDetails form is not valid');
            // Add any other logic you want to execute when the form is not valid
        }

        // Set validation status for "Personal Details" and "Registration Details"
        setValidationStatus((prevStatus) => ({
            ...prevStatus,
            personalDetails: isValid,
            registrationDetails: isValid, // Update with the actual condition for registration details
            // Add more fields as needed
        }));

        // Return the boolean value if needed for further processing
        return isValid;
    };

    const onNextPageHandler = async () => {
        const requiredFields = ['companyName', 'taxNumber', 'companyType', 'taxType', 'country', 'city', 'state', 'zipCode'];

        // Check if all required fields are filled
        var unfilledFields = requiredFields.filter((field) => formValue[field] === '');

        if (unfilledFields.length > 0) {
            console.log('Not all fields are filled');
            setUnfilledFields(unfilledFields);
            console.log(unfilledFields);
            // You can also set an error state to indicate the form submission error
        } else {
            setUnfilledFields([]); // Reset unfilledFields if all fields are filled
            setActiveStep(activeStep + 1);
        }
        setSaveButtonClicked(true);
    };

    const onCancleHandler = () => {
        setActiveStep(activeStep - 1);
    };

    const renderComponent = (stepId, onParentFun) => {
        const step = steps.find(step => step.id === stepId);
        if (step) {
            const Component = step.component;

            // Check if the component is PersonalDetails and provide the required prop
            if (Component === PersonalDetails) {
                return <Component onparentFun={onChilderHandler} formValue={formValue} handleInputChange={(e) => handleInputChange(e)} setUnfilledFields={setUnfilledFields} />;
            } else {
                return <Component />;
            }
        }
        return null;
    };


    return (
        <Row>
            {activeStep === -1 && <AddClient />}
            <div className="col col-md-12 add-client-button">
                <div className="row">
                    <div className="col col-md-12 mb-3 d-flex" style={{ justifyContent: 'space-between' }}>
                        <div>
                            <h4 style={{ color: "#002850", fontWeight: 'bolder' }}>{steps[activeStep - 1].title}</h4>
                        </div>
                        <div className='d-flex gap-2'>
                        <button className="cancel-button" onClick={() => onCancleHandler()}>Cancel</button>
                            <button className="save-button" onClick={() => onNextPageHandler()}>Save</button>
                       
                        </div>
                    </div>
                </div>

                <Card style={{ height: '73vh', borderRadius: '0' }}>
                    <CardBody className="card-body mb-4" >
                        <Row className='h-100'>
                            {activeStep !== 5 && activeStep !== -1 && (
                                <>
                                    <Col xs={3}>
                                        <Card className='mt-3' style={{ boxShadow: 'none', background: '#f5fbfd', borderRadius: '0',height:"60%" }}>
                                            <CardBody style={{ alignItems: 'start' }}>
                                                {steps.map((step) => (
                                                    <Row style={{ display: 'flex', alignItems: 'start' }} key={step.id}>
                                                        <div style={{ display: 'flex', gap: '20px', cursor: 'pointer' }} onClick={() => setActiveStep(step.id)}>
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" height="20" width="20">
                                                                <rect width="256" height="256" fill="none"></rect>
                                                                <circle cx="128" cy="128" r="96" fill="none" stroke="#256EB5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="20"></circle>
                                                                {step.id < 6 && <polyline points="108 100 132 84 132 176" fill="none" stroke={activeStep === step.id ? "#256EB5" : "#000"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="15"></polyline>}
                                                            </svg>
                                                            <div>
                                                                <h6 style={{ color: activeStep === step.id ? "#256EB5" : "#000", fontSize: "13px" }}>{step?.title}</h6>
                                                                <p className="card-title-desc" style={{ color: (unfilledFields.length > 0 || (step.mandatory && !validationStatus[step.component.name])) && saveButtonClicked ? "red" : "black" }}>
                                                                    {step.mandatory ? "Mandatory" : "Optional"}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </Row>
                                                ))}
                                            </CardBody>
                                        </Card>
                                    </Col>
                                    <Col xs={9}>
                                        <div className='mt-3 h-100' >
                                            {activeStep <= 4 && renderComponent(activeStep, onChilderHandler)}
                                        </div>
                                    </Col>
                                </>
                            )}
                            {activeStep === 5 && renderComponent(activeStep, onChilderHandler)}
                        </Row>
                    </CardBody>
                </Card>


            </div>
        </Row>
    )
}


export default LogicForMovement;
