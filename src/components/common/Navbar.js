import React from 'react'
import { Link } from 'react-router-dom'
class Navbar extends React.Component {
  state= {
    some: null
  }
  render() {
    return (
      <div className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item">
            <span>Home
            </span>
          </Link>
          <Link to="/news" className="navbar-item">
            <span>News</span>
          </Link>
        </div>
      </div>
    )
  }
}
export default Navbar