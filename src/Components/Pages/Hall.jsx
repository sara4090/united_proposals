import React from 'react';
import './css/hall.css';
import hall1 from '../../images/hall1.jpg';
import hall2 from '../../images/hall2.jpg';
import hall3 from '../../images/hall3.jpg';
import hall4 from '../../images/hall4.jpg';
import hall5 from '../../images/hall5.jpg';
import hall6 from '../../images/hall6.jpg';

const Hall = () => {
    return (
        <div className="container mt-5" >
            <div class="container text-center mt-5">
                <h1 className='text-danger'>Marriage Halls</h1>
                <h4 className='mt-4'>Where Dreams Begin: Reserve Your Perfect Wedding Venue</h4>
                <div class="row mt-5">
                    <div class="col single_card">
                        <div class="card" style={{ width: "18rem;" }}>
                            <img src={hall1} class="card-img-top mt-4" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title"> Grande Banquet hall</h5>
                                <p class="card-text"><span>Address:</span>9, Abu Bakar Block New Garden Town, Lahore, Punjab 54600</p>
                                <p><span>Phone: </span>(042) 35864553</p>
                            </div>
                        </div>
                    </div>
                    <div class="col single_card">
                        <div class="card" style={{ width: "18rem;" }}>
                            <img src={hall2} class="card-img-top mt-4" alt="..." />
                            <div class="card-body">
                            <h5 class="card-title"> Shahjahan Banquet Hall</h5>
                                <p class="card-text"><span>Address:</span>28 Davis Road, Garhi Shahu, Lahore, Punjab 54000</p>
                                <p><span>Phone: </span>(042) 35864553</p>
                            </div>
                        </div>
                    </div>
                    <div class="col single_card">
                        <div class="card" style={{ width: "18rem;" }}>
                            <img src={hall3} class="card-img-top mt-4" alt="..." />
                            <div class="card-body">
                            <h5 class="card-title"> Mehmaan Khana Marriage Hall</h5>
                                <p class="card-text"><span>Address:</span>94-Ferozepur Road, near Shama, Lahore, 54000</p>
                                <p><span>Phone: </span>(042) 35864553</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container text-center mt-5">
                <div class="row">
                    <div class="col single_card">
                        <div class="card" style={{ width: "18rem;" }}>
                            <img src={hall4} class="card-img-top mt-4" alt="..." />
                            <div class="card-body">
                            <h5 class="card-title"> Chalet Banquet Halls</h5>
                                <p class="card-text"><span>Address:</span>6-L, Kalma Chowk Flyover, Lahore – Kasur Rd, Block L Gulberg III, Lahore, Punjab 54000</p>
                                <p><span>Phone: </span>(042) 35864553</p>
                            </div>
                        </div>
                    </div>
                    <div class="col single_card">
                        <div class="card" style={{ width: "18rem;" }}>
                            <img src={hall5} class="card-img-top mt-4" alt="..." />
                            <div class="card-body">
                            <h5 class="card-title"> Dewan-e-Khaas</h5>
                                <p class="card-text"><span>Address:</span>Commercial Complex Gaddafi Stadium Gate no 6 to 9, Lahore</p>
                                <p><span>Phone: </span>(042) 35864553</p>
                            </div>
                        </div>
                    </div>
                    <div class="col single_card">
                        <div class="card" style={{ width: "18rem;" }}>
                            <img src={hall6} class="card-img-top mt-4" alt="..." />
                            <div class="card-body">
                            <h5 class="card-title"> Mehmaan Khana Marriage Hall</h5>
                                <p class="card-text"><span>Address:</span>Main Rd, Block B, Sabzazar, Lahore, Punjab, 306 B Main Boulevard Sabzazar, Sabzazar Housing Scheme Phase 1 & 2 Lahore, Punjab 54000</p>
                                <p><span>Phone: </span>(042) 35864553</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Hall