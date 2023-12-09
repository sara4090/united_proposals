import React from 'react';
import { Link } from 'react-router-dom'
import app from '../../images/video-call.png';
import playstore from '../../images/playstore.png';
import appstore from '../../images/appstore.png';

const SectionThree = () => {
  return (
    // <div className="container-fluid " style={{ background: 'linear-gradient(106.5deg, rgba(255, 215, 185, 0.91) 23%, rgba(223, 159, 247, 0.8) 93%)', height: '50vh' }}>

    <div class="card mb-3 container-fluid mt-5 h-100 d-inline-block" style={{ border: 'none',background: '#f2f3f5    ' }}>
      <div class="row g-0">
        <div class="col-md-4 mt-2 h-10" >
          <h3 class="card-title mt-3 text-danger">Download our App</h3>
          <img src={app} class="img-fluid rounded-start mt-3" alt="..." style={{ height: '250px'  }} />
        </div>
        <div class="col-md-8 mt-4">
          <div class="card-body mt-2">
            <p class="card-text mt-5">
              <h4 className='text-danger'>United Proposals</h4>
              Unlike traditional rishta theory and matchmaking, <br />We rely on a cooperative, interactive bond <br />between our representatives and our clients.</p>
              <h5>You can download the app.</h5>
            <Link to='/'><img className='m-4' src={playstore} alt="" style={{ height: '40px', borderRadius: '10px' }} /></Link>
            <Link to='/'><img src={appstore} alt="" style={{ height: '40px' , borderRadius: '10px'}} /></Link>
          </div>
        </div>
      </div>
    </div>

    // </div>






  )
}

export default SectionThree