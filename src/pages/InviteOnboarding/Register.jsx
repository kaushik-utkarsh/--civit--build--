import React, { useState, useEffect } from 'react';
import { Row, Col, Alert, Container, Label } from 'reactstrap';
import '../../App-new.css';
import './InviteOnboarding.css';
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";
import { AvForm, AvField } from 'availity-reactstrap-validation';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { checkLogin, apiError } from '../../store/actions';
import createAccount from '../../assets/images/Frame 1321315173.svg';
import Slider from '../Onboarding/Slider'


const Login = ({ loginError, checkLogin, apiError, history }) => {
    const [phone, setPhone] = useState('');

    useEffect(() => {
        apiError('');
        document.body.classList.add('auth-body-bg');

        return () => {
            document.body.classList.remove('auth-body-bg');
        };
    }, [apiError]);

    const handleSubmit = (event, values) => {
        checkLogin(values, history);
    };

    return (
        <React.Fragment>
            <Container fluid className=" p-0 m-0">
                <Row className="">
                    <Col lg={7} style={{width: '57%'}}>
                        <Container fluid className="p-0 m-0">
                            <Slider />
                        </Container>
                    </Col>
                    <Col lg={5}>
                        <div className="authentication-page-content m-5 p-5 pt-0 mt-0 pb-0 d-flex align-items-start">
                            <div className="w-100">
                                <Row className="justify-content-center">
                                    <Col lg={12}>
                                        <div>
                                            <div className="text-center">
                                                <h2 className="mt-4 justify-content-start heading-bold-cstm">
                                                    Registration
                                                </h2>
                                                <p className="text-muted para-bold-cstm" >
                                                    Add info to proceed with registration.
                                                </p>
                                            </div>

                                            {loginError && <Alert color="danger">{loginError}</Alert>}

                                            <div className="p-2 mt-4">
                                                <AvForm
                                                    className="form-horizontal"
                                                    onValidSubmit={handleSubmit}
                                                >
                                                    <Row>

                                                        <AvField
                                                            name="firstName"
                                                            id="example-text-input"
                                                            label={
                                                                <span>
                                                                    First Name <span style={{ color: 'red' }}>*</span>
                                                                </span>
                                                            }
                                                            value=""
                                                            type="text"
                                                            className="form-control"
                                                            validate={{ email: true, required: true }}
                                                            placeholder="Enter First Name"
                                                        />
                                                    </Row>
                                                    <Row>

                                                        <AvField
                                                            name="Last Name"
                                                            id="example-text-input"
                                                            label={
                                                                <span>
                                                                    Last Name <span style={{ color: 'red' }}>*</span>
                                                                </span>
                                                            }
                                                            value=""
                                                            type="email"
                                                            className="form-control"
                                                            validate={{ email: true, required: true }}
                                                            placeholder="Enter Last Name"
                                                        />
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
                                                                type="number"
                                                                className="form-control text-muted"
                                                                validate={{
                                                                    // match: { value: 'password', errorMessage: 'Passwords do not match' },
                                                                    required: { value: true, errorMessage: 'Enter Phone number' }
                                                                }}
                                                                placeholder="Enter Phone number"
                                                            />
                                                        </Col>
                                                    </Row>
                                                    <Row>
                                                        <AvField
                                                            name="Email ID"
                                                            id="example-text-input"
                                                            label={
                                                                <span>
                                                                    Email ID <span style={{ color: 'red' }}>*</span>
                                                                </span>
                                                            }
                                                            value=""
                                                            type="email"
                                                            className="form-control"
                                                            validate={{ email: true, required: true }}
                                                            placeholder="Enter Email ID"
                                                        />
                                                    </Row>
                                                    <Row>

                                                        <AvField
                                                            name="Role"
                                                            id="example-text-input"
                                                            label={
                                                                <span>
                                                                    Role <span style={{ color: 'red' }}>*</span>
                                                                </span>
                                                            }
                                                            value=""
                                                            type="email"
                                                            className="form-control"
                                                            validate={{ email: true, required: true }}
                                                            placeholder="Enter Role"
                                                        />
                                                    </Row>

                                                    <div className="mt-4 text-center">
                                                        <button
                                                            className="w-md waves-effect waves-light save-button-self-onboarding"
                                                            type="submit"
                                                        >
                                                            Register
                                                        </button>
                                                    </div>
                                                </AvForm>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    );
};

const mapStateToProps = (state) => {
    const { loginError } = state.Login;
    return { loginError };
};

export default withRouter(connect(mapStateToProps, { checkLogin, apiError })(Login));
