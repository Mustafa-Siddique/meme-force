import React from "react";
import logo from "../Images/memeforce.png";
import { AiOutlineTwitter } from "react-icons/ai";
import { SiDiscord } from "react-icons/si";
import { FaTelegramPlane } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function NavbarAdmin() {
  return (
    <>
      <section>
        <nav className="navbar navbar-expand-lg navbar-light bg-none">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              <img src={logo} alt="" />
            </a>
            <a href="/" className="bmw">Back To Main Website</a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarText"
              aria-controls="navbarText"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li>
                  <a
                    className="nav-a active"
                    aria-current="page"
                    href="https://twitter.com/MemeForce_LP"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiOutlineTwitter size={32} color="#fff" />
                  </a>
                </li>
                <li>
                  <a className="nav-a active" aria-current="page" href="/">
                    <SiDiscord
                      size={32}
                      color="#fff"
                      style={{ marginLeft: "20px", marginRight: "20px" }}
                    />
                  </a>
                </li>
                <li>
                  <a
                    className="nav-a active"
                    aria-current="page"
                    href="https://t.me/MemeForceOfficial"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaTelegramPlane size={32} color="#fff" />
                  </a>
                </li>
                <li>
                  <Link
                    className="nav-a active"
                    aria-current="page"
                    to="/admin-pannel"
                    style={{
                      color: "white",
                      textDecoration: "none",
                      padding: "7px",
                      background: "#201F21",
                      border: "none",
                      marginRight: "10px",
                      marginLeft: "10px",
                    }}
                  >
                    Create Sale
                  </Link>
                </li>
                <li>
                  <Link
                    className="nav-a active"
                    aria-current="page"
                    to="/admin-pannel"
                    style={{
                      color: "white",
                      textDecoration: "none",
                      padding: "7px",
                      background: "#201F21",
                      border: "none",
                    }}
                  >
                    Launch Pad
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
}
