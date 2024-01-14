import React, { useState, useRef } from 'react';
import { Table, Input, Row } from "reactstrap";
import "../../App-new.css";
import 'react-datepicker/dist/react-datepicker.css';
import Trash from '../../assets/images/Trashtrash.svg'

const UpdatedFileList = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [name, setName] = useState('');
    const [PanNumber, setPanNumber] = useState('');
    const [TanHolderType, setTanHolderType] = useState('');
    const [Country, setCountry] = useState('');
    const [City, setCity] = useState('');
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [show, setShow] = useState(false);

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
    };

    const handleButtonClick = () => {
        setFormSubmitted(true);

        if (name === '' || PanNumber === '' || TanHolderType === '' || Country === '' || City === '') {
            console.log('Mandatory fields are not filled');
        } else {
            console.log('Form submitted successfully');
        }
    };
  return (
    <Table borderless className="custom-table">
    <thead>
        <tr>
            <th>Sr. No.</th>
            <th>Document Name</th>
            <th>Document Number</th>
            <th>Issued On</th>
            <th>Valid Till</th>
            <th>Upload File</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>
                EIN <span style={{ color: 'red' }}>*</span>
            </td>
            <td> <Input type="text" placeholder='Enter' id="example-text-input" required={true} /></td>
            <td>
                <Input type="date" id="example-text-input-date" />
            </td>
            <td><Input type="date" id="example-text-input-date" /></td>
            <td className='upload-section'>
                <div onClick={handleUploadClick}>
                    <Row>
                        <img src={Trash} alt="Upload Icon" />
                    </Row>
                </div>
                <input
                    type="file"
                    style={{ display: 'none' }}
                    ref={fileInputRef}
                    onChange={handleFileChange}
                />
            </td>
        </tr>
        <tr>
            <td>1</td>
            <td>
                EIN <span style={{ color: 'red' }}>*</span>
            </td>
            <td> <Input type="text" placeholder='Enter' id="example-text-input" required={true} /></td>
            <td>
                <Input type="date" id="example-text-input-date" />
            </td>
            <td><Input type="date" id="example-text-input-date" /></td>
            <td className='upload-section'>
                <div onClick={handleUploadClick}>
                    <Row>
                        <img src={Trash} alt="Upload Icon" />
                    </Row>
                </div>
                <input
                    type="file"
                    style={{ display: 'none' }}
                    ref={fileInputRef}
                    onChange={handleFileChange}
                />
            </td>
        </tr>
        <tr>
            <td>1</td>
            <td>
                EIN <span style={{ color: 'red' }}>*</span>
            </td>
            <td> <Input type="text" placeholder='Enter' id="example-text-input" required={true} /></td>
            <td>
                <Input type="date" id="example-text-input-date" />
            </td>
            <td><Input type="date" id="example-text-input-date" /></td>
            <td className='upload-section'>
                <div onClick={handleUploadClick}>
                    <Row>
                        <img src={Trash} alt="Upload Icon" />
                    </Row>
                </div>
                <input
                    type="file"
                    style={{ display: 'none' }}
                    ref={fileInputRef}
                    onChange={handleFileChange}
                />
            </td>
        </tr>
        <tr>
            <td>1</td>
            <td>
                EIN <span style={{ color: 'red' }}>*</span>
            </td>
            <td> <Input type="text" placeholder='Enter' id="example-text-input" required={true} /></td>
            <td>
                <Input type="date" id="example-text-input-date" />
            </td>
            <td><Input type="date" id="example-text-input-date" /></td>
            <td className='upload-section'>
                <div onClick={handleUploadClick}>
                    <Row>
                        <img src={Trash} alt="Upload Icon" />
                    </Row>
                </div>
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

export default UpdatedFileList;
