import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../Images/logo.png";
import fav from "../Images/logo192.png";
import { isMobile } from 'react-device-detect'

export default function Navlaunch({price}) {
    const [isOpen,  setIsopen] = useState(false)
    const toggleOpen = () => setIsopen(!isOpen);

  const menuClass = `dropdown-menu${isOpen ? " show" : ""}`;
  return (
    <div style={{ width: "100%" }}>
      <nav className="navbar mx-auto navbar-expand-lg navbar-dark">
        {!isMobile ? <div className="container-fluid">
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
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0"></ul>
          </div>
          <div className="create-presale">
            <NavLink
              to="/launchpad/admin-panel"
              style={{
                textDecoration: "none",
                color: "white",
                border: "none",
                padding: "7px",
                background: "#201F21",
                
              }}
            >
              Create Presale
            </NavLink>
            <NavLink
              to="/launchpad"
              style={{
                textDecoration: "none",
                color: "white",
                border: "none",
                padding: "7px",
                background: "#201F21",
                marginLeft:'10px'
              }}
            >
              Launchpad
            </NavLink>
           
          </div>
          <div className="mob-rate">
            <a className="nav-link active mx-3" href="/">
              <img src={fav} style={{ height: "25px" }} alt="" /> ${price}
            </a>
          </div>
        </div>: <div className="project-nav-header">
        <a className="navbar-brand" href="/">
            <img src={logo} alt="" />
          </a>
             <div class="dropdown  project-nav" onClick={()=>toggleOpen()}>
              <button 
              class="connectbtn dropdown-toggle"
              type="button"
              id="dropdownMenuButton2"
              data-bs-toggle="dropdown"
              aria-expanded="false">
                Menu
              </button>
              <ul class={`${menuClass} dropdown-menu-dark dropdown-menu-right`} aria-labelledby="dropdownMenuButton2">
                  <li className="dropdown-i"><NavLink to="/launchpad" style={{color:'#ffffff'}}>Launchpad</NavLink></li>
                  <li className="dropdown-i"><NavLink to="/launchpad/admin-panel" style={{color:'#ffffff'}}>Create Presale</NavLink></li>
              </ul>
            </div>
          </div>}
      </nav>
    </div>
  );
}
