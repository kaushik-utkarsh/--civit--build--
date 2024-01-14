import React, { Component, useState } from "react";
import { Container, Row, Col, Label, Input, Form } from "reactstrap";
import "../../App-new.css";
//Import Breadcrumb
import Breadcrumbs from '../../components/Common/Breadcrumb';
import AddClient from './AddClient';
import PersonalDetails from './PersonalDetails';
import RegistrationDetails from './RegistrationDetails';
import Documents from './Documents';
import BankDetails from './BankDetails';
import GridExample from "./PeopleDataTable";
import { Card, CardBody } from "reactstrap";
import GreenTick from "../../components/Common/GreenTickSvg";
const Dashboard = () => {
    const data = {
        breadcrumbItems: [
            { title: "Product Config", link: "/" },
            { title: "Stakeholder Configuration", link: "#" },
            { title: "Client", link: "/" },
            { title: "Liberty Tower", link: "/" },
        ],
        reports: [
            { icon: "ri-stack-line", title: "Number of Sales", value: "1452", rate: "2.4%", desc: "From previous period" },
            { icon: "ri-store-2-line", title: "Sales Revenue", value: "$ 38452", rate: "2.4%", desc: "From previous period" },
            { icon: "ri-briefcase-4-line", title: "Average Price", value: "$ 15.4", rate: "2.4%", desc: "From previous period" },
        ]
    }
    // const [isOpen, setIsOpen] = useState(1);
    // const onNextPageHandler = () => {
    //     setIsOpen(isOpen + 1);
    // }
    // const onCancleHandler = () => {
    //     setIsOpen(isOpen - 1);
    // }
    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <Breadcrumbs title="Client" breadcrumbItems={data} />
                    <Row>
                        {/* {isOpen === 1 && <AddClient onAddClientHandler={onNextPageHandler} />} */}
                        <div className="col col-md-12 add-client-button">
                            <div className="row">
                                <div className="col col-md-12 mb-3 d-flex" style={{ justifyContent: 'space-between' }}>
                                    <div>
                                        <h4 style={{ color: "#002850", fontWeight: 'bolder' }}>
                                            Liberty Tower
                                        </h4>
                                    </div>
                                    <div >
                                        <button className="save-button">Customise</button>
                                        {/* <button className="cancel-button" onClick={onCancleHandler}>Cancel</button> */}
                                    </div>
                                </div>

                            </div>

                            {/* start */}
                            <Card style={{ height: '30rem', borderRadius: '0' }}>
                                <CardBody className="card-body">
                                    <Row>
                                        <Col xs={3}>
                                            <Card className='mt-3' style={{ boxShadow: 'none', background: '#f5fbfd', borderRadius: '0', height: '95%' }}>
                                                <CardBody style={{ alignItems: 'start' }} className="cstm-stepper-card">
                                                    <Row style={{ display: 'flex' }}>
                                                        <div style={{ display: 'flex', gap: '20px', alignItems: 'center', }}>
                                                            <GreenTick />
                                                            <div>
                                                                <h6 style={{ color: "#256EB5", fontSize: "16px", marginBottom: '0px' }}>
                                                                    COMPANY DETAILS
                                                                </h6>
                                                            </div>
                                                        </div>
                                                    </Row>
                                                    <Row style={{ display: 'flex' }}>
                                                        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                                                            <GreenTick />
                                                            <div>
                                                                <h6 style={{ color: "#919191", fontSize: "16px", marginBottom: '0px' }}>
                                                                    REGISTRATION DETAILS
                                                                </h6>
                                                            </div>
                                                        </div>
                                                    </Row>
                                                    <Row style={{ display: 'flex' }}>
                                                        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                                                            <GreenTick />
                                                            <div>
                                                                <h6 style={{ color: "#919191", fontSize: "16px", marginBottom: '0px' }}>
                                                                    DOCUMENTS
                                                                </h6>
                                                            </div>
                                                        </div>
                                                    </Row>
                                                    <Row style={{ display: 'flex' }}>
                                                        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                                                            <GreenTick />                                <div>
                                                                <h6 style={{ color: "#919191", fontSize: "16px", marginBottom: '0px' }}>
                                                                    BANK DETAILS
                                                                </h6>
                                                            </div>
                                                        </div>
                                                    </Row>
                                                </CardBody>
                                            </Card>

                                        </Col>
                                        <Col xs={9}>
                                            <div className='mt-3'>
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
                                                                        <Label htmlFor="example-text-input" className="col-md-12 col-form-label">Company Name</Label>
                                                                        <Input type="text" id="example-text-input-view-only" placeholder={("Razor Infotech")} required={true} />
                                                                    </Col>
                                                                    <Col md={6}>

                                                                        <Label htmlFor="example-text-input" className="col-md-12 col-form-label">Tax ID Number </Label>
                                                                        <Input type="text" placeholder="12-3456789" id="example-text-input-view-only" required={true} />
                                                                    </Col>
                                                                </Row>
                                                                <Row className="mb-4">
                                                                    <Col md={6}>
                                                                        <Label htmlFor="example-text-input" className="col-md-12 col-form-label">Company Type</Label>
                                                                        <Input type="text" id="example-text-input-view-only" placeholder={("LLC")} required={true} />
                                                                    </Col>

                                                                    <Col md={6}>
                                                                        <Label htmlFor="example-text-input" className="col-md-12 col-form-label">Tax ID Type</Label>
                                                                        <Input type="text" id="example-text-input-view-only" placeholder={("EIN")} required={true} />
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
                                                                        <Input type="text" placeholder='Gregory Cartwright' id="example-text-input-view-only" required={true} />
                                                                    </Col>

                                                                </Row>
                                                                <Row className="mb-3">
                                                                    <Col md={12}>
                                                                        <Label htmlFor="example-text-input" className="col-md-12 col-form-label">Address 2</Label>
                                                                        <Input type="text" placeholder='936 Kiehn Route' id="example-text-input-view-only" required={true} />
                                                                    </Col>
                                                                </Row>
                                                                <Row className="mb-3">
                                                                    <Col md={12}>
                                                                        <Label htmlFor="example-text-input" className="col-md-12 col-form-label">Address 3</Label>
                                                                        <Input type="text" placeholder='Church Street-43321' id="example-text-input-view-only" required={true} />

                                                                    </Col>
                                                                </Row>
                                                                <Row className="mb-3">
                                                                    <Col md={6}>
                                                                        <Label htmlFor="mySelect">Country </Label>
                                                                        <Input type="text" id="example-text-input-view-only" placeholder={("USA")} required={true} />

                                                                    </Col>
                                                                    <Col md={6}>
                                                                        <Label htmlFor="example-text-input">
                                                                            State
                                                                        </Label>

                                                                        <Input type="text" id="example-text-input-view-only" placeholder={("Texas")} required={true} />


                                                                    </Col>
                                                                </Row>
                                                                <Row className="mb-3">
                                                                    <Col md={6}>
                                                                        <Label htmlFor="mySelect">City </Label>
                                                                        <Input type="text" id="example-text-input-view-only" placeholder={("Houston")} required={true} />
                                                                    </Col>

                                                                    <Col md={6}>
                                                                        <Label htmlFor="example-text-input" className="col-md-12 col-form-label">Zip Code </Label>
                                                                        <Input type="text" placeholder="77001" id="example-text-input-view-only" required={true} />
                                                                    </Col>
                                                                </Row>
                                                            </Col>
                                                        </Row>
                                                        <Row style={{ marginTop: '20px' }}>
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
                                                                        <Input type="text" placeholder='Enter Contact Person' id="example-text-input-view-only" required='true' />
                                                                    </Col>
                                                                    <Col md={6}>
                                                                        <Label htmlFor="example-text-input" className="col-md-12 col-form-label">Designation</Label>
                                                                        <Input type="text" placeholder="Enter Designation" id="example-text-input-view-only" />

                                                                    </Col>
                                                                </Row>
                                                                <Row className="mb-4">

                                                                    <Col md={6}>
                                                                        <Label htmlFor="example-text-input" className="col-md-12 col-form-label">Email ID</Label>
                                                                        <Input type="text" placeholder='Enter Email ID' id="example-text-input-view-only" required='true' />

                                                                    </Col>
                                                                    <Col md={6}>
                                                                        <Label htmlFor="example-text-input" className="col-md-12 col-form-label">Mobile Number</Label>
                                                                        <Input type="text" placeholder="Enter Mobile Number" id="example-text-input-view-only" />

                                                                    </Col>
                                                                </Row>



                                                                <Row className="mb-4">

                                                                    <Col md={6}>
                                                                        <Label htmlFor="example-text-input" className="col-md-12 col-form-label">Phone Number 1</Label>
                                                                        <Input type="text" placeholder='Enter Phone Number' id="example-text-input-view-only" required='true' />

                                                                    </Col>
                                                                    <Col md={6}>
                                                                        <Label htmlFor="example-text-input" className="col-md-12 col-form-label">Phone Number 2</Label>
                                                                        <Input type="text" placeholder="Enter Phone Number" id="example-text-input-view-only" />

                                                                    </Col>
                                                                </Row>



                                                                <Row className="mb-4">
                                                                    <Col md={6}>
                                                                        <Label htmlFor="example-text-input" className="col-md-12 col-form-label">Fax</Label>
                                                                        <Input type="text" placeholder='Enter Fax' id="example-text-input-view-only" required='true' />

                                                                    </Col>
                                                                </Row>
                                                            </Col>
                                                        </Row>

                                                        {/* </Col> */}
                                                    </Row>
                                                    {/* </AvForm> */}
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </CardBody >
                            </Card >
                            {/* end */}

                        </div>
                    </Row>

                </Container>
            </div>
        </React.Fragment>
    );

}

