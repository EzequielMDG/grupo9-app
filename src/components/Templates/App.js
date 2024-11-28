import React  from 'react';
import { Outlet} from 'react-router-dom';

import Menu from '../Menu';

import '../../vender/bootstrap/css/bootstrap.min.css';  
import './App.css';
import '../../vender/materialdesign/css/materialdesignicons.min.css';
import '../../css/style.css';
import '../../vender/sidebar/demo.css';

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
		<Outlet />
    </>
  );
}

export default App;
