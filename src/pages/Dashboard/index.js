
import React, { useState } from "react";
import { Container, Row, Col, Card, CardBody } from "reactstrap";
import Breadcrumbs from '../../components/Common/Breadcrumb';
import AddClient from './AddClient';
import PersonalDetails from './PersonalDetails';
import RegistrationDetails from './RegistrationDetails';
import Documents from './Documents';
import BankDetails from './BankDetails';
import GridExample from "./PeopleDataTable";

const steps = [
  { id: 1, title: "Client Details", component: AddClient },
  { id: 2, title: "Personal Details", component: PersonalDetails },
  { id: 3, title: "Registration Details", component: RegistrationDetails },
  { id: 4, title: "Documents", component: Documents },
  { id: 5, title: "Bank Details", component: BankDetails },
  { id: 6, title: "Summary", component: GridExample },
];

const componentMap = {
  1: AddClient,
  2: PersonalDetails,
  3: RegistrationDetails,
  4: Documents,
  5: BankDetails,
  6: GridExample,
};

const data = {
  breadcrumbItems: [
    { title: "Product Config", link: "/" },
    { title: "Stakeholder Configuration", link: "#" },
    { title: "Client", link: "/" },
  ],
  reports: [
    { icon: "ri-stack-line", title: "Number of Sales", value: "1452", rate: "2.4%", desc: "From previous period" },
    { icon: "ri-store-2-line", title: "Sales Revenue", value: "$ 38452", rate: "2.4%", desc: "From previous period" },
    { icon: "ri-briefcase-4-line", title: "Average Price", value: "$ 15.4", rate: "2.4%", desc: "From previous period" },
  ]
};

const Dashboard = () => {
  const [activeStep, setActiveStep] = useState(1);

  const onNextPageHandler = () => {
    setActiveStep(activeStep + 1);
  }

  const onCancleHandler = () => {
    setActiveStep(activeStep - 1);
  }

  return (
    <React.Fragment>
      <div className="page-content" style={{paddingTop:'70px'}}>
        <Container fluid>
          <Breadcrumbs title="Client" breadcrumbItems={data} />
          {/* <Row>
              <div className="col col-md-12 add-client-button">
                <div className="row">
                  <div className="col col-md-12 mb-3 d-flex" style={{ justifyContent: 'space-between' }}>
                    <div>
                      <h4 style={{ color: "#002850", fontWeight: 'bolder' }}>{steps[activeStep - 1].title}</h4>
                    </div>
                    <div>
                      <button className="save-button" onClick={onNextPageHandler}>Save</button>
                      <button className="cancel-button" onClick={onCancleHandler}>Cancel</button>
                    </div>
                  </div>
                </div>
                <Card>
                  <CardBody className="card-body">
                    <Row>
                      <Col xs={3}>
                        <Card className='mt-3' style={{ boxShadow: 'none', background: '#f5fbfd', borderRadius: '0', height: '105%' }}>
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
                                    <h6 style={{ color: activeStep === step.id ? "#256EB5" : "#000", fontSize: "13px" }}>{step.title}</h6>
                                    <p className="card-title-desc">{step.id === activeStep ? "Active" : "Optional"}</p>
                                  </div>
                                </div>
                              </Row>
                            ))}
                          </CardBody>
                        </Card>
                      </Col>
                      <Col xs={9}>
                        <div className='mt-3'>
                          {activeStep <= 5 && React.createElement(componentMap[activeStep], { onAddClientHandler: onNextPageHandler })}
                        </div>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </div>
            </Row> */}
          {/*<AddClient />*/}
        </Container>
      </div>
    </React.Fragment>
  );
}

export default Dashboard;
