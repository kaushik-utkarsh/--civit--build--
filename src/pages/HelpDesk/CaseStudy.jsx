import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import fourth_img from "../../assets/images/Rectangle 346242641.svg";
import second_img from "../../assets/images/Rectangle 34624264.svg";
import third_img from "../../assets/images/Frame 1410088403.svg";
import './HelpDesk.css';
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators } from "reactstrap";

function BasicExample() {
    return (
        <>
            <div className='d-flex justify-content-between'>
                <Card className='case-study-cards' >
                    <Card.Img variant="top" className='case-study-img' src={fourth_img} />
                    <Card.Body>
                        <Card.Title className='case-study-cards-title'>CivitBUILD implementation Case Study – Al Hikma</Card.Title>
                        <p className='py-2'>
                            Case Studies
                        </p>
                        <Card.Text className='case-study-cards-description'>
                            Organization: Al Hikma Industry: Infrastructure development...
                        </Card.Text>
                        {/* <Button variant="primary">Go somewhere</Button> */}
                    </Card.Body>
                </Card>
                <Card className='case-study-cards' >
                    <Card.Img variant="top" className='case-study-img' src={second_img} />
                    <Card.Body>
                        <Card.Title className='case-study-cards-title'>CivitBUILD implementation Case Study – Pandhe Group</Card.Title>
                        <p className='py-2'>
                            Case Studies
                        </p>
                        <Card.Text className='case-study-cards-description'>
                            Organization: Al Hikma Industry: Infrastructure development...
                        </Card.Text>
                        {/* <Button variant="primary">Go somewhere</Button> */}
                    </Card.Body>
                </Card>
                <Card className='case-study-cards' >
                    <Card.Img variant="top" className='case-study-img' src={third_img} />
                    <Card.Body className='mb-0'>
                        <Card.Title className='case-study-cards-title'>CivitBUILD implementation Case Study – DNV Builders</Card.Title>
                        <p className='py-2'>
                            Case Studies
                        </p>
                        <Card.Text className='case-study-cards-description'>
                            Organization: Pandhe Infracon Pvt Limited, Mumbai Industry:...
                        </Card.Text>
                        {/* <Button variant="primary">Go somewhere</Button> */}
                    </Card.Body>
                </Card>
                <Card className='case-study-cards' >
                    <Card.Img variant="top" className='case-study-img' src={third_img} />
                    <Card.Body>
                        <Card.Title className='case-study-cards-title'>CivitBUILD implementation Case Study – DNV Builders</Card.Title>
                        <p className='py-2'>
                            Case Studies
                        </p>
                        <Card.Text className='case-study-cards-description'>
                            Organization: DNV Builders, Mumbai Industry:...
                        </Card.Text>
                        {/* <Button variant="primary">Go somewhere</Button> */}
                    </Card.Body>
                </Card>
            </div>
        </>
    );
}

export default BasicExample;