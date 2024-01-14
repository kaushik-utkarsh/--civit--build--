import React, { Component } from 'react';

import { Row, Col, Input, Button, Card, CardBody, Alert, Container, Label } from "reactstrap";
import "../../App-new.css";
import "./Onboarding.css";
// Redux
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';

// availity-reactstrap-validation
import { AvForm, AvField } from 'availity-reactstrap-validation';

// actions
import { checkLogin, apiError } from '../../store/actions';
import createAccount from "../../assets/images/wp7366012.jpg";
import ic_baseline_appleapple from "../../assets/images/ic_baseline-appleapple.svg";
import ic_baseline_applegoogle from "../../assets/images/ic_baseline-applegoogle.svg";
import ic_baseline_applemicrosoft from "../../assets/images/ic_baseline-applemicrosoft.svg";
import captcha from "../../assets/images/Frame 1321315262captcha.svg";
import Slider from './Slider'

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = { username: "admin@TROOLOGY.in", password: "123456" }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event, values) {
        this.props.checkLogin(values, this.props.history);
    }

    componentDidMount() {
        this.props.apiError("");
        document.body.classList.add("auth-body-bg");
    }

    componentWillUnmount() {
        document.body.classList.remove("auth-body-bg");
    }

    render() {

        return (
            <React.Fragment>
                <div>
                    <Container fluid className="">
                        <Row className="">
                            <Col lg={7} className='p-0'>
                                <Container fluid className="">
                                    <Slider />
                                </Container>
                            </Col>
                            <Col lg={5}>
                                <div className="authentication-page-content d-flex align-items-center min-vh-100 w-100">
                                    <div className="w-100 p-5">
                                        <Row className="justify-content-center">
                                            <Col lg={12}>
                                                <div>
                                                    <div className="text-center">
                                                        {/* <div>
                                                            <Link to="/" class="">
                                                                <img src={logodark} alt="" height="20" class="auth-logo logo-dark mx-auto" />
                                                                <img src={logolight} alt="" height="20" class="auth-logo logo-light mx-auto" />
                                                            </Link>
                                                        </div> */}

                                                        <h2 className="p-0 font-size-24 mt-4 justify-content-start heading-bold-cstm" >Create your Account</h2>
                                                        <p className="text-muted" style={{ textAlign: 'start' }}>Sign up to start using CivitBUILD today.</p>
                                                    </div>
                                                    {this.props.loginError && this.props.loginError ? <Alert color="danger">{this.props.loginError}</Alert> : null}
                                                    <div className="p-0 mt-3">
                                                        <AvForm className="form-horizontal" onValidSubmit={this.handleSubmit} >
                                                            {/* <div className="auth-form-group-custom mb-4"> */}
                                                            {/* <i className="ri-user-2-line auti-custom-input-icon"></i> */}
                                                            {/* <Label htmlFor="email">Email ID</Label> */}
                                                            <AvField
                                                                name="email" // Name attribute should be a string without spaces
                                                                id="example-text-input"
                                                                label={
                                                                    <span>
                                                                        Email ID <span style={{ color: 'red' }}>*</span>
                                                                    </span>
                                                                }
                                                                value='' // Set the initial value if needed
                                                                type="email" // Use type "email" for email validation
                                                                className="form-control"
                                                                validate={{ email: true, required: true }}
                                                                placeholder="Enter Email ID"
                                                            />
                                                            {/* </div> */}
                                                            {/* <div className="auth-form-group-custom mb-4">
                                                                <i className="ri-lock-2-line auti-custom-input-icon"></i>
                                                                <Label htmlFor="userpassword">Password</Label>
                                                                <AvField name="password" value={this.state.password} type="password" className="form-control" id="userpassword" placeholder="Enter password" />
                                                            </div> */}

                                                            <div className="form-check">
                                                                <Input type="checkbox" className="form-check-input text-muted" id="customControlInline" style={{ marginRight: '3%' }} />
                                                                <Label className="form-check-label gray-color3 pl-5" htmlFor="customControlInline">I've read & agreed to CivitBUILD Terms & Conditions.</Label>
                                                            </div>
                                                            <div className="mt-4 text-center">
                                                                <p className="text-muted" style={{ textAlign: 'start' }}>Or login with Social Media</p>
                                                            </div>
                                                            <div className="mt-4 text-center" style={{ display: 'flex' }}>
                                                                <div style={{ width: '100%' }}>
                                                                    <img src={ic_baseline_appleapple} alt="" srcSet="" style={{ marginRight: '10px', }} />
                                                                </div>
                                                                <div style={{ width: '100%' }}>
                                                                    <img src={ic_baseline_applegoogle} alt="" srcSet="" style={{ marginRight: '10px', }} />
                                                                </div>
                                                                <div style={{ width: '95%' }}>
                                                                    <img src={ic_baseline_applemicrosoft} alt="" srcSet="" style={{}} />
                                                                </div>
                                                            </div>
                                                            <div className="mt-4 text-center w-100">
                                                                <img src={captcha} alt="" srcSet="" />
                                                                {/* <reCAPTCHA /> */}

                                                            </div>
                                                            <div className="mt-4 text-center">
                                                                <button className="w-md waves-effect waves-light save-button-onboarding-initial" type="submit">Create Account</button>
                                                            </div>
                                                            <div className="mt-4 text-center">

                                                                <p className="text-muted" style={{ textAlign: 'end' }}>Already a user?<span style={{ color: '#256EB5', fontSize: '16px', fontWeight: 'bolder', cursor: 'pointer' }}>  Login</span></p>
                                                            </div>
                                                            {/* <div className="mt-4 text-center">
                                                                <Link to="/forgot-password" className="text-muted"><i className="mdi mdi-lock me-1"></i> Forgot your password?</Link>
                                                            </div> */}
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
                </div>
            </React.Fragment>
        );
    }
}

const mapStatetoProps = state => {
    const { loginError } = state.Login;
    return { loginError };
}

export default withRouter(connect(mapStatetoProps, { checkLogin, apiError })(Login));