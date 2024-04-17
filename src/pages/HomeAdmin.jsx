import React from 'react'
import { NavLink } from 'react-bootstrap'


const HomeAdmin = () => {
  return (
    <div>
          <div>
              <nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
                  <NavLink className="navbar-brand col-md-3 col-lg-2 mr-0 px-3" to="#">Admin Home</NavLink>
                  <button className="navbar-toggler position-absolute d-md-none collapsed" type="button" data-toggle="collapse" data-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon" />
                  </button>
                  <input className="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search" />
                  <ul className="navbar-nav px-3">
                      <li className="nav-item text-nowrap">
                          <NavLink className="nav-link" to="#">Sign out</NavLink>
                      </li>
                  </ul>
              </nav>
              <div className="container-fluid">
                  <div className="row">
                      <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
                          <div className="sidebar-sticky pt-3">
                              <ul className="nav flex-column">
                                  <li className="nav-item">
                                      <NavLink className="nav-link active" to="#">
                                          <i className="fa fa-home" />
                                          Dashboard <span className="sr-only">(current)</span>
                                      </NavLink>
                                  </li>
                                  <li className="nav-item">
                                      <NavLink className="nav-link" to="/Product">
                                          {/* <i className="fa fa-utensils" /> */}
                                          Product
                                      </NavLink>
                                  </li>
                                  <li className="nav-item">
                                      <NavLink className="nav-link" to="/Product">
                                          {/* <i className="fa fa-list" /> */}
                                         Blogs
                                      </NavLink>
                                  </li>
                                  <li className="nav-item">
                                      <NavLink className="nav-link" to="">
                                          {/* <i className="fa fa-list" /> */}
                                         Cart
                                      </NavLink>
                                  </li>
                                  <li className="nav-item">
                                      <NavLink className="nav-link" to="">
                                          {/* <i className="fa fa-list" /> */}
                                         Account
                                      </NavLink>
                                  </li>
                                  <li className="nav-item">
                                      <NavLink className="nav-link" to="">
                                          {/* <i className="fa fa-list" /> */}
                                         Catagory
                                      </NavLink>
                                  </li>
                                  <li className="nav-item">
                                      <NavLink className="nav-link" to="">
                                          {/* <i className="fa fa-list" /> */}
                                         User
                                      </NavLink>
                                  </li>
                              </ul>
                          </div>
                      </nav>
                     
                  </div>
              </div>
          </div>

      
    </div>
  )
}

export default HomeAdmin
