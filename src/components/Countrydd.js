import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export class Countrydd extends Component {
  render() {
    return (
      <>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDarkDropdown"
          aria-controls="navbarNavDarkDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <button
                className="btn btn-dark dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
              News Country
              </button>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/business">
                    India
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/entertainment">
                    USA
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/general">
                    Canada
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/health">
                    China
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/science">
                    Japan
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/sports">
                    France
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/technology">
                    Russia
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </>
    )
  }
}

export default Countrydd

