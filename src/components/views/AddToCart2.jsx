import React from 'react';
import SidebarNav from '../SidebarNav';

import bannerImage from '../../img/list/6.jpeg';


function AddToCart2() {
  return ( 
      <div className="osahan-page d-flex flex-column vh-100 bg-light"> 
         <div className="osahan-page-body vh-100 my-auto overflow-auto p-3">
            <div className="head text-center">
               <span className="badge bg-primary text-white rounded-pill py-2 px-3 mb-1">Healthy</span>
               <h1 className="mb-0 display-5 fw-semibold">Chicken Hell</h1>
               <p className="text-secondary opacity-75 mb-3">Best Chicken Ever</p>
               {/* <img className="img-fluid w-75 mb-4 rounded-5 shadow" src="img/list/6.jpeg"> */} 

               <img className='img-fluid w-75 mb-4 rounded-5 shadow' src={bannerImage} alt="avatar Img" /> 
               
               <div className="add-btn d-flex align-items-center justify-content-center mb-3">
                  <h1 className="mb-0 display-5 fw-semibold">$12</h1>
                  <h3 className="text-secondary opacity-75 mb-0 mt-2">.99</h3>
               </div>
               <div className="btn-group gap-2 mb-4" role="group" aria-label="Basic checkbox toggle button group">
                  {/* <input type="checkbox" className="btn-check" id="btncheck1c" autocomplete="off"> */}
                  <label className="btn btn-outline-secondary rounded-3 px-3 py-2 fs-5" for="btncheck1c">S</label>
                  {/* <input type="checkbox" className="btn-check" id="btncheck2c" autocomplete="off"> */}
                  <label className="btn btn-outline-secondary rounded-3 px-3 py-2 fs-5 active" for="btncheck2c">M</label>
                  {/* <input type="checkbox" className="btn-check" id="btncheck3c" autocomplete="off"> */}
                  <label className="btn btn-outline-secondary rounded-3 px-3 py-2 fs-5" for="btncheck3c">L</label>
               </div>
               <p className="mb-3">Ingrediants</p>
               <div className="vagitable d-flex gap-2 mb-5 justify-content-center ingrediants-box">
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
            <a href="review-payment.html" className="btn btn-primary rounded-4 w-100 btn-lg">Add To Cart</a>
         </div>
         <SidebarNav></SidebarNav>
      </div>
 
  )
}

export default AddToCart2
