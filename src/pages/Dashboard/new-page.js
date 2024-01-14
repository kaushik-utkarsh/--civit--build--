// import React, { Component, useState } from 'react';
// import { Card, CardBody, Col, Row, Label, Input, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Table, Button } from "reactstrap";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import "../Add-client/AddClient.css";

// import Container from 'react-bootstrap/Container';
// import Search_Bar from "../../helpers/search_helper";
// import { Link } from "react-router-dom";

// //Import Images
// import img1 from "../../assets/images/companies/img-1.png";
// import img2 from "../../assets/images/companies/img-2.png";
// import img3 from "../../assets/images/companies/img-3.png";

// import { SpakChart1, SpakChart2, SpakChart3 } from './Charts'


// import customer from '../../assets/images/customer-relationship-management-rafiki.png'

// // import React, { useState } from "react";
// import { Tabs, Tab } from "react-bootstrap";

// // const UserConfiguration = () => {
// //   const [key, setKey] = useState("organization");

// //   const handleSelect = (selectedKey) => {
// //     setKey(selectedKey);
// //   };

// //   return (
// //     <div className="user-configuration">

// //   );
// // };

// // export default UserConfiguration;

// const Sources = () => {
//     const [isOpen, setIsOpen] = useState(false);
//     const [name, setName] = useState('');
//     const [PanNumber, setPanNumber] = useState('');
//     const [TanHolderType, setTanHolderType] = useState('');
//     const [County, setCountry] = useState('');
//     const [City, setCity] = useState('');
//     const [formSubmitted, setFormSubmitted] = useState(false);
//     const toggleDropdown = () => {
//         setIsOpen(!isOpen);
//     };
//     const handleButtonClick = () => {
//         // Mark the form as submitted
//         setFormSubmitted(true);

//         // Check if mandatory fields are filled
//         if (name === '' || PanNumber === '' || TanHolderType === '' || County === '' || City === '') {
//             // You can show an error message or take other actions
//             console.log('Mandatory fields are not filled');
//         } else {
//             // Process the form or perform other actions
//             console.log('Form submitted successfully');
//         }
//     };

//     return (
//         // <React.Fragment>
//         <>
//             <div className="col col-md-12 add-client-button">
//                 <div className="row">
//                     <div className="col col-md-6 mb-3">
//                         <h3>Add Client</h3>
//                     </div>
//                     <div className="col col-md-6 mb-3">
//                         <button className="save-button" onClick={handleButtonClick}>Save</button>
//                         <button className="cancel-button">Cancel</button>
//                     </div>
//                 </div>
//             </div>
//             <Card style={{ padding: '5rem' }}>
//                 <CardBody>
//                     <div>
//                         <Row >
//                             <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//                                 {/* <Col md={6}> */}
//                                 <div>

//                                     <img src={customer} style={{ width: 397, height: 296, }}></img>
//                                 </div>
//                                 {/* </Col> */}
//                                 {/* <Col md={6}> */}
//                                 <div>

//                                     <h7> <strong> No Clients added yet!</strong></h7>
//                                     <p>
//                                         Start adding clients as per you requirement.
//                                     </p>
//                                     <button style={{
//                                         backgroundColor: "#256EB5",
//                                         color: '#fff',
//                                         border: '2px solid',
//                                         padding: '5px 31px',
//                                         cursor: 'pointer',
//                                         borderColor: '#256EB5'

//                                     }} onClick={handleButtonClick}>Add Client</button>
//                                 </div>
//                                 {/* </Col> */}

//                             </div>
//                         </Row>
//                     </div>
//                 </CardBody >
//             </Card >

//         </>
//         // </React.Fragment >
//     );

// }

// export default Sources;