import React from 'react';
import Header from "../Header/Header";

import CardProducto from "../Card/CardProducto"; 
import Footer from '../Footer';
import { Link } from 'react-router-dom';

const productos = [
    { id: 1, nombre: "Pizza Margarita", precio: 12.562, imagenProducto: "/img/productos/pizza1.png" },
    { id: 2, nombre: "Pizza Pepperoni", precio: 14.000, imagenProducto: "/img/productos/pizza2.png" },
    { id: 3, nombre: "Pizza Cuatro Estaciones", precio: 16.000, imagenProducto: "/img/productos/pizza3.png" },
    { id: 4, nombre: "Pizza Cuatro Estaciones", precio: 16.000, imagenProducto: "/img/productos/pizza4.png" },
    { id: 5, nombre: "Pizza Cuatro Estaciones", precio: 16.000, imagenProducto: "/img/productos/pizza5.png" },
    { id: 6, nombre: "Pizza Cuatro Estaciones", precio: 16.000, imagenProducto: "/img/productos/pizza6.png" }
]


function Favorites() { 
    const [precio] = productos.map((producto) => producto.precio);
    console.log(precio); // Esto imprimirá el primer precio.
  return (
    <div className="osahan-page d-flex flex-column vh-100 bg-light">
        <Header></Header> 
         <div className="osahan-page-body vh-100 my-auto overflow-auto px-3">
            <div className="btn-group gap-2" role="group" aria-label="Basic checkbox toggle button group">
               <input type="checkbox" className="btn-check" id="btncheck1" autoComplete="off" />
               <label className="btn btn-outline-secondary rounded-pill shadow-sm" htmlFor="btncheck1"><span className="mdi mdi-taco lh-sm m-0"></span> Taco</label>
               <input type="checkbox" className="btn-check" id="btncheck2" autoComplete="off" />
               <label className="btn btn-outline-secondary rounded-pill shadow-sm" htmlFor="btncheck2"><span className="mdi mdi-hamburger lh-sm m-0"></span> Hamburger</label>
               <input type="checkbox" className="btn-check" id="btncheck3" autoComplete="off" />
               <label className="btn btn-outline-secondary rounded-pill shadow-sm" htmlFor="btncheck3"><span className="mdi mdi-egg-fried lh-sm m-0"></span> Egg Fried</label>
            </div>
            <h6 className="mb-3 mt-3 fw-bold">Recomendados</h6> 
            <div className="card-container grid-container gap-3 mb-3">
                {productos.map((producto) => ( 
                    <Link to={`/Detalle/${producto.id}`} key={producto.id}>
                        <CardProducto
                            imagen={producto.imagenProducto}
                            nombre={producto.nombre} 
                            precio={producto.precio} 
                        />
                    </Link>
                ))}  
            </div> 
         </div>
         <Footer></Footer>
      </div>
  )
}

export default Favorites
