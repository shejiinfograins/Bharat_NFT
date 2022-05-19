import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import {Container,Row, Col,ListGroup} from 'react-bootstrap'
import featured from '../assets/img/featured.jpg'
import ProfileImg from '../assets/img/Profile.png'
import { FaEdit } from 'react-icons/fa'
import { FaRegCopy } from 'react-icons/fa'

function Prod_detail() {
  return (
    <div>
        <Header/>
        
        <section>
            <Container>
                <Row>
                    <Col sm={4}>
                        <div className='prod-img'>
                            <img src={featured} alt="featured" className='img-fluid'/>
                        </div>

                        <div className='d-flex justify-content-between mt-4'>
                            <div>
                                <h6 className='d-block'>Price</h6>
                                <span>0.04 ETH</span>
                            </div>

                            <div className='owner-img'>
                               <img src={ProfileImg} alt="profile" className='img-fluid'/>
                                
                                <h6>Owned By</h6>
                                <span>Admin</span>
                            </div>
                        </div>

                        <div className='border p-2 mt-4 text-center'>
                            <h6>Accept highest offer</h6>
                        </div>

                        <div className='d-flex justify-content-between mt-4'>
                            <div>
                                1 in Stock
                            </div>

                            <div className='owner-img text-end'>
                                <FaEdit className='me-2'/>
                                <FaRegCopy/>
                            </div>
                        </div>
                    </Col>
                    <Col sm={8}>
                        <ListGroup variant="flush">
                            <ListGroup.Item>
                                <div><h6>Title</h6></div>
                                <div>Admin</div>
                            </ListGroup.Item>
                            
                            <ListGroup.Item>
                                <div><h6>Description</h6></div>
                                <div>Lorem Ipsum is simply dummy text of the printing and Type Setting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                                </div>
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <div><h6>Chain</h6></div>
                                <div>Ethereum</div>
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <div><h6>Token Address</h6></div>
                                <div>Lorem Ipsum is simply dummy text of the printing</div>
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <div><h6>Token ID</h6></div>
                                <div>Lorem Ipsum is simply dummy text of the printing</div>
                            </ListGroup.Item>
                         </ListGroup>
                         
                         <hr></hr>

                            <h5 className='mx-3'><h6>Item Details</h6></h5>

                         <hr></hr>

                         <ListGroup variant="flush">
                            <ListGroup.Item className='d-flex justify-content-start'>
                                <div className='w-50'><h6>Category:</h6></div>
                                <div>Artwork</div>
                            </ListGroup.Item>
                            
                            <ListGroup.Item className='d-flex justify-content-start'>
                                <div className='w-50'><h6>Royalty:</h6></div>
                                <div>2%</div>
                            </ListGroup.Item>

                            <ListGroup.Item className='d-flex justify-content-start'>
                                <div className='w-50'><h6>Unblockable Item:</h6></div>
                                <div>NO</div>
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                </Row>
            </Container>
        </section>

        <Footer/>
    </div>
  )
}

export default Prod_detail