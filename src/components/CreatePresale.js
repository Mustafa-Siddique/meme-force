import { useFrame } from "@react-three/fiber";
import React, { useState, useEffect } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import {SelectWallet} from './../components/Web/web3'
import Metamask from "./../Images/metamask.png";
import WalletConnect from "./../Images/walletconnect.png";
import {getAccount, loginProcess, WebUtils} from './../components/Web/web3_methods'
import {createpresale} from './Web/FactoryMethods'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function CreatePresale() {

  const notify = () => toast('Presale Created Successfully!', {
    position: "top-left",
    autoClose: 2200,
    theme: 'dark',
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    });
  const notifyError = () => toast.error('Error!', {
      position: "top-left",
      autoClose: 2200,
      theme: 'dark',
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });

  const [showCreateSale, setShowCreateSale] = useState(true);
  const [account, setAccount] = useState();
  const [modal, setModal] = useState(false);
  const [tokenAddress, setTokenAddress] = useState();
  const [swapRate, setSwapRate] = useState();
  const [lauchRate, setLaunchRate] = useState();
  const [minBuy, setMinBuy] = useState();
  const [maxBuy, setMaxBuy] = useState();
  const [softCap, setSoftCap] = useState();
  const [hardCap, setHardCap] = useState();
  const [startTime, setStartTime] = useState();
  const [endTime, setEndTime] = useState();
  const [fundLP, setFundLP] = useState();
 

  useEffect(()=>{
    if(window.account){
      setAccount(window.account)
    }
  },[])

  const ShowCreateSale = () => {
    if (!showCreateSale) {
      setShowCreateSale(true);
    } else {
      setShowCreateSale(false);
    }
  };

  const IsUndefined = (tap) => {
    if (tap === undefined) {
      return true;
    } else {
      return false;
    }
  };
  


  const CreateSale = async () => {
    if (
      IsUndefined(tokenAddress) ||
      IsUndefined(swapRate) ||
      IsUndefined(lauchRate) ||
      IsUndefined(minBuy) ||
      IsUndefined(maxBuy) ||
      IsUndefined(softCap) ||
      IsUndefined(hardCap) ||
      IsUndefined(startTime) ||
      IsUndefined(endTime) ||
      IsUndefined(fundLP)
    ) {
      alert(" Please enter vaild details");
    } else {
      console.log(
        !tokenAddress &&
          !swapRate &&
          !lauchRate &&
          !minBuy &&
          !maxBuy &&
          !softCap &&
          !hardCap &&
          !startTime &&
          !endTime &&
          !fundLP
      );
    }
  };

  const SubmitCreate = async()=> {
      let data
      const starttime = (new Date(startTime).getTime() / 1000).toFixed(0)
      const end = (new Date(endTime).getTime() / 1000).toFixed(0)

      const min = WebUtils(minBuy);
      const max = WebUtils(maxBuy);
      const soft = WebUtils(softCap);
      const hard = WebUtils(hardCap)
      const acounts = await getAccount()
      if(minBuy > maxBuy){
        alert("Minimum buy should be less than maximum buy")
      }
      else if(softCap > hardCap){
        alert("SoftCap should be less than HardCap")
      }
      else if(starttime > end){
        alert("Closing Time should be less than Starting Time")
      }
      else{
        data  =  await createpresale(tokenAddress,swapRate,min,max,soft,hard,starttime,end,fundLP);
      }

      if(data.status){
        notify();
      }
      else{
        notifyError();
      }
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
    window.account = acount
    toggleModal()
  
  }
  
  const ConnectWallet =async()=>{
    window.WC = true
    window.MM = false
    await SelectWallet();
    const acount = await getAccount();
    setAccount(acount);
    window.account = acount
    toggleModal()
  }


  
  return (
    <>
       <ToastContainer/>
       
      <section>
        <div className="presale-container">
          <div
            className="presale-content d-flex align-items-center justify-content-between"
            style={{
              border: "2px solid",
              fontSize: "17px",
              borderTopRightRadius: "10px",
              borderBottomLeftRadius: "10px",
            }}
          >
            <p
              className="presale"
              style={{ padding: "10px 15px", fontSize: "20px" }}
            >
              Create Presale
            </p>
            <AiFillCaretDown
              size={27}
              color="black"
              style={{
                border: "solid",
                background: "white",
                marginRight: "15px",
                cursor: "pointer",
              }}
              onClick={() => ShowCreateSale()}
            />
          </div>
        </div>
      </section>

      <section>
        {showCreateSale ? (
          <div
            className="showpresale-container"
            style={{ border: "1px solid", boxSizing: "border-box " }}
          >
            <p className="required" style={{ color: "red", fontSize: "14px" }}>
              Reqiured(*)
            </p>
            <div className="showpresale">
              <div className="Token-Address">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Token Address{" "}
                  <span className="required" style={{ color: "red" }}>
                    {"  "}*
                  </span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Ex:  0x609b88f5a4aBB7A55bA0c6d255C3F1b1bC7A4D76"
                  value={tokenAddress}
                  onChange={(e) => setTokenAddress(e.target.value)}
                />
              </div>
              <div className="Token-Address">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Swap Rate{" "}
                  <span className="required" style={{ color: "red" }}>
                    {"  "}*
                  </span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Ex:  123456"
                  value={swapRate}
                  onChange={(e) => setSwapRate(e.target.value)}
                />
              </div>
              {/* <div className="Token-Address">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Amount{" "}
                  <span className="required" style={{ color: "red" }}>
                    {"  "}*
                  </span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Ex:  123456"
                  value={lauchRate}
                  onChange={(e) => setLaunchRate(e.target.value)}
                />
              </div> */}
              <div className="Token-Address">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Min Buy{" "}(in BNB)
                  <span className="required" style={{ color: "red" }}>
                    {"  "}*
                  </span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Min amount to spend for buy token"
                  value={minBuy}
                  onChange={(e) => setMinBuy(e.target.value)}
                />
              </div>
              <div className="Token-Address">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Max Buy{" "}(in BNB)
                  <span className="required" style={{ color: "red" }}>
                    {"  "}*
                  </span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Max amount to spend for buy token"
                  value={maxBuy}
                  onChange={(e) => setMaxBuy(e.target.value)}
                />
              </div>
              <div className="Token-Address">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Softcap{" "}(in BNB)
                  <span className="required" style={{ color: "red" }}>
                    {"  "}*
                  </span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Ex:  2"
                  value={softCap}
                  onChange={(e) => setSoftCap(e.target.value)}
                />
              </div>
              <div className="Token-Address">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Hardcap{" "}(in BNB)
                  <span className="required" style={{ color: "red" }}>
                    {"  "}*
                  </span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Ex:  4"
                  value={hardCap}
                  onChange={(e) => setHardCap(e.target.value)}
                />
              </div>
              <div className="Token-Address">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  StartTime{" "}
                  <span className="required" style={{ color: "red" }}>
                    {"  "}*
                  </span>
                </label>
                <input
                  type="datetime-local"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="StartTime"
                  value={startTime}
                  onChange={(e) => setStartTime(e.target.value)}
                />
              </div>
              <div className="Token-Address">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  EndTime{" "}
                  <span className="required" style={{ color: "red" }}>
                    {"  "}*
                  </span>
                </label>
                <input
                  type="datetime-local"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="EndTime"
                  value={endTime}
                  onChange={(e) => setEndTime(e.target.value)}
                />
              </div>
              <div className="Token-Address">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Percent Funds To Add To LP{" "}
                  <span className="required" style={{ color: "red" }}>
                    {"  "}*
                  </span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="75%"
                  value={fundLP}
                  onChange={(e) => setFundLP(e.target.value)}
                />
              </div>
              {<button
                className="submit-presale"
                style={{
                  background: "white",
                  border: "none",
                  width: "100%",
                  marginTop: "20px",
                  height: "40px",
                }}
                onClick={()=>SubmitCreate()}
              >
                Submit
              </button>}
            </div>
          </div>
        ) : (
          ""
        )}
      </section>

      {/* <section>
        <div
          className="community-container d-flex align-items-center justify-content-between"
          style={{
            paddingTop: "20px",
            marginLeft: "100px",
            marginRight: "100px",
          }}
        >
          <div className="community-content" style={{ paddingBottom: "20px" }}>
            <h1 className="woc">Welcome to our community</h1>
          </div>
          <div
            className="community-links"
            style={{ paddingBottom: "10px", paddingTop: "30px" }}
          >
            <ul>
              <li style={{ listStyle: "none" }}>
                <a
                  className="links"
                  href="https://t.me/MemeForceOfficial"
                  target="_blank"
                  rel="noreferrer"
                >
                  Telegram
                </a>
              </li>
              <li style={{ listStyle: "none" }}>
                <a
                  className="links"
                  href="https://twitter.com/MemeForce_LP"
                  target="_blank"
                  rel="noreferrer"
                >
                  Twitter
                </a>
              </li>
              <li style={{ listStyle: "none" }}>
                <a className="links" href="/" target="_blank" rel="noreferrer">
                  Discord
                </a>
              </li>
              <li style={{ listStyle: "none" }}>
                <a
                  className="links"
                  href="/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Open Sea
                </a>
              </li>
              <li style={{ listStyle: "none" }}>
                <a className="links" href="/" target="_blank" rel="noreferrer">
                  Sandbox
                </a>
              </li>
              <li style={{ listStyle: "none" }}>
                <a className="links" href="/" target="_blank" rel="noreferrer">
                  Medium
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section> */}
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
