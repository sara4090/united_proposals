import React from 'react';
import './css/about.css';
import aboutus from '../../images/about.jpeg';
// import about from '../../images/sec5.jpeg';
// import download from '../../images/download.jpeg';
import match from '../../images/match.jpeg';
import privecy from '../../images/privecy.jpg';
import profile from '../../images/apart.jpg';
import support from '../../images/support.jpg';

const About = () => {
    return (

        <div className="container-fluid main_container">
            {/* <div class="card text-bg-dark">
                <img src={download} class="card-img" alt="..." style={{ height: "50%" }} />
                <div class="card-img-overlay">
                    <h1 class="card-title mt-4">About Us</h1>

                </div>
            </div> */}
            <div class=" container mt-5 card mb-3" style={{ border: "none" }}>
                <div class="row g-0">
                    <div class="col-md-4 mt-5">
                        <img src={aboutus} class="img-fluid rounded-start mt-5" alt="..." style={{ borderRadius: "10px" }} />
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h1 class="card-title" style={{ fontSize: "5em" }}>About Us</h1>
                            <p class="card-text" style={{ lineHeight: "2" }}>
                                Welcome to United Proposals – Where Love Finds its Forever Home

                                At United Proposals, <br />we believe in the transformative power of love  and the sacred journey that is marriage. Our platform is <br /> more than just a space to connect individuals; it's a celebration of commitment, compatibility, and the joyous union of two souls destined to share a lifetime of happiness.
                                <br />
                                United Proposals envisions a world where every heart finds its perfect match, and every love story is destined for eternity. We strive to create a harmonious and inclusive community where diverse individuals come together to build lasting relationships based on trust, respect, and shared values.
                                <br />
                                We are a team of professionals who have been in the industry for over 7 years and we understand your needs perfectly.
                                We are a team of passionate individuals who believe in the power of love and commitment. Our mission is simple; we want to help you.
                                <br />
                                Embark on a seamless journey towards a lifetime of togetherness with our exceptional matrimony services. At United Proposals, we redefine the way you experience the search for your life partner.



                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container text-center mt-5">
                <h3>What Sets Us Apart?</h3>
                <div class="row mt-5">
                    <div class="col about_section">

                        <div class="card" style={{ width: "18rem;" }}>
                            <img src={match} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h6>Personalized Matchmaking</h6>
                                <p class="card-text">We understand that each person is unique, and so are their preferences. Our advanced matchmaking algorithms consider not only the basic criteria but also delve into deeper compatibility factors, ensuring that your match is not just a match but a perfect complement.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col about_section">
                        <div class="card" style={{ width: "18rem;" }}>
                            <img src={privecy} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h6>Privacy and Security</h6>
                                <p class="card-text">Your privacy is our top priority. We employ the latest security measures to safeguard your information and ensure a secure environment for you to explore and connect.

                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col about_section">
                        <div class="card" style={{ width: "18rem;" }}>
                            <img src={profile} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h6>Verified Profiles</h6>
                                <p class="card-text">Say goodbye to uncertainties. We verify each profile to provide you with a genuine and trustworthy community. Our commitment to authenticity ensures that you can focus on building meaningful connections without worrying about the legitimacy of profiles.

                                </p>
                            </div>
                        </div>
                    </div>


                </div>
            </div>

            <div className="container-fluid text-center mt-5 ">
                <h4>Join Us in the Celebration of Love</h4>

                <div class="card mb-3 mt-5 about_support " style={{ maxWidth: "540px;", border: "none" }}>
                    <div class="row g-0 join_us" >

                        <div class="col-md-8 mt-5">
                            <div class="card-body mt-5" style={{textAlign: "center",  margin: "auto ", lineHeight: "2"}}>
                                <h6 class="card-title text-danger">At United Proposals</h6>
                                <p class="card-text"> We invite you to embark on a journey of love, companionship, and joy. Let us be a part of your story, helping you find a soulmate with whom you can create a lifetime of cherished memories. Your happily ever after awaits – start your adventure with us today!</p>
                            </div>
                        </div>
                        <div class="col-md-4 join_img mb-5" >
                            <img src={support} class="img-fluid rounded-start" alt="..."  />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default About