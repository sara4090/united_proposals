import React from 'react';
import './css/hall.css';
import bout1 from '../../images/bout1.jpg';
import bout2 from '../../images/bout2.jpg';
import bout3 from '../../images/bout3.jpg';
import bout4 from '../../images/bout4.jpg';
import bout5 from '../../images/bout5.jpg';
import bout6 from '../../images/bout6.jpg';

const Boutique = () => {
  return (
    <div className="container mt-5" >
            <div class="container text-center mt-5">
                <h1 className='text-danger'>Boutiques</h1>
                <h4 className='mt-4'>Elegance Redefined: Discover Timeless Fashion at Our Exclusive Boutique</h4>
                <div class="row mt-5">
                    <div class="col single_card">
                        <div class="card" style={{ width: "18rem;" }}>
                            <img src={bout1} class="card-img-top mt-4" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title"> La Boutique</h5>
                                <p class="card-text"><span>Address:</span>G952+H68, MM Alam Rd, Block B2 Block B 2 Gulberg III, Lahore, Punjab Silhouette Studio</p>
                                <p><span>Phone: </span>0311 4134672</p>
                            </div>
                        </div>
                    </div>
                    <div class="col single_card">
                        <div class="card" style={{ width: "18rem;" }}>
                            <img src={bout2} class="card-img-top mt-4" alt="..." />
                            <div class="card-body">
                            <h5 class="card-title">Huma Boutique</h5>
                                <p class="card-text"><span>Address:</span>Block L Gulberg 2, Lahore, Punjab 54660</p>
                                <p><span>Phone: </span>0324 4883368</p>
                            </div>
                        </div>
                    </div>
                    <div class="col single_card">
                        <div class="card" style={{ width: "18rem;" }}>
                            <img src={bout3} class="card-img-top mt-4" alt="..." />
                            <div class="card-body">
                            <h5 class="card-title"> Silhouette Studio</h5>
                                <p class="card-text"><span>Address:</span>327 B Street 7, Cavalry Ground, Lahore, Punjab</p>
                                <p><span>Phone: </span>0311 4134672</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container text-center mt-5">
                <div class="row">
                    <div class="col single_card">
                        <div class="card" style={{ width: "18rem;" }}>
                            <img src={bout4} class="card-img-top mt-4" alt="..." />
                            <div class="card-body">
                            <h5 class="card-title">Danish Zari & Boutique</h5>
                                <p class="card-text"><span>Address:</span>787F Kinari Bazar, Walled City of Lahore, Lahore, Punjab 54000</p>
                                <p><span>Phone: </span>0323 4312358</p>
                            </div>
                        </div>
                    </div>
                    <div class="col single_card">
                        <div class="card" style={{ width: "18rem;" }}>
                            <img src={bout5} class="card-img-top mt-4" alt="..." />
                            <div class="card-body">
                            <h5 class="card-title">Kashish</h5>
                                <p class="card-text"><span>Address:</span>14, Mehran Block, Fortress Stadium، Fotress Exit Rd, Saddar Town, Lahore, Punjab 54810</p>
                                <p><span>Phone: </span>(042) 36684812</p>
                            </div>
                        </div>
                    </div>
                    <div class="col single_card">
                        <div class="card" style={{ width: "18rem;" }}>
                            <img src={bout6} class="card-img-top mt-4" alt="..." />
                            <div class="card-body">
                            <h5 class="card-title"> WORLDTEX BOUTIQUE</h5>
                                <p class="card-text"><span>Address:</span> Main MM Alam Rd, Block C1 Block C 1 Gulberg III, Lahore, Punjab 54000</p>
                                <p><span>Phone: </span>0322 4333982</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
  )
}

export default Boutique