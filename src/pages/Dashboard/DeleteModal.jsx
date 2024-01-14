import React, { useState } from 'react';
import { Button } from "reactstrap";
import "../../App-new.css";
import 'react-datepicker/dist/react-datepicker.css';
import Modal from 'react-bootstrap/Modal';
import { Row, Col } from 'react-bootstrap';

import delete_svg from '../../assets/images/rafikidelete_svg.svg'

const DeleteModal = () => {

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
        // Mark the form as submitted
        setFormSubmitted(true);

        // Check if mandatory fields are filled
        if (name === '' || PanNumber === '' || TanHolderType === '' || County === '' || City === '') {
            // You can show an error message or take other actions
            console.log('Mandatory fields are not filled');
        } else {
            // Process the form or perform other actions
            console.log('Form submitted successfully');
        }
    };


    return (
        <>
          

            <div className="col col-md-12 add-client-button">
                <div className="row">
                    <div className="col col-md-6 mb-3">
                        <h3>Add Client</h3>
                    </div>
                    <div className="col col-md-6 mb-3">
                        <button className="save-button" onClick={handleButtonClick}>Save</button>
                        <button className="cancel-button">Cancel</button>
                    </div>
                </div>
            </div>
            <div className='modal-content'>
                <Button variant="primary" onClick={handleShow2}>
                    Launch demo modal
                </Button>

                <Modal show={show2} onHide={handleClose2}>
                    <div className="modal-header">
                        <Modal.Header closeButton closeVariant='white' style={{ position: 'relative' }}>
                            <Modal.Title>Bank Details</Modal.Title>
                            {/* Add additional content or buttons in the header if needed */}
                        </Modal.Header>
                    </div>
                    <Modal.Body>
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', border: '50px' }}>
                            <div>
                                <img src={delete_svg}></img>
                            </div>
                            <div>
                                <h4> <strong>Are You sure you want to delete ‘Plumbing work 2’ ?</strong></h4>
                                <p>
                                    You can’t undo this action
                                </p>
                                <div className="col col-md-12 mb-3" >
                                    <button className="bank-cancel-button">Cancel</button>
                                    <button className="bank-save-button" onClick={handleButtonClick}>Yes, Delete</button>
                                </div>
                            </div>
                        </div>
                    </Modal.Body>
                </Modal>
            </div>
        </>
    )
}

export default DeleteModal