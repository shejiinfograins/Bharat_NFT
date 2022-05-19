import React from 'react'
import {Container,Row, Col,Button} from 'react-bootstrap'
import ProductCard from './ProductCard'


function Explore() {
  return (
    <section className='explore-section'>
        <Container>
            <Row>
                <Col sm={2}>
                    <h4 className='collection-title'>Explore</h4>
                </Col>
                <Col sm={10} className='d-flex justify-content-end align-items-center'>
                    <div>
                        <Button size="sm" variant="outline-primary" className='collection-btn me-2'>All NFTs</Button>
                        <Button size="sm" variant="outline-primary" className='collection-btn me-2'>Artwork</Button>
                        <Button size="sm" variant="outline-primary" className='collection-btn me-2'>Photography</Button>
                        <Button size="sm" variant="outline-primary" className='collection-btn me-2'>Audio</Button>
                        <Button size="sm" variant="outline-primary" className='collection-btn me-2'>Video</Button>
                        <Button size="sm" variant="outline-primary" className='collection-btn'>Collectibles</Button>
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

export default Explore