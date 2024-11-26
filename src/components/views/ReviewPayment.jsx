import React from 'react';
// import { Link } from 'react-router-dom'; 

import bannerImage from '../../img/list/6.jpeg';

function ReviewPayment() {
  return (
    <div>
      <div className="osahan-page-body vh-100 my-auto overflow-auto px-3">
            <div className="item-review bg-white rounded-4 d-flex align-items-center mb-3 shadow overflow-hidden">
                {/* <img className="img-fluid bg-light border payment-success" src="img/list/1.jpeg"> */}
			    <img className='img-fluid bg-light border payment-success' src={bannerImage} alt="avatar Img" />  
               <div className="ps-3">
                  <h6 className="mb-1">Mini Munchies</h6>
                  <p className="m-0 text-primary">$12.99 <span className="text-muted ms-1 text-decoration-line-through">$38.97</span></p>
               </div>
               <div className="text-center ms-auto me-3">
                  <div className="input-group gap-1 align-items-center quantity-compo">
                     <button className="btn btn-outline-primary btn-sm rounded-pill" type="button"><span className="mdi mdi-minus"></span></button>
                     <input type="text" className="form-control form-control-sm border-0" value="1" />
                     <button className="btn btn-outline-primary btn-sm rounded-pill" type="button"><span className="mdi mdi-plus"></span>
                     </button>
                  </div>
               </div>
            </div>
            <div className="item-review bg-white rounded-4 d-flex align-items-center mb-3 shadow overflow-hidden"> 
			    <img className='img-fluid bg-light border payment-success' src={bannerImage} alt="avatar Img" />   
               <div className="ps-3">
                  <h6 className="mb-1">Petite Gourmet</h6>
                  <p className="m-0 text-primary">$15.99 <span className="text-muted ms-1 text-decoration-line-through">$58.97</span></p>
               </div>
               <div className="text-center ms-auto me-3">
                  <div className="input-group gap-1 align-items-center quantity-compo">
                     <button className="btn btn-outline-primary btn-sm rounded-pill" type="button"><span className="mdi mdi-minus"></span></button>
                     <input type="text" className="form-control form-control-sm border-0" value="2" />
                     <button className="btn btn-outline-primary btn-sm rounded-pill" type="button"><span className="mdi mdi-plus"></span>
                     </button>
                  </div>
               </div>
            </div>
         </div>
         <div className="osahan-page-footer mt-auto p-3">
            <div className="input-group mb-3 bg-white rounded-4 shadow overflow-hidden">
               <span className="input-group-text bg-white border-0 ps-3"><i className="mdi mdi-ticket-confirmation-outline fs-4"></i></span>
               <input type="text" className="form-control border-0 px-2 py-3" placeholder="Aplicar cupón" />
               <a href="#" className="btn btn-primary rounded-0 border-0 px-4 btn-lg">Aplicar</a>
            </div>
            <div className="bg-white rounded-4 shadow overflow-hidden p-3">
               <div className="d-flex text-secondary dashed-border align-items-center mb-2">
                  <p className="mb-0 p-font-size">Subtotal</p>
                  <p className="ms-auto mb-0 p-font-size">$58.96</p>
               </div>
               <div className="d-flex text-secondary dashed-border align-items-center mb-3">
                  <p className="mb-0 p-font-size">Delivery</p>
                  <p className="ms-auto mb-0 p-font-size">$3.59</p>
               </div>
               <div className="d-flex align-items-center mb-3">
                  <h6 className="mb-0 fw-bold">Total</h6>
                  <h6 className="ms-auto mb-0 fw-bold">$62.55</h6>
               </div>
               <a href="payment-method.html" className="btn btn-primary rounded-4 w-100 btn-lg">Review Payment</a>
            </div>
         </div>
    </div>
  )
}

export default ReviewPayment
