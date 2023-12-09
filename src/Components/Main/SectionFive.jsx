import React from 'react';
import './css/secFive.css';
// import card_image from '../../images/card_bg.png'

const SectionFive = () => {
    return (

        <div className="container-fluid mt-5 h-100 d-inline-block " style={{ background: "rgb(250, 221, 231)" }}>
            <h3 className="mt-5 " >Pakistan`s No.1 Matrimony Service</h3>

            <div class="container text-center mt-5 ">
                <div class="row mt-5 " >
                    <div class="col mt-5">
                        <b>Mother Tongue</b>
                        <hr />
                        <p style={{ lineHeight: '2' }} className='mt-4'>Bengali | Gujarati | Hindi | Kannada | Malayalam | Marathi | Odia | Punjabi | Sindhi | Tamil | Telugu</p>
                    </div>
                    <div class="col mt-5">
                        <b>Relegion</b>
                        <hr />
                        <p style={{ lineHeight: '2' }} className='mt-4'>  Buddhist | Christian | Jain | Muslim</p>
                    </div>
                    <div class="col mt-5">
                        <b>Community</b>
                        <hr />
                        <p style={{ lineHeight: '2' }} className='mt-4'> Adi | DravidaArya | Vysya | Brahmin | EzhavaIyer | Kamma | Maratha | Nadar | Nair | Reddy | Vokkaliga | Yadav</p>
                    </div>
                </div>
                <div className="container justtify-content-center mt-5">
                    <h6 className='bg-light text-danger mt-5 h-100 d-inline-block' style={{
                        padding: "20px",
                        borderRadius: "10px",
                        fontWeight: "600",
                        fontSize: "20px"
                    }}>Trusted by Millions
                    </h6>
                    <hr />
                    <div class="container text-center">
                        <div class="row container secFive" >
                            <div class="col">
                                <span class="material-symbols-outlined">
                                    group
                                </span>
                                <p>Best Matches</p>
                            </div>
                            <div class="col">
                                <span class="material-symbols-outlined">
                                    verified
                                </span>
                                <p>Verified Profiles</p>
                            </div>
                            <div class="col">
                                <span class="material-symbols-outlined">
                                    lock
                                </span>
                                <p>100% Privecy</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default SectionFive;