import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import React, { Component } from 'react';
import ModalContactForm from './ModalContactForm'
export class Example extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false,
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {
    return (
      <>
      
           <button type="button" className="btn btn-orange btn-lg mt-3" onClick={this.handleShow}>Book a call</button>
      

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Book a call</Modal.Title>
            
          </Modal.Header>
          <Modal.Body>
          <div>
          <div id="modalUserMessage"></div>
          </div>
          <ModalContactForm />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
           
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default Example