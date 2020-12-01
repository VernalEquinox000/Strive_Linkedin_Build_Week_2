import React, { Component } from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
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

        const { profile } = this.state
        
        if (!profile) return <></>

        const { name, surname, title, area, bio } = profile
        
        return (
            <div>
                {
                    this.state.profile &&
                    <Container>
                    <Row>
                        <Col xs={12}>
                            <Card>
                                <Card.Img variant="top" src={Background} style={{ objectFit: "cover", height: "180px" }}/>
                                <Card.Body className="position-relative">
                                    <img src="http://picsum.photos/300" className="position-absolute" style={{
                                            top: "-75px", width: "150px", borderRadius: "100px",
                                        }}/>
                                    <Card.Text style={{ fontSize: "30px", fontWeight: "bolder", paddingTop:"100px"}}>
                                        {`${name} ${surname}`}
                                    </Card.Text>
                                    <Card.Text>
                                        {title}
                                    </Card.Text>
                                    <Card.Text style={{color: "grey"}}>
                                        {area}
                                        {'        '}
                                        <a href="#" style={{ fontWeight: "bolder" }}>129 links</a>{'  |  '} Strive School 
                                    </Card.Text>
                                        <Button variant="primary">Connect</Button>{' '}
                                    <Card.Text>
                                            {`${bio}`}
                                    </Card.Text>
                                        
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
                }
            </div>
        )
    }
}
