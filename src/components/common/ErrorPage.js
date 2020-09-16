import React from 'react'
import Navbar from './Navbar'

const ErrorPage = () => {
  return (
    <>
      <Navbar />
      <h1 className="error-page">Something went wrong</h1>
      <p className="error-message"> This API was restricted on deployment. Please visit <a href="https://github.com/EdwardGillard/SEI-project-two">https://github.com/EdwardGillard/SEI-project-two</a>, clone the repository and run using yarn start.</p>
    </>
  )
}




export default ErrorPage