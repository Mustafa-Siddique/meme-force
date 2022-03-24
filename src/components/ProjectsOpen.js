import React, { useState, useEffect } from "react";
import logoBg from "../Images/anim-icon.png";
import { FaTelegramPlane, FaTwitter, FaGlobe } from "react-icons/fa";
import Countdown from "./Countdown";
import { Link } from "react-router-dom";
import Client from "../Client";
import { NumberOFPresale, GetSaleAddresses } from "./Web/FactoryMethods";
import { PresaleDetails } from "./Web/PresaleMethods";
import Metamask from "./../Images/metamask.png";
import WalletConnect from "./../Images/walletconnect.png";
import Navlaunch from "./Navlaunch";
import { getAccount, loginProcess, CheckChain } from "./../components/Web/web3_methods";
import { SelectWallet } from "./../components/Web/web3";
import {getTokenSymbol} from './Web/FactoryMethods'
import { NavLink } from "react-router-dom";
import logo from "../Images/logo.png";
import fav from "../Images/logo192.png";
import ReactLoading from "react-loading";

export default function ProjectsOpen() {
  /* COUNTDOWN */

  const countdownDate = "2022-02-28 17:00";
  const [presaleInformation, serPresaleInformation] = useState();
  const [acount, setAccount] = useState();
  const [modal, setModal] = useState(false);
  const [allPresales, setallPresales] = useState([]);

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

  useEffect(async () => {
    try {
     if(window.account){
      const chainID = await CheckChain()
      if(chainID){
        const numberofpresale = await NumberOFPresale();
        for (let i = numberofpresale; i > 0; i--) {
          const address = await GetSaleAddresses(i - 1);
          const presaleInfo = await PresaleDetails(address);
          const symbol = await getTokenSymbol(presaleInfo._token);
          presaleInfo.presale = address;
          presaleInfo.tokenSymbol = symbol
          allPresales.push(presaleInfo);
          serPresaleInformation(allPresales);
       }
      }
      else {
        Warning();
      }
      
    }
    } catch (e) {
      console.log(e);
    }
  }, [window.account]);

  try{
    window.ethereum.on('chainChanged', async (accounts) => {
      console.log('chain changed.')
      window.location.reload()
    });
  }
  catch(e){
    //
  }
  const Warning =()=>{
    alert("Please Switch to the BSC Test net")
  }
  
  console.log("All presales", presaleInformation);

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

  const toggleModal = () => {
    setModal(!modal);
  };
  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  const ConnectMetaMask = async () => {
    window.WC = false;
    window.MM = true;
    await SelectWallet();
    await loginProcess();
    const acount = await getAccount();
    setAccount(acount);
    window.account = acount;
    toggleModal();
  };

  const ConnectWallet = async () => {
    window.WC = true;
    window.MM = false;
    await SelectWallet();
    const acount = await getAccount();
    setAccount(acount);
    window.account = acount;
    toggleModal();
  };

  const slicing = (address) => {
    const first = address.slice(0, 5);
    const second = address.slice(36);
    return first + "...." + second;
  };

  const renderOwner = (projectInfo, index) => {
    return (
      <div className="col-md-3 rounded px-3 py-3 mx-2 my-3" key={index}>
        <div className="card-head">
          <div className="logo me-3">
            <img src={logoBg} alt="" id="brand-bg" />
            {/* {imgRef(projectInfo.image.asset._ref)} */}
            <img
              src="http://localhost:3000/static/media/anim-icon.33aeef79c37acca88d63.png"
              id="brand"
              alt=""
            />
          </div>
          <div className="head-content">
            <h3>
              <Link
                className="text-light text-decoration-none"
                to={`/launchpad/${projectInfo.presale}/${projectInfo.tokenSymbol}`}
              >
                {"Memeforce Presale"}
              </Link>
            </h3>
            <div id="social-cards">
              <a href="#">
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
              1 BNB = {projectInfo._swapRate} {projectInfo.tokenSymbol}
            </span>
          </div>
          <div className="tokenomics d-flex justify-content-between mt-2">
            <div className="cap">
              <p>Max Buy</p>
              <span>{Number(projectInfo._maxBuy) / 10 ** 18}</span>
            </div>
            <div className="schc">
              <p>SC/HC</p>
              <span>
                {Number(projectInfo._softCap) / 10 ** 18}/
                {Number(projectInfo._hardCap) / 10 ** 18}
              </span>
            </div>
            <div className="access text-center">
              <p>Access</p>
              <span>
                {projectInfo._isWhiteListEnabled ? "WhiteListed" : "Public"}
              </span>
            </div>
          </div>
          <div className="raised mt-3">
            <p>Progress:</p>
            <div className="progress" style={{ height: "10px" }}>
              <div
                className="progress-bar progress-bar-striped"
                role="progressbar"
                style={{ width: `${(projectInfo._totalRaised/(projectInfo._hardCap/10**18))*100 }` + "%" }}
                aria-valuenow="75"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            <div className="justify-content-between d-flex">
              <span>Funds Raised:</span>
              <span> {(projectInfo._totalRaised/(projectInfo._hardCap/10**18))*100 }%</span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
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
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0"></ul>
            </div>
            <div className="create-presale">
              {window.account ? (
                <button
                  className="nav-a active"
                  aria-current="page"
                  style={{
                    color: "white",
                    textDecoration: "none",
                    padding: "7px",
                    background: "#201F21",
                    border: "none",
                    marginRight: "10px",
                    marginLeft: "10px",
                    marginTop: "-20",
                  }}
                >
                  {slicing(window.account)}
                </button>
              ) : (
                <button
                  className="nav-a active"
                  aria-current="page"
                  onClick={() => toggleModal()}
                  style={{
                    color: "white",
                    textDecoration: "none",
                    padding: "7px",
                    background: "#201F21",
                    border: "none",
                    marginRight: "10px",
                    marginLeft: "10px",
                    marginTop: "-20px",
                  }}
                >
                  Connect
                </button>
              )}
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
      <div id="openProject-cont">
        <div className="container text-center my-5">
          <h1>PROJECTS OPEN NOW</h1>
          <div className="countDown h3">
            {expired
              ? "It's the time"
              : `${days}D ${hours}H ${minutes}M ${seconds}s`}
          </div>
        </div>
        {!presaleInformation ? <div className="row justify-content-center"><ReactLoading width={200} type='spokes' color="#fff" /></div> : <div className="row">
          {
            presaleInformation.map((data) =>
              renderOwner(data)
            )}
        </div>}
      </div>
      {modal && (
        <div>
          <div onClick={() => toggleModal()} className="overlay-popup"></div>
          <div className="modal-content wallet-select">
            <label
              for="category"
              style={{
                backgroundColor: "#161C24",
                color: "#ffffff",
                fontSize: "17px",
              }}
              className="form-label fw-bold py-3 text-center position-relative"
            >
              Select Wallet
            </label>
            <div className="wallte-menu">
              <button
                className="metamask-btn"
                onClick={() => ConnectMetaMask()}
              >
                <img src={Metamask} width={32} alt="" /> MetaMask
              </button>
              <button className="metamask-btn" onClick={() => ConnectWallet()}>
                <img src={WalletConnect} alt="" width={32} /> WalletConnect
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
