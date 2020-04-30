import React from 'react'
import { Link } from 'react-router-dom'

class NavbarTwo extends React.Component {

  state = {
    some: null
  }

  render() {

    return (
      <div className="navbar">
        <Link to="/news/business" className="navbar-item">
          <span>Business</span>
        </Link>
        <Link to="/news/general" className="navbar-item">
          <span>General</span>
        </Link>
        <Link to="/news/sports" className="navbar-item">
          <span>Sports</span>
        </Link>
        <Link to="/news/health" className="navbar-item">
          <span>Health</span>
        </Link>
        <Link to="/news/science" className="navbar-item">
          <span>Science</span>
        </Link>
        <Link to="/news/entertainment" className="navbar-item">
          <span>Entertainment</span>
        </Link>
        <Link to="/news/technology" className="navbar-item">
          <span>Technology</span>
        </Link>
      </div>
    )
  }

}
export default NavbarTwo