// import React, { Component, useState } from 'react';
// import { Card, CardBody, Col, Row, Label, Input, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Table, Button } from "reactstrap";
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

import React, { useState } from 'react';
import { Row, Col } from "reactstrap";
import "../../App-new.css";
import 'react-datepicker/dist/react-datepicker.css';
import PersonalDetailForm from "./PersonalDetailForm";

const PersonalDetails = () => {
    return (
        <Row>
            <Col xs={12}>
                <div className='scrollable-container'>
                    <PersonalDetailForm/>
                </div>
            </Col>
        </Row>
    )
}


export default PersonalDetails;
