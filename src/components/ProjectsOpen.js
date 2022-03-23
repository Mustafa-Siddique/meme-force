import React, { useState, useEffect } from "react";
import logoBg from "../Images/anim-icon.png";
import { FaTelegramPlane, FaTwitter, FaGlobe, } from "react-icons/fa";
import Countdown from "./Countdown";
import { Link } from "react-router-dom";
import Client from "../Client";
import { NumberOFPresale,GetSaleAddresses } from './Web/FactoryMethods'

export default function ProjectsOpen() {
  /* COUNTDOWN */

  const countdownDate = "2022-02-28 17:00";
  
  const [
    {
      expired,
      values: { days, hours, minutes, seconds },
    },
    setResult,
  ] = useState(() => Countdown(countdownDate));

  useEffect(() => {
    if (expired) return undefined;
    const intervalId = setInterval(
      () => setResult(Countdown(countdownDate)),
      1000
    );
    return () => {
      clearInterval(intervalId);
    };
  }, [expired]);

  useEffect(async() => {
   try{
    const numberofpresale = await NumberOFPresale();
    for(let i = numberofpresale; i > 0; i--){
      const address = await GetSaleAddresses(i-1);
      
    }
   }
   catch(e){
     console.log(e)
   }
  }, []);

  
  const [projectInfo, setProjectCards] = useState([]);
  useEffect(() => {
    Client.fetch(
      `*[_type == "projectCards"]{
          name,
          tracker,
          summary,
          website,
          rate,
          chain,
          slug,
          isOpen,
          image,
          access,
          mcap,
          telegram,
          twitter,
          schc
        }`
    )
      .then((data) => setProjectCards(data))
      .catch(console.error);
  }, []);

  
  const renderOwner = (projectInfo, index) => {
    return (
      <div className="col-md-3 rounded px-3 py-3 mx-2 my-3" key={index}>
        <div className="card-head">
          <div className="logo me-3">
            <img src={logoBg} alt="" id="brand-bg" />
            {/* {imgRef(projectInfo.image.asset._ref)} */}
            <img src={projectInfo.logo} id="brand" alt="" />
          </div>
          <div className="head-content">
            <h3>
              <Link
                className="text-light text-decoration-none"
                to={`/launchpad/${projectInfo.slug.current}`}
              >
                {projectInfo.name}
              </Link>
            </h3>
            <div id="social-cards">
              <a href={`${projectInfo.website}`}>
                <span>
                  <FaGlobe />
                </span>
              </a>
              <a href={`${projectInfo.twitter}`}>
                <span>
                  <FaTwitter />
                </span>
              </a>
              <a href={`${projectInfo.telegram}`}>
                <span>
                  <FaTelegramPlane />
                </span>
              </a>
            </div>
            <div
              className={
                projectInfo.isOpen === true
                  ? `sale-stat`
                  : `sale-stat bg-danger`
              }
            >
              &bull; {projectInfo.isOpen === true ? "Open" : "Close "}
            </div>
            <div className="chain">{projectInfo.chain}</div>
          </div>
        </div>
        <div className="card-body">
          <p className="fs-6">{projectInfo.summary}</p>
          <div className="rate">
            <p>Swap rate</p>
            <span>
              1 BNB = {projectInfo.rate} {projectInfo.tracker}
            </span>
          </div>
          <div className="tokenomics d-flex justify-content-between mt-2">
            <div className="cap">
              <p>Cap</p>
              <span>{projectInfo.mcap}</span>
            </div>
            <div className="schc">
              <p>SC/HC</p>
              <span>{projectInfo.schc}</span>
            </div>
            <div className="access text-center">
              <p>Access</p>
              <span>{projectInfo.access}</span>
            </div>
          </div>
          <div className="raised mt-3">
            <p>Progress:</p>
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
              <span>Funds Raised:</span>
              <span> 75%</span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div id="openProject-cont">
      <div className="container text-center my-5">
        <h1>PROJECTS OPEN NOW</h1>
        <div className="countDown h3">
          {expired
            ? "It's the time"
            : `${days}D ${hours}H ${minutes}M ${seconds}s`}
        </div>
      </div>
      <div className="row">{projectInfo.map(renderOwner)}</div>
    </div>
  );
}
