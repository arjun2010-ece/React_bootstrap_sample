import React, { Component, Fragment } from 'react';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import Spinner from 'react-bootstrap/Spinner';
import { Link } from 'react-router-dom';


class Login extends Component {
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
              Login Error is displayed here....
            </ul>
       </Alert>

       <Form>
        <Form.Group controlId='username'>
             <Form.Label>Username</Form.Label>
             <Form.Control
               required
               type='text'
               name='uid'
               placeholder='Enter a username'
             />
          </Form.Group>

          <Form.Group controlId='password'>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  required
                  type='password'
                  name='password'
                  placeholder='Enter password'
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
                    Please wait for the login btn...
          </Button>

          <p className='pt-3'>
                Don't have an account? <Link to='/signup'>Create One</Link>
          </p>
       </Form>
      </Col> 
     </Row>
   </Fragment>
  )
 }
}
export default Login;