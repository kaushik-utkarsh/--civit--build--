import React from 'react';
import { Card, ListGroup, ListGroupItem, Container, Row, Col } from 'react-bootstrap';

function SearchForFunctions() {
 return (
    <Container>
      <Row>
        <Col md={4}>
          <Card>
            <Card.Header>Add User</Card.Header>
            <ListGroup className="list-group-flush">
              <ListGroupItem>
                User Information: Full Name, Username, Password, Confirm Password
              </ListGroupItem>
              <ListGroupItem>User Contact Details: Phone Number, Email Address</ListGroupItem>
              <ListGroupItem>User Access Control: Roles, Permissions</ListGroupItem>
            </ListGroup>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Header>Add Role</Card.Header>
            <ListGroup className="list-group-flush">
              <ListGroupItem>Role Information: Role Name, Role Description</ListGroupItem>
              <ListGroupItem>Role Access Control: Permissions</ListGroupItem>
            </ListGroup>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Header>Add Company</Card.Header>
            <ListGroup className="list-group-flush">
              <ListGroupItem>Company Information: Company Name, Company Description</ListGroupItem>
              <ListGroupItem>Company Access Control: Users, Roles, Permissions</ListGroupItem>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </Container>
 );
}

export default SearchForFunctions;