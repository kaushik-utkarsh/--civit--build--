import React, { useState } from 'react';
import { Button } from "reactstrap";
import "../../App-new.css";
import 'react-datepicker/dist/react-datepicker.css';
import Modal from 'react-bootstrap/Modal';
import { Row, Col } from 'react-bootstrap';

import img from '../../assets/images/civit built_Extend Free Trial 1.svg'

const DeleteModal = () => {

    const [show2, setShow2] = useState(false);
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);


    return (
        <>
            <div className='modal-content pt-5 mt-5'>
                <Button variant="primary" onClick={handleShow2}>
                    Launch demo modal
                </Button>

                <Modal show={show2} onHide={handleClose2}>
                    <div className="modal-header py-0">
                        <Modal.Header closeButton closeVariant='white' style={{ position: 'relative' }}>
                            <Modal.Title>Free Trial</Modal.Title>
                            {/* Add additional content or buttons in the header if needed */}
                        </Modal.Header>
                    </div>
                    <Modal.Body className='p-0'>
                        <div className='px-5' style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', border: '50px' }}>
                            <div>
                                <img src={img}></img>
                            </div>
                            <div className='p-3'>
                                <h4> <strong>Extend Free Trial?</strong></h4>
                                <p>
                                    Answer a few questionsnto get 10 more days of free usage.
                                </p>
                                <div className="col col-md-12 mb-3" >
                                    <Row>
                                        <Col md={6}>
                                            <div>
                                                <button className="bank-cancel-button">Skip</button>
                                            </div>
                                        </Col>
                                        <Col md={6}>
                                            <div>
                                                <button className="bank-save-button">Sure!</button>
                                            </div>
                                        </Col>
                                    </Row>
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