import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon, MDBBtn } from 'mdb-react-ui-kit';
import './Footer.css'

export const Footer=() => (
    <MDBFooter bgColor='dark' className='text-center text-lg-start text-muted' >
      <section className='d-flex justify-content-center justify-content-lg-between p-2 border-bottom' id="section1">
        <div className=' mt-2 me-5 d-none d-lg-block' id="sm-header">
          <span>Get connected with me, social networks</span>
          <span id="line"> -</span>
        </div>

        <div id="list">
          <a href='https://www.facebook.com/' target='_blank' className='me-4 text-reset' id="item">
            <MDBBtn className='m1' floating style={{backgroungColor: '#3b5998'}}>
                <MDBIcon fab icon="facebook-f" />
            </MDBBtn>
          </a>
          <a href='https://www.instagram.com/david_vill06/' className='me-4 text-reset' id="item">
            <MDBBtn className='m1' floating style={{backgroungColor: '#ac2bac'}}>
                <MDBIcon fab icon="instagram" />
            </MDBBtn>
          </a>
          <a href='https://www.linkedin.com/in/dsvill06/' className='me-4 text-reset' id="item">
            <MDBBtn className='m1' floating style={{backgroundColor: '#0082ca'}}>
                <MDBIcon fab icon="linkedin" />
            </MDBBtn>
          </a>
          <a href='https://github.com/dsvill06' className='me-4 text-reset' id="item">
          <MDBBtn className='m1' floating style={{backgroundColor: '#333333'}}>
                <MDBIcon fab icon="github" />
            </MDBBtn>
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center mt-4'>
          <MDBRow className='mt-3 '>
              <MDBCol>
                <p>
                  <MDBIcon icon="home" className="me-2" />
                  Chapel Hill, Nc 27514, US
                </p>
              </MDBCol>
              <MDBCol>
                <p>
                  <MDBIcon icon="envelope" className="me-3" />
                  dsvill06@unc.edu
                </p>
              </MDBCol>
              <MDBCol>
                <p>
                  <MDBIcon icon="phone" className="me-3" /> + 01 984-9894714
                </p>
              </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
    </MDBFooter>
)