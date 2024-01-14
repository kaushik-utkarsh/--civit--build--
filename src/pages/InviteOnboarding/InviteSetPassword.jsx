import React, { Component } from 'react';

import { Row, Col, Alert, Container } from "reactstrap";
import "../../App-new.css";
import "../Onboarding/Onboarding.css"

// Redux
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';

// availity-reactstrap-validation
import { AvForm, AvField } from 'availity-reactstrap-validation';

// actions
import { checkLogin, apiError } from '../../store/actions';

// import images
import set_password from "../../assets/images/Frame 1321315181.svg";
import Slider from '../Onboarding/Slider'


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
                            <Col md={7}>
                                <Container fluid className="">
                                    <Slider />
                                </Container>
                            </Col>
                            <Col lg={5}>
                                <div className="authentication-page-content m-5 mt-0 p-5 pb-0 pt-5 d-flex align-items-start">
                                    <div className="w-100">
                                        <Row className="justify-content-center">
                                            <Col lg={12}>
                                                <div>
                                                    <div className="text-center">
                                                        <h2 className="mt-4 justify-content-start heading-bold-cstm">
                                                            Set Password
                                                        </h2>
                                                        <p className="text-muted para-bold-cstm" >
                                                            Set up a strong password to secure your account.
                                                        </p>
                                                    </div>
                                                    {this.props.loginError && this.props.loginError ? <Alert color="danger">{this.props.loginError}</Alert> : null}
                                                    <div className="p-2 mt-3">
                                                        <AvForm className="form-horizontal" onValidSubmit={this.handleSubmit} >
                                                            <AvField
                                                                name="email" // Name attribute should be a string without spaces
                                                                id="example-text-input"
                                                                label={
                                                                    <span>
                                                                        Password <span style={{ color: 'red' }}>*</span>
                                                                    </span>
                                                                }
                                                                value='' // Set the initial value if needed
                                                                type="email" // Use type "email" for email validation
                                                                className="form-control text-muted"
                                                                validate={{ email: true, required: true }}
                                                                placeholder="Enter Password"
                                                            />
                                                            <div className="mt-2 text-center d-flex" style={{ justifyContent: 'space-around' }}>
                                                                {/* <div className=''> */}
                                                                <div>
                                                                    <i className="ri-lock-line"></i>
                                                                </div>
                                                                <div style={{ paddingLeft: '2%' }}>
                                                                    <p style={{ textAlign: 'start' }} className="text-muted" >Password must be at least <span style={{ fontWeight: 'bold' }}>8 characters</span>, <span style={{ fontWeight: 'bold' }}>1 number </span>, <span style={{ fontWeight: 'bold' }}>1 uppercase letter</span>, <span style={{ fontWeight: 'bold' }}>1 lowercase letter</span>, and <span style={{ fontWeight: 'bold' }}>symbol.</span></p>
                                                                </div>
                                                            </div>
                                                            <AvField
                                                                name="Re-enter-Password" // Name attribute should be a string without spaces
                                                                id="example-text-input"
                                                                label={
                                                                    <span>
                                                                        Re-enter Password <span style={{ color: 'red' }}>*</span>
                                                                    </span>
                                                                }
                                                                value='' // Set the initial value if needed
                                                                type="email" // Use type "email" for email validation
                                                                className="form-control text-muted"
                                                                validate={{ email: true, required: true }}
                                                                placeholder="Re-enter Password"
                                                            />
                                                            <div className="mt-4 text-center">
                                                                <button
                                                                    className="w-md waves-effect waves-light save-button-self-onboarding"
                                                                    type="submit"
                                                                >
                                                                    Set Password
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