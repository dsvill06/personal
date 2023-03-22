import React from 'react'
import { MDBContainer, MbdRow, MDBCol, MDBRow} from 'mdb-react-ui-kit'
import './Home.css'
import { Jumbotron } from './Components/Jumbotron'

export const Home = () => (
    <div className=' d-flex justify-content-end align-items-center bg-image px-0 mx-0 jumbo'>
        <section className='me-5 pe-5 text-dark'>
            <h1 className='fw-light'>David Villavicencio
            <h6 className='fw-lighter'>Student, Programmer, Entrepreneur</h6>
            </h1>
        </section>
    </div>
)