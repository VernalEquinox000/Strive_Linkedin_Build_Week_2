import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { Col ,Image} from 'react-bootstrap'
import MyModal from "./MyModal";


class SmallAside extends React.Component{
state= {
    modalShow:false,
}

render(){
    return(
        <>
        
        <Col xs={3}className="pl-4">
        <Image
         src={this.props.obj.image}
          style={{widht:"60px", height:"60px"}} 
          roundedCircle 
          onClick={() => this.setState({ modalShow: true })}
          />
       
        </Col>
        <Col xs={9}>
         <p><b>{this.props.obj.name}</b></p>
        <a className="pr-5">{this.props.obj.title}</a>

       
       
       <FontAwesomeIcon icon={faUserPlus} /> 
            <hr />
        </Col>
        
        <MyModal
        name={this.props.obj.name}
          id={this.props.obj._id}
          surname={this.props.obj.surname}
          company={this.props.obj.company}
          startDate={this.props.obj.startDate}
          endDate={this.props.obj.endDate}
          description= {this.props.obj.description}
          area ={this.props.obj.area}
          username={this.props.obj.username}
          createdAt={this.props.obj.createdAt}
          updatedAt={this.props.obj.updatedAt}
          v={this.props.obj.__v}
          image={this.props.obj.image}
          show={this.state.modalShow}
          onHide={() => this.setState({ modalShow: false })}
        />
        </>
    )
}

}
export default SmallAside