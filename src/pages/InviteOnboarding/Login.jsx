import React, { useState, useEffect } from 'react';
import { Row, Col, Alert, Container, Label } from 'reactstrap';
import '../../App-new.css';
import './InviteOnboarding.css';
import captcha from "../../assets/images/Frame 1321315262captcha.svg";
import { AvForm, AvField } from 'availity-reactstrap-validation';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { checkLogin, apiError } from '../../store/actions';
import createAccount from '../../assets/images/Frame 1321315173.svg';
// import { AvForm, AvField } from 'availity-reactstrap-validation';
// import { Row, Col, Alert, Container, Label } from 'reactstrap';
import EyeIcon from '../../assets/images/View_hide.svg'
import OR_section from '../../assets/images/Frame 1000003157.svg';
import Slider from '../Onboarding/Slider'

const Login = ({ loginError, checkLogin, apiError, history }) => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [phone, setPhone] = useState('');

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };
    const onNavigateNextWeb=()=>{
        window.location.href = 'http://civit.evalue8.info/';
    }
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
            <Container fluid className="">
                <Row className="">
                    <Col lg={7} style={{width: '57%'}}>
                        <Container fluid className="">
                            <Slider />
                        </Container>
                    </Col>
                    <Col lg={5} className='px-5 mx-2'>
                        <Container>

                            <div className="authentication-page-content d-flex align-items-start mt-2 mx-2">
                                <div className="w-100">
                                    <Row className="justify-content-center">
                                        <Col lg={12}>
                                            <div>
                                                <div className="text-center">
                                                    <h2 className="mt-2 justify-content-start heading-bold-cstm">
                                                        Login
                                                    </h2>
                                                    <p className="text-muted para-bold-cstm" >
                                                        Please enter your login detail to access your account
                                                    </p>
                                                </div>

                                                {loginError && <Alert color="danger">{loginError}</Alert>}

                                                <div className="p-2 mt-3">
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
                                                                        Email ID <span style={{ color: 'red' }}>*</span>
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
                                                            <div className="password-input-container">
                                                                <AvField
                                                                    name="password"
                                                                    type={passwordVisible ? 'text' : 'password'}
                                                                    id="example-text-input"
                                                                    label={
                                                                        <span>
                                                                            Password <span style={{ color: 'red' }}>*</span>
                                                                        </span>
                                                                    }
                                                                    className="form-control"
                                                                    validate={{ required: true }}
                                                                    placeholder="Enter Password"
                                                                />
                                                                <div className="password-toggle-icon" onClick={togglePasswordVisibility}>
                                                                    <img src={EyeIcon} alt="Toggle Password Visibility" />
                                                                </div>
                                                                <div>
                                                                    <p style={{ textAlign: 'end' }} className="text-muted" ><span style={{ color: '#256EB5', fontSize: '14px', fontWeight: '700', cursor: 'pointer' }} onClick={()=>history.push('/reset-pwd')}>  Forgot Password?</span></p>
                                                                </div>
                                                            </div>
                                                        </Row>
                                                        <Row>
                                                            <img src={OR_section} alt="" />
                                                        </Row>
                                                        <Row>
                                                            <div>
                                                                <p style={{ textAlign: 'center' }} className="text-muted mt-3" ><span style={{ color: '#256EB5', fontSize: '14px', fontWeight: '700', cursor: 'pointer' }} onClick={()=>history.push('/verify-email')}>  Login with OTP</span></p>
                                                            </div>
                                                        </Row>
                                                        <Row>

                                                            <div className="mt-3 text-center w-100">
                                                                <img src={captcha} alt="" srcSet="" width='100%' />
                                                            </div>
                                                        </Row>
                                                        <div className="mt-3 text-center">
                                                            <button
                                                                className="w-md waves-effect waves-light save-button-self-onboarding"
                                                                type="submit"
                                                                onClick={onNavigateNextWeb}
                                                            >
                                                                Login
                                                            </button>
                                                        </div>
                                                        <div className="mt-2 text-center">

                                                            <p className="text-muted" style={{ textAlign: 'end' }}>Not Registered?   <span style={{ color: '#256EB5', fontSize: '14px', fontWeight: '700', cursor: 'pointer' }} onClick={()=>history.push('/invite-register')}>  Create an Account</span></p>
                                                        </div>
                                                    </AvForm>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </Container>
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
