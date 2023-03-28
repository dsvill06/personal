import React from 'react'
import { MDBContainer } from 'mdb-react-ui-kit'
import './About.css'
import {AnimatePresence, motion} from 'framer-motion'

export const About = () => (
    <div className=''>
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            />
        <div className="about-1 d-flex justify-content-center align-items-center text-center">
            <div className='text-dark border border-dark p-5 rounded-6' style={{background: 'rgba(243, 243, 243, 0.7)',width:"35rem"}}>
                <h1 className="display-3">
                    About Me
                </h1>
                <h6 className='fw-light'>
                    pc: Carolina Skies by David Villavicencio
                </h6>
            </div>
        </div>
        <div className='d-flex pt-5 about-2 border'>
            <div className='col-md-12'>
                <div className='text-light'>
                    <div className='row justify-content-center text-center'>
                        <div className='pt-4'>
                            <h1 className='fw-light display-4'>
                                Interests
                            </h1>
                        </div>
                    </div>
                    <div className='d-flex row mt-5'>
                        <div class="col-md-8">
                            <div class="pb-3">
                                <h3 className='fw-light text-center'>
                                    About
                                </h3>
                            </div>
                            <div class="row ">
                            <div class="col-md-6">
                                <h4 className='fw-light text-center'>
                                    Profile
                                </h4>
                                <div className="ps-3">
                                    <img src={require("./assets/Generic-Music-Notes.jpeg")} className="img-fluid rounded-9 border-5 border-info"/>
                                    <p className=''>David Sebastian Villavicencio</p>
                                    <hr class="hr hr-blurry" />
                                    <h5>Birth-Date</h5>
                                    <p>June 18, 2004</p>
                                    <hr class="hr hr-blurry" />
                                    <h5>Email</h5>
                                    <p>dsvill06@unc.edu</p>
                                    <hr class="hr hr-blurry" />
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </AnimatePresence>
    </div>
)