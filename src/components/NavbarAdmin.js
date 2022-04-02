import React,{useState,useEffect} from "react";
import logo from "../Images/memeforce.png";
import { AiOutlineTwitter } from "react-icons/ai";
import { SiDiscord } from "react-icons/si";
import { FaTelegramPlane } from "react-icons/fa";
import { Link } from "react-router-dom";
import {SelectWallet,DisconnectWallet} from './../components/Web/web3'
import Metamask from "./../Images/metamask.png";
import WalletConnect from "./../Images/walletconnect.png";
import {getAccount, loginProcess, getChain} from './../components/Web/web3_methods'
import { getWeb3 } from "./../components/Web/web3";
import ETH from './../Images/eth.png'
import BNB from './../Images/bnb.png'
import { isMobile } from 'react-device-detect'

export default function NavbarAdmin({price}) {
  const [acount, setAccount] = useState();
  const [modal, setModal] = useState(false);
  const [ShowNetWrok, setShowNetWork] = useState(false)
  const [chainid, setChainID] = useState(0)
  

  useEffect(async()=>{
    const chainID = await getChain()
    setChainID(chainID)
    if(window.account){
      
      setAccount(window.account)
    }
  },[acount])

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


  const changeNetwork = async (chainId) => {
    if (window.ethereum) {
      const Web3 = getWeb3()
      try {
        await window.ethereum.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: Web3.utils.toHex(chainId) }],
        })
      } catch (e) {}
    }
    NetWorkPopup();
  }

  const NetWorkPopup = () => {
    setShowNetWork(!ShowNetWrok)
  }
  if (ShowNetWrok) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  const disconnectwallet = async () => {
    await DisconnectWallet()
    setAccount(undefined)
    window.localStorage.removeItem('MM')
    window.account = false
  }



  return (
    <>
    {ShowNetWrok && (
        <div>
          <div onClick={() => NetWorkPopup()} className="overlay-popup"></div>
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
            <div className="networkds">
              <div className="netowrk" onClick={() => changeNetwork(97)}>
                <img src={BNB} width={30} />
                <p>BSC TESTNET</p>
              </div>
              <div className="netowrk" onClick={() => changeNetwork(56)}>
                <img src={BNB} width={30} />
                <p>BSC MAINNET</p>
              </div>
              <div className="netowrk" onClick={() => changeNetwork(1)}>
                <img src={ETH} width={30} />
                <p>ETHEREUM MAINNET</p>
              </div>
              <div className="netowrk" onClick={() => changeNetwork(4)}>
                <img src={ETH} width={30} />
                <p>RINKEBY TESTNET</p>
              </div>
            </div>
          </div>
        </div>
      )}
      <section>
        <nav className="navbar navbar-expand-lg navbar-light bg-none">
        {!isMobile ? <div className="container-fluid">
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
                      marginTop:"-20px"
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
                    marginTop:"-20px"
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
                <li>
                  <button
                    className="nav-a active"
                    aria-current="page"
                    onClick={()=>NetWorkPopup()}
                    style={{
                      color: "white",
                      textDecoration: "none",
                      padding: "5px",
                      background: "#201F21",
                      border: "none",
                      marginTop:'-10px'
                    }}
                  >
                    Switch NetWork 
                  </button>
                </li>
              </ul>
            </div> 
          </div>: 
          
          <div className="container-fluid">
              <a className="navbar-brand" href="/">
                <img src={logo} alt="" style={{width:'70px'}} />
              </a>


              <div className="dropdown-slid">
                {acount ? <div class="dropdown admindrop" style={{marginLeft:'20px'}}>
                  <button
                    class="connectbtn dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton2"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {slicing(acount)}
                  </button>
                  <ul
                    class="dropdown-menu dropdown-menu-dark"
                    aria-labelledby="dropdownMenuButton2"
                  >
                    
                    <li className="dropdown-i" onClick={() => NetWorkPopup()}>
                      {chainid == 97 ? (
                        <span>
                          <img src={BNB} width={20} /> BSC TEST NET
                        </span>
                      ) : chainid == 56 ? (
                        <span>
                          <img src={BNB} width={20} /> BSC MAIN NET
                        </span>
                      ) : chainid == 1 ? (
                        <span>
                          <img src={ETH} width={20} /> ETHEREUM MAIN NET
                        </span>
                      ) : chainid == 4 ? (
                        <span>
                          <img src={ETH} width={20} /> RINKEBY TEST NET
                        </span>
                      ) : (
                        'SWITCH NETWORK'
                      )}
                    </li>
                    {acount ? (
                      <li
                        className="dropdown-i"
                        onClick={() => disconnectwallet()}
                      >
                        Disconnect
                      </li>
                    ) : (
                      ''
                    )}
                  </ul>
                </div> :  <button
                    class="connectbtn"
                    type="button"
                    id="dropdownMenuButton2"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    onClick={() => toggleModal()}
                  >
                    CONNECT
                  </button>}
              </div>


            </div>
          }
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
