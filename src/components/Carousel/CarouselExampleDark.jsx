import myImage from '../../img/banner1.png';

import React from 'react'

function CarouselExampleDark() {
  return (
    <div>
        {/* <!-- slider--> */}
        <div id="carouselExampleDark" className="carousel carousel-dark slide">
                  <div className="carousel-indicators">
                      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                  </div>
                  <div className="pb-5">
                      <div className="carousel-inner">
                        <div className="carousel-item active" data-bs-interval="10000">
                            <div className="bg-primary text-white rounded-4 p-4 food-book-back position-relative shadow overflow-hidden shadow">
                              <h2 className="fw-bold mb-1">Promos</h2>
                              <h5 className="mb-1 doctor-book-back-title">¡Solo por hoy!</h5>
                              <p className="mb-3 text-white-50">20% Off con tu compra</p>
                              <a href="food-search.html" className="btn btn-sm btn-book btn-dark rounded-pill small">¡LO QUIERO! <i className="bi bi-arrow-right"></i></a>
                              <div className="food-shop-img"> 
                              		<img className='img-fluid' src={myImage} alt="" /> 
                              </div>
                            </div>
                        </div>
                        <div className="carousel-item" data-bs-interval="2000">
                            <div className="bg-white text-white rounded-4 p-4 food-book-back position-relative shadow overflow-hidden shadow">
                              <h2 className="fw-bold text-primary mb-1">Buy One,</h2>
                              <h5 className="mb-1 doctor-book-back-title text-black">Get One Free!</h5>
                              <p className="mb-3 text-muted small">Double the Deliciousness</p>
                              <a href="food-search.html" className="btn btn-sm btn-book btn-primary rounded-pill small">ORDER NOW <i className="bi bi-arrow-right"></i></a>
                              <div className="food-shop-img">
							  		<img className='img-fluid' src={myImage} alt="" />  
                              </div>
                            </div>         
                        </div>
                        <div className="carousel-item">
                            <div className="bg-primary text-white rounded-4 p-4 food-book-back position-relative shadow overflow-hidden shadow">
                              <h2 className="fw-bold mb-1">Limited</h2>
                              <h5 className="mb-1 doctor-book-back-title">Time Offer!</h5>
                              <p className="mb-3 text-white-50 small">Get 20% Off Your Order</p>
                              <a href="food-search.html" className="btn btn-sm btn-book btn-dark rounded-pill small">ORDER NOW <i className="bi bi-arrow-right"></i></a>
                              <div className="food-shop-img">
							  		<img className='img-fluid' src={myImage} alt="" />  
                              </div>
                            </div>
                        </div>
                      </div>
                  </div>
        </div>
 		{/* <!-- slider-end--> */}
    </div>
  )
}

export default CarouselExampleDark
