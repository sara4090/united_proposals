import React from 'react';
import './css/login.css';
import login from '../../images/login.jpg';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div class="container card mb-3 mt-5 login_card" style={{ maxWidth: "540px;" }}>
            <div class="row g-0">
                <div class="col-md-4 login_img">
                    <img src={login} class="img-fluid rounded-start" alt="..." />
                </div>
                <div class="col-md-8">
                    <div class="card-body">

                        <form>
                            <h5 className='login_heading'>Nice to meet you</h5>
                            <div class="mb-3 mt-5">
                                <label for="exampleInputEmail1" class="form-label">Email address</label>
                                <input type="email" class="form-control login_form"  />
                                <div class="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">Password</label>
                                <input type="password" class="form-control login_form" />
                            </div>
                           
                            <button type="submit" class="btn btn-danger">Submit</button>
                            <p className='mt-1'>Dont have an account? <Link to="/signup"> <span className='span'>Create here </span></Link> </p>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login