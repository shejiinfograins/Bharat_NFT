import React,{useState} from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import {Container,Row, Col,Form,Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'
import { FaImages } from 'react-icons/fa'
import fixedPrice from '../assets/img/fixed-price.png'
import limitedAuction from '../assets/img/limited-auction.png'
import Openbids from '../assets/img/open-bids.png'


function CreatePost() {
    /*Unlock Purchase */
    const [showPurched, setShowPurched] = useState(false)
    const showPurchedBox = ()=>{
        setShowPurched(!showPurched)
    }

     /*Market place */

    const [showMarketPlace, setShowMarketPlace] = useState(false)
    const showMarketPlaceBox = ()=>{
        setShowMarketPlace(!showMarketPlace)
    }
  return (
    <div>
        <Header/>
            <section>
                <Container>
                    <Row>
                        <Col className='Heading-Txt'>
                            <Link to='/Create' className='GoBack_btn fw-bold'><FaArrowLeft className='back-icon'/>  Go Back</Link>

                            <h2 class="fw-bold mb-3 mt-3">Create Post</h2>
                        </Col>
                    </Row>

                    <Row>
                        <Col sm={6}>
                            <span>Upload image</span>

                             <div className='card p-4 mt-3 text-center' style={{border: "2px dashed"}}>
                                <div className="card-body">
                                    <FaImages className='fs-1 mb-3'/>

                                    <p>or drag and drop</p>

                                    <div class="my-4"><small>JPG, PNG, GIF, SVG, MP4, WEBP, MP3, WAV, OGG, GLB, GLTF <br></br> Up to 250MB</small></div>

                                    <Form.Control type="file" />
                                </div>
                            </div>

                            <div className='form-section'>
                                <Form>
                                    <Form.Group className="mt-4 mb-3" controlId="formBasicEmail">
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control type="text" placeholder="" />
                                        <small className='required-text'>* Required</small>
                                    </Form.Group>
                                
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Description</Form.Label>
                                        <Form.Control
                                          as="textarea"
                                          placeholder=""
                                          style={{ height: '100px' }}
                                        />
                                        <small className='required-text'>* Required</small>
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Chain</Form.Label>
                                        <Form.Select aria-label="Floating label select example">
                                            <option>Ethereum</option>
                                            <option value="1">Binance</option>
                                        </Form.Select>
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Chain</Form.Label>
                                        <Form.Select aria-label="Floating label select example">
                                            <option>Artwork</option>
                                            <option value="1">Photography</option>
                                            <option value="1">Audio</option>
                                            <option value="1">Video</option>
                                            <option value="1">Collectibles</option>
                                        </Form.Select>
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Royalty</Form.Label>
                                        <Form.Control type="text" placeholder="e.g 10%" />
                                        <small className='required-text'>* Required</small>
                                    </Form.Group>

                                    <Form.Group className='d-flex justify-content-between mb-1'>
                                        <Form.Label>Unlock once purchased</Form.Label>
                                        <Form.Check 
                                            id="custom-switch"
                                            type="switch"
                                            onClick={showPurchedBox}
                                        />
                                    </Form.Group>

                                   {showPurched ?  
                                     <Form.Group className="mb-3" controlId="formBasicEmail">
                                   <Form.Control
                                     as="textarea"
                                     placeholder="This text will be available to the buyer of the NFT"
                                     style={{ height: '100px' }}
                                   />   
                               </Form.Group> : " "}

                                    <Form.Group className='d-flex justify-content-between mb-1'>
                                        <Form.Label>Put on marketplace</Form.Label>
                                        <Form.Check 
                                            id="custom-switch"
                                            type="switch"
                                            onClick={showMarketPlaceBox}
                                        />
                                    </Form.Group>   

                       { showMarketPlace ?             
                         <div className='d-flex justify-content-between mb-4'>
                       <div className='card me-4 marketplace'>
                           <div className='card-body text-center'>
                               <img src={fixedPrice} alt="single" className='img-fluid w-50'/>
                               <div><strong>Fixed price</strong></div>
                           </div>
                       </div>
                       
                       <div className='card me-4 marketplace'>
                           <div className='card-body text-center'>
                               <img src={limitedAuction} alt="single" className='img-fluid w-50'/>
                               <div><strong>Limited-auction</strong></div>
                           </div>
                       </div>

                       <div className='card marketplace'>
                           <div className='card-body text-center'>
                               <img src={Openbids} alt="single" className='img-fluid w-50'/>
                               <div><strong>Open for bids</strong></div>
                           </div>
                       </div>
                   </div> : " "}

                                    <Link to='/prod_detail' type="submit" className='btn btn-dark py-2 px-5'>Post</Link>
                                </Form>
                            </div>
                        </Col>

                        <Col sm={6}>
                            <strong>Preview</strong>
                            <div className="card mt-3" style={{height: "300px"}}>
                                <div className="card-body">
                                    
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

export default CreatePost