import React, {useState} from "react";
import logoBg from "../Images/anim-icon.png";
import { FaTelegramPlane, FaTwitter, FaGlobe } from "react-icons/fa";
import Navlaunch from "./Navlaunch";
// import { Link } from 'react-router-dom'
import vidProject from '../Images/projectbg.mp4'
import ProjectDetails from "./ProjectDetails";
import Schedule from "./Schedule";
// import { Button } from "bootstrap";
import Allocation from "./Allocation";

export default function Project() {

    const [activeTab, setActiveTab] = useState(1)
    
    const toggleActive = (num) => {
        setActiveTab(num)
    }

  return (
    <div id="project-cont">
      <div className="project-bg">
          <div className="bgMask"></div>
          <video src={vidProject} muted preload='auto' autoPlay={"autoplay"} loop></video>
      </div>
      <Navlaunch />
      <div className="container-fluid position-relative">
        <div className="row cont mt-5">
          <div className="col-lg-5">
            <div className="project-head">
              <div className="logo">
                <img
                  src="https://images.unsplash.com/photo-1602934445884-da0fa1c9d3b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGxvZ298ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                  alt=""
                />
                <img id="project-logo-anim" src={logoBg} alt="" />
              </div>
              <div className="about-project">
                <div className="d-flex">
                  <h2>Meme Force</h2>
                  <div className="fs-6 text-light">
                    &nbsp;
                    <a
                      href="/"
                      style={{ textDecoration: "none", color: "#fff" }}
                    >
                      {" "}
                      <FaGlobe />
                    </a>
                    &nbsp;&nbsp;
                    <a
                      href="/"
                      style={{ textDecoration: "none", color: "#fff" }}
                    >
                      <FaTelegramPlane />
                    </a>
                    &nbsp;&nbsp;
                    <a
                      href="/"
                      style={{ textDecoration: "none", color: "#fff" }}
                    >
                      <FaTwitter />
                    </a>
                  </div>
                </div>
                <div className="sale-stat">&bull; Open</div>
                <div className="chain">BNB</div>
                <p className="fs-6" style={{ color: "#6c757d" }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Officia, optio doloribus reiciendis velit cupiditate sapiente
                  eius animi vel ullam quo? Accusamus rem, magnam aut non
                  corrupti nobis porro ducimus accusantium?
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="token-desc">
              <div className="row">
                <div className="col swap" style={{ minWidth: "255px" }}>
                  <div
                    className="position-relative m-auto"
                    style={{ maxWidth: "255px" }}
                  >
                    <p className="m-0">
                      Your balance:{" "}
                      <span style={{ fontWeight: "500" }}>0.0000 BNB</span>
                    </p>
                    <button
                      style={{
                        backgroundColor: "#660033",
                        border: "none",
                        borderRadius: "5px",
                        color: "#fff",
                        position: "absolute",
                        right: "5px",
                        marginTop: "-5px",
                      }}
                    >
                      Max
                    </button>
                    <br />
                    <input type="text" id="swapFrom" />
                  </div>
                  <div
                    className="position-relative mt-4 m-auto"
                    style={{ maxWidth: "255px" }}
                  >
                    <input type="text" id="swapTo" />
                  </div>
                  <button
                    className="btn mt-4"
                    style={{
                      backgroundColor: "#660033",
                      border: "none",
                      borderRadius: "5px",
                      color: "#fff",
                      width: "100%",
                    }}
                  >
                    Buy
                  </button>
                  <button
                    className="btn mt-1 desabled text-muted"
                    style={{
                      backgroundColor: "#660033",
                      border: "none",
                      borderRadius: "5px",
                      width: "100%",
                    }}
                  >
                    Claim
                  </button>
                </div>
                <div className="col">
                  <p>
                    Remaning allocation: <span>0.0000</span>
                  </p>
                  <p className="m-0">
                    Reserved Token: <br />
                    <span style={{ fontWeight: "500" }}>0.0000 MEMEFORCE</span>
                  </p>
                  <br />
                  <p className="m-0">
                    Rate: <br />
                    <span style={{ fontWeight: "500" }}>
                      1 BNB ≈ 1,111,111 MEMEFORCE
                    </span>
                  </p>
                  <br />
                  <p>Swap Progress:</p>
                  <div className="raised">
                    <div className="progress" style={{ height: "10px" }}>
                      <div
                        className="progress-bar progress-bar-striped"
                        role="progressbar"
                        style={{ width: "75%" }}
                        aria-valuenow="75"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <div className="justify-content-between d-flex">
                      <p>Funds Raised:</p>
                      <p> 245 BNB</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="projectTable mt-5">
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <button className={activeTab === 1? "nav-link active":"nav-link"} aria-current="page" onClick={()=> toggleActive(1)}>
                Project Details
              </button>
            </li>
            <li className="nav-item">
              <button className={activeTab === 2? "nav-link active":"nav-link"} onClick={()=> toggleActive(2)}>
                Schedule
              </button>
            </li>
            <li className="nav-item">
              <button className={activeTab === 3? "nav-link active":"nav-link"} onClick={()=> toggleActive(3)}>
                Your Allocation
              </button>
            </li>
          </ul>
          <div className="container-fluid mt-2">
            {activeTab === 1 ? <ProjectDetails/>: activeTab === 2 ? <Schedule/> : <Allocation/>}
          </div>
        </div>
      </div>  
    </div>
  );
}
