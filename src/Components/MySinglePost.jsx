import React from 'react'
import { Col } from 'react-bootstrap'

class MySinglePost extends React.Component {


    render(){
        return(
            <Col>{this.props.obj.text}</Col>
        )
    }
}
export default MySinglePost