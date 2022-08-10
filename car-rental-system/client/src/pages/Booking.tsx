import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'

export default function Booking() {

    return (
        <div>
            <Header />
            <div
                className="hpimage"
                style={{
                    backgroundImage: "url('https://c4.wallpaperflare.com/wallpaper/66/25/239/machine-grey-background-volvo-wallpaper-preview.jpg')", backgroundRepeat: "no-repeat", WebkitBackgroundSize: "cover", backgroundSize: "cover", height: "110vh"
                }}
            >
                <a href="/add-payment">
                    <button type="button" className="btn btn-primary me-3">
                        Pay Now
                    </button>
                </a>
                <div className="row">
                <div className="card col-lg-3 col-md-4 col-xs-6">
                    <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                        <img src="https://mdbcdn.b-cdn.net/img/new/standard/nature/111.webp" className="img-fluid" />
                        <a href="#!">
                            <div className="mask" style={{backgroundColor: "rgba(251, 251, 251, 0.15)"}}></div>
                        </a>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
                        <a href="#!" className="btn btn-primary">Pay</a><a href="#!" className="btn btn-primary">Edit</a><a href="#!" className="btn btn-primary">Delete</a>
                    </div>
                </div>
                <div className="card col-lg-3 col-md-4 col-xs-6">
                    <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                        <img src="https://mdbcdn.b-cdn.net/img/new/standard/nature/111.webp" className="img-fluid" />
                        <a href="#!">
                            <div className="mask" style={{backgroundColor: "rgba(251, 251, 251, 0.15)"}}></div>
                        </a>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
                        <a href="#!" className="btn btn-primary">Pay</a><a href="#!" className="btn btn-primary">Edit</a><a href="#!" className="btn btn-primary">Delete</a>
                    </div>
                </div>
                <div className="card col-lg-3 col-md-4 col-xs-6">
                    <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                        <img src="https://mdbcdn.b-cdn.net/img/new/standard/nature/111.webp" className="img-fluid" />
                        <a href="#!">
                            <div className="mask" style={{backgroundColor: "rgba(251, 251, 251, 0.15)"}}></div>
                        </a>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
                        <a href="#!" className="btn btn-primary">Pay</a><a href="#!" className="btn btn-primary">Edit</a><a href="#!" className="btn btn-primary">Delete</a>
                    </div>
                </div>
                </div>
            </div>
            <Footer />


        </div>

    )
}