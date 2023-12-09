
import React from 'react';
import './css/SectionFour.css'
import pic from '../../images/1.jpg';
import pic1 from '../../images/2.jpg';
import pic2 from '../../images/3.jpg';
import pic3 from '../../images/4.jpg';
import pic4 from '../../images/5.jpg';
import pic5 from '../../images/6.jpg';

const SectionFour = () => {
    return (
        <>
            <h3 className='mt-5 text-danger'>Testimonials</h3>
            <div id="carouselExampleIndicators" class="carousel active slide carousel-dark ">
                <div class="carousel-indicators">

                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner container">
                    <div class="carousel-item active">
                        <div className="card_wrapper container">
                            <div class="card" >
                                <div className="image_wrapper">
                                    <img src={pic} alt="..." />
                                </div>
                                <div class="card-body">
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                            <div class="card" >
                                <div className="image_wrapper">
                                    <img src={pic1} alt="..." />
                                </div>
                                <div class="card-body">
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                            <div class="card" >
                                <div className="image_wrapper">
                                    <img src={pic2} alt="..." />
                                </div>
                                <div class="card-body">
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="carousel-item">
                        <div className="card_wrapper container">
                            <div class="card" >
                                <div className="image_wrapper">
                                    <img src={pic3} alt="..." />
                                </div>
                                <div class="card-body">
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                            <div class="card" >
                                <div className="image_wrapper">
                                    <img src={pic4} alt="..." />
                                </div>
                                <div class="card-body">
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                            <div class="card" >
                                <div className="image_wrapper">
                                    <img src={pic5} alt="..." />
                                </div>
                                <div class="card-body">
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div className="card_wrapper container">
                            <div class="card" >
                                <div className="image_wrapper">
                                    <img src={pic3} alt="..." />
                                </div>
                                <div class="card-body">
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                            <div class="card" >
                                <div className="image_wrapper">
                                    <img src={pic4} alt="..." />
                                </div>
                                <div class="card-body">
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                            <div class="card" >
                                <div className="image_wrapper">
                                    <img src={pic5} alt="..." />
                                </div>
                                <div class="card-body">
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}

export default SectionFour