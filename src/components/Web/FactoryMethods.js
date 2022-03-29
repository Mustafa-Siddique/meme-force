import { getContract, getAccount } from './web3_methods'
import { EnvAdd } from './Addresses'
import { FactoryABI } from './ABI/Factory'
import {TokenABI} from './ABI/Token'
const fee = 100000000000000000

export const FactoryContract = async () => {
  const constract = await getContract(FactoryABI, EnvAdd.REACT_APP_FACTORY)
  return constract
}

export const createpresale = async (tokenAddress,swapRate,minBuy,maxBuy,softCap,hardCap,startTime,endTime,fundLP) => {
  try {
      const Contract = await FactoryContract();
      console.log(Contract)
      const data = Contract.methods.createPresale(window.account,tokenAddress,swapRate,minBuy,maxBuy,softCap,hardCap,startTime,endTime,fundLP)
      .send({ from: await getAccount(),
          value: fee.toString()
         })
      return data;
    
  } catch (e) {
    console.log(e)
  }
}


export const GetSaleAddresses = async(ID) =>{
  const contract = await FactoryContract();
  const data = await contract.methods.getPresaleAddress(ID).call();
  return data; 
}

export const NumberOFPresale =async()=>{
  const contract = await FactoryContract();
  const num = await contract.methods.presalesNumber().call();
  return num;
}

//********************** */ Token Methedos *********************//

export const TransferAmountFromToken = async(address,sender,recevier,amount)=>{
  const contract = await getContract(TokenABI, address)
  const data = await contract.methods.transfer(recevier,amount).send({ from: await getAccount() });
  return data
}

export const getTokenSymbol =async(address)=>{
  const contract = await getContract(TokenABI, address)
  const data = await contract.methods.symbol().call();
  return data
}

export const TokenSupply =async(address)=>{
  const contract = await getContract(TokenABI, address)
  const data = await contract.methods.totalSupply().call();
  return data
}

export const TokenName =async(address)=>{
  const contract = await getContract(TokenABI, address)
  const data = await contract.methods.name().call();
  return data
}

export const TokenDecimals =async(address)=>{
  const contract = await getContract(TokenABI, address)
  const data = await contract.methods.decimals().call();
  return Number(data)
}
export const BalanceOfPresaleContract =async(address,presaleaddress)=>{
  const contract = await getContract(TokenABI, address)
  const balance = await contract.methods.balanceOf(presaleaddress).call();
  return balance
}