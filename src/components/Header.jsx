import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import axiosClient from '../api/axiosClient';


 

const Header = () => {
  const [show, setShow] = useState(false);
  const [email,setEmail]=useState("");
  const[password,setPassword]=useState("");





  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const submit=()=>{
    const formdata=new FormData();
    formdata.append("Email",email);
    formdata.append("Password",password);
   

    axiosClient.post("user",formdata).then(() =>alert("dfffff"))
    setShow(false)

}

  const styleobject = { color: "White" }
  return (
    <div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control value={email} onChange={ev => setEmail(ev.target.value)} type="Email" placeholder="Enter email" />         
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control value={password} onChange={ex => setPassword(ex.target.value)} type="Password" placeholder="Password" />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={submit}>
            Login
          </Button>
        </Modal.Footer>
      </Modal>
      <nav className="navbar navbar-expand-lg navbar-dark  bg-dark">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/Home">Romantic Hunting</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/Home">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Gallery">gallery</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Blog">Blog</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/About">About</NavLink>
              </li>
              <li className="nav-item dropdown">
                <NavLink className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Register
                </NavLink>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><NavLink className="dropdown-item" to="" onClick={handleShow}>Login</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/Register">Register</NavLink></li>
                </ul>
              </li>
            </ul>
            <div style={styleobject}>
              <form className="d-flex-colum "  >
                <p className=''>WelCome</p>
                <i className="fa-solid fa-user"></i>
              </form>
            </div>

          </div>
        </div>
      </nav>


    </div>
  )
}

export default Header
