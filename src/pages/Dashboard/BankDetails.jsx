import React, { useState } from 'react';
import { Row } from "reactstrap";
import "../../App-new.css";
import 'react-datepicker/dist/react-datepicker.css';
import addBank from '../../assets/images/rafiki2.svg'
import BankModal from './BankModal';
import ShareDocsPopup from './ShareDocsPopup';

const BankDetails = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [name, setName] = useState('');
    const [PanNumber, setPanNumber] = useState('');
    const [TanHolderType, setTanHolderType] = useState('');
    const [County, setCountry] = useState('');
    const [City, setCity] = useState('');
    const [formSubmitted, setFormSubmitted] = useState(false);


    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);
    const handleClose3 = () => setShow3(false);
    const handleShow3 = () => setShow3(true);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    const handleButtonClick = () => {
        setIsOpen(!isOpen);
    };


    return (
        <>
            <div style={{
                paddingTop: '5%',
            }}>

                <BankModal show={isOpen} onHide={handleButtonClick} /> 
                {/* <ShareDocsPopup show={isOpen} onHide={handleButtonClick} />*/}

                <div>
                    <Row >
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', /*border: '1px dashed #256EB5'*/ border: '50px' }}>
                            <div>

                                <img src={addBank} style={{ width: 397, height: 296, }}></img>
                            </div>
                            <div>

                                <h4> <strong>Add Client’s Bank Details!</strong></h4>
                                <p>
                                Link client-bank account details securely for seamless transactions. 
                                </p>
                                <button style={{
                                    backgroundColor: "#256EB5",
                                    color: '#fff',
                                    border: '2px solid',
                                    padding: '5px 31px',
                                    cursor: 'pointer',
                                    borderColor: '#256EB5'

                                }} onClick={handleButtonClick}>Add Bank Details</button>
                            </div>
                            {/* </Col> */}

                        </div>
                    </Row>
                </div>
            </div>
           
        </>
    )
}

export default BankDetails