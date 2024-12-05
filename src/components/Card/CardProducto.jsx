import { Link } from 'react-router-dom';
import './card.css';
import React from 'react'


function CardProducto({nombre, precio, imagen, id}) {        
    return (  
        <div className="card rounded-4 border-0 shadow-sm osahan-card">
		    <Link to={`/Detalle/${id}`} key={id}>
            <div className="card-body d-flex flex-column">
                <span className="material-symbols-outlined ms-auto">favorite</span> 
                <img className='img-fluid mb-2' src={imagen} alt="" />
                <div className="d-flex">
                    {/* <span className="badge rounded-pill bg-info-subtle pt-1 text-info">Healthy</span> */}
                </div>
                <h5 className="mb-2 fw-bold">{nombre}</h5>
                <div className="d-flex gap-2 align-items-center mb-2">
                    {/* <p className="text-secondary opacity-75 mb-0 miny-text">24 min</p> */}
                    {/* <p className="text-primary opacity-75 mb-0 miny-text"><span className="mdi mdi-star text-primary"></span> 4.8</p> */}
                </div>
                <div className="d-flex align-items-center">
                    <h4 className="mb-0">${precio}</h4>
                    <a href="add-to-cart.html" className="text-decoration-none bg-dark rounded-pill p-1 d-flex align-items-center justify-content-center ms-auto"><span className="material-symbols-outlined text-white">add</span></a>
                </div>
            </div> 
            </Link> 
        </div>   
    );
  }
  
  export default CardProducto

