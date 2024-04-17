import React from 'react'
import { NavLink } from 'react-bootstrap'

const Product = () => {
  return (
    <>
      <div className="product">
        <div className="title text-center">
          <h4>
            list Product
          </h4>
         
        </div>
        <NavLink href=""><button className='btn btn-primary '>Create</button></NavLink>
        <table class="table table-hover">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
              <th scope='col'>action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
             <td >01</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>
               <NavLink to=""><button className='btn btn-danger'>Delete</button></NavLink>
               <NavLink to=""><button className='btn btn-success'>Edit</button></NavLink>
              
              </td>
            </tr>
            <tr>
             <td >02</td>
              <td>Marks</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>
               <NavLink to=""><button className='btn btn-danger'>Delete</button></NavLink>
               <NavLink to=""><button className='btn btn-success'>Edit</button></NavLink>
              
              </td>
            </tr>
           
          </tbody>
        </table>
      </div>


    </>


  )
}

export default Product
