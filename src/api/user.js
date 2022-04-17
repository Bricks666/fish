import { contract } from "./core"

export const getUserApi = async(address) => {
    return await contract.methods.users(address).call()
}

export const getShopAdditionApi = async(address) => {
}
