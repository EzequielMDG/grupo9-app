import React from 'react'
import {Link}  from 'react-router-dom';
import Logo from '../Atoms/Logo';


function LoadApp() {
  return (
    <div>
      <div className="osahan-page d-flex flex-column vh-100 bg-light">
         <div className="osahan-page-body vh-100 my-auto overflow-auto">
            <section className="bg-primary vh-100  d-flex align-items-center">
               <div className="container">
                  <div className="row">
                     <div className="col-12 text-center text-white align-items-center">
                        <div className="py-5 my-5 px-5">
                           <Logo />
                           <div className="col-12 text-center text-white align-items-center mb-5">
                              <div className="spinner-border fs-1" role="status">
                                 <span className="visually-hidden">Loading...</span>
                              </div>
                           </div> 
						         <Link to="/OnBoarding1" className="btn btn-light btn-lg rounded-pill px-4">Ingresar<span className="mdi mdi-arrow-right ms-5"></span></Link>
                           
                        </div>
                     </div>
                  </div>
               </div>
            </section>
         </div>
      </div>
    </div>
  )
}

export default LoadApp