export default Dashboard;



// import React, { Component, useState } from "react";
// import { Container, Row, Col } from "reactstrap";
// import "../../App-new.css";
// //Import Breadcrumb
// import Breadcrumbs from '../../components/Common/Breadcrumb';
// import AddClient from './AddClient';
// import PersonalDetails from './PersonalDetails';
// import RegistrationDetails from './RegistrationDetails';
// import Documents from './Documents';
// import BankDetails from './BankDetails';
// import GridExample from "./PeopleDataTable";
// import { Card, CardBody } from "reactstrap";
// import GreenTick from "../../components/Common/GreenTickSvg";
// const Dashboard = () => {
//     const data = {
//         breadcrumbItems: [
//             { title: "Product Config", link: "/" },
//             { title: "Stakeholder Configuration", link: "#" },
//             { title: "Client", link: "/" },
//         ],
//         reports: [
//             { icon: "ri-stack-line", title: "Number of Sales", value: "1452", rate: "2.4%", desc: "From previous period" },
//             { icon: "ri-store-2-line", title: "Sales Revenue", value: "$ 38452", rate: "2.4%", desc: "From previous period" },
//             { icon: "ri-briefcase-4-line", title: "Average Price", value: "$ 15.4", rate: "2.4%", desc: "From previous period" },
//         ]
//     }
//     // const [isOpen, setIsOpen] = useState(1);
//     // const onNextPageHandler = () => {
//     //     setIsOpen(isOpen + 1);
//     // }
//     // const onCancleHandler = () => {
//     //     setIsOpen(isOpen - 1);
//     // }
//     return (
//         <React.Fragment>
//             <div className="page-content">
//                 <Container fluid>
//                     <Breadcrumbs title="Client" breadcrumbItems={data} />
//                     <Row>
//                         {/* {isOpen === 1 && <AddClient onAddClientHandler={onNextPageHandler} />} */}
//                         <div className="col col-md-12 add-client-button">
//                             <div className="row">
//                                 <div className="col col-md-12 mb-3 d-flex" style={{ justifyContent: 'space-between' }}>
//                                     <div>
//                                         <h4 style={{ color: "#002850", fontWeight: 'bolder' }}>
//                                             Add Client
//                                         </h4>
//                                     </div>
//                                     <div >
//                                         <button className="save-button">Customise</button>
//                                         {/* <button className="cancel-button" onClick={onCancleHandler}>Cancel</button> */}
//                                     </div>
//                                 </div>

