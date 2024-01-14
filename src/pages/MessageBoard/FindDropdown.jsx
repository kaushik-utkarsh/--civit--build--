// import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
    Dropdown, DropdownToggle, DropdownItem, DropdownMenu, Row, Col, Collapse, Card,
    CardBody, CardHeader,
} from "reactstrap";
import SimpleBar from "simplebar-react";
import { withNamespaces } from "react-i18next";
import search_line from "../../assets/images/search-line.svg";
import avatar from '../../assets/images/Avatar.svg'
import Expand_down from '../../assets/images/Expand_down.svg';


// import notification from "../../../assets/images/Nav notification.svg";

// const NotificationDropdown = () => {
//     const [menu, setMenu] = useState(false);
//     const [insideAccordion, setInsideAccordion] = useState(false)
//     const toggleInsideAccordion = () => {
//         setInsideAccordion((prevState) => !prevState);
//     };

//     const toggle = () => {
//         setMenu(prevMenu => !prevMenu);
//     };
//     const [col1, setCol1] = useState(true);
//     const [col2, setCol2] = useState(false);
//     const [col3, setCol3] = useState(false);

//     const toggleCol1 = () => setCol1(!col1);
//     const toggleCol2 = () => setCol2(!col2);
//     const toggleCol3 = () => setCol3(!col3);

//     return (
//         <React.Fragment>
//             <Dropdown isOpen={menu} toggle={toggle} className="d-inline-block">
//                 <DropdownToggle tag="button" className="btn header-item waves-effect" id="page-header-notifications-dropdown">
//                     <div className='search-box d-flex justify-content-between'>
//                         <div className=' search-text align-items-center justify-content-between'>
//                             <p className='product-congif-item-para m-0'>Search for Names, Groups or Projects.</p>
//                         </div>
//                         <div className='mx-2'>
//                             <img src={search_line} alt="" />
//                         </div>
//                     </div>
//                 </DropdownToggle>
//                 <DropdownMenu className="dropdown-menu-end dropdown-menu-lg p-0" aria-labelledby="page-header-notifications-dropdown">
//                     {/* <div className="p-3">
//                         <Row className="align-items-center">
//                             <Col>
//                                 <h6 className="m-0"> {('Notifications')} </h6>
//                             </Col>
//                             <div className="col-auto">
//                                 <Link to="#" className="small"> {('View All')}</Link>
//                             </div>
//                         </Row>
//                     </div> */}
//                     <SimpleBar style={{ maxHeight: "230px" }}>
//                         <div id="accordion">
//                             <Card className="mb-1 shadow-none">
//                                 <Link to="#" onClick={toggleCol1} style={{ cursor: "pointer" }} className="text-dark" >
//                                     <CardHeader id="headingOne">
//                                         <div className="d-flex justify-content-between">
//                                             <div >
//                                                 <img src={Expand_down} alt="" />

//                                             </div>
//                                             <div>
//                                                 <h6 className="m-0 font-14">
//                                                     Direct Messages
//                                                     {/* <i className={col1 ? "mdi mdi-minus float-end accor-plus-icon" : "mdi mdi-plus float-end accor-plus-icon"}></i> */}
//                                                 </h6>
//                                             </div>
//                                         </div>
//                                     </CardHeader>
//                                 </Link>
//                                 <Collapse isOpen={col1}>
//                                     {/* <CardBody> */}
//                                     <DropdownItem className="d-block">
//                                         <div className='d-flex align-items-center justify-content-between' >
//                                             <div>
//                                                 <img src={avatar} alt="" />
//                                             </div>
//                                             hello
//                                         </div>
//                                     </DropdownItem>
//                                     {/* </CardBody> */}
//                                 </Collapse>
//                             </Card>
//                             <Card className="mb-1 shadow-none">
//                                 <Link to="#" onClick={toggleCol2} style={{ cursor: "pointer" }} className="text-dark" >
//                                     <CardHeader id="headingTwo">
//                                         <div className="d-flex justify-content-between">
//                                             <div >
//                                                 <img src={Expand_down} alt="" />

//                                             </div>
//                                             <div>
//                                                 <h6 className="m-0 font-14">
//                                                     Liberty Park Estates
//                                                 </h6>
//                                             </div>
//                                         </div>
//                                     </CardHeader>
//                                 </Link>
//                                 <Collapse isOpen={col2}>
//                                     <CardBody>
//                                         sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica,
//                                         craft beer labore wes anderson cred nesciunt Leggings occaecat craft beer farm-to-table, raw denim accusamus labore
//                                         sustainable VHS.
//                                     </CardBody>
//                                 </Collapse>{" "}
//                             </Card>
//                             <Card className="mb-1 shadow-none">
//                                 <Link to="#" onClick={toggleCol3} style={{ cursor: "pointer" }} className="text-dark" >
//                                     <CardHeader id="headingThree">
//                                         <h6 className="m-0 font-14">
//                                             Collapsible Group Item #3
//                                             <i className={col3 ? "mdi mdi-minus float-end accor-plus-icon" : "mdi mdi-plus float-end accor-plus-icon"}></i>
//                                         </h6>
//                                     </CardHeader>
//                                 </Link>
//                                 <Collapse isOpen={col3}>
//                                     <CardBody>
//                                         Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute,
//                                         non cupidatat skateboard dolor brunch. Food truck sunt aliqua put a bird on it squid single-origin coffee nulla assumenda anderson
//                                         cred nesciunt
//                                     </CardBody>
//                                 </Collapse>{" "}
//                             </Card>
//                         </div>
//                     </SimpleBar>
//                 </DropdownMenu>
//             </Dropdown>
//         </React.Fragment>
//     );
// };

// export default withNamespaces()(NotificationDropdown);


import React from "react";
import { Accordion } from "react-bootstrap";
import Select from "react-select";

const FindDropdown = ({ optionGroup }) => {
    return (
        <>
            {/* <div className='search-box d-flex justify-content-between'> */}
            <div className=' search-text align-items-center justify-content-between'>
                <p className='product-congif-item-para m-0'>Search for Names, Groups or Projects.</p>
            </div>
            <div className='mx-2'>
                <img src={search_line} alt="" />
            </div>
            {/* </div> */}
            {/* </div> */}
            <Accordion defaultActiveKey="0">
                {optionGroup.map((group, index) => (
                    <Card key={index}>
                        <Accordion.Toggle as={Card.Header} eventKey={index.toString()} style={{ cursor: 'pointer' }}>
                            {group.label}
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey={index.toString()}>
                            <Card.Body>
                                <Select
                                    options={group.options}
                                    isMulti
                                    placeholder={`Select ${group.label}`}
                                />
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                ))}
            </Accordion>
        </>
    );
};

export default FindDropdown;

