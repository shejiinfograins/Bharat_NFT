import React from 'react'
import {Container,Row, Col, Card} from 'react-bootstrap'
import ProductCard from './ProductCard'

function TopCreators() {
  return (
    <section className='topcreators'>
    <Container>
        <Row>
            <Col sm={3}>
                <h4 className='collection-title'>Top Creators</h4>
            </Col>
            <Col sm={9}></Col>
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

export default TopCreators