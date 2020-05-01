import React from 'react'
import { Link } from 'react-router-dom'
class Navbar extends React.Component {
  state = {
    some: null
  }
  render() {
    return (
      <div className="navbar">
        <Link to="/" className="navbar-item">
          <span>Home</span>
        </Link>
        <Link to="/news" className="navbar-item">
          <span>News</span>
        </Link>
        <Link to="/weather" className="navbar-item">
          <span>Weather</span>
        </Link>
      </div>
    )
  }
}
export default Navbar