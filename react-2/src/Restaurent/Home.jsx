import React from 'react'
import './Home.css'
import download from './Images/download.jpg'
import images from './Images/images.jpg'
import leg from './Images/leg.jpg'
const Home = () => {
    return (
        <div>
            <h1 className='heading'>Home</h1>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-header">
                            <div>
                                <img className="img" src={download} alt="/" height={250} width={250}></img>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br/>

            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-header">
                            <div>
                                <img className="img" src={images} alt="/" height={250} width={250}></img>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                    <br/>


            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-header">
                            <div>
                                <img className="img" src={leg} alt="/" height={250} width={250}></img>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Home 