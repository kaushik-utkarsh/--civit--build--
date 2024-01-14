import React, { useState } from "react";
import { Card, CardBody, Row, Container, Col, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, } from "reactstrap";
import './MessageBoard.css'
import '../../App-new.css'
import search_line from "../../assets/images/search-line.svg";
import plus from "../../assets/images/Addplus.svg";
import message from '../../assets/images/question-line.svg'
import create_group from '../../assets/images/add-circle-line_create_group.svg'
import no_convo from '../../assets/images/rafiki_no_convo.svg'
import { Tabs, Tab } from "react-bootstrap";
import Expand_down from '../../assets/images/Expand_down.svg';
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";



const ToggleSidebar = () => {
    const [isOpen, setIsopen] = useState(false);

    const ToggleSidebar = () => {
        isOpen === true ? setIsopen(false) : setIsopen(true);
    }
    const [menu, setMenu] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);

    const toggle = () => {
        setMenu((prevState) => !prevState);
    };


    const handleClick = (item) => {
        // Handle the click event based on the clicked item
        console.log('Clicked:', item);
    };
    return (
        <>
            <div className="container-fluid mt-5 pt-5">

                <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-md">
                    <div className="container-fluid p-2">
                        <a className="navbar-brand text-primary mr-0">Company Logo</a>
                        <div className="form-inline ml-auto">
                            <div className="btn btn-primary" onClick={ToggleSidebar} >
                                <i className="fa fa-bars"></i>
                            </div>
                        </div>
                    </div>
                </nav>
                <div className={`sidebar ${isOpen == true ? 'active' : ''}`}>
                    <div className="sd-header">
                        <h4 className="mb-0 sd-header-text">Sidebar Header</h4>
                        <div className="btn btn-primary" onClick={ToggleSidebar}><i className="fa fa-times"></i></div>
                    </div>
                    <div className="sd-body  sd-body-left">
                        <Row>
                            <Col md={5} className="sd-body-left">
                                <Row>
                                    <Container fluid className='pl-2'>
                                        <div className='d-flex align-items-center justify-content-between' >
                                            <div className='search-box d-flex justify-content-between'>
                                                <div className=' search-text align-items-center justify-content-between'>
                                                    <p className='product-congif-item-para m-0'>Search for Names, Groups or Projects.</p>
                                                </div>
                                                <div className='mx-2'>
                                                    <img src={search_line} alt="" />
                                                </div>
                                            </div>
                                            <div className=''>
                                                <Dropdown isOpen={menu} toggle={toggle} className="d-inline-block user-dropdown">
                                                    <DropdownToggle tag="button" className="btn header-item waves-effect p-0" id="page-header-user-dropdown" style={{ display: 'flex', alignItems: 'center', gap: '4px', fontWeight: 'bold' }}>
                                                        <img src={plus} alt="" />
                                                    </DropdownToggle>
                                                    <DropdownMenu className="dropdown-menu-end">
                                                        <DropdownItem onClick={() => handleClick('Settings')} className="d-block d-flex">
                                                            <div className="px-2">
                                                                <img src={message} alt="" />
                                                            </div>
                                                            <div>
                                                                {('Start Chat')}
                                                            </div>
                                                        </DropdownItem>
                                                        <DropdownItem onClick={() => handleClick('Settings')} className="d-block d-flex">
                                                            <div className="px-2">
                                                                <img src={create_group} alt="" />
                                                            </div>
                                                            <div>
                                                                {('Create Group')}
                                                            </div>
                                                        </DropdownItem>
                                                    </DropdownMenu>
                                                </Dropdown>
                                            </div>
                                        </div>
                                    </Container>
                                </Row>
                                <Row>
                                    <Tabs defaultActiveKey="All" id="uncontrolled-tab-example" className=" d-flex tab-content-custm">
                                        <Tab eventKey="All" title="All" className="">
                                            <div className='d-flex align-items-center justify-content-between'>
                                                <div className='d-flex'>
                                                    <div className='my-2 mx-2'>
                                                        <img src={Expand_down} alt="" />
                                                    </div>
                                                    <div>
                                                        <p className='px-1 my-2'>Direct Messages</p>
                                                    </div>
                                                </div>
                                                <div className='mx-2'>
                                                    <img src={plus} alt="" srcset="" />
                                                </div>
                                            </div>
                                        </Tab>
                                        <Tab eventKey="Pinned" title="Pinned" className="">
                                            <div className='d-flex align-items-center justify-content-between'>
                                                <div className='d-flex'>
                                                    <div className='my-2 mx-2'>
                                                        <img src={Expand_down} alt="" />
                                                    </div>
                                                    <div>
                                                        <p className='px-1 my-2'>Direct Messages</p>
                                                    </div>
                                                </div>
                                                <div className='mx-2'>
                                                    <img src={plus} alt="" srcset="" />
                                                </div>
                                            </div>
                                        </Tab>
                                    </Tabs>
                                </Row>
                            </Col>
                            <Col md={7} className="p-5 sd-body-right d-flex align-items-center">
                                <div>
                                    <Editor
                                        toolbarClassName="toolbarClassName"
                                        wrapperClassName="wrapperClassName"
                                        editorClassName="editorClassName"
                                    />
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
                <div className={`sidebar-overlay ${isOpen == true ? 'active' : ''}`} onClick={ToggleSidebar}></div>
            </div>

        </>
    )
}
export default ToggleSidebar;

// ReactDOM.render(<ToggleSidebar />, document.getElementById("root"));