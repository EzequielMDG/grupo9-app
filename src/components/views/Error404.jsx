import React from 'react';
import { Link } from 'react-router-dom';

function Error404() {
  return (
    <div className="osahan-page d-flex flex-column vh-100 bg-light">
         <div className="osahan-page-body vh-100 my-auto overflow-auto p-3">
            <div id="carouselExampleDark" className="carousel carousel-dark slide pt-5"> 
               <div className="carousel-inner">
                  <div className="carousel-item active" data-bs-interval="10000">
                     <div className="d-flex flex-column text-center gap-1">
                        <span className="mdi mdi-alert-circle-outline cdisplay-1 text-primary"></span>
                        <div className="mb-4">
                           <h5 className="display-4 fw-bold">Página no <br />encontrada</h5>
                           {/* <h2 className="text-secondary opacity-50 fw-normal mb-5">With Best Of Love</h2> */}
                           <div className="osahan-page-footer mt-auto p-3">
                                <div className="d-flex gap-3 justify-content-center">   
                                    <Link to="/Home" className="btn btn-primary rounded-pill w-100 btn-lg">Volver al inicio</Link>  
                                </div>
                            </div>
                        </div>
                     </div>
                  </div> 
               </div>
            </div>
         </div> 
      </div>
  )
}

export default Error404
