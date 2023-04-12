import React, {useState} from 'react'
import {Nav, Navbar, NavbarBrand} from 'react-bootstrap'
import styled from 'styled-components'
import { MDBContainer } from 'mdb-react-ui-kit';
import { Offcanvas } from 'react-bootstrap';


export const Navigation = () => (
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
  <div class="container-fluid">
    <button
      class="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarTogglerDemo03"
      aria-controls="navbarTogglerDemo03"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i class="fas fa-bars"></i>
    </button>
    <div class="collapse navbar-collapse justify-content-center" id="navbarTogglerDemo03">
      <ul class="navbar-nav mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="home">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="about">About me</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="contact"
            >Contact
          </a>
        </li>
      </ul>
    </div>
  </div>
  </nav>
)

