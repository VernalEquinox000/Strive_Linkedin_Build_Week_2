import React, { Component } from "react";
import { Form, Button, Container, Row, Col, Modal } from "react-bootstrap";

import {AddPost ,UploadMyPhotoPost} from '../Api/post'
export default class AddMPostodal extends Component {
  state={
    body:null,
    data:this.props.object,
    ModalShow:false,
    file:null,
  }
  
  handleChange = (e) => {
    this.setState({
      body: {
        ...this.state.body,
        [e.target.id]: e.target.value,
      },
    });
  };
  handleSubmit = async (e) => {
    e.preventDefault();
    console.log(AddPost);
    AddPost(this.state.body);
    
  };
  
  handleFile(e){

    let file = e.target.files[0]

    this.setState({file})
}
handleUpload(e){
   let file = this.state.file

   let formData = new FormData()

   formData.append('post',file)
   formData.append('name',"Enis")
   console.log(this.props)

   UploadMyPhotoPost(this.props.postId._id,formData)

}

  render() {
    return (
      <>


        <Modal
          {...this.props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Edit
              <Container>
                <Row>
                  <Col>
                    <Form onSubmit={this.handleSubmit}>
                      <Form.Group>
                        <Row>
                          <Col>

                            <Form.Label>CreatePost</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="write..."
                              required
                              id="text"

                           

                            
                              onChange={this.handleChange}
                            />
                          </Col>
              
                        </Row>
                      </Form.Group>
                      <form>

                    <div className="">
                        <label>Select File</label>
                        <input type="file" name="file" onChange={(e)=>this.handleFile(e)} />

                    </div>
                    <button type="button" onClick={(e)=>this.handleUpload(e)}>Upload</button>
                       </form>

                
              
              

                      <Button variant="primary" type="submit">
                        Submit
                      </Button>
                    </Form>
                  </Col>
                </Row>
              </Container>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body></Modal.Body>
          <Modal.Footer>
            <Button onClick={this.props.onHide}>Close</Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}
