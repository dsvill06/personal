import React from 'react'
import { MDBContainer } from 'mdb-react-ui-kit'
import './About.css'
import {AnimatePresence, motion} from 'framer-motion'

export const About = () => (
    <div className='about'>
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            />
        <div className='d-flex pt-5'>
            <div className='col-md-12 border'>
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
                                    <img src={require("./assets/David.JPG")} className="img-fluid rounded-circle"/>
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