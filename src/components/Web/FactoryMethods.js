import { getContract, getAccount } from "./web3_methods";
import {EnvAdd} from './Addresses'
import {FactoryABI} from './ABI/Factory'


export const FactoryContract = async()=>{
    const constract = getContract(FactoryABI ,EnvAdd.FactoryContract)
    return constract
}

export const CreatePresale = async()=>{
    const Contract = await FactoryContract();
    const data = Contract.methods.createPresale().send({from: await getAccount()})
    return data;
}