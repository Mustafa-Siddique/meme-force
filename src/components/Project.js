import React, { useState, useEffect } from "react";
import logoBg from "../Images/anim-icon.png";
import { FaTelegramPlane, FaTwitter, FaGlobe } from "react-icons/fa";
import Navlaunch from "./Navlaunch";
import vidProject from '../Images/projectbg.mp4'
import ProjectDetails from "./ProjectDetails";
import Schedule from "./Schedule";
import Metamask from "./../Images/metamask.png";
import WalletConnect from "./../Images/walletconnect.png";
import {getAccount, loginProcess, WebUtils,getFasFee,toBNB} from './../components/Web/web3_methods'
import {SelectWallet, } from './../components/Web/web3'
import { Button } from "bootstrap";
import Allocation from "./Allocation";
import Client from "../Client";
import { useParams } from "react-router-dom";
import {TokenDecimals} from './Web/FactoryMethods'
import { canclaim, claimnow, Owed, BuyTokens, CheckForWhiteAccount, PresaleDetails, bnbBalance, getOperator,amountclaimed, whitelistedpresale } from "./Web/PresaleMethods";
import { TokenSupply, TokenName, TransferAmountFromToken,BalanceOfPresaleContract } from "./Web/FactoryMethods";
import { ToastContainer, toast as Tost} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import toast, { Toaster } from 'react-hot-toast';



