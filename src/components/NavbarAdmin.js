import React,{useState,useEffect} from "react";
import logo from "../Images/memeforce.png";
import { AiOutlineTwitter } from "react-icons/ai";
import { SiDiscord } from "react-icons/si";
import { FaTelegramPlane } from "react-icons/fa";
import { Link } from "react-router-dom";
import {SelectWallet} from './../components/Web/web3'
import Metamask from "./../Images/metamask.png";
import WalletConnect from "./../Images/walletconnect.png";
import {getAccount, loginProcess} from './../components/Web/web3_methods'

export default function NavbarAdmin() {
  const [acount, setAccount] = useState();
  const [modal, setModal] = useState(false);

  useEffect(()=>{
    if(window.account){
      setAccount(window.account)
    }
  },[window.account])

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
  const slicing = (address) => {
    const first = address.slice(0,5);
    const second = address.slice(36);
    return first + "...." + second
  }

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
                  {window.account ? <button
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
                    }}
                  >
                    {slicing(window.account)}
                  </button> : 
                  <button
                  className="nav-a active"
                  aria-current="page"
                  onClick={()=> toggleModal()}
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
                  Connect
                </button>}
                </li>
                <li>
                  <Link
                    className="nav-a active"
                    aria-current="page"
                    to="/launchpad"
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
