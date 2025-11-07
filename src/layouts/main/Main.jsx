import { Outlet } from "react-router-dom"
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Main() {
    return (
        <div className='main'>
            <div className='header'>
                <Header/>
            </div>
            <div className='body '>
                <Outlet />
            </div>
            <div className='footer'>
                <Footer/>
            </div>
        </div>
    )
}
