import React from 'react'
import {Card} from 'react-bootstrap'
import { FaUserCircle } from 'react-icons/fa'
import featured from '../assets/img/featured.jpg'
import {Link} from 'react-router-dom'

function ProductCard() {
  return (
        <Card className='mt-4'>
            <Link to='/prod_detail'>
            <Card.Img src={featured} />
                <Card.Body>
                    <div className='user-section d-flex justify-content-between'>
                        <div><FaUserCircle/></div>
                        <h5>username</h5>
                    </div>
                        
                    <Card.Text className='d-flex justify-content-between mb-2'>
                        <div>Lorem Ipsum</div>
                        <div><strong>&52.00</strong></div>
                    </Card.Text>

                    <Card.Text className='d-flex justify-content-between'>
                        <div>Lorem Ipsum</div>
                        <div><strong>&52.00</strong></div>
                    </Card.Text>
                </Card.Body>
            </Link>
        </Card>
    
  )
}

export default ProductCard