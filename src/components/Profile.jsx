import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import {Container,Row, Col,Tabs,Tab} from 'react-bootstrap'
import ProfileImg from '../assets/img/Profile.png'
import { FaRegCopy } from 'react-icons/fa'
import { FaGlobe } from 'react-icons/fa'
import { FaGithubAlt } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'
import { FaSnapchatGhost } from 'react-icons/fa'
import { FaTiktok } from 'react-icons/fa'
import { FaCommentDots } from 'react-icons/fa'
import { FaYoutube } from 'react-icons/fa'
import ProductCard from './ProductCard'

function Profile() {
  return (
      <div>
        <Header/>
            <section className='profile'>
                <Container>
                    <Row>
                        <Col sm={4}>
                            <div className='profile-detail text-center'>
                                <img src={ProfileImg} alt="profile" className='img-fluid'/>

                                <div className='border mt-3 rounded-pill'>0x0000....0000 <FaRegCopy className='copy-icon ms-1'/></div>

                                <div className='mt-4 heading-name'>
                                    <h1>John</h1>
                                    <h2>@john-123</h2>
                                </div>

                                <div className='edit-profile mt-4'>
                                    <ul className='list-unstyled d-flex justify-content-between align-items-center'>
                                        <li><strong>20</strong> <span className='d-block'>Following</span></li>
                                        <li><strong>10</strong> <span className='d-block'>Followers</span></li>
                                        <li><a href="#">Edit Profile</a></li>
                                    </ul>
                                </div>

                                <div className='Bio mt-4 text-start'>
                                    <h6><strong>Bio</strong></h6>
                                    <hr></hr>
                                    <span>I am web Developer</span>
                                </div>

                                <div className='link text-start mt-4'>
                                    <h6><strong>Links</strong></h6>

                                    <ul className='list-unstyled mt-3'>
                                        <li> <FaGlobe/> https://www.google.com/</li>
                                        <li> <FaGithubAlt/> john#0652</li>
                                        <li> <FaFacebook/> Johndeo</li>
                                        <li> <FaSnapchatGhost/> </li>
                                        <li> <FaTiktok/> </li>
                                        <li> <FaCommentDots/> </li>
                                        <li> <FaYoutube/> </li>
                                    </ul>
                                </div>

                                <div>
                                    <ul className='list-unstyled d-flex justify-content-between border-top border-bottom py-2'>
                                        <li><strong>Joined</strong></li>
                                        <li><strong>Jan 1970</strong></li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                        <Col sm={8}>
                            <Tabs defaultActiveKey="sale" id="uncontrolled-tab-example" className="mb-3 cus-tabs">
                                <Tab eventKey="sale" title="On sale">
                                    <Row>
                                        <Col lg={4} md={6}>
                                            <ProductCard/>
                                        </Col>
                            
                                        <Col lg={4} md={6}>
                                            <ProductCard/>
                                        </Col>
                            
                                        <Col lg={4} md={6}>
                                            <ProductCard/>
                                        </Col>
                                    </Row>
                                </Tab>
                                <Tab eventKey="created" title="Created">
                                    <Row>
                                        <Col lg={4} md={6}>
                                            <ProductCard/>
                                        </Col>
                        
                                        <Col lg={4} md={6}>
                                            <ProductCard/>
                                        </Col>
                        
                                        <Col lg={4} md={6}>
                                            <ProductCard/>
                                        </Col>
                                    </Row>
                                </Tab>
                                <Tab eventKey="activity" title="Activity">
                                    <Row>
                                        <Col lg={4} md={6}>
                                            <ProductCard/>
                                        </Col>
                        
                                        <Col lg={4} md={6}>
                                            <ProductCard/>
                                        </Col>
                        
                                        <Col lg={4} md={6}>
                                            <ProductCard/>
                                        </Col>
                                    </Row>
                                </Tab>
                                <Tab eventKey="owned" title="Owned">
                                    <Row>
                                        <Col lg={4} md={6}>
                                            <ProductCard/>
                                        </Col>
                        
                                        <Col lg={4} md={6}>
                                            <ProductCard/>
                                        </Col>
                        
                                        <Col lg={4} md={6}>
                                            <ProductCard/>
                                        </Col>
                                    </Row>
                                </Tab>
                            </Tabs>
                        </Col>
                    </Row>
                </Container>
            </section>
        <Footer/>
      </div>
    
  )
}

export default Profile