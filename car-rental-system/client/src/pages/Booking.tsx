import React  from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'





export default function Booking() {

    return (
        <div>
              <Header/>
          <div
            className="hpimage"
            style={{
            backgroundImage: "url('https://c4.wallpaperflare.com/wallpaper/66/25/239/machine-grey-background-volvo-wallpaper-preview.jpg')",backgroundRepeat: "no-repeat",WebkitBackgroundSize:"cover",backgroundSize:"cover",height: "110vh"}}
            >
             <a href="/add-payment">
    <button type="button" className="btn btn-primary me-3">
            Pay Now
            </button>

    </a>
             </div>
              <Footer/>
             

        </div>
          
    )
}