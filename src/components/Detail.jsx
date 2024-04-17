import React from 'react'
import detail from '../assets/images/detail1.jpg'
import '../css/detail.css'

const Detail = () => {
    return (
        <div>
            <div className="detail__title text-center py-50 title__head">

                <h3 className='text-muted'>about me </h3>
                <h2>this my life & work</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores, non.

                </p>

            </div>
            <div className="row g-0  position-relative">
                <div className="col-md-6 mb-md-0 p-md-4">
                    <img src={detail} className="w-100" alt="..." />
                </div>
                <div className="col-md-6 p-4 ps-md-0">
                    <h5 className="mt-0">Columns with stretched link</h5>
                    <p>Another instance of placeholder content for this other custom component. It is intended to mimic what some real-world content would look like, and we're using it here to give the component a bit of body and size.</p>
                    <a href="#" className="stretched-link">Go somewhere</a>
                </div>
            </div>
        </div>


    )
}

export default Detail
