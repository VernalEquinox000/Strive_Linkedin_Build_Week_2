import React, { Component } from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import Background from "../Assets/linkedin_bg.jpeg"

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
                        <Col xs={12}>
                            <Card>
                                <Card.Img variant="top" src={Background} style={{ objectFit: "cover", height: "180px" }}/>
                                <Card.Body>
                                    <Card.Text style={{fontSize: "30px", fontWeight:"bolder"}}>{this.state.profile && this.state.profile.name}{' '}
                                        {this.state.profile && this.state.profile.surname}
                                    </Card.Text>
                                    <Card.Text>
                                        {this.state.profile && this.state.profile.title}
                                    </Card.Text>
                                    <Card.Text style={{color: "grey"}}>
                                        {this.state.profile && this.state.profile.area}{'        '} <a href="#" style={{fontWeight:"bolder"}}>129 links</a>
                                </Card.Text>
                                <Card.Text style={{color: "grey"}}>
                                        {this.state.profile && this.state.profile.area}{'        '} <a href="#" style={{fontWeight:"bolder"}}>129 links</a>
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
