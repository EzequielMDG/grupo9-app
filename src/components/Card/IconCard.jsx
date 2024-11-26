import React from 'react'

function IconCard() {
  return (
    <div>
        <div className="row g-2 ingrediants-box">
            <div className="col">
                <div className="bg-white shadow-sm rounded-4 text-center p-2 position-relative">
                <span className="mdi mdi-pizza fs-4 bg-danger text-white rounded-pill mt-1"></span>
                <p className="small m-0 text-dark my-1">Pizzas</p>
                <a href="like.html" className="stretched-link"></a>
                </div>
            </div>
            <div className="col">
                <div className="bg-white shadow-sm rounded-4 text-center p-2 position-relative">
                <span className="mdi mdi-noodles fs-4 bg-success text-white rounded-pill mt-1"></span>
                <p className="small m-0 text-dark my-1">Sandwiches</p>
                <a href="like.html" className="stretched-link"></a>
                </div>
            </div>
            <div className="col">
                <div className="bg-white shadow-sm rounded-4 text-center p-2 position-relative">
                <span className="mdi mdi-ice-cream fs-4 bg-warning text-white rounded-pill mt-1"></span>
                <p className="small m-0 text-dark my-1">Empanadas</p>
                <a href="like.html" className="stretched-link"></a>
                </div>
            </div>
            <div className="col">
                <div className="bg-white shadow-sm rounded-4 text-center p-2 position-relative">
                <span className="mdi mdi-bread-slice fs-4 bg-info text-white rounded-pill mt-1"></span>
                <p className="small m-0 text-dark my-1">Confitería</p>
                <a href="like.html" className="stretched-link"></a>
                </div>
            </div>
            <div className="col">
                <div className="bg-white shadow-sm rounded-4 text-center p-2 position-relative">
                <span className="mdi mdi-cake fs-4 bg-dark text-white rounded-pill mt-1"></span>
                <p className="small m-0 text-dark my-1">Postres</p>
                <a href="like.html" className="stretched-link"></a>
                </div>
            </div>
        </div> 
    </div>
  )
}

export default IconCard