//                             </div>

//                             {/* start */}
//                             <Card style={{ height: '30rem' }}>
//                                 <CardBody className="card-body">
//                                     <Row>
//                                         <Col xs={3}>
//                                             <Card className='mt-3' style={{ boxShadow: 'none', background: '#f5fbfd', borderRadius: '0', height: '105%' }}>
//                                                 <CardBody style={{ alignItems: 'start' }}>
//                                                     <Row style={{ display: 'flex', alignItems: 'start' }}>
//                                                         <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
//                                                            <GreenTick/>
//                                                             <div>
//                                                                 <h6 style={{ color: "#256EB5", fontSize: "13px" }}>
//                                                                     CLIENT DETAILS
//                                                                 </h6>
//                                                                 <p className="card-title-desc">Mandatory</p>
//                                                             </div>
//                                                         </div>
//                                                     </Row>
//                                                     <Row style={{ display: 'flex' }}>
//                                                         <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
//                                                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" height="20" width="20"><rect width="256" height="256" fill="none"></rect><circle cx="128" cy="128" r="96" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="16"></circle><path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M105.886,94.65812a24.00387,24.00387,0,1,1,42.01514,22.7605v0L104,176v-.00575h48"></path></svg>
//                                                             <div>
//                                                                 <h6 style={{ color: "#000", fontSize: "13px" }}>
//                                                                     REGISTRATION DETAILS
//                                                                 </h6>
//                                                                 <p className="card-title-desc">Mandatory</p>
//                                                             </div>
//                                                         </div>
//                                                     </Row>
//                                                     <Row style={{ display: 'flex' }}>
//                                                         <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
//                                                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" height="20" width="20"><rect width="256" height="256" fill="none"></rect><circle cx="128" cy="128" r="96" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="16"></circle><path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M103.99683,83.99216h48L124.00317,124a28,28,0,1,1-19.799,47.799"></path></svg>

