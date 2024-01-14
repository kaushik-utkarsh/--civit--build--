import React, { Component, useState } from "react";
import { Container, Row, Col, Table, Input, Form } from "reactstrap";
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
                                            <Card className='mt-3' style={{ boxShadow: 'none', background: '#f5fbfd', borderRadius: '0', height: '115%' }}>
                                                <CardBody style={{ alignItems: 'start' }} className="cstm-stepper-card">
                                                    <Row style={{ display: 'flex' }}>
                                                        <div style={{ display: 'flex', gap: '20px', alignItems: 'center', }}>
                                                            <GreenTick />
                                                            <div>
                                                                <h6 style={{ color: "#919191", fontSize: "16px", marginBottom: '0px' }}>
                                                                    COMPANY DETAILS
                                                                </h6>
                                                            </div>
                                                        </div>
                                                    </Row>
                                                    <Row style={{ display: 'flex' }}>
                                                        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                                                            <GreenTick />
                                                            <div>
                                                                <h6 style={{ color: "#256EB5", fontSize: "16px", marginBottom: '0px' }}>
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
                                                {/* <div className='scrollable-container'> */}
                                                {/* <AvForm onValidSubmit={onSubmit} model={formValue}> */}
                                                <Row>
                                                    <Table borderless className="custom-table">
                                                        <thead>
                                                            <tr>
                                                                <th>Sr. No.</th>
                                                                <th>Document Name</th>
                                                                <th>Document Number </th>
                                                                <th>Issued On</th>
                                                                <th>Valid Till</th>
                                                                <th>Upload File</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td style={{paddingTop: '30px'}}><strong>1</strong></td>
                                                                <td>
                                                                    <Input type="text" readOnly placeholder='EIN *' id="example-text-input-view-only-table" required={true} /></td>
                                                                <td> <Input type="text" readOnly placeholder='12-3456789' id="example-text-input-view-only-table" required={true} /></td>
                                                                <td>
                                                                    <Input type="text" readOnly placeholder='05-06-2023' id="example-text-input-view-only-table" />
                                                                </td>
                                                                <td><Input type="text" readOnly placeholder='23-12-2024' id="example-text-input-view-only-table" /></td>
                                                                <td className='upload-section'>
                                                                    <Input type="text" readOnly placeholder='Uploaded' id="example-text-input-view-only-table" required={true} />
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </Table>
                                                </Row>
                                            </div>
                                            {/* </div> */}
                                        </Col>
                                    </Row>
                                </CardBody >
                            </Card >
                        </div>
                    </Row>

                </Container>
            </div>
        </React.Fragment>
    );

}

export default Dashboard;