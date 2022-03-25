import React,{useState} from 'react'
import { AiFillCaretDown } from "react-icons/ai";
import { SwitchToPublic, finalisePresale, ClaimOperatorFunds, CancelPresale, EditPresaleTime, RemoveToWhitelist, AddToWhitelist, ConfigurePreslae} from './Web/PresaleMethods'

export default function Allocation({PresaleContract,presaleBalance,Transfer}) {
  const [showConfig, setShowConfig] = useState(false)
  const [showAddtowhitelist, setshowAddtowhitelist] = useState(false)
  const [showtiming, setshowtiming] = useState(false)
  const [removeWhitelist, setRemovewhitelist] = useState(false)
  const [enablewhitelisting, setEnabledwhitelisting] = useState(false)
  const [removefromWhitelist, setRemovefromWhitelist] = useState()
  const [makewhitelist, setMakewhitelist] = useState()
  const [start,setStart] = useState()
  const [end, setEnd] = useState()
  const [logo, setLogo] = useState()
  const [website, setWebsite] = useState()
  const [raddit, setRaddit] = useState()
  const [github, setGithub] = useState()
  const [twitter, setTwitter] = useState()
  const [Telegram, setTelegram] = useState()
  const [instagram, setInstagram] = useState()
  
  const configshow=()=>{
    setShowConfig(!showConfig)
  }
  const whitelisteshow=()=>{
    setshowAddtowhitelist(!showAddtowhitelist)
  }
  const timeing=()=>{
    setshowtiming(!showtiming)
  }
  const removewhitelist=()=>{
    setRemovewhitelist(!removeWhitelist)
  }

  const configuringPresala =async()=>{
    await ConfigurePreslae(PresaleContract,true,logo,Telegram,website,twitter,raddit,github,instagram)
  }
  const AddWhitelist =async()=>{
      await AddToWhitelist(PresaleContract,makewhitelist);
  }
  const REmoveWhitelist =async()=>{
    await RemoveToWhitelist(PresaleContract,removefromWhitelist);
  }
  const ChangeTiming =async()=>{
    const starttime = (new Date(start).getTime() / 1000).toFixed(0)
    const endtime = (new Date(end).getTime() / 1000).toFixed(0)
    await EditPresaleTime(PresaleContract,starttime,endtime);
  }
  const CancelSale =async()=>{
    await CancelPresale(PresaleContract);
  }

  const ClaimFundsofOperator =async()=>{
  await ClaimOperatorFunds(PresaleContract);
  }

  const FinalisedSale =async()=>{
    await finalisePresale(PresaleContract,true)
  }

  const SwitchtoPublic =async()=>{
    await SwitchToPublic(PresaleContract,true)
  }
 

  return (
    <div className='manage-presale'>
       {presaleBalance == 0 ?<div className='configure-presale'>
          <div className='dowpdown-header'>
             <h5>Transfer Fund to Presale</h5>
             <button className='submit-btn' onClick={()=>Transfer()}>Submit</button>
          </div>
        </div>:''}
        <div className='configure-presale'>
          <div className='dowpdown-header'>
             <h5>Configure Presale</h5>
             <AiFillCaretDown size={30} onClick={()=>configshow()}/>
          </div>
         {showConfig? <div className='configure-sale'>
            <div>
              <label for="vehicle1 ml-1"> Enabled Whitelist</label>
              <input type="checkbox" class="messageCheckbox" id="vehicle1" name="vehicle1" value="3" />
            </div>
            <input placeholder='Logo URL' value={logo} onChange={(e)=> setLogo(e.target.value)}/>
            <input placeholder='Telegram Link' value={Telegram} onChange={(e)=> setTelegram(e.target.value)}/>
            <input placeholder='Twitter Link' value={twitter} onChange={(e)=> setTwitter(e.target.value)}/>
            <input placeholder='Website' value={website} onChange={(e)=> setWebsite(e.target.value)}/>
            <input placeholder='Github' value={github} onChange={(e)=> setGithub(e.target.value)}/>
            <input placeholder='Instagram Link' value={instagram} onChange={(e)=> setInstagram(e.target.value)}/>
            <input placeholder='Reddit Link' value={raddit} onChange={(e)=> setRaddit(e.target.value)}/>
            <button className='submit-btn' onClick={()=>configuringPresala()} >Submit</button>
          </div>:''}
        </div>
        <div className='configure-presale'>
          <div className='dowpdown-header'>
             <h5>Add To Whitelist </h5>
             <AiFillCaretDown size={30} onClick={()=>whitelisteshow()}/>
          </div>
         {showAddtowhitelist? <div className='configure-sale'>
            <input placeholder='[Wallet Address,]' value={makewhitelist} onChange={(e)=> setMakewhitelist(e.target.value)}/>
            <button className='submit-btn' onClick={()=>AddWhitelist()}>Submit</button>
          </div>:''}
        </div>
        <div className='configure-presale'>
          <div className='dowpdown-header'>
             <h5>Remove To Whitelist </h5>
             <AiFillCaretDown size={30} onClick={()=>removewhitelist()}/>
          </div>
         {removeWhitelist? <div className='configure-sale'>
            <input placeholder='Wallet Address' value={removefromWhitelist} onChange={(e)=> setRemovefromWhitelist(e.target.value)}/>
            <button className='submit-btn' onClick={()=>REmoveWhitelist()}>Submit</button>
          </div>:''}
        </div>
        <div className='configure-presale'>
          <div className='dowpdown-header'>
             <h5>Edit Presale Timing</h5>
             <AiFillCaretDown size={30} onClick={()=>timeing()}/>
          </div>
         {showtiming? <div className='configure-sale'>
            <input type="datetime-local" placeholder='New Start Time' value={start} onChange={(e)=> setStart(e.target.value)}/>
            <input type="datetime-local" placeholder='New End Time' value={end} onChange={(e)=> setEnd(e.target.value)}/>
            <button className='submit-btn' onClick={()=>ChangeTiming()}>Submit</button>
          </div>:''}
        </div>
        <div className='configure-presale'>
          <div className='dowpdown-header'>
             <h5>Cancel Presale</h5>
             <button className='submit-btn' onClick={()=>CancelSale()}>Submit</button>
          </div>
        </div>
        <div className='configure-presale'>
          <div className='dowpdown-header'>
             <h5>Claim Operator Funds</h5>
             <button className='submit-btn' onClick={()=>ClaimFundsofOperator()}>Submit</button>
          </div>
        </div>
        <div className='configure-presale'>
          <div className='dowpdown-header'>
             <h5>Finalise Presale</h5>
             <button className='submit-btn' onClick={()=>FinalisedSale()}>Submit</button>
          </div>
          <p>Note: After you Finalise the presale people will be able to claim their token</p>
        </div>
        <div className='configure-presale'>
          <div className='dowpdown-header'>
             <h5>Switch To Public Presale</h5>
             <button className='submit-btn' onClick={()=>SwitchtoPublic()}>Submit</button>
          </div>
        </div>

    </div>
  )
}
