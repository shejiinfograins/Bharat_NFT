import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

function About() {
  return (
    <div>
        <Header/>

        <section>
            <h1 className='text-center' style={{height: "50vh"}}>About Us</h1>
        </section>

        <Footer/>
    </div>
  )
}

export default About