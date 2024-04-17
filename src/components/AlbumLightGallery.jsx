import React from 'react'
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
import galleryalbum20 from '../assets/images/album20.jpg'
import galleryalbum21 from '../assets/images/album21.jpg'

import LightGallery from 'lightgallery/react'
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import '../css/albumlightgallery.css'

const AlbumLightGallery = () => {
    const onInit = () => {
        console.log('lightGallery has been initialized');
    };

    return (
        <div>
            <div className="galleryblbum__title text-center py-50">

                <h3 className='text-muted'>Gallery Album </h3>
                <h2>this my life & work</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores, non.
                </p>
            </div>
            <div className="album album__gallery container text-center">
                <LightGallery
                    onInit={onInit}
                    speed={500}
                    plugins={[lgThumbnail, lgZoom]}
                >
                    <a href={galleryalbum10}>

                        <img alt="hoang hon" src={galleryalbum10} style={{ maxWidth: 420, padding: '5px' }} />
                    </a>
                    <a href={galleryalbum11}>
                        <img alt="choang vang" src={galleryalbum11} style={{ maxWidth: 420, padding: '5px' }} />
                    </a>
                    <a href={galleryalbum12}>
                        <img alt="hoang hon" src={galleryalbum12} style={{ maxWidth: 420, padding: '5px' }} />
                    </a>
                    <a href={galleryalbum13}>
                        <img alt="choang vang" src={galleryalbum13} style={{ maxWidth: 420, padding: '5px' }} />
                    </a>
                    <a href={galleryalbum14}>
                        <img alt="hoang hon" src={galleryalbum14} style={{ maxWidth: 420, padding: '5px' }} />
                    </a>
                    <a href={galleryalbum15}>
                        <img alt="choang vang" src={galleryalbum15} style={{ maxWidth: 420, padding: '5px' }} />
                    </a>
                    <a href={galleryalbum16}>
                        <img alt="hoang hon" src={galleryalbum16} style={{ maxWidth: 420, padding: '5px' }} />
                    </a>
                    <a href={galleryalbum17}>
                        <img alt="choang vang" src={galleryalbum17} style={{ maxWidth: 420, padding: '5px' }} />
                    </a>
                    <a href={galleryalbum18}>
                        <img alt="hoang hon" src={galleryalbum18} style={{ maxWidth: 420, padding: '5px' }} />
                    </a>
                    <a href={galleryalbum19}>
                        <img alt="choang vang" src={galleryalbum19} style={{ maxWidth: 420, padding: '5px' }} />
                    </a>
                    <a href={galleryalbum20}>
                        <img alt="choang vang" src={galleryalbum20} style={{ maxWidth: 420, padding: '5px' }} />
                    </a>
                    <a href={galleryalbum21}>
                        <img alt="choang vang" src={galleryalbum21} style={{ maxWidth: 420, padding: '5px' }} />
                    </a>


                </LightGallery>
            </div>

        </div>
    )
}

export default AlbumLightGallery
