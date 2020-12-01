import React from 'react'
import { Col, Container, Row, Image } from 'react-bootstrap'
import "./aside.css"

import SmallAside from "./SmallAside"

class Aside extends React.Component{
    "https://striveschool-api.herokuapp.com/api/profile/"

    state={
        profiles:[],
        profiles2:[],
    }

    fetchProfile = async () => {
        try {
            const url =  "https://striveschool-api.herokuapp.com/api/profile/"
            const response = await fetch(url, {
                headers: {
                    Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
                }
            });
        
            const data = await response.json()

            this.setState({ profiles: data.slice(0,6) })
            this.setState({profiles2:data.slice(10,16)})
            
            

    
  
  
          }  catch(error) {
                  console.log(error);
                }
            }

    componentDidMount() {
        this.fetchProfile();
    }
   
    render(){
        console.log(this.state.profiles)
        console.log(this.state.profiles2)
        return(
                <>
                <Container>
                <Row>
                 



                    <Col >
                <div className="box1">
                <Image src="http://placehold.jp/350x350.png" className="img-fluid"/>
                </div>
                <div className="box">
                   
                <h3 className="pl-4 mb-5">Peope you may know</h3>
                    <Row>
                    {this.state.profiles.map((profile2)=>(
                            <SmallAside obj={profile2} />
                        ))}

                    {/* <Col xs={3} className="pl-4">
                    <Image src="http://placehold.jp/60x60.png" roundedCircle />
                   
                    </Col>
                    <Col xs={7}>
                     <p><b>Manuel</b></p>
                    <a className="mr-4">Full stack Delevoper</a>

                   
                   
                    <FontAwesomeIcon icon={faUserPlus} />
                        <hr />
                    </Col>
                    <Col xs={3}className="pl-4">
                    <Image src="http://placehold.jp/60x60.png" roundedCircle />
                    
                    </Col>
                    <Col xs={9}>
                     <p><b>Manuel</b></p>
                    <a>Full stack Delevoper</a>
                   
                   
                    <FontAwesomeIcon icon={faUserPlus} />
                        <hr />
                    </Col>
                    <Col xs={3}className="pl-4">
                    <Image src="http://placehold.jp/60x60.png" roundedCircle />
                   
                    </Col>
                    <Col xs={9}>
                     <p><b>Manuel</b></p>
                    <a>Full stack Delevoper</a>
                   
                   
                    <FontAwesomeIcon icon={faUserPlus} />
                       
                    </Col>  */}
                    </Row>
                    <p className="borderup d-flex justify-content-center">Show More</p>
                </div>
                <div className="box">




                    
                    <h3 className="pl-4 mb-5">People aslo viewed</h3>
                    <Row>
                        {this.state.profiles.map((profile)=>(
                            <SmallAside obj={profile} />
                        ))}
                    {/* <Col xs={3}className="pl-4">
                    <Image src="http://placehold.jp/60x60.png" roundedCircle />
                   
                    </Col>
                    <Col xs={9}>
                     <p><b>Manuel</b></p>
                    <a>Full stack Delevoper</a>

                   
                   
                    <FontAwesomeIcon icon={faUserPlus} />
                        <hr />
                    </Col>
                    <Col xs={3}className="pl-4">
                    <Image src="http://placehold.jp/60x60.png" roundedCircle />
                   
                    </Col>
                    <Col xs={9}>
                     <p><b>Manuel</b></p>
                    <a>Full stack Delevoper</a>
                   
                   
                    <FontAwesomeIcon icon={faUserPlus} />
                        <hr />
                    </Col>
                    
                    <Col xs={3}className="pl-4">
                    <Image src="http://placehold.jp/60x60.png" roundedCircle />
                   
                    </Col>
                    <Col xs={9}>
                     <p><b>Manuel</b></p>
                    <a>Full stack Delevoper</a>
                   
                   
                    <FontAwesomeIcon icon={faUserPlus} />
                        
                    </Col>
                     */}
                
                  
               
                    </Row>
                   
                    <p className="borderup d-flex justify-content-center">Show More</p>
                </div>
                </Col>
                </Row>
                </Container>
                </>
        )
    }
}

export default Aside