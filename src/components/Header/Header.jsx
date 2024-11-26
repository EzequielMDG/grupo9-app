
import React from 'react' 

function Header() {
  return (
    <div>
        {/* <!-- Header--> */}
        <div className="osahan-page-header mb-auto p-3 pt-0 bg-light">
            {/* <Menu></Menu> */}
            <div className="input-group mt-0 bg-white rounded-pill shadow-sm overflow-hidden">
                <span className="input-group-text bg-white border-0 ps-3"><i className="mdi mdi-magnify fs-4"></i></span>
                <input type="text" className="form-control border-0 px-0 py-2" placeholder="Buscar" /> 
            </div>
        </div>
        {/* <!-- End Header--> */}
    </div>
  )
}

export default Header
