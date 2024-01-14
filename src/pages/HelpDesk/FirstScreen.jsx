import React from 'react'
import { Card, CardBody, Row, Container, Col, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Input } from "reactstrap";
import "../../App-new.css";
import HelpNavbar from './HelpNavbar';
import SearchSection from './SearchSection';
import VideoSection from './VideoSection';
import HelpAccordian from './HelpAccordian';
import CaseStudy from './CaseStudy';
import CaseStudyOnlyCrousal from './CaseStudyOnlyCrousal';
import './HelpDesk.css';
// import GreenTick from '../../components/Common/GreenTickSvg';
import close_svg from "../../assets/images/Close_square.svg";
import help_dessk from "../../assets/images/rafiki_help_desk.svg";
import bottom_crousal from "../../assets/images/Group 1000004507bottom-slider.svg";
import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';

const FirstScreen = () => {
  return (
    <>
      <HelpNavbar />
      <SearchSection />
      <VideoSection />
      <div className='pt-5'>
        <div className='container-help my-0 py-5 px-4 text-start bg-white'>
          <div className='d-flex justify-content-between'>
            <h1 className='heading-600-24 gray-color1 text-start'>Help Files</h1>
            <div><img src={close_svg} alt="" /></div>
          </div>
          <p className=' heading-400-14 gray-color2 text-start pb-2'>In depth and easy to refer guides that will make using CivitBUILD a breeze.</p>

          {/* <div className=' border-gray'> */}
          <HelpAccordian />
          {/* </div> */}
        </div>
        <div className='container-help-2 my-0  text-start justify-content-center'>
          <div className=" d-flex align-items-center pt-5 justify-content-center">
            <div>
              <img src={help_dessk} alt="" />
            </div>
            <div>
              <h2 className="heading-700-20">
                Want to know more about the product?
              </h2>
              <p>
                Get started with the product with 30 days free trial.
              </p>
              <button className="add-client-page">
                Get Started
              </button>
            </div>
          </div>
        </div>
        {/* <div className='container-help-3 my-0 py-5 px-4 text-start'> */}
        <div className='container-help my-0 py-5 px-4 text-start bg-white'>
          <div className='d-flex justify-content-between'>
            <h1 className='heading-600-24 gray-color1 text-start'>Case studies</h1>
            {/* <div><img src={close_svg} alt="" /></div> */}
          </div>
          <p className=' heading-400-14 gray-color2 text-start pb-2'></p>
          <div>
            <CaseStudy />
            <img src={bottom_crousal} alt="" />
          </div>
        </div>
      </div>
    </>
  )
}
export default FirstScreen;
