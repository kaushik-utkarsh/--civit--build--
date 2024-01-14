import React, { useState } from 'react';
import { Card, CardBody, Row, Label, Container } from "reactstrap";
import { Col, Alert } from "reactstrap";
import 'react-datepicker/dist/react-datepicker.css';
import "../../App-new.css";
import "./Onboarding.css"
import { AvForm, AvField } from 'availity-reactstrap-validation';
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";

const PersonalDetailsOnboard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [phone, setPhone] = useState("");

  const handleSubmit = (event, values) => {
    // Handle form submission here
    console.log(values); // Values from the form
  };

  return (
    <div className=''>
      <div className="d-flex justify-content-center align-items-center">
        <div className="col-12 col-md-12 col-lg-12">
          <Container fluid className="p-5 container-stepper">
            <Card className='self-onboarding-card'>
              <CardBody className='d-flex justify-content-center'>
                <Col lg={12}>
                  <div className="authentication-page-content d-flex">
                    <div className="w-100">
                      <Row className="justify-content-center">
                        <Col lg={12}>
                          <div>
                            <div className="text-center">
                              <h2 className="font-size-25 heading-bold-stepper" >Add Your Personal Details</h2>
                              <p className="text-muted" style={{ textAlign: 'center' }}>Add your information to set up the account.</p>
                            </div>
                            <div className="p-2">
                              <AvForm className="form-horizontal" onValidSubmit={handleSubmit}>
                                <AvField
                                  name="First Name"
                                  id="example-text-input"
                                  label={
                                    <span>
                                      First Name <span style={{ color: 'red' }}>*</span>
                                    </span>
                                  }
                                  value=''
                                  type="text"
                                  className="form-control text-muted"
                                  validate={{
                                    minLength: { value: 1, errorMessage: 'Enter First Name' },
                                    // pattern: {
                                    //   value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/,
                                    //   errorMessage: 'Password must include 1 number, 1 uppercase letter, 1 lowercase letter, and 1 symbol'
                                    // },
                                    required: { value: true, errorMessage: 'Enter First Name' }
                                  }}
                                  placeholder="Enter First Name"
                                />
                                <div className="mt-4 text-center d-flex" style={{ justifyContent: 'space-around' }}>
                                </div>
                                <AvField
                                  name="Last Name"
                                  id="example-text-input"
                                  label={
                                    <span>
                                      Last Name <span style={{ color: 'red' }}>*</span>
                                    </span>
                                  }
                                  value=''
                                  type="text"
                                  className="form-control text-muted"
                                  validate={{
                                    minLength: { value: 1, errorMessage: 'Enter Last Name' },
                                    // pattern: {
                                    //   value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/,
                                    //   errorMessage: 'Password must include 1 number, 1 uppercase letter, 1 lowercase letter, and 1 symbol'
                                    // },
                                    required: { value: true, errorMessage: 'Enter Last Name' }
                                  }}
                                  placeholder="Enter Last Name"
                                />
                                <Row>
                                  <Col md={6}>
                                    <AvField
                                      name="reEnterPassword"
                                      id="example-text-input"
                                      label={
                                        <span>
                                          Designation <span style={{ color: 'red' }}>*</span>
                                        </span>
                                      }
                                      value=''
                                      type="text"
                                      className="form-control text-muted"
                                      validate={{
                                        // match: { value: 'password', errorMessage: 'Passwords do not match' },
                                        required: { value: true, errorMessage: 'Enter Designation' }
                                      }}
                                      placeholder="Enter Designation"
                                    />
                                  </Col>
                                  <Col md={6}>
                                    <AvField
                                      name="reEnterPassword"
                                      id="example-text-input"
                                      label={
                                        <span>
                                          Experience (in Years) <span style={{ color: 'red' }}>*</span>
                                        </span>
                                      }
                                      value=''
                                      type="text"
                                      className="form-control text-muted"
                                      validate={{
                                        // match: { value: 'password', errorMessage: 'Passwords do not match' },
                                        required: { value: true, errorMessage: 'Enter Experience' }
                                      }}
                                      placeholder="Enter Experience"
                                    />
                                  </Col>
                                </Row>
                                <Row>
                                  <Label htmlFor="example-text-input" className="col-md-12 col-form-label">Phone Number <span style={{ color: 'red' }}>*</span></Label>
                                  <Col md={3} className="country-select">
                                    <PhoneInput
                                      id="example-text-input"
                                      country={"eg"}
                                      enableSearch={true}
                                      value={phone}
                                      onChange={(phone) => setPhone(phone)}
                                    />
                                  </Col>
                                  <Col md={9}>

                                    <AvField
                                      name="reEnterPassword"
                                      id="example-text-input"
                                      value=''
                                      type="password"
                                      className="form-control text-muted"
                                      validate={{
                                        // match: { value: 'password', errorMessage: 'Passwords do not match' },
                                        required: { value: true, errorMessage: 'Enter Phone number' }
                                      }}
                                      placeholder="Enter Phone number"
                                    />
                                  </Col>
                                </Row>

                                <div className="mt-4 text-center">
                                  <button className="w-md waves-effect waves-light save-button-onboarding" type="submit">Continue</button>
                                </div>
                              </AvForm>
                            </div>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </div>
                </Col>
              </CardBody>
            </Card>
          </Container>
        </div>
      </div>
    </div>
  );
}

export default PersonalDetailsOnboard;
