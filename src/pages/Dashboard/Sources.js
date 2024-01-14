import React, {useState } from 'react';
import { Card, CardBody, Col, Row } from "reactstrap";
import "../Add-client/AddClient.css";
import 'react-datepicker/dist/react-datepicker.css';
import GridExample from "./PeopleDataTable";
import AddClient from './AddClient';
import PersonalDetails from './PersonalDetails';
import RegistrationDetails from './RegistrationDetails';
import Documents from './Documents';
import BankDetails from './BankDetails';

// const UserConfiguration = () => {
//   const [key, setKey] = useState("organization");

//   const handleSelect = (selectedKey) => {
//     setKey(selectedKey);
//   };

//   return (
//     <div className="user-configuration">

//   );
// };

// export default UserConfiguration;

const Sources = () => {
    const [isOpen, setIsOpen] = useState(1);
    const onNextPageHandler = () => {
        setIsOpen(isOpen + 1);
    }
    const onCancleHandler = () => {
        setIsOpen(isOpen - 1);
    }

    return (
        <>
            {/* <GridExample />
            <RegistrationDetails />
            <Row>
                <Col md={6}>
                    <DeleteModal />
                    <InternationalModal />
                    <BankModal />
                </Col>
            </Row>


            <div className="col col-md-12 add-client-button">
                <div className="row">
                    <div className="col col-md-6 mb-3">
                        <h3>Add Client</h3>
                    </div>
                    <div className="col col-md-6 mb-3">
                        <button className="save-button" onClick={handleButtonClick}>Save</button>
                        <button className="cancel-button">Cancel</button>
                    </div>
                </div>
            </div>


            <PersonalDetails />
            <Documents />
            <BankDetails /> */}


            {isOpen === 1 && <AddClient onAddClientHandler={onNextPageHandler} />}
            {isOpen === 2 && <div className="col col-md-12 add-client-button">
                <div className="row">
                    <div className="col col-md-12 mb-3">
                        <button className="save-button" onClick={onNextPageHandler}>Save</button>
                        <button className="cancel-button" onClick={onCancleHandler}>Cancel</button>
                    </div>

                </div>
                <PersonalDetails />
            </div>}
            {
                isOpen === 3 && <div className="col col-md-12 add-client-button">
                    <div className="row">
                        <div className="col col-md-12 mb-3">
                            <button className="save-button" onClick={onNextPageHandler}>Save</button>
                            <button className="cancel-button" onClick={onCancleHandler}>Cancel</button>
                        </div>

                    </div>
                    < RegistrationDetails />
                </div>
            }
            {
                isOpen === 4 && <div className="col col-md-12 add-client-button">
                    <div className="row">
                        {/* <div className="col col-md-12 mb-3">
                            <h3>Add Client</h3>
                        </div> */}
                        <div className="col col-md-12 mb-3">
                            <button className="save-button" onClick={onNextPageHandler}>Save</button>
                            <button className="cancel-button" onClick={onCancleHandler}>Cancel</button>
                        </div>

                    </div>
                    < Documents />
                </div>
            }

            {
                isOpen === 5 && <div className="col col-md-12 add-client-button">
                    <div className="row">
                        <div className="col col-md-6 mb-3">
                            <h3>Add Client</h3>
                        </div>
                        <div className="col col-md-6 mb-3">
                            <button className="save-button" onClick={onNextPageHandler}>Save</button>
                            <button className="cancel-button" onClick={onCancleHandler}>Cancel</button>
                        </div>

                    </div>
                    < BankDetails />

                </div>
            }
            {
                isOpen === 6 && <div className="col col-md-12 add-client-button">
                    <div className="row">
                        <div className="col col-md-6 mb-3">
                            <h3>Add Client</h3>
                        </div>
                        <div className="col col-md-6 mb-3">
                            <button className="save-button" onClick={onNextPageHandler}>Save</button>
                            <button className="cancel-button" onClick={onCancleHandler}>Cancel</button>
                        </div>

                    </div>

                    <GridExample />
                </div>
            }

        </>
    )
}

export default Sources;