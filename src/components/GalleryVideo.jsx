import React from 'react'
import '../css/galleryalbum.css'
import ReactPlayer from 'react-player';
import video1 from '../assets/audio/video1.mp4'
import video2 from '../assets/audio/video2.mp4'
import video3 from '../assets/audio/video3.mp4'
import video4 from '../assets/audio/video4.mp4'
import video5 from '../assets/audio/video5.mp4'
import video6 from '../assets/audio/video6.mp4'
import video7 from '../assets/audio/video7.mp4'
import video8 from '../assets/audio/video8.mp4'
import video9 from '../assets/audio/video9.mp4'
import video10 from '../assets/audio/video10.mp4'
import video11 from '../assets/audio/video11.mp4'
import video12 from '../assets/audio/video12.mp4'
import video13 from '../assets/audio/video10.mp4'
import video14 from '../assets/audio/video11.mp4'
import video15 from '../assets/audio/video12.mp4'



const GalleryVideo = () => {
    return (
        <div>
            <div className="galleryvideo__title text-center">

                <h3 className='text-muted'>Gallery Album Video </h3>
                <h2>this my life & work</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores, non.

                </p>

            </div>
            <div className="gallery__video">
                <div className="row row-cols-1 row-cols-md-3 g-4 p-3">
                    <div className="col">
                        <div className="card h-100">
                            <ReactPlayer
                                url={video1}
                                width="464.26px"
                                height="360px"
                                playing={false}
                                controls={true}
                            />
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
                            <ReactPlayer
                                url={video2}
                                width="464.26px"
                                height="360px"

                                playing={false}
                                controls={true}
                            />
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
                            <ReactPlayer
                                url={video3}
                                width="464.26px"
                                height="360px"
                                playing={false}
                                controls={true}
                            />
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
            <div className="gallery__video">
                <div className="row row-cols-1 row-cols-md-3 g-4 p-3">
                    <div className="col">
                        <div className="card h-100">
                            <ReactPlayer
                                url={video4}
                                width="464.26px"
                                height="360px"
                                playing={false}
                                controls={true}
                            />
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
                            <ReactPlayer
                                url={video5}
                                width="464.26px"
                                height="360px"

                                playing={false}
                                controls={true}
                            />
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
                            <ReactPlayer
                                url={video6}
                                width="464.26px"
                                height="360px"
                                playing={false}
                                controls={true}
                            />
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
            <div className="gallery__video">
                <div className="row row-cols-1 row-cols-md-3 g-4 p-3">
                    <div className="col">
                        <div className="card h-100">
                            <ReactPlayer
                                url={video7}
                                width="464.26px"
                                height="360px"
                                playing={false}
                                controls={true}
                            />
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
                            <ReactPlayer
                                url={video8}
                                width="464.26px"
                                height="360px"

                                playing={false}
                                controls={true}
                            />
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
                            <ReactPlayer
                                url={video9}
                                width="464.26px"
                                height="360px"
                                playing={false}
                                controls={true}
                            />
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
            <div className="gallery__video">
                <div className="row row-cols-1 row-cols-md-3 g-4 p-3">
                    <div className="col">
                        <div className="card h-100">
                            <ReactPlayer
                                url={video10}
                                width="464.26px"
                                height="360px"
                                playing={false}
                                controls={true}
                            />
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
                            <ReactPlayer
                                url={video11}
                                width="464.26px"
                                height="360px"

                                playing={false}
                                controls={true}
                            />
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
                            <ReactPlayer
                                url={video12}
                                width="464.26px"
                                height="360px"
                                playing={false}
                                controls={true}
                            />
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
            <div className="gallery__video">
                <div className="row row-cols-1 row-cols-md-3 g-4 p-3">
                    <div className="col">
                        <div className="card h-100">
                            <ReactPlayer
                                url={video13}
                                width="464.26px"
                                height="360px"
                                playing={false}
                                controls={true}
                            />
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
                            <ReactPlayer
                                url={video14}
                                width="464.26px"
                                height="360px"

                                playing={false}
                                controls={true}
                            />
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
                            <ReactPlayer
                                url={video15}
                                width="464.26px"
                                height="360px"
                                playing={false}
                                controls={true}
                            />
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

export default GalleryVideo
