import React from 'react';

function Chat() {
  return (
    <div className="osahan-page d-flex flex-column vh-100 bg-light">
         {/* <div className="osahan-page-header d-flex align-items-center justify-content-between mb-auto p-3">
            <a href="profile.html" className="text-black bg-white rounded-pill icon-sm shadow-sm me-3"><span className="mdi mdi-arrow-left mdi-18px"></span></a>
            <a href="profile.html" className="d-flex align-items-center text-decoration-none me-auto">
               <img className="img-fluid avtar-sm rounded-pill bg-white shadow-sm p-1" src="img/user/2.jpeg" />
               <div className="ms-2 lh-1">
                  <h6 className="text-primary mb-0 fw-bold">Natia</h6>
                  <small className="Online text-secondary opacity-75 mb-0">Online</small>
               </div>
            </a>
            <div className="d-flex align-items-center gap-2">
               <a href="#" className="icon-sm shadow-sm"><span className="mdi mdi-phone mdi-18px"></span></a>
               <a href="#" className="icon-sm shadow-sm"><span className="mdi mdi-video mdi-18px"></span></a>  
               <a href="notification.html" className="icon-sm shadow-sm"><span className="mdi mdi-bell-outline mdi-18px"></span></a>
               <a href="#" className="toggle d-flex align-items-center justify-content-center bg-white shadow-sm icon-sm fs-5 hc-nav-trigger hc-nav-1" role="button" aria-controls="hc-nav-1"><i className="bi bi-list mdi-18px"></i></a>
            </div>
         </div> */}
         <div className="osahan-page-body vh-100 my-auto overflow-auto p-3">
            <div className="d-flex align-items-center gap-2 mb-4">
               <div className="border-top w-100"></div>
               <span className="px-2 text-uppercase small">Today</span>
               <div className="border-top w-100"></div>
            </div>
            <div className="mb-3">
               <div className="d-flex align-items-end mb-1">
                  <div className="d-flex align-items-center gap-3 w-100 text-right">
                     <span className="bg-chatbox ms-auto chat-rounded-right p-3 rounded-4">
                     Hi, My Order Is Not<br/>
                     Delivered Yet. How Much<br/>
                     Time I Wait For The Order.
                     </span>
                  </div>
               </div>
               <p className="text-muted m-0 small text-end">05:57PM</p>
            </div>
            <div className="mb-3">
               <div className="d-flex align-items-end mb-1">
                  <div className="bg-dark chat-rounded-left p-3 rounded-4">
                     <div className="m-0 text-white">Order Is On The Way Matt.</div>
                  </div>
               </div>
               <p className="text-muted mb-0 small">05:55PM</p>
            </div>
            <div className="mb-3">
               <div className="d-flex align-items-end mb-1">
                  <div className="d-flex align-items-center gap-3 w-100 text-right">
                     <span className="bg-chatbox ms-auto chat-rounded-right p-3 rounded-4"> OKay, I”m Waiting.....</span>
                  </div>
               </div>
               <p className="text-muted m-0 small text-end">05:57PM</p>
            </div>
            <div className="d-flex align-items-center gap-2">
               <p className="text-muted m-0">Mahbuba is typing...</p>
            </div>
         </div>
         <div className="osahan-page-footer mt-auto p-3 bg-white shadow chat-footer">
            <div className="d-flex justify-content-between align-items-center gap-2">
               <div className="input-group flex-nowrap gap-2">
                  <button className="btn btn-secondary rounded-pill fav-icon p-0 d-flex align-items-center justify-content-center border-0" type="button"><span className="mdi mdi-microphone-outline fs-1"></span></button>
                  <input type="text" className="form-control bg-light px-3 py-2 border-0 bg-white shadow-none rounded-pill" placeholder="Typing.." />
                  <button className="btn btn-outline-secondary rounded-pill fav-icon p-0 d-flex align-items-center justify-content-center border-0" type="button"><span className="mdi mdi-link fs-1"></span></button>
               </div>
               <a href="profile.html" type="button" className="btn btn-primary rounded-pill d-flex align-items-center justify-content-center p-0 btn-lg fav-icon"><i className="mdi mdi-send fs-2"></i></a>
            </div>
         </div>
      </div>
  )
}

export default Chat
