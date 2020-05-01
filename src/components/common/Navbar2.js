import React from 'react'
import { Link } from 'react-router-dom'
class NavbarTwo extends React.Component {
  handleClick = () => {
  }
  render() {
    return (
      <div className="navbar navbar-two">
        <Link to="/news/business" className="navbar-item business">
          <span>Business</span>
        </Link>
        <Link to="/news/general" className="navbar-item general">
          <span>General</span>
        </Link>
        <Link to="/news/sports" className="navbar-item sports">
          <span>Sports</span>
        </Link>
        <Link to="/news/health" className="navbar-item health">
          <span>Health</span>
        </Link>
        <Link to="/news/science" className="navbar-item science">
          <span>Science</span>
        </Link>
        <Link to="/news/entertainment" className="navbar-item entertainment">
          <span>Entertainment</span>
        </Link>
        <Link to="/news/technology" className="navbar-item technology">
          <span>Technology</span>
        </Link>
      </div>
    )
  }
}
export default NavbarTwo