import React from 'react';
import Footer from '../Footer';
import { deleteToken, token } from '../../helpers/auth';
import { Link, useNavigate } from 'react-router-dom';

function Profile() {
   const nav = useNavigate()
   const handleSession = () => {
      deleteToken()
      nav("/Home")
  }
  return (
    <div className="osahan-page d-flex flex-column vh-100 bg-light">
         {/* <div className="osahan-page-header d-flex align-items-center justify-content-between mb-auto p-3">
            <a href="home.html" className="text-black bg-white rounded-pill shadow-sm icon-sm"><span className="mdi mdi-arrow-left mdi-18px"></span></a>
            <h6 className="mb-0 ms-3 me-auto text-black fw-bold"></h6>
            <div className="d-flex align-items-center gap-2">
               <a href="notification.html" className="icon-sm shadow-sm"><span className="mdi mdi-bell-outline mdi-18px"></span></a>
               <a href="#" className="toggle d-flex align-items-center justify-content-center bg-white shadow-sm icon-sm fs-5 hc-nav-trigger hc-nav-1" role="button" aria-controls="hc-nav-1"><i className="bi bi-list mdi-18px"></i></a>
            </div>
         </div> */}
         <div className="osahan-page-body vh-100 my-auto overflow-auto p-3">
            <h5 className="display-4 fw-bold py-5">Información<br/>de Mi Cuenta</h5>
            <div className="input-group mb-3 bg-white rounded-4 shadow p-1">
               <input type="text" className="form-control border-0 px-3 py-3" placeholder="Nombre y Apellido"/>
               <span className="input-group-text bg-white border-0 ps-3"><i className="mdi mdi-account-edit-outline fs-4"></i></span>
            </div>
            <div className="input-group mb-3 bg-white rounded-4 shadow p-1">
               <input type="text" className="form-control border-0 px-3 py-3" placeholder="nombre@mail.com"/>
               <span className="input-group-text bg-white border-0 ps-3"><i className="mdi mdi-account-edit-outline fs-4"></i></span>
            </div>
            <div className="input-group mb-3 bg-white rounded-4 shadow p-1">
               <input type="text" className="form-control border-0 px-3 py-3" placeholder="+00 000000 000"/>
               <span className="input-group-text bg-white border-0 ps-3"><i className="mdi mdi-account-edit-outline fs-4"></i></span>
            </div>
            <div className="col">
               <div className="py-4 vstack gap-3">
                  <a href="verifiction.html" type="button" className="btn btn-primary rounded-4 w-100 btn-lg">Guardar</a>
               </div>
            </div>
         </div>

            {
               !token() ? (
                  <a href="/Login">
                     <div className='p-3 d-block d-flex'>
                           <span className="material-symbols-outlined me-2">login</span>
                           <h4>Iniciar Sesión</h4>
                     </div>
                  </a>  
               ) : (
                  <a onClick={handleSession}>
                     <div className='p-3 d-block d-flex'>
                           <span className="material-symbols-outlined me-2">logout</span>
                           <h4>Cerrar Sesión</h4>
                     </div>
                  </a> 
               )
            }

         
         <Footer></Footer>
      </div>
  )
}

export default Profile
