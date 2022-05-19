import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import {Container,Row, Col,InputGroup,FormControl} from 'react-bootstrap'
import ProfileImg from '../assets/img/Profile.png'
import { FaGlobe } from 'react-icons/fa'
import { FaGithubAlt } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'
import { FaSnapchatGhost } from 'react-icons/fa'
import { FaTiktok } from 'react-icons/fa'
import { FaCommentDots } from 'react-icons/fa'
import { FaYoutube } from 'react-icons/fa'

function Edit_profile() {
  return (
    <div>
        <Header/>
        
        <section>
            <Container>
                <Row>
                    <Col md={{ span: 6, offset: 3 }} className="border p-4 rounded shadow">
                        <div className='profile-detail text-center'>
                            <img src={ProfileImg} alt="profile" className='img-fluid'/>
                            <p className='mt-2'>Change Profile Picture</p>
                            <div className='mt-3'>
                                <InputGroup>
                                    <FormControl
                                        placeholder="000000"
                                        aria-label="Recipient's username"
                                        aria-describedby="basic-addon2"
                                        />
                                </InputGroup>
                            </div>

                            <div className='mt-4 heading-name'>
                                <InputGroup className='mb-4'>
                                    <FormControl
                                    placeholder="John"
                                    aria-label="Recipient's username"
                                    aria-describedby="basic-addon2"
                                    />
                                </InputGroup>

                                <InputGroup>
                                <FormControl
                                    placeholder="@john-123"
                                    aria-label="Recipient's username"
                                    aria-describedby="basic-addon2"
                                    />
                                </InputGroup>
                             </div>

                            <div className='edit-profile mt-4'>
                                <ul className='list-unstyled d-flex justify-content-around align-items-center'>
                                    <li className='mr-4'><strong>20</strong> <span className='d-block'>Following</span></li>
                                    <li><strong>10</strong> <span className='d-block'>Followers</span></li>
                                 </ul>
                            </div>

                            <div className='Bio mt-4 text-start'>
                                <h6><strong>Bio</strong></h6>
                                <hr></hr>
                                <InputGroup>
                                    <FormControl
                                    placeholder="I am web Developer"
                                    aria-label="Recipient's username"
                                    aria-describedby="basic-addon2"
                                    />
                                </InputGroup>
                            </div>

                            <div className='link text-start mt-4'>
                                <h6><strong>Links</strong></h6>

                                <ul className='list-unstyled mt-3'>
                                    <li className='d-flex editing_icon'> <FaGlobe/>
                                        <InputGroup>
                                            <FormControl
                                            placeholder="Link"
                                            aria-label="Recipient's username"
                                            aria-describedby="basic-addon2"
                                            />
                                        </InputGroup>
                                    </li>
                                    <li className='d-flex editing_icon'> <FaGithubAlt/>
                                        <InputGroup>
                                            <FormControl
                                            placeholder="john#0652"
                                            aria-label="Recipient's username"
                                            aria-describedby="basic-addon2"
                                            />
                                        </InputGroup>
                                    </li>
                                    <li className='d-flex editing_icon'> <FaFacebook/>
                                        <InputGroup>
                                            <FormControl
                                            placeholder="Johndeo"
                                            aria-label="Recipient's username"
                                            aria-describedby="basic-addon2"
                                            />
                                        </InputGroup>
                                    </li>
                                    <li className='d-flex editing_icon'> <FaSnapchatGhost/> 
                                        <InputGroup>
                                            <FormControl
                                            placeholder="Snapchat"
                                            aria-label="Recipient's username"
                                            aria-describedby="basic-addon2"
                                            />
                                        </InputGroup>
                                    </li>
                                    <li className='d-flex editing_icon'> <FaTiktok/> 
                                        <InputGroup>
                                            <FormControl
                                            placeholder="Tiktok"
                                            aria-label="Recipient's username"
                                            aria-describedby="basic-addon2"
                                            />
                                        </InputGroup>
                                    </li>
                                    <li className='d-flex editing_icon'> <FaCommentDots/> 
                                        <InputGroup>
                                            <FormControl
                                            placeholder="Comment"
                                            aria-label="Recipient's username"
                                            aria-describedby="basic-addon2"
                                            />
                                        </InputGroup>
                                    </li>
                                    <li className='d-flex editing_icon'> <FaYoutube/> 
                                        <InputGroup>
                                            <FormControl
                                            placeholder="Youtube"
                                            aria-label="Recipient's username"
                                            aria-describedby="basic-addon2"
                                            />
                                        </InputGroup>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <ul className='list-unstyled d-flex justify-content-between border-top border-bottom py-2'>
                                    <li><strong>Joined</strong></li>
                                    <li><strong>Jan 1970</strong></li>
                                </ul>
                            </div>

                            <div>
                                <button type="button" class="btn btn-success float-end">Update</button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>

        <Footer/>
    </div>
  )
}

export default Edit_profile