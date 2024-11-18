import React from 'react';
import axios from 'axios';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';

class PersonList extends React.Component {
    state = {
        persons: []
    };

    componentDidMount() {
        axios.get('https://randomuser.me/api/?results=10')
            .then(res => {
                const persons = res.data.results;
                this.setState({ persons });
            })
            .catch(err => console.error(err));
    }

    render() {
        return (
            <Container>
                {/* Green rectangular box for "User List" title */}
                <div style={{
                    backgroundColor: 'green',
                    color: 'white',
                    padding: '10px',
                    textAlign: 'center',
                    borderRadius: '5px',
                    marginBottom: '20px'
                }}>
                    <h2>User List</h2>
                </div>

                {this.state.persons.map((person, index) => (
                    <Card key={index} className="my-3 p-3" style={{ backgroundColor: '#009688', color: '#FFFFFF' }}>
                        <Row>
                            <Col md={3} className="d-flex justify-content-center">
                                <Card.Img
                                    variant="top"
                                    src={person.picture.large}
                                    alt={`${person.name.first} ${person.name.last}`}
                                    className="rounded-circle"
                                    style={{ width: '150px', height: '150px', objectFit: 'cover' }}
                                />
                            </Col>
                            <Col md={9}>
                                <Card.Body>
                                    <Card.Title>
                                        {person.name.title} {person.name.first} {person.name.last} - {person.login.uuid}
                                    </Card.Title>
                                    <Card.Text><strong>User Name:</strong> {person.login.username}</Card.Text>
                                    <Card.Text><strong>Gender:</strong> {person.gender.toUpperCase()}</Card.Text>
                                    <Card.Text><strong>Time Zone Description:</strong> {person.location.timezone.description}</Card.Text>
                                    <Card.Text><strong>Address:</strong> {`${person.location.street.number} ${person.location.street.name}, ${person.location.city}, ${person.location.state}, ${person.location.country} - ${person.location.postcode}`}</Card.Text>
                                    <Card.Text><strong>Email:</strong> {person.email}</Card.Text>
                                    <Card.Text><strong>Birth Date and Age:</strong> {`${person.dob.date} (${person.dob.age})`}</Card.Text>
                                    <Card.Text><strong>Register Date:</strong> {person.registered.date}</Card.Text>
                                    <Card.Text><strong>Phone#:</strong> {person.phone}</Card.Text>
                                    <Card.Text><strong>Cell#:</strong> {person.cell}</Card.Text>
                                    <Button variant="primary">Details</Button>
                                </Card.Body>
                            </Col>
                        </Row>
                    </Card>
                ))}
            </Container>
        );
    }
}

export default PersonList;