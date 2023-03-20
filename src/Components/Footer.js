import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon, MDBBtn } from 'mdb-react-ui-kit';
import './Footer.css'

export const Footer=() => (
    <MDBFooter fluid bgColor='dark' className='text-center text-lg-start text-muted ' >
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='https://www.facebook.com/' target='_blank' className='me-4 text-reset'>
            <MDBBtn className='m1' floating style={{backgroungColor: '#3b5998'}}>
                <MDBIcon fab icon="facebook-f" />
            </MDBBtn>
          </a>
          <a href='https://www.instagram.com/david_vill06/' className='me-4 text-reset'>
            <MDBBtn className='m1' floating style={{backgroungColor: '#ac2bac'}}>
                <MDBIcon fab icon="instagram" />
            </MDBBtn>
          </a>
          <a href='https://www.linkedin.com/in/dsvill06/' className='me-4 text-reset'>
            <MDBBtn className='m1' floating style={{backgroundColor: '#0082ca'}}>
                <MDBIcon fab icon="linkedin" />
            </MDBBtn>
          </a>
          <a href='https://github.com/dsvill06' className='me-4 text-reset'>
          <MDBBtn className='m1' floating style={{backgroundColor: '#333333'}}>
                <MDBIcon fab icon="github" />
            </MDBBtn>
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
                Company name
              </h6>
              <p>
                Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                consectetur adipisicing elit.
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Pricing
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Settings
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Orders
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Help
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                Chapel Hill, Nc 27514, US
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                dsvill06@unc.edu
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> + 01 984-9894714
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
    </MDBFooter>
)