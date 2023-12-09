import React, { useEffect } from 'react';
import './css/Nav.css';
import logo from '../../images/log.png'
import { Link, useLocation } from 'react-router-dom';

const NavBar = () => {
    const location = useLocation();
    useEffect(() => {
    }, [location])
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top ">
            <div className="container-fluid">
                <img src={logo} alt="logo" style={{ height: '11vh' }} />
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 " style={{ margin: "auto" }}>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === '/' ? "active" : ""}`} aria-current="page" to="/">Home</Link>
                        </li>
                        <li className={`nav-item ${location.pathname === '/about' ? "active" : ""}`}>
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                        {/* <li className={`nav-item ${location.pathname ==='/featured' ? "active" : ""}`}>
                            <Link className="nav-link" to="/featured">Featured</Link>
                        </li>
                        <li className={`nav-item ${location.pathname ==='/favourite' ? "active" : ""}`}>
                            <Link className="nav-link" to="/favourite">Favourite</Link>
                        </li> */}

                        <li className={`nav-item dropdown ${location.pathname === '/services' ? "active" : ""}`}>
                            <Link className="nav-link dropdown-toggle" to="/services" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Services
                            </Link>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to="/hall">Marriage Hall</Link></li>
                                {/* <li><Link className="dropdown-item" to="/merque">Marquee</Link></li>
                                <li><Link className="dropdown-item" to="/jewelers">Jewelers</Link></li> */}
                                <li><Link className="dropdown-item" to="/caterers">Caterers</Link></li>
                                <li><Link className="dropdown-item" to="/car_rent">Car Rental Service</Link></li>
                                <li><Link className="dropdown-item" to="/decoration">Decoration</Link></li>
                                {/* <li><Link className="dropdown-item" to="/nikah">Nikah Khuwan</Link></li> */}
                                <li><Link className="dropdown-item" to="/event_planner">Event Planner</Link></li>
                                <li><Link className="dropdown-item" to="/boutique">Boutique</Link></li>
                            </ul>
                        </li>
                        <li className={`nav-item ${location.pathname === '/contact' ? "active" : ""}`}>
                            <Link className="nav-link " to="/contact">Contact</Link>
                        </li>
                    </ul>
                    {/* <form className="d-flex" role="search">
                        <Link to="/message"><span className="material-symbols-outlined " style={{ marginRight: '20px', color: 'red' }}>
                            chat
                        </span></Link>
                        <Link to="/notification"><span className="material-symbols-outlined" style={{ marginRight: '20px', color: 'red' }}>
                            notifications
                        </span></Link>

                    </form> */}
                    <Link to="/login"><button className="btn btn-danger" type="submit" style={{marginRight: "10px"}}>Login</button></Link>
                    <Link to="/signup"><button className="btn btn-danger " type="submit" >Signup</button></Link>
                </div>
            </div>
        </nav>
    )
};

export default NavBar