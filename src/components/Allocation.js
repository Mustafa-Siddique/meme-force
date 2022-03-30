import React, { useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import {
  SwitchToPublic,
  finalisePresale,
  ClaimOperatorFunds,
  CancelPresale,
  EditPresaleTime,
  RemoveToWhitelist,
  AddToWhitelist,
  ConfigurePreslae,
  setVesting,
  transfertoPayee
} from "./Web/PresaleMethods";

export default function Allocation({
  PresaleContract,
  presaleBalance,
  Transfer,
  payee,
  user
}) {
  const [showConfig, setShowConfig] = useState(false);
  const [showAddtowhitelist, setshowAddtowhitelist] = useState(false);
  const [showtiming, setshowtiming] = useState(false);
  const [removeWhitelist, setRemovewhitelist] = useState(false);
  const [enablewhitelisting, setEnabledwhitelisting] = useState("YES");
  const [removefromWhitelist, setRemovefromWhitelist] = useState();
  const [makewhitelist, setMakewhitelist] = useState();
  const [start, setStart] = useState();
  const [end, setEnd] = useState();
  const [logo, setLogo] = useState();
  const [website, setWebsite] = useState();
  const [raddit, setRaddit] = useState();
  const [github, setGithub] = useState();
  const [twitter, setTwitter] = useState();
  const [Telegram, setTelegram] = useState();
  const [instagram, setInstagram] = useState();
  const [showvesting, setShowvesting] = useState(false)
  const [daypervest, setDaypervest] = useState(0)
  const [percentagevest, setPrecentagevest] = useState(0)
  const [initialclaimvest, setInitialclaimvest] = useState(0)
  const [artical, setArtical] = useState('')
  const [fb,setFB] = useState('')
  const configshow = () => {
    setShowConfig(!showConfig);
  };
  const whitelisteshow = () => {
    setshowAddtowhitelist(!showAddtowhitelist);
  };
  const VestingShow = () => {
    setShowvesting(!showvesting);
  };
  const timeing = () => {
    setshowtiming(!showtiming);
  };
  const removewhitelist = () => {
    setRemovewhitelist(!removeWhitelist);
  };

  const configuringPresala = async () => {
   let enable
    if(enablewhitelisting == 'YES'){
      enable = true
    }
    else{
      enable = false
    }
    await ConfigurePreslae(
      PresaleContract,
      enable,
      logo,
      artical,
      Telegram,
      website,
      twitter,
      raddit,
      github,
      instagram,
      fb
    );
  };
  const AddWhitelist = async () => {
    let add = JSON.parse("[" + makewhitelist + "]");
    console.log(typeof add);
    console.log(add);
    await AddToWhitelist(PresaleContract, add);
  };
  const REmoveWhitelist = async () => {
    await RemoveToWhitelist(PresaleContract, removefromWhitelist);
  };
  const ChangeTiming = async () => {
    const starttime = (new Date(start).getTime() / 1000).toFixed(0);
    const endtime = (new Date(end).getTime() / 1000).toFixed(0);
    await EditPresaleTime(PresaleContract, starttime, endtime);
  };
  const CancelSale = async () => {
    await CancelPresale(PresaleContract);
  };

  const ClaimFundsofOperator = async () => {
    await ClaimOperatorFunds(PresaleContract);
  };

  const FinalisedSale = async () => {
    await finalisePresale(PresaleContract, true);
  };

  const SwitchtoPublic = async () => {
    await SwitchToPublic(PresaleContract, true);
  };
  const setvesting = async () => {
    await setVesting(PresaleContract, daypervest, percentagevest, initialclaimvest);
  };

  const Fundtopayee = async ()=>{
      await  transfertoPayee(PresaleContract,payee);
  }
  return (
    <div className="manage-presale">
      {presaleBalance == 0 ? (
        <div className="configure-presale">
          <div className="dowpdown-header">
            <h5>Transfer Fund to Presale</h5>
            <button className="submit-btn" onClick={() => Transfer()}>
              Submit
            </button>
          </div>
        </div>
      ) : (
        ""
      )}
      <div className="configure-presale">
        <div className="dowpdown-header">
          <h5>Configure Presale</h5>
          <AiFillCaretDown size={30} onClick={() => configshow()} />
        </div>
        {showConfig ? (
          <div className="configure-sale">
            <div>
              <label for="vehicle1 ml-1">Enabled Whitelist &nbsp;&nbsp;&nbsp;</label>
              <select id="cars" value={enablewhitelisting}
              onChange={(e) => setEnabledwhitelisting(e.target.value)}>
                <option value="YES"> YES</option>
                <option value="NO"> NO</option>
              </select>
            </div>
            <input
              placeholder="Logo URL"
              value={logo}
              onChange={(e) => setLogo(e.target.value)}
            />
            <input
              placeholder="Discription"
              value={artical}
              onChange={(e) => setArtical(e.target.value)}
            />
            <input
              placeholder="Telegram Link"
              value={Telegram}
              onChange={(e) => setTelegram(e.target.value)}
            />
            <input
              placeholder="Twitter Link"
              value={twitter}
              onChange={(e) => setTwitter(e.target.value)}
            />
            <input
              placeholder="Website"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
            />
            <input
              placeholder="Github"
              value={github}
              onChange={(e) => setGithub(e.target.value)}
            />
            <input
              placeholder="Instagram Link"
              value={instagram}
              onChange={(e) => setInstagram(e.target.value)}
            />
            <input
              placeholder="Reddit Link"
              value={raddit}
              onChange={(e) => setRaddit(e.target.value)}
            />
            <input
              placeholder="FaceBook Link"
              value={fb}
              onChange={(e) => setFB(e.target.value)}
            />
            <button className="submit-btn" onClick={() => configuringPresala()}>
              Submit
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="configure-presale">
        <div className="dowpdown-header">
          <h5>Add To Whitelist </h5>
          <AiFillCaretDown size={30} onClick={() => whitelisteshow()} />
        </div>
        {showAddtowhitelist ? (
          <div className="configure-sale">
            <input
              placeholder='"wallet address","wallet address",..."wallet address"'
              value={makewhitelist}
              onChange={(e) => setMakewhitelist(e.target.value)}
            />
            <button className="submit-btn" onClick={() => AddWhitelist()}>
              Submit
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="configure-presale">
        <div className="dowpdown-header">
          <h5>Remove To Whitelist </h5>
          <AiFillCaretDown size={30} onClick={() => removewhitelist()} />
        </div>
        {removeWhitelist ? (
          <div className="configure-sale">
            <input
              placeholder="Wallet Address"
              value={removefromWhitelist}
              onChange={(e) => setRemovefromWhitelist(e.target.value)}
            />
            <button className="submit-btn" onClick={() => REmoveWhitelist()}>
              Submit
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="configure-presale">
        <div className="dowpdown-header">
          <h5>Edit Presale Timing</h5>
          <AiFillCaretDown size={30} onClick={() => timeing()} />
        </div>
        {showtiming ? (
          <div className="configure-sale">
            <input
              type="datetime-local"
              placeholder="New Start Time"
              value={start}
              onChange={(e) => setStart(e.target.value)}
            />
            <input
              type="datetime-local"
              placeholder="New End Time"
              value={end}
              onChange={(e) => setEnd(e.target.value)}
            />
            <button className="submit-btn" onClick={() => ChangeTiming()}>
              Submit
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
    <div className="configure-presale">
        <div className="dowpdown-header">
          <h5>Set Vesting</h5>
          <AiFillCaretDown size={30} onClick={() => VestingShow()} />
        </div>
        {showvesting ? (
          <div className="configure-sale">
            <input
              type="number"
              placeholder="Day per Vest"
              value={daypervest}
              onChange={(e) => setDaypervest(e.target.value)}
            />
            <input
              type="number"
              placeholder="Percentage per Vest"
              value={percentagevest}
              onChange={(e) => setPrecentagevest(e.target.value)}
            />
             <input
              type="number"
              placeholder="Initialclaim per Vest"
              value={initialclaimvest}
              onChange={(e) => setInitialclaimvest(e.target.value)}
            />
            <button className="submit-btn" onClick={() => setvesting()}>
              Submit
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="configure-presale">
        <div className="dowpdown-header">
          <h5>Cancel Presale</h5>
          <button className="submit-btn" onClick={() => CancelSale()}>
            Submit
          </button>
        </div>
      </div>
      <div className="configure-presale">
        <div className="dowpdown-header">
          <h5>Claim Operator Funds</h5>
          <button className="submit-btn" onClick={() => ClaimFundsofOperator()}>
            Submit
          </button>
        </div>
      </div>
      {payee == user ?<div className="configure-presale">
        <div className="dowpdown-header">
          <h5>Transfer Funds to Payee</h5>
          <button className="submit-btn" onClick={() => Fundtopayee()}>
            Submit
          </button>
        </div>
      </div> :''}
      <div className="configure-presale">
        <div className="dowpdown-header">
          <h5>Finalise Presale</h5>
          <button className="submit-btn" onClick={() => FinalisedSale()}>
            Submit
          </button>
        </div>
        <p>
          Note: After you Finalise the presale people will be able to claim
          their token
        </p>
      </div>
      <div className="configure-presale">
        <div className="dowpdown-header">
          <h5>Switch To Public Presale</h5>
          <button className="submit-btn" onClick={() => SwitchtoPublic()}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
