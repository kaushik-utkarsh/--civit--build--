import React, { useState } from 'react';
import { Card, CardBody, Row, Container, Col, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, } from "reactstrap";
import "../../App-new.css";
import 'react-datepicker/dist/react-datepicker.css';
import icon from '../../assets/images/package_box_alt.svg'
import right_arrow from '../../assets/images/Vector.svg';
import search_line from "../../assets/images/search-line.svg";
import SelectedConfiguration from './SelectedConfiguration';
import itemp from "../../assets/images/Frame 1321315201for_temp.svg";
import setting from "../../assets/images/Setting_alt_line.svg";
import Check from "../../assets/images/Check.svg";
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';


const ProductConfig = () => {

    const [isOpen, setIsOpen] = useState(false);
const history =useHistory();
    const handleButtonClick = () => {
        // onAddClientHandler()
        // < SelectedConfiguration />
        history.push('/stakeholders');
    };
    const [menu, setMenu] = useState(false);
    const toggle = () => {
        setMenu((prevState) => !prevState);
    };

    return (
        <>
            <div className="d-flex justify-content-center align-items-center">
                {/* Use Bootstrap Grid System */}
                <div className="col-12 col-md-12 col-lg-12 pt-5 mt-5">
                    <Container fluid className="px-3 pt-5 container-stepper-csb">
                        <Card style={{ padding: '1rem', borderRadius: '0', minHeight: '80vh' }}>
                            <CardBody>
                                <div>
                                    <Row className='d-flex justify-content-between '>
                                        <div className='col-lg-6'>
                                            <h3 className='product-config-heading mt-3'>Product Configuration</h3>
                                        </div>
                                        <div className='col-lg-6 justify-content-end'>
                                            <Container fluid className='p-0' >
                                                <div className='search-box d-flex justify-content-between mt-3'>
                                                    <div className=' search-text align-items-center'>
                                                        <p className='product-congif-item-para m-0'>Search for Functions (Add User, Add Role, Add company)</p>
                                                    </div>
                                                    <div className='mx-2'>
                                                                <img src={search_line} alt="" />
                                                    {/* <img src={search_line} alt="" /> */}
                                                        {/* <Dropdown isOpen={menu} toggle={toggle} className="d-inline-block user-dropdown" >
                                                            <DropdownToggle tag="button" className="btn header-item waves-effect drop-down-svg-drop-down" id="page-header-user-dropdown">
                                                            </DropdownToggle>
                                                            <DropdownMenu className="dropdown-position2 dropdown-menu-end drop-down-width-product-config" style={{ inset: '0px auto auto 0px' }}>
                                                                <DropdownItem className='cstm-padding'>
                                                                            <img src={itemp} alt="" srcset="" />
                                                                </DropdownItem>
                                                            </DropdownMenu>
                                                        </Dropdown> */}
                                                    </div>
                                                </div>
                                            </Container>
                                            <Dropdown isOpen={menu} toggle={toggle} className="d-inline-block user-dropdown" >
                                                <DropdownToggle tag="button" className="btn header-item waves-effect drop-down-svg-drop-down" id="page-header-user-dropdown">

                                                </DropdownToggle>
                                                <DropdownMenu className="dropdown-position2 dropdown-menu-end drop-down-width-product-config" style={{ inset: '0px auto auto 0px' }}>
                                                    <DropdownItem className='cstm-padding'>
                                                        <div className='d-flex align-items-center justify-content-between' >
                                                            <div className='mx-1'>
                                                                <img src={setting} alt="" />
                                                            </div>
                                                            <div className='d-flex'>
                                                                <div>
                                                                    <p className='mt-3 px-1 product-congif-item-heading mb-1'>Supplier</p>
                                                                    <p className='px-1 product-congif-item-para'>Manage all your company level setting... </p>
                                                                </div>
                                                            </div>
                                                            <div className='mx-2'>
                                                                <img src={right_arrow} alt="" srcset="" />
                                                            </div>
                                                        </div>
                                                    </DropdownItem>
                                                    <DropdownItem className="d-block cstm-padding">
                                                        <div className='d-flex align-items-center justify-content-between' >
                                                            <div className='mx-1'>
                                                                <img src={setting} alt="" />
                                                            </div>
                                                            <div className='d-flex'>
                                                                <div>
                                                                    <p className='mt-3 px-1 product-congif-item-heading mb-1'>User Management</p>
                                                                    <p className='px-1 product-congif-item-para'>Manage all user settings including offic...</p>
                                                                </div>
                                                            </div>
                                                            <div className='mx-2'>
                                                                <img src={right_arrow} alt="" srcset="" />
                                                            </div>
                                                        </div>
                                                    </DropdownItem>
                                                    <DropdownItem className='cstm-padding company-color'>
                                                        <div className='d-flex align-items-center justify-content-between' >
                                                            <div className='mx-1'>
                                                                <img src={setting} alt="" />
                                                            </div>
                                                            <div className='d-flex pl-5'>
                                                                <div>
                                                                    <p className='mt-3 px-1 product-congif-item-heading mb-1'>Stakeholders</p>
                                                                    <p className='px-1 product-congif-item-para'>Manage and access a comprehensive l...</p>
                                                                </div>
                                                            </div>
                                                            <div className='mx-2'>
                                                                <img src={Check} alt="" srcset="" />
                                                            </div>
                                                        </div>
                                                    </DropdownItem>
                                                    <DropdownItem className="d-block cstm-padding">
                                                        <div className='d-flex align-items-center justify-content-between' >
                                                            <div className='mx-1'>
                                                                <img src={setting} alt="" />
                                                            </div>
                                                            <div className='d-flex'>
                                                                <div>
                                                                    <p className='mt-3 px-1 product-congif-item-heading mb-1'>Library</p>
                                                                    <p className='px-1 product-congif-item-para'>Manage a comprehensive list of all your...</p>
                                                                </div>
                                                            </div>
                                                            <div className='mx-2'>
                                                                <img src={right_arrow} alt="" srcset="" />
                                                            </div>
                                                        </div>
                                                    </DropdownItem>
                                                    <DropdownItem className="d-block cstm-padding">
                                                        <div className='d-flex align-items-center justify-content-between' >
                                                            <div className='mx-1'>
                                                                <img src={setting} alt="" />
                                                            </div>
                                                            <div className='d-flex'>
                                                                <div>
                                                                    <p className='mt-3 px-1 product-congif-item-heading mb-1'>System Administration and ...</p>
                                                                    <p className='px-1 product-congif-item-para'>Manage notification settings, workflow...</p>
                                                                </div>
                                                            </div>
                                                            <div className='mx-2'>
                                                                <img src={right_arrow} alt="" srcset="" />
                                                            </div>
                                                        </div>
                                                    </DropdownItem>
                                                </DropdownMenu>
                                            </Dropdown>
                                        </div>

                                    </Row>
                                    <Row className='mt-4'>
                                        <Col lg={6}>
                                            <Container fluid className='product-config-items' style={{ cursor: 'pointer' }} >
                                                <div className='d-flex align-items-center justify-content-between'>
                                                    <div className='d-flex'>
                                                        <div className='my-3 mx-2'>
                                                            <img src={icon} alt="" />
                                                        </div>
                                                        <div >
                                                            <p className='mt-3 px-1 product-congif-item-heading mb-1'>Company Settings</p>
                                                            <p className='px-1 product-congif-item-para'>Manage all your company level settings including offices, document, standards, company calenders, currency and timezone etc.</p>
                                                        </div>
                                                    </div>
                                                    <div className='mx-2'>
                                                        <img src={right_arrow} alt="" srcset="" />
                                                    </div>
                                                </div>
                                            </Container>
                                        </Col>
                                        <Col lg={6}>
                                            <Container fluid className='product-config-items' style={{ cursor: 'pointer' }}>
                                                <div className='d-flex align-items-center justify-content-between'>
                                                    <div className='d-flex'>
                                                        <div className='my-3 mx-2'>
                                                            <img src={icon} alt="" />
                                                        </div>
                                                        <div>
                                                            <p className='mt-3 px-1 product-congif-item-heading mb-1'>User Management</p>
                                                            <p className='px-1 product-congif-item-para'>Manage all user settings including office assignment, project, role entitlement, employee details etc.</p>
                                                        </div>
                                                    </div>
                                                    <div className='mx-2'>
                                                        <img src={right_arrow} alt="" srcset="" />
                                                    </div>
                                                </div>
                                            </Container>
                                        </Col>
                                    </Row>
                                    <Row className='mt-3'>
                                        <Col lg={6}>
                                            <Container fluid className='product-config-items' style={{ cursor: 'pointer' }} onClick={handleButtonClick}>
                                                <div className='d-flex align-items-center justify-content-between'>
                                                    <div className='d-flex'>
                                                        <div className='my-3 mx-2'>
                                                            <img src={icon} alt="" />
                                                        </div>
                                                        <div>
                                                            <p className='mt-3 px-1 product-congif-item-heading mb-1'>Stakeholders</p>
                                                            <p className='px-1 product-congif-item-para'>Manage and access a comprehensive list of all the clients, contractors, consultants, suppliers etc.</p>
                                                        </div>
                                                    </div>
                                                    <div className='mx-2'>
                                                        <img src={right_arrow} alt="" srcset="" />
                                                    </div>
                                                </div>
                                            </Container>
                                        </Col>
                                        <Col lg={6}>
                                            <Container fluid className='product-config-items' style={{ cursor: 'pointer' }}>
                                                <div className='d-flex align-items-center justify-content-between'>
                                                    <div className='d-flex'>
                                                        <div className='my-3 mx-2'>
                                                            <img src={icon} alt="" />
                                                        </div>
                                                        <div>
                                                            <p className='mt-3 px-1 product-congif-item-heading mb-1'>Library</p>
                                                            <p className='px-1 product-congif-item-para'>Manage a comprehensive list of all your resources, items, construction units etc.</p>
                                                        </div>
                                                    </div>
                                                    <div className='mx-2'>
                                                        <img src={right_arrow} alt="" srcset="" />
                                                    </div>
                                                </div>
                                            </Container>
                                        </Col>
                                    </Row>
                                    <Row className='mt-3'>
                                        <Col lg={6}>
                                            <Container fluid className='product-config-items' style={{ cursor: 'pointer' }}>
                                                <div className='d-flex align-items-center justify-content-between'>
                                                    <div className='d-flex'>
                                                        <div className='my-3 mx-2'>
                                                            <img src={icon} alt="" />
                                                        </div>
                                                        <div>
                                                            <p className='mt-3 px-1 product-congif-item-heading mb-1'>System Administration and Notification</p>
                                                            <p className='px-1 product-congif-item-para'>Manage notification settings, workflow definitions, email templates, access activity logs etc.</p>
                                                        </div>
                                                    </div>
                                                    <div className='mx-2'>
                                                        <img src={right_arrow} alt="" srcset="" />
                                                    </div>
                                                </div>
                                            </Container>
                                        </Col>
                                    </Row>
                                </div>
                            </CardBody>
                        </Card>
                    </Container>
                </div>
            </div>
        </>
    );
}

export default ProductConfig