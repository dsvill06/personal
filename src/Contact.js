import React from 'react'
import './Contact.css'


export const Contact = () => (
    <div className='contact text-light'>
        <div class="intro card bg-dark text-light text-center pt-5 mt-5 ms-1 me-1">
            <h1 className='fw-light'>Contact Me</h1>
        </div>
        <div className='text-light'>
                    <a href='home'>
                            <i class="move fas fa-angle-left move-1 fa-3x"></i>
                    </a>
                </div>
        <div className='d-flex row justify-content-around pt-4'>
            <div class="item card text-center text-light bg-dark w-25 mt-3">
                <div class="card-header">School email</div>
                <div class="card-body">
                    <h5 class="card-title">Email</h5>
                    <a href='mailto: dsvill06@unc.edu'>
                    <p class="card-text">dsvill06@unc.edu</p></a>
                    <i class="fas fa-inbox fa-2x"></i>               
                 </div>
            </div>
            
            <div class="item card text-center text-light bg-dark w-25 mt-3 ms-1">
                <div class="card-header">Github</div>
                <div class="card-body">
                    <h5 class="card-title">Link</h5>
                    <a href='https://github.com/dsvill06'><p class="card-text">@dsvill06</p></a>
                    <i class="fab fa-github fa-2x"></i>
                     </div>
            </div>
            <div class="item card text-center text-light bg-dark w-25 mt-3 ms-1">
                <div class="card-header">Home Phone</div>
                <div class="card-body">
                    <h5 class="card-title">Number</h5>
                    <a href='tel: +19849893713'><p class="card-text">(984)989-3713</p></a>
                    <i class="fas fa-phone fa-2x"></i>
                </div>
            </div>
        </div>
        <div className=' d-flex row justify-content-center pt-5'>
            <div class="item card text-center text-light bg-dark w-25 mt-3 me-4">
                <div class="card-header">LinkedIn</div>
                <div class="card-body">
                    <h5 class="card-title">Link</h5>
                    <a href='https://www.linkedin.com/in/dsvill06/'><p class="card-text">@dsvill06</p></a>
                    <i class="fab fa-linkedin fa-2x"></i>                 
                </div>
            </div>
            <div class="item card text-center text-light bg-dark w-25 mt-3 ms-4">
                <div class="card-header">Instagram</div>
                <div class="card-body">
                    <h5 class="card-title">Username</h5>
                    <a href="https://www.instagram.com/david_vill06/"> 
                    <p class="card-text">david_vill06</p></a>
                    <i fab class="fab fa-instagram fa-2x" />
                </div>
            </div>
        </div>
    </div>
)
