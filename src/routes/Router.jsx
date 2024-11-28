import React  from 'react';
import { createBrowserRouter } from "react-router-dom"
import App from "../components/Templates/App"

import LoadApp from '../components/views/LoadApp';
import Home from '../components/Home/Home'; 
import OnBoarding1 from '../components/views/OnBoarding1';
import Register from '../components/views/Register';
import Verification from '../components/views/Verification';
import VerifyCode from '../components/views/VerifyCode';
import Login from '../components/views/Login'; 
import Favorites from '../components/views/Favorites';
import Notifications from '../components/views/Notifications';
import Chat from '../components/views/Chat'; 
import Profile from '../components/views/Profile';
import AddToCart from '../components/views/AddToCart';
import AddToCart2 from '../components/views/AddToCart2';
import ReviewPayment from '../components/views/ReviewPayment'; 

import Error404 from "../components/views/Error404"

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <Error404/>,
		children: [
			{
				index: true,
				element: <LoadApp/>,
			},
			{
				path: "/OnBoarding1",
				element: <OnBoarding1 />,
			},
			{
				path: "/Registrarme",
				element: <Register />,
			}, 
			{
				path: "/Verificacion",
				element: <Verification />,
			},
			{
				path: "/VerificarCodigo",
				element: <VerifyCode />,
			},
			{
				path: "/Login",
				element: <Login />,
			},
			{
				path: "/Home",
				element: <Home />,
			},
			{
				path: "/Favoritos",
				element: <Favorites />,
			},
			{
				path: "/Notificaciones",
				element: <Notifications />,
			}
			,
			{
				path: "/Chat",
				element: <Chat />,
			}
			,
			{
				path: "/MiPerfil",
				element: <Profile />,
			}
			,
			{
				path: "/AgregarAlCarrito",
				element: <AddToCart />,
			}
			,
			{
				path: "/AgregarAlCarrito2",
				element: <AddToCart2 />,
			}
			,
			{
				path: "/Carrito",
				element: <ReviewPayment />,
			} 
		]
    }
    
], {
    future: {
      v7_relativeSplatPath: true,
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_skipActionErrorRevalidation: true,
    },
  });

export default router