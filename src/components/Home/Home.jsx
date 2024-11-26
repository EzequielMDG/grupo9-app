import React  from 'react';
import {Link}  from 'react-router-dom';

import bannerImage from '../../img/list/6.jpeg';

import Header from "../Header/Header";
import CarouselExampleDark from "../Carousel/CarouselExampleDark"
import IconCard from "../Card/IconCard";
import CardProducto from "../Card/CardProducto";
import Footer from '../Footer';
import SidebarNav from '../SidebarNav';

function Home2() {   
    
  return ( 
		<body className="bg-light">
			<div className="osahan-page d-flex flex-column vh-100 bg-light">
				<Header></Header>
				<div className="osahan-page-body vh-100 my-auto overflow-auto px-3 pb-3">
					
					<CarouselExampleDark></CarouselExampleDark>

					<IconCard></IconCard>
					
					<h6 className="mb-3 mt-4 fw-bold">Aprovecha estas promos</h6>
					<div className="d-flex gap-3 mb-3">
						<div>
							<CardProducto></CardProducto>
						</div>
						<div>
							<CardProducto></CardProducto>
						</div>
					</div>
					<h6 className="mb-3 mt-4 fw-bold">Restaurantes cerca tuyo</h6>
					<div className="card mb-0 rounded-4 border-0 shadow overflow-hidden osahan-card-2"> 
						<img className='card-img-top img-fluid' src={bannerImage} alt="avatar Img" /> 

						<div className="card-body">
							<div className="d-flex">
								<span className="badge rounded-pill bg-info-subtle pt-1 text-info">Saludable</span>
							</div>
							<h5 className="mb-0 h6 fw-bold pt-1">Chicken Hell</h5>
							<div className="d-flex gap-2 align-items-center">
								<p className="text-secondary opacity-75 mb-0">24min</p>
								<p className="text-primary opacity-75 mb-0"><span className="mdi mdi-star text-primary"></span> 4.8</p>
								<div className="bg-primary d-flex align-items-center rounded-circle justify-content-center p-1 ms-auto">
									<span className="material-symbols-outlined text-white">bookmark</span>
								</div>
							</div>
						</div>
						<Link to="/AgregarAlCarrito" className="stretched-link"></Link>
					</div>
				</div>

				<Footer></Footer>
				
			</div>
			<SidebarNav></SidebarNav>
		</body> 
  )
}

export default Home2
