import React from 'react'
import {Container,Row, Col,Button,Card} from 'react-bootstrap'
import { FaHourglassStart } from 'react-icons/fa'
import { FaDoorOpen } from 'react-icons/fa'
import { FaTag } from 'react-icons/fa'
import ProductCard from './ProductCard'


function Trending() {
  return (
    <section className='trending-section'>
        <Container>
            <Row>
                <Col sm={2}>
                    <h4 className='collection-title'>Trending</h4>
                </Col>
                <Col sm={10} className='d-flex justify-content-end align-items-center'>
                    <div>
                        <Button size="sm" variant="outline-primary" className='collection-btn me-2'><FaHourglassStart/> Timed Auctions</Button>
                        <Button size="sm" variant="outline-primary" className='collection-btn me-2'><FaDoorOpen/> Open for bids</Button>
                        <Button size="sm" variant="outline-primary" className='collection-btn'><FaTag/> Fixed Price </Button>
                    </div>
                </Col>
            </Row>
            
            <Row>
                <Col lg={3} md={6}>
                    <ProductCard/>
                </Col>

                <Col lg={3} md={6}>
                    <ProductCard/>
                </Col>

                <Col lg={3} md={6}>
                    <ProductCard/>
                </Col>

                <Col lg={3} md={6}>
                    <ProductCard/>
                </Col>
            </Row>
    </Container>
    </section>
  )
}

export default Trending