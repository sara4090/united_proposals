import React from 'react';
import './css/contact.css';
import contact from '../../images/contact.jpeg'

const Contact = () => {
    return (
        <div class="card mb-3 mt-5 mb-5 container contact_container" style={{ maxWidth: "540px;" }}>
            <div class="row g-0 mt-5 mb-5">
                <div class="col-md-4 mt-5">
                    <img src={contact} class="img-fluid rounded-start mt-5" alt="..." />
                </div>
                <div class="col-md-8 contact_form">
                    <div class="card-body text-center">
                        <h5 class="card-title text-danger">Elevate Your Experience with United Proposals</h5>
                        <form>
                            <div class="mb-3 ml-5">
                                <label for="name" class="form-label">Name</label>
                                <input type="text" class="form-control form_contact_input" />
                            </div>
                            <div class="mb-3">
                                <label for="" class="form-label">Email address</label>
                                <input type="email" class="form-control form_contact_input" />
                            </div>

                            <label for="floatingTextarea">Comments</label>
                            <div class="form-floating">

                                <textarea class="form-control form_contact_input" placeholder="Leave a comment here" ></textarea>
                            </div>

                            <div class="mb-3">
                                <label for="" class="form-label">Password</label>
                                <input type="password" class="form-control form_contact_input" />
                            </div>


                            <button type="submit" class="btn btn-danger">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;