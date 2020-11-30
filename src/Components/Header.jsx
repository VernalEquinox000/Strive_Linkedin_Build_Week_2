import React, { Component } from 'react'
import {Container, Row, Col, Card} from 'react-bootstrap'

export default class Header extends Component {

    state = {
        profile: null
    };

    

    fetchProfile = async () => {
        try {
            const url = "https://striveschool-api.herokuapp.com/api/profile/me"
            const response = await fetch(url, {
                headers: {
                    Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
                }
            });
        
            const data = await response.json()

            this.setState({ profile: data })
        
            console.log(data);
            

            console.log(this.state.profile)

            console.log(this.state.profile.username)
            
            
        } catch (err) {
            console.log(err);
        }
    };

    componentDidMount() {
        this.fetchProfile();
    }

    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col>
                            <Card>
                                <Card.Img variant="top" src={this.state.profile && this.state.profile.image} />
                                <Card.Body>
                                <Card.Text>
                                </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