//                                                             <div>
//                                                                 <h6 style={{ color: "#000", fontSize: "13px" }}>
//                                                                     DOCUMENTS
//                                                                 </h6>
//                                                                 <p className="card-title-desc">Optional</p>
//                                                             </div>
//                                                         </div>
//                                                     </Row>
//                                                     <Row style={{ display: 'flex' }}>
//                                                         <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
//                                                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" height="20" width="20"><rect width="256" height="256" fill="none"></rect><circle cx="128" cy="128" r="96" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="16"></circle><polyline fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" points="123.998 76 100 144 148 144"></polyline><line x1="148" x2="148" y1="112" y2="176" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line></svg>                                <div>
//                                                                 <h6 style={{ color: "#000", fontSize: "13px" }}>
//                                                                     BANK DETAILS
//                                                                 </h6>
//                                                                 <p className="card-title-desc">Optional</p>
//                                                             </div>
//                                                         </div>
//                                                     </Row>
//                                                 </CardBody>
//                                             </Card>

//                                         </Col>
//                                         <Col xs={9}>
//                                             <div className='mt-3'>
//                                                 <PersonalDetails />
//                                             </div>
//                                         </Col>
//                                     </Row>
//                                 </CardBody >
//                             </Card >
//                             {/* end */}

//                         </div>
//                     </Row>

//                 </Container>
//             </div>
//         </React.Fragment>
//     );

// }

// export default Dashboard;