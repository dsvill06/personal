import React from 'react'
import './About.css'
import {AnimatePresence, motion} from 'framer-motion'
import corinth from "./assets/Corinth-Holders.png"
import jcc from "./assets/Johnston.png"
import unc from "./assets/Old-Well.jpg"
import ai from "./assets/ai.jpeg"

export const About = () => (
    <div className=''>
       
        <div className="about-1 d-flex justify-content-center align-items-center text-center">
            
            <div className='text-dark border border-dark p-5 rounded-6' style={{background: 'rgba(243, 243, 243, 0.7)',width:"35rem"}}>
                <h1 className="display-3">
                    About Me
                </h1>
                <h6 className='fw-light'>
                    pc: Carolina Skies by David Villavicencio
                </h6>
                <div className='d-flex row justify-content-around pt-4 pe-4'>
                <div className='col justify-content-start'>
                    <a href='home'>
                            <i class="move fas fa-angle-left move-1 fa-3x"></i>
                    </a>
                </div>
                <div className='col'>
                    <a href='contact'>
                        <i class="move fas fa-angle-right move-1 fa-3x"></i>
                    </a>
                </div>
                    
            </div>
            </div>
        </div>
        <div className='d-flex pt-3 about-2 border-bottom'>
            <div className='col-md-12'>
                <div className='text-light'>
                    <div className='row justify-content-center text-center'>
                        <div className='pt-4'>
                            <h1 className='fw-light display-4 pb-5'>
                                Interests
                                <hr class="hr hr-blurry" />

                            </h1>
                            
                        </div>
                    <div className=' col h-25 w-25'>
                    <section class="text-center pb-5">
                        <div class="row">
                            <div class="col-lg-3 col-md-6 mb-5 mb-md-5 mb-lg-0 position-relative">
                            <i class="fas fa-book-open fa-3x text-primary mb-4"></i>
                            <h6 class="fw-normal mb-0 text-muted">I enjoy reading about self-help, physics, or philosophy</h6>
                            <div class="vr vr-blurry position-absolute my-0 h-100 d-none d-md-block top-0 end-0"></div>
                            </div>

                            <div class="col-lg-3 col-md-6 mb-5 mb-md-5 mb-lg-0 position-relative">
                            <i class="fas fa-guitar fa-3x text-primary mb-4"></i>
                            <h6 class="fw-normal mb-0 text-muted">In my freetime, I enjoy playing music on the guitar or saxophone</h6>
                            <div class="vr vr-blurry position-absolute my-0 h-100 d-none d-md-block top-0 end-0"></div>
                            </div>

                            <div class="col-lg-3 col-md-6 mb-5 mb-md-0 position-relative">
                            <i class="fas fa-laptop-code fa-3x text-primary mb-4"></i>
                            <h6 class="fw-normal mb-0 text-muted">I like working on personal project and learning something new within programming</h6>
                            <div class="vr vr-blurry position-absolute my-0 h-100 d-none d-md-block top-0 end-0"></div>
                            </div>

                            <div class="col-lg-3 col-md-6 mb-5 mb-md-0 position-relative">
                            <i class="fas fa-bicycle fa-3x text-primary mb-4"></i>
                            <h6 class="fw-normal mb-0 text-muted">I enjoy different outdoor activities like bike-riding, hiking, or camping</h6>
                            </div>
                        </div>
                        </section>

                    </div>
                        
                    </div>
                </div>
            </div>

        </div>
        <div className='d-flex pt-5 about-2'>
            <div className='col-md-12'>
                <div className='text-light'>
                    <div className='row justify-content-center text-center'>
                        <div className='pt-1'>
                            <h1 className='fw-light display-4'>
                                Education
                                <hr class="hr hr-blurry" />
                            </h1>
                        </div>
                    </div>
                </div>
                <div className='row text-center text-light'>
                    <div className=' col h-25 w-25 pb-5'>
                        <img src={corinth} className='h-25 w-25 img-fluid shadow-2-strong rounded-circle'></img>
                        <p className=''>Graduated from Corinth Holders High School in the top 10% in my hometown of Clayton, Nc</p>
                        <hr class="hr hr-blurry" />
                        <img src={jcc} className='h-25 w-25 img-fluid shadow-2-strong rounded-circle'></img>
                        <p> Took dual enrollement courses at Johnston Community College</p>
                        <hr class="hr hr-blurry" />
                        <img src={unc} className='h-25 w-25 img-fluid shadow-2-strong rounded-circle'></img>
                        <p> Currently an Honors Computer Science Student at the Univesity of North Carolina at Chapel Hill with an Applied Science/Engineering and Entrepreneurship double minor</p>
                        <hr class="hr hr-blurry " />
                        <img src={ai} className='h-50 w-25 img-fluid shadow-2-strong rounded-circle'></img>
                        <p>I plan to get a Masters in Computer Science and an MBA in the future</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
)