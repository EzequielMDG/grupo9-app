import React from 'react';
import {Link}  from 'react-router-dom';


function Login() {
  return (
    <div className="osahan-page d-flex flex-column vh-100 bg-light"> 
         <div className="osahan-page-body vh-100 my-auto overflow-auto p-3">
            <h5 className="display-4 fw-bold py-5">Ingresar a<br/>mi cuenta</h5>
            <div className="input-group mb-3 bg-white rounded-4 shadow p-1">
               <span className="input-group-text bg-white border-0 ps-3"><i className="mdi mdi-email-outline fs-4"></i></span>
               <input type="text" className="form-control border-0 px-2 py-3" placeholder="E-mail" />
            </div>
            <div className="input-group mb-3 bg-white rounded-4 shadow p-1">
               <span className="input-group-text bg-white border-0 ps-3"><i className="mdi mdi-lock-outline fs-4"></i></span>
               <input type="text" className="form-control border-0 px-2 py-3" placeholder="Contraseña" />
            </div>
            <div className="text-end mb-4"><a href="forget-password.html"className="text-secondary text-end text-decoration-none fs-6">No recuerdo mi contraseña</a></div>
            <div className="col">
               <div className="py-4 vstack gap-3"> 
                    <Link to="/Home" type="button" className="btn btn-primary rounded-4 w-100 btn-lg">Ingresar</Link> 

                    <p className="ps-2 fw-semibold fs-5 text-center mt-3 text-secondary">No tenés una cuenta? <Link href="#" className="text-black ps-2 text-decoration-none">Registrarme</Link></p>
               </div>
            </div>
            </div>
            <div className="osahan-page-footer mt-auto p-4 text-center border-top">
            <p className="fw-semibold fs-6 pb-3 mb-0">O ingresar con</p>
            <div className="d-flex gap-3 justify-content-center"> 
                <Link to="/Home" className="btn btn-light rounded-4 w-100 btn-lg shadow"><span className="mdi mdi-google me-2"></span> Google</Link> 
                <Link to="/Home" className="btn btn-light rounded-4 w-100 btn-lg shadow"><span className="mdi mdi-facebook me-2"></span> Facebook</Link> 
            </div>
            </div>
    </div>
  )
}

export default Login
