import React from 'react'
import { useEffect } from 'react';  
import avatarImg from '../img/user/1.jpeg';


function Menu() {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = '/js/hc-offcanvas-nav.js';
        script.onload = () => {
          // Verifica si hcOffcanvasNav está disponible en el ámbito global
          if (typeof window.hcOffcanvasNav === 'function') {
            const mainNav = document.getElementById('main-nav');
            const toggle = document.querySelector('.toggle');
            const options = {
              disableAt: false,
              customToggle: toggle,
              levelSpacing: 40,
              navTitle: '',
              levelTitles: true,
              levelTitleAsBack: true,
              pushContent: document.getElementById('container'),
              insertClose: 2,
            };
            window.hcOffcanvasNav(mainNav, options);
          } else {
            console.error('hcOffcanvasNav is not defined');
          }
        };
        script.onerror = () => {
          console.error('Failed to load hc-offcanvas-nav.js');
        };
        document.body.appendChild(script);
      }, []);
      
    return (
    <div>
        {/* <!-- Header--> */}
        <div className="osahan-page-header mb-auto p-3 bg-light">
            <div className="d-flex align-items-center justify-content-between">
                <a href="add-to-address.html" className="d-flex align-items-center text-decoration-none me-auto gap-1">
                    <i className="mdi mdi-map-marker-circle h2 m-0 text-primary"></i>
                    <div className="ms-2 lh-1">
                    <h6 className="text-dark mb-0 fw-bold">Enviar a</h6>
                    <small className="Online text-muted opacity-75 mb-0">Los Pinos 123, Corrientes</small>
                    </div>
                </a>
                <div className="d-flex align-items-center gap-2">
                    <a href="profile.html"> 
                    <img className='img-fluid avtar-sm rounded-pill bg-white shadow-sm p-1' src={avatarImg} alt="avatar Img" /> 
                    </a>
                    <a href="notification.html" className="icon-sm shadow-sm"><span className="mdi mdi-bell-outline text-primary mdi-18px"></span></a>
                    <a href="#" className="toggle d-flex align-items-center justify-content-center bg-white shadow-sm icon-sm fs-5 hc-nav-trigger hc-nav-1" role="button" aria-controls="hc-nav-1"><i className="bi bi-list text-primary mdi-18px"></i></a>
                </div>
            </div> 
        </div>
        {/* <!-- End Header--> */}
    </div>
  )
}

export default Menu 