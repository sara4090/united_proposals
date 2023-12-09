import React from 'react';
import './css/hall.css';
import decor1 from '../../images/decor1.jpeg';
import decor2 from '../../images/decor2.jpg';
import decor3 from '../../images/decor3.jpg';
import decor4 from '../../images/decor4.jpeg';
import decor5 from '../../images/decor5.jpg';
import decor6 from '../../images/decor6.jpg';

const Decoration = () => {
  return (
<div className="container mt-5" >
            <div class="container text-center mt-5">
                <h1 className='text-danger'>Decorations</h1>
                <h4 className='mt-4'>Transform Dreams into Reality: Elevate Your Event with Our Stunning Decoration Services</h4>
                <div class="row mt-5">
                    <div class="col single_card">
                        <div class="card" style={{ width: "18rem;" }}>
                            <img src={decor1} class="card-img-top mt-4" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Noor Decor</h5>
                                <p class="card-text"><span>Address:</span> 1G, Sharif Complex, Shop No.1, 92-F Main Market, Gulberg 2, Lahore, Punjab 54000</p>
                                <p><span>Phone: </span>0321 9446595</p>
                            </div>
                        </div>
                    </div>
                    <div class="col single_card">
                        <div class="card" style={{ width: "18rem;" }}>
                            <img src={decor2} class="card-img-top mt-4" alt="..." />
                            <div class="card-body">
                            <h5 class="card-title">Dr Hamza Decor</h5>
                                <p class="card-text"><span>Address:</span>41 F, Block F Gulberg 2, Lahore, Punjab 54000</p>
                                <p><span>Phone: </span> 0345 8452451</p>
                            </div>
                        </div>
                    </div>
                    <div class="col single_card">
                        <div class="card" style={{ width: "18rem;" }}>
                            <img src={decor3} class="card-img-top mt-4" alt="..." />
                            <div class="card-body">
                            <h5 class="card-title">Decor Hub</h5>
                                <p class="card-text"><span>Address:</span>Plaza # 41-H, Street 144, opposite KFC, Sector H Dha Phase 1, Lahore, Punjab 54000</p>
                                <p><span>Phone: </span> 0341 4088852</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container text-center mt-5">
                <div class="row">
                    <div class="col single_card">
                        <div class="card" style={{ width: "18rem;" }}>
                            <img src={decor4} class="card-img-top mt-4" alt="..." />
                            <div class="card-body">
                            <h5 class="card-title"> Lahore Home Decor</h5>
                                <p class="card-text"><span>Address:</span>GCX5+8HR, Al-Faisal Town, Lahore, Punjab</p>
                                <p><span>Phone: </span>(042) 35864553</p>
                            </div>
                        </div>
                    </div>
                    <div class="col single_card">
                        <div class="card" style={{ width: "18rem;" }}>
                            <img src={decor5} class="card-img-top mt-4" alt="..." />
                            <div class="card-body">
                            <h5 class="card-title">Multi Decor Home Fashion</h5>
                                <p class="card-text"><span>Address:</span>103, DHA Phase 4 DD Commercial Area Sector CCA Dha Phase 4, Lahore, Punjab</p>
                                <p><span>Phone: </span>0300 9004569</p>
                            </div>
                        </div>
                    </div>
                    <div class="col single_card">
                        <div class="card" style={{ width: "18rem;" }}>
                            <img src={decor6} class="card-img-top mt-4" alt="..." />
                            <div class="card-body">
                            <h5 class="card-title">My Home Decor</h5>
                                <p class="card-text"><span>Address:</span>Lahore – Kasur Rd, Ichhra Lahore, Punjab 54000</p>
                                <p><span>Phone: </span>(042) 35864553</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>  )
}

export default Decoration;