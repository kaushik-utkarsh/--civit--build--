import React, { useState } from 'react';
import { Card, CardBody, Row, Container, Col, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, } from "reactstrap";
import "../../App-new.css";
import 'react-datepicker/dist/react-datepicker.css';
import icon from '../../assets/images/package_box_alt.svg'
import right_arrow from '../../assets/images/Vector.svg';
// import Search from '../../assets/images/Search.svg';
import search_line from "../../assets/images/search-line.svg";
import Vectordown from "../../assets/images/Vectordown.svg";
import setting from "../../assets/images/Setting_alt_line.svg";
import Check from "../../assets/images/Check.svg";
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';


const SelectedProductConfig = () => {

    const [selectedConfig, setSelectedConfig] = useState(null);
const history=useHistory();
    const handleConfigSelection = (configName) => {
        setSelectedConfig(configName);
    };
    const [menu, setMenu] = useState(false);
    const toggle = () => {
        setMenu((prevState) => !prevState);
    };

    const onClientHandler=()=>{
        history.push('/add-client')
        console.log("Client ==>>");
    }

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
                                        <div className='col-md-6 d-flex justify-content-between mb-0'>

                                            <h3 className='product-config-heading mt-3'>Stakeholders</h3>
                                            <Dropdown isOpen={menu} toggle={toggle} className="d-inline-block user-dropdown" >
                                                <DropdownToggle tag="button" className="btn header-item waves-effect drop-down-svg-drop-down" id="page-header-user-dropdown">
                                                    <div className=''>
                                                        <img src={Vectordown} alt="" />
                                                    </div>
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
                                        <div className='col-md-5'>
                                            {/* <img src={Search} alt="" /> */}
                                            <Container fluid className='p-0'>
                                                <div className='mt-3 search-box d-flex justify-content-between'>
                                                    <div className=' search-text align-items-center justify-content-between'>
                                                        <p className='product-congif-item-para m-0'>Search for Functions (Add User, Add Role, Add company)</p>
                                                    </div>
                                                    <div className='mx-2'>
                                                        <img src={search_line} alt="" />
                                                    </div>
                                                </div>
                                            </Container>
                                        </div>

                                    </Row>
                                    <Row className='mt-3'>
                                        <Col md={6}>
                                            <Container fluid className='product-config-items pointer-global'>
                                                <div className='d-flex align-items-center justify-content-between'>
                                                    <div className='d-flex'>
                                                        <div className='my-3 mx-2'>
                                                            <img src={icon} alt="" />
                                                        </div>
                                                        <div>
                                                            <p className='mt-3 px-1 product-congif-item-heading mb-1'>Contractors</p>
                                                            <p className='px-1 product-congif-item-para'>Register all the contractors you work with for easy access.</p>
                                                        </div>
                                                    </div>
                                                    <div className='mx-2'>
                                                        <img src={right_arrow} alt="" srcset="" />
                                                    </div>
                                                </div>
                                            </Container>
                                        </Col>
                                        <Col md={6}>
                                            <Container fluid className='product-config-items justify-content-between pointer-global'>
                                                <div className='d-flex align-items-center justify-content-between' >
                                                    <div className='d-flex'>
                                                        <div className='my-3 mx-2'>
                                                            <img src={icon} alt="" />
                                                        </div>
                                                        <div>
                                                            <p className='mt-3 px-1 product-congif-item-heading mb-1'>Supplier</p>
                                                            <p className='px-1 product-congif-item-para'>Add and maintain a list of all your suppliers.</p>
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
                                        <Col md={6}>
                                            <Container fluid className='product-config-items justify-content-between pointer-global'>
                                                <div className='d-flex align-items-center justify-content-between'>
                                                    <div className='d-flex'>
                                                        <div className='my-3 mx-2'>
                                                            <img src={icon} alt="" />
                                                        </div>
                                                        <div>
                                                            <p className='mt-3 px-1 product-congif-item-heading mb-1'>Consultant</p>
                                                            <p className='px-1 product-congif-item-para'>Access all the consultant you work with.</p>
                                                        </div>
                                                    </div>
                                                    <div className='mx-2'>
                                                        <img src={right_arrow} alt="" srcset="" />
                                                    </div>
                                                </div>
                                            </Container>
                                        </Col>
                                        <Col md={6}>
                                            <Container fluid className='product-config-items pointer-global' onClick={onClientHandler}>
                                                <div className='d-flex align-items-center justify-content-between'>
                                                    <div className='d-flex'>
                                                        <div className='my-3 mx-2'>
                                                            <img src={icon} alt="" />
                                                        </div>
                                                        <div>
                                                            <p className='mt-3 px-1 product-congif-item-heading mb-1'>Client</p>
                                                            <p className='px-1 product-congif-item-para'>Create and maintain a log of all your client details.</p>
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
                                        <Col md={6}>
                                            <Container fluid className='product-config-items pointer-global'>
                                                <div className='d-flex align-items-center justify-content-between' >
                                                    <div className='d-flex'>
                                                        <div className='my-3 mx-2'>
                                                            <img src={icon} alt="" />
                                                        </div>
                                                        <div>
                                                            <p className='mt-3 px-1 product-congif-item-heading mb-1'>Transport Agencies</p>
                                                            <p className='px-1 product-congif-item-para'>Add and maintain a list of all transport agencies that you typically use.</p>
                                                        </div>
                                                    </div>
                                                    <div className='mx-2'>
                                                        <img src={right_arrow} alt="" srcset="" />
                                                    </div>
                                                </div>
                                            </Container>
                                        </Col>
                                        <Col md={6}>
                                            <Container fluid className='product-config-items pointer-global'>
                                                <div className='d-flex align-items-center justify-content-between' >
                                                    <div className='d-flex'>
                                                        <div className='my-3 mx-2'>
                                                            <img src={icon} alt="" />
                                                        </div>
                                                        <div>
                                                            <p className='mt-3 px-1 product-congif-item-heading mb-1'>Competitor</p>
                                                            <p className='px-1 product-congif-item-para'>Add your competitors.</p>
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

export default SelectedProductConfig