import React, { useState, useEffect } from "react";
import logoBg from "../Images/anim-icon.png";
import { FaTelegramPlane, FaTwitter, FaGlobe, } from "react-icons/fa";
import Countdown from "./Countdown";
import { Link } from "react-router-dom";
import Client from "../Client";
import { NumberOFPresale,GetSaleAddresses } from './Web/FactoryMethods'
import {PresaleDetails} from './Web/PresaleMethods'

export default function ProjectsOpen() {
  /* COUNTDOWN */

  const countdownDate = "2022-02-28 17:00";
  const [presaleInformation, serPresaleInformation] = useState()
  const allPresales = []
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
      const presaleInfo = await PresaleDetails(address)
      presaleInfo.presale = address
      allPresales.push(presaleInfo)
      serPresaleInformation(allPresales)
    }
   }
   catch(e){
     console.log(e)
   }
  }, []);

  console.log("All presales", presaleInformation)

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
            <img src='http://localhost:3000/static/media/anim-icon.33aeef79c37acca88d63.png' id="brand" alt="" />
          </div>
          <div className="head-content">
            <h3>
              <Link
                className="text-light text-decoration-none"
                to={`/launchpad/${projectInfo.presale}`}
              >
                {"Memeforce Presale"}
              </Link>
            </h3>
            <div id="social-cards">
              <a href='#'>
                <span>
                  <FaGlobe />
                </span>
              </a>
              <a href="#">
                <span>
                  <FaTwitter />
                </span>
              </a>
              <a href="#">
                <span>
                  <FaTelegramPlane />
                </span>
              </a>
            </div>
            <div
              className={
                projectInfo._swapStatus === true
                  ? `sale-stat`
                  : `sale-stat bg-danger`
              }
            >
              &bull; {projectInfo._swapStatus === true ? "Open" : "Close "}
            </div>
            <div className="chain">{"BSC"}</div>
          </div>
        </div>
        <div className="card-body">
          <p className="fs-6">{"Checking"}</p>
          <div className="rate">
            <p>Swap rate</p>
            <span>
              1 BNB = {projectInfo._swapRate} {"BETS"}
            </span>
          </div>
          <div className="tokenomics d-flex justify-content-between mt-2">
            <div className="cap">
              <p>Cap</p>
              <span>{Number(projectInfo._maxBuy)/10**18}</span>
            </div>
            <div className="schc">
              <p>SC/HC</p>
              <span>{Number(projectInfo._softCap)/10**18}/{Number(projectInfo._hardCap)/10**18}</span>
            </div>
            <div className="access text-center">
              <p>Access</p>
              <span>{projectInfo._isWhiteListEnabled ? "WhiteListed" : "Public"}</span>
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
      <div className="row">{presaleInformation && presaleInformation.map(data => {return renderOwner(data)})}</div>
    </div>
  );
}
