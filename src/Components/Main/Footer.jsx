import React from 'react';
import './css/footer.css'
import logo from '../../images/log.png';

const Footer = () => {
  return (
    <div class="container-fliud " style={{ background: "rgb(250, 221, 231)" }}>
      <footer class=" container pt-4 my-md-5 pt-md-5 border-top footer_container">
        <div className='container footer'>
          <img className='footer_logo' src={logo} alt="" style={{ width: "15%" }} />
          <h6 className='footer_heading'>Marriages are Made In Heaven But are Celebrated On Earth.</h6>
        </div>

        <div class="container footerec_sec">
          <div class="row footer_section">
            <div class="col">
              <ul class="nav flex-column footer-ul">
              <h6>Our Company</h6>
                <li class="nav-item mb-2"><a href="/" class="nav-link p-0 text-muted">Social Connections</a></li>
                <li class="nav-item mb-2"><a href="/" class="nav-link p-0 text-muted">Media Room</a></li>
                <li class="nav-item mb-2"><a href="/" class="nav-link p-0 text-muted">FAQs</a></li>
                <li class="nav-item mb-2"><a href="/" class="nav-link p-0 text-muted">Connections</a></li>
              </ul>
            </div>
            <div class="col">
              <h6>Privecy Poicy</h6>
              <ul class="nav flex-column">
                <li class="nav-item mb-2"><a href="/" class="nav-link p-0 text-muted">Company Policies</a></li>
                <li class="nav-item mb-2"><a href="/" class="nav-link p-0 text-muted">Terms of Services</a></li>
                <li class="nav-item mb-2"><a href="/" class="nav-link p-0 text-muted">Picture Policy</a></li>
                <li class="nav-item mb-2"><a href="/" class="nav-link p-0 text-muted">Disclaimer</a></li>
                <li class="nav-item mb-2"><a href="/" class="nav-link p-0 text-muted">Report Misuse</a></li>
              </ul>
            </div>
            <div class="col">
              <h6>Find Us</h6>
              <ul class="nav flex-column">


                {/* <span class="material-symbols-outlined text-danger">mail</span> */}
                <li class="nav-item mb-2"><a href="/" class="nav-link p-0 text-muted"><b>Email</b>: info@unitedproposals.com</a></li>


                {/* <span class="material-symbols-outlined text-danger">call</span> */}
                <li class="nav-item mb-2"><a href="/" class="nav-link p-0 text-muted"><b>Call us</b>:+92 308 6405555</a></li>


                {/* <span class="material-symbols-outlined text-danger">call_end</span> */}
                <li class="nav-item mb-2"><a href="/" class="nav-link p-0 text-muted"><b>Landline</b>:+92-42-37874463</a></li>

              </ul>
            </div>
          </div>
        </div>
        <hr />

      </footer>
        <div className="container">
          Copyright@unitedproposals.com | All rights reserved 2024
        </div>

    </div>


  )
}

export default Footer