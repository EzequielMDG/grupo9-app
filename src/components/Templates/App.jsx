import React  from 'react';
import { Outlet} from 'react-router-dom';

import Menu from '../Menu';

import '../../vender/bootstrap/css/bootstrap.min.css';  
import './App.css';
import '../../vender/materialdesign/css/materialdesignicons.min.css';
import '../../css/style.css';
import '../../vender/sidebar/demo.css'; 

function App() { 
  return (
    <>
		<Menu />
		<Outlet />
    </>
  );
}

export default App;
