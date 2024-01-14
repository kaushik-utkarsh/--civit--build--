import React, { useState, useRef } from 'react';
import { Table, Input, Row } from "reactstrap";
import "../../App-new.css";
import 'react-datepicker/dist/react-datepicker.css';
import trash_iamge from '../../assets/images/Trashtrash.svg'
import upload_image from '../../assets/images/upload.svg'

const RegistrationDetails = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [name, setName] = useState('');
    const [PanNumber, setPanNumber] = useState('');
    const [TanHolderType, setTanHolderType] = useState('');
    const [Country, setCountry] = useState('');
    const [City, setCity] = useState('');
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [show, setShow] = useState(false);
    const [upload, setUpload] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const fileInputRef = useRef(null);

    const handleUploadClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        console.log('Selected file:', selectedFile);
        if (selectedFile) {
            setUpload(true)
        }
    };

    const handleTrashClick = () => {
        setUpload(false)
    };

    return (
        <Table borderless className="custom-table">
            <thead>
                <tr>
                    <th>Sr. No.</th>
                    <th>First Name</th>
                    <th>Value</th>
                    <th>Issue Date</th>
                    <th>Expiry Date</th>
                    <th>Upload File</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>
                        PAN Card <span style={{ color: 'red' }}>*</span>
                    </td>
                    <td> <Input type="text" placeholder='Enter' id="example-text-input" required={true} /></td>
                    <td>
                        <Input type="date" id="example-text-input-date" />
                    </td>
                    <td><Input type="date" id="example-text-input-date" /></td>
                    <td className='upload-section'>
                        {<div onClick={handleUploadClick}>
                            <Row>
                                {upload === false && <img src={upload_image} alt="Upload Icon" />}
                            </Row>
                        </div>
                        }
                        {<div onClick={handleTrashClick}>
                            <Row>
                                {upload === true && <img src={trash_iamge} alt="Upload Icon" />}
                            </Row>
                        </div>
                        }
                        <input
                            type="file"
                            style={{ display: 'none' }}
                            ref={fileInputRef}
                            onChange={handleFileChange}
                        />
                    </td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>
                        PAN Card <span style={{ color: 'red' }}>*</span>
                    </td>
                    <td> <Input type="text" placeholder='Enter' id="example-text-input" required={true} /></td>
                    <td>
                        <Input type="date" id="example-text-input-date" />
                    </td>
                    <td><Input type="date" id="example-text-input-date" /></td>
                    <td className='upload-section'>
                        {<div onClick={handleUploadClick}>
                            <Row>
                                {upload === false && <img src={upload_image} alt="Upload Icon" />}
                            </Row>
                        </div>
                        }
                        {<div onClick={handleTrashClick}>
                            <Row>
                                {upload === true && <img src={trash_iamge} alt="Upload Icon" />}
                            </Row>
                        </div>
                        }
                        <input
                            type="file"
                            style={{ display: 'none' }}
                            ref={fileInputRef}
                            onChange={handleFileChange}
                        />
                    </td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>
                        PAN Card <span style={{ color: 'red' }}>*</span>
                    </td>
                    <td> <Input type="text" placeholder='Enter' id="example-text-input" required={true} /></td>
                    <td>
                        <Input type="date" id="example-text-input-date" />
                    </td>
                    <td><Input type="date" id="example-text-input-date" /></td>
                    <td className='upload-section'>
                        {<div onClick={handleUploadClick}>
                            <Row>
                                {upload === false && <img src={upload_image} alt="Upload Icon" />}
                            </Row>
                        </div>
                        }
                        {<div onClick={handleTrashClick}>
                            <Row>
                                {upload === true && <img src={trash_iamge} alt="Upload Icon" />}
                            </Row>
                        </div>
                        }
                        <input
                            type="file"
                            style={{ display: 'none' }}
                            ref={fileInputRef}
                            onChange={handleFileChange}
                        />
                    </td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>
                        PAN Card <span style={{ color: 'red' }}>*</span>
                    </td>
                    <td> <Input type="text" placeholder='Enter' id="example-text-input" required={true} /></td>
                    <td>
                        <Input type="date" id="example-text-input-date" />
                    </td>
                    <td><Input type="date" id="example-text-input-date" /></td>
                    <td className='upload-section'>
                        {<div onClick={handleUploadClick}>
                            <Row>
                                {upload === false && <img src={upload_image} alt="Upload Icon" />}
                            </Row>
                        </div>
                        }
                        {<div onClick={handleTrashClick}>
                            <Row>
                                {upload === true && <img src={trash_iamge} alt="Upload Icon" />}
                            </Row>
                        </div>
                        }
                        <input
                            type="file"
                            style={{ display: 'none' }}
                            ref={fileInputRef}
                            onChange={handleFileChange}
                        />
                    </td>
                </tr>
            </tbody>
        </Table>
    )
}

export default RegistrationDetails;
