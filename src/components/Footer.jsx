import React from 'react'
import {
    MDBFooter,
    MDBContainer,
    MDBIcon,
    MDBInput,
    MDBCol,
    MDBRow,
    MDBBtn,
    MDBRipple
} from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';


const Footer = () => {
    return (
        <div>
            <MDBFooter className='text-center' color='white' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>

                <MDBContainer className='p-4'>
                    <section className=''>
                        <MDBRow>
                            <MDBCol lg='2' md='12' className='mb-4 mb-md-0'>
                                <MDBRipple
                                    rippleColor='light'
                                    className='bg-image hover-overlay shadow-1-strong rounded'
                                >
                                    <img src='https://mdbcdn.b-cdn.net/img/new/fluid/city/113.webp' className='w-100' />
                                    <a href='#!'>
                                        <div
                                            className='mask'
                                            style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                                        ></div>
                                    </a>
                                </MDBRipple>
                            </MDBCol>
                            <MDBCol lg='2' md='12' className='mb-4 mb-md-0'>
                                <MDBRipple
                                    rippleColor='light'
                                    className='bg-image hover-overlay shadow-1-strong rounded'
                                >
                                    <img src='https://mdbcdn.b-cdn.net/img/new/fluid/city/111.webp' className='w-100' />
                                    <a href='#!'>
                                        <div
                                            className='mask'
                                            style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                                        ></div>
                                    </a>
                                </MDBRipple>
                            </MDBCol>
                            <MDBCol lg='2' md='12' className='mb-4 mb-md-0'>
                                <MDBRipple
                                    rippleColor='light'
                                    className='bg-image hover-overlay shadow-1-strong rounded'
                                >
                                    <img src='https://mdbcdn.b-cdn.net/img/new/fluid/city/112.webp' className='w-100' />
                                    <a href='#!'>
                                        <div
                                            className='mask'
                                            style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                                        ></div>
                                    </a>
                                </MDBRipple>
                            </MDBCol>
                            <MDBCol lg='2' md='12' className='mb-4 mb-md-0'>
                                <MDBRipple
                                    rippleColor='light'
                                    className='bg-image hover-overlay shadow-1-strong rounded'
                                >
                                    <img src='https://mdbcdn.b-cdn.net/img/new/fluid/city/114.webp' className='w-100' />
                                    <a href='#!'>
                                        <div
                                            className='mask'
                                            style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                                        ></div>
                                    </a>
                                </MDBRipple>
                            </MDBCol>
                            <MDBCol lg='2' md='12' className='mb-4 mb-md-0'>
                                <MDBRipple
                                    rippleColor='light'
                                    className='bg-image hover-overlay shadow-1-strong rounded'
                                >
                                    <img src='https://mdbcdn.b-cdn.net/img/new/fluid/city/115.webp' className='w-100' />
                                    <a href='#!'>
                                        <div
                                            className='mask'
                                            style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                                        ></div>
                                    </a>
                                </MDBRipple>
                            </MDBCol>
                            <MDBCol lg='2' md='12' className='mb-4 mb-md-0'>
                                <MDBRipple
                                    rippleColor='light'
                                    className='bg-image hover-overlay shadow-1-strong rounded'
                                >
                                    <img src='https://mdbcdn.b-cdn.net/img/new/fluid/city/116.webp' className='w-100' />
                                    <a href='#!'>
                                        <div
                                            className='mask'
                                            style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                                        ></div>
                                    </a>
                                </MDBRipple>
                            </MDBCol>
                        </MDBRow>
                    </section>
                </MDBContainer>


                <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                    © 2024 Copyright:
                    <a className='text-white' href='https://mdbootstrap.com/'>
                        Si Den Thanh
                    </a>
                </div>
            </MDBFooter>

        </div>
    )
}

export default Footer
