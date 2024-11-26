import React from 'react';
import {Link}  from 'react-router-dom';


function Verification() {
  return (
    <div className="osahan-page d-flex flex-column vh-100 bg-light"> 
        <div className="osahan-page-body vh-100 my-auto overflow-auto p-3">
            <h5 className="display-4 fw-bold py-5">Ingresá un número<br/>de celular</h5>
            <div className="input-group mb-3 bg-white rounded-4 shadow p-1">
                <span className="input-group-text bg-white border-0 ps-3"><i className="mdi mdi-phone-outline fs-4"></i></span>
                <input type="text" className="form-control border-0 px-2 py-3" placeholder="Celular" />
            </div>
            <div className="col">
                <div className="py-4 vstack gap-3"> 
                    <Link to="/VerificarCodigo" type="button" className="btn btn-primary rounded-4 w-100 btn-lg">Verificar</Link> 
 
                    <Link to="#" type="button" className="btn btn-outline-primary rounded-4 w-100 btn-lg">Después</Link> 

                </div>
            </div>
        </div>
        <div className="osahan-page-footer mt-auto p-3">
        </div>
    </div>
  )
}

export default Verification
