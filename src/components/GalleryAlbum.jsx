import React, { useState } from 'react'
import galleryalbum10 from '../assets/images/album10.jpg'
import galleryalbum11 from '../assets/images/album11.jpg'
import galleryalbum12 from '../assets/images/album12.jpg'
import galleryalbum13 from '../assets/images/album13.jpg'
import galleryalbum14 from '../assets/images/album14.jpg'
import galleryalbum15 from '../assets/images/album15.jpg'
import galleryalbum16 from '../assets/images/album16.jpg'
import galleryalbum17 from '../assets/images/album17.jpg'
import galleryalbum18 from '../assets/images/album18.jpg'
import galleryalbum19 from '../assets/images/album19.jpg'




const GalleryAlbum = () => {
  const [like,uselike]=useState(100)
  const handlelike =()=>{
    uselike(like + 1)

  }



  return (

    <div>
      
      <div className="galleryblbum__title text-center py-50">

        <h3 className='text-muted'>Gallery Album </h3>
        <h2>this my life & work</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores, non.

        </p>

      </div>
      <div classname="gallery__album ">
        <div className="row row-cols-1 row-cols-md-3 g-4 p-3">
          <div className="col">
            <div className="card h-100">
              <img src={galleryalbum10} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              </div>
              <div className="card-footer">
                <small className="text-danger p-2"><i class="fa-solid fa-heart " style={{fontSize:15}} onClick={handlelike}></i> {like}</small>
                <small className="text-muted p-2"><i class="fa-solid fa-comment"></i></small>
                <small className="text-muted p-2"><i class="fa-solid fa-eye"></i></small>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img src={galleryalbum11} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
              </div>
              <div className="card-footer">
                <small className="text-muted p-2"><i class="fa-solid fa-heart"></i></small>
                <small className="text-muted p-2"><i class="fa-solid fa-comment"></i></small>
                <small className="text-muted p-2"><i class="fa-solid fa-share"></i></small>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img src={galleryalbum12} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
              </div>
              <div className="card-footer">
                <small className="text-muted p-2"><i class="fa-solid fa-heart"></i></small>
                <small className="text-muted p-2"><i class="fa-solid fa-comment"></i></small>
                <small className="text-muted p-2"><i class="fa-solid fa-share"></i></small>
              </div>
            </div>
          </div>
        </div>
        <div className="row row-cols-1 row-cols-md-3 g-4 p-3">
          <div className="col">
            <div className="card h-100">
              <img src={galleryalbum13} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              </div>
              <div className="card-footer">
                <small className="text-muted p-2"><i class="fa-solid fa-heart"></i></small>
                <small className="text-muted p-2"><i class="fa-solid fa-comment"></i></small>
                <small className="text-muted p-2"><i class="fa-solid fa-share"></i></small>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img src={galleryalbum14} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
              </div>
              <div className="card-footer">
                <small className="text-muted p-2"><i class="fa-solid fa-heart"></i></small>
                <small className="text-muted p-2"><i class="fa-solid fa-comment"></i></small>
                <small className="text-muted p-2"><i class="fa-solid fa-share"></i></small>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img src={galleryalbum15} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
              </div>
              <div className="card-footer">
                <small className="text-muted p-2"><i class="fa-solid fa-heart"></i></small>
                <small className="text-muted p-2"><i class="fa-solid fa-comment"></i></small>
                <small className="text-muted p-2"><i class="fa-solid fa-share"></i></small>
              </div>
            </div>
          </div>
        </div>
        <div className="row row-cols-1 row-cols-md-3 g-4 p-3">
          <div className="col">
            <div className="card h-100">
              <img src={galleryalbum16} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              </div>
              <div className="card-footer">
                <small className="text-muted p-2"><i class="fa-solid fa-heart"></i></small>
                <small className="text-muted p-2"><i class="fa-solid fa-comment"></i></small>
                <small className="text-muted p-2"><i class="fa-solid fa-share"></i></small>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img src={galleryalbum17} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
              </div>
              <div className="card-footer">
                <small className="text-muted p-2"><i class="fa-solid fa-heart"></i></small>
                <small className="text-muted p-2"><i class="fa-solid fa-comment"></i></small>
                <small className="text-muted p-2"><i class="fa-solid fa-share"></i></small>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img src={galleryalbum18} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
              </div>
              <div className="card-footer">
                <small className="text-muted p-2"><i class="fa-solid fa-heart"></i></small>
                <small className="text-muted p-2"><i class="fa-solid fa-comment"></i></small>
                <small className="text-muted p-2"><i class="fa-solid fa-share"></i></small>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img src={galleryalbum19} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
              </div>
              <div className="card-footer">
                <small className="text-muted p-2"><i class="fa-solid fa-heart"></i></small>
                <small className="text-muted p-2"><i class="fa-solid fa-comment"></i></small>
                <small className="text-muted p-2"><i class="fa-solid fa-share"></i></small>
              </div>
            </div>
          </div>
        </div>
      </div>





    </div>
  )
}

export default GalleryAlbum
