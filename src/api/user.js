import { contract } from "./core"

export const getUserApi = async(address) => {
    return await contract.methods.Users(address).call()
}

export const getShopAdditionApi = async(address) => {
}