import React from 'react'
import Stack from 'react-bootstrap/Stack'
import '../css/album.css'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip'
import album1 from '../assets/images/album1.jpg'
import album2 from '../assets/images/album2.jpg'
import album3 from '../assets/images/album3.jpg'
import album4 from '../assets/images/album4.jpg'
import album6 from '../assets/images/album6.jpg'
import album7 from '../assets/images/album7.jpg'







const Album = () => {
    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            <  img src={album4} alt="" style={imgstyle} />
        </Tooltip>

    );
    const imgstyle = {
        width: '400px',
        height: '600px',


    }


    return (
        <div className='album__item text-center mg-50'>
            <div className="album__title">
                <h3 className='text-muted'> history album </h3>
                <h2>art history in my life</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores, non.

                </p>
            </div>
            <Stack direction="horizontal" gap={0.5}>

                <div className="p-2">
                    <OverlayTrigger
                        placement="right"
                        delay={{ show: 250, hide: 400 }}
                        overlay={renderTooltip}
                    >
                        <div className="p-2"> <img src={album4} alt="" /></div>
                    </OverlayTrigger>
                </div>

                <div className="p-2"> <img src={album2} alt="" /></div>
                <div className="p-2"> <img src={album3} alt="" /></div>
            </Stack>
            <Stack direction="horizontal" gap={0.5}>

                <div className="p-2">
                    <img src={album1} alt="" />
                </div>
                <div className="p-2"> <img src={album6} alt="" /></div>
                <div className="p-2"> <img src={album7} alt="" /></div>
            </Stack>


        </div>
    )
}

export default Album
