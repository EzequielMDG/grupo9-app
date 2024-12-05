import axios from 'axios';
import React, { useState } from 'react';
import {Link, useNavigate}  from 'react-router-dom';
import { API_URL } from '../../constants/env'; 
import { setToken } from '../../helpers/auth';
import LoginTemplate from '../Templates/LoginTemplate';

function Register() {
    const nav = useNavigate()

   const [error, setError] = useState() 

   const handleSubmit = (e) => {
		e.preventDefault()
      setError()  
		const data = {
			email: e.target.email.value,
			password: e.target.password.value,
            details: {
                fullname: e.target.fullname.value,
            },
		}
		axios.post(`${API_URL}/public/users`, data)
        .then((resp) => { 
         setToken(resp.data.data.token)
            nav("/Login")
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
    <LoginTemplate title="Crearme una cuenta">
        <form onSubmit={handleSubmit}>
            <div className="input-group mb-3 bg-white rounded-4 shadow p-1">
                <span className="input-group-text bg-white border-0 ps-3"><i className="mdi mdi-account-outline fs-4"></i></span>
                <input type="text" name="fullname" className="form-control border-0 px-2 py-3" placeholder="Nombre y Apellido" />
            </div>
            <div className="input-group mb-3 bg-white rounded-4 shadow p-1">
                <span className="input-group-text bg-white border-0 ps-3"><i className="mdi mdi-email-outline fs-4"></i></span>
                <input type="text" name="email" className="form-control border-0 px-2 py-3" placeholder="Email" />
            </div>
            <div className="input-group mb-3 bg-white rounded-4 shadow p-1">
                <span className="input-group-text bg-white border-0 ps-3"><i className="mdi mdi-lock-outline fs-4"></i></span>
                <input type="text" name="password" className="form-control border-0 px-2 py-3" placeholder="Password" />
            </div>
            <div className="col">
                <div className="py-4 vstack gap-3"> 
                    <button className="btn btn-primary rounded-4 w-100 btn-lg" type='submit'>Registrarme</button>
                    <p className="ps-2 fw-semibold fs-5 text-center mt-3">¿Ya tenés una cuenta? <Link to="/Login" className="text-primary ps-2 text-decoration-none">Ingresar</Link></p>
                </div>
            </div>
            {error && (
					<p className='text-danger text-center'>{error}</p>
				)}
        </form>
    </LoginTemplate>
  )
}

export default Register
