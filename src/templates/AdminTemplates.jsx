import React from 'react'
import { Outlet } from 'react-router-dom'
import { NavLink } from 'react-router-dom'



const AdminTemplates = () => {
  return (
    <>

      <div className="d-flex">
        <div className="w-25 bg-dark text-while" style={{ minHeight: "100vh" }}>
          <ul className="mt-2">
            <li>
              <NavLink className={"nav-link"} to="/AdminTemplates/User">
                User
              </NavLink>
            </li>
            <li>
              <NavLink className={"nav-link"} to="/AdminTemplates/Product">
                Products
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="w-75">
          <div className="bg-dark text-while w-100 p-3 text-end">
            <NavLink to="" className="nav-link d-inline-block text-center ">
              <span className="rounded-circle">
                <i className="fa fa-user"></i>
              </span>
              <br />
              hello abc
            </NavLink>
          </div>
          <div>
            <Outlet />
          </div>
        </div>
      </div>
      

    </>
  )
}

export default AdminTemplates
