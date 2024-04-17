import React from 'react'

const Contact = () => {
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
            <div className="row">
                <div className="col-sm-6">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Contact Us Now</h5>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3909.8830991745626!2d107.81157607505243!3d11.488356988707023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTHCsDI5JzE4LjEiTiAxMDfCsDQ4JzUwLjkiRQ!5e0!3m2!1svi!2s!4v1713331122928!5m2!1svi!2s" style={{ width: 600, height: 450, border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className="card-text"></iframe>
                            <a href="https://www.google.com/maps/place/11%C2%B029'18.1%22N+107%C2%B048'50.9%22E/@11.488357,107.8115761,17z/data=!3m1!4b1!4m4!3m3!8m2!3d11.488357!4d107.814151?entry=ttu" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Contact Me Now</h5>
                            <div classname="card-text">
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
                                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Full Name" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">Title</label>
                                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Title Name" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                                    <textarea className="form-control" id="exampleFormControlTextarea1" rows={5} defaultValue={""} />
                                </div>
                            </div>

                            <a href="" className="btn btn-primary">Send</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Contact
