import React, { useState, useEffect } from 'react';
import { Row, Col, Alert, Container, Label, Input } from 'reactstrap';
import '../../App-new.css';
import './Onboarding.css';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { checkLogin, apiError } from '../../store/actions';
import { AvForm, AvField } from 'availity-reactstrap-validation';
// import { AvForm, AvField } from 'availity-reactstrap-validation';
// import { Row, Col, Alert, Container, Label } from 'reactstrap';
import payment_types from '../../assets/images/Group 1000004611.svg';
import line from '../../assets/images/Line 114.svg';
import PrivacyPolicy from './PrivacyPolicy'
import OR_section from '../../assets/images/Frame 1000003157.svg';
import payPal from '../../assets/images/ic_baseline-apple.svg';


const PaymentDetails = () => {
    const [show2, setShow2] = useState(false);

    const handleShow2 = () => {
        setShow2(true);
    };

    const handleClose2 = () => {
        setShow2(false);
    };

    return (
        <React.Fragment>
            <div className='container-stepper'>
                <div className="d-flex justify-content-center align-items-center">
                    <div className="col-12 col-md-12 col-lg-12">
                        <div className='container-stepper my-5 p-5 bg-white text-center'>
                            <Col lg={12}>
                                <div className="authentication-page-content d-flex">
                                    <div className="w-100">
                                        <Row className="justify-content-center">
                                            <Col lg={12}>
                                                <div>
                                                    <div className="text-center">
                                                        <h2 className="font-size-25 mt-4 heading-bold-stepper">Add Payment Details</h2>
                                                        <p className="text-muted" style={{ textAlign: 'center' }}>Add your payment details to upgrade plans easily.</p>
                                                        <img src={payment_types} alt="" />
                                                    </div>
                                                    <div className="p-2 mt-5 d-flex">
                                                        <Col md={4}>
                                                            <Container fluid className='summary'>
                                                                <div className='col heading-600-18'><div ><div className='trial' style={{ marginLeft: '5%' }}><p className='heading-600-12 m-0'>30 Days Free Trial</p></div></div></div>

                                                                <div className='px-4 mb-4'>
                                                                    <h4 style={{ textAlign: 'justify' }}>
                                                                        Summary
                                                                    </h4>
                                                                    <div className="d-flex justify-content-between mt-3">
                                                                        <p className="text-muted">Plan</p>
                                                                        <p className='summary-answer'>Single Module</p>

                                                                    </div>
                                                                    <div className="d-flex justify-content-between">
                                                                        <p className="text-muted">Price</p>
                                                                        <p className='summary-answer'>$79 / month</p>

                                                                    </div>
                                                                    <div className="d-flex justify-content-between">
                                                                        <p className="text-muted">No. of users</p>
                                                                        <p className='summary-answer'>Unlimited</p>

                                                                    </div>
                                                                    <div className="d-flex justify-content-between">
                                                                        <p className="text-muted">No. of Projects</p>
                                                                        <p className='summary-answer'>Unlimited</p>

                                                                    </div>
                                                                    <div>
                                                                        <img src={line} alt="" />
                                                                    </div>
                                                                    <div className="d-flex justify-content-between">
                                                                        <p className="text-muted heading-600-14">Total per year</p>
                                                                        <p className='summary-answer'>$948.00</p>
                                                                    </div>
                                                                    <div className="d-flex justify-content-between  muted">
                                                                        <p className="text-muted">Billed Annually after 30 days*</p>
                                                                    </div>
                                                                </div>
                                                            </Container>
                                                            <div>
                                                                <p className="text-muted" style={{ textAlign: 'start' }}>
                                                                    By providing card information, You allow CivitBUILD to save your card details for future payments.
                                                                    You will not be billed for the free trial.{' '}
                                                                    <span
                                                                        style={{ fontWeight: '600', color: '#256EB5', cursor: 'pointer' }}
                                                                        onClick={handleShow2}
                                                                    >
                                                                        Privacy Policy
                                                                    </span>{' '}
                                                                    and{' '}
                                                                    <span style={{ fontWeight: '600', color: '#256EB5' }}>Terms of use</span>.
                                                                </p>
                                                                <PrivacyPolicy show2={show2} handleClose2={handleClose2} />
                                                            </div>
                                                        </Col>
                                                        <Col md={8}>
                                                            <Container fluid>
                                                                <AvForm className="form-horizontal" >
                                                                    <div className='px-4' style={{ textAlign: "start" }}>
                                                                        <AvField
                                                                            name="Card Holder Name"
                                                                            id="example-text-input"
                                                                            label={
                                                                                <span>
                                                                                    Card Holder Name <span style={{ color: 'red' }}>*</span>
                                                                                </span>
                                                                            }
                                                                            // value={firstName}
                                                                            // onChange={handleFirstNameChange}
                                                                            type="text"
                                                                            className="form-control text-muted"
                                                                            validate={{
                                                                                minLength: { value: 1, errorMessage: 'Enter Card Holder Name' },
                                                                                required: { value: true, errorMessage: 'Enter Card Holder Name' }
                                                                            }}
                                                                            placeholder="Enter Card Holder Name"
                                                                        />
                                                                        <AvField
                                                                            name="Card Number "
                                                                            id="example-text-input"
                                                                            label={
                                                                                <span>
                                                                                    Card Number  <span style={{ color: 'red' }}>*</span>
                                                                                </span>
                                                                            }
                                                                            // value={firstName}
                                                                            // onChange={handleFirstNameChange}
                                                                            type="text"
                                                                            className="form-control text-muted"
                                                                            validate={{
                                                                                minLength: { value: 1, errorMessage: 'Enter Card Number ' },
                                                                                required: { value: true, errorMessage: 'Enter Card Number ' }
                                                                            }}
                                                                            placeholder="Enter Card Number "
                                                                        />
                                                                        <Row>
                                                                            <Col md={6}>
                                                                                <AvField
                                                                                    name="Expiry"
                                                                                    id="example-text-input"
                                                                                    label={
                                                                                        <span>
                                                                                            Expiry <span style={{ color: 'red' }}>*</span>
                                                                                        </span>
                                                                                    }
                                                                                    // value={firstName}
                                                                                    // onChange={handleFirstNameChange}
                                                                                    type="text"
                                                                                    className="form-control text-muted"
                                                                                    validate={{
                                                                                        minLength: { value: 1, errorMessage: 'Enter Expiry' },
                                                                                        required: { value: true, errorMessage: 'Enter Expiry' }
                                                                                    }}
                                                                                    placeholder="Enter Expiry"
                                                                                />
                                                                            </Col>
                                                                            <Col md={6}>
                                                                                <AvField
                                                                                    name="CVV"
                                                                                    id="example-text-input"
                                                                                    label={
                                                                                        <span>
                                                                                            CVV <span style={{ color: 'red' }}>*</span>
                                                                                        </span>
                                                                                    }
                                                                                    // value={firstName}
                                                                                    // onChange={handleFirstNameChange}
                                                                                    type="text"
                                                                                    className="form-control text-muted"
                                                                                    validate={{
                                                                                        minLength: { value: 1, errorMessage: 'Enter CVV' },
                                                                                        required: { value: true, errorMessage: 'Enter CVV' }
                                                                                    }}
                                                                                    placeholder="Enter CVV"
                                                                                />
                                                                            </Col>
                                                                        </Row>
                                                                        <div class="justify-content-center row m-3">
                                                                            <img src={OR_section} alt="" style={{ width: "75%" }} />
                                                                        </div>
                                                                        <Row className='justify-content-center m-5'>
                                                                            <img src={payPal} alt="" style={{ width: "50%" }} />
                                                                        </Row>

                                                                        <div className="mt-4 text-center d-flex" style={{ justifyContent: 'space-around' }}></div>
                                                                    </div>
                                                                    <div className="mt-4 text-center d-flex" style={{ justifyContent: 'space-around' }}></div>
                                                                </AvForm>
                                                            </Container>
                                                        </Col>

                                                    </div>
                                                    <div className="mt-4 text-center">
                                                        <button className="w-lg waves-effect waves-light save-button-onboarding save-button-onboarding-stepper" type="submit">Continue</button>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                </div>
                            </Col>

                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default PaymentDetails
