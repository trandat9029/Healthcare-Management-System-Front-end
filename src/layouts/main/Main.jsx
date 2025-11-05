import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Main() {
    return (
        <div className='main'>
            <div className='header'>
                <Header/>
            </div>
            <div className='body h-60'>

            </div>
            <div className='footer'>
                <Footer/>
            </div>
        </div>
    )
}
