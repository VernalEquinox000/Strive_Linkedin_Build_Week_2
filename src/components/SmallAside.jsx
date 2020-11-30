import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { Col ,Image} from 'react-bootstrap'
import { Link } from 'react-router-dom'

class SmallAside extends React.Component{


render(){
    return(
        <>
        
        <Col xs={3}className="pl-4">
        <Image src={this.props.obj.image} style={{widht:"60px", height:"60px"}} roundedCircle />
       
        </Col>
        <Col xs={9}>
         <p><b>{this.props.obj.name}</b></p>
        <a className="pr-5">{this.props.obj.title}</a>

       
       
       <FontAwesomeIcon icon={faUserPlus} /> 
            <hr />
        </Col>
        </>
    )
}

}
export default SmallAside