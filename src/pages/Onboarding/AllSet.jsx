//'Let's Begin! Your account set-up is complete. Congratulations!'

import React, { useState } from 'react'
import "./Onboarding.css"
import all_set from "../../assets/images/Group.svg";
const Stepper = () => {
    return (

        <div className='container-fluid'>
            <div className='container-stepper pt-5'>

                <div className='container-fluid p-0 m-0 row'>

                    {/* <Row> */}
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        {/* <Loading /> */}
                        <div>
                            <img src={all_set} style={{ width: 397, height: 296 }} alt="Customer" />
                        </div>
                        <div style={{ marginLeft: '20px' }}>
                            <h4><strong>Congratulations!</strong></h4>
                            <p>Your account set-up is complete.</p>
                            <button className='add-client-page'
                            // onClick={handleButtonClick}
                            >
                                Let's Begin!
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default Stepper