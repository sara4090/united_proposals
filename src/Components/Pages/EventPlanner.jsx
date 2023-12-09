import React from 'react';
import './css/hall.css';
import event1 from '../../images/event1.jpg';
import event2 from '../../images/event2.jpg';
import event3 from '../../images/event3.jpeg';
import event4 from '../../images/event4.jpeg';
import event5 from '../../images/event5.jpg';
import event6 from '../../images/event6.jpeg';

const EventPlanner = () => {
    return (
        <div className="container mt-5" >
            <div class="container text-center mt-5">
                <h1 className='text-danger'>Event Planners</h1>
                <h4 className='mt-4'>Beyond Imagination: Let Us Craft Your Perfect Moment with Our Premier Event Planning Services</h4>
                <div class="row mt-5">
                    <div class="col single_card">
                        <div class="card" style={{ width: "18rem;" }}>
                            <img src={event1} class="card-img-top mt-4" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title"> Grande Banquet hall</h5>
                                <p class="card-text"><span>Address:</span>9, Abu Bakar Block New Garden Town, Lahore, Punjab 54600</p>
                                <p><span>Phone: </span>(042) 35864553</p>
                            </div>
                        </div>
                    </div>
                    <div class="col single_card">
                        <div class="card" style={{ width: "18rem;" }}>
                            <img src={event2} class="card-img-top mt-4" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title"> Shahjahan Banquet Hall</h5>
                                <p class="card-text"><span>Address:</span>28 Davis Road, Garhi Shahu, Lahore, Punjab 54000</p>
                                <p><span>Phone: </span>(042) 35864553</p>
                            </div>
                        </div>
                    </div>
                    <div class="col single_card">
                        <div class="card" style={{ width: "18rem;" }}>
                            <img src={event3} class="card-img-top mt-4" alt="..." />
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
                            <img src={event4} class="card-img-top mt-4" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title"> Chalet Banquet Halls</h5>
                                <p class="card-text"><span>Address:</span>6-L, Kalma Chowk Flyover, Lahore – Kasur Rd, Block L Gulberg III, Lahore, Punjab 54000</p>
                                <p><span>Phone: </span>(042) 35864553</p>
                            </div>
                        </div>
                    </div>
                    <div class="col single_card">
                        <div class="card" style={{ width: "18rem;" }}>
                            <img src={event5} class="card-img-top mt-4" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title"> Dewan-e-Khaas</h5>
                                <p class="card-text"><span>Address:</span>Commercial Complex Gaddafi Stadium Gate no 6 to 9, Lahore</p>
                                <p><span>Phone: </span>(042) 35864553</p>
                            </div>
                        </div>
                    </div>
                    <div class="col single_card">
                        <div class="card" style={{ width: "18rem;" }}>
                            <img src={event6} class="card-img-top mt-4" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title"> Mehmaan Khana Marriage Hall</h5>
                                <p class="card-text"><span>Address:</span>Main Rd, Block B, Sabzazar, Lahore, Punjab, 306 B Main Boulevard Sabzazar, Sabzazar Block B Sabzazar Housing Scheme Phase 1 & 2 Lahore, Punjab 54000</p>
                                <p><span>Phone: </span>(042) 35864553</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default EventPlanner