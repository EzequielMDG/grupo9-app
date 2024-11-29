import React from 'react';
import { Link } from 'react-router-dom';
import avatarImg from '../img/user/1.jpeg';


function SidebarNav() {
  return (
    <>
        {/* <!-- sidebar nav --> */}
		<nav id="main-nav">
            <ul className="second-nav">
                <li className="osahan-user-profile bg-primary">
                    <div className="d-flex align-items-center gap-2">
                        <img className='rounded-pill img-fluid cw-30' src={avatarImg} alt="avatar Img" /> 

                        <div className="ps-1">
                            <h6 className="fw-bold text-white mb-0">¡Hola, UserName!</h6>
                            {/* <p className="text-white-50 m-0 small">+91 12345-67890</p> */}
                        </div>
                    </div>
                </li>   
                <li><Link to="/Notificaciones"><span className="mdi mdi-bell-outline me-3"></span>Notificaciones</Link></li>  
                <li><Link to="/Populares"><span className="mdi mdi-note-search-outline me-3"></span>Populares</Link></li> 
                <li><Link to="/Cerca"><span className="mdi mdi-map-clock-outline me-3"></span>Restaurantes cerca</Link></li> 
                <li><Link to="/Buscar"><span className="mdi mdi-feature-search-outline me-3"></span>Buscar</Link></li>
                <li><Link to="/Filtrar"><span className="mdi mdi-filter-outline me-3"></span>Filtrar</Link></li> 
                <li><Link to="/Profile"><span className="mdi mdi-account-outline me-3"></span>Mi cuenta</Link></li>
                <li><Link to="/Chat"><span className="mdi mdi-message-outline me-3"></span>Chat</Link></li> 
                <li><Link to="/Carrito"><span className="mdi mdi-cart-outline me-3"></span>Carrito</Link></li>
                <li><Link to="/Rating"><span className="mdi mdi-star-outline me-3"></span>Calificar</Link></li>
                <li className="mt-5"><Link to="/Rating"><span className="mdi mdi-star-outline me-3"></span>Cerrar Sesión</Link></li>

            </ul>
            <ul className="bottom-nav">
                <li className="home"> 
                    <Link to="/Home"><p className="h5 m-0"><span className="mdi mdi-home-variant-outline"></span></p>
                    Home</Link>
                </li>
                <li className="find"> 
                    <Link to="/Buscar"><p className="h5 m-0"><span className="mdi mdi-magnify"></span></p>
                    Buscar</Link>
                </li>
                <li className="more">
                    <Link to="/MiPerfil"><p className="h5 m-0"><span className="mdi mdi-account-circle-outline"></span></p>
                    Mi cuenta</Link>  
                </li>
            </ul>
        </nav> 
    </>
  )
}

export default SidebarNav
