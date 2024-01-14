import React, { useState, useRef } from 'react';
// import { Col, Row, Button } from 'reactstrap';
import { Col, Row, Label, Input } from "reactstrap";
import 'react-datepicker/dist/react-datepicker.css';
import "../../App-new.css";
import Modal from 'react-bootstrap/Modal';
import dragAndDrop from '../../assets/images/rafiki.svg';
import { mdiMagnifyPlus, mdiMagnifyMinus, mdiRestore,mdiRotateRight } from '@mdi/js';
import {
    TransformWrapper,
    TransformComponent,
    useControls
} from "react-zoom-pan-pinch";

const Documents = () => {
    const [showModal, setShowModal] = useState(false);
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [showAdditionalImages, setShowAdditionalImages] = useState(false);
    const [isDragOver, setIsDragOver] = useState(false);
    const [rotation, setRotation] = useState(0);

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const fileInputRef = useRef(null);
    const handleButtonClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const handleFileChange = (e) => {
        const files = Array.from(e.target.files);
        setSelectedFiles(files);
        setShowModal(true);
    };

    const handleShowMoreClick = () => {
        setShowAdditionalImages(true);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
        setIsDragOver(true);
    };

    const handleDragLeave = () => {
        setIsDragOver(false);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setIsDragOver(false);

        // Handle the dropped files
        const files = Array.from(e.dataTransfer.files);
        setSelectedFiles(files);
        setShowModal(true);
    };
    const rotateRight = () => {
        setRotation(rotation + 90); // Increment rotation by 90 degrees
    };

    const Controls = () => {
        const { zoomIn, zoomOut, resetTransform } = useControls();
        return (
            <div className='image-functions'>
                <div onClick={() => zoomIn()}>
                    <span className="mdi mdi-magnify-plus"></span> {/* Zoom In icon */}
                </div>
                <div onClick={() => zoomOut()}>
                    <span className="mdi mdi-magnify-minus"></span> {/* Zoom Out icon */}
                </div>
                <div onClick={() => resetTransform()}>
                    <span className="mdi mdi-restore"></span> {/* Reset icon */}
                </div>

                {/* <div >
                    <span onClick={rotateRight}>
                        <svg className="mdi-icon" viewBox="0 0 24 24">
                            <path d={mdiRotateRight} />
                        </svg>
                    </span>
                </div> */}
            </div>
        );
    };

    return (
        <>
            <div
                style={{
                    paddingTop: '5%',
                }}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                className={`drag-drop-container ${isDragOver ? 'drag-over' : ''}`}
            >
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        border: `1px dashed #256EB5`,
                        padding: '20px',
                        backgroundColor: isDragOver ? '#F5FBFD' : 'transparent',  // Set background color to red when dragging
                    }}
                >
                    <div>
                        <img src={dragAndDrop} alt="Drag and drop" style={{ width: 397, height: 'auto' }} />
                    </div>
                    <div>
                        <h4>
                            <strong>Upload documents to proceed</strong>
                        </h4>
                        <p>Or Drag and Drop it here</p>
                        <div className="input-group">
                            <input
                                type="file"
                                className="form-control"
                                id="customFile"
                                style={{ display: 'none' }}
                                ref={fileInputRef}
                                onChange={handleFileChange}
                                multiple
                            />
                            <button
                                style={{
                                    backgroundColor: '#fff',
                                    color: '#256EB5',
                                    border: '2px solid',
                                    padding: '5px 31px',
                                    cursor: 'pointer',
                                    borderColor: '#256EB5',
                                    marginTop: '10px',
                                    fontWeight: 'bolder'
                                    // color:'#000'
                                }}
                                onClick={handleButtonClick}
                            >
                                Browse Files
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <p>Supported file formats <span> <b>.jpg, .png, .pdf.</b> </span></p>
            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Preview Images</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{
                    paddingTop: '0',
                    paddingBottom: '0'
                }}>
                    {/* <Col md={} */}
                    <Row>
                        <Col md={4}>
                            <div>
                                <div className='mb-3 mt-3'>
                                    <p> <b>Added Files - {selectedFiles.length} </b></p>
                                </div>
                                {selectedFiles.map((file, index) => (
                                    <div key={index} className={`image-preview-modal-success mb-3 ${index > 0 && !showAdditionalImages ? 'hidden' : ''}`}>
                                        <div className="d-flex align-items-start justify-content-start">
                                            <i className="mdi mdi-image-outline" style={{ color: 'white', marginRight: '5px' }}></i>
                                            <p> <span style={{ color: 'white' }}>{file.name}</span></p>
                                        </div>
                                        {console.log(file, file.name)}
                                        {/* Add an image tag here if needed */}
                                    </div>
                                ))}
                                {selectedFiles.length > 1 && !showAdditionalImages && (
                                    <div className='show-more-link' onClick={handleShowMoreClick}>
                                        Show more...
                                    </div>
                                )}
                            </div>
                        </Col>
                        <Col md={8} style={{ backgroundColor: '#F5FBFD' }}>


                            <Row className='m-3 p-0'>
                                <p className='p-0'>Hello</p>
                            </Row>
                            <Row className='m-3'>
                                <div style={{ backgroundColor: '#E6F4FA' }} >
                                    <div>
                                        <center> {selectedFiles.length > 0 &&
                                            <>

                                                <TransformWrapper>
                                                    <Controls />
                                                    <TransformComponent>
                                                        <div style={{ height: '50%', width: 'auto' }}>
                                                            <img
                                                                src={URL.createObjectURL(selectedFiles[0])}
                                                                alt="Selected File"
                                                                width="60%"
                                                                style={{ padding: '19px' }}
                                                            />
                                                        </div>
                                                    </TransformComponent>
                                                </TransformWrapper>
                                            </>
                                        }</center>
                                    </div>
                                </div>
                            </Row>
                            <Row className='m-3'>
                                <Label htmlFor="example-text-input" style={{ fontSize: '13px' }} className="col-md-12 col-form-label p-0 pb-1">Reference No.</Label>
                                <Input type="text" placeholder="Enter Reference No." id="example-text-input" required={true} />
                                <Label htmlFor="example-text-input" style={{ fontSize: '13px' }} className="col-md-12 col-form-label p-0 pt-1">Enter a 6 Digit Reference No.</Label>
                            </Row>
                            <Row className='m-3 img-upload-modal'>
                                <div className="row p-0">
                                    <div className="col col-md-12 mb-3 d-flex p-0" style={{ justifyContent: 'end', paddingRight:'0px' }}>
                                        <div>
                                            <button className="save-button" >Save</button>
                                            <button className="cancel-button">Cancel</button>
                                        </div>
                                    </div>
                                </div>
                            </Row>


                        </Col>
                    </Row>
                </Modal.Body>
                {/* <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Close
                    </Button>
                </Modal.Footer> */}
            </Modal>
        </>
    );
};

export default Documents;
