import React from 'react'
import { Card, CardBody, Row, Container, Col, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Input } from "reactstrap";
import "../../App-new.css";
import FourthNavBar from './FourthNavBar';
import search_line from "../../assets/images/search-line.svg";
import question_mark from "../../assets/images/question-line.svg";
import Waterfall from "../../assets/images/Component 65svg_2.svg";
import File_dock from "../../assets/images/File_dock.svg";
import add_file from "../../assets/images/File_dock_addfile_dock.svg";
import video_svg from "../../assets/images/Vectorvideos_svg.svg";
import './HelpDesk.css';
// import GreenTick from '../../components/Common/GreenTickSvg';
import close_svg from "../../assets/images/Close_square.svg";
import help_dessk from "../../assets/images/rafiki_help_desk.svg";
import bottom_crousal from "../../assets/images/Group 1000004507bottom-slider.svg";
import Button from 'react-bootstrap/Button';
import HelpNavbar from './HelpNavbar';
// import Card from 'react-bootstrap/Card';

const FirstScreen = () => {
    const LeftItems = [
        {
            img: File_dock,
            text: 'Overview'
        },
        {
            img: add_file,
            text: 'Tutorials'
        },
        {
            img: video_svg,
            text: 'Videos'
        },
    ]
    const RightItems = [
        {
            svg: Waterfall,
            text: 'How do I generate a work done bill?'
        },
        {
            svg: Waterfall,
            text: 'How can I import my field progress data into my work done bill?'
        },
        {
            svg: Waterfall,
            text: 'In a bill, is it possible to edit the quantities that are imported from the field progress information?'
        },
        {
            svg: Waterfall,
            text: 'How can I assign the bill to a specific person for certification?'
        },
        {
            svg: Waterfall,
            text: 'How can I assign a bid table to a project?'
        },
        {
            svg: Waterfall,
            text: 'How do I generate a provisional invoice?'
        },
        {
            svg: Waterfall,
            text: 'How can I add custom notes to my invoice?'
        },
        {
            svg: Waterfall,
            text: 'How to edit the work done summary within a work done bill?'
        },
        {
            svg: Waterfall,
            text: 'How can I add photos and videos to my daily field report?'
        },
        {
            svg: Waterfall,
            text: 'How can I define the payment structure for a percentage contract?'
        },
    ]
    return (
        <>
            <div>
                <FourthNavBar />
            </div>
            <div className='container-help mt-5 py-5 px-4 text-start bg-white'>
                <div className='d-flex justify-content-between'>
                    <h1 className='heading-600-24 gray-color1 text-start'>Progress, Billing & Invoice</h1>
                    {/* <div><img src={close_svg} alt="" /></div> */}
                </div>
                <p className='heading-400-14 gray-color2 text-start pb-2'></p>
                <div>
                    <Row>
                        <Col lg={3}>
                            <div>
                                <Card className="mb-1">
                                    {LeftItems.map((item, index) => (
                                        <CardBody key={index} className="help-card-body">
                                            <div className="d-flex">
                                                <div>
                                                    <img src={item.img} alt="" />
                                                </div>
                                                <div className="ms-3">
                                                    {item.text}
                                                </div>
                                            </div>
                                        </CardBody>
                                    ))}
                                </Card>
                            </div>
                        </Col>
                        <Col lg={9}>
                            <div className='d-flex justify-content-between'>
                                <h1 className='heading-600-16 gray-color1 mx-3'>Search for any tutorials</h1>
                                {/* <div><img src={close_svg} alt="" /></div> */}
                                <Container fluid className='p-0 mr-0' >
                                    <div className='search-box d-flex justify-content-between mt-3 help-desk-search h-center'>
                                        <div className=' search-text align-items-center'>
                                            <p className='product-congif-item-para m-0 px-2'>Search for Functions (Add User, Add Role, Add company)</p>
                                        </div>
                                        <div className='mx-2'>
                                            <img src={search_line} alt="" />
                                        </div>
                                    </div>
                                </Container>
                            </div>
                            {RightItems.map((item, index) => (
                                // <CardBody key={index} className="help-card-body">
                                <div className="d-flex search-tutorial py-2 m-3">
                                    <div className="ms-3 m-3 d-flex">
                                        <div>
                                            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg" className="svg-icon">
                                                <circle className="svg-icon" cx="13" cy="13" r="12" stroke="#7C7D7E" stroke-width="2" />
                                                <text fill="#7C7D7E" className="svg-icon" x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" >
                                                    {index + 1}
                                                </text>

                                            </svg>
                                        </div>
                                        <div className='ms-3'>
                                            {item.text}
                                        </div>
                                    </div>
                                </div>
                                // </CardBody>
                            ))}
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    )
}
export default FirstScreen;
