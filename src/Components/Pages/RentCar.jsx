import React from 'react';
import './css/hall.css';
import car1 from '../../images/car1.jpeg';
import car2 from '../../images/car2.jpg';
import car3 from '../../images/car3.jpg';
import car4 from '../../images/car4.jpeg';
import car5 from '../../images/car5.jpg';
import car6 from '../../images/car6.jpg';

const RentCar = () => {
    return (
        <div className="container mt-5" >
            <div class="container text-center mt-5">
                <h1 className='text-danger'>Rent Car for Wedding</h1>
                <h4 className='mt-4'>Celebrate Love in Style: Unveil Luxury and Elegance with Our Wedding Car Services</h4>
                <div class="row mt-5">
                    <div class="col single_card">
                        <div class="card" style={{ width: "18rem;" }}>
                            <img src={car1} class="card-img-top mt-4" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title"> Faiz Rent A Car</h5>
                                <p class="card-text"><span>Address:</span>Second Floor Office no:1, Ali Plaza, Block B Gulberg 2, Lahore, Punjab</p>
                                <p><span>Phone: </span>0300 9461207</p>
                            </div>
                        </div>
                    </div>
                    <div class="col single_card">
                        <div class="card" style={{ width: "18rem;" }}>
                            <img src={car2} class="card-img-top mt-4" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title"> Lahori Rent A Car Lahore</h5>
                                <p class="card-text"><span>Address:</span>99 Street 147, Sector H Bolck, Dha Phase 1, Lahore, 54660</p>
                                <p><span>Phone: </span>0300 8463025</p>
                            </div>
                        </div>
                    </div>
                    <div class="col single_card">
                        <div class="card" style={{ width: "18rem;" }}>
                            <img src={car3} class="card-img-top mt-4" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title"> Dogar Rent A Car</h5>
                                <p class="card-text"><span>Address:</span>B, 98- B Main Boulevard Sabzazar, Phase 1 & 2 Lahore, Punjab 54600</p>
                                <p><span>Phone: </span> 0300 0500067</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container text-center mt-5">
                <div class="row">
                    <div class="col single_card">
                        <div class="card" style={{ width: "18rem;" }}>
                            <img src={car4} class="card-img-top mt-4" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title"> SAF Rent A Car Lahore</h5>
                                <p class="card-text"><span>Address:</span>E90/43 Street 3, Extension Super Town, Lahore, Punjab 54810</p>
                                <p><span>Phone: </span>0304 2795250</p>
                            </div>
                        </div>
                    </div>
                    <div class="col single_card">
                        <div class="card" style={{ width: "18rem;" }}>
                            <img src={car5} class="card-img-top mt-4" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title"> Lahore Rent a Car</h5>
                                <p class="card-text"><span>Address:</span>37-K, Commercial Area Dha Phase 1, Lahore, 54000</p>
                                <p><span>Phone: </span>0321 8499507</p>
                            </div>
                        </div>
                    </div>
                    <div class="col single_card">
                        <div class="card" style={{ width: "18rem;" }}>
                            <img src={car6} class="card-img-top mt-4" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Orange travels & tours</h5>
                                <p class="card-text"><span>Address:</span>Colors Main Hussain chowk, 18th Avenue, MM Alam Rd, Block B 3 Gulberg III, Lahore, Punjab 54000</p>
                                <p><span>Phone: </span>0301 6605555</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default RentCar