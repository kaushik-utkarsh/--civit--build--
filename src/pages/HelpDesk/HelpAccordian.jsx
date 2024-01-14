import React, { useState } from "react";
import { Card, CardBody, CardHeader, Collapse, Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import question_mark from "../../assets/images/question-line.svg";
import Waterfall from "../../assets/images/Waterfall.svg";
import File_dock from "../../assets/images/File_dock.svg";
import carbon_id from "../../assets/images/carbon_id-management.svg";
import safety from "../../assets/images/safety.svg";
import Svg from "../../components/Common/DropDownSvg"

const UiTabsAccordions = () => {
    const [col1, setCol1] = useState(true);
    const [col2, setCol2] = useState(false);
    const [col3, setCol3] = useState(false);
    const [breadcrumbItems] = useState([
        { title: "UI Elements", link: "#" },
        { title: "Tabs & Accordions", link: "#" },
    ]);
    const LeftItems = [
        {
            img: question_mark,
            text: 'FAQs'
        },
        {
            img: Waterfall,
            text: 'Bid Management'
        },
        {
            img: File_dock,
            text: 'Progress, Billing & Invoicing'
        },
        {
            img: carbon_id,
            text: 'Change Event Management'
        },
        {
            img: safety,
            text: 'Project Site Safety'
        },
    ]
    const RightItems = [
        {
            question: 'How can I add my colleagues to CivitBUILD?',
            answer: "How can I add my colleagues to CivitBUILD? hghjghjghjghjhghjghjxhgwhcghjcgwhjcgwjcgjhcw",
        },
        {
            question: 'How to manage and track payments for the invoices ? ',
            answer: "How to manage and track payments for the invoices ? hello thsi is 2nd answer",
        },
        {
            question: 'How to manage and track payments for the invoices ? ',
            answer: "In a bill, is it possible to edit the quantities that are imported from the field progress information?",
        },
    ]

    const toggleCollapse = (index) => {
        switch (index) {
            case 0:
                setCol1(!col1);
                setCol2(false);
                setCol3(false);
                break;
            case 1:
                setCol2(!col2);
                setCol1(false);
                setCol3(false);
                break;
            case 2:
                setCol3(!col3);
                setCol1(false);
                setCol2(false);
                break;
            default:
                break;
        }
    };

    return (
        <>
            <div className="">
                <Container fluid>
                    <Row>
                        <Col xl={4} md={4}>
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
                        <Col xl={8} md={8}>
                            <h4 className="card-title">FAQs</h4>
                            <p className="card-title-desc"></p>
                            <div id="accordion">
                                {RightItems.map((item, index) => (
                                    <Card key={index} className="mb-1 shadow-none questions-help">
                                        <Link
                                            to="#"
                                            onClick={() => toggleCollapse(index)}
                                            style={{ cursor: "pointer" }}
                                            className="text-dark"
                                        >
                                            <CardHeader id={`heading${index}`}>
                                                <div className="d-flex justify-content-between">
                                                    <h6 className="m-0 font-14">
                                                        {item.question}
                                                    </h6>
                                                    <Svg id={index} isOpen={col1} style={{
                                                        // position: '',
                                                        right: '154px',
                                                        top: '46%',
                                                        pointerEvents: 'none',
                                                    }} />
                                                </div>
                                            </CardHeader>
                                        </Link>
                                        <Collapse isOpen={index === 0 ? col1 : index === 1 ? col2 : col3} className="answer-help">
                                            <CardBody>
                                                {item.answer}
                                            </CardBody>
                                        </Collapse>
                                    </Card>
                                ))}
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default UiTabsAccordions;

