import { Children } from "react"
import { Link } from "react-router-dom"

function LoginTemplate() {
  return (
    <div className="osahan-page d-flex flex-column vh-100 bg-light"> 
        <div className="osahan-page-body vh-100 my-auto overflow-auto p-3">
        <h5 className="display-4 fw-bold py-5">Ingresar a<br/>mi cuenta</h5>

        {Children}

        </div>

        <div className="osahan-page-footer mt-auto p-4 text-center border-top">
        <p className="fw-semibold fs-6 pb-3 mb-0">O ingresar con</p>
        <div className="d-flex gap-3 justify-content-center"> 
            <Link to="/Home" className="btn btn-light rounded-4 w-100 btn-lg shadow"><span className="mdi mdi-google me-2"></span> Google</Link> 
            <Link to="/Home" className="btn btn-light rounded-4 w-100 btn-lg shadow"><span className="mdi mdi-facebook me-2"></span> Facebook</Link> 
        </div>
        </div>
    </div>
  )
} 

export default LoginTemplate