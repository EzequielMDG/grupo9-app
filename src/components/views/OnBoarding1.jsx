import React from 'react'; 
import {Link}  from 'react-router-dom';

function OnBoarding1() {
  return (
    <div className="osahan-page d-flex flex-column vh-100 bg-light">
         <div className="osahan-page-body vh-100 my-auto overflow-auto p-3">
            <div id="carouselExampleDark" className="carousel carousel-dark slide pt-5">
               <div className="carousel-indicators">
                  <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
               </div>
               <div className="carousel-inner">
                  <div className="carousel-item active" data-bs-interval="10000">
                     <div className="d-flex flex-column text-center gap-1">
                        <span className="mdi mdi-food-outline cdisplay-1 text-primary"></span>
                        <div className="mb-4">
                           <h5 className="display-4 fw-bold">Find foods</h5>
                           <h2 className="text-secondary opacity-50 fw-normal mb-5">With Best Of Love</h2>
                        </div>
                     </div>
                  </div>
                  <div className="carousel-item" data-bs-interval="2000">
                     <div className="d-flex flex-column text-center gap-1">
                        <span className="mdi mdi-bike-fast cdisplay-1 text-primary"></span>
                        <div className="mb-4">
                           <h5 className="display-4 fw-bold">Fast Delivery</h5>
                           <h2 className="text-secondary opacity-50 fw-normal mb-5">With Super Riders</h2>
                        </div>
                     </div>
                  </div>
                  <div className="carousel-item">
                     <div className="d-flex flex-column text-center gap-1">
                        <span className="mdi mdi-chef-hat cdisplay-1 text-primary"></span>
                        <div className="mb-4">
                           <h5 className="display-4 fw-bold">Skilled Chefs</h5>
                           <h2 className="text-secondary opacity-50 fw-normal mb-5">With Fantastic Tastes</h2>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="osahan-page-footer mt-auto p-3">
            <div className="d-flex gap-3 justify-content-center"> 
               <Link to="/Home" className="btn btn-outline-primary rounded-pill w-100 btn-lg">Saltar</Link> 
               <Link to="/Registrarme" className="btn btn-primary rounded-pill w-100 btn-lg">Continuar</Link>  
            </div>
         </div>
      </div>
  )
}

export default OnBoarding1
