import React, { Component } from "react";
import { BsPencil } from "react-icons/bs";

import {AiOutlineDelete} from 'react-icons/ai'
import { Col, Row, Button } from "react-bootstrap";
import {DeleteExperieces} from"../Api/experiences";
import EditExpModal from './EditExpModal'
export default class SingleExperience extends Component {
    state={
    
        editShow: false,
        
    }

  DeleteExp = async ()=>{
  
     const deleted = await DeleteExperieces(this.props.userId,this.props.exp._id)
    

   
  }




  render() {
    return (
      <div className="listItem">
        <Row>
          <Col className="pr-0">
            <img
              src="https://media-exp1.licdn.com/dms/image/C560BAQG6wKVXF9sMfg/company-logo_100_100/0?e=1614816000&v=beta&t=4B6v3D5AWcZN_TIL-mhM6tAkst2721kRR00SNwqy7Ys"
              alt=""
              style={{ width: "56px", height: "56px" }}
            />
          </Col>
          <Col
            className="pl-0 expDescription pb-3 d-flex justify-content-between"
            xl="11"
          >
            <div>
              <h6>sexy beast management</h6>

              <span>{this.props.exp.area}</span>

              <span>12 anni 7 mesi</span>
              <br />
              <span>Los Angeles</span>
            </div>

            <Button className=" expBtn" onClick={()=>this.setState({editShow:true})}>

              <BsPencil
                className=" d-inline-block"
                style={{ fontSize: "20px", color: "blue" }}
              />
            </Button>

            <Button className=" expBtn" onClick={()=>this.DeleteExp()}>
              <AiOutlineDelete
                className=" d-inline-block"
                style={{ fontSize: "20px", color: "blue" }}

              />
            </Button>
          </Col>
        </Row>
       <EditExpModal object={this.props.exp}
            userid={this.props.userdId}
          show={this.state.editShow}
          onHide={() => this.setState({ editShow: false })}/>

      </div>
    );
  }
}
