import React from 'react'
import Album from '../components/Album'
import Video from '../components/Video'
import Banner from '../components/Banner'
import Service from '../components/Service'
import Detail from '../components/Detail'

const Home = () => {
  return (
    <div>
       <Banner/>
       <Album />
       <Video />
       <Service/>
       <Detail />
       

      
    </div>
  )
}

export default Home
