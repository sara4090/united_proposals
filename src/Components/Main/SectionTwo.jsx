import React from 'react';
import './css/sectionTwo.css';
import about from '../../images/bg2.jpg';

const SectionTwo = () => {
    return (
        <div class="card mb-3 mt-5 container" style={{ border: "none" }}>
            <div class="row g-0">

                <div class="col-md-8 card_text">
                    <div class="card-body" style={{ marginTop: '30px' }}>
                        <h2 class="card-title text-danger">We are the Match Makers</h2>
                        <p class="card-text" style={{ fontSize: '16px', lineHeight: '2', wordSpacing: '2px' }}>Step into the realm of United Proposals, where the tapestry of love is woven with threads that defy geographical confines, and connections flourish beyond international borders. Here at United Proposals, we transcend the conventional boundaries of matrimonial platforms, emerging as a harmonious bridge that unites hearts across continents. Our commitment extends beyond matchmaking; <br />
                            we are architects of enduring connections, fostering relationships that thrive on diversity and celebrate the universal language of love. Welcome to a sanctuary where the essence of unity converges with the richness of individual stories, creating a mosaic of love that knows no bounds.</p>

                    </div>
                </div>
                <div class="col-md-4 mt-5 sectiontwo_card_img">
                    <img src={about} class="img-fluid rounded-start mt-5" alt="..."  />
                </div>
            </div>
        </div>
    )
}

export default SectionTwo