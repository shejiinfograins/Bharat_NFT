import React from 'react'
import {Container,Row, Col,Button} from 'react-bootstrap'
import featured from '../assets/img/featured.jpg'

function Banner() {
  return (
    <div className='bg-images'>
        <Container>
            <Row>
                <Col sm={9}>
                <h1 className="hero-title"> Bringing together artists from the entire <span>BHARAT</span> region </h1>
                <h3 className="hero-subtitle">To Explore, Collect, &amp; Trade NFTs</h3>
                <Button className='mt-4 explore_marketplace_txt'>Explore Marketplace</Button>
                </Col>
                <Col sm={3} className='text-center'>
                    <img src={featured} alt="featured" className='img-fluid w-75 h-auto'/>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Banner