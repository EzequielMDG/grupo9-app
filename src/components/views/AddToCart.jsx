import React from 'react';
import { Link } from 'react-router-dom'; 

import bannerImage from '../../img/list/6.jpeg';

function AddToCart() {
  return (
    <div>
      <div className="osahan-page-body vh-90 my-auto overflow-auto">
            <div className="px-3 pb-2 h-cart"> 
				<img className='img-fluid rounded-4 shadow' src={bannerImage} alt="avatar Img" /> 
            </div>
            <div className="p-3">
               <div className="row d-flex">
                  <div className="col-8">
                     <div className="mb-3">
                        <h4 className="mb-0 fw-bold">Chicken Hell</h4>
                        <div className="d-flex align-items-center text-secondary opacity-75 gap-1 mb-2">
                           <p className="mb-0">24min</p>
                           <span className="mdi mdi-circle-small fs-5"></span>
                           <span className="mdi mdi-star text-warning"></span>
                           <p className="mb-0">4.8</p>
                           <span className="mdi mdi-fire text-primary"></span>
                           <p className="mb-0">356 Kcal</p>
                        </div>
                     </div>
                  </div>
                  <div className="col-4 mt-1 text-end">
                     <div className="btn-group ms-auto rounded-pill overflow-hidden px-1 bg-primary" role="group" aria-label="Button group with nested dropdown">
                        <button type="button" className="btn btn-primary fs-5">-</button>
                        <button type="button" className="btn btn-primary fs-5">1</button>
                        <button type="button" className="btn btn-primary fs-5">+</button>
                     </div>
                  </div>
               </div>
               <h6>Description</h6>
               <p className="text-secondary opacity-75 mb-4">Chicken Hell Is The Healthies Chicken For Gym Guys And Girls. It Promote Healthy Life Style And Make Your Energy Booster.</p>
               <h6 className="mb-3">Ingrediants</h6>
               

               <div className="vagitable d-flex gap-2 mb-5 ingrediants-box text-center">
                  <div className="bg-white shadow-sm rounded-3 p-2">
                     <span className="mdi mdi-egg-outline fs-1 bg-danger text-white rounded-pill"></span>
                     <p className="small m-0 text-danger">Egg</p>
                  </div>
                  <div className="bg-white shadow-sm rounded-3 p-2">
                     <span className="mdi mdi-food-steak fs-1 bg-success text-white rounded-pill"></span>
                     <p className="small m-0 text-success">Meat</p>
                  </div>
                  <div className="bg-white shadow-sm rounded-3 p-2">
                     <span className="mdi mdi-fruit-grapes-outline fs-1 bg-warning text-white rounded-pill"></span>
                     <p className="small m-0 text-warning">Grapes</p>
                  </div>
                  <div className="bg-white shadow-sm rounded-3 p-2">
                     <span className="mdi mdi-peanut-outline fs-1 bg-info text-white rounded-pill"></span>
                     <p className="small m-0 text-info">Peanut</p>
                  </div>
               </div>


            </div>
         </div>
         <div className="osahan-page-footer mt-auto p-3">
            <div className="add-btn d-flex align-items-center">
               <h1 className="mb-0 display-5 fw-semibold">$12</h1>
               <h3 className="text-secondary opacity-75 mb-0 mt-2 me-4">.99</h3> 
                <Link to="/Carrito" className="btn btn-primary rounded-4 w-100 btn-lg w-100">Add To Cart</Link> 
            </div>
         </div>
    </div>
  )
}

export default AddToCart
