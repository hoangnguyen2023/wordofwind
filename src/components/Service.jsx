import React from 'react'
import '../css/service.css'
import Carousel from 'react-multi-carousel'
import "react-multi-carousel/lib/styles.css";
import room1 from "../assets/images/room1.jpg"
import room2 from "../assets/images/room2.jpg"
import room3 from "../assets/images/room3.jpg"
import room4 from "../assets/images/room4.jpg"
import room5 from "../assets/images/room5.jpg"


const Service = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <div>
            <div className="service__title text-center py-50 ">

                <h3 className='text-muted'>Room For Rent </h3>
                <h2>The All My Service</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores, non.

                </p>

            </div>
            <Carousel responsive={responsive}>
                <div>
                    <div className="card" style={{ padding: "1rem 2rem", border: "none",  }}>
                        <div className='box_card' style={{ border: "0.1rem solid grey", borderRadius: "0.4rem" }}>
                            <img src={room1} className="card-img-top" alt="..." />
                            <div className="card-body" style={{ padding: "1rem" }}>
                                <h5 className="card-title">Card title</h5>
                                <p>Price: 10 $</p>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <button className='btn btn-success'><i className="fa-solid fa-cart-shopping"></i></button>
                            </div>
                        </div>
                    </div>

                </div>
                <div>
                    <div className="card" style={{ padding: "1rem 2rem", border: "none" }}>
                        <div className='box_card' style={{ border: "0.1rem solid grey", borderRadius: "0.4rem", overflow: "hidden" }}>
                            <img src={room2} className="card-img-top" alt="..." />
                            <div className="card-body" style={{ padding: "1rem" }}>
                                <h5 className="card-title">Card title</h5>
                                <p>Price: 10 $</p>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <button className='btn btn-success'><i className="fa-solid fa-cart-shopping"></i></button>
                            </div>
                        </div>
                    </div>

                </div>
                <div>
                    <div className="card" style={{ padding: "1rem 2rem", border: "none" }}>
                        <div className='box_card' style={{ border: "0.1rem solid grey", borderRadius: "0.4rem" }}>
                            <img src={room3} className="card-img-top" alt="..." />
                            <div className="card-body" style={{ padding: "1rem" }}>
                                <h5 className="card-title">Card title</h5>
                                <p>Price: 10 $</p>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <button className='btn btn-success'><i className="fa-solid fa-cart-shopping"></i></button>
                            </div>
                        </div>
                    </div>

                </div>
                <div>
                    <div className="card" style={{ padding: "1rem 2rem", border: "none" }}>
                        <div className='box_card' style={{ border: "0.1rem solid grey", borderRadius: "0.4rem" }}>
                            <img src={room4} className="card-img-top" alt="..." />
                            <div className="card-body" style={{ padding: "1rem" }}>
                                <h5 className="card-title">Card title</h5>
                                <p>Price: 10 $</p>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <button className='btn btn-success'><i className="fa-solid fa-cart-shopping"></i></button>
                            </div>
                        </div>
                    </div>

                </div>
                <div>
                    <div className="card" style={{ padding: "1rem 2rem", border: "none" }}>
                        <div className='box_card' style={{ border: "0.1rem solid grey", borderRadius: "0.4rem" }}>
                            <img src={room5} className="card-img-top" alt="..." />
                            <div className="card-body" style={{ padding: "1rem" }}>
                                <h5 className="card-title">Card title</h5>
                                <p>Price: 10 $</p>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <button className='btn btn-success'><i className="fa-solid fa-cart-shopping"></i></button>
                            </div>
                        </div>
                    </div>

                </div>
                <div>
                    <div className="card" style={{ padding: "1rem 2rem", border: "none" }}>
                        <div className='box_card' style={{ border: "0.1rem solid grey", borderRadius: "0.4rem" }}>
                            <img src={room5} className="card-img-top" alt="..." />
                            <div className="card-body" style={{ padding: "1rem" }}>
                                <h5 className="card-title">Card title</h5>
                                <p>Price: 10 $</p>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <button className='btn btn-success'><i className="fa-solid fa-cart-shopping"></i></button>
                            </div>
                        </div>
                    </div>

                </div>
            </Carousel>

        </div>
    )
}

export default Service
