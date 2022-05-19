import React,{useState} from 'react';
import {Navbar, Container, Nav, Form, FormControl} from 'react-bootstrap'
import logo from '../assets/img/bharat-token.png'
import { FaSearch } from 'react-icons/fa'
import { FaUserCircle } from 'react-icons/fa'
import {Link} from 'react-router-dom'
function Header() {
  
return (
  <Navbar expand="lg" className='cus_navbar' variant="dark">
    <Container>
        <Link to='/'><img src={logo} alt="logo" className="logo" /></Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <div class="me-auto m-auto w-40">
                <Form className="form-sec">
                    <FaSearch />
                    <FormControl
                      type="search"
                      placeholder="Search items and account"
                      className="search-input me-2"
                    />
                 </Form>
            </div>
            <Nav>
               <Link type="button" class="btn btn-outline-secondary me-5" to='/create'>Create</Link>
               
       
               
                
             

        <Link type="button" class="btn btn-outline-secondary" to='/profile' >Login</Link>
        </Nav>

        <div className='login-btn'>
            <Link type="button" class="btn btn-outline-secondary" to='/'>Logout</Link>

            <Link type="button" class="btn btn-outline-secondary" to=''>1.4164ETH</Link>

            <Link type="button" class="btn btn-outline-secondary" to=''>Ethereum</Link>

            <Link type="button" className='user-icon' to='/edit_profile'> <FaUserCircle /></Link>
         </div>
        </Navbar.Collapse>
    </Container>
</Navbar>
)
}

export default Header