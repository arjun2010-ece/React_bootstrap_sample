import React, { Component } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
class Chat extends Component {
 render() {
  return (
   <div className='bg-danger page'
    style={{ height: '97vh', overflowX: 'hidden' }}>
    <Row>
      <Col>
       <Container>
       <div className='bg-success d-flex align-items-center justify-content-between'>
         <h3 className='text-center py-3'>
           React Anonymous Chat
         </h3>
         <Button variant='outline-primary' className="mr-3">
           Logout
         </Button>
       </div>
       <ul className='list-group' style={{ marginBottom: '60px' }}>
         <div className='text-center mt-2 pt-2'>
           <p className='text-primary lead text-center'>Fetching Messages</p>
         </div>
       </ul>
       </Container>
     </Col>
    </Row>

    <Navbar>
        <Container>
          <Form
            inline
            className='w-100 d-flex justify-content-between align-items-center'
          >
            <Form.Group style={{ flex: 1 }}>
              <Form.Control
                style={{ width: '75%' }}
                type='text'
                placeholder='Type Message here...'
              />
            </Form.Group>
            <Button variant='primary' type='submit'>
              Send
            </Button>
          </Form>
        </Container>
        </Navbar>
   </div>
  )
 }
}
export default Chat;