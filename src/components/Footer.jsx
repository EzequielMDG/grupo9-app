import React from 'react';
import {NavLink}  from 'react-router-dom';

function Footer() {
  return (
    <div className="osahan-page-footer mt-auto p-3">
        <div className="d-flex justify-content-between align-items-center bg-white shadow rounded-pill px-3">
            <div className="text-center lh-1 col"> 
                <NavLink to="/Home"  className={({isActive}) => (isActive ? 'active' : '')}>
                    <span className="p-3 d-block">
                        <span className='material-symbols-outlined text-secondary'>home</span>
                    </span>
                </NavLink>
            </div>
            <div className="text-center lh-1 col"> 
                <NavLink to="/Favoritos">
                    <span className='p-3 d-block'>
                        <span className="material-symbols-outlined text-secondary">favorite</span>
                    </span>
                </NavLink>
            </div>
            <div className="text-center lh-1 col"> 
                <NavLink to="/Chat">
                    <span className='p-3 d-block'>
                        <span className="material-symbols-outlined text-secondary">shopping_bag</span>
                    </span>
                </NavLink> 
            </div>
            <div className="text-center lh-1 col">
                <NavLink to="/Notificaciones">
                    <span className="p-3 d-block">
                        <span className="material-symbols-outlined text-secondary">notifications</span>
                    </span>
                </NavLink>
            </div>
            <div className="text-center lh-1 col"> 
                <NavLink to="/MiPerfil">
                    <span className='p-3 d-block'>
                        <span className="material-symbols-outlined text-secondary">person</span>
                    </span>
                </NavLink> 
            </div>
        </div>
    </div>
  )
}

export default Footer
