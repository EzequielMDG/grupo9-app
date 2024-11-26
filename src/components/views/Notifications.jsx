import React from 'react';
import Footer from '../Footer';

function Notifications() {
  return (
    <div className="osahan-page d-flex flex-column vh-100 bg-light">
        {/* <div className="osahan-page-header mb-auto p-3">
            <div className="d-flex align-items-center justify-content-between">
                <a href="profile.html" className="text-black bg-white rounded-pill icon-sm shadow-sm me-3"><span className="mdi mdi-arrow-left mdi-18px"></span></a>
                <a href="add-to-address.html" className="d-flex align-items-center text-decoration-none me-auto gap-1">
                    <i className="mdi mdi-map-marker-circle h2 m-0 text-muted"></i>
                    <div className="ms-2 lh-1">
                        <h6 className="text-primary mb-0 fw-bold">Location</h6>
                        <small className="Online text-secondary opacity-75 mb-0">California, USA</small>
                    </div>
                </a>
                <div className="d-flex align-items-center gap-2">
                    <a href="profile.html"><img className="img-fluid avtar-sm rounded-pill bg-white shadow-sm p-1" src="img/user/1.jpeg"/></a>
                    <a href="notification.html" className="icon-sm shadow-sm"><span className="mdi mdi-bell-outline mdi-18px"></span></a>
                    <a href="#" className="toggle d-flex align-items-center justify-content-center bg-white shadow-sm icon-sm fs-5 hc-nav-trigger hc-nav-1" role="button" aria-controls="hc-nav-1"><i className="bi bi-list mdi-18px"></i></a>
                </div>
            </div>
            <div className="nav nav-pills rounded-pill mt-3 btn-group p-1 shadow-sm top-nav-tab bg-white" id="pills-tab" role="tablist">
                <div className="row w-100 m-0">
                    <div className="col-6 p-0">
                        <div className="nav-item" role="presentation">
                        <button className="nav-link btn btn-outline-primary text-center w-100 rounded-pill" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Delivery</button>
                        </div>
                    </div>
                    <div className="col-6 p-0">
                        <div className="nav-item ms-auto" role="presentation">
                        <button className="nav-link btn btn-outline-primary active text-center w-100 rounded-pill" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false" tabindex="-1">News & Updates</button>
                        </div>
                    </div>
                </div>
            </div>
        </div> */}
        <div className="osahan-page-body vh-100 my-auto overflow-auto px-3">
            {/* <!--card--> */}
            <div className="tab-content" id="pills-tabContent">
                <div className="tab-pane fade" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0">
                    <div className="bg-white rounded-4 mb-3 shadow-sm">
                        <div className="d-flex p-3">
                        <div className="d-flex gap-3 align-items-center">
                            <img src="img/list/1.jpeg" className="img-fluid w-payment-long rounded-3"/>
                            <div className="lh-sm">
                                <p className="mb-1 fw-bold">Chicken Hall</p>
                                <p className="mb-0 text-secondary small">On The Way</p>
                            </div>
                        </div>
                        <p className="mb-0 text-secondary small opacity-50 d-flex align-items-end text-nowrap ms-auto">3:09 PM</p>
                        </div>
                    </div>
                    <div className="bg-white rounded-4 mb-3 shadow-sm">
                        <div className="d-flex p-3">
                        <div className="d-flex gap-3 align-items-center">
                            <img src="img/list/2.jpeg" className="img-fluid w-payment-long rounded-3"/>
                            <div className="lh-sm">
                                <p className="mb-1 fw-bold">Swe Dish</p>
                                <p className="mb-0 text-success small">Deliverd</p>
                            </div>
                        </div>
                        <p className="mb-0 text-secondary small opacity-50 d-flex align-items-end text-nowrap ms-auto">3:09 PM</p>
                        </div>
                    </div>

                    <div className="bg-white rounded-4 mb-3 shadow-sm">
                        <div className="d-flex p-3">
                        <div className="d-flex gap-3 align-items-center">
                            <img src="img/list/3.jpeg" className="img-fluid w-payment-long rounded-3"/>
                            <div className="lh-sm">
                                <p className="mb-1 fw-bold">Fish Hell Veg</p>
                                <p className="mb-0 text-danger small">Cancelled</p>
                            </div>
                        </div>
                        <p className="mb-0 text-secondary small opacity-50 d-flex align-items-end text-nowrap ms-auto">3:09 PM</p>
                        </div>
                    </div>

            
                </div>
                <div className="tab-pane fade active show" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabindex="0">
                    <h6 className="mb-3 fw-bold mt-1">Points</h6>
                    <div className="bg-white rounded-4 mb-3 shadow-sm">
                        <div className="d-flex px-3 py-3">
                        <div className="d-flex gap-4 align-items-center">
                            <div>
                                <p className="mb-1 fw-bold">Your Earned 70 Points</p>
                                <p className="mb-0 text-secondary small">Earn 100 Points And Get 50% Off Under <br/>$100Items.</p>
                            </div>
                        </div>
                        <p className="mb-0 text-secondary small opacity-50 d-flex align-items-end text-nowrap ms-auto">3:09 PM</p>
                        </div>
                    </div>
                    <div className="bg-white rounded-4 mb-3 shadow-sm">
                        <div className="d-flex px-3 py-3">
                        <div className="d-flex gap-4 align-items-center">
                            <div>
                                <p className="mb-1 fw-bold">Your Earned 20 Points</p>
                                <p className="mb-0 text-secondary small">Earn 100 Points And Get 50% Off Under <br/>$100Items.</p>
                            </div>
                        </div>
                        <p className="mb-0 text-secondary small opacity-50 d-flex align-items-end text-nowrap ms-auto">Yesterday</p>
                        </div>
                    </div>
                    <h6 className="mb-3 fw-bold pt-4">Updates</h6>
                    <div className="bg-white rounded-4 mb-3 shadow-sm">
                        <div className="d-flex px-3 py-3">
                        <div className="d-flex gap-4 align-items-center">
                            <div>
                                <p className="mb-1 fw-bold">Your App Is Fully Updated</p>
                                <p className="mb-0 text-secondary small">Earn 100 Points And Get 50% Off Under <br/>$100Items.</p>
                            </div>
                        </div>
                        <p className="mb-0 text-secondary small opacity-50 d-flex align-items-end text-nowrap ms-auto">Yesterday</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </div>
  )
}

export default Notifications
