import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import { checkLogin, apiError } from '../../store/actions';
import "../../App-new.css";
import "./Onboarding.css";
import OtpInput from 'react-otp-input';
// import { Container } from "reactstrap";
import logodark from "../../assets/images/logo-dark.png";
import logolight from "../../assets/images/logo-light.png";
// import createAccount from "../../assets/images/Frame 1321315174.svg";
import createAccount from "../../assets/images/demo.avif";
import { Row, Col, Button, Alert, Container, Label } from "reactstrap";

const Login = ({ history }) => {
    const dispatch = useDispatch();
    const loginError = useSelector(state => state.Login.loginError);
    const [otp, setOtp] = useState('');
    const [errorMessage, setErrorMessage] = useState(false);
    useEffect(() => {
        dispatch(apiError(""));
        document.body.classList.add("auth-body-bg");

        return () => {
            document.body.classList.remove("auth-body-bg");
        };
    }, [dispatch]);

    const handleSubmit = (event, values) => {
        dispatch(checkLogin(values, history));
    };

    const onVerifyHandler = () => {
        if (otp !== 1234) {
            setErrorMessage(true)
        }
    }
    return (
        <React.Fragment>
            <div>
                <Container fluid className="p-0">
                    <Row className="g-0">
                        <Col lg={7}>
                            <div style={{ width: '100%' }}>
                                <img
                                    src={createAccount}
                                    alt=""
                                    srcSet=""
                                    style={{ width: '100%' }}
                                />
                            </div>
                        </Col>
                        <Col lg={5}>
                            <div className="authentication-page-content p-4 d-flex align-items-center min-vh-100">
                                <div className="w-100">
                                    <Row className="justify-content-center">
                                        <Col lg={9}>
                                            {/* <div> */}
                                            <div className="text-center">

                                                <h2 className="font-size-25 mt-4 justify-content-start heading-bold-cstm p-0" >Verify your Email</h2>
                                                <p className="text-muted mt-4" style={{ textAlign: 'start' }}>We have sent a 4-digit OTP to <b style={{ color: 'black' }}>johnsmith29@gmail.com</b></p>
                                            </div>


                                            {/* {this.props.loginError && this.props.loginError ? <Alert color="danger">{this.props.loginError}</Alert> : null} */}

                                            <div className="p-2 mt-5">
                                                {/* <AvForm className="form-horizontal" onValidSubmit={this.handleSubmit} > */}
                                                {/* <OtpInput className='otp-page'
                                                        value={otp}
                                                        onChange={setOtp}
                                                        numInputs={4}
                                                        renderSeparator={<span>-</span>}
                                                        renderInput={(props) => <input {...props} />}
                                                    /> */}
                                                <div className='hello'>
                                                    <Label className="col-md-12 col-form-label text-muted">Enter OTP <span style={{ color: 'red' }}>*</span></Label>
                                                    <OtpInput className="justify-content-space-between"
                                                        value={otp}
                                                        onChange={setOtp}
                                                        numInputs={4}
                                                        // separator={<span style={{ width: "25px" }}></span>}
                                                        isInputNum={true}
                                                        shouldAutoFocus={true}
                                                        renderSeparator={<span style={{ width: "15px" }}>  </span>}
                                                        renderInput={(props) => <input {...props} />}
                                                        inputStyle={{
                                                            border: "1px solid",
                                                            borderRadius: "0",
                                                            width: "80px",
                                                            height: "48px",
                                                            fontSize: "18px",
                                                            borderColor: `${errorMessage ? "error-message" : "#E0E0E0"}`,
                                                            fontWeight: "400",

                                                        }}
                                                        focusStyle={{
                                                            border: "1px solid #CFD3DB",
                                                            outline: "none"
                                                        }}

                                                    />
                                                </div>
                                                <div className="mt-4 text-center d-flex" style={{ justifyContent: 'space-between' }}>
                                                    {/* <div className=''> */}
                                                    <div>
                                                        <p > <b>00:30 </b>
                                                        </p>
                                                    </div>
                                                    <div>
                                                        <p style={{ textAlign: 'end' }} className="text-muted" >Didn’t receive an OTP?<span style={{ color: '#256EB5', fontSize: '16px', fontWeight: 'bolder',cursor: 'pointer' }}>  Resend OTP</span></p>
                                                    </div>
                                                </div>
                                                <div className="mt-4 text-center">
                                                    <button className="w-md waves-effect waves-light save-button-onboarding-initial mb-3" type="submit" onClick={onVerifyHandler}>Verify</button>
                                                    <button className="w-md waves-effect waves-light second-button-onboarding" type="submit">Cancel</button>
                                                </div>
                                                {/* <div className="mt-4 text-center">

                                                    <p className="text-muted" style={{ textAlign: 'end' }}>Already a user?<span style={{ color: '#256EB5', fontSize: '16px', fontWeight: 'bolder' }}>  Login</span></p>
                                                </div> */}
                                                {/* </AvForm> */}
                                            </div>
                                            {/* </div> */}

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
};

export default withRouter(Login);
