import React from 'react';
import {Link}  from 'react-router-dom';


function VerifyCode() {
  return (
    <div className="osahan-page-body vh-100 my-auto overflow-auto px-3 pt-1">
        <div className="bg-white rounded-5 text-center shadow p-5">
            <div>
                <h3 className="fw-bold text-black">Verificar mi número</h3>
                <p className="text-secondary mb-4">Hemos enviado un código al número de celular que has proporcionado</p>
                <h6 className="text-secondary mb-4">+00 000000 0000</h6>
                <div className="d-flex gap-2 text-center mb-4">
                    <div className="form-outline" data-mdb-input-init="">
                    <input type="text" className="form-control text-center rounded-4 p-3 bg-white" />
                    </div>
                    <div className="form-outline" data-mdb-input-init="">
                    <input type="text" className="form-control text-center rounded-4 p-3 bg-white" />
                    </div>
                    <div className="form-outline" data-mdb-input-init="">
                    <input type="text" className="form-control text-center rounded-4 p-3 bg-white" />
                    </div>
                    <div className="form-outline" data-mdb-input-init="">
                    <input type="text" className="form-control text-center rounded-4 p-3 bg-white" />
                    </div>
                </div>
                <div className="col">
                    <div className="vstack gap-3"> 
                    <Link to="/login" type="button" className="btn btn-primary rounded-4 w-100 btn-lg">Verificar</Link>  
                    <Link to="#" type="button" className="btn btn-outline-primary rounded-4 w-100 btn-lg">Volver a enviar</Link> 

                    </div>
                </div>
            </div>
        </div>
        </div>
  )
}

export default VerifyCode