export default function Project() {

  const notify = () => Tost('Swap success!', {
    position: "top-left",
    autoClose: 2200,
    theme: 'dark',
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    });

  const notifyError = () => Tost.error('Error!', {
      position: "top-left",
      autoClose: 2200,
      theme: 'dark',
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
  const LowBalance =()=> toast.error("Please Send Funds to Presale Contract.")

  // STATE for ACTIVE TABS
    const { token, symbol } = useParams();
    const [activeTab, setActiveTab] = useState(1);
    const [modal, setModal] = useState(false);
    const [account, setAccount] = useState(undefined);
    const [presaleinfo, setPresaleInfo] = useState();
    const [canClaim, setCanClaim] = useState(true);
    const [Own, setOwn] = useState(0);
    const [amount, setamount] = useState(0)
    const [BNB, setBNB] = useState(0)
    const [tokenTotalSupply, setTokenTotalSupply] = useState()
    const [token_name, setTokenName] = useState('')
    const [token_, setToken_] = useState('')
    const [isaccountwhitelisted, setIsaccountwhitelisted] = useState();
    const [operator, setOperator] = useState('')
    const [presaleBalance, setPresaleBalance] = useState(0)
    const [deciaml, setDecimal] = useState(0);
    const [presalewhitesale, setPresalewhitesale] = useState();
    

    useEffect(async()=>{
        const init =async()=>{
          const isclaimable = await canclaim(token)
          setCanClaim(isclaimable)
          const PresaleData = await PresaleDetails(token)
          setPresaleInfo(PresaleData)
          const checkforWhitelistedsale = await whitelistedpresale(token);
          setPresalewhitesale(checkforWhitelistedsale)
          const decimal = await TokenDecimals(PresaleData._token)
          setDecimal(Number(decimal))
          const balan = await BalanceOfPresaleContract(PresaleData._token,token)
          if(Number(balan) == 0){
            LowBalance();
          }
          setPresaleBalance(balan)
          const acountCheckingforwhitelisted = await CheckForWhiteAccount(token);
          setIsaccountwhitelisted(acountCheckingforwhitelisted)
          const owned = await Owed(token);
          const claimedAmount = await amountclaimed(token)
          setOwn((owned/10**decimal)-(claimedAmount/10**decimal))
          const bal = await bnbBalance();
          setBNB(bal)
          const supply = await TokenSupply(PresaleData._token);
          setTokenTotalSupply(supply/10**decimal)
          const namn = await TokenName(PresaleData._token);
          setTokenName(namn)
          const operat = await getOperator(token)
          setOperator(operat)
          const acount = await getAccount();
          setAccount(acount);
        }
        

      await init();
    },[account])
    


    const toggleActive = (num) => {
        setActiveTab(num)
    }

    const toggleModal = () => {
      setModal(!modal);
    };
    if (modal) {
      document.body.classList.add("active-modal");
    } else {
      document.body.classList.remove("active-modal");
    }

    const ConnectMetaMask =async()=> {
      window.WC = false
      window.MM = true
      await SelectWallet();
      await loginProcess();
      const acount = await getAccount();
      setAccount(acount);
      window.account = account
      toggleModal();
    }

    const RuningFun = async()=>{
      const bal = await bnbBalance();
      setBNB(bal)
      
      const owned = await Owed(token);
      const claimedAmount = await amountclaimed(token)
      setOwn((owned/10**deciaml)-(claimedAmount/10**deciaml))
      
      const PresaleData = await PresaleDetails(token)
      setPresaleInfo(PresaleData)
    }
    
    const ConnectWallet =async()=> {
      window.WC = true
      window.MM = false
      await SelectWallet();
      const acount = await getAccount();
      setAccount(acount);
      window.account = account
      toggleModal()
    }

    const slicing = (address) => {
      const first = address.slice(0,10);
      const second = address.slice(32);
      return first + "...." + second
    }
    
    const ClaimAmount =async()=>{
      console.log(token)  
      await claimnow(token)
    }

    const Swap = async()=>{
      if(BNB > 0){
        console.log("buying")
        const data = await BuyTokens(token,amount)
        if(data.status){
          notify();
          await RuningFun();
        }
        else{
          notifyError();
        }
      }
      else{
        //
      }
      
    }
    
    const TransferFunds = async()=>{
      try{
      const amount = presaleinfo._swapRate * presaleinfo._hardCap/10**18
      const lastamount = WebUtils(Number(amount))
      console.log(lastamount)
      await TransferAmountFromToken(presaleinfo._token,account,token,lastamount)
      }
      catch(e){
        console.log(e)
      }
    }

    const forWhitelistedPreslae =()=>{
      if(isaccountwhitelisted){
        return "WhiiteListed " + slicing(account);
      }
      else{
        return "You are Not WhiiteListed "
      }
    }

console.log("prisale balance",presalewhitesale)
  return (
    <>
    <Toaster />
     <ToastContainer/>
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
               {presaleinfo ? <div className={
                presaleinfo._swapStatus === true
                  ? `sale-stat`
                  : `sale-stat bg-danger`
              }>&bull; {presaleinfo._swapStatus === true ? "Open" : "Close "}</div>: <div className={"sale-stat"}>&bull; "Open"</div>}
                <div className="chain">BNB</div>
                <p className="fs-6" style={{ color: "#6c757d" }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Officia, optio doloribus reiciendis velit cupiditate sapiente
                  eius animi vel ullam quo? Accusamus rem, magnam aut non
                  corrupti nobis porro ducimus accusantium?
                </p>
                <button
                    className="btn mt-4"
                    style={{
                      backgroundColor: "#660033",
                      border: "none",
                      borderRadius: "5px",
                      color: "#fff",
                      width: "100%",
                    }}
                    onClick={()=>toggleModal()}
                  >
                    {presalewhitesale ? forWhitelistedPreslae() : !account ? "Connect" : slicing(account)}
                  </button>
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
                      <span style={{ fontWeight: "500" }}>{BNB} BNB</span>
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
                      onClick={()=>setamount(BNB-0.001)}
                    >
                      Max
                    </button>
                    <br />
                    <input type="number" id="swapFrom" value={amount} onChange={(e)=>{setamount(e.target.value)}} />
                  </div>
                  <div
                    className="position-relative mt-4 m-auto"
                    style={{ maxWidth: "255px" }}
                  >
                    <input disabled type="text" id="swapTo" placeholder={presaleinfo ? (amount * presaleinfo._swapRate) : '0'} />
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
                    onClick={()=>Swap()}
                  >
                    Buy
                  </button>
                  <button
                    className={`btn mt-1 text-light ${canClaim ? `` : `disabled `}`}
                    style={{
                      backgroundColor: "#660033",
                      border: "none",
                      borderRadius: "5px",
                      width: "100%",
                    }}
                    onClick={()=>ClaimAmount()}
                  >
                    Claim
                  </button>
                </div>
                <div className="col">
                  <p>
                    Remaining allocation: <span>{presaleinfo ? (presaleinfo._hardCap - presaleinfo._totalRaised)/10**18 : '00'} BNBs</span>
                  </p>
                  <p className="m-0">
                    Reserved Token: <br />
                    <span style={{ fontWeight: "500" }}>{Own} {symbol}</span>
                  </p>
                  <br />
                  <p className="m-0">
                    Rate: <br />
                    <span style={{ fontWeight: "500" }}>
                      1 BNB ≈ {presaleinfo ? presaleinfo._swapRate : '00'} {symbol}
                    </span>
                  </p>
                  <br />
                  <p>Swap Progress:</p>
                  <div className="raised">
                    <div className="progress" style={{ height: "10px" }}>
                      <div
                        className="progress-bar progress-bar-striped"
                        role="progressbar"
                        style={{ width: `${presaleinfo ? ((presaleinfo._totalRaised/10**deciaml)/(presaleinfo._hardCap/10**deciaml))*100 : '00'}` + "%" }}
                        aria-valuenow="75"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <div className="justify-content-between d-flex text-white">
                      <p className="text-white">Funds Raised:</p>
                      <p className="text-white"> {presaleinfo ? ((presaleinfo._totalRaised/10**18)).toFixed(2) : '00'} BNB</p>
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
            {/* <li className="nav-item">
              <button className={activeTab === 2? "nav-link active":"nav-link"} onClick={()=> toggleActive(2)}>
                Schedule
              </button>
            </li> */}
           {operator == account ? <li className="nav-item">
              <button className={activeTab === 3? "nav-link active":"nav-link"} onClick={()=> toggleActive(3)}>
                Manage Presale
              </button>
            </li> : ''}
          </ul>
          <div className="container-fluid mt-2">
            {activeTab === 1 ? <ProjectDetails tokenName={token_name} decimal={deciaml} presaleaddress={token} totalSupply={tokenTotalSupply} symbol={symbol} presaleinfo={presaleinfo} />: activeTab === 2 ? <Schedule/> : <Allocation PresaleContract={token} Transfer={TransferFunds} presaleBalance={presaleBalance}/>}
          </div>
        </div>
      </div>  
    </div>
    {modal && (
              <div>
                <div onClick={() => toggleModal()} className="overlay-popup">
                </div>
                <div className="modal-content wallet-select">
                    <label
                      for="category"
                      style={{
                        backgroundColor: '#161C24',
                        color: '#ffffff',
                        fontSize: '17px',
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
                      <button
                        className="metamask-btn"
                        onClick={() => ConnectWallet()}
                      >
                        <img src={WalletConnect} alt="" width={32} />{' '}
                        WalletConnect
                      </button>
                    </div>
                  </div>
              </div>
            )}
  </>
  );
}
