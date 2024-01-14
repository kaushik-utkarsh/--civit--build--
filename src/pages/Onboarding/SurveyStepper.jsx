import React, { useState } from 'react'
import "./Onboarding.css"
import end_survvey from '../../assets/images/Groupsurvey.svg'
import StepperTick from '../../components/Common/StepperTick';
import { Input, Label, Row, Col } from "reactstrap";
const SurveyStepper = () => {

    const [activeStep, setActiveStep] = useState(1)
    const [open, setOpen] = useState(false)
    const handleOnclick = (e) => {
        setOpen(true)
    }


    const getButtonColor1 = () => {
        if (activeStep === 1) {
            return '#256EB5';
        } else {
            return '#10B970';
        }
    };
    const getButtonColor2 = () => {
        if (activeStep === 2) {
            return '#256EB5';
        } else if (activeStep < 2) {
            return '#7C7D7E';
        } else {
            return '#10B970';
        }
    };
    const getButtonColor3 = () => {
        if (activeStep === 3) {
            return '#256EB5';
        } else if (activeStep < 3) {
            return '#7C7D7E';
        } else {
            return '#10B970';
        }
    };
    const getButtonColor4 = () => {
        if (activeStep === 4) {
            return '#256EB5';
        } else if (activeStep < 4) {
            return '#7C7D7E';
        } else {
            return '#10B970';
        }
    };
    const getButtonColor5 = () => {
        if (activeStep === 5) {
            return '#256EB5';
        } else if (activeStep < 5) {
            return '#7C7D7E';
        } else {
            return '#10B970';
        }
    };
    const getButtonColor6 = () => {
        if (activeStep === 5) {
            return '#256EB5';
        } else if (activeStep < 5) {
            return '#7C7D7E';
        } else {
            return '#10B970';
        }
    };
    return (

        <div className='container-fluid'>
            {/*stepper button start*/}
            {/* <div className='container-stepper pt-5'> */}

            <div className='container-fluid p-0 m-0 row justify-content-center  pt-5'>
                {/* step 1 btn */}
                <div className='col col-lg-2 text-center p-0'>
                    <div className='text-center p-r'>

                        <button className="stepperBtn" style={{ border: `2px solid ${getButtonColor1()}`, backgroundColor: `${activeStep > 1 ? "#10B970" : "#FFFFFF"}` }} onClick={() => setActiveStep(1)}> {activeStep > 1 ? <StepperTick w={17} h={16} /> : 1} </button>
                        <div className='stepper-after' style={{ backgroundColor: `${getButtonColor1()}` }}></div>
                    </div>
                    {/* <p className={`pt-3 ${activeStep === 1 ? "heading-600-16 stepper-active" : "heading-400-16"}  op-60 v-center`}>PERSONAL DETAILS</p> */}
                </div>

                {/* step 2 btn */}
                <div className='col col-lg-3 text-center p-0'>
                    <div className='text-center p-r'>
                        <div className='stepper-before' style={{ backgroundColor: `${activeStep >= 2 ? "#10B970" : "#7C7D7E"}` }}></div>
                        <button className="stepperBtn" style={{ border: `2px solid ${getButtonColor2()}`, backgroundColor: `${activeStep > 2 ? "#10B970" : "#FFFFFF"}` }} onClick={() => setActiveStep(2)}> {activeStep > 2 ? <StepperTick w={17} h={16} /> : 2}</button>
                        <div className='stepper-after' style={{ backgroundColor: `${getButtonColor2()}` }}></div>
                    </div>
                    {/* <p className={`pt-3 ${activeStep === 2 ? "heading-600-16 stepper-active" : "heading-400-16"}  op-60 v-center`}>COMPANY DETAILS</p> */}
                </div>


                {/* step 3 btn*/}
                <div className='col col-lg-2 text-center p-0'>
                    <div className='text-center p-r'>
                        <div className='stepper-before' style={{ backgroundColor: `${activeStep >= 3 ? "#10B970" : "#7C7D7E"}` }}></div>
                        <button className="stepperBtn" style={{ border: `2px solid ${getButtonColor3()}`, backgroundColor: `${activeStep > 3 ? "#10B970" : "#FFFFFF"}` }} onClick={() => setActiveStep(4)}> {activeStep > 3 ? <StepperTick w={17} h={16} /> : 3}</button>
                        {/* <div className='stepper-after' style={{ backgroundColor: `${getButtonColor3()}` }}></div> */}
                    </div>
                    {/* <p className={`pt-3 ${activeStep === 3 ? "heading-600-16 stepper-active" : "heading-400-16"}  op-60 v-center`}>CHOOSE PLAN</p> */}
                </div>

            </div>
            {/* </div> */}
            {/*stepper button end*/}

            {activeStep === 1 &&
                <div className='container-stepper my-5 py-5 bg-white text-center'>
                    <h1 className='heading-700-24 gray-color1'>Survey Questions</h1>
                    <p className=' heading-400-14 gray-color2 w-522 h-center pb-5'></p>

                    <div className='container-636 border-gray'>
                        {/*header*/}
                        <div className='container-fluid m-0 row plan-header bg-header border-bottom-gray'>
                            <div className='col col-lg-12 text-start heading-500-16'>What market sector do you cater to?</div>
                            <div className='col col-lg-12 text-start product-congif-item-para pb-0 pt-2 '>Select all that apply.</div>
                        </div>
                        {/*pricing*/}
                        <div className='container-fluid m-0 row plan-header '>
                            <div className='col col-lg-12 text-start heading-400-14'>
                                <Input type="checkbox" className="form-check-input text-muted" id="customControlInline" style={{}} />
                                Commercial
                            </div>
                        </div>
                        <div className='container-fluid m-0 row plan-header '>
                            <div className='col col-lg-12 text-start heading-400-14'>
                                <Input type="checkbox" className="form-check-input text-muted" id="customControlInline" style={{}} />
                                Health Care
                            </div>
                        </div>
                        <div className='container-fluid m-0 row plan-header '>
                            <div className='col col-lg-12 text-start heading-400-14'>
                                <Input type="checkbox" className="form-check-input text-muted" id="customControlInline" style={{}} />
                                Industrial & Energy
                            </div>
                        </div>
                        <div className='container-fluid m-0 row plan-header '>
                            <div className='col col-lg-12 text-start heading-400-14'>
                                <Input type="checkbox" className="form-check-input text-muted" id="customControlInline" style={{}} />
                                Infrastructure
                            </div>
                        </div>
                        <div className='container-fluid m-0 row plan-header '>
                            <div className='col col-lg-12 text-start heading-400-14'>
                                <Input type="checkbox" className="form-check-input text-muted" id="customControlInline" style={{}} />
                                Institutional
                            </div>
                        </div>
                        <div className='container-fluid m-0 row plan-header '>
                            <div className='col col-lg-12 text-start heading-400-14'>
                                <Input type="checkbox" className="form-check-input text-muted" id="customControlInline" style={{}} />
                                Residential
                            </div>
                        </div>
                    </div>
                    <div className="m-4 pt-4 mb-0 pb-0 text-center">
                        <button className="w-md waves-effect waves-light save-button-onboarding heading-700-15" type="submit">Next</button>
                    </div>
                </div>
            }


            {activeStep === 2 &&
                <div className='container-stepper my-5 py-5 bg-white text-center'>
                    <h1 className='heading-700-24 gray-color1'>Survey Questions</h1>
                    <p className=' heading-400-14 gray-color2 w-522 h-center pb-5'></p>

                    <div className='container-636 border-gray'>
                        {/*header*/}
                        <div className='container-fluid m-0 row plan-header bg-header border-bottom-gray'>
                            <div className='col col-lg-12 text-start heading-500-16'>What are your specialty trades and aservies?</div>
                            <div className='col col-lg-12 text-start product-congif-item-para pb-0 pt-2 '>Select all that apply.</div>
                        </div>
                        {/*pricing*/}
                        <div className='scrollable-container-onboarding'>


                            <div className='container-fluid m-0 row plan-header '>
                                <div className='col col-lg-12 text-start heading-400-14'>
                                    <Input type="checkbox" className="form-check-input text-muted" id="customControlInline" style={{}} />
                                    Communication
                                </div>
                            </div>
                            <div className='container-fluid m-0 row plan-header '>
                                <div className='col col-lg-12 text-start heading-400-14'>
                                    <Input type="checkbox" className="form-check-input text-muted" id="customControlInline" style={{}} />
                                    Concrete
                                </div>
                            </div>
                            <div className='container-fluid m-0 row plan-header '>
                                <div className='col col-lg-12 text-start heading-400-14'>
                                    <Input type="checkbox" className="form-check-input text-muted" id="customControlInline" style={{}} />
                                    Demolition
                                </div>
                            </div>
                            <div className='container-fluid m-0 row plan-header '>
                                <div className='col col-lg-12 text-start heading-400-14'>
                                    <Input type="checkbox" className="form-check-input text-muted" id="customControlInline" style={{}} />
                                    Earthwork
                                </div>
                            </div>
                            <div className='container-fluid m-0 row plan-header '>
                                <div className='col col-lg-12 text-start heading-400-14'>
                                    <Input type="checkbox" className="form-check-input text-muted" id="customControlInline" style={{}} />
                                    Electrical
                                </div>
                            </div>
                            <div className='container-fluid m-0 row plan-header '>
                                <div className='col col-lg-12 text-start heading-400-14'>
                                    <Input type="checkbox" className="form-check-input text-muted" id="customControlInline" style={{}} />
                                    Fire Suppresion
                                </div>
                            </div>
                            <div className='container-fluid m-0 row plan-header '>
                                <div className='col col-lg-12 text-start heading-400-14'>
                                    <Input type="checkbox" className="form-check-input text-muted" id="customControlInline" style={{}} />
                                    Landscaping
                                </div>
                            </div>
                            <div className='container-fluid m-0 row plan-header '>
                                <div className='col col-lg-12 text-start heading-400-14'>
                                    <Input type="checkbox" className="form-check-input text-muted" id="customControlInline" style={{}} />
                                    Health Care
                                </div>
                            </div>
                            <div className='container-fluid m-0 row plan-header '>
                                <div className='col col-lg-12 text-start heading-400-14'>
                                    <Input type="checkbox" className="form-check-input text-muted" id="customControlInline" style={{}} />
                                    Industrial & Energy
                                </div>
                            </div>
                            <div className='container-fluid m-0 row plan-header '>
                                <div className='col col-lg-12 text-start heading-400-14'>
                                    <Input type="checkbox" className="form-check-input text-muted" id="customControlInline" style={{}} />
                                    Infrastructure
                                </div>
                            </div>
                            <div className='container-fluid m-0 row plan-header '>
                                <div className='col col-lg-12 text-start heading-400-14'>
                                    <Input type="checkbox" className="form-check-input text-muted" id="customControlInline" style={{}} />
                                    Institutional
                                </div>
                            </div>
                            <div className='container-fluid m-0 row plan-header '>
                                <div className='col col-lg-12 text-start heading-400-14'>
                                    <Input type="checkbox" className="form-check-input text-muted" id="customControlInline" style={{}} />
                                    Residential
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="m-4 pt-4 mb-0 pb-0 text-center">
                        <button className="w-md waves-effect waves-light save-button-onboarding heading-700-15" type="submit">Next</button>
                    </div>
                </div>
            }
            {activeStep === 4 &&
                <div className='container-stepper my-5 py-5 px-5 bg-white' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <div>
                        <img src={end_survvey} alt="end_survvey" />
                    </div>
                    <div className='p-3'>
                        <h4> <strong>10-Day Free Trial Unlocked!</strong></h4>
                        <p>
                        Thank you.Your valuable insights will help us shape our product better.
                        </p>
                        <div className="col col-md-12 mb-3" >
                            <Row>
                                <Col md={12}>
                                    <div>
                                        <button className="bank-save-button">Extend Free Trial</button>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </div>
            }
        </div>

    )
}

export default SurveyStepper