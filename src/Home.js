import React from 'react'
import { MDBContainer, MbdRow, MDBCol, MDBRow} from 'mdb-react-ui-kit'
import './Home.css'
import {motion} from 'framer-motion'
import { saveAs } from 'file-saver'



export function Home(){
    const saveFile = () => {
        saveAs(
          "https://drive.google.com/file/d/1hwBBDg87Uknn-qD1ae4CLGxjDsVzDpZ5/view?usp=sharing",
          "Resume.pdf"
        );
      };
    return(
    <div className='jumbo'>
        <div className=' d-flex justify-content-end align-items-center bg-image pb-2 mx-0 first'>
            <div className='g-start-2'>
                <section className='me-5 pe-5 text-light'>
                    <h1 className='fw-light display-1'>David Villavicencio
                        <a href='about'>
                            <i class="fas fa-xs fa-angle-right move-1"></i>
                        </a>
                    <h2 className='fw-lighter display-6' >Student, Programmer, Entrepreneur</h2 >
                    </h1>
                </section>
            </div>
        </div>
            <div className='text-dark shade'>
                <div className='row justify-content-center text-center'>
                    <div className='col-6 pt-4'>
                        <h1 className='fw-light display-4'>
                            Welcome to my webpage
                        </h1>
                        <p>
                            A student at the University of North Carolina at Chapel Hill studying Computer Science with an Applied Science and Engineering minor and an Entrepreneurship minor.
                        </p>
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
                                    <h5>Full Name</h5>
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
                            
                            <div class="col-md-6">
                                <h4 className='fw-light text-center'>
                                    Skills
                                </h4>
                                <p>
                                    <div>
                                        <p>
                                        <i class="fab fa-python fa-2x pe-3"></i>
                                        Python</p>
                                        <hr class="hr hr-blurry" />
                                        
                                        <p>
                                        <i class="fab fa-java fa-2x pe-3"></i>
                                              Java</p>
                                        <hr class="hr hr-blurry" />
                                        <p>
                                        <i class="fas fa-earth-americas fa-2x pe-3"></i>
                                            Spanish</p>
                                        <hr class="hr hr-blurry" />
                                        <p>
                                        <i class="fab fa-microsoft fa-2x pe-3"></i>
                                        Microsoft Office</p>
                                        <hr class="hr hr-blurry" />
                                        <p>
                                        <i class="far fa-address-card fa-2x pe-3"></i>
                                            Leadership</p>
                                    </div>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 ps-5 pt-5 border">
                        <h2 className='fw-light'>
                            Resume
                        </h2>
                        <a className='ripple text-center' data-mdb-ripple-color="dark">
                            <button role="button" class="btn btn-primary btn-dark btn-rounded btn-lg active " aria-pressed="true" onClick={saveFile}>
                                Download
                            </button>
                        </a>
                    </div>
                </div>
            </div>
    </div>
    )
}
