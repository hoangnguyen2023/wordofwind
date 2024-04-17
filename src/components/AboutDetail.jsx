import React from 'react'
import aboutDetail from '../assets/images/detail1.jpg'
import '../css/aboutdetail.css'



const AboutDetail = () => {
    return (

        <div className=''>
            <div className='about__item text-center py-50'>

                <div className="about__title">
                    <h3 className='text-muted'> Infomation Us</h3>
                    <h2>art history in my life</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores, non.
                    </p>
                </div>

            </div>
            <div className='d-flex justify-content-center mg-50'>
                <div className="aboutdetail__title text-center  ">
                    <div className="card" style={{ width: '50rem', borderRadius: 50 }}>
                        <img src={aboutDetail} className="card-img-top" alt="..." style={{ borderRadius: 50 }} />
                        <div className="card-body">
                            <h5 className="card-title">Mr.Thanh Nguyen</h5>
                            <p><i class="fa-solid fa-phone"></i>: 0942439009 </p>
                            <p><i class="fa-solid fa-envelope"></i>: thanhnguyen@gmail.com</p>
                            <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate nemo dolorem, quos adipisci debitis laboriosam doloribus quas, neque dolor, voluptatum sequi! Quibusdam quis dicta eligendi culpa sed. Quaerat sit nostrum odit? Eveniet placeat architecto inventore hic et ad minima soluta quia sapiente necessitatibus quaerat reprehenderit maxime facere, iste ex tenetur veritatis nulla ut quas aliquid atque officiis. Ratione nostrum, consequatur accusantium voluptate eius dolores temporibus veniam quas odit, dignissimos facilis harum quia dolore libero laboriosam hic in esse sit, ea culpa error sunt labore nesciunt! Sapiente, expedita? Ea veritatis sapiente inventore magni laborum rem accusamus, dolor in reiciendis enim eum.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>


                </div>

            </div>



        </div>
    )
}

export default AboutDetail
