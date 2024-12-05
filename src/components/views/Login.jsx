import axios from 'axios';
import React, { useState } from 'react';
import {Link, useNavigate}  from 'react-router-dom';
import { API_URL } from '../../constants/env'; 
import { setToken } from '../../helpers/auth';
import LoginTemplate from '../Templates/LoginTemplate';

function Login() {
   const nav = useNavigate()

   const [error, setError] = useState() 

   const handleSubmit = (e) => {
		e.preventDefault()
      setError()  
		const data = {
			email: e.target.email.value,
			password: e.target.password.value
		}
		axios.post(`${API_URL}/public/login`, data)
      		.then((resp) => { 
         	setToken(resp.data.data.token)
            nav("/Home")
         }) 
		 .catch((err) => {
			console.error('Login Error:', err); // Para depurar en la consola
			if (err.response) {
				// Error del servidor
				setError(err.response.data?.message || 'Error desconocido en el servidor.');
			} else if (err.request) {
				// El servidor no respondió
				setError('No se pudo conectar con el servidor. Intenta más tarde.');
			} else {
				// Otro tipo de error
				setError('Ocurrió un error inesperado.');
			}
		});
   }
  return (
   <LoginTemplate title="Ingresar a mi cuenta"> 
      	<form  onSubmit={handleSubmit}> 
				<div className="input-group mb-3 bg-white rounded-4 shadow p-1">
					<span className="input-group-text bg-white border-0 ps-3"><i className="mdi mdi-email-outline fs-4"></i></span>
					<input type="email" name='email' className="form-control border-0 px-2 py-3" placeholder="E-mail" required/>
				</div>

				<div className="input-group mb-3 bg-white rounded-4 shadow p-1">
					<span className="input-group-text bg-white border-0 ps-3"><i className="mdi mdi-lock-outline fs-4"></i></span>
					<input type="password" name='password' className="form-control border-0 px-2 py-3" placeholder="Contraseña"  required/>
				</div>
				<div className="text-end mb-4"><a href="forget-password.html"className="text-secondary text-end text-decoration-none fs-6">No recuerdo mi contraseña</a></div>
				
				<div className="col">
					<div className="py-4 vstack gap-3">  
						
							<button className="btn btn-primary rounded-4 w-100 btn-lg" type='submit'>Ingresar</button>

							<p className="ps-2 fw-semibold fs-5 text-center mt-3 text-secondary">No tenés una cuenta? <Link to="/Registrarme" className="text-black ps-2 text-decoration-none">Registrarme</Link></p>
					</div>
				</div>
				{error && (
					<p className='text-danger text-center'>{error}</p>
				)}

		</form>
   </LoginTemplate>
  )
}

export default Login
