import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../Images/logo.png";
import fav from "../Images/logo192.png";

export default function Navlaunch() {
  return (
    <div style={{ width: "100%" }}>
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
          </div>
          <div className="mob-rate">
            <a className="nav-link active mx-3" href="/">
              <img src={fav} style={{ height: "25px" }} alt="" /> $0.0005
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}
