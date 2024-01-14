import React, { useState } from 'react';
import { Button } from "reactstrap";
import "../../App-new.css";
import 'react-datepicker/dist/react-datepicker.css';
import Modal from 'react-bootstrap/Modal';
import { Row, Col } from 'react-bootstrap';

import delete_svg from '../../assets/images/rafikidelete_svg.svg'

const PrivacyPolicy = ({ show2, handleClose2 }) => {

    const [isOpen, setIsOpen] = useState(false);

    // const [show2, setShow2] = useState(false);
    // const handleClose2 = () => setShow2(false);

    const privacyPolicy = `This Privacy policy is a statement towards the privacy policy norms followed in regards to any and all data / information collected / used / disclosed / transferred by SoftTech Engineers Limited (Hereinafter “We”/ “Us” / “Our”) in regards to any and all websites, application / and associated links in regards to “CivitBUILD” (Hereinafter “Services”).

This is a summary of our privacy policy, which shall come into effect from 1st December 2021. We value the privacy of our Users / Subscribers (Hereinafter “Users” “You” “Your”) and this policy showcases our commitment to providing you with the requisite details in regards to your data and/or information that is collected, used, disclosed, transferred, retained and/or stored in any manner from any actions / requirements on part of Us for the working / functioning of the Services.

This Privacy policy is published in adherence / accordance / as per Rule 4 of the Information Technology (Reasonable security practices and procedures and sensitive personal data or information) Rules, 2011 and Rule 3(1) of the Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021 that require the publishing of Terms of service, privacy policies and any other rules and regulations as required on part of the User.

This policy is a part of the Terms of Use and terms used in both documents by and large mean and define the same unless specifically described differently. Furthermore this policy shall be reviewed, modified, changed and other such additions / deletions as deemed necessary by Us and /or as mandated under law. We shall make sure that the latest copy of this policy is made available to You as and when we make the requisite changes. You are also advised to go through the policy periodically so as to stay informed of any and all changes that might take place in regards to your data / information

PART I – What information do we collect and how do we collect it
We are extremely mindful of the data / information that is collected from our Users. We collect only that data / information that is deemed to be required / necessary for the best and proper functioning of the Services for the Users. We collect such data / information from the details as filled in by the User on accessing our services and as shared during the continuity of the term of such Services. Furthermore, we also collect data / information from your web browser such as cookies, log information and more of the same to which You grant Us access to.
Throughout the term of the use of the Services by the User, We shall collect data / information that you consent to being collected either through interaction with the Services and / or third party sources which are recognised and agreed to by the User.
PART II – What we do with the information collected and whom do we disclose it to
The data / information that is collected from the User is used to better Our Services and make the same as helpful to the User as possible. The data / information as shared by our Users is used right from creating the account of the User in order to Access our Services to curating and maintaining the working of the Services as per your specific requirements. The data / information so shared by Users is collected after they consent to the same and / or sanctioned by law.
Should the User not wish to share certain data / information with Us in regards to the Services, they are free to do so and are in no manner compelled to share any data / information. However, it must be understood that withholding data / information recognised as essential will impact the working of the Services and furthermore restrict / hamper it for the continuation of the term of the Services.
The data / information so shared with us shall not be disclosed to third parties unless they are consented to by the User. There are certain exceptions to the same which have been specified in a detailed version of the Privacy Policy.
We retain the data / information so shared with us by the User for the Term of the Services and 90 days after the termination / completion of such term of the Services.
PART III – General details in regards to the Privacy Policy
As custodians of your data / information, we understand and appreciate your trust in our ability to protect the same. We take all precautions and are ISO 27001 certified. While we take all reasonable protections in order to make sure that the data / information so shared, we do not guarantee an absolute protection. Should there arise a situation whereby there arises certain queries in the mind of the User in regards to this Policy, we have appointed a Grievance Officer who shall be adept in answering any and all such queries in an expeditious manner.
`

return (
    <>
      <div className='modal-content'>
        <Modal show={show2} onHide={handleClose2}>
          <div className="modal-header">
            <Modal.Header closeButton closeVariant='white' style={{ position: 'relative' }}>
              <Modal.Title>Privacy Policy</Modal.Title>
              {/* Add additional content or buttons in the header if needed */}
            </Modal.Header>
          </div>
          <Modal.Body>
            <div className='scrollable-container-onboarding'>
              <div className='p-5' style={{ alignItems: 'center', border: '50px' }}>
                <p>{privacyPolicy}</p>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
}

export default PrivacyPolicy