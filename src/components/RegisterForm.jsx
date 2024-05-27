import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import about from '../assets/images/album19.jpg'
import axiosClient from '../api/axiosClient';

const RegisterForm = () => {

    const [show, setShow] = useState(false);
    const [email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const[fullName,setFullName]=useState("");
    const[address,setAddress]=useState("");
    const[phone,setPhone]=useState("");




    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const submit=()=>{
        const formdata=new FormData();
        formdata.append("Email",email);
        formdata.append("Password",password);
        formdata.append("FullName",fullName);
        formdata.append("Address",address);
        formdata.append("Phone",phone);

        axiosClient.post("user",formdata).then(() =>alert("dfffff"))
        setShow(false)
 
    }

    return (

        <div>
            <div className='about__item text-center py-50'>

                <div className="about__title">
                    <h3 className='text-muted'> Infomation Us</h3>
                    <h2>art history in my life</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores, non.
                    </p>
                </div>

            </div>
            <div className="card text-white text-center">
                <img src={about} className="card-img" alt="..." style={{ width: "100%" }} />
                <div className="card-img-overlay">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p className="card-text">Last updated 3 mins ago</p>
                    <Button variant="primary" onClick={handleShow}>
                        Register Now
                    </Button>
                </div>

            </div>


            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Register</Modal.Title>
                </Modal.Header>
                <Modal.Body>      <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control value={email} onChange={ev=>setEmail(ev.target.value)} type="Email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control value={password} onChange={ex=>setPassword(ex.target.value)} type="Password" placeholder="Password" />
                    </Form.Group>
                   
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control value={fullName} onChange={ex=>setFullName(ex.target.value)} type="FullName" placeholder="Full Name" />
                    </Form.Group>
                   
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Address</Form.Label>
                        <Form.Control value={address} onChange={ex=>setAddress(ex.target.value)} type="Address" placeholder="Address" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Phone</Form.Label>
                        <Form.Control value={phone} onChange={ex=>setPhone(ex.target.value)} type="Phone" placeholder="Phone Number" />
                    </Form.Group>
                </Modal.Body>
                

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={submit}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>



        </div>
    )
}

export default RegisterForm
