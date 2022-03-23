import { getContract, getAccount } from './web3_methods'
import { EnvAdd } from './Addresses'
import { FactoryABI } from './ABI/Factory'
import {TokenABI} from './ABI/Token'
const fee = 100000000000000000

export const FactoryContract = async () => {
  const constract = getContract(FactoryABI, EnvAdd.REACT_APP_FACTORY)
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

export const TransferAmount =async(address,amount)=>{
  const contract = getContract(TokenABI, address)
  const data = contract.methods.transferFrom(6000000000000000000n,EnvAdd.REACT_APP_FACTORY).send({ from: await getAccount() });
  return data
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