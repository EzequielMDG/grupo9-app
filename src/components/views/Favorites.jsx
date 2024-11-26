import React from 'react';
import Header from "../Header/Header";

import CardProducto from "../Card/CardProducto"; 
import Footer from '../Footer';


function Favorites() {
  return (
    <div className="osahan-page d-flex flex-column vh-100 bg-light">
        <Header></Header> 
         <div className="osahan-page-body vh-100 my-auto overflow-auto px-3">
            <div className="btn-group gap-2" role="group" aria-label="Basic checkbox toggle button group">
               <input type="checkbox" className="btn-check" id="btncheck1" autocomplete="off" />
               <label className="btn btn-outline-secondary rounded-pill shadow-sm" for="btncheck1"><span className="mdi mdi-taco lh-sm m-0"></span> Taco</label>
               <input type="checkbox" className="btn-check" id="btncheck2" autocomplete="off" />
               <label className="btn btn-outline-secondary rounded-pill shadow-sm" for="btncheck2"><span className="mdi mdi-hamburger lh-sm m-0"></span> Hamburger</label>
               <input type="checkbox" className="btn-check" id="btncheck3" autocomplete="off" />
               <label className="btn btn-outline-secondary rounded-pill shadow-sm" for="btncheck3"><span className="mdi mdi-egg-fried lh-sm m-0"></span> Egg Fried</label>
            </div>
            <h6 className="mb-3 mt-3 fw-bold">Most Popular</h6> 
            <div className="d-flex gap-3 mb-3">
                <CardProducto></CardProducto> 
                <CardProducto></CardProducto> 
            </div>
            <div className="d-flex gap-3 mb-3">
                <CardProducto></CardProducto>
                <CardProducto></CardProducto> 
            </div>
            <div className="d-flex gap-3 mb-3">
                <CardProducto></CardProducto>
                <CardProducto></CardProducto> 
            </div>
         </div>
         <Footer></Footer>
      </div>
  )
}

export default Favorites
