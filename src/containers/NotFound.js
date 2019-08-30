import React from 'react'
import { Link } from 'react-router-dom'
const NotFound = () => (
  <>
    <h1>Not found</h1>
    <Link to='/'>
      <span>Go to home</span>
    </Link>
  </>
)

export default NotFound
