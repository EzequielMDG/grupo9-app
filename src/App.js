import React  from 'react';
import { Route, Routes } from 'react-router-dom';

import Menu from './components/Menu';
import LoadApp from './components/views/LoadApp';
import OnBoarding1 from './components/views/OnBoarding1';
import Register from './components/views/Register';
import Verification from './components/views/Verification';
import VerifyCode from './components/views/VerifyCode';
import Login from './components/views/Login';
import Home from './components/Home/Home';
import Favorites from './components/views/Favorites';
import Notifications from './components/views/Notifications';
import Chat from './components/views/Chat'; 
import Profile from './components/views/Profile';
import AddToCart from './components/views/AddToCart';
import AddToCart2 from './components/views/AddToCart2';
import ReviewPayment from './components/views/ReviewPayment';
import Error404 from './components/views/Error404'; 

import './vender/bootstrap/css/bootstrap.min.css';  
import './App.css';
import './vender/materialdesign/css/materialdesignicons.min.css';
import './css/style.css';
import './vender/sidebar/demo.css';

// <!-- Bootstrap bundle js -->
// import './vender/bootstrap/js/bootstrap.bundle.min.js';
// <!-- Jquery js -->
// import './vender/jquery/jquery.min.js';
// <!-- Sidebar js -->
// import './vender/sidebar/hc-offcanvas-nav.js';
// <!-- Custom js -->
// import './js/script.js'; 


function App() { 
  return (
    <>
		<Menu />
		<Routes>
				<Route path="/" element={<LoadApp />}/> 
				<Route path="/OnBoarding1" element={<OnBoarding1 />}/> 
				<Route path="/Registrarme" element={<Register />}/> 
				<Route path="/Verificacion" element={<Verification />}/>
				<Route path="/VerificarCodigo" element={<VerifyCode />}/>
				<Route path="/Login" element={<Login />}/>
				<Route path="/Home" element={<Home />}/> 
				<Route path="/Favoritos" element={<Favorites />}/>
				<Route path="/Chat" element={<Chat />}/>
				<Route path="/Notificaciones" element={<Notifications />}/>
				<Route path="/MiPerfil" element={<Profile />}/>
				<Route path="/AgregarAlCarrito" element={<AddToCart />}/>  
				<Route path="/AgregarAlCarrito2" element={<AddToCart2 />}/>  
				<Route path="/Carrito" element={<ReviewPayment />}/>  
				<Route path="*" element={<Error404/>}/>  
		</Routes>
    </>
  );
}

export default App;
