import React from "react";
import {network_version} from './Web/web3_methods'
import { useEffect, useState } from 'react';

export default function ProjectDetails({tokenName,totalSupply,symbol,presaleinfo,presaleaddress,decimal}) {

  useEffect(async()=>{
      const netversion = await network_version();
      console.log(netversion)
  },[])

  const slicing = (address) => {
    const first = address.slice(0,10);
    const second = address.slice(32);
    return first + "...." + second
  }
  return (
    <div className="row">
      <div className="col">
        <table className="table text-light border">
          <thead>
            <tr>
              <th className="bg-dark" colSpan="2">
                Pool Information
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Presale Address</td>
            <a href={`https://testnet.bscscan.com/address/${presaleaddress}`} style={{color:'#ffffff'}}><td>{slicing(presaleaddress)}</td></a>
            </tr>
            <tr>
              <td>Maximum Buy</td>
              <td>{presaleinfo ? (presaleinfo._maxBuy)/10**18 : '0'} BNB</td>
            </tr>
            <tr>
              <td>Minimun Buy</td>
              <td>{presaleinfo ? presaleinfo._minBuy/10**18 : "0"} BNB</td>
            </tr>
            <tr>
              <td>SoftCap</td>
              <td>{presaleinfo ? presaleinfo._softCap/10**18 : "0"} BNB</td>
            </tr>
            <tr>
              <td>HardCap</td>
              <td>{presaleinfo ? presaleinfo._hardCap/10**18 : "0"} BNB</td>
            </tr>
            <tr>
              <td>Total Funds Raised</td>
              <td>{presaleinfo ? presaleinfo._totalRaised/10**18 : '0'} BNB</td>
            </tr>
            {presaleinfo ?  <tr>
              <td>Access Type</td>
              <td>{presaleinfo._isWhiteListEnabled ? "WhiteListed Presale" : 'Public Presale'}</td>
            </tr> : <tr>
              <td>Access Type</td>
              <td> </td>
            </tr>}
          </tbody>
        </table>
      </div>
      <div className="col">
        <table className="table text-light border">
          <thead>
            <tr>
              <th className="bg-dark" colSpan="2">
                Token Information
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Name</td>
              <td>{tokenName}&nbsp;&nbsp;<a href={`https://testnet.bscscan.com/address/${presaleinfo ?presaleinfo._token:''}`} style={{color:'#ffffff'}}>{presaleinfo ? slicing(presaleinfo._token) : ''}</a></td>
            </tr>
            <tr>
              <td>Token Symbol</td>
              <td>{symbol}</td>
            </tr>
            <tr>
              <td>Total Supply</td>
              <td>{totalSupply}</td>
            </tr>
            <tr>
              <td>Decimal</td>
              <td>{decimal}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
