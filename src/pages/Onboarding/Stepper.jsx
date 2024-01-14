import React, { useState } from 'react'
import "./Onboarding.css"
// import GreenTick from '../../assets/images/Component 65green-correct.svg'
import GreenTick from '../../components/Common/GreenTickSvg';
import PersonalDetailsOnboard from './PersonalDetailsOnboard';
import CompanyDetailsOnboard from './CompanyDetailsOnboard';
import InviteUsers from './InviteUsers'
import all_set from "../../assets/images/Group.svg";
import PaymentDetails from './PaymentDetails';
import StepperTick from '../../components/Common/StepperTick';
const Stepper = () => {

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
      <div className='pt-5'>

        <div className='container-fluid p-0 m-0 row'>
          {/* step 1 btn */}
          <div className='col col-lg-2 text-center p-0'>
            <div className='text-center p-r'>

              <button className="stepperBtn" style={{ border: `2px solid ${getButtonColor1()}`, backgroundColor: `${activeStep > 1 ? "#10B970" : "#FFFFFF"}` }} onClick={() => setActiveStep(1)}> {activeStep > 1 ? <StepperTick w={17} h={16}/> : 1} </button>
              <div className='stepper-after' style={{ backgroundColor: `${getButtonColor1()}` }}></div>
            </div>
            <p className={`pt-3 ${activeStep === 1 ? "heading-600-16 stepper-active" : "heading-400-16"}  op-60 v-center`}>PERSONAL DETAILS</p>
          </div>

          {/* step 2 btn */}
          <div className='col col-lg-3 text-center p-0'>
            <div className='text-center p-r'>
              <div className='stepper-before' style={{ backgroundColor: `${activeStep >= 2 ? "#10B970" : "#7C7D7E"}` }}></div>
              <button className="stepperBtn" style={{ border: `2px solid ${getButtonColor2()}`, backgroundColor: `${activeStep > 2 ? "#10B970" : "#FFFFFF"}` }} onClick={() => setActiveStep(2)}> {activeStep > 2 ? <StepperTick w={17} h={16}/> : 2}</button>
              <div className='stepper-after' style={{ backgroundColor: `${getButtonColor2()}` }}></div>
            </div>
            <p className={`pt-3 ${activeStep === 2 ? "heading-600-16 stepper-active" : "heading-400-16"}  op-60 v-center`}>COMPANY DETAILS</p>
          </div>


          {/* step 3 btn*/}
          <div className='col col-lg-2 text-center p-0'>
            <div className='text-center p-r'>
              <div className='stepper-before' style={{ backgroundColor: `${activeStep >= 3 ? "#10B970" : "#7C7D7E"}` }}></div>
              <button className="stepperBtn" style={{ border: `2px solid ${getButtonColor3()}`, backgroundColor: `${activeStep > 3 ? "#10B970" : "#FFFFFF"}` }} onClick={() => setActiveStep(3)}> {activeStep > 3 ? <StepperTick w={17} h={16}/> : 3}</button>
              <div className='stepper-after' style={{ backgroundColor: `${getButtonColor3()}` }}></div>
            </div>
            <p className={`pt-3 ${activeStep === 3 ? "heading-600-16 stepper-active" : "heading-400-16"}  op-60 v-center`}>CHOOSE PLAN</p>
          </div>


          {/* step 4 btn*/}
          <div className='col col-lg-3 text-center p-0'>
            <div className='text-center p-r'>
              <div className='stepper-before' style={{ backgroundColor: `${activeStep >= 4 ? "#10B970" : "#7C7D7E"}` }}></div>
              <button className="stepperBtn" style={{ border: `2px solid ${getButtonColor4()}`, backgroundColor: `${activeStep > 4 ? "#10B970" : "#FFFFFF"}` }} onClick={() => setActiveStep(4)}> {activeStep > 4 ?<StepperTick w={17} h={16}/> : 4}</button>
              <div className='stepper-after' style={{ backgroundColor: `${getButtonColor4()}` }}></div>
            </div>
            <p className={`pt-3 ${activeStep === 4 ? "heading-600-16 stepper-active" : "heading-400-16"}  op-60 v-center`}>PAYMENT DETAILS</p>
          </div>

          {/* step 5 btn*/}
          <div className='col col-lg-2 text-center p-0'>
            <div className='text-center p-r'>
              <div className='stepper-before' style={{ backgroundColor: `${activeStep >= 5 ? "#10B970" : "#7C7D7E"}` }}></div>
              <button className="stepperBtn" style={{ border: `2px solid ${getButtonColor5()} ` }} onClick={() => setActiveStep(5)}> {activeStep > 5 ? <StepperTick w={17} h={16}/> : 5}</button>

            </div>
            <p className={`pt-3 ${activeStep === 5 ? "heading-600-16 stepper-active" : "heading-400-16"}  op-60 v-center`}>INVITE USERS</p>
          </div>

        </div>
      </div>
      {/*stepper button end*/}

      {activeStep === 1 && <PersonalDetailsOnboard />}


      {activeStep === 2 && <CompanyDetailsOnboard />}
      {activeStep === 3 && <div className='container-stepper my-5 py-5 bg-white text-center'>
        <h1 className='heading-700-24 gray-color1'>Choose your plan</h1>
        <p className=' heading-400-14 gray-color2 w-522 h-center pb-5'>We offer a variety of flexible plans that you can choose from based on your requirement</p>

        <div className='container-1028 border-gray'>
          {/*header*/}
          <div className='container-fluid m-0 row plan-header bg-header border-bottom-gray'>
            <div className='col col-lg-3 text-start heading-600-16'>Types</div>
            <div className='col col-lg-2 heading-600-16'>Trial Plan</div>
            <div className='col col-lg-2 heading-600-16'>Single Module</div>
            <div className='col col-lg-2 heading-600-16'><div className='blue-col'>Flexible Plan</div><div className='blue-col-top'><div className='popular'><p className='heading-600-12 m-0'>Popular</p></div></div></div>

            <div className='col col-lg-2 heading-600-16'>Build Suite</div>
          </div>
          {/*pricing*/}
          <div className='container-fluid m-0 row plan-header '>
            <div className='col col-lg-3 text-start heading-600-16'>Pricing</div>
            <div className='col col-lg-2 heading-600-24'>Free</div>
            <div className='col col-lg-2 heading-600-24'>$199<span className='heading-400-12'>/month</span></div>
            <div className='col col-lg-2 heading-600-24'><div className='blue-col'>$99<span className='heading-400-12'>/month</span></div></div>
            <div className='col col-lg-2 heading-600-24'>$79<span className='heading-400-12'>/month</span></div>
          </div>

          <div className='container-fluid m-0 row plan-header '>
            <div className='col col-lg-3 text-start heading-600-16'></div>
            <div className='col col-lg-2 heading-400-14 gray-color2'>Free for 30 days </div>
            <div className='col col-lg-2 heading-400-14 gray-color2'>Billed Annually</div>
            <div className='col col-lg-2 heading-400-14 gray-color2'><div className='blue-col'>Billed Annually</div></div>
            <div className='col col-lg-2 heading-400-14 gray-color2'>Billed Annually</div>
          </div>

          <div className='container-fluid m-0 row plan-header '>
            <div className='col col-lg-3 text-start heading-600-16'></div>
            <div className='col col-lg-2'><button className='btn-outline'>Get started</button></div>
            <div className='col col-lg-2'><button className='btn-outline'>Get started</button></div>
            <div className='col col-lg-2 '><div className='blue-col'><button className='btn-popular'>Get started</button></div></div>
            <div className='col col-lg-2'><button className='btn-outline'>Get started</button></div>
          </div>

          <div className='container-fluid m-0 row plan-header '>
            <div className='col col-lg-3 text-start heading-600-16'>Features</div>
            <div className='col col-lg-2 heading-600-14 c-blue'></div>
            <div className='col col-lg-2 heading-600-14 c-blue'></div>
            <div className='col col-lg-2 heading-600-14 c-blue'><div className='blue-col'></div></div>
            <div className='col col-lg-2 heading-600-14 c-blue'></div>
          </div>

          <div className='container-fluid m-0 row plan-header '>
            <div className='col col-lg-3 text-start heading-600-16 gray-color2'>Modules</div>
            <div className='col col-lg-2 heading-600-14 c-blue'>All</div>
            <div className='col col-lg-2 heading-600-14 c-blue'>1 Module</div>
            <div className='col col-lg-2 heading-600-14 c-blue'> <div className='blue-col'>Flexible Plans</div></div>
            <div className='col col-lg-2 heading-600-14 c-blue'>All Modules</div>
          </div>

          <div className='container-fluid m-0 row plan-header '>
            <div className='col col-lg-3 text-start heading-600-16 gray-color2'>Unlimited team members</div>
            <div className='col col-lg-2'><GreenTick /></div>
            <div className='col col-lg-2'><GreenTick /></div>
            <div className='col col-lg-2'> <div className='blue-col'><GreenTick /></div></div>
            <div className='col col-lg-2'><GreenTick /></div>
          </div>

          <div className='container-fluid m-0 row plan-header '>
            <div className='col col-lg-3 text-start heading-600-16 gray-color2'>Unlimited Projects</div>
            <div className='col col-lg-2'><GreenTick /></div>
            <div className='col col-lg-2'><GreenTick /></div>
            <div className='col col-lg-2'><div className='blue-col'><GreenTick /></div></div>
            <div className='col col-lg-2'><GreenTick /></div>
          </div>

          <div className='container-fluid m-0 row plan-header '>
            <div className='col col-lg-3 text-start heading-600-16 gray-color2'>Unlimited Projects</div>
            <div className='col col-lg-2'>-</div>
            <div className='col col-lg-2'>-</div>
            <div className='col col-lg-2'><div className='blue-col'><GreenTick /></div></div>
            <div className='col col-lg-2'><GreenTick /></div>
          </div>

          <div className='container-fluid m-0 row plan-header '>
            <div className='col col-lg-3 text-start heading-600-16 gray-color2'>Unlimited Projects</div>
            <div className='col col-lg-2'>-</div>
            <div className='col col-lg-2'>-</div>
            <div className='col col-lg-2 '><div className='blue-col'>-</div><div className='blue-col-bottom'></div></div>
            <div className='col col-lg-2'><GreenTick /></div>
          </div>

        </div>
      </div>}

      {activeStep === 4 && <PaymentDetails />}

      {activeStep === 5 && <InviteUsers />}
      {activeStep === 6 && <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div>
          <img src={all_set} style={{ width: 397, height: 296 }} alt="Customer" />
        </div>
        <div style={{ marginLeft: '20px' }}>
          <h4><strong>Congratulations!</strong></h4>
          <p>Your account set-up is complete.</p>
          <button className='add-client-page'
          >
            Let's Begin!
          </button>
        </div>
      </div>}

    </div>

  )
}

export default Stepper