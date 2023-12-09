import React from 'react';
import './css/hall.css';
import cat1 from '../../images/caterer1.jpg';
import cat2 from '../../images/caterer2.jpg';
import cat3 from '../../images/caterer3.jpg';
import cat4 from '../../images/caterer4.jpg';
import cat5 from '../../images/caterer5.jpeg';
import cat6 from '../../images/caterer6.jpeg';

const Caterers = () => {
    return (
        <div className="container mt-5" >
            <div class="container text-center mt-5">
                <h1 className='text-danger'>Caterers</h1>
                <h4 className='mt-4'>Beyond the Plate: Unleash Culinary Brilliance at Your Event with Our Catering</h4>
                <div class="row mt-5">
                    <div class="col single_card">
                        <div class="card" style={{ width: "18rem;" }}>
                            <img src={cat1} class="card-img-top mt-4" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title"> AL Tuaam Catering</h5>
                                <p class="card-text"><span>Address:</span> Office # 4, 1st Floor, Zaffar Nadeem Plaza 31-B, Faisal Town, Lahore, 54000</p>
                                <p><span>Phone: </span>0321 8017000</p>
                            </div>
                        </div>
                    </div>
                    <div class="col single_card">
                        <div class="card" style={{ width: "18rem;" }}>
                            <img src={cat2} class="card-img-top mt-4" alt="..." />
                            <div class="card-body">
                            <h5 class="card-title"> Nadeem Catering</h5>
                                <p class="card-text"><span>Address:</span>G87M+J2F, Block E 2 Gulberg III, Lahore, Punjab</p>
                                <p><span>Phone: </span>(042) 35755667</p>
                            </div>
                        </div>
                    </div>
                    <div class="col single_card">
                        <div class="card" style={{ width: "18rem;" }}>
                            <img src={cat3} class="card-img-top mt-4" alt="..." />
                            <div class="card-body">
                            <h5 class="card-title"> Wah g wah Catering</h5>
                                <p class="card-text"><span>Address:</span>6 Abpara housing scheme near DHA EME main canal road, EME, DHA, Lahore, 54000</p>
                                <p><span>Phone: </span>0321 8333386</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container text-center mt-5">
                <div class="row">
                    <div class="col single_card">
                        <div class="card" style={{ width: "18rem;" }}>
                            <img src={cat4} class="card-img-top mt-4" alt="..." />
                            <div class="card-body">
                            <h5 class="card-title"> Mateen Catering</h5>
                                <p class="card-text"><span>Address:</span>V Block Gala Bedian Rd, near Govt Boys High School, Chung Khurd Lahore, Punjab 54792</p>
                                <p><span>Phone: </span> 0300 7578465</p>
                            </div>
                        </div>
                    </div>
                    <div class="col single_card">
                        <div class="card" style={{ width: "18rem;" }}>
                            <img src={cat5} class="card-img-top mt-4" alt="..." />
                            <div class="card-body">
                            <h5 class="card-title"> Sohaib Catering</h5>
                                <p class="card-text"><span>Address:</span>Park, Topaz Block, villas view, Lahore, 54000</p>
                                <p><span>Phone: </span>0322 4460192</p>
                            </div>
                        </div>
                    </div>
                    <div class="col single_card">
                        <div class="card" style={{ width: "18rem;" }}>
                            <img src={cat6} class="card-img-top mt-4" alt="..." />
                            <div class="card-body">
                            <h5 class="card-title">Butt Catering</h5>
                                <p class="card-text"><span>Address:</span>Resort and Farms house, Gate No 3 J5, Sharif Medical Complex Rd, Lahore</p>
                                <p><span>Phone: </span>0300 8080788</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Caterers