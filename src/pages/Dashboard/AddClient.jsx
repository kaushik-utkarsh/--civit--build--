import React, { useState } from 'react';
import { Card, CardBody, Row, Container } from "reactstrap";
import "../../App-new.css";
import 'react-datepicker/dist/react-datepicker.css';
import Breadcrumbs from '../../components/Common/Breadcrumb';
import customer from '../../assets/images/customer-relationship-management-rafiki.png'
import LogicForMovement from './Logic';
import Loading from './Loading';

const AddClient = () => {

  const [isOpen, setIsOpen] = useState(false);

  const handleButtonClick = () => {
    // onAddClientHandler()
    setIsOpen(true);
  };
  const data = {
    breadcrumbItems: [
      { title: "Product Config", link: "/" },
      { title: "Stakeholder Configuration", link: "#" },
      { title: "Client", link: "/" },
      { title: "Liberty Tower", link: "/" },
    ],
    reports: [
      { icon: "ri-stack-line", title: "Number of Sales", value: "1452", rate: "2.4%", desc: "From previous period" },
      { icon: "ri-store-2-line", title: "Sales Revenue", value: "$ 38452", rate: "2.4%", desc: "From previous period" },
      { icon: "ri-briefcase-4-line", title: "Average Price", value: "$ 15.4", rate: "2.4%", desc: "From previous period" },
    ]
  }

  return (
    <>
      <div className="d-flex justify-content-center">
        {/* Use Bootstrap Grid System */}
        <div className="col-12 col-md-12 col-lg-12 pt-5 mt-5">
          {!isOpen &&
            <Container fluid>
              <Breadcrumbs title="Client" breadcrumbItems={data} />
              <Card style={{ padding: '5rem', borderRadius: '0', marginTop: "3rem" }}>
                <CardBody>
                  <div>
                    <Row>
                      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Loading />
                        <div>
                          <img src={customer} style={{ width: 397, height: 296 }} alt="Customer" />
                        </div>
                        <div style={{ marginLeft: '20px' }}>
                          <h4><strong>Add Your First Client!</strong></h4>
                          <p>Fill client details to streamline client management.</p>
                          <button className='add-client-page'
                            onClick={handleButtonClick}
                          >
                            <span style={{ marginRight: '10px', paddingLeft: '0px' }}>+</span> Add Client
                          </button>
                        </div>
                      </div>
                    </Row>
                  </div>

                </CardBody>
              </Card>
            </Container>}
          {isOpen && <LogicForMovement />
          }
        </div>
      </div >

    </>

  );
}

export default AddClient