import React from 'react';
import './css/header.css';
import bg1 from '../../images/bg.jpg';
import bg2 from '../../images/bg1.jpeg';
import bg3 from '../../images/bg3.jpg'

const Header = () => {
  return (
    <div id="carouselExampleDark" class="carousel carousel-light slide">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div class="carousel-inner text-white">
        <div class="carousel-item active" data-bs-interval="10000">
          <img src={bg1} class="d-block w-100" alt="..." />
          <div class="carousel-caption d-none d-md-block header_form">
            <h2 style={{ color: '#fff' }}>Make Your Match </h2>

            <div class="row g-2 carosal_form">

              <div class="col-md ">
                <div class=" form-floating carosal_form">
                  <select class="form-select" id="floatingSelectGrid">
                    <option selected>Choose...</option>
                    <option value="1">Men</option>
                    <option value="2">Women</option>
                  </select>
                  <label for="floatingSelectGrid">I am looking for</label>
                </div>
              </div>
              <div class="col-md">
                <div class="form-floating carosal_form">
                  <select class="form-select" id="floatingSelectGrid">
                    <option selected>22</option>
                    <option value="1">22</option>
                    <option value="2">23</option>
                    <option value="3">24</option>
                    <option value="4">25</option>
                    <option value="5">26</option>
                    <option value="6">27</option>
                    <option value="7">28</option>
                    <option value="8">29</option>
                    <option value="9">30</option>
                    <option value="10">31</option>
                    <option value="11">32</option>
                    <option value="12">33</option>
                    <option value="13">34</option>
                    <option value="14">35</option>
                    <option value="15">36</option>
                    <option value="16">37</option>
                    <option value="17">38</option>
                    <option value="18">39</option>
                    <option value="19">40</option>
                    <option value="20">41</option>
                    <option value="21">42</option>
                    <option value="22">43</option>
                    <option value="23">44</option>
                    <option value="24">45</option>
                    <option value="25">46</option>
                    <option value="26">47</option>
                    <option value="27">48</option>
                    <option value="28">49</option>
                    <option value="29">50</option>
                  </select>
                  <label for="floatingSelectGrid">Min Age</label>
                </div>
              </div>
              <div class="col-md">
                <div class="form-floating carosal_form">
                  <select class="form-select" id="floatingSelectGrid">
                    <option selected>27</option>
                    <option value="1">22</option>
                    <option value="2">23</option>
                    <option value="3">24</option>
                    <option value="4">25</option>
                    <option value="5">26</option>
                    <option value="6">27</option>
                    <option value="7">28</option>
                    <option value="8">29</option>
                    <option value="9">30</option>
                    <option value="10">31</option>
                    <option value="11">32</option>
                    <option value="12">33</option>
                    <option value="13">34</option>
                    <option value="14">35</option>
                    <option value="15">36</option>
                    <option value="16">37</option>
                    <option value="17">38</option>
                    <option value="18">39</option>
                    <option value="19">40</option>
                    <option value="20">41</option>
                    <option value="21">42</option>
                    <option value="22">43</option>
                    <option value="23">44</option>
                    <option value="24">45</option>
                    <option value="25">46</option>
                    <option value="26">47</option>
                    <option value="27">48</option>
                    <option value="28">49</option>
                    <option value="29">50</option>
                  </select>
                  <label for="floatingSelectGrid">Max Age</label>
                </div>
              </div>
              <div class="col-md">
                <div class="form-floating carosal_form">
                  <select class="form-select" id="floatingSelectGrid">
                    <option selected>Select</option>
                    <option value="1">Muslim</option>
                    <option value="2">Hindu</option>
                    <option value="3">Christian</option>
                    <option value="4">Sikh</option>
                    <option value="5">Parsi</option>
                    <option value="6">Jain</option>
                    <option value="7">Buddhist</option>
                    <option value="8">Jewish</option>
                    <option value="9">No Religion</option>
                    <option value="10">Spiritul</option>
                    <option value="11">Other</option>
                  </select>
                  <label for="floatingSelectGrid">Religion</label>
                </div>
              </div>
              <div class="col-md">
                <div class="form-floating carosal_form">
                  <select class="form-select" id="floatingSelectGrid">
                    <option selected>Select</option>
                    <option value="1">Pakistan</option>
                    <option value="2">India</option>
                    <option value="3">USA</option>
                    <option value="4">UK</option>
                    <option value="5">UAE</option>
                    <option value="6">Canada</option>
                    <option value="7">Austrelia</option>
                    <option value="8">New Zealand</option>
                    <option value="9">Saudi Arabia</option>
                    <option value="10">Kowait</option>
                  </select>
                  <label for="floatingSelectGrid">Country</label>

                </div>
              </div>
              <div class="col-md">
                <button type="button" class="btn btn-danger btn-lg form_button"  >
                  Let`s Begin
                </button>
              </div>
 </div>


          </div>
        </div>
        <div class="carousel-item" data-bs-interval="2000">
          <img src={bg2} class="d-block w-100" alt="..." />
          <div class="carousel-caption d-none d-md-block">
            <h5>Second slide label</h5>
            <p>Some representative placeholder content for the second slide.</p>
          </div>
        </div>
        <div class="carousel-item">
          <img src= {bg3} class="d-block w-100" alt="..." />
          <div class="carousel-caption d-none d-md-block">
            <h5>Third slide label</h5>
            <p>Some representative placeholder content for the third slide.</p>
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>

  )
}

export default Header