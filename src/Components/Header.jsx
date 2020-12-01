import React, { Component } from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import Background from "../Assets/linkedin_bg.jpeg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import Aside from "./Aside"
import EditModalProfile from './EditModalProfile'
export default class Header extends Component {

    state = {
        profile: null,
        editShow:false,
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

        const { name, surname, title, area, bio, image } = profile
        
        return (
            <div>
                {
                    this.state.profile &&
                    <Container>
                    <Row>
                        <Col xs={8}>
                            <Card>
                                <Card.Img variant="top" src={Background} style={{ objectFit: "cover", height: "180px" }}/>
                                <Card.Body className="position-relative">
                                    <img src={image} className="position-absolute" style={{
                                            top: "-75px", width: "150px", borderRadius: "100px",
                                        }}/>
                                    <Card.Text style={{ fontSize: "30px", fontWeight: "bolder", paddingTop:"100px"}}>
                                        {`${name} ${surname}`} <FontAwesomeIcon icon={faEdit} onClick={() => this.setState({ editShow: true })} /> 
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
                                </Card.Body>
                                </Card>
                                <Card  className="mt-5">
                                    <Card.Body>
                                        <Card.Text style={{ fontSize: "30px", fontWeight: "bolder",}}>
                                        About
                                        </Card.Text>

                                        <Card.Text>
                                            {`${bio}`}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                        </Col>
                        <Col xs={4}>
                            <Aside />
                        </Col>
                    </Row>
                    <EditModalProfile obj={this.state.profile} 
                    show={this.state.editShow}
                    onHide={() => this.setState({ editShow: false })}
                    
                    />
                </Container>
                }
            </div>
        )
    }
}
