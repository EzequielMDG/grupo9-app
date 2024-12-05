import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import avatarImg from '../img/user/1.jpeg';
import SidebarNav from './SidebarNav';


function Menu() { 
    const navigate = useNavigate(); 
      
    return (
    <div>
        {/* <!-- Header--> */}
        <div className="osahan-page-header mb-auto p-3 bg-light">
            <div className="d-flex align-items-center justify-content-between">
                <a onClick={() => navigate(-1)} className="text-black bg-white rounded-pill shadow-sm icon-sm"><span className="mdi mdi-arrow-left mdi-18px"></span></a>
                {/* <Link to="add-to-address.html" className="d-flex align-items-center text-decoration-none me-auto gap-1">
                    <i className="mdi mdi-map-marker-circle h2 m-0 text-primary"></i>
                    <div className="ms-2 lh-1">
                    <h6 className="text-dark mb-0 fw-bold">Enviar a</h6>
                    <small className="Online text-muted opacity-75 mb-0">Los Pinos 123, Corrientes</small>
                    </div>
                </Link> */}

                <div className="d-flex align-items-center gap-2">
                    <Link to="profile.html"> 
                    <img className='img-fluid avtar-sm rounded-pill bg-white shadow-sm p-1' src={avatarImg} alt="avatar Img" /> 
                    </Link>
                    <Link to="notification.html" className="icon-sm shadow-sm"><span className="mdi mdi-bell-outline text-primary mdi-18px"></span></Link>
                    <Link to="#" className="toggle d-flex align-items-center justify-content-center bg-white shadow-sm icon-sm fs-5 hc-nav-trigger hc-nav-1" role="button" aria-controls="hc-nav-1"><i className="bi bi-list text-primary mdi-18px"></i></Link>
                </div>
            </div> 
        </div>
        {/* <!-- End Header--> */}
		<SidebarNav></SidebarNav>
    </div>
  )
}

export default Menu 