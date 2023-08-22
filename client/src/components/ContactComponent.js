import React, {useState} from 'react';
import {Breadcrumb, BreadcrumbItem, Button, Form, FormGroup, Label, Input, Col} from "reactstrap";

function Contact(props) {
  const initialFormState={
    firstname:'',
    lastname:'',
    telnum:'',
    email:'',
    agree:false,
    contactType:'Tel',
    message:''
  };
  const [formData, setFormData]=useState(initialFormState);

  const handleInputChange=(e)=>{
    // console.log(e.target.value);
    var value;
    if(e.target.type==="checkbox"){
      value=e.target.checked
    }else{
      value = e.target.value
    }
    setFormData({
      ...formData,
      [e.target.name]:value
    });
  };
  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="container">
      <div className="row row-content">
        <div className="col-12">
          <h3>Location Information</h3>
        </div>
        <div className="col-12 col-sm-4 offset-sm-1">
          <h5>Our Address</h5>
          <address>
            121, Clear Water Bay Road<br />
            Clear Water Bay, Kowloon<br />
            HONG KONG<br />
            <i className="fa fa-phone"></i>: +852 1234 5678<br />
            <i className="fa fa-fax"></i>: +852 8765 4321<br />
            <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
          </address>
        </div>
        <div className="col-12 col-sm-6 offset-sm-1">
          <h5>Map of our Location</h5>
        </div>
        <div className="col-12 col-sm-11 offset-sm-1">
          <div className="btn-group" role="group">
            <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
            <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
            <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
          </div>
        </div>
      </div>
      <div className='row row-content'>
        <div className='col-12 col-md-9'>
          <h3>Send us your Feedback</h3>
        </div>
        <div className='col-12 col-md-9'>
          <Form onSubmit={handleSubmit}>
            <FormGroup row>
              <Label htmlFor='firstname' md={2}>
                First Name
              </Label>
              <Col md={10}>
                <Input required type='text' id='firstname' name="firstname" placeholder="First Name" value={formData.firstname} onChange={handleInputChange}/>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label htmlFor='lastname' md={2}>
                Last Name
              </Label>
              <Col md={10}>
                <Input required type='text' id='lastname' name="lastname" placeholder="Last Name" value={formData.lastname} onChange={handleInputChange}/>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label htmlFor='telnum' md={2}>
                Contact Tel.
              </Label>
              <Col md={10}>
                <Input required type='tel' id='telnum' name="telnum" placeholder="Contact Tel." value={formData.telnum} onChange={handleInputChange}/>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label htmlFor='email' md={2}>
                Email
              </Label>
              <Col md={10}>
                <Input required type='email' id='email' name="email" placeholder="Email" value={formData.email} onChange={handleInputChange}/>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col md={{size:6, offset:2}}>
                <FormGroup check>
                  <Label check>
                    <Input type="checkbox" name="agree" checked={formData.agree} onChange={handleInputChange}/>
                    <strong>May we Contact you?</strong>
                  </Label>
                </FormGroup>
              </Col>
              <Col md={{size:3, offset:1}}>
                <Input type="select" name="contactType" value={formData.contactType} onChange={handleInputChange}>
                  <option>Tel.</option>
                  <option>Email</option>
                </Input>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label htmlFor='message' md={2}>
                Message
              </Label>
              <Col md={10}>
                <Input required type="textarea" id="message" name="message" rows={12} value={formData.message} onChange={handleInputChange}/>
              </Col>
            </FormGroup> 
            <FormGroup row>
              <Col md={{size:10, offset:2}}>
                <Button type="submit" color='primary'>Send Feedback</Button>
              </Col>
            </FormGroup>           
          </Form>
        </div>
      </div>
    </div>
  );
}
export default Contact;