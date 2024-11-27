import React from 'react';
import {Link}  from 'react-router-dom';

function IconCard() {
  return (
    <div>
        <div className="row g-2 ingrediants-box">
            <div className="col">
                <div className="bg-white shadow-sm rounded-4 text-center p-2 position-relative">
                <span className="mdi mdi-pizza fs-4 bg-danger text-white rounded-pill mt-1"></span>
                <p className="small m-0 text-dark my-1">Pizzas</p>
                <Link href="like.html" className="stretched-link"></Link>
                </div>
            </div>
            <div className="col">
                <div className="bg-white shadow-sm rounded-4 text-center p-2 position-relative">
                <span className="mdi mdi-noodles fs-4 bg-success text-white rounded-pill mt-1"></span>
                <p className="small m-0 text-dark my-1">Sandwiches</p>
                <Link href="like.html" className="stretched-link"></Link>
                </div>
            </div>
            <div className="col">
                <div className="bg-white shadow-sm rounded-4 text-center p-2 position-relative">
                <span className="mdi mdi-ice-cream fs-4 bg-warning text-white rounded-pill mt-1"></span>
                <p className="small m-0 text-dark my-1">Empanadas</p>
                <Link href="like.html" className="stretched-link"></Link>
                </div>
            </div>
            <div className="col">
                <div className="bg-white shadow-sm rounded-4 text-center p-2 position-relative">
                <span className="mdi mdi-bread-slice fs-4 bg-info text-white rounded-pill mt-1"></span>
                <p className="small m-0 text-dark my-1">Confitería</p>
                <Link href="like.html" className="stretched-link"></Link>
                </div>
            </div>
            <div className="col">
                <div className="bg-white shadow-sm rounded-4 text-center p-2 position-relative">
                <span className="mdi mdi-cake fs-4 bg-dark text-white rounded-pill mt-1"></span>
                <p className="small m-0 text-dark my-1">Postres</p>
                <Link href="like.html" className="stretched-link"></Link>
                </div>
            </div>
        </div> 
    </div>
  )
}

export default IconCard
