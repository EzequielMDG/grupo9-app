import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; 
import { RouterProvider } from 'react-router-dom';
import router from './routes/Router';
// import { BrowserRouter } from 'react-router-dom';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  	<RouterProvider router={router} future={{ v7_startTransition: true }}/>
);  
