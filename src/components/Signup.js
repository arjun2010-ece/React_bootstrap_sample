import React, { Component, Fragment } from 'react'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Alert from 'react-bootstrap/Alert'
import Spinner from 'react-bootstrap/Spinner'
import { Link } from 'react-router-dom'


class Signup extends Component {
 constructor(props) {
  super(props);
  this.state = {
    uid: '',
    name: '',
    email: '',
    UIDError: null,
    errors: null,
    redirect: false,
    isLoading: false
  };
}
 render() {
  return (
   <Fragment>
     <Row
        className='w-50 mt-5'
        style={{
         margin: '0 auto'
       }}>
      <Col>
      <Alert variant='danger'>
            <ul>
              Signup Error is displayed here....
            </ul>
       </Alert>

       <Form>
        <Form.Group controlId='username'>
             <Form.Label>User ID</Form.Label>
             <Form.Control
               required
               type='text'
               name='uid'
               placeholder='Choose a username'
             />
          </Form.Group>

          <Form.Group controlId='display-name'>
                <Form.Label>Name</Form.Label>
                <Form.Control
                  required
                  type='text'
                  name='name'
                  placeholder='What is your name?'
                />
          </Form.Group>

          <Form.Group controlId='email'>
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  required
                  type='email'
                  name='email'
                  placeholder='Your email address'
                />
          </Form.Group>

          <Button disabled={false} variant='primary' type='submit' className='btn-block'>
             <Spinner
                  as='span'
                  animation='border'
                  size='sm'
                  role='status'
                  aria-hidden='true'
                    />
                    Please wait...
          </Button>

          <p className='pt-3'>
                Already have an account? <Link to='/login'>Login</Link>
          </p>
       </Form>
      </Col> 
     </Row>
   </Fragment>
  )
 }
}
export default Signup;