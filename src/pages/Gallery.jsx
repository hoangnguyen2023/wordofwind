import React from 'react'
import Banner from '../components/Banner';
import GalleryAlbum from '../components/GalleryAlbum';
import GalleryVideo from '../components/GalleryVideo';
import AlbumLightGallery from '../components/AlbumLightGallery';



const Gallery = () => {
  return (
    <div>
      < Banner />
      <AlbumLightGallery />
      <GalleryAlbum />
      <GalleryVideo />
    </div>
  )
}

export default Gallery
