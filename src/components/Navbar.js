import React from "react";
import logo from "../Images/logo.png";
import fav from '../Images/logo192.png'

export default function Navbar() {
  return (
    <div style={{width:"100%", position:"absolute", zIndex:"11"}}>
      <nav className="navbar mx-auto navbar-expand-lg navbar-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src={logo} alt="" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  BSC CHART
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active mx-3" href="/">
                  ETH CHART
                </a>
              </li>
              <li className="nav-item">
                <button className="nav-link rounded btn px-3">BUY NOW</button>
              </li>
            </ul>
          </div>
            <div className="mob-rate d-lg-none">
                <a className="nav-link active mx-3" href="/">
                  <img src={fav} style={{height:"25px"}} alt="" /> $0.0005
                </a>
            </div>
        </div>
      </nav>
    </div>
  );
}
