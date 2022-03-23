import PresaleABI from './ABI/Presale'
import { getContract } from './web3_methods'


export const PresaleContract =async(Address)=>{
    const contract = await getContract(PresaleABI, Address)
    return contract;
}

export const PresaleDetails = async(address)=>{
    const contract = await getContract(PresaleABI, address)
}