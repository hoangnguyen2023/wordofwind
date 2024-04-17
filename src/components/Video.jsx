import React from 'react'
import binhminh from '../assets/audio/binhminh.mp4';
import ReactPlayer from 'react-player';
import icon from "../assets/images/album17.jpg";
import "../css/video.css";


const Video = () => {
    const style = {
        width: '600px',
        height: '400px',
    }
 

    return (
        <div>
            <div className="video__title">

                <h3 className='text-muted'>history All Video </h3>
                <h2>art history in my life</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores, non.

                </p>

            </div>
            <div className="video__main ">

                <div className="video__item ">
                    <ReactPlayer light={<img src={icon} alt='' style={style} />} controls={true} url={binhminh} height={400} width={500} />
                </div>

            </div>
          




        </div>
    )
}

export default Video
