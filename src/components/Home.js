import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Home extends Component {
 render() {
  return (
   <div>
      <Link to="/signup" className="mr-2">Signup</Link>
      <Link to="/login" className="mr-2">Login</Link>
      <Link to="/chat" className="mr-2">Chat</Link>
   </div>
  )
 }
}
